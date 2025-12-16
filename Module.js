import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a module title'],
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    type: {
        type: String,
        enum: ['road-safety', 'vehicle-simulation', 'theory', 'practical'],
        required: true
    },
    content: {
        type: String, // HTML content or video URL
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    duration: {
        type: Number, // in minutes
        default: 30
    },
    resources: [{
        title: String,
        url: String,
        type: String // pdf, video, link
    }],
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
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

const Module = mongoose.model('Module', moduleSchema);

export default Module;
