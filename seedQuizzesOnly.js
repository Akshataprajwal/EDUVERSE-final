import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Course from '../models/Course.js';
import Quiz from '../models/Quiz.js';
import QuizAttempt from '../models/QuizAttempt.js';
import User from '../models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

const seedQuizzes = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/eduverse';
        await mongoose.connect(mongoUri);
        console.log('✅ Connected to MongoDB');

        // Get instructor
        const instructor = await User.findOne({ role: 'instructor' });
        if (!instructor) {
            console.log('❌ No instructor found. Run seed first.');
            process.exit(1);
        }

        // 1. DELETE ALL EXISTING QUIZZES & ATTEMPTS
        console.log('🗑️  Deleting all existing quizzes and attempts...');
        await Quiz.deleteMany({});
        await QuizAttempt.deleteMany({});

        // Clear quiz references from courses
        await Course.updateMany({}, { $set: { quizzes: [] } });
        console.log('✅ Existing quiz data cleared.');

        // 2. GET COURSES
        // We use regex to find courses safely
        const twoWheelerCourse = await Course.findOne({ category: { $regex: /^2-Wheeler$/i } });
        const fourWheelerCourse = await Course.findOne({ category: { $regex: /^4-Wheeler$/i } });

        if (!twoWheelerCourse || !fourWheelerCourse) {
            console.log('❌ Courses not found. Please run seed:final first.');
            process.exit(1);
        }

        console.log('📝 Creating fresh quizzes with 15 questions each...');

        // ==================== 2-WHEELER QUIZ (15 Questions) ====================
        const twoWheelerQuestions = [
            { q: 'What is the "friction zone" on a motorcycle?', opts: ['A slippery part of the road', 'The point where the clutch begins to engage', 'The brake pad contact point', 'A tire without tread'], ans: 'The point where the clutch begins to engage', exp: 'The friction zone is the area of clutch lever travel where power begins to transmit to the rear wheel.' },
            { q: 'Which brake provides the most stopping power?', opts: ['Rear brake', 'Front brake', 'Both are equal', 'Engine braking'], ans: 'Front brake', exp: 'The front brake provides about 70-80% of stopping power due to weight transfer during braking.' },
            { q: 'When riding in rain, you should:', opts: ['Speed up to get home faster', 'Reduce speed and increase following distance', 'Use only the front brake', 'Ride in the center of the lane'], ans: 'Reduce speed and increase following distance', exp: 'Traction is reduced in rain, so you need more space and time to stop.' },
            { q: 'What does T-CLOCS stand for?', opts: ['Tires, Controls, Lights, Oil, Chassis, Stands', 'Time, Clutch, Lever, Oil, Chain, Speed', 'Turn, Check, Look, Observe, Clear, Go', 'Throttle, Clutch, Lights, Oil, Chain, Stand'], ans: 'Tires, Controls, Lights, Oil, Chassis, Stands', exp: 'T-CLOCS is the standard pre-ride inspection checklist.' },
            { q: 'What is the correct way to turn a motorcycle at speed?', opts: ['Turn the handlebars in the direction of the turn', 'Lean your body only', 'Push the handlebar in the direction of the turn (Counter-steering)', 'Use the rear brake'], ans: 'Push the handlebar in the direction of the turn (Counter-steering)', exp: 'At speeds above ~20km/h, pushing the right grip forward makes the bike lean and turn right.' },
            { q: 'If your rear wheel skids during a stop, you should:', opts: ['Release the rear brake immediately', 'Keep the rear brake locked until you stop', 'Apply more front brake', 'Turn the handlebars'], ans: 'Keep the rear brake locked until you stop', exp: 'Releasing a locked rear wheel can cause a high-side crash if the wheel regains traction suddenly.' },
            { q: 'Where should you look while cornering?', opts: ['At the front wheel', 'At the speedometer', 'Through the turn to where you want to go', 'At the road directly in front of you'], ans: 'Through the turn to where you want to go', exp: 'Target fixation is dangerous. Always look through the turn to your exit.' },
            { q: 'What fits best with the acronym ATGATT?', opts: ['All The Gear, All The Time', 'Always Turn Gas At The Tank', 'Avoid Traffic, Go Around The Town', 'All Tires Grip All Terrain'], ans: 'All The Gear, All The Time', exp: 'Safety philosophy emphasizing full protective gear on every ride.' },
            { q: 'When is the road most slippery during rain?', opts: ['After it has rained for an hour', 'During the first 15-20 minutes', 'Only during heavy storms', 'When the rain stops'], ans: 'During the first 15-20 minutes', exp: 'Oil and dirt on the road float to the surface when it first starts raining, creating slippery conditions.' },
            { q: 'What is the best lane position for a motorcycle?', opts: ['Always the center', 'Always the left', 'Always the right', 'The position that offers the best visibility and safety'], ans: 'The position that offers the best visibility and safety', exp: 'Lane position should change based on traffic and road conditions to maximize visibility ("blocking position").' },
            { q: 'How often should you check your mirrors?', opts: ['Only when changing lanes', 'Every 5-10 seconds', 'Once a minute', 'Only when stopping'], ans: 'Every 5-10 seconds', exp: 'Constant situational awareness is critical for motorcyclists.' },
            { q: 'Carrying a passenger affects the motorcycle by:', opts: ['Increasing acceleration', 'Decreasing stopping distance', 'Increasing stopping distance and affecting handling', 'Improving fuel economy'], ans: 'Increasing stopping distance and affecting handling', exp: 'The extra weight requires more distance to stop and changes the center of gravity.' },
            { q: 'What should you do if an aggressive dog chases you?', opts: ['Kick at the dog', 'Stop and wait', 'Slow down, then accelerate away as the dog approaches', 'Swerve at the dog'], ans: 'Slow down, then accelerate away as the dog approaches', exp: 'This upsets the dog\'s timing and allows you to escape safely.' },
            { q: 'When braking in an emergency, you should:', opts: ['Slam on both brakes', 'Apply both brakes firmly and progressively', 'Use only the rear brake', 'Use only the front brake'], ans: 'Apply both brakes firmly and progressively', exp: 'Progressive braking prevents wheel lock-up while maximizing stopping power.' },
            { q: 'Why is helmet visor or eye protection important?', opts: ['To look cool', 'To prevent wind noise', 'To protect eyes from debris, bugs, and wind', 'It is not important'], ans: 'To protect eyes from debris, bugs, and wind', exp: 'Vision is your most critical sense while riding; protecting it is mandatory.' }
        ];

        const quiz2Wheeler = await Quiz.create({
            quizTitle: 'Two-Wheeler Proficiency Test',
            description: 'A complete 15-question assessment of your two-wheeler riding knowledge.',
            course: twoWheelerCourse._id,
            questions: twoWheelerQuestions.map(q => ({
                questionText: q.q,
                options: q.opts,
                correctAnswer: q.ans,
                explanation: q.exp
            })),
            passingScore: 70,
            timeLimit: 25,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        // ==================== 4-WHEELER QUIZ (15 Questions) ====================
        const fourWheelerQuestions = [
            { q: 'What is the "3-second rule" used for?', opts: ['Measuring 0-60 time', 'Calculating following distance', 'Wait time at stop signs', 'Duration of turn signals'], ans: 'Calculating following distance', exp: 'Pick a fixed object; when the car ahead passes it, count to 3. If you pass it before 3, you are too close.' },
            { q: 'When parking uphill with a curb, turn wheels:', opts: ['Towards the curb', 'Away from the curb', 'Straight', 'To the right'], ans: 'Away from the curb', exp: 'If the brakes fail, the car will roll back and the tires will hit the curb, stopping the car.' },
            { q: 'What does a flashing yellow traffic light mean?', opts: ['Stop immediately', 'Proceed with caution', 'Speed up', 'Turn around'], ans: 'Proceed with caution', exp: 'It warns of a hazard or intersection but does not require a full stop unless necessary.' },
            { q: 'When changing lanes, you must check your blind spot by:', opts: ['Looking in the rearview mirror', 'Looking in the side mirror', 'Turning your head and looking over your shoulder', 'Turning on your signal only'], ans: 'Turning your head and looking over your shoulder', exp: 'Mirrors cannot see everything. A head check is mandatory to ensure the lane is clear.' },
            { q: 'If your vehicle starts to hydroplane, you should:', opts: ['Slam on the brakes', 'Steer sharply', 'Ease off the accelerator and steer straight', 'Accelerate'], ans: 'Ease off the accelerator and steer straight', exp: 'Hydroplaning is loss of traction on water. Slowing down gently allows tires to reconnect with the road.' },
            { q: 'In a roundabout, who has the right of way?', opts: ['Vehicles entering the roundabout', 'Vehicles already in the roundabout', 'The fastest vehicle', 'Large trucks only'], ans: 'Vehicles already in the roundabout', exp: 'Traffic entering must yield to traffic already circulating.' },
            { q: 'What is the legal blood alcohol concentration (BAC) limit for new drivers?', opts: ['0.08%', '0.05%', '0.02%', '0.00% (Zero Tolerance)'], ans: '0.00% (Zero Tolerance)', exp: 'New drivers typically have zero tolerance alcohol laws.' },
            { q: 'When are you allowed to pass on the right?', opts: ['When the car ahead is turning left and there is room', 'On a single lane road', 'Whenever you want', 'Never'], ans: 'When the car ahead is turning left and there is room', exp: 'Passing on the right is generally restricted unless there are multiple lanes or the vehicle ahead is turning left.' },
            { q: 'What does a solid yellow line on your side mean?', opts: ['Pass with caution', 'Do not pass', 'Stop', 'School zone'], ans: 'Do not pass', exp: 'A solid yellow line indicates that passing is unsafe and prohibited in that direction.' },
            { q: 'How far should you look ahead while driving?', opts: ['Just past the hood', 'The car directly in front', '12-15 seconds ahead', 'At the ground'], ans: '12-15 seconds ahead', exp: 'Looking far ahead allows you to anticipate hazards early ("High Aim Steering").' },
            { q: 'If your brakes fail, what is the first thing you should try?', opts: ['Jump out of the car', 'Pump the brake pedal', 'Turn off the engine', 'Hit a tree'], ans: 'Pump the brake pedal', exp: 'Pumping can sometimes build up enough hydraulic pressure to stop. Then use parking brake if needed.' },
            { q: 'What color are reverse lights?', opts: ['Red', 'Amber', 'White', 'Green'], ans: 'White', exp: 'White lights indicate to others that a vehicle is backing up.' },
            { q: 'When approaching a school bus with flashing red lights:', opts: ['Pass slowly', 'Honk and pass', 'Stop in both directions (unless divided highway)', 'Yield'], ans: 'Stop in both directions (unless divided highway)', exp: 'You must stop for school buses loading or unloading children.' },
            { q: 'What is "Defensive Driving"?', opts: ['Driving aggressively', 'Anticipating potential hazards and errors of others', 'Driving very slow', 'Ignoring traffic rules'], ans: 'Anticipating potential hazards and errors of others', exp: 'It means making allowances for the mistakes of others and driving to prevent accidents.' },
            { q: 'Which lights should you use in thick fog?', opts: ['High beams', 'Low beams (dipped)', 'Parking lights', 'No lights'], ans: 'Low beams (dipped)', exp: 'High beams reflect off the fog and blind you. Low beams illuminate the road better.' }
        ];

        const quiz4Wheeler = await Quiz.create({
            quizTitle: 'Four-Wheeler Proficiency Test',
            description: 'A complete 15-question assessment of your car driving knowledge.',
            course: fourWheelerCourse._id,
            questions: fourWheelerQuestions.map(q => ({
                questionText: q.q,
                options: q.opts,
                correctAnswer: q.ans,
                explanation: q.exp
            })),
            passingScore: 70,
            timeLimit: 25,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        // 3. UPDATE COURSES WITH NEW QUIZZES
        twoWheelerCourse.quizzes = [quiz2Wheeler._id];
        await twoWheelerCourse.save();

        fourWheelerCourse.quizzes = [quiz4Wheeler._id];
        await fourWheelerCourse.save();

        console.log('✅ Created 2-Wheeler Quiz with 15 questions.');
        console.log('✅ Created 4-Wheeler Quiz with 15 questions.');
        console.log('🔗 Linked quizzes to courses.');

        console.log('\n🎉 QUIZ RESET COMPLETE!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

seedQuizzes();
