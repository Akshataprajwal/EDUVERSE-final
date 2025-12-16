import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import connectDB from '../config/db.js';

// Import data
import { twoWheelerCourseData } from '../data/twoWheelerCourseData.js';
import { fourWheelerCourseData } from '../data/fourWheelerCourseData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Connect to database
connectDB();

const seedCourse = async (courseData, instructor) => {
    console.log(`Processing ${courseData.courseInfo.category} Course...`);

    // 1. Check if course exists and delete it
    const existingCourse = await Course.findOne({ category: courseData.courseInfo.category });
    if (existingCourse) {
        console.log(`  🗑️  Deleting existing ${courseData.courseInfo.category} course...`);
        // Delete associated lessons
        await Lesson.deleteMany({ course: existingCourse._id });
        await Course.findByIdAndDelete(existingCourse._id);
    }

    // 2. Create Course
    console.log(`  📚 Creating Course: ${courseData.courseInfo.courseTitle}`);
    const course = await Course.create({
        ...courseData.courseInfo,
        instructorAssigned: instructor._id,
        isActive: true
    });

    // 3. Create Lessons
    console.log('  📝 Creating Lessons...');
    const lessonIds = [];
    let orderIndex = 1;

    for (const lessonData of courseData.lessons) {
        // Generate description if missing
        let description = lessonData.description;
        if (!description && lessonData.content) {
            // Extract first paragraph or 150 chars
            const cleanContent = lessonData.content.replace(/#+\s.*$/gm, '').trim(); // Remove headers
            description = cleanContent.substring(0, 150) + (cleanContent.length > 150 ? '...' : '');
        }
        if (!description) description = `Lesson on ${lessonData.lessonTitle}`;

        const newLesson = await Lesson.create({
            title: lessonData.lessonTitle,
            description: description,
            content: lessonData.content || '',
            vehicleType: courseData.courseInfo.category,
            course: course._id,
            moduleNumber: lessonData.moduleNumber || 1,
            lessonNumber: lessonData.lessonNumber,
            lessonType: lessonData.lessonType || (lessonData.videoURL ? 'video' : 'text'),
            videoURL: lessonData.videoURL || '',
            duration: lessonData.duration || 15,
            order: orderIndex++,
            isFree: lessonData.isFree || false,
            isMandatory: true,
            isActive: true
        });

        lessonIds.push(newLesson._id);
    }

    // 4. Update Course with Lesson IDs
    course.lessons = lessonIds;
    await course.save();

    console.log(`  ✅ ${courseData.courseInfo.category} Course Seeded! (${lessonIds.length} lessons)`);
};

const seedAll = async () => {
    try {
        console.log('🌱 Starting Complete Course Seed...');

        // Find or Create Instructor
        let instructor = await User.findOne({ email: 'instructor@eduverse.com' });
        if (!instructor) {
            console.log('Creating default instructor...');
            instructor = await User.create({
                name: 'Master Instructor',
                email: 'instructor@eduverse.com',
                password: 'Instructor@123',
                role: 'instructor',
                phone: '9876543210',
                isActive: true
            });
        }
        console.log(`👨‍🏫 Instructor: ${instructor.name}`);

        // Seed 2-Wheeler
        await seedCourse(twoWheelerCourseData, instructor);

        // Seed 4-Wheeler
        await seedCourse(fourWheelerCourseData, instructor);

        console.log('✨ All Courses Seeded Successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding courses:', error);
        process.exit(1);
    }
};

seedAll();
