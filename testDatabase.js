import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eduverse');
        console.log('✅ Connected to MongoDB\n');

        // Test Lessons
        const Lesson = mongoose.model('Lesson', new mongoose.Schema({}, { strict: false }));
        const lessons2W = await Lesson.find({ vehicleType: '2-Wheeler' });
        const lessons4W = await Lesson.find({ vehicleType: '4-Wheeler' });

        console.log('📚 LESSONS:');
        console.log(`  2-Wheeler: ${lessons2W.length} lessons`);
        console.log(`  4-Wheeler: ${lessons4W.length} lessons`);

        if (lessons2W.length > 0) {
            const sample = lessons2W[0];
            console.log(`\n  Sample 2W Lesson:`);
            console.log(`    Title: ${sample.title}`);
            console.log(`    Has videoURL: ${!!sample.videoURL}`);
            console.log(`    Images count: ${sample.images?.length || 0}`);
            console.log(`    Has textContent: ${!!sample.textContent}`);

            if (sample.textContent) {
                try {
                    const parsed = JSON.parse(sample.textContent);
                    console.log(`    Road signs in textContent: ${parsed.roadSigns?.length || 0}`);
                    console.log(`    Practice tasks: ${parsed.practiceTasks?.length || 0}`);
                    console.log(`    Safety tips: ${parsed.safetyTips?.length || 0}`);
                } catch (e) {
                    console.log(`    ❌ Error parsing textContent`);
                }
            }
        }

        // Test Quizzes
        const Quiz = mongoose.model('Quiz', new mongoose.Schema({}, { strict: false }));
        const allQuizzes = await Quiz.find({}).populate('course');

        console.log(`\n📝 QUIZZES:`);
        console.log(`  Total quizzes: ${allQuizzes.length}`);

        allQuizzes.forEach(quiz => {
            console.log(`    - ${quiz.quizTitle} (Course: ${quiz.course?.category || 'N/A'})`);
            console.log(`      Questions: ${quiz.questions?.length || 0}`);
        });

        // Test Road Signs
        const RoadSignal = mongoose.model('RoadSignal', new mongoose.Schema({}, { strict: false }));
        const roadSigns = await RoadSignal.find({});

        console.log(`\n🚦 ROAD SIGNS:`);
        console.log(`  Total: ${roadSigns.length}`);
        if (roadSigns.length > 0) {
            console.log(`  Sample: ${roadSigns[0].title}`);
            console.log(`  Has image: ${!!roadSigns[0].image}`);
        }

        // Test Courses
        const Course = mongoose.model('Course', new mongoose.Schema({}, { strict: false }));
        const courses = await Course.find({});

        console.log(`\n🎓 COURSES:`);
        courses.forEach(course => {
            console.log(`  - ${course.courseTitle}`);
            console.log(`    Category: ${course.category}`);
            console.log(`    Lessons: ${course.lessons?.length || 0}`);
            console.log(`    Quizzes: ${course.quizzes?.length || 0}`);
            console.log(`    Road Signals: ${course.roadSignals?.length || 0}`);
        });

        console.log('\n✅ Database check complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

testDatabase();
