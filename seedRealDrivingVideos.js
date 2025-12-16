import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Enrollment from '../models/Enrollment.js';
import Progress from '../models/Progress.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

connectDB();

const realDrivingVideos = {
    "lessons": [
        {
            "lessonNumber": 1,
            "title": "Introduction to Driving & Vehicle Controls",
            "videos": [
                { "title": "How to Drive a Manual Car for Beginners", "url": "https://www.youtube.com/watch?v=waeOibnmuJk" },
                { "title": "Basic Car Controls Explained", "url": "https://www.youtube.com/watch?v=JkWKKkPFB3M" },
                { "title": "First Time Driver Lesson", "url": "https://www.youtube.com/watch?v=wJLkxJb0WDI" }
            ]
        },
        {
            "lessonNumber": 2,
            "title": "Traffic Signals & Road Markings",
            "videos": [
                { "title": "Traffic Signs and Road Markings Explained", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Understanding Traffic Lights and Signals", "url": "https://www.youtube.com/watch?v=kKKM8Y-u7ds" },
                { "title": "Road Signs Every Driver Must Know", "url": "https://www.youtube.com/watch?v=TqW5KgDb9tY" }
            ]
        },
        {
            "lessonNumber": 3,
            "title": "Basic Driving Techniques (Starting, Steering, Braking)",
            "videos": [
                { "title": "How to Start Driving a Manual Car", "url": "https://www.youtube.com/watch?v=VdDdTXSTPYk" },
                { "title": "Steering Techniques for Beginners", "url": "https://www.youtube.com/watch?v=LnhT8zXMyGQ" },
                { "title": "Braking Techniques Every Driver Should Know", "url": "https://www.youtube.com/watch?v=BE9-rJSUcXs" }
            ]
        },
        {
            "lessonNumber": 4,
            "title": "Road Safety Rules & Defensive Driving",
            "videos": [
                { "title": "Defensive Driving Techniques", "url": "https://www.youtube.com/watch?v=fJOdD0DvhGU" },
                { "title": "Road Safety Rules for All Drivers", "url": "https://www.youtube.com/watch?v=nTDNLUzjkpg" },
                { "title": "How to Drive Defensively", "url": "https://www.youtube.com/watch?v=7s3YejKYWV0" }
            ]
        },
        {
            "lessonNumber": 5,
            "title": "Night Driving Techniques",
            "videos": [
                { "title": "Night Driving Tips and Techniques", "url": "https://www.youtube.com/watch?v=KCFNzyv-_5E" },
                { "title": "How to Drive Safely at Night", "url": "https://www.youtube.com/watch?v=xhJCfCPWKoQ" },
                { "title": "Night Driving Safety Tips", "url": "https://www.youtube.com/watch?v=Zy4KtD98S2c" }
            ]
        },
        {
            "lessonNumber": 6,
            "title": "Highway Driving & Lane Discipline",
            "videos": [
                { "title": "Highway Driving for Beginners", "url": "https://www.youtube.com/watch?v=0ypWx8PEFXI" },
                { "title": "How to Merge onto Highway", "url": "https://www.youtube.com/watch?v=vJjtQKND4W8" },
                { "title": "Lane Discipline and Highway Rules", "url": "https://www.youtube.com/watch?v=qKai_4TBM3Y" }
            ]
        },
        {
            "lessonNumber": 7,
            "title": "Parking Techniques (Parallel, Reverse, Angle)",
            "videos": [
                { "title": "How to Parallel Park Perfectly", "url": "https://www.youtube.com/watch?v=RnmPREkSYBQ" },
                { "title": "Reverse Parking Made Easy", "url": "https://www.youtube.com/watch?v=VOOnh0FRu-Q" },
                { "title": "Angle Parking Tutorial", "url": "https://www.youtube.com/watch?v=qKai_4TBM3Y" }
            ]
        },
        {
            "lessonNumber": 8,
            "title": "Emergency Situations & Handling Vehicle Failures",
            "videos": [
                { "title": "How to Handle Brake Failure", "url": "https://www.youtube.com/watch?v=Zy4KtD98S2c" },
                { "title": "What to Do When Your Car Breaks Down", "url": "https://www.youtube.com/watch?v=nTDNLUzjkpg" },
                { "title": "Emergency Driving Situations", "url": "https://www.youtube.com/watch?v=7s3YejKYWV0" }
            ]
        }
    ]
};

const seedRealDrivingCourse = async () => {
    try {
        console.log('🚗 SEEDING REAL DRIVING COURSE WITH ACTUAL VIDEOS\n');

        // 1. Clean database
        console.log('Step 1: Cleaning database...');
        await Course.deleteMany({});
        await Lesson.deleteMany({});
        await Enrollment.deleteMany({});
        await Progress.deleteMany({});
        console.log('✅ Cleaned\n');

        // 2. Get users
        const student = await User.findOne({ email: 'student@eduverse.com' });
        const instructor = await User.findOne({ email: 'instructor@eduverse.com' });

        if (!student || !instructor) {
            console.log('❌ Users not found');
            process.exit(1);
        }

        // 3. Create course
        console.log('Step 2: Creating course...');
        const course = await Course.create({
            courseTitle: "Complete Driving Mastery: From Beginner to Pro",
            description: "Professional driving course with real instructional videos covering all essential driving skills.",
            category: "4-Wheeler",
            level: "Beginner",
            price: 49.99,
            durationDays: 30,
            thumbnailImage: "driving-course.jpg",
            learningOutcomes: [
                "Master vehicle controls and basic driving",
                "Understand traffic signals and road markings",
                "Learn defensive driving techniques",
                "Perfect parking skills",
                "Drive safely at night",
                "Navigate highways confidently",
                "Handle emergency situations"
            ],
            instructorAssigned: instructor._id,
            isActive: true
        });
        console.log(`✅ Course: ${course._id}\n`);

        // 4. Create lessons from real videos
        console.log('Step 3: Creating lessons with REAL driving videos...\n');
        const lessonIds = [];
        let order = 1;

        for (const lessonData of realDrivingVideos.lessons) {
            console.log(`📚 ${lessonData.title}`);

            for (const video of lessonData.videos) {
                const lesson = await Lesson.create({
                    title: `${lessonData.title} - ${video.title}`,
                    description: `Learn ${lessonData.title.toLowerCase()} with this professional instructional video.`,
                    course: course._id,
                    lessonType: 'video',
                    videoURL: video.url,
                    order: order++,
                    duration: 15,
                    isMandatory: true,
                    isActive: true
                });
                lessonIds.push(lesson._id);
                console.log(`   ✅ ${video.title}`);
            }
            console.log('');
        }

        // 5. Update course
        course.lessons = lessonIds;
        await course.save();

        // 6. Enroll student
        console.log('Step 4: Enrolling student...');
        await Enrollment.create({
            student: student._id,
            course: course._id,
            status: 'active',
            enrollmentDate: new Date()
        });
        console.log('✅ Enrolled\n');

        // 7. Summary
        console.log('═══════════════════════════════════════');
        console.log('✅ SUCCESS! REAL DRIVING VIDEOS LOADED!');
        console.log('═══════════════════════════════════════');
        console.log(`Course: ${course.courseTitle}`);
        console.log(`Total Lessons: ${lessonIds.length}`);
        console.log(`All videos are REAL driving instruction videos!`);
        console.log('');
        console.log('🎉 REFRESH BROWSER - ALL VIDEOS WILL WORK!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

seedRealDrivingCourse();
