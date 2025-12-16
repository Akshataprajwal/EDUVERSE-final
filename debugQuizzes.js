import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

const debugQuizzes = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/eduverse');
        console.log('✅ Connected to MongoDB');

        // Define schemas minimally for querying
        const CourseSchema = new mongoose.Schema({
            courseTitle: String,
            category: String,
            quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }]
        }, { strict: false });

        const QuizSchema = new mongoose.Schema({
            quizTitle: String,
            course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
            isActive: Boolean
        }, { strict: false });

        const Course = mongoose.model('Course', CourseSchema);
        const Quiz = mongoose.model('Quiz', QuizSchema);

        // 1. Get all courses
        const courses = await Course.find({});
        console.log(`\n📚 Total Courses: ${courses.length}`);

        for (const course of courses) {
            console.log(`\n-----------------------------------`);
            console.log(`Course: "${course.courseTitle}"`);
            console.log(`ID: ${course._id}`);
            console.log(`Category: "${course.category}"`); // Check for extra spaces!
            console.log(`Linked Quizzes in Course model: ${course.quizzes?.length || 0}`);

            // 2. Find quizzes that point to this course
            const linkedQuizzes = await Quiz.find({ course: course._id });
            console.log(`Quizzes pointing to this Course: ${linkedQuizzes.length}`);
            linkedQuizzes.forEach(q => {
                console.log(`   - Quiz: "${q.quizTitle}" (Active: ${q.isActive})`);
            });

            // 3. Test the exact query used by controller
            const queryMatches = await Quiz.find({
                course: course._id,
                isActive: true
            });
            console.log(`Query "course matches & isActive": ${queryMatches.length} matches`);
        }

        console.log('\n-----------------------------------');
        const count = await Quiz.countDocuments();
        console.log(`Total Quizzes in DB: ${count}`);

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

debugQuizzes();
