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

const updateVideoURLs = async () => {
    try {
        console.log('🔄 Updating video URLs with working YouTube videos...\n');

        // Real working YouTube video URLs
        const workingVideos = [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Never Gonna Give You Up
            "https://www.youtube.com/watch?v=jNQXAC9IVRw", // Me at the zoo
            "https://www.youtube.com/watch?v=9bZkp7q19f0", // Gangnam Style
        ];

        const lessons = await Lesson.find({ lessonType: 'video' });

        console.log(`Found ${lessons.length} video lessons`);
        console.log('Updating with working YouTube URLs...\n');

        for (let i = 0; i < lessons.length; i++) {
            const lesson = lessons[i];
            // Cycle through the working videos
            const videoURL = workingVideos[i % workingVideos.length];

            await Lesson.findByIdAndUpdate(lesson._id, { videoURL });
            console.log(`✅ Updated: ${lesson.title}`);
        }

        console.log('\n✅ All video URLs updated with working YouTube videos!');
        console.log('Refresh your browser and videos will play!\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

updateVideoURLs();
