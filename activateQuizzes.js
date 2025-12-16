import mongoose from 'mongoose';
import Quiz from './src/models/Quiz.js';

await mongoose.connect('mongodb://localhost:27017/eduverse');

async function activateQuizzes() {
    try {
        console.log('🔧 Activating all quizzes...\n');

        const result = await Quiz.updateMany(
            {},
            { $set: { isActive: true } }
        );

        console.log(`✅ Updated ${result.modifiedCount} quizzes to active`);

        const activeCount = await Quiz.countDocuments({ isActive: true });
        console.log(`📊 Total active quizzes: ${activeCount}`);

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

activateQuizzes();
