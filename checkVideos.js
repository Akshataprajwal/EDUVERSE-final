import mongoose from 'mongoose';
import Lesson from './src/models/Lesson.js';

await mongoose.connect('mongodb://localhost:27017/eduverse');

const videoLessons = await Lesson.find({ lessonType: 'video' }).select('title videoURL lessonType');
console.log('Video Lessons in Database:');
videoLessons.forEach(lesson => {
  console.log(`- ${lesson.title}: ${lesson.videoURL}`);
});

await mongoose.connection.close();
