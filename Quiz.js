import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    quizTitle: {
        type: String,
        required: [true, 'Please provide a quiz title'],
        trim: true
    },
    description: {
        type: String
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson'
    },
    questions: [{
        questionText: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswer: {
            type: String,
            required: true
        },
        explanation: {
            type: String,
            default: ''
        }
    }],
    passingScore: {
        type: Number,
        default: 70, // percentage
        min: 0,
        max: 100
    },
    timeLimit: {
        type: Number, // in minutes
        default: 30
    },
    maxAttempts: {
        type: Number,
        default: 3
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Virtual for total questions
quizSchema.virtual('totalQuestions').get(function () {
    return this.questions ? this.questions.length : 0;
});

quizSchema.set('toJSON', { virtuals: true });
quizSchema.set('toObject', { virtuals: true });

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;

