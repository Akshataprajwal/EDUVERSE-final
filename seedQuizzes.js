import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
await mongoose.connect('mongodb://localhost:27017/eduverse');

import Quiz from './src/models/Quiz.js';
import Course from './src/models/Course.js';
import User from './src/models/User.js';

async function seedQuizzes() {
    try {
        console.log('🌱 Starting quiz seed...\n');

        // Get an instructor for quiz creation
        const instructor = await User.findOne({ role: 'instructor' });
        if (!instructor) {
            console.log('❌ No instructor found. Please run initDefaultUsers first.');
            process.exit(1);
        }

        // Read quiz data from JSON file
        const quizDataPath = path.join(__dirname, 'src/data/quizSeedData.json');
        const quizData = JSON.parse(fs.readFileSync(quizDataPath, 'utf8'));

        // Get existing courses
        const courses = await Course.find({});
        if (courses.length === 0) {
            console.log('❌ No courses found. Please run seedCourses first.');
            process.exit(1);
        }

        // Clear existing quizzes
        const deleteResult = await Quiz.deleteMany({});
        console.log(`🗑️  Deleted ${deleteResult.deletedCount} existing quizzes\n`);

        // Remove quiz references from courses
        await Course.updateMany({}, { $set: { quizzes: [] } });

        // Create quizzes for each course
        const createdQuizzes = [];

        for (const course of courses) {
            console.log(`📝 Creating quiz for course: ${course.courseTitle}`);

            // Transform quiz data to match Quiz model schema
            const questions = quizData.map(item => ({
                questionText: item.question,
                options: item.options,
                correctAnswer: item.correctAnswer,
                explanation: item.explanation
            }));

            const quiz = await Quiz.create({
                quizTitle: `${course.courseTitle} - Final Assessment`,
                description: `Comprehensive quiz covering all topics in ${course.courseTitle}`,
                course: course._id,
                questions: questions,
                passingScore: 70,
                timeLimit: 30,
                maxAttempts: 3,
                createdBy: instructor._id
            });

            createdQuizzes.push(quiz);

            // Add quiz to course
            await Course.findByIdAndUpdate(course._id, {
                $push: { quizzes: quiz._id }
            });

            console.log(`   ✅ Created quiz with ${questions.length} questions`);
        }

        console.log(`\n✅ Successfully created ${createdQuizzes.length} quizzes!\n`);

        // Show summary
        console.log('📊 Quiz Summary:');
        for (const quiz of createdQuizzes) {
            const course = await Course.findById(quiz.course);
            console.log(`   - ${quiz.quizTitle}: ${quiz.questions.length} questions (${course.category})`);
        }

        console.log('\n✨ Quiz seed completed successfully!');
        console.log(`📚 Total quizzes in database: ${await Quiz.countDocuments()}`);

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding quizzes:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

seedQuizzes();
