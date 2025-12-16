import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import RoadSignal from '../models/RoadSignal.js';
import User from '../models/User.js';
import completeCourseContent from '../data/completeCourseContent.js';

// Load environment variables
dotenv.config();

const seedCompleteCourseContent = async () => {
    try {
        // Check if MONGO_URI is loaded
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected for seeding...');

        // Find or create an admin/instructor user for course assignment
        let instructor = await User.findOne({ role: 'instructor' });
        if (!instructor) {
            instructor = await User.findOne({ role: 'admin' });
        }
        if (!instructor) {
            console.log('⚠️  No instructor or admin found. Creating default instructor...');
            instructor = await User.create({
                name: 'Default Instructor',
                email: 'instructor@eduverse.com',
                password: 'instructor123',
                role: 'instructor',
                phoneNumber: '1234567890',
                isActive: true
            });
            console.log('✅ Default instructor created');
        }

        console.log(`📌 Using instructor: ${instructor.name} (${instructor.email})`);

        // Clear existing data (optional - comment out if you want to keep existing data)
        console.log('🗑️  Clearing existing course data...');
        await Course.deleteMany({ category: { $in: ['2-Wheeler', '4-Wheeler'] } });
        await Lesson.deleteMany({ vehicleType: { $in: ['2-Wheeler', '4-Wheeler'] } });
        await Quiz.deleteMany({});
        await RoadSignal.deleteMany({});
        console.log('✅ Existing data cleared');

        // ==================== SEED TWO-WHEELER COURSE ====================
        console.log('\n🏍️  Creating Two-Wheeler Course...');

        const twoWheelerCourse = await Course.create({
            courseTitle: 'Complete Two-Wheeler (Motorcycle/Bike) Driving Course',
            description: 'Master the art of two-wheeler riding with our comprehensive course covering everything from basic controls to advanced defensive riding techniques. Learn balance, clutch control, cornering, and safety practices from experienced instructors.',
            category: '2-Wheeler',
            level: 'Beginner',
            price: 2999,
            durationDays: 30,
            thumbnailImage: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
            previewVideoURL: 'https://www.youtube.com/watch?v=DKkLKfUZKIg',
            learningOutcomes: [
                'Master motorcycle controls and basic riding techniques',
                'Develop balance and clutch control skills',
                'Learn proper road positioning and lane discipline',
                'Execute safe cornering and body positioning',
                'Ride confidently in adverse weather conditions',
                'Apply defensive riding and emergency maneuvers'
            ],
            instructorAssigned: instructor._id,
            certificateAvailable: true,
            isActive: true
        });

        console.log(`✅ Two-Wheeler Course created: ${twoWheelerCourse._id}`);

        // Create Two-Wheeler Lessons
        console.log('📚 Creating Two-Wheeler Lessons...');
        const twoWheelerLessons = [];

        for (let i = 0; i < completeCourseContent.twoWheelerCourse.lessons.length; i++) {
            const lessonData = completeCourseContent.twoWheelerCourse.lessons[i];

            const lesson = await Lesson.create({
                title: lessonData.title,
                description: lessonData.description,
                content: lessonData.description,
                vehicleType: '2-Wheeler',
                course: twoWheelerCourse._id,
                moduleNumber: 1,
                lessonNumber: lessonData.id,
                lessonType: 'video',
                videoURL: lessonData.videoLinks[0] || '',
                images: lessonData.images,
                textContent: JSON.stringify({
                    practiceTasks: lessonData.practiceTasks,
                    safetyTips: lessonData.safetyTips,
                    roadSigns: lessonData.roadSigns,
                    videoLinks: lessonData.videoLinks
                }),
                duration: 45,
                order: i + 1,
                isFree: i === 0, // First lesson is free
                isMandatory: true,
                isActive: true
            });

            twoWheelerLessons.push(lesson._id);
            console.log(`  ✓ Lesson ${i + 1}: ${lesson.title}`);
        }

        // Create Two-Wheeler Quiz
        console.log('📝 Creating Two-Wheeler Quiz...');
        const twoWheelerQuiz = await Quiz.create({
            quizTitle: 'Two-Wheeler Riding Assessment',
            description: 'Test your knowledge of motorcycle riding techniques, safety practices, and road rules.',
            course: twoWheelerCourse._id,
            questions: completeCourseContent.twoWheelerCourse.quiz.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation
            })),
            passingScore: 70,
            timeLimit: 20,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        console.log(`✅ Two-Wheeler Quiz created with ${twoWheelerQuiz.questions.length} questions`);

        // Update Two-Wheeler Course with lessons and quiz
        twoWheelerCourse.lessons = twoWheelerLessons;
        twoWheelerCourse.quizzes = [twoWheelerQuiz._id];
        await twoWheelerCourse.save();

        // ==================== SEED FOUR-WHEELER COURSE ====================
        console.log('\n🚗 Creating Four-Wheeler Course...');

        const fourWheelerCourse = await Course.create({
            courseTitle: 'Complete Four-Wheeler (Car) Driving Course',
            description: 'Become a confident and safe driver with our comprehensive four-wheeler course. Learn everything from basic vehicle controls to advanced defensive driving, parking techniques, and emergency handling.',
            category: '4-Wheeler',
            level: 'Beginner',
            price: 3999,
            durationDays: 45,
            thumbnailImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
            previewVideoURL: 'https://www.youtube.com/watch?v=nOTZ_JRfKIA',
            learningOutcomes: [
                'Master vehicle controls and driving fundamentals',
                'Develop smooth steering, acceleration, and braking skills',
                'Learn lane discipline and highway driving techniques',
                'Perfect all parking methods (parallel, perpendicular, angle)',
                'Understand dashboard indicators and vehicle maintenance',
                'Apply defensive driving and emergency response skills'
            ],
            instructorAssigned: instructor._id,
            certificateAvailable: true,
            isActive: true
        });

        console.log(`✅ Four-Wheeler Course created: ${fourWheelerCourse._id}`);

        // Create Four-Wheeler Lessons
        console.log('📚 Creating Four-Wheeler Lessons...');
        const fourWheelerLessons = [];

        for (let i = 0; i < completeCourseContent.fourWheelerCourse.lessons.length; i++) {
            const lessonData = completeCourseContent.fourWheelerCourse.lessons[i];

            const lesson = await Lesson.create({
                title: lessonData.title,
                description: lessonData.description,
                content: lessonData.description,
                vehicleType: '4-Wheeler',
                course: fourWheelerCourse._id,
                moduleNumber: 1,
                lessonNumber: lessonData.id,
                lessonType: 'video',
                videoURL: lessonData.videoLinks[0] || '',
                images: lessonData.images,
                textContent: JSON.stringify({
                    practiceTasks: lessonData.practiceTasks,
                    safetyTips: lessonData.safetyTips,
                    roadSigns: lessonData.roadSigns,
                    videoLinks: lessonData.videoLinks
                }),
                duration: 50,
                order: i + 1,
                isFree: i === 0, // First lesson is free
                isMandatory: true,
                isActive: true
            });

            fourWheelerLessons.push(lesson._id);
            console.log(`  ✓ Lesson ${i + 1}: ${lesson.title}`);
        }

        // Create Four-Wheeler Quiz
        console.log('📝 Creating Four-Wheeler Quiz...');
        const fourWheelerQuiz = await Quiz.create({
            quizTitle: 'Four-Wheeler Driving Assessment',
            description: 'Test your knowledge of car driving techniques, safety practices, and road rules.',
            course: fourWheelerCourse._id,
            questions: completeCourseContent.fourWheelerCourse.quiz.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation
            })),
            passingScore: 70,
            timeLimit: 20,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        console.log(`✅ Four-Wheeler Quiz created with ${fourWheelerQuiz.questions.length} questions`);

        // Update Four-Wheeler Course with lessons and quiz
        fourWheelerCourse.lessons = fourWheelerLessons;
        fourWheelerCourse.quizzes = [fourWheelerQuiz._id];
        await fourWheelerCourse.save();

        // ==================== SEED ROAD SIGNS ====================
        console.log('\n🚦 Creating Road Signs...');
        const roadSignals = [];

        for (const signData of completeCourseContent.roadSigns) {
            // Determine category based on the sign's category
            let category = 'Information';
            if (signData.category === 'Regulatory') category = 'Mandatory';
            else if (signData.category === 'Warning') category = 'Warning';
            else if (signData.category === 'Information') category = 'Information';

            const roadSignal = await RoadSignal.create({
                title: signData.name,
                image: signData.imageUrl,
                description: signData.description,
                category: category,
                uploadedBy: instructor._id,
                isActive: true
            });

            roadSignals.push(roadSignal._id);
        }

        console.log(`✅ Created ${roadSignals.length} road signs`);

        // Update both courses with road signals
        twoWheelerCourse.roadSignals = roadSignals;
        fourWheelerCourse.roadSignals = roadSignals;
        await twoWheelerCourse.save();
        await fourWheelerCourse.save();

        // ==================== SUMMARY ====================
        console.log('\n' + '='.repeat(60));
        console.log('🎉 SEEDING COMPLETED SUCCESSFULLY!');
        console.log('='.repeat(60));
        console.log(`\n📊 Summary:`);
        console.log(`   🏍️  Two-Wheeler Course: ${twoWheelerCourse.courseTitle}`);
        console.log(`      - Lessons: ${twoWheelerLessons.length}`);
        console.log(`      - Quiz Questions: ${twoWheelerQuiz.questions.length}`);
        console.log(`   🚗 Four-Wheeler Course: ${fourWheelerCourse.courseTitle}`);
        console.log(`      - Lessons: ${fourWheelerLessons.length}`);
        console.log(`      - Quiz Questions: ${fourWheelerQuiz.questions.length}`);
        console.log(`   🚦 Road Signs: ${roadSignals.length}`);
        console.log(`\n✅ All content has been seeded successfully!`);
        console.log('='.repeat(60));

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

// Run the seed function
seedCompleteCourseContent();
