import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Enrollment from '../models/Enrollment.js';
import Progress from '../models/Progress.js';
import connectDB from '../config/db.js';
import enhancedTwoWheelerData from '../data/enhancedTwoWheelerData.js';
import enhancedFourWheelerData from '../data/enhancedFourWheelerData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });
connectDB();

const seedCompleteSystem = async () => {
    try {
        console.log('\n🌱 COMPLETE SYSTEM SEED - ENHANCED VERSION\n');
        console.log('='.repeat(70));

        // Step 1: Create/Verify Users
        console.log('\n👥 Step 1: Creating Users...');

        // Create Admin
        let admin = await User.findOne({ email: 'admin@eduverse.com' });
        if (!admin) {
            admin = await User.create({
                name: 'Admin User',
                email: 'admin@eduverse.com',
                password: 'Admin@123',
                role: 'admin',
                phone: '9999999999',
                isActive: true
            });
            console.log('   ✅ Admin created');
        } else {
            console.log('   ⏭️  Admin already exists');
        }

        // Create Instructor
        let instructor = await User.findOne({ email: 'instructor@eduverse.com' });
        if (!instructor) {
            instructor = await User.create({
                name: 'Master Instructor',
                email: 'instructor@eduverse.com',
                password: 'Instructor@123',
                role: 'instructor',
                phone: '8888888888',
                isActive: true
            });
            console.log('   ✅ Instructor created');
        } else {
            console.log('   ⏭️  Instructor already exists');
        }

        // Create Demo Students
        const studentData = [
            { name: 'Student Demo', email: 'student@eduverse.com' },
            { name: 'John Doe', email: 'john@student.com' },
            { name: 'Jane Smith', email: 'jane@student.com' },
            { name: 'Mike Johnson', email: 'mike@student.com' }
        ];

        const students = [];
        for (const data of studentData) {
            let student = await User.findOne({ email: data.email });
            if (!student) {
                try {
                    student = await User.create({
                        name: data.name,
                        email: data.email,
                        password: 'Student@123',
                        role: 'student',
                        phone: '7777777777',
                        isActive: true
                    });
                    console.log(`   ✅ Student created: ${data.email}`);
                } catch (error) {
                    console.log(`   ⚠️  Error creating ${data.email}:`, error.message);
                    // Try to find if it was created despite error
                    student = await User.findOne({ email: data.email });
                }
            } else {
                console.log(`   ⏭️  Student exists: ${data.email}`);
            }
            if (student) students.push(student);
        }

        // Step 2: Seed Courses with Enhanced Data
        console.log('\n📚 Step 2: Seeding Courses...');

        const coursesData = [
            { data: enhancedTwoWheelerData, type: '2-Wheeler' },
            { data: enhancedFourWheelerData, type: '4-Wheeler' }
        ];

        for (const { data, type } of coursesData) {
            console.log(`\n   Processing ${type} Course...`);

            // Delete existing course
            await Course.deleteMany({ category: type });
            await Lesson.deleteMany({ vehicleType: type });
            await Quiz.deleteMany({ 'courseInfo.category': type });

            // Create Course
            const course = await Course.create({
                ...data.courseInfo,
                instructorAssigned: instructor._id,
                isActive: true
            });
            console.log(`   ✅ Course created: ${course.courseTitle}`);

            // Create Lessons
            const lessonIds = [];
            for (const lessonData of data.lessons) {
                const lesson = await Lesson.create({
                    title: lessonData.title,
                    description: lessonData.description,
                    content: lessonData.content,
                    vehicleType: type,
                    course: course._id,
                    moduleNumber: lessonData.sectionNumber,
                    lessonNumber: lessonData.lessonNumber,
                    lessonType: lessonData.imageURL ? 'image' : 'text',
                    imageURL: lessonData.imageURL || '',
                    duration: lessonData.duration,
                    order: lessonData.lessonNumber,
                    isFree: lessonData.isFree,
                    isActive: true
                });
                lessonIds.push(lesson._id);
            }
            console.log(`   ✅ Created ${lessonIds.length} lessons`);

            // Create Quizzes
            const quizIds = [];
            for (const quizData of data.quizzes) {
                const quiz = await Quiz.create({
                    quizTitle: quizData.title,
                    description: `Section ${quizData.sectionNumber} Quiz`,
                    course: course._id,
                    questions: quizData.questions.map(q => ({
                        questionText: q.question,
                        options: q.options,
                        correctAnswer: q.options[q.correctAnswer],
                        explanation: q.explanation
                    })),
                    passingScore: 70,
                    timeLimit: 15,
                    maxAttempts: 3,
                    isActive: true,
                    createdBy: instructor._id
                });
                quizIds.push(quiz._id);
            }
            console.log(`   ✅ Created ${quizIds.length} quizzes`);

            // Update course with lessons and quizzes
            course.lessons = lessonIds;
            course.quizzes = quizIds;
            await course.save();

            // Enroll all students
            for (const student of students) {
                // Check if already enrolled
                const existingEnrollment = await Enrollment.findOne({
                    student: student._id,
                    course: course._id
                });

                if (!existingEnrollment) {
                    await Enrollment.create({
                        student: student._id,
                        course: course._id,
                        amountPaid: course.price,
                        paymentStatus: 'paid',
                        enrolledBy: student._id,
                        status: 'active'
                    });

                    // Create progress
                    await Progress.create({
                        student: student._id,
                        course: course._id,
                        courseStatus: 'Not Started',
                        lessonsCompleted: [],
                        totalPercentage: 0
                    });

                    // Add to course
                    if (!course.enrolledStudents.includes(student._id)) {
                        course.enrolledStudents.push(student._id);
                    }

                    // Add to user
                    if (!student.enrolledCourses.includes(course._id)) {
                        student.enrolledCourses.push(course._id);
                        await student.save();
                    }
                }
            }
            await course.save();
            console.log(`   ✅ Enrolled ${students.length} students`);
        }

        // Final Summary
        console.log('\n' + '='.repeat(70));
        console.log('\n📊 SEED SUMMARY:');
        console.log(`   👤 Admin: admin@eduverse.com / Admin@123`);
        console.log(`   👨‍🏫 Instructor: instructor@eduverse.com / Instructor@123`);
        console.log(`   👨‍🎓 Students: ${students.length} (all: Student@123)`);
        console.log(`   📚 Courses: 2 (2-Wheeler + 4-Wheeler)`);
        console.log(`   📝 Lessons: 20 (10 per course)`);
        console.log(`   📋 Quizzes: 4 (2 per course)`);
        console.log(`   🎓 Enrollments: ${students.length * 2}`);
        console.log('\n✨ COMPLETE SYSTEM SEEDED SUCCESSFULLY!\n');
        console.log('='.repeat(70) + '\n');

        process.exit(0);
    } catch (error) {
        console.error('\n❌ Seed Error:', error);
        process.exit(1);
    }
};

seedCompleteSystem();
