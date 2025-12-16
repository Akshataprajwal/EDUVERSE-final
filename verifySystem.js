import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Enrollment from '../models/Enrollment.js';
import Progress from '../models/Progress.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });
connectDB();

const verifySystem = async () => {
    try {
        console.log('\n🔍 EDUVERSE SYSTEM VERIFICATION\n');
        console.log('='.repeat(60));

        // 1. Check Users
        console.log('\n👥 USERS:');
        const students = await User.find({ role: 'student' });
        const instructors = await User.find({ role: 'instructor' });
        const admins = await User.find({ role: 'admin' });

        console.log(`   Students: ${students.length}`);
        students.forEach(s => console.log(`      - ${s.name} (${s.email})`));

        console.log(`   Instructors: ${instructors.length}`);
        instructors.forEach(i => console.log(`      - ${i.name} (${i.email})`));

        console.log(`   Admins: ${admins.length}`);
        admins.forEach(a => console.log(`      - ${a.name} (${a.email})`));

        // 2. Check Courses
        console.log('\n📚 COURSES:');
        const courses = await Course.find().populate('instructorAssigned', 'name');
        console.log(`   Total Courses: ${courses.length}`);
        courses.forEach(c => {
            console.log(`      - ${c.courseTitle} (${c.category})`);
            console.log(`        Instructor: ${c.instructorAssigned?.name || 'None'}`);
            console.log(`        Enrolled Students: ${c.enrolledStudents.length}`);
            console.log(`        Lessons: ${c.lessons.length}`);
        });

        // 3. Check Lessons
        console.log('\n📝 LESSONS:');
        const lessons = await Lesson.find();
        console.log(`   Total Lessons: ${lessons.length}`);
        const lessonsByType = {};
        lessons.forEach(l => {
            lessonsByType[l.vehicleType] = (lessonsByType[l.vehicleType] || 0) + 1;
        });
        Object.entries(lessonsByType).forEach(([type, count]) => {
            console.log(`      ${type}: ${count} lessons`);
        });

        // 4. Check Enrollments
        console.log('\n🎓 ENROLLMENTS:');
        const enrollments = await Enrollment.find()
            .populate('student', 'name')
            .populate('course', 'courseTitle');
        console.log(`   Total Enrollments: ${enrollments.length}`);

        const enrollmentsByStudent = {};
        enrollments.forEach(e => {
            const studentName = e.student?.name || 'Unknown';
            if (!enrollmentsByStudent[studentName]) {
                enrollmentsByStudent[studentName] = [];
            }
            enrollmentsByStudent[studentName].push(e.course?.courseTitle || 'Unknown Course');
        });

        Object.entries(enrollmentsByStudent).forEach(([student, courses]) => {
            console.log(`      ${student}: ${courses.length} course(s)`);
            courses.forEach(c => console.log(`         - ${c}`));
        });

        // 5. Check Progress
        console.log('\n📊 PROGRESS:');
        const progressRecords = await Progress.find()
            .populate('student', 'name')
            .populate('course', 'courseTitle');
        console.log(`   Total Progress Records: ${progressRecords.length}`);
        progressRecords.forEach(p => {
            console.log(`      ${p.student?.name}: ${p.course?.courseTitle}`);
            console.log(`         Status: ${p.courseStatus}, Progress: ${p.totalPercentage}%`);
            console.log(`         Lessons Completed: ${p.lessonsCompleted.length}`);
        });

        // 6. System Health
        console.log('\n✅ SYSTEM HEALTH CHECK:');
        const issues = [];

        if (students.length === 0) issues.push('No students found');
        if (instructors.length === 0) issues.push('No instructors found');
        if (courses.length === 0) issues.push('No courses found');
        if (lessons.length === 0) issues.push('No lessons found');

        courses.forEach(c => {
            if (!c.instructorAssigned) {
                issues.push(`Course "${c.courseTitle}" has no instructor assigned`);
            }
            if (c.lessons.length === 0) {
                issues.push(`Course "${c.courseTitle}" has no lessons`);
            }
        });

        if (issues.length === 0) {
            console.log('   ✅ All systems operational!');
        } else {
            console.log('   ⚠️  Issues found:');
            issues.forEach(issue => console.log(`      - ${issue}`));
        }

        // 7. Test Data Summary
        console.log('\n📋 SUMMARY:');
        console.log(`   Total Users: ${students.length + instructors.length + admins.length}`);
        console.log(`   Total Courses: ${courses.length}`);
        console.log(`   Total Lessons: ${lessons.length}`);
        console.log(`   Total Enrollments: ${enrollments.length}`);
        console.log(`   Total Progress Records: ${progressRecords.length}`);

        console.log('\n' + '='.repeat(60));
        console.log('✨ Verification Complete!\n');

        process.exit(0);
    } catch (error) {
        console.error('\n❌ Verification Error:', error);
        process.exit(1);
    }
};

verifySystem();
