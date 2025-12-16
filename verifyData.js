import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });
connectDB();

const verifyData = async () => {
    try {
        console.log('\n🔍 VERIFYING DATABASE DATA\n');
        console.log('='.repeat(60));

        // Check Courses
        const courses = await Course.find();
        console.log(`\n📚 COURSES: ${courses.length}`);
        courses.forEach(c => {
            console.log(`   - ${c.courseTitle} (${c.category})`);
            console.log(`     Lessons: ${c.lessons.length}, Quizzes: ${c.quizzes.length}`);
        });

        // Check Lessons by Vehicle Type
        const twoWheelerLessons = await Lesson.find({ vehicleType: '2-Wheeler', isActive: true });
        const fourWheelerLessons = await Lesson.find({ vehicleType: '4-Wheeler', isActive: true });

        console.log(`\n📝 LESSONS:`);
        console.log(`   2-Wheeler: ${twoWheelerLessons.length} lessons`);
        twoWheelerLessons.forEach((l, i) => {
            console.log(`      ${i + 1}. ${l.title}`);
        });

        console.log(`   4-Wheeler: ${fourWheelerLessons.length} lessons`);
        fourWheelerLessons.forEach((l, i) => {
            console.log(`      ${i + 1}. ${l.title}`);
        });

        // Check Quizzes
        const quizzes = await Quiz.find();
        console.log(`\n📋 QUIZZES: ${quizzes.length}`);
        quizzes.forEach(q => {
            console.log(`   - ${q.quizTitle} (${q.questions.length} questions)`);
        });

        // Check Enrollments
        const enrollments = await Enrollment.find().populate('student', 'email').populate('course', 'courseTitle');
        console.log(`\n🎓 ENROLLMENTS: ${enrollments.length}`);
        enrollments.forEach(e => {
            console.log(`   - ${e.student?.email} → ${e.course?.courseTitle}`);
        });

        console.log('\n' + '='.repeat(60));
        console.log('\n✅ DATA VERIFICATION COMPLETE!\n');

        process.exit(0);
    } catch (error) {
        console.error('\n❌ Error:', error);
        process.exit(1);
    }
};

verifyData();
