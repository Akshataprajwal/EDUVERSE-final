import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './src/models/Course.js';
import Lesson from './src/models/Lesson.js';
import User from './src/models/User.js';
import twoWheelerCourseData from './src/data/twoWheelerCourseData.js';
import fourWheelerCourseData from './src/data/fourWheelerCourseData.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const seedCourses = async () => {
    try {
        // Find an admin user to assign as instructor
        const instructor = await User.findOne({ role: 'instructor' }) || await User.findOne({ role: 'admin' });

        if (!instructor) {
            console.log('No instructor found. Please start backend server to seed users first.');
            process.exit(1);
        }

        console.log(`Assigning courses to instructor: ${instructor.name}`);

        // --- 2-WHEELER COURSE ---
        let bikeCourse = await Course.findOne({ category: '2-Wheeler' });
        if (!bikeCourse) {
            console.log('Creating 2-Wheeler Course...');
            bikeCourse = await Course.create({
                ...twoWheelerCourseData.courseInfo,
                instructorAssigned: instructor._id
            });
        } else {
            console.log('Updating 2-Wheeler Course...');
            Object.assign(bikeCourse, twoWheelerCourseData.courseInfo);
            await bikeCourse.save();
        }

        // Seed 2W Lessons
        console.log('Seeding 2-Wheeler Lessons...');
        await Lesson.deleteMany({ course: bikeCourse._id }); // Clear existing to avoid dupes

        const bikeLessons = twoWheelerCourseData.lessons.map(lesson => ({
            title: lesson.lessonTitle,      // Map lessonTitle to title
            description: "Learn about " + lesson.lessonTitle, // Ensure description exists
            content: lesson.content,
            course: bikeCourse._id,
            vehicleType: '2-Wheeler',
            lessonType: 'text',
            moduleNumber: lesson.moduleNumber,
            lessonNumber: lesson.lessonNumber,
            duration: lesson.duration,
            order: lesson.orderIndex,       // Map orderIndex to order
            isFree: lesson.isFree || false,
            isActive: true,
            videoURL: lesson.videoURL || ''
        }));

        await Lesson.insertMany(bikeLessons);
        console.log(`Initialized ${bikeLessons.length} lessons for 2-Wheeler Course.`);


        // --- 4-WHEELER COURSE ---
        let carCourse = await Course.findOne({ category: '4-Wheeler' });
        if (!carCourse) {
            console.log('Creating 4-Wheeler Course...');
            carCourse = await Course.create({
                ...fourWheelerCourseData.courseInfo, // This likely keys like courseTitle which matches schema?
                instructorAssigned: instructor._id
            });
        } else {
            console.log('Updating 4-Wheeler Course...');
            Object.assign(carCourse, fourWheelerCourseData.courseInfo);
            await carCourse.save();
        }

        // Check 4-wheeler data keys
        // fourWheelerCourseData.courseInfo keys: courseTitle, description, category, level, price... (Matches Course schema)

        // Seed 4W Lessons
        console.log('Seeding 4-Wheeler Lessons...');
        await Lesson.deleteMany({ course: carCourse._id });

        const carLessons = fourWheelerCourseData.lessons.map(lesson => ({
            title: lesson.lessonTitle,
            description: "Learn about " + lesson.lessonTitle,
            content: `# ${lesson.lessonTitle}\n\nThis is a placeholder content for the lesson **${lesson.lessonTitle}**.\n\nIn this lesson, you will learn about 4-wheeler driving techniques.`,
            course: carCourse._id,
            vehicleType: '4-Wheeler',
            lessonType: 'text',
            moduleNumber: lesson.moduleNumber,
            lessonNumber: lesson.lessonNumber,
            duration: lesson.duration,
            order: lesson.lessonNumber, // 4W data didn't have orderIndex explicitly in previous turns, using lessonNumber
            isFree: lesson.isFree || false,
            isActive: true
        }));

        await Lesson.insertMany(carLessons);
        console.log(`Initialized ${carLessons.length} lessons for 4-Wheeler Course.`);

        console.log('All seeding completed successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        if (error.errors) {
            Object.keys(error.errors).forEach(key => {
                console.error(`Validation error on ${key}: ${error.errors[key].message}`);
            });
        }
        process.exit(1);
    }
};

seedCourses();
