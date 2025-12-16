import mongoose from 'mongoose';

const quizAttemptSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    answers: [{
        questionIndex: Number,
        selectedAnswer: Number, // index of selected option
        isCorrect: Boolean
    }],
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    passed: {
        type: Boolean,
        default: false
    },
    timeTaken: {
        type: Number, // in seconds
        default: 0
    },
    attemptNumber: {
        type: Number,
        default: 1
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for efficient queries
quizAttemptSchema.index({ student: 1, quiz: 1 });
quizAttemptSchema.index({ course: 1, student: 1 });

const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema);

export default QuizAttempt;
