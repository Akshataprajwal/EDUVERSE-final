import mongoose from 'mongoose';

const simulatorResultSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vehicleType: {
        type: String,
        enum: ['2-Wheeler', '4-Wheeler'],
        required: true
    },
    environment: {
        type: String,
        enum: ['city', 'rainy', 'night', 'highway', 'village'],
        required: true
    },
    timeTaken: {
        type: Number,
        required: true
    },
    collisions: {
        type: Number,
        default: 0
    },
    signsCorrect: {
        type: Number,
        default: 0
    },
    signsMissed: {
        type: Number,
        default: 0
    },
    averageSpeed: {
        type: Number,
        default: 0
    },
    finalScore: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    scores: {
        speedControl: { type: Number, default: 0 },
        laneDiscipline: { type: Number, default: 0 },
        brakeTiming: { type: Number, default: 0 },
        roadSignResponse: { type: Number, default: 0 }
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for faster queries
simulatorResultSchema.index({ student: 1, completedAt: -1 });
simulatorResultSchema.index({ vehicleType: 1 });

const SimulatorResult = mongoose.model('SimulatorResult', simulatorResultSchema);

export default SimulatorResult;
