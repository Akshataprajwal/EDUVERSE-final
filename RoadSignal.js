import mongoose from 'mongoose';

const roadSignalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a signal title'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Please provide signal image']
    },
    description: {
        type: String,
        required: [true, 'Please provide signal description']
    },
    category: {
        type: String,
        enum: ['Mandatory', 'Caution', 'Information', 'Warning'],
        required: [true, 'Please select signal category']
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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

// Index for efficient queries
roadSignalSchema.index({ category: 1, course: 1 });

const RoadSignal = mongoose.model('RoadSignal', roadSignalSchema);

export default RoadSignal;
