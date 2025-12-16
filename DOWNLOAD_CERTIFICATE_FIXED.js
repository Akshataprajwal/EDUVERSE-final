// SIMPLE CERTIFICATE DOWNLOAD - BULLETPROOF VERSION
// Copy this function to replace the downloadCertificate function in certificateController.js

export const downloadCertificate = async (req, res) => {
    console.log('\n========================================');
    console.log('CERTIFICATE DOWNLOAD REQUEST');
    console.log('========================================');
    console.log('Certificate ID:', req.params.id);
    console.log('User ID:', req.user?.id);
    console.log('User Role:', req.user?.role);
    console.log('========================================\n');

    try {
        // Step 1: Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            console.log('❌ Invalid ObjectId format');
            return res.status(400).json({
                success: false,
                message: 'Invalid certificate ID format'
            });
        }
        console.log('✅ ObjectId is valid');

        // Step 2: Find certificate
        console.log('Fetching certificate from database...');
        const certificate = await Certificate.findById(req.params.id)
            .populate('student', 'name email')
            .populate('course', 'courseTitle')
            .populate('issuedBy', 'name');

        if (!certificate) {
            console.log('❌ Certificate not found in database');
            return res.status(404).json({
                success: false,
                message: 'Certificate not found'
            });
        }
        console.log('✅ Certificate found');
        console.log('   Student:', certificate.student?.name);
        console.log('   Course:', certificate.course?.courseTitle);
        console.log('   Certificate ID:', certificate.certificateId);

        // Step 3: Authorization check
        if (req.user.role === 'student') {
            const studentId = certificate.student?._id?.toString();
            const userId = req.user.id;

            if (studentId !== userId) {
                console.log('❌ Unauthorized access');
                console.log('   Student ID:', studentId);
                console.log('   User ID:', userId);
                return res.status(403).json({
                    success: false,
                    message: 'Not authorized to download this certificate'
                });
            }
        }
        console.log('✅ Authorization passed');

        // Step 4: Construct PDF path
        const certificatesDir = path.join(process.cwd(), 'uploads', 'certificates');
        const pdfFilename = `${certificate.certificateId}.pdf`;
        const pdfPath = path.join(certificatesDir, pdfFilename);

        console.log('PDF Path:', pdfPath);

        // Step 5: Ensure directory exists
        if (!fs.existsSync(certificatesDir)) {
            console.log('Creating certificates directory...');
            fs.mkdirSync(certificatesDir, { recursive: true });
            console.log('✅ Directory created');
        }

        // Step 6: Check if PDF exists
        const pdfExists = fs.existsSync(pdfPath);
        console.log('PDF exists:', pdfExists);

        // Step 7: Generate PDF if needed
        if (!pdfExists) {
            console.log('Generating PDF...');

            try {
                const courseWithInstructor = await Course.findById(certificate.course._id)
                    .populate('instructorAssigned', 'name');

                const certificateData = {
                    certificateId: certificate.certificateId,
                    studentName: certificate.student?.name || 'Student',
                    courseName: certificate.course?.courseTitle || 'Course',
                    instructorName: courseWithInstructor?.instructorAssigned?.name ||
                        certificate.issuedBy?.name ||
                        'EDUVERSE Instructor',
                    completionDate: certificate.completionDate || new Date(),
                    issueDate: certificate.issueDate || new Date(),
                    grade: certificate.grade || 'Pass',
                    finalScore: certificate.finalScore || 100,
                    verificationCode: certificate.verificationCode ||
                        'VERIFY-' + Math.random().toString(36).substring(7).toUpperCase()
                };

                console.log('Certificate data:', JSON.stringify(certificateData, null, 2));

                await generateCertificatePDF(certificateData);
                console.log('✅ PDF generated successfully');

            } catch (genError) {
                console.error('❌ PDF GENERATION FAILED');
                console.error('Error:', genError.message);
                console.error('Stack:', genError.stack);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to generate PDF: ' + genError.message
                });
            }
        }

        // Step 8: Verify PDF exists
        if (!fs.existsSync(pdfPath)) {
            console.error('❌ PDF DOES NOT EXIST after generation');
            return res.status(500).json({
                success: false,
                message: 'Certificate PDF could not be created'
            });
        }
        console.log('✅ PDF file exists');

        // Step 9: Check file size
        const stats = fs.statSync(pdfPath);
        console.log('PDF file size:', stats.size, 'bytes');

        if (stats.size === 0) {
            console.error('❌ PDF file is EMPTY');
            return res.status(500).json({
                success: false,
                message: 'Certificate PDF is corrupted (empty file)'
            });
        }
        console.log('✅ PDF file is valid');

        // Step 10: Prepare filename
        const downloadFilename = `Certificate_${certificate.student?.name || 'Student'}_${certificate.course?.courseTitle || 'Course'}.pdf`
            .replace(/[^a-zA-Z0-9._-]/g, '_');

        console.log('Download filename:', downloadFilename);

        // Step 11: Send file
        console.log('Sending file to client...');
        res.download(pdfPath, downloadFilename, (err) => {
            if (err) {
                console.error('❌ ERROR SENDING FILE');
                console.error('Error:', err.message);
                console.error('Stack:', err.stack);

                if (!res.headersSent) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error sending file: ' + err.message
                    });
                }
            } else {
                console.log('✅ SUCCESS! Certificate downloaded');
                console.log('========================================\n');
            }
        });

    } catch (error) {
        console.error('❌ UNEXPECTED ERROR');
        console.error('Error:', error.message);
        console.error('Stack:', error.stack);
        console.error('========================================\n');

        if (!res.headersSent) {
            return res.status(500).json({
                success: false,
                message: 'Server error: ' + error.message
            });
        }
    }
};
