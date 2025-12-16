import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    lessonsCompleted: [{
        lesson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson'
        },
        completedAt: {
            type: Date,
            default: Date.now
        }
    }],
    quizzesCompleted: [{
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        },
        score: {
            type: Number,
            required: true
        },
        passed: {
            type: Boolean,
            required: true
        },
        completedAt: {
            type: Date,
            default: Date.now
        }
    }],
    totalPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    courseStatus: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
    },
    startedAt: {
        type: Date
    },
    completedAt: {
        type: Date
    }
}, {
    timestamps: true
});

// Compound index to ensure one progress record per student per course
progressSchema.index({ student: 1, course: 1 }, { unique: true });

// Method to calculate progress percentage
progressSchema.methods.calculateProgress = async function () {
    const Course = mongoose.model('Course');
    const course = await Course.findById(this.course)
        .populate('lessons')
        .populate('quizzes');

    if (!course) return 0;

    const totalLessons = course.lessons.length;
    const totalQuizzes = course.quizzes.length;
    const completedLessons = this.lessonsCompleted.length;
    const completedQuizzes = this.quizzesCompleted.length;

    const totalItems = totalLessons + totalQuizzes;
    const completedItems = completedLessons + completedQuizzes;

    if (totalItems === 0) return 0;

    const percentage = Math.round((completedItems / totalItems) * 100);
    this.totalPercentage = percentage;

    // Update course status
    if (percentage === 0) {
        this.courseStatus = 'Not Started';
    } else if (percentage === 100) {
        this.courseStatus = 'Completed';
        if (!this.completedAt) {
            this.completedAt = new Date();
        }
    } else {
        this.courseStatus = 'In Progress';
        if (!this.startedAt) {
            this.startedAt = new Date();
        }
    }

    await this.save();
    return percentage;
};

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;
