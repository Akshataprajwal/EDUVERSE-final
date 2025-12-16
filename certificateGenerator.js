import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate a certificate PDF
 * @param {Object} certificateData - Certificate information
 * @returns {Promise<string>} - Path to generated PDF
 */
export const generateCertificatePDF = async (certificateData) => {
    const {
        certificateId,
        studentName,
        courseName,
        instructorName,
        completionDate,
        issueDate,
        grade,
        finalScore,
        verificationCode
    } = certificateData;

    // Create certificates directory if it doesn't exist
    const certificatesDir = path.join(__dirname, '../../uploads/certificates');
    if (!fs.existsSync(certificatesDir)) {
        fs.mkdirSync(certificatesDir, { recursive: true });
    }

    const pdfPath = path.join(certificatesDir, `${certificateId}.pdf`);

    return new Promise((resolve, reject) => {
        try {
            // Create a document
            const doc = new PDFDocument({
                size: 'A4',
                layout: 'landscape',
                margins: {
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50
                }
            });

            // Pipe to file
            const stream = fs.createWriteStream(pdfPath);
            doc.pipe(stream);

            // Add border
            doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60)
                .lineWidth(3)
                .strokeColor('#1e40af')
                .stroke();

            doc.rect(40, 40, doc.page.width - 80, doc.page.height - 80)
                .lineWidth(1)
                .strokeColor('#3b82f6')
                .stroke();

            // Add decorative corner elements
            const cornerSize = 30;
            // Top-left corner
            doc.moveTo(50, 50)
                .lineTo(50 + cornerSize, 50)
                .moveTo(50, 50)
                .lineTo(50, 50 + cornerSize)
                .lineWidth(2)
                .strokeColor('#f59e0b')
                .stroke();

            // Top-right corner
            doc.moveTo(doc.page.width - 50, 50)
                .lineTo(doc.page.width - 50 - cornerSize, 50)
                .moveTo(doc.page.width - 50, 50)
                .lineTo(doc.page.width - 50, 50 + cornerSize)
                .lineWidth(2)
                .strokeColor('#f59e0b')
                .stroke();

            // Bottom-left corner
            doc.moveTo(50, doc.page.height - 50)
                .lineTo(50 + cornerSize, doc.page.height - 50)
                .moveTo(50, doc.page.height - 50)
                .lineTo(50, doc.page.height - 50 - cornerSize)
                .lineWidth(2)
                .strokeColor('#f59e0b')
                .stroke();

            // Bottom-right corner
            doc.moveTo(doc.page.width - 50, doc.page.height - 50)
                .lineTo(doc.page.width - 50 - cornerSize, doc.page.height - 50)
                .moveTo(doc.page.width - 50, doc.page.height - 50)
                .lineTo(doc.page.width - 50, doc.page.height - 50 - cornerSize)
                .lineWidth(2)
                .strokeColor('#f59e0b')
                .stroke();

            // Add logo/title
            doc.fontSize(36)
                .fillColor('#1e40af')
                .font('Helvetica-Bold')
                .text('EDUVERSE', 0, 80, {
                    align: 'center'
                });

            doc.fontSize(14)
                .fillColor('#6b7280')
                .font('Helvetica')
                .text('Professional Driving School', 0, 125, {
                    align: 'center'
                });

            // Certificate title
            doc.fontSize(28)
                .fillColor('#1f2937')
                .font('Helvetica-Bold')
                .text('CERTIFICATE OF COMPLETION', 0, 170, {
                    align: 'center'
                });

            // Decorative line
            doc.moveTo(200, 210)
                .lineTo(doc.page.width - 200, 210)
                .lineWidth(2)
                .strokeColor('#3b82f6')
                .stroke();

            // "This is to certify that"
            doc.fontSize(14)
                .fillColor('#4b5563')
                .font('Helvetica')
                .text('This is to certify that', 0, 240, {
                    align: 'center'
                });

            // Student name
            doc.fontSize(32)
                .fillColor('#1e40af')
                .font('Helvetica-Bold')
                .text(studentName, 0, 270, {
                    align: 'center'
                });

            // Completion text
            doc.fontSize(14)
                .fillColor('#4b5563')
                .font('Helvetica')
                .text('has successfully completed the course', 0, 315, {
                    align: 'center'
                });

            // Course name
            doc.fontSize(20)
                .fillColor('#1f2937')
                .font('Helvetica-Bold')
                .text(courseName, 0, 345, {
                    align: 'center'
                });

            // Score and grade
            doc.fontSize(14)
                .fillColor('#4b5563')
                .font('Helvetica')
                .text(`with a score of ${finalScore}% (Grade: ${grade})`, 0, 380, {
                    align: 'center'
                });

            // Completion date
            const formattedCompletionDate = new Date(completionDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            doc.fontSize(12)
                .fillColor('#6b7280')
                .font('Helvetica')
                .text(`Completed on: ${formattedCompletionDate}`, 0, 415, {
                    align: 'center'
                });

            // Instructor signature section
            const signatureY = 470;
            const leftX = 150;
            const rightX = doc.page.width - 250;

            // Left side - Issue date
            const formattedIssueDate = new Date(issueDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            doc.fontSize(10)
                .fillColor('#4b5563')
                .font('Helvetica')
                .text(formattedIssueDate, leftX, signatureY, {
                    width: 200,
                    align: 'center'
                });

            doc.moveTo(leftX, signatureY - 5)
                .lineTo(leftX + 200, signatureY - 5)
                .lineWidth(1)
                .strokeColor('#9ca3af')
                .stroke();

            doc.fontSize(9)
                .fillColor('#6b7280')
                .text('Date of Issue', leftX, signatureY + 15, {
                    width: 200,
                    align: 'center'
                });

            // Right side - Instructor
            doc.fontSize(12)
                .fillColor('#1e40af')
                .font('Helvetica-Bold')
                .text(instructorName, rightX, signatureY, {
                    width: 200,
                    align: 'center'
                });

            doc.moveTo(rightX, signatureY - 5)
                .lineTo(rightX + 200, signatureY - 5)
                .lineWidth(1)
                .strokeColor('#9ca3af')
                .stroke();

            doc.fontSize(9)
                .fillColor('#6b7280')
                .font('Helvetica')
                .text('Authorized Instructor', rightX, signatureY + 15, {
                    width: 200,
                    align: 'center'
                });

            // Footer with certificate ID and verification code
            doc.fontSize(8)
                .fillColor('#9ca3af')
                .font('Helvetica')
                .text(`Certificate ID: ${certificateId}`, 60, doc.page.height - 70, {
                    align: 'left'
                });

            doc.text(`Verification Code: ${verificationCode}`, 60, doc.page.height - 55, {
                align: 'left'
            });

            doc.text('Verify at: www.eduverse.com/verify', doc.page.width - 260, doc.page.height - 70, {
                align: 'right',
                width: 200
            });

            // Finalize PDF
            doc.end();

            stream.on('finish', () => {
                resolve(pdfPath);
            });

            stream.on('error', (error) => {
                reject(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export default generateCertificatePDF;
