import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Connect to database
connectDB();

const courseData = {
    courseTitle: "Complete Driving Mastery: From Beginner to Pro",
    description: "A comprehensive driving course covering everything from basic controls and traffic signs to advanced highway driving and emergency situations. Perfect for beginners and those looking to refresh their driving skills.",
    category: "4-Wheeler",
    level: "Beginner",
    price: 49.99,
    durationDays: 30,
    thumbnailImage: "driving-course-thumb.jpg",
    learningOutcomes: [
        "Master traffic signs and signals",
        "Understand basic car controls",
        "Learn defensive driving techniques",
        "Perfect parallel and perpendicular parking",
        "Navigate highways and merge safely",
        "Drive safely at night",
        "Perform basic vehicle maintenance",
        "Handle driving emergencies"
    ],
    lessons: [
        {
            lessonNumber: 1,
            title: "Traffic Signals & Road Signs Mastery",
            description: "Master the language of the road. Learn to instantly recognize and interpret traffic signs, signals, and pavement markings to pass your exam and drive legally.",
            videos: [
                { "title": "TRAFFIC SIGNS! What Do They Mean?", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Learn Traffic Signs and Their Meanings", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "40 Most Important Road Signs Every Driver Should Know", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 2,
            title: "Basic Car Controls & Cockpit Setup",
            description: "Get comfortable in the driver's seat. Understand every pedal, button, and switch, and learn how to perfectly adjust your mirrors and seat for maximum control.",
            videos: [
                { "title": "Basic Car Controls for Beginners", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Clutch, Gear & Biting Point - Basic Car Controls", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "How to Adjust Your Mirrors to Avoid Blind Spots", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 3,
            title: "Defensive Driving & Road Safety Secrets",
            description: "Learn to anticipate hazards before they happen. These defensive driving techniques will help you avoid accidents and stay safe in unpredictable traffic.",
            videos: [
                { "title": "15 Defensive Driving Secrets That Can Save Your Life", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "5 City Defensive Driving Hacks You Need to Know", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "How to Stay Safe When Turning Left", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 4,
            title: "Parking Techniques: Parallel & Perpendicular",
            description: "Stop fearing parking spots. Step-by-step formulas for perfect parallel and perpendicular parking every single time.",
            videos: [
                { "title": "Easy Steps To Master Parallel Parking Fast", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "How to Parallel Park Perfectly (Step by Step)", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Perpendicular Parking for Beginners", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 5,
            title: "Highway Rules, Merging & Lane Changing",
            description: "Conquer high-speed driving. Learn the art of smooth merging, safe lane changes, and maintaining proper spacing on freeways.",
            videos: [
                { "title": "How to Merge Onto the Highway (Guide To Pass Your Road Test)", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Highways: Lane Changing on Highways", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "How to Merge onto the Highway", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 6,
            title: "Night Driving Safety & Visibility",
            description: "Driving in the dark requires special skills. Discover tips for reducing glare, using headlights correctly, and spotting hidden dangers at night.",
            videos: [
                { "title": "How to Drive at Night - Tips and Tricks", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Driving at Night - Rules & Tips for Beginners", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Night Driving Tips Every Driver Needs to Know", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 7,
            title: "Essential Vehicle Maintenance for Drivers",
            description: "Don't get stranded. Learn the basic checks every driver must know: oil, tires, fluids, and warning lights.",
            videos: [
                { "title": "How to Check Your Oil Level", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "How To Check Tire Pressure & Properly Inflate Your Tires", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Basic Car Maintenance for Beginners", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        },
        {
            lessonNumber: 8,
            title: "Handling Emergency Situations",
            description: "Be prepared for the worst. Expert advice on how to handle tire blowouts, brake failures, and other critical driving emergencies.",
            videos: [
                { "title": "How to Handle a Tire Blowout", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "What to do if brakes fail while driving", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
                { "title": "Car Hits Building: How To Stop A Car With No Brakes", "url": "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
            ]
        }
    ]
};

const seedDrivingCourse = async () => {
    try {
        console.log('🌱 Starting Driving Course Seed...');

        // 1. Find or Create Instructor
        let instructor = await User.findOne({ email: 'instructor@eduverse.com' });
        if (!instructor) {
            console.log('Creating default instructor...');
            instructor = await User.create({
                name: 'Master Instructor',
                email: 'instructor@eduverse.com',
                password: 'password123',
                role: 'instructor',
                phone: '9876543210',
                isActive: true
            });
        }
        console.log(`👨‍🏫 Instructor: ${instructor.name}`);

        // 2. Check if course exists and delete it to start fresh
        const existingCourse = await Course.findOne({ courseTitle: courseData.courseTitle });
        if (existingCourse) {
            console.log('🗑️  Deleting existing course...');
            // Delete associated lessons
            await Lesson.deleteMany({ course: existingCourse._id });
            await Course.findByIdAndDelete(existingCourse._id);
        }

        // 3. Create Course
        console.log('📚 Creating Course...');
        const course = await Course.create({
            courseTitle: courseData.courseTitle,
            description: courseData.description,
            category: courseData.category,
            level: courseData.level,
            price: courseData.price,
            durationDays: courseData.durationDays,
            thumbnailImage: courseData.thumbnailImage,
            learningOutcomes: courseData.learningOutcomes,
            instructorAssigned: instructor._id,
            isActive: true
        });

        // 4. Create Lessons
        console.log('📝 Creating Lessons...');
        const lessonIds = [];
        let globalOrder = 1;

        for (const lessonData of courseData.lessons) {
            console.log(`   Processing Lesson ${lessonData.lessonNumber}: ${lessonData.title}`);

            for (let i = 0; i < lessonData.videos.length; i++) {
                const video = lessonData.videos[i];

                const newLesson = await Lesson.create({
                    title: `${lessonData.title} - Part ${i + 1}: ${video.title}`,
                    description: lessonData.description, // Use the main lesson description
                    course: course._id,
                    lessonType: 'video',
                    videoURL: video.url,
                    order: globalOrder++,
                    duration: 15, // Default duration
                    isMandatory: true,
                    isActive: true
                });

                lessonIds.push(newLesson._id);
            }
        }

        // 5. Update Course with Lesson IDs
        course.lessons = lessonIds;
        await course.save();

        console.log('✅ Driving Course Seeded Successfully!');
        console.log(`   Course ID: ${course._id}`);
        console.log(`   Total Lessons Created: ${lessonIds.length}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding driving course:', error);
        process.exit(1);
    }
};

seedDrivingCourse();
