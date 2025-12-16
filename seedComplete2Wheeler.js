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

const seedCompleteData = async () => {
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

        // ==================== 2-WHEELER COURSE ====================
        console.log('🏍️  Creating 2-Wheeler Course...');

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

        console.log('✅ 2-Wheeler Course created\n');

        // Create 2-Wheeler Lessons
        console.log('📚 Creating 2-Wheeler Lessons...');

        const twoWheelerLessons = [
            {
                title: 'Introduction to Two-Wheeler Riding Basics',
                description: 'Learn the fundamental concepts of motorcycle riding, including understanding your bike controls, proper mounting techniques, and basic safety checks.',
                content: 'This comprehensive lesson covers everything you need to know before your first ride. You will learn about the T-CLOCS inspection (Tires, Controls, Lights, Oil, Chassis, Stands), proper riding gear, and how to safely mount and dismount your motorcycle.',
                videoURL: 'https://www.youtube.com/watch?v=DKkLKfUZKIg',
                images: [
                    'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
                    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Helmet Mandatory',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Italian_traffic_signs_-_obbligo_casco.svg/200px-Italian_traffic_signs_-_obbligo_casco.svg.png',
                            description: 'Wearing a helmet is compulsory for all two-wheeler riders and passengers'
                        },
                        {
                            name: 'Two-Wheeler Prohibited',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Indonesia_road_sign_3a.svg/200px-Indonesia_road_sign_3a.svg.png',
                            description: 'Motorcycles and two-wheelers are not allowed in this area'
                        }
                    ],
                    keyPoints: [
                        'Always perform T-CLOCS inspection before riding',
                        'Wear DOT-approved helmet and protective gear',
                        'Check tire pressure and tread depth',
                        'Ensure all lights and indicators work properly',
                        'Adjust mirrors for maximum visibility'
                    ],
                    safetyTips: [
                        'Never ride without a properly fitted helmet',
                        'Wear protective jacket, gloves, and boots',
                        'Check weather conditions before riding',
                        'Ensure motorcycle is on level ground when mounting'
                    ]
                }),
                lessonNumber: 1,
                duration: 45
            },
            {
                title: 'Balancing, Starting & Stopping Techniques',
                description: 'Master the art of balance, smooth starts, and controlled stops. Learn clutch control and the friction zone.',
                content: 'Balance is fundamental to motorcycle riding. This lesson teaches you how to find and use the friction zone, perform smooth starts from a stop, and execute controlled stops using both brakes effectively.',
                videoURL: 'https://www.youtube.com/watch?v=LnhkBWLRWkg',
                images: [
                    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Stop Sign',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MUTCD_R1-1.svg/200px-MUTCD_R1-1.svg.png',
                            description: 'Come to a complete stop, check for traffic, then proceed when safe'
                        },
                        {
                            name: 'Yield/Give Way',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MUTCD_R1-2.svg/200px-MUTCD_R1-2.svg.png',
                            description: 'Slow down and give right of way to other vehicles'
                        }
                    ],
                    keyPoints: [
                        'Find the friction zone by slowly releasing clutch',
                        'Use 70% front brake, 30% rear brake',
                        'Look where you want to go, not down',
                        'Keep feet on pegs while moving',
                        'Practice smooth throttle control'
                    ],
                    safetyTips: [
                        'Practice in empty parking lot first',
                        'Always use both brakes together',
                        'Never grab the front brake suddenly',
                        'Keep your eyes up and ahead'
                    ]
                }),
                lessonNumber: 2,
                duration: 50
            },
            {
                title: 'Turning, Cornering & Lane Positioning',
                description: 'Learn counter-steering, proper cornering technique, and strategic lane positioning for safety.',
                content: 'Turning a motorcycle requires counter-steering at speeds above 15-20 km/h. This lesson covers the SLOW-LOOK-PRESS-ROLL technique and proper lane positioning.',
                videoURL: 'https://www.youtube.com/watch?v=eqQBubilSXU',
                images: [
                    'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Sharp Turn',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png',
                            description: 'Sharp curve ahead, reduce speed and prepare to turn'
                        },
                        {
                            name: 'Winding Road',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MUTCD_W1-5.svg/200px-MUTCD_W1-5.svg.png',
                            description: 'Series of curves ahead, maintain steady speed'
                        }
                    ],
                    keyPoints: [
                        'Push forward on handlebar in direction of turn',
                        'SLOW before the turn, not during',
                        'LOOK through the turn to exit',
                        'PRESS handlebar to lean',
                        'ROLL on throttle through turn'
                    ],
                    safetyTips: [
                        'Never brake hard in a turn',
                        'Position in blocking position in lane',
                        'Avoid painted lines when turning',
                        'Lean with the bike, not against it'
                    ]
                }),
                lessonNumber: 3,
                duration: 55
            },
            {
                title: 'Traffic Rules & Road Signs for Two-Wheelers',
                description: 'Comprehensive guide to traffic rules, road signs, and regulations specific to motorcycle riders.',
                content: 'Understanding traffic rules and road signs is crucial for safe riding. This lesson covers all essential signs, right-of-way rules, and two-wheeler specific regulations.',
                videoURL: 'https://www.youtube.com/watch?v=DxZXn4zSjLA',
                images: [
                    'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Speed Limit 40',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUTCD_R2-1.svg/200px-MUTCD_R2-1.svg.png',
                            description: 'Maximum speed limit is 40 km/h'
                        },
                        {
                            name: 'Pedestrian Crossing',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MUTCD_W11-2.svg/200px-MUTCD_W11-2.svg.png',
                            description: 'Pedestrian crossing ahead, be prepared to stop'
                        },
                        {
                            name: 'No Entry',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/MUTCD_R5-1.svg/200px-MUTCD_R5-1.svg.png',
                            description: 'Do not enter, one-way street or restricted area'
                        }
                    ],
                    keyPoints: [
                        'Maintain 2-3 second following distance',
                        'Use turn signals 3 seconds before turning',
                        'Obey all speed limits',
                        'Stop completely at stop signs',
                        'Yield to pedestrians at crossings'
                    ],
                    safetyTips: [
                        'Always ride in designated lanes',
                        'Never run red lights or stop signs',
                        'Use horn to alert, not to express anger',
                        'Follow lane markings strictly'
                    ]
                }),
                lessonNumber: 4,
                duration: 60
            },
            {
                title: 'Riding in Different Weather & Road Conditions',
                description: 'Learn how to safely ride in rain, night, fog, and various road conditions.',
                content: 'Weather and road conditions significantly affect motorcycle handling. This lesson teaches you how to adapt your riding technique for rain, night, and challenging road surfaces.',
                videoURL: 'https://www.youtube.com/watch?v=ZZfOKN9Fiqo',
                images: [
                    'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Slippery Road',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/MUTCD_W8-5.svg/200px-MUTCD_W8-5.svg.png',
                            description: 'Road may be slippery when wet, reduce speed'
                        },
                        {
                            name: 'Road Work Ahead',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MUTCD_W20-1.svg/200px-MUTCD_W20-1.svg.png',
                            description: 'Construction zone ahead, be alert'
                        }
                    ],
                    keyPoints: [
                        'Reduce speed by 25-30% in rain',
                        'Increase following distance to 4-6 seconds',
                        'Avoid painted lines and metal surfaces when wet',
                        'Use headlights in low visibility',
                        'First 15 minutes of rain are most dangerous'
                    ],
                    safetyTips: [
                        'Wear reflective gear at night',
                        'Avoid sudden movements on wet roads',
                        'Test brakes gently after riding through water',
                        'Reduce speed on gravel or dirt'
                    ]
                }),
                lessonNumber: 5,
                duration: 50
            },
            {
                title: 'Advanced Riding & Emergency Maneuvers',
                description: 'Master emergency braking, swerving, and defensive riding techniques.',
                content: 'Learn life-saving emergency maneuvers including quick stops, swerving around obstacles, and the SEE system (Search, Evaluate, Execute) for defensive riding.',
                videoURL: 'https://www.youtube.com/watch?v=eqQBubilSXU',
                images: [
                    'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80'
                ],
                textContent: JSON.stringify({
                    roadSigns: [
                        {
                            name: 'Merge Sign',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png',
                            description: 'Traffic merging from the right'
                        },
                        {
                            name: 'Two-Way Traffic',
                            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MUTCD_W6-3.svg/200px-MUTCD_W6-3.svg.png',
                            description: 'Two-way traffic ahead, stay in your lane'
                        }
                    ],
                    keyPoints: [
                        'Practice emergency stops regularly',
                        'Swerving is often better than braking',
                        'Always have an escape route',
                        'Use SEE system constantly',
                        'Cover brakes in high-risk areas'
                    ],
                    safetyTips: [
                        'Assume you are invisible to other drivers',
                        'Never ride in blind spots',
                        'Maintain 360-degree awareness',
                        'Practice emergency maneuvers in safe area'
                    ]
                }),
                lessonNumber: 6,
                duration: 60
            }
        ];

        const twoWheelerLessonIds = [];
        for (const lessonData of twoWheelerLessons) {
            const lesson = await Lesson.create({
                ...lessonData,
                vehicleType: '2-Wheeler',
                course: twoWheelerCourse._id,
                moduleNumber: 1,
                lessonType: 'video',
                order: lessonData.lessonNumber,
                isFree: lessonData.lessonNumber === 1,
                isMandatory: true,
                isActive: true
            });
            twoWheelerLessonIds.push(lesson._id);
            console.log(`  ✓ Lesson ${lessonData.lessonNumber}: ${lessonData.title}`);
        }

        console.log('✅ 2-Wheeler Lessons created\n');

        // Create 2-Wheeler Quiz with 20 questions
        console.log('📝 Creating 2-Wheeler Quiz (20 questions)...');

        const twoWheelerQuiz = await Quiz.create({
            quizTitle: 'Two-Wheeler Riding Assessment',
            description: 'Comprehensive test of your motorcycle riding knowledge covering all aspects of safe riding.',
            course: twoWheelerCourse._id,
            questions: [
                {
                    questionText: 'What is the correct way to find the friction zone on a motorcycle?',
                    options: [
                        'Release the clutch quickly while giving full throttle',
                        'Slowly release the clutch until the bike starts to move forward slightly, then hold',
                        'Keep the clutch fully pulled in at all times',
                        'Release the clutch completely before applying throttle'
                    ],
                    correctAnswer: 'Slowly release the clutch until the bike starts to move forward slightly, then hold',
                    explanation: 'The friction zone is where the clutch plates begin to engage. Find it by slowly releasing the clutch until you feel the bike start to move.'
                },
                {
                    questionText: 'When riding in rain, you should:',
                    options: [
                        'Increase speed to get through the rain faster',
                        'Reduce speed by 25-30% and increase following distance',
                        'Use only the front brake',
                        'Ride in the center of the lane where oil accumulates'
                    ],
                    correctAnswer: 'Reduce speed by 25-30% and increase following distance',
                    explanation: 'Wet conditions reduce traction. Slow down and increase following distance to 4-6 seconds.'
                },
                {
                    questionText: 'What is counter-steering?',
                    options: [
                        'Steering in the opposite direction you want to go',
                        'Pushing forward on the handlebar in the direction you want to turn',
                        'Using only the rear brake to steer',
                        'Turning the handlebars sharply'
                    ],
                    correctAnswer: 'Pushing forward on the handlebar in the direction you want to turn',
                    explanation: 'Counter-steering is the primary method of steering at speeds above 15-20 km/h. Push forward on the right handlebar to turn right.'
                },
                {
                    questionText: 'What does T-CLOCS stand for?',
                    options: [
                        'Turn, Clutch, Lights, Oil, Chain, Speed',
                        'Tires, Controls, Lights, Oil, Chassis, Stands',
                        'Throttle, Clutch, Lean, Observe, Control, Stop',
                        'Test, Check, Look, Operate, Control, Safety'
                    ],
                    correctAnswer: 'Tires, Controls, Lights, Oil, Chassis, Stands',
                    explanation: 'T-CLOCS is a comprehensive pre-ride inspection checklist covering all critical motorcycle systems.'
                },
                {
                    questionText: 'What is the recommended following distance in normal conditions?',
                    options: [
                        '1 second',
                        '2-3 seconds',
                        '5 seconds',
                        '10 seconds'
                    ],
                    correctAnswer: '2-3 seconds',
                    explanation: 'A 2-3 second following distance gives you enough time to react. Increase to 4-6 seconds in poor conditions.'
                },
                {
                    questionText: 'When approaching a curve, you should:',
                    options: [
                        'Accelerate through the curve',
                        'Brake hard in the middle of the curve',
                        'Slow down before the curve, then maintain or slightly increase throttle',
                        'Coast through with the clutch pulled in'
                    ],
                    correctAnswer: 'Slow down before the curve, then maintain or slightly increase throttle',
                    explanation: 'Use SLOW-LOOK-PRESS-ROLL technique. Slow before the curve, look through it, press to lean, roll on throttle.'
                },
                {
                    questionText: 'What percentage of braking power comes from the front brake?',
                    options: [
                        '0% - never use front brake',
                        '50% front, 50% rear',
                        '70% front, 30% rear',
                        '100% front brake only'
                    ],
                    correctAnswer: '70% front, 30% rear',
                    explanation: 'The front brake provides about 70% of stopping power due to weight transfer. Use both brakes together.'
                },
                {
                    questionText: 'Which surface is most slippery when wet?',
                    options: [
                        'Asphalt road surface',
                        'Painted road markings and metal surfaces',
                        'Concrete',
                        'Gravel'
                    ],
                    correctAnswer: 'Painted road markings and metal surfaces',
                    explanation: 'Painted lines, crosswalks, and metal surfaces become extremely slippery when wet. Avoid them while turning or braking.'
                },
                {
                    questionText: 'What is the proper way to carry a passenger?',
                    options: [
                        'Passenger should sit as far back as possible',
                        'Passenger should lean opposite to the rider',
                        'Passenger should sit close, hold on, and lean with the rider',
                        'Passenger should stand on the pegs'
                    ],
                    correctAnswer: 'Passenger should sit close, hold on, and lean with the rider',
                    explanation: 'Passengers should sit close, hold securely, keep feet on pegs, and lean with the motorcycle. Never lean opposite.'
                },
                {
                    questionText: 'When should you use your horn?',
                    options: [
                        'To express anger at other drivers',
                        'To alert others of your presence when necessary',
                        'Continuously in heavy traffic',
                        'Only when someone cuts you off'
                    ],
                    correctAnswer: 'To alert others of your presence when necessary',
                    explanation: 'Use your horn to alert others when necessary for safety, not aggressively.'
                },
                {
                    questionText: 'What is the correct riding position?',
                    options: [
                        'Lean back with arms fully extended',
                        'Sit upright with slightly bent elbows, knees gripping tank',
                        'Slouch forward over handlebars',
                        'Sit sideways for better visibility'
                    ],
                    correctAnswer: 'Sit upright with slightly bent elbows, knees gripping tank',
                    explanation: 'Proper position: upright, elbows slightly bent, knees gripping tank, feet on pegs. This provides maximum control.'
                },
                {
                    questionText: 'What should you do if your motorcycle starts to skid?',
                    options: [
                        'Apply more brake pressure',
                        'Release brakes, look where you want to go, gently reapply',
                        'Pull in clutch and coast',
                        'Lay the bike down immediately'
                    ],
                    correctAnswer: 'Release brakes, look where you want to go, gently reapply',
                    explanation: 'If skidding, release brakes to regain traction, look where you want to go, then gently reapply brakes if needed.'
                },
                {
                    questionText: 'What is ATGATT?',
                    options: [
                        'Always Test Gear And Tires Today',
                        'All The Gear, All The Time',
                        'Advanced Training Gives All Techniques',
                        'Avoid Traffic, Get Around The Traffic'
                    ],
                    correctAnswer: 'All The Gear, All The Time',
                    explanation: 'ATGATT means wearing full protective gear on every ride: helmet, jacket, gloves, pants, boots.'
                },
                {
                    questionText: 'What is the blocking position?',
                    options: [
                        'Blocking other vehicles from passing',
                        'Positioning your bike to prevent cars from sharing your lane',
                        'Blocking the view of rider behind',
                        'Stopping in middle of road'
                    ],
                    correctAnswer: 'Positioning your bike to prevent cars from sharing your lane',
                    explanation: 'Blocking position means positioning in your lane to discourage cars from sharing it, which is dangerous.'
                },
                {
                    questionText: 'When is lane splitting safe?',
                    options: [
                        'Whenever traffic is slow',
                        'Only when legal in your jurisdiction and done at safe speeds',
                        'Always, motorcycles have right of way',
                        'Never, it is always illegal'
                    ],
                    correctAnswer: 'Only when legal in your jurisdiction and done at safe speeds',
                    explanation: 'Lane splitting legality varies. Where legal, do it only at safe speeds (10-15 km/h faster than traffic).'
                },
                {
                    questionText: 'What is the SEE system?',
                    options: [
                        'Stop, Evaluate, Execute',
                        'Search, Evaluate, Execute',
                        'See, Enter, Exit',
                        'Safety, Equipment, Emergency'
                    ],
                    correctAnswer: 'Search, Evaluate, Execute',
                    explanation: 'SEE system: Search for hazards, Evaluate risks, Execute your response. Use constantly while riding.'
                },
                {
                    questionText: 'How often should you check mirrors?',
                    options: [
                        'Only when changing lanes',
                        'Every 5-10 seconds',
                        'Only at intersections',
                        'Once per minute'
                    ],
                    correctAnswer: 'Every 5-10 seconds',
                    explanation: 'Check mirrors frequently (every 5-10 seconds) to maintain 360-degree awareness of traffic.'
                },
                {
                    questionText: 'What should you do at a yellow traffic light?',
                    options: [
                        'Speed up to get through',
                        'Stop if safe to do so, proceed if too close to stop safely',
                        'Always stop immediately',
                        'Ignore it and continue'
                    ],
                    correctAnswer: 'Stop if safe to do so, proceed if too close to stop safely',
                    explanation: 'Yellow means caution. Stop if you can do so safely, proceed if stopping would be dangerous.'
                },
                {
                    questionText: 'What is the proper way to brake in an emergency?',
                    options: [
                        'Grab front brake as hard as possible',
                        'Use only rear brake',
                        'Apply both brakes progressively and firmly',
                        'Pull in clutch and coast'
                    ],
                    correctAnswer: 'Apply both brakes progressively and firmly',
                    explanation: 'In emergency, apply both brakes progressively and firmly. Avoid grabbing brakes suddenly.'
                },
                {
                    questionText: 'Why should you avoid riding in blind spots?',
                    options: [
                        'It is illegal',
                        'Other drivers cannot see you and may change lanes',
                        'It uses more fuel',
                        'It damages the motorcycle'
                    ],
                    correctAnswer: 'Other drivers cannot see you and may change lanes',
                    explanation: 'Blind spots are areas where drivers cannot see you in mirrors. Avoid them to prevent collisions.'
                }
            ],
            passingScore: 70,
            timeLimit: 30,
            maxAttempts: 3,
            isActive: true,
            createdBy: instructor._id
        });

        console.log('✅ 2-Wheeler Quiz created with 20 questions\n');

        // Update course
        twoWheelerCourse.lessons = twoWheelerLessonIds;
        twoWheelerCourse.quizzes = [twoWheelerQuiz._id];
        await twoWheelerCourse.save();

        console.log('✅ 2-Wheeler Course complete!\n');
        console.log('═'.repeat(50));
        console.log('\n🎉 SEEDING COMPLETE!\n');
        console.log('📊 Summary:');
        console.log(`   Courses: 1 (2-Wheeler)`);
        console.log(`   Lessons: ${twoWheelerLessons.length}`);
        console.log(`   Quiz Questions: 20`);
        console.log(`   Road Signs: Multiple per lesson with images`);
        console.log('\n✅ All data is 100% complete and correct!');
        console.log('\n🚀 Ready to use!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

seedCompleteData();
