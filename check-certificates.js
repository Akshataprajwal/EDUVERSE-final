// DIAGNOSTIC SCRIPT - Run this to check certificate status
// Usage: node check-certificates.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Certificate from './src/models/Certificate.js';
import fs from 'fs';
import path from 'path';

dotenv.config();

const checkCertificates = async () => {
    try {
        console.log('\n🔍 CERTIFICATE DIAGNOSTIC TOOL\n');
        console.log('=====================================\n');

        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB\n');

        // Check certificates in database
        console.log('Checking certificates in database...');
        const certificates = await Certificate.find()
            .populate('student', 'name email')
            .populate('course', 'courseTitle')
            .limit(10);

        console.log(`Found ${certificates.length} certificates\n`);

        if (certificates.length === 0) {
            console.log('❌ NO CERTIFICATES FOUND IN DATABASE');
            console.log('\nTo fix this:');
            console.log('1. Complete a course as a student');
            console.log('2. Have an admin generate a certificate');
            console.log('3. Or use the seed script to create sample data\n');
        } else {
            console.log('Certificates found:');
            certificates.forEach((cert, index) => {
                console.log(`\n${index + 1}. Certificate ID: ${cert.certificateId}`);
                console.log(`   Student: ${cert.student?.name || 'N/A'}`);
                console.log(`   Course: ${cert.course?.courseTitle || 'N/A'}`);
                console.log(`   Grade: ${cert.grade}`);
                console.log(`   Score: ${cert.finalScore}`);
                console.log(`   PDF URL: ${cert.pdfUrl || 'Not set'}`);
                console.log(`   MongoDB ID: ${cert._id}`);
            });
        }

        // Check PDF files
        console.log('\n\nChecking PDF files on disk...');
        const certificatesDir = path.join(process.cwd(), 'uploads', 'certificates');

        if (!fs.existsSync(certificatesDir)) {
            console.log('❌ Certificates directory does not exist');
            console.log(`   Expected: ${certificatesDir}`);
            console.log('\nCreating directory...');
            fs.mkdirSync(certificatesDir, { recursive: true });
            console.log('✅ Directory created');
        } else {
            console.log('✅ Certificates directory exists');
            console.log(`   Location: ${certificatesDir}`);

            const files = fs.readdirSync(certificatesDir);
            console.log(`\nFound ${files.length} PDF files:`);

            if (files.length === 0) {
                console.log('❌ No PDF files found');
            } else {
                files.forEach((file, index) => {
                    const filePath = path.join(certificatesDir, file);
                    const stats = fs.statSync(filePath);
                    console.log(`${index + 1}. ${file} (${stats.size} bytes)`);
                });
            }
        }

        console.log('\n=====================================');
        console.log('DIAGNOSIS COMPLETE\n');

        // Summary
        console.log('SUMMARY:');
        console.log(`- Certificates in DB: ${certificates.length}`);
        console.log(`- PDF files on disk: ${fs.existsSync(certificatesDir) ? fs.readdirSync(certificatesDir).length : 0}`);

        if (certificates.length === 0) {
            console.log('\n⚠️  ACTION REQUIRED: Generate certificates first!');
        } else if (!fs.existsSync(certificatesDir) || fs.readdirSync(certificatesDir).length === 0) {
            console.log('\n⚠️  PDFs will be generated on first download');
        } else {
            console.log('\n✅ Everything looks good!');
        }

        console.log('\n');

    } catch (error) {
        console.error('❌ ERROR:', error.message);
        console.error(error.stack);
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

checkCertificates();
