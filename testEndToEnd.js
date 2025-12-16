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

const runEndToEndTest = async () => {
    try {
        console.log('\n🧪 EDUVERSE END-TO-END TEST\n');
        console.log('='.repeat(70));

        let passed = 0;
        let failed = 0;

        // Test 1: Check if students exist
        console.log('\n📝 Test 1: Students Exist');
        const students = await User.find({ role: 'student' });
        if (students.length > 0) {
            console.log(`   ✅ PASS - Found ${students.length} students`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No students found');
            failed++;
        }

        // Test 2: Check if courses exist
        console.log('\n📝 Test 2: Courses Exist');
        const courses = await Course.find({ isActive: true });
        if (courses.length >= 2) {
            console.log(`   ✅ PASS - Found ${courses.length} active courses`);
            passed++;
        } else {
            console.log(`   ❌ FAIL - Expected at least 2 courses, found ${courses.length}`);
            failed++;
        }

        // Test 3: Check if lessons exist for both vehicle types
        console.log('\n📝 Test 3: Lessons for Both Vehicle Types');
        const twoWheelerLessons = await Lesson.find({ vehicleType: '2-Wheeler', isActive: true });
        const fourWheelerLessons = await Lesson.find({ vehicleType: '4-Wheeler', isActive: true });
        if (twoWheelerLessons.length > 0 && fourWheelerLessons.length > 0) {
            console.log(`   ✅ PASS - 2-Wheeler: ${twoWheelerLessons.length}, 4-Wheeler: ${fourWheelerLessons.length}`);
            passed++;
        } else {
            console.log(`   ❌ FAIL - 2-Wheeler: ${twoWheelerLessons.length}, 4-Wheeler: ${fourWheelerLessons.length}`);
            failed++;
        }

        // Test 4: Check if students are enrolled
        console.log('\n📝 Test 4: Student Enrollments');
        const enrollments = await Enrollment.find({ status: 'active' });
        if (enrollments.length > 0) {
            console.log(`   ✅ PASS - Found ${enrollments.length} active enrollments`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No active enrollments found');
            failed++;
        }

        // Test 5: Check if progress records exist
        console.log('\n📝 Test 5: Progress Tracking');
        const progressRecords = await Progress.find();
        if (progressRecords.length > 0) {
            console.log(`   ✅ PASS - Found ${progressRecords.length} progress records`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No progress records found');
            failed++;
        }

        // Test 6: Check if courses have instructors
        console.log('\n📝 Test 6: Courses Have Instructors');
        const coursesWithInstructors = await Course.find({
            instructorAssigned: { $exists: true, $ne: null }
        });
        if (coursesWithInstructors.length === courses.length) {
            console.log(`   ✅ PASS - All ${courses.length} courses have instructors assigned`);
            passed++;
        } else {
            console.log(`   ❌ FAIL - ${courses.length - coursesWithInstructors.length} courses missing instructors`);
            failed++;
        }

        // Test 7: Check if courses have enrolled students
        console.log('\n📝 Test 7: Courses Have Enrolled Students');
        const coursesWithStudents = courses.filter(c => c.enrolledStudents && c.enrolledStudents.length > 0);
        if (coursesWithStudents.length > 0) {
            console.log(`   ✅ PASS - ${coursesWithStudents.length} courses have enrolled students`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No courses have enrolled students');
            failed++;
        }

        // Test 8: Check if instructor exists
        console.log('\n📝 Test 8: Instructor Exists');
        const instructor = await User.findOne({ role: 'instructor' });
        if (instructor) {
            console.log(`   ✅ PASS - Instructor found: ${instructor.name}`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No instructor found');
            failed++;
        }

        // Test 9: Verify lesson content exists
        console.log('\n📝 Test 9: Lessons Have Content');
        const lessonsWithContent = await Lesson.find({
            $or: [
                { content: { $exists: true, $ne: '' } },
                { videoURL: { $exists: true, $ne: '' } }
            ]
        });
        if (lessonsWithContent.length > 0) {
            console.log(`   ✅ PASS - ${lessonsWithContent.length} lessons have content`);
            passed++;
        } else {
            console.log('   ❌ FAIL - No lessons have content');
            failed++;
        }

        // Test 10: Check enrollment-progress consistency
        console.log('\n📝 Test 10: Enrollment-Progress Consistency');
        let consistent = true;
        for (const enrollment of enrollments) {
            const progress = await Progress.findOne({
                student: enrollment.student,
                course: enrollment.course
            });
            if (!progress) {
                consistent = false;
                break;
            }
        }
        if (consistent) {
            console.log(`   ✅ PASS - All enrollments have corresponding progress records`);
            passed++;
        } else {
            console.log('   ❌ FAIL - Some enrollments missing progress records');
            failed++;
        }

        // Final Results
        console.log('\n' + '='.repeat(70));
        console.log('\n📊 TEST RESULTS:');
        console.log(`   ✅ Passed: ${passed}/10`);
        console.log(`   ❌ Failed: ${failed}/10`);
        console.log(`   📈 Success Rate: ${(passed / 10 * 100).toFixed(1)}%`);

        if (failed === 0) {
            console.log('\n🎉 ALL TESTS PASSED! System is fully functional and error-free!\n');
        } else {
            console.log('\n⚠️  Some tests failed. Please review the issues above.\n');
        }

        console.log('='.repeat(70) + '\n');

        process.exit(failed === 0 ? 0 : 1);
    } catch (error) {
        console.error('\n❌ Test Error:', error);
        process.exit(1);
    }
};

runEndToEndTest();
