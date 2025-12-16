import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

connectDB();

const enrollStudent = async () => {
    try {
        console.log('🎓 Enrolling student in course...');

        // Find student
        const student = await User.findOne({ email: 'student@eduverse.com' });
        if (!student) {
            console.log('❌ Student not found');
            process.exit(1);
        }
        console.log(`👨‍🎓 Student: ${student.name}`);

        // Find the driving course
        const course = await Course.findOne({ courseTitle: /Complete Driving Mastery/i });
        if (!course) {
            console.log('❌ Course not found');
            process.exit(1);
        }
        console.log(`📚 Course: ${course.courseTitle}`);

        // Check if already enrolled
        const existingEnrollment = await Enrollment.findOne({
            student: student._id,
            course: course._id
        });

        if (existingEnrollment) {
            console.log('✅ Student is already enrolled in this course!');
            console.log(`   Enrollment ID: ${existingEnrollment._id}`);
            console.log(`   Status: ${existingEnrollment.status}`);
        } else {
            // Create enrollment
            const enrollment = await Enrollment.create({
                student: student._id,
                course: course._id,
                status: 'active',
                enrollmentDate: new Date()
            });

            console.log('✅ Student enrolled successfully!');
            console.log(`   Enrollment ID: ${enrollment._id}`);
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

enrollStudent();
