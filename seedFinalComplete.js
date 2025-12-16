import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import User from '../models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

const seedEverything = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/eduverse';
        await mongoose.connect(mongoUri);
        console.log('✅ Connected to MongoDB\n');

        // Get instructor
        const instructor = await User.findOne({ role: 'instructor' });
        if (!instructor) {
            console.log('❌ No instructor found. Run: npm run seed first');
            process.exit(1);
        }

        // Clear existing data
        console.log('🗑️  Clearing existing courses, lessons, and quizzes...');
        await Course.deleteMany({});
        await Lesson.deleteMany({});
        await Quiz.deleteMany({});
        console.log('✅ Cleared\n');

        console.log('═'.repeat(60));
        console.log('  CREATING COMPLETE EDUVERSE PLATFORM');
        console.log('═'.repeat(60));
        console.log();

        // ==================== 2-WHEELER COURSE ====================
        console.log('🏍️  CREATING 2-WHEELER COURSE\n');

        const twoWheelerCourse = await Course.create({
            courseTitle: 'Complete Two-Wheeler (Motorcycle/Bike) Driving Course',
            description: 'Master motorcycle riding with our comprehensive course covering basics to advanced techniques, safety, and traffic rules.',
            category: '2-Wheeler',
            level: 'Beginner',
            price: 2999,
            durationDays: 30,
            thumbnailImage: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
            previewVideoURL: 'https://www.youtube.com/watch?v=DKkLKfUZKIg',
            learningOutcomes: [
                'Master motorcycle controls and basic riding techniques',
                'Understand traffic rules specific to two-wheelers',
                'Learn defensive riding and hazard perception',
                'Perfect balance, turning, and emergency maneuvers',
                'Recognize and respond to road signs correctly'
            ],
            instructorAssigned: instructor._id,
            certificateAvailable: true,
            isActive: true
        });

        // 2-Wheeler Lessons
        const twoWheelerLessonsData = [
            {
                title: 'Introduction to Two-Wheeler Riding Basics',
                description: 'Learn fundamental motorcycle riding concepts, controls, and safety checks.',
                content: 'This lesson covers T-CLOCS inspection, proper riding gear, mounting/dismounting techniques, and understanding motorcycle controls.',
                videoURL: 'https://www.youtube.com/watch?v=DKkLKfUZKIg',
                roadSigns: [
                    { name: 'Helmet Mandatory', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Italian_traffic_signs_-_obbligo_casco.svg/200px-Italian_traffic_signs_-_obbligo_casco.svg.png', description: 'Wearing helmet is compulsory' },
                    { name: 'Two-Wheeler Prohibited', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Indonesia_road_sign_3a.svg/200px-Indonesia_road_sign_3a.svg.png', description: 'Motorcycles not allowed' }
                ]
            },
            {
                title: 'Balancing, Starting & Stopping Techniques',
                description: 'Master balance, clutch control, and braking techniques.',
                content: 'Learn friction zone, smooth starts, controlled stops, and proper braking technique (70% front, 30% rear).',
                videoURL: 'https://www.youtube.com/watch?v=LnhkBWLRWkg',
                roadSigns: [
                    { name: 'Stop Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MUTCD_R1-1.svg/200px-MUTCD_R1-1.svg.png', description: 'Come to complete stop' },
                    { name: 'Yield Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MUTCD_R1-2.svg/200px-MUTCD_R1-2.svg.png', description: 'Give way to other vehicles' }
                ]
            },
            {
                title: 'Turning, Cornering & Lane Positioning',
                description: 'Learn counter-steering and proper cornering technique.',
                content: 'Master SLOW-LOOK-PRESS-ROLL technique, counter-steering, and strategic lane positioning.',
                videoURL: 'https://www.youtube.com/watch?v=eqQBubilSXU',
                roadSigns: [
                    { name: 'Sharp Turn', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png', description: 'Sharp curve ahead' },
                    { name: 'Winding Road', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MUTCD_W1-5.svg/200px-MUTCD_W1-5.svg.png', description: 'Series of curves' }
                ]
            },
            {
                title: 'Traffic Rules & Road Signs',
                description: 'Comprehensive guide to traffic rules and road signs.',
                content: 'Learn all essential road signs, right-of-way rules, and two-wheeler specific regulations.',
                videoURL: 'https://www.youtube.com/watch?v=DxZXn4zSjLA',
                roadSigns: [
                    { name: 'Speed Limit 40', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUTCD_R2-1.svg/200px-MUTCD_R2-1.svg.png', description: 'Maximum speed 40 km/h' },
                    { name: 'Pedestrian Crossing', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MUTCD_W11-2.svg/200px-MUTCD_W11-2.svg.png', description: 'Pedestrian crossing ahead' },
                    { name: 'No Entry', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/MUTCD_R5-1.svg/200px-MUTCD_R5-1.svg.png', description: 'Do not enter' }
                ]
            },
            {
                title: 'Riding in Different Weather & Road Conditions',
                description: 'Learn to ride safely in rain, night, and various conditions.',
                content: 'Adapt riding technique for rain, night, fog, and challenging road surfaces. Reduce speed by 25-30% in rain.',
                videoURL: 'https://www.youtube.com/watch?v=ZZfOKN9Fiqo',
                roadSigns: [
                    { name: 'Slippery Road', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/MUTCD_W8-5.svg/200px-MUTCD_W8-5.svg.png', description: 'Road may be slippery' },
                    { name: 'Road Work', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MUTCD_W20-1.svg/200px-MUTCD_W20-1.svg.png', description: 'Construction zone' }
                ]
            },
            {
                title: 'Advanced Riding & Emergency Maneuvers',
                description: 'Master emergency braking, swerving, and defensive riding.',
                content: 'Learn SEE system (Search, Evaluate, Execute), emergency stops, swerving, and defensive riding techniques.',
                videoURL: 'https://www.youtube.com/watch?v=eqQBubilSXU',
                roadSigns: [
                    { name: 'Merge Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png', description: 'Traffic merging' },
                    { name: 'Two-Way Traffic', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MUTCD_W6-3.svg/200px-MUTCD_W6-3.svg.png', description: 'Two-way traffic ahead' }
                ]
            }
        ];

        const twoWheelerLessonIds = [];
        for (let i = 0; i < twoWheelerLessonsData.length; i++) {
            const lessonData = twoWheelerLessonsData[i];
            const lesson = await Lesson.create({
                ...lessonData,
                vehicleType: '2-Wheeler',
                course: twoWheelerCourse._id,
                moduleNumber: 1,
                lessonNumber: i + 1,
                lessonType: 'video',
                textContent: JSON.stringify({ roadSigns: lessonData.roadSigns }),
                images: ['https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80'],
                duration: 50,
                order: i + 1,
                isFree: i === 0,
                isMandatory: true,
                isActive: true
            });
            twoWheelerLessonIds.push(lesson._id);
            console.log(`  ✓ Lesson ${i + 1}: ${lessonData.title}`);
        }

        // 2-Wheeler Quiz - 20 Questions
        const twoWheelerQuestions = [
            { q: 'What is the friction zone?', opts: ['Quick clutch release', 'Point where clutch engages', 'Full clutch pull', 'No clutch'], ans: 'Point where clutch engages', exp: 'Friction zone is where clutch plates begin to engage' },
            { q: 'Riding in rain, you should:', opts: ['Speed up', 'Reduce speed 25-30%', 'Use only front brake', 'Ride in center'], ans: 'Reduce speed 25-30%', exp: 'Wet conditions reduce traction significantly' },
            { q: 'What is counter-steering?', opts: ['Opposite steering', 'Push handlebar in turn direction', 'Rear brake steering', 'Sharp turns'], ans: 'Push handlebar in turn direction', exp: 'Push forward on handlebar to turn at speed' },
            { q: 'T-CLOCS stands for:', opts: ['Turn Clutch Lights', 'Tires Controls Lights Oil Chassis Stands', 'Test Check Look', 'Throttle Clutch Lean'], ans: 'Tires Controls Lights Oil Chassis Stands', exp: 'Pre-ride inspection checklist' },
            { q: 'Following distance in normal conditions:', opts: ['1 second', '2-3 seconds', '5 seconds', '10 seconds'], ans: '2-3 seconds', exp: 'Gives enough reaction time' },
            { q: 'Approaching curve, you should:', opts: ['Accelerate', 'Brake in curve', 'Slow before, throttle through', 'Coast'], ans: 'Slow before, throttle through', exp: 'SLOW-LOOK-PRESS-ROLL technique' },
            { q: 'Braking power distribution:', opts: ['Never front', '50-50', '70% front 30% rear', '100% front'], ans: '70% front 30% rear', exp: 'Front brake provides most stopping power' },
            { q: 'Most slippery when wet:', opts: ['Asphalt', 'Painted markings and metal', 'Concrete', 'Gravel'], ans: 'Painted markings and metal', exp: 'Paint and metal become very slippery' },
            { q: 'Carrying passenger:', opts: ['Far back', 'Lean opposite', 'Sit close, lean with rider', 'Stand on pegs'], ans: 'Sit close, lean with rider', exp: 'Passenger must move with bike' },
            { q: 'Use horn to:', opts: ['Express anger', 'Alert when necessary', 'Continuously', 'Only when cut off'], ans: 'Alert when necessary', exp: 'Horn is for safety alerts' },
            { q: 'Correct riding position:', opts: ['Arms extended', 'Upright, bent elbows, knees grip tank', 'Slouch forward', 'Sit sideways'], ans: 'Upright, bent elbows, knees grip tank', exp: 'Provides maximum control' },
            { q: 'If motorcycle skids:', opts: ['More brake', 'Release brakes, look ahead, reapply', 'Pull clutch', 'Lay down'], ans: 'Release brakes, look ahead, reapply', exp: 'Release to regain traction' },
            { q: 'ATGATT means:', opts: ['Test Gear Tires', 'All The Gear All The Time', 'Advanced Training', 'Avoid Traffic'], ans: 'All The Gear All The Time', exp: 'Wear full gear every ride' },
            { q: 'Blocking position is:', opts: ['Block vehicles', 'Position to prevent lane sharing', 'Block view', 'Stop in road'], ans: 'Position to prevent lane sharing', exp: 'Discourage cars from sharing lane' },
            { q: 'Lane splitting safe when:', opts: ['Traffic slow', 'Legal and safe speeds', 'Always', 'Never'], ans: 'Legal and safe speeds', exp: 'Only where legal, at safe speeds' },
            { q: 'SEE system is:', opts: ['Stop Evaluate Execute', 'Search Evaluate Execute', 'See Enter Exit', 'Safety Equipment Emergency'], ans: 'Search Evaluate Execute', exp: 'Defensive riding system' },
            { q: 'Check mirrors:', opts: ['Only lane change', 'Every 5-10 seconds', 'Only intersections', 'Once per minute'], ans: 'Every 5-10 seconds', exp: 'Maintain 360-degree awareness' },
            { q: 'Yellow traffic light:', opts: ['Speed up', 'Stop if safe, proceed if too close', 'Always stop', 'Ignore'], ans: 'Stop if safe, proceed if too close', exp: 'Yellow means caution' },
            { q: 'Emergency braking:', opts: ['Grab front hard', 'Only rear', 'Both brakes progressively', 'Pull clutch'], ans: 'Both brakes progressively', exp: 'Apply both firmly but progressively' },
            { q: 'Avoid blind spots because:', opts: ['Illegal', 'Drivers cannot see you', 'Uses fuel', 'Damages bike'], ans: 'Drivers cannot see you', exp: 'Prevent lane change collisions' }
        ];

        const twoWheelerQuiz = await Quiz.create({
            quizTitle: 'Two-Wheeler Riding Assessment',
            description: 'Test your motorcycle riding knowledge - 20 questions covering all aspects',
            course: twoWheelerCourse._id,
            questions: twoWheelerQuestions.map(q => ({
                questionText: q.q,
                options: q.opts,
                correctAnswer: q.ans,
                explanation: q.exp
            })),
            passingScore: 70,
            timeLimit: 30,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        twoWheelerCourse.lessons = twoWheelerLessonIds;
        twoWheelerCourse.quizzes = [twoWheelerQuiz._id];
        await twoWheelerCourse.save();

        console.log(`✅ 2-Wheeler: 6 lessons, 20 quiz questions\n`);

        // ==================== 4-WHEELER COURSE ====================
        console.log('🚗 CREATING 4-WHEELER COURSE\n');

        const fourWheelerCourse = await Course.create({
            courseTitle: 'Complete Four-Wheeler (Car) Driving Course',
            description: 'Become a confident and safe driver with our comprehensive four-wheeler course covering all driving skills.',
            category: '4-Wheeler',
            level: 'Beginner',
            price: 3999,
            durationDays: 45,
            thumbnailImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
            previewVideoURL: 'https://www.youtube.com/watch?v=nOTZ_JRfKIA',
            learningOutcomes: [
                'Master vehicle controls and driving fundamentals',
                'Perfect steering, acceleration, and braking',
                'Learn lane discipline and highway driving',
                'Master all parking techniques',
                'Apply defensive driving skills'
            ],
            instructorAssigned: instructor._id,
            certificateAvailable: true,
            isActive: true
        });

        // 4-Wheeler Lessons
        const fourWheelerLessonsData = [
            {
                title: 'Introduction to Four-Wheeler Driving Fundamentals',
                description: 'Learn vehicle controls, seating position, and dashboard understanding.',
                content: 'Covers seat adjustment, mirror setup, pedal operation, gear positions, and pre-drive checks.',
                videoURL: 'https://www.youtube.com/watch?v=nOTZ_JRfKIA',
                roadSigns: [
                    { name: 'Stop Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MUTCD_R1-1.svg/200px-MUTCD_R1-1.svg.png', description: 'Complete stop required' },
                    { name: 'Yield Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MUTCD_R1-2.svg/200px-MUTCD_R1-2.svg.png', description: 'Give way to traffic' },
                    { name: 'Speed Limit', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUTCD_R2-1.svg/200px-MUTCD_R2-1.svg.png', description: 'Maximum speed allowed' }
                ]
            },
            {
                title: 'Steering Control, Acceleration & Braking',
                description: 'Develop smooth control over steering, gas, and brakes.',
                content: 'Learn hand-over-hand steering, progressive braking, smooth acceleration, and weight transfer.',
                videoURL: 'https://www.youtube.com/watch?v=LnhkBWLRWkg',
                roadSigns: [
                    { name: 'Sharp Turn', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png', description: 'Sharp curve ahead' },
                    { name: 'Winding Road', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MUTCD_W1-5.svg/200px-MUTCD_W1-5.svg.png', description: 'Series of curves' },
                    { name: 'Steep Grade', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MUTCD_W7-1.svg/200px-MUTCD_W7-1.svg.png', description: 'Steep hill' }
                ]
            },
            {
                title: 'Lane Discipline, Merging & Highway Driving',
                description: 'Master lane usage, merging, and highway driving skills.',
                content: 'Learn mirror-signal-blind spot checks, safe merging, lane changes, and highway etiquette.',
                videoURL: 'https://www.youtube.com/watch?v=DxZXn4zSjLA',
                roadSigns: [
                    { name: 'Merge Sign', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png', description: 'Traffic merging' },
                    { name: 'Lane Ends', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MUTCD_W4-2.svg/200px-MUTCD_W4-2.svg.png', description: 'Right lane ends' },
                    { name: 'Keep Right', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/MUTCD_R4-7.svg/200px-MUTCD_R4-7.svg.png', description: 'Slower traffic right' }
                ]
            },
            {
                title: 'Parking Techniques: Parallel, Perpendicular & Angle',
                description: 'Master all parking methods with confidence.',
                content: 'Step-by-step techniques for parallel, perpendicular, and angle parking. Learn reference points.',
                videoURL: 'https://www.youtube.com/watch?v=gDJxS8OMvT0',
                roadSigns: [
                    { name: 'Parking Allowed', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MUTCD_R7-1.svg/200px-MUTCD_R7-1.svg.png', description: 'Parking permitted' },
                    { name: 'No Parking', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/MUTCD_R8-3.svg/200px-MUTCD_R8-3.svg.png', description: 'Parking prohibited' },
                    { name: 'Handicapped Parking', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/MUTCD_R7-8.svg/200px-MUTCD_R7-8.svg.png', description: 'Reserved for disabled' }
                ]
            },
            {
                title: 'Dashboard Indicators & Vehicle Maintenance',
                description: 'Understand dashboard warnings and basic maintenance.',
                content: 'Learn all dashboard indicators, warning lights, fluid checks, tire pressure, and basic troubleshooting.',
                videoURL: 'https://www.youtube.com/watch?v=wRJ8KkW6vJc',
                roadSigns: [
                    { name: 'Gas Station', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MUTCD_D9-7.svg/200px-MUTCD_D9-7.svg.png', description: 'Fuel available' },
                    { name: 'Mechanic', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MUTCD_D9-2.svg/200px-MUTCD_D9-2.svg.png', description: 'Repair services' }
                ]
            },
            {
                title: 'Defensive Driving & Emergency Situations',
                description: 'Learn defensive driving and emergency response.',
                content: 'Master 3-second rule, escape routes, emergency braking, skid control, and accident avoidance.',
                videoURL: 'https://www.youtube.com/watch?v=ZZfOKN9Fiqo',
                roadSigns: [
                    { name: 'Slippery Road', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/MUTCD_W8-5.svg/200px-MUTCD_W8-5.svg.png', description: 'Slippery when wet' },
                    { name: 'Road Work', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MUTCD_W20-1.svg/200px-MUTCD_W20-1.svg.png', description: 'Construction ahead' }
                ]
            }
        ];

        const fourWheelerLessonIds = [];
        for (let i = 0; i < fourWheelerLessonsData.length; i++) {
            const lessonData = fourWheelerLessonsData[i];
            const lesson = await Lesson.create({
                ...lessonData,
                vehicleType: '4-Wheeler',
                course: fourWheelerCourse._id,
                moduleNumber: 1,
                lessonNumber: i + 1,
                lessonType: 'video',
                textContent: JSON.stringify({ roadSigns: lessonData.roadSigns }),
                images: ['https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80'],
                duration: 50,
                order: i + 1,
                isFree: i === 0,
                isMandatory: true,
                isActive: true
            });
            fourWheelerLessonIds.push(lesson._id);
            console.log(`  ✓ Lesson ${i + 1}: ${lessonData.title}`);
        }

        // 4-Wheeler Quiz - 20 Questions
        const fourWheelerQuestions = [
            { q: 'Proper seating position:', opts: ['Reclined back', 'Upright, can fully depress pedals', 'Close to wheel', 'Sideways'], ans: 'Upright, can fully depress pedals', exp: 'Allows full pedal control' },
            { q: 'Hand position on steering wheel:', opts: ['12 and 6', '9 and 3', '10 and 2', '8 and 4'], ans: '9 and 3', exp: 'Modern recommended position' },
            { q: 'Progressive braking means:', opts: ['Slam brakes', 'Gradually increase pressure', 'Pump brakes', 'Only use parking brake'], ans: 'Gradually increase pressure', exp: 'Prevents skidding' },
            { q: 'Before changing lanes:', opts: ['Just signal', 'Mirror-signal-blind spot check', 'Only mirror', 'Just turn'], ans: 'Mirror-signal-blind spot check', exp: 'Complete safety check' },
            { q: 'Following distance rule:', opts: ['1 second', '3 seconds', '5 seconds', '10 seconds'], ans: '3 seconds', exp: 'Safe reaction time' },
            { q: 'Merging onto highway:', opts: ['Merge slowly', 'Match highway speed', 'Stop and wait', 'Speed up fast'], ans: 'Match highway speed', exp: 'Merge at traffic speed' },
            { q: 'Parallel parking first step:', opts: ['Back in', 'Pull alongside', 'Turn wheel', 'Accelerate'], ans: 'Pull alongside', exp: 'Align with space' },
            { q: 'Check engine light means:', opts: ['Ignore it', 'Get checked soon', 'Stop immediately', 'Add oil'], ans: 'Get checked soon', exp: 'Indicates engine issue' },
            { q: 'Tire pressure should be checked:', opts: ['Monthly', 'Yearly', 'Never', 'Only when flat'], ans: 'Monthly', exp: 'Maintain proper pressure' },
            { q: 'Hydroplaning occurs when:', opts: ['Speeding', 'Tires lose contact with road in water', 'Braking hard', 'Turning'], ans: 'Tires lose contact with road in water', exp: 'Water between tire and road' },
            { q: 'If car starts to skid:', opts: ['Brake hard', 'Steer in skid direction, ease off gas', 'Accelerate', 'Turn opposite'], ans: 'Steer in skid direction, ease off gas', exp: 'Regain control' },
            { q: 'Blind spot is:', opts: ['Dark area', 'Area not visible in mirrors', 'Parking spot', 'Dashboard'], ans: 'Area not visible in mirrors', exp: 'Check before lane change' },
            { q: 'Yellow traffic light means:', opts: ['Speed up', 'Prepare to stop', 'Stop immediately', 'Ignore'], ans: 'Prepare to stop', exp: 'Caution, light changing' },
            { q: 'Right of way at 4-way stop:', opts: ['Biggest car', 'First to arrive', 'Loudest horn', 'Random'], ans: 'First to arrive', exp: 'First in, first out' },
            { q: 'Parking on hill facing uphill:', opts: ['Wheels any direction', 'Wheels away from curb', 'Wheels toward curb', 'Straight'], ans: 'Wheels away from curb', exp: 'Curb stops rollback' },
            { q: 'ABS brakes allow you to:', opts: ['Brake and steer', 'Brake harder', 'Skip maintenance', 'Drive faster'], ans: 'Brake and steer', exp: 'Prevents wheel lock' },
            { q: 'Defensive driving means:', opts: ['Aggressive driving', 'Anticipating hazards', 'Driving slow', 'Honking often'], ans: 'Anticipating hazards', exp: 'Proactive safety' },
            { q: 'When to use high beams:', opts: ['Always', 'Rural roads, no traffic', 'In city', 'Behind others'], ans: 'Rural roads, no traffic', exp: 'Better visibility when safe' },
            { q: 'Seatbelt should be worn:', opts: ['Only highway', 'All times', 'Only front', 'Optional'], ans: 'All times', exp: 'Legal requirement, saves lives' },
            { q: 'Safe speed in school zone:', opts: ['Normal', '15-25 km/h', '50 km/h', '80 km/h'], ans: '15-25 km/h', exp: 'Protect children' }
        ];

        const fourWheelerQuiz = await Quiz.create({
            quizTitle: 'Four-Wheeler Driving Assessment',
            description: 'Test your car driving knowledge - 20 questions covering all aspects',
            course: fourWheelerCourse._id,
            questions: fourWheelerQuestions.map(q => ({
                questionText: q.q,
                options: q.opts,
                correctAnswer: q.ans,
                explanation: q.exp
            })),
            passingScore: 70,
            timeLimit: 30,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        fourWheelerCourse.lessons = fourWheelerLessonIds;
        fourWheelerCourse.quizzes = [fourWheelerQuiz._id];
        await fourWheelerCourse.save();

        console.log(`✅ 4-Wheeler: 6 lessons, 20 quiz questions\n`);

        console.log('═'.repeat(60));
        console.log('🎉 COMPLETE SUCCESS!\n');
        console.log('📊 FINAL SUMMARY:');
        console.log('   ✅ 2 Courses (2-Wheeler + 4-Wheeler)');
        console.log('   ✅ 12 Lessons (6 per course)');
        console.log('   ✅ 2 Quizzes (20 questions each)');
        console.log('   ✅ 20+ Road Signs with images');
        console.log('   ✅ All videos linked');
        console.log('   ✅ Complete text content');
        console.log('\n🚀 100% READY TO USE!');
        console.log('═'.repeat(60));

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

seedEverything();
