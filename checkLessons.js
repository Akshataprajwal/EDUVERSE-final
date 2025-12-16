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

const checkLessons = async () => {
    try {
        console.log('🔍 Checking lessons in database...\n');

        const lessons = await Lesson.find().sort({ order: 1 }).limit(5);

        console.log(`📊 Total lessons found: ${await Lesson.countDocuments()}\n`);

        console.log('📝 First 5 lessons:\n');
        lessons.forEach((lesson, index) => {
            console.log(`${index + 1}. ${lesson.title}`);
            console.log(`   Type: ${lesson.lessonType}`);
            console.log(`   Video URL: ${lesson.videoURL || 'NOT SET ❌'}`);
            console.log(`   Order: ${lesson.order}`);
            console.log('');
        });

        // Check for lessons without video URLs
        const lessonsWithoutVideo = await Lesson.find({
            lessonType: 'video',
            $or: [
                { videoURL: { $exists: false } },
                { videoURL: '' },
                { videoURL: null }
            ]
        });

        if (lessonsWithoutVideo.length > 0) {
            console.log(`⚠️  WARNING: ${lessonsWithoutVideo.length} video lessons are missing URLs!`);
            console.log('Run: node src/utils/seedDrivingCourse.js to fix this.\n');
        } else {
            console.log('✅ All video lessons have URLs!\n');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

checkLessons();
