import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, 'Please provide a course title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a course description']
    },
    category: {
        type: String,
        enum: ['2-Wheeler', '4-Wheeler'],
        required: [true, 'Please select a vehicle category']
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: [true, 'Please select course level'],
        default: 'Beginner'
    },
    price: {
        type: Number,
        required: [true, 'Please provide course price'],
        default: 0,
        min: 0
    },
    durationDays: {
        type: Number,
        required: [true, 'Please provide course duration in days'],
        min: 1
    },
    thumbnailImage: {
        type: String,
        default: 'default-course.png'
    },
    previewVideoURL: {
        type: String,
        default: ''
    },
    learningOutcomes: [{
        type: String,
        trim: true
    }],
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    roadSignals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoadSignal'
    }],
    quizzes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }],
    instructorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    certificateAvailable: {
        type: Boolean,
        default: true
    },
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Virtual for enrolled count
courseSchema.virtual('enrolledCount').get(function () {
    return this.enrolledStudents ? this.enrolledStudents.length : 0;
});

// Ensure virtuals are included in JSON
courseSchema.set('toJSON', { virtuals: true });
courseSchema.set('toObject', { virtuals: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
