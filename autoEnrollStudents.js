import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';
import Progress from '../models/Progress.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Connect to database
connectDB();

const autoEnrollStudents = async () => {
    try {
        console.log('🎓 Auto-enrolling students in all courses...\n');

        // Get all students
        const students = await User.find({ role: 'student' });
        console.log(`Found ${students.length} students`);

        // Get all courses
        const courses = await Course.find({ isActive: true });
        console.log(`Found ${courses.length} active courses\n`);

        if (students.length === 0) {
            console.log('⚠️  No students found. Creating demo student...');
            const demoStudent = await User.create({
                name: 'Demo Student',
                email: 'student@eduverse.com',
                password: 'Student@123',
                role: 'student',
                phone: '1234567890',
                isActive: true
            });
            students.push(demoStudent);
            console.log('✅ Demo student created\n');
        }

        let enrollmentCount = 0;

        for (const student of students) {
            console.log(`\n👤 Processing student: ${student.name} (${student.email})`);

            for (const course of courses) {
                // Check if already enrolled
                const existingEnrollment = await Enrollment.findOne({
                    student: student._id,
                    course: course._id
                });

                if (existingEnrollment) {
                    console.log(`   ⏭️  Already enrolled in: ${course.courseTitle}`);
                    continue;
                }

                // Create enrollment
                await Enrollment.create({
                    student: student._id,
                    course: course._id,
                    amountPaid: course.price,
                    paymentStatus: 'paid', // Auto-mark as paid for demo
                    enrolledBy: student._id,
                    status: 'active'
                });

                // Create progress record
                const existingProgress = await Progress.findOne({
                    student: student._id,
                    course: course._id
                });

                if (!existingProgress) {
                    await Progress.create({
                        student: student._id,
                        course: course._id,
                        courseStatus: 'Not Started',
                        lessonsCompleted: [],
                        totalPercentage: 0
                    });
                }

                // Add student to course if not already there
                if (!course.enrolledStudents.includes(student._id)) {
                    course.enrolledStudents.push(student._id);
                    await course.save();
                }

                // Add course to user's enrolled courses
                if (!student.enrolledCourses.includes(course._id)) {
                    student.enrolledCourses.push(course._id);
                    await student.save();
                }

                enrollmentCount++;
                console.log(`   ✅ Enrolled in: ${course.courseTitle}`);
            }
        }

        console.log(`\n\n🎉 Auto-enrollment complete!`);
        console.log(`📊 Total enrollments created: ${enrollmentCount}`);
        console.log(`👥 Students enrolled: ${students.length}`);
        console.log(`📚 Courses available: ${courses.length}\n`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error during auto-enrollment:', error);
        process.exit(1);
    }
};

autoEnrollStudents();
