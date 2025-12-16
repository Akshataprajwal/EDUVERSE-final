import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    questionText: {
        type: String,
        required: [true, 'Please provide the question text']
    },
    questionType: {
        type: String,
        enum: ['multiple-choice', 'true-false'],
        default: 'multiple-choice'
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            default: false
        }
    }],
    correctAnswer: {
        type: String, // For validation
        required: true
    },
    explanation: {
        type: String // Optional explanation for the correct answer
    },
    points: {
        type: Number,
        default: 1
    },
    order: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
