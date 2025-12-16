import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import Lesson from '../models/Lesson.js';
import connectDB from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

connectDB();

const removeTextLessons = async () => {
    try {
        console.log('🗑️  Removing text lessons...\n');

        // Count before
        const textCount = await Lesson.countDocuments({ lessonType: 'text' });
        const videoCount = await Lesson.countDocuments({ lessonType: 'video' });

        console.log(`Before:`);
        console.log(`  Video lessons: ${videoCount}`);
        console.log(`  Text lessons: ${textCount}`);
        console.log('');

        // Delete text lessons
        const result = await Lesson.deleteMany({ lessonType: 'text' });

        console.log(`✅ Deleted ${result.deletedCount} text lessons`);
        console.log('');

        // Count after
        const remainingVideo = await Lesson.countDocuments({ lessonType: 'video' });
        console.log(`After:`);
        console.log(`  Video lessons: ${remainingVideo}`);
        console.log(`  Text lessons: 0`);
        console.log('');

        console.log('✅ Now you will ONLY see video lessons!');
        console.log('   Refresh your browser to see the changes.');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

removeTextLessons();
