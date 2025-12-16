import mongoose from 'mongoose';
import crypto from 'crypto';

const certificateSchema = new mongoose.Schema({
    certificateId: {
        type: String,
        required: true,
        unique: true,
        default: () => `CERT-${Date.now()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`
    },
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
    enrollment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: true
    },
    issueDate: {
        type: Date,
        default: Date.now
    },
    completionDate: {
        type: Date,
        required: true
    },
    grade: {
        type: String,
        enum: ['A+', 'A', 'B+', 'B', 'C', 'Pass'],
        default: 'Pass'
    },
    finalScore: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    pdfUrl: {
        type: String
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Admin or System
    },
    verificationCode: {
        type: String,
        required: true,
        default: () => crypto.randomBytes(8).toString('hex').toUpperCase()
    },
    isVerified: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Index for quick verification
certificateSchema.index({ certificateId: 1 });
certificateSchema.index({ verificationCode: 1 });

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;

