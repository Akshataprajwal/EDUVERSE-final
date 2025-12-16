import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Enrollment from '../models/Enrollment.js';
import { twoWheelerLessons } from '../data/complete2WheelerLessons.js';
import { fourWheelerLessons } from '../data/complete4WheelerLessons.js';
import { twoWheelerQuizzes } from '../data/twoWheelerQuizzes.js';
import { fourWheelerQuizzes } from '../data/fourWheelerQuizzes.js';

dotenv.config();

const seedDatabase = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        // Clear existing data
        console.log('🗑️  Clearing existing data...');
        await User.deleteMany({});
        await Course.deleteMany({});
        await Lesson.deleteMany({});
        await Quiz.deleteMany({});
        await Enrollment.deleteMany({});
        console.log('✅ Cleared all collections\n');

        // Create Users
        console.log('👥 Creating users...');

        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@eduverse.com',
            password: 'Admin@123',
            role: 'admin',
            isActive: true
        });

        const instructor = await User.create({
            name: 'John Instructor',
            email: 'instructor@eduverse.com',
            password: 'Instructor@123',
            role: 'instructor',
            isActive: true
        });

        const student = await User.create({
            name: 'Test Student',
            email: 'student@eduverse.com',
            password: 'Student@123',
            role: 'student',
            isActive: true
        });

        console.log(`✅ Created ${3} users\n`);

        // Create Courses
        console.log('📚 Creating courses...');

        const twoWheelerCourse = await Course.create({
            courseTitle: 'Complete 2-Wheeler Riding Mastery',
            description: 'Master motorcycle riding from basics to advanced techniques with comprehensive traffic knowledge',
            category: '2-Wheeler',
            instructorAssigned: instructor._id,
            level: 'Beginner',
            price: 2999,
            durationDays: 30,
            thumbnailImage: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800',
            learningOutcomes: [
                'Master traffic signals and road signs',
                'Safe riding in all weather conditions',
                'Emergency handling techniques',
                'Night and fog riding skills',
                'Complete RTO test preparation'
            ],
            isActive: true
        });

        const fourWheelerCourse = await Course.create({
            courseTitle: 'Complete 4-Wheeler Driving Mastery',
            description: 'Learn car driving from basics to advanced with comprehensive road safety knowledge',
            category: '4-Wheeler',
            instructorAssigned: instructor._id,
            level: 'Beginner',
            price: 3999,
            durationDays: 30,
            thumbnailImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
            learningOutcomes: [
                'Master car controls and handling',
                'Parking and lane discipline',
                'Traffic rules and road signs',
                'Driving in all weather conditions',
                'Complete RTO test preparation'
            ],
            isActive: true
        });

        console.log(`✅ Created 2 courses\n`);

        // Create Lessons for 2-Wheeler
        console.log('📖 Creating 2-Wheeler lessons...');
        const created2WLessons = [];
        for (const lessonData of twoWheelerLessons) {
            const lesson = await Lesson.create({
                course: twoWheelerCourse._id,
                title: lessonData.title,
                description: lessonData.content.substring(0, 200) + '...',
                lessonNumber: lessonData.lessonNumber,
                vehicleType: '2-Wheeler',
                content: lessonData.content,
                videoURL: lessonData.videoURL,
                imageURL: lessonData.imageURL,
                roadSigns: lessonData.roadSigns || [],
                duration: lessonData.duration,
                isFree: lessonData.isFree,
                isActive: true
            });
            created2WLessons.push(lesson);
        }
        console.log(`✅ Created ${created2WLessons.length} 2-Wheeler lessons\n`);

        // Create Lessons for 4-Wheeler
        console.log('📖 Creating 4-Wheeler lessons...');
        const created4WLessons = [];
        for (const lessonData of fourWheelerLessons) {
            const lesson = await Lesson.create({
                course: fourWheelerCourse._id,
                title: lessonData.title,
                description: lessonData.content.substring(0, 200) + '...',
                lessonNumber: lessonData.lessonNumber,
                vehicleType: '4-Wheeler',
                content: lessonData.content,
                videoURL: lessonData.videoURL,
                imageURL: lessonData.imageURL,
                roadSigns: lessonData.roadSigns || [],
                duration: lessonData.duration,
                isFree: lessonData.isFree,
                isActive: true
            });
            created4WLessons.push(lesson);
        }
        console.log(`✅ Created ${created4WLessons.length} 4-Wheeler lessons\n`);

        // Create Quizzes for 2-Wheeler
        console.log('❓ Creating 2-Wheeler quizzes...');
        const quiz2W = await Quiz.create({
            course: twoWheelerCourse._id,
            quizTitle: '2-Wheeler Knowledge Test',
            vehicleType: '2-Wheeler',
            questions: twoWheelerQuizzes.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                image: q.image
            })),
            passingScore: 60,
            timeLimit: 30,
            isActive: true
        });
        console.log(`✅ Created 2-Wheeler quiz with ${twoWheelerQuizzes.length} questions\n`);

        // Create Quizzes for 4-Wheeler
        console.log('❓ Creating 4-Wheeler quizzes...');
        const quiz4W = await Quiz.create({
            course: fourWheelerCourse._id,
            quizTitle: '4-Wheeler Knowledge Test',
            vehicleType: '4-Wheeler',
            questions: fourWheelerQuizzes.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                image: q.image
            })),
            passingScore: 60,
            timeLimit: 30,
            isActive: true
        });
        console.log(`✅ Created 4-Wheeler quiz with ${fourWheelerQuizzes.length} questions\n`);

        // Create Enrollment for test student
        console.log('📝 Creating enrollment...');
        await Enrollment.create({
            student: student._id,
            course: twoWheelerCourse._id,
            enrollmentDate: new Date(),
            status: 'active'
        });
        console.log(`✅ Created enrollment\n`);

        // Summary
        console.log('═══════════════════════════════════════');
        console.log('✨ DATABASE SEEDED SUCCESSFULLY! ✨');
        console.log('═══════════════════════════════════════');
        console.log(`👥 Users: 3 (1 admin, 1 instructor, 1 student)`);
        console.log(`📚 Courses: 2 (2-Wheeler, 4-Wheeler)`);
        console.log(`📖 Lessons: ${created2WLessons.length + created4WLessons.length} (${created2WLessons.length} 2W, ${created4WLessons.length} 4W)`);
        console.log(`❓ Quizzes: 2 (${twoWheelerQuizzes.length} + ${fourWheelerQuizzes.length} questions)`);
        console.log(`📝 Enrollments: 1`);
        console.log('═══════════════════════════════════════');
        console.log('\n🔐 Login Credentials:');
        console.log('Admin: admin@eduverse.com / Admin@123');
        console.log('Instructor: instructor@eduverse.com / Instructor@123');
        console.log('Student: student@eduverse.com / Student@123');
        console.log('═══════════════════════════════════════\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
