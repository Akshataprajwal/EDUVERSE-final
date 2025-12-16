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

const showVideoLessons = async () => {
    try {
        console.log('🎥 Showing VIDEO lessons from database:\n');

        const videoLessons = await Lesson.find({ lessonType: 'video' })
            .sort({ order: 1 })
            .limit(5);

        console.log(`Total video lessons: ${await Lesson.countDocuments({ lessonType: 'video' })}\n`);

        videoLessons.forEach((lesson, index) => {
            console.log(`${index + 1}. ${lesson.title}`);
            console.log(`   Video URL: ${lesson.videoURL}`);
            console.log(`   Type: ${lesson.lessonType}`);
            console.log(`   Duration: ${lesson.duration} min`);
            console.log('');
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

showVideoLessons();
