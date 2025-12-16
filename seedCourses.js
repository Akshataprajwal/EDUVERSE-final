import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Course from './src/models/Course.js';
import Lesson from './src/models/Lesson.js';
import Quiz from './src/models/Quiz.js';
import User from './src/models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quizData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/quizSeedData.json'), 'utf8'));

await mongoose.connect('mongodb://localhost:27017/eduverse');

async function seedCourses() {
    try {
        console.log('🌱 Starting course and lesson seed...\n');

        // Get an instructor for course assignment
        const instructor = await User.findOne({ role: 'instructor' });
        if (!instructor) {
            console.log('❌ No instructor found. Please run initDefaultUsers first.');
            process.exit(1);
        }

        // Clear existing data
        await Course.deleteMany({});
        await Lesson.deleteMany({});
        await Quiz.deleteMany({});
        console.log('🗑️  Cleared existing courses, lessons, and quizzes\n');

        // Create 2-Wheeler Basic Course
        const twoWheelerCourse = await Course.create({
            courseTitle: "2-Wheeler Basic Driving Course",
            description: "Learn the fundamentals of safe 2-wheeler riding with traffic rules and climate-specific techniques. Perfect for beginners!",
            category: "2-Wheeler",
            level: "Beginner",
            price: 2999,
            durationDays: 30,
            thumbnailImage: "2-wheeler-course-thumbnail.jpg",
            instructorAssigned: instructor._id,
            learningOutcomes: [
                "Understand all traffic signs and signals",
                "Master safe riding in different weather conditions",
                "Learn proper lane discipline",
                "Know speed limits and parking rules"
            ]
        });

        // Create 4-Wheeler Basic Course
        const fourWheelerCourse = await Course.create({
            courseTitle: "4-Wheeler Basic Driving Course",
            description: "Learn safe 4-wheeler driving with comprehensive traffic rules and weather driving basics. Ideal for new drivers!",
            category: "4-Wheeler",
            level: "Beginner",
            price: 3999,
            durationDays: 30,
            thumbnailImage: "4-wheeler-course-thumbnail.jpg",
            instructorAssigned: instructor._id,
            learningOutcomes: [
                "Master all traffic signs and road rules",
                "Drive safely in hills and rain",
                "Understand lane discipline",
                "Learn defensive driving techniques"
            ]
        });

        console.log(`✅ Created 2 courses\n`);

        // Traffic Signal Lessons (same for both)
        const trafficLessons = [
            {
                title: "Mandatory Traffic Signs",
                description: "Learn about compulsory traffic signs and their meanings. Blue circular signs that you MUST follow.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                textContent: `<div class="lesson-content">
                    <h2>Understanding Mandatory Traffic Signs</h2>
                    <p>Mandatory traffic signs are circular blue signs with white symbols that tell you what you MUST do. Ignoring these signs is a traffic violation.</p>

                    <h3>Key Mandatory Signs:</h3>
                    <ul>
                        <li><strong>Compulsory Ahead:</strong> You must proceed straight</li>
                        <li><strong>Compulsory Turn Left/Right:</strong> You must turn in the indicated direction</li>
                        <li><strong>Compulsory Roundabout:</strong> You must go around the roundabout</li>
                        <li><strong>Compulsory Cycle Track:</strong> Cyclists must use this track</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 Remember:</strong> Blue circle = Mandatory action required!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see real traffic signs in action and understand their importance.
                    </div>
                </div>`,
                duration: 15,
                order: 1
            },
            {
                title: "Warning & Cautionary Signs",
                description: "Understand warning signs and how to respond to them. Red triangular signs for hazards ahead.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
                textContent: `<div class="lesson-content">
                    <h2>Cautionary and Warning Signs</h2>
                    <p>Warning signs are red triangular signs that alert you to potential hazards ahead. They require you to slow down and be extra careful.</p>

                    <h3>Common Warning Signs:</h3>
                    <ul>
                        <li><strong>School Zone:</strong> Children may be crossing - Reduce speed to 25 km/h</li>
                        <li><strong>Railway Crossing:</strong> Train tracks ahead - Stop, look, and listen</li>
                        <li><strong>Sharp Turn:</strong> Dangerous curve ahead - Slow down before the turn</li>
                        <li><strong>Slippery Road:</strong> Road may be slippery - Reduce speed and avoid sudden braking</li>
                        <li><strong>Narrow Road:</strong> Road narrows ahead - Be prepared to give way</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 How to Respond:</strong> Reduce speed, increase alertness, prepare to stop if necessary.
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see warning signs in real driving scenarios and learn proper responses.
                    </div>
                </div>`,
                duration: 15,
                order: 2
            },
            {
                title: "Informatory Signs",
                description: "Learn about informatory signs for facilities and directions. Blue/green rectangular signs.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=MejbOFk7H6c",
                textContent: `<div class="lesson-content">
                    <h2>Informatory Signs</h2>
                    <p>Informatory signs are rectangular blue or green signs that provide helpful information about facilities, directions, and distances.</p>

                    <h3>Types of Informatory Signs:</h3>
                    <ul>
                        <li><strong>Parking (P):</strong> Indicates where you can park your vehicle</li>
                        <li><strong>Hospital (H):</strong> Medical facility nearby</li>
                        <li><strong>Fuel Station:</strong> Petrol/diesel pump ahead</li>
                        <li><strong>Restaurant:</strong> Food and refreshments available</li>
                        <li><strong>Distance Markers:</strong> Shows distance to destinations</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 Use These Signs:</strong> Plan your stops and navigate efficiently!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see informatory signs in real driving scenarios and learn how to use them effectively.
                    </div>
                </div>`,
                duration: 10,
                order: 3
            },
            {
                title: "Lane Discipline & Rules",
                description: "Master proper lane usage and discipline for safe driving.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=9bZkp7q19f0",
                textContent: `<div class="lesson-content">
                    <h2>Lane Discipline</h2>
                    <p>Proper lane discipline is crucial for road safety and smooth traffic flow.</p>

                    <h3>Essential Lane Rules:</h3>
                    <ul>
                        <li><strong>Keep Left:</strong> Always drive in the leftmost lane unless overtaking</li>
                        <li><strong>Overtaking Lane:</strong> Use right lanes only for overtaking, then return left</li>
                        <li><strong>No Zigzagging:</strong> Don't weave between lanes - it's dangerous</li>
                        <li><strong>Signal Before Changing:</strong> Always use indicators before changing lanes</li>
                        <li><strong>Check Blind Spots:</strong> Look over your shoulder before changing lanes</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 Remember:</strong> Mirror-Signal-Maneuver sequence!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see proper lane discipline in action and understand safe lane changing techniques.
                    </div>
                </div>`,
                duration: 12,
                order: 4
            },
            {
                title: "Speed Limits & Parking",
                description: "Understand speed limits and parking regulations in India.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=exampleSpeed",
                textContent: `<div class="lesson-content">
                    <h2>Speed Limits and Parking Rules</h2>

                    <h3>Speed Limits in India:</h3>
                    <ul>
                        <li><strong>City Roads:</strong> 40-50 km/h</li>
                        <li><strong>Highways:</strong> 80-100 km/h</li>
                        <li><strong>School Zones:</strong> 25 km/h</li>
                        <li><strong>Residential Areas:</strong> 30-40 km/h</li>
                    </ul>

                    <h3>Parking Rules:</h3>
                    <ul>
                        <li>No parking within 15 meters of traffic signal</li>
                        <li>No parking on curves, hills, or narrow roads</li>
                        <li>No parking in no-parking zones (red circle with X)</li>
                        <li>Always park in designated parking areas</li>
                        <li>Use parking brake on slopes</li>
                    </ul>

                    <div class="tip-box">
                        <strong>⚠️ Warning:</strong> Wrong parking can result in heavy fines and towing!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see speed limit signs and parking regulations in real driving scenarios.
                    </div>
                </div>`,
                duration: 10,
                order: 5
            },
            {
                title: "Traffic Light Patterns",
                description: "Learn all traffic light signals and their meanings.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=exampleTrafficLights",
                textContent: `<div class="lesson-content">
                    <h2>Understanding Traffic Lights</h2>

                    <h3>Traffic Light Colors:</h3>
                    <ul>
                        <li><strong>🔴 Red Light:</strong> STOP - Do not cross the stop line. Wait for green.</li>
                        <li><strong>🟡 Yellow/Amber Light:</strong> PREPARE TO STOP - Clear intersection if already crossing, otherwise stop.</li>
                        <li><strong>🟢 Green Light:</strong> GO - Proceed with caution after checking for pedestrians.</li>
                    </ul>

                    <h3>Arrow Signals:</h3>
                    <ul>
                        <li><strong>Green Arrow:</strong> You can turn in that direction even if main light is red</li>
                        <li><strong>Red Arrow:</strong> Cannot turn in that direction, must wait</li>
                    </ul>

                    <div class="tip-box">
                        <strong>⚠️ Important:</strong> Jumping red light is a serious offense with heavy penalties!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Educational Video:</strong> Watch the video above to see traffic light signals in action and understand proper responses at intersections.
                    </div>
                </div>`,
                duration: 12,
                order: 6
            }
        ];

        // 2-Wheeler Climate Lessons
        const twoWheelerClimateLessons = [
            {
                title: "Rainy Weather Riding Simulator",
                description: "Experience safe riding techniques in rain through interactive simulator. Learn to handle wet roads and reduced visibility.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=3n5rUe8zK8E",
                textContent: `<div class="lesson-content">
                    <h2>Safe Riding in Rain - Simulator Experience</h2>
                    <p>Watch this driving simulator video to see how rain affects road conditions and vehicle handling.</p>

                    <h3>Key Safety Measures:</h3>
                    <ul>
                        <li>Reduce speed by 30-40% compared to dry conditions</li>
                        <li>Increase following distance to 4-5 seconds</li>
                        <li>Avoid sudden braking or acceleration</li>
                        <li>Use both brakes gently and progressively</li>
                        <li>Avoid painted road markings (very slippery when wet)</li>
                        <li>Wear waterproof gear with reflective strips</li>
                        <li>Keep visor clean for better visibility</li>
                    </ul>

                    <div class="tip-box">
                        <strong>⚠️ Warning:</strong> First rain after dry spell is most slippery due to oil buildup!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Simulator Video:</strong> Watch the driving simulator above to experience real rain conditions virtually.
                    </div>
                </div>`,
                duration: 15,
                order: 7
            },
            {
                title: "Fog & Low Visibility Simulator",
                description: "Experience riding safely in foggy conditions through simulator. Master low visibility techniques.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=4X1oQoS9T8M",
                textContent: `<div class="lesson-content">
                    <h2>Riding in Fog - Simulator Experience</h2>
                    <p>Experience how fog dramatically reduces visibility and requires extreme caution through this simulator video.</p>

                    <h3>Safety Techniques:</h3>
                    <ul>
                        <li>Use low beam headlight (high beam reflects back and reduces visibility)</li>
                        <li>Reduce speed to 20-30 km/h in dense fog</li>
                        <li>Follow road edge markings closely</li>
                        <li>Use horn frequently to alert others</li>
                        <li>Wear bright colored or reflective clothing</li>
                        <li>Stop safely if visibility drops to near zero</li>
                        <li>Avoid overtaking in fog</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 Remember:</strong> If you can't see, others can't see you. Use lights and horn!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Simulator Video:</strong> Experience fog driving conditions virtually to understand the challenges.
                    </div>
                </div>`,
                duration: 12,
                order: 8
            }
        ];

        // 4-Wheeler Climate Lessons
        const fourWheelerClimateLessons = [
            {
                title: "Hill Driving Simulator",
                description: "Experience uphill and downhill driving techniques through interactive simulator. Learn gear usage and braking on slopes.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=2X_2XNvK8qE",
                textContent: `<div class="lesson-content">
                    <h2>Safe Hill Driving - Simulator Experience</h2>
                    <p>Watch this driving simulator to experience hill driving challenges and proper techniques.</p>

                    <h3>Uphill Driving:</h3>
                    <ul>
                        <li>Use lower gear (2nd or 3rd) for more power</li>
                        <li>Maintain steady speed - don't accelerate suddenly</li>
                        <li>Don't shift gears mid-climb on steep slopes</li>
                        <li>Use handbrake when stopped on slope to prevent rolling back</li>
                    </ul>

                    <h3>Downhill Driving:</h3>
                    <ul>
                        <li>Use engine braking - shift to lower gear (2nd or 3rd)</li>
                        <li>Don't ride the brakes continuously (they can overheat)</li>
                        <li>Maintain safe distance from vehicle ahead</li>
                        <li>Be ready for hairpin bends - slow down before the turn</li>
                    </ul>

                    <div class="tip-box">
                        <strong>💡 Golden Rule:</strong> Uphill vehicle has right of way. Give way when going downhill!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Simulator Video:</strong> Experience hill driving conditions virtually to master slope techniques.
                    </div>
                </div>`,
                duration: 18,
                order: 7
            },
            {
                title: "Heavy Rain Driving Simulator",
                description: "Experience driving safely in heavy rain through simulator. Learn to prevent hydroplaning and handle wet conditions.",
                lessonType: "video",
                videoURL: "https://www.youtube.com/watch?v=6O6O6O6O6O6",
                textContent: `<div class="lesson-content">
                    <h2>Driving in Heavy Rain - Simulator Experience</h2>
                    <p>Experience heavy rain driving conditions through this simulator video to understand hydroplaning risks.</p>

                    <h3>Safety Measures:</h3>
                    <ul>
                        <li>Reduce speed by 40-50% compared to dry conditions</li>
                        <li>Turn on headlights for better visibility</li>
                        <li>Use wipers at appropriate speed</li>
                        <li>Increase following distance to 5-6 seconds</li>
                        <li>Avoid cruise control in rain</li>
                        <li>Don't drive through deep water (max 6 inches)</li>
                        <li>Test brakes gently after driving through water</li>
                    </ul>

                    <h3>Hydroplaning Prevention:</h3>
                    <p>If car starts hydroplaning (floating on water):</p>
                    <ul>
                        <li>Ease off the accelerator (don't brake hard)</li>
                        <li>Steer straight - don't make sudden turns</li>
                        <li>Wait for tires to regain traction</li>
                    </ul>

                    <div class="tip-box">
                        <strong>⚠️ Warning:</strong> Worn tires significantly increase hydroplaning risk!
                    </div>

                    <div class="video-note">
                        <strong>🎥 Simulator Video:</strong> Experience heavy rain driving virtually to understand hydroplaning dangers.
                    </div>
                </div>`,
                duration: 15,
                order: 8
            }
        ];

        // Create lessons for 2-wheeler
        const twoWheelerLessons = await Lesson.create(
            [...trafficLessons, ...twoWheelerClimateLessons].map((lesson, index) => ({
                ...lesson,
                course: twoWheelerCourse._id,
                lessonNumber: index + 1,
                vehicleType: '2-Wheeler'
            }))
        );

        // Create lessons for 4-wheeler
        const fourWheelerLessons = await Lesson.create(
            [...trafficLessons, ...fourWheelerClimateLessons].map((lesson, index) => ({
                ...lesson,
                course: fourWheelerCourse._id,
                lessonNumber: index + 1,
                vehicleType: '4-Wheeler'
            }))
        );

        // Update courses with lesson references
        await Course.findByIdAndUpdate(twoWheelerCourse._id, {
            lessons: twoWheelerLessons.map(l => l._id)
        });

        await Course.findByIdAndUpdate(fourWheelerCourse._id, {
            lessons: fourWheelerLessons.map(l => l._id)
        });

        // Create quizzes for each course
        const twoWheelerQuiz = await Quiz.create({
            quizTitle: "2-Wheeler Basic Driving Test",
            description: "Test your knowledge of traffic signs, vehicle basics, and driving rules for 2-wheeler vehicles.",
            course: twoWheelerCourse._id,
            questions: quizData.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation
            })),
            passingScore: 70,
            timeLimit: 30,
            maxAttempts: 3,
            createdBy: instructor._id
        });

        const fourWheelerQuiz = await Quiz.create({
            quizTitle: "4-Wheeler Basic Driving Test",
            description: "Test your knowledge of traffic signs, vehicle basics, and driving rules for 4-wheeler vehicles.",
            course: fourWheelerCourse._id,
            questions: quizData.map(q => ({
                questionText: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation
            })),
            passingScore: 70,
            timeLimit: 30,
            maxAttempts: 3,
            createdBy: instructor._id
        });

        console.log(`✅ Created ${twoWheelerLessons.length + fourWheelerLessons.length} lessons\n`);
        console.log(`✅ Created 2 quizzes\n`);
        console.log('📊 Summary:');
        console.log('   - 2-Wheeler Basic Course (8 lessons + 1 quiz)');
        console.log('     • 6 Traffic Signal lessons');
        console.log('     • 2 Climate Riding lessons');
        console.log('     • 1 Comprehensive Quiz');
        console.log('   - 4-Wheeler Basic Course (8 lessons + 1 quiz)');
        console.log('     • 6 Traffic Signal lessons');
        console.log('     • 2 Climate Driving lessons');
        console.log('     • 1 Comprehensive Quiz');
        console.log('\n✨ Course seed completed successfully!');
        console.log('\n📚 Students can now enroll and start learning!');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding courses:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

seedCourses();
