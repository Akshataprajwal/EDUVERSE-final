// Test Certificate Generation
// Run this file to test if certificate generation works
// Usage: node test-certificate-generation.js

import generateCertificatePDF from './src/utils/certificateGenerator.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Certificate Generation...\n');

const testCertificateData = {
    certificateId: 'TEST-' + Date.now(),
    studentName: 'John Doe',
    courseName: '2-Wheeler Driving Course',
    instructorName: 'EDUVERSE Instructor',
    completionDate: new Date(),
    issueDate: new Date(),
    grade: 'A+',
    finalScore: 95,
    verificationCode: 'VERIFY-' + Math.random().toString(36).substring(7).toUpperCase()
};

console.log('📝 Certificate Data:');
console.log(JSON.stringify(testCertificateData, null, 2));
console.log('\n🔄 Generating PDF...\n');

generateCertificatePDF(testCertificateData)
    .then(pdfPath => {
        console.log('✅ SUCCESS!');
        console.log('📄 PDF created at:', pdfPath);
        console.log('\n✨ Certificate generation is working correctly!');
        console.log('📁 Check the file at:', pdfPath);
    })
    .catch(error => {
        console.error('❌ ERROR!');
        console.error('Error message:', error.message);
        console.error('Stack trace:', error.stack);
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Check if pdfkit is installed: npm install pdfkit');
        console.log('2. Check if uploads/certificates directory exists');
        console.log('3. Check file permissions');
    });
