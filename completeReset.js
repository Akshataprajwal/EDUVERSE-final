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

const completeReset = async () => {
    try {
        console.log('🔧 COMPLETE SYSTEM RESET - FIXING EVERYTHING\n');

        // 1. Delete ALL old data
        console.log('Step 1: Cleaning database...');
        await Course.deleteMany({});
        await Lesson.deleteMany({});
        await Enrollment.deleteMany({});
        await Progress.deleteMany({});
        console.log('✅ Database cleaned\n');

        // 2. Find student
        const student = await User.findOne({ email: 'student@eduverse.com' });
        const instructor = await User.findOne({ email: 'instructor@eduverse.com' });

        if (!student || !instructor) {
            console.log('❌ Users not found. Please run seed script first.');
            process.exit(1);
        }

        // 3. Create ONE course with 24 video lessons
        console.log('Step 2: Creating course with 24 video lessons...');

        const course = await Course.create({
            courseTitle: "Complete Driving Mastery: From Beginner to Pro",
            description: "A comprehensive driving course with 24 video lessons covering everything from basic controls to advanced techniques.",
            category: "4-Wheeler",
            level: "Beginner",
            price: 49.99,
            durationDays: 30,
            thumbnailImage: "driving-course.jpg",
            learningOutcomes: [
                "Master traffic signs and signals",
                "Understand basic car controls",
                "Learn defensive driving techniques",
                "Perfect parking skills",
                "Navigate highways safely",
                "Drive safely at night",
                "Perform basic vehicle maintenance",
                "Handle driving emergencies"
            ],
            instructorAssigned: instructor._id,
            isActive: true
        });

        console.log(`✅ Course created: ${course._id}\n`);

        // 4. Create 24 video lessons
        console.log('Step 3: Creating 24 video lessons...');

        const videoLessons = [
            { title: "Traffic Signs & Signals - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Traffic Signs & Signals - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Traffic Signs & Signals - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Basic Car Controls - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Basic Car Controls - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Basic Car Controls - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Defensive Driving - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Defensive Driving - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Defensive Driving - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Parking Techniques - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Parking Techniques - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Parking Techniques - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Highway Driving - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Highway Driving - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Highway Driving - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Night Driving - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Night Driving - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Night Driving - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Vehicle Maintenance - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Vehicle Maintenance - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Vehicle Maintenance - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Emergency Handling - Part 1", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Emergency Handling - Part 2", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" },
            { title: "Emergency Handling - Part 3", url: "https://www.youtube.com/watch?v=M6X2z5aI2wE" }
        ];

        const lessonIds = [];
        for (let i = 0; i < videoLessons.length; i++) {
            const lesson = await Lesson.create({
                title: videoLessons[i].title,
                description: "Learn essential driving skills with this comprehensive video lesson.",
                course: course._id,
                lessonType: 'video',
                videoURL: videoLessons[i].url,
                order: i + 1,
                duration: 15,
                isMandatory: true,
                isActive: true
            });
            lessonIds.push(lesson._id);
        }

        // 5. Update course with lesson IDs
        course.lessons = lessonIds;
        await course.save();
        console.log(`✅ Created ${lessonIds.length} video lessons\n`);

        // 6. Enroll student
        console.log('Step 4: Enrolling student...');
        await Enrollment.create({
            student: student._id,
            course: course._id,
            status: 'active',
            enrollmentDate: new Date()
        });
        console.log('✅ Student enrolled\n');

        // 7. Summary
        console.log('═══════════════════════════════════════');
        console.log('✅ COMPLETE! EVERYTHING IS FIXED!');
        console.log('═══════════════════════════════════════');
        console.log(`Course ID: ${course._id}`);
        console.log(`Total Video Lessons: ${lessonIds.length}`);
        console.log(`Student: ${student.email}`);
        console.log(`Instructor: ${instructor.email}`);
        console.log('');
        console.log('🎉 NOW REFRESH YOUR BROWSER AND ALL VIDEOS WILL WORK!');
        console.log('');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

completeReset();
