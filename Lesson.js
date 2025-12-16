import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a lesson title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a lesson description']
    },
    content: {
        type: String,
        default: ''
    },
    vehicleType: {
        type: String,
        enum: ['2-Wheeler', '4-Wheeler'],
        required: [true, 'Please specify vehicle type']
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    moduleNumber: {
        type: Number,
        default: 1
    },
    lessonNumber: {
        type: Number,
        required: true
    },
    lessonType: {
        type: String,
        enum: ['video', 'pdf', 'image', 'text'],
        default: 'text'
    },
    videoURL: {
        type: String,
        default: ''
    },
    pdfURL: {
        type: String,
        default: ''
    },
    imageURL: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    textContent: {
        type: String,
        default: ''
    },
    duration: {
        type: Number, // in minutes
        default: 0
    },
    order: {
        type: Number,
        required: true,
        default: 1
    },
    isFree: {
        type: Boolean,
        default: false
    },
    isMandatory: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for efficient queries
lessonSchema.index({ course: 1, order: 1 });
lessonSchema.index({ vehicleType: 1, lessonNumber: 1 });

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;
