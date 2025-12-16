import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

const enrollStudents = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/eduverse';
        await mongoose.connect(mongoUri);
        console.log('✅ Connected to MongoDB');

        // Get all students
        const students = await User.find({ role: 'student' });
        console.log(`\n📚 Found ${students.length} students`);

        // Get all courses
        const courses = await Course.find({});
        console.log(`📖 Found ${courses.length} courses\n`);

        if (students.length === 0) {
            console.log('⚠️  No students found. Please create students first.');
            process.exit(0);
        }

        if (courses.length === 0) {
            console.log('⚠️  No courses found. Please seed courses first.');
            process.exit(0);
        }

        // Enroll each student in both courses
        for (const student of students) {
            for (const course of courses) {
                // Check if already enrolled
                if (!course.enrolledStudents.includes(student._id)) {
                    course.enrolledStudents.push(student._id);
                    console.log(`✅ Enrolled ${student.name} in ${course.courseTitle}`);
                } else {
                    console.log(`ℹ️  ${student.name} already enrolled in ${course.courseTitle}`);
                }
            }
        }

        // Save all courses
        for (const course of courses) {
            await course.save();
        }

        console.log('\n🎉 Enrollment complete!');
        console.log('\n📊 Summary:');
        console.log(`   Students: ${students.length}`);
        console.log(`   Courses: ${courses.length}`);
        console.log(`   Total Enrollments: ${students.length * courses.length}`);

        console.log('\n✅ Instructors can now see these students in their dashboard!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

enrollStudents();
