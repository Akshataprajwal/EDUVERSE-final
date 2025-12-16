import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Strong password regex: 8-16 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#^-])[A-Za-z\d@$!%*?&_#^-]{8,16}$/;

// List of weak/common passwords
const weakPasswords = [
    'password', 'password123', '12345678', '123456789', 'qwerty',
    'abc123', 'monkey', '1234567890', 'letmein', 'trustno1',
    'dragon', 'baseball', 'iloveyou', 'master', 'sunshine',
    'ashley', 'bailey', 'passw0rd', 'shadow', 'superman',
    'qazwsx', 'michael', 'football', 'admin', 'admin123',
    'welcome', 'login', 'test123', 'user123', 'demo123'
];

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        select: false,
        validate: {
            validator: function (password) {
                // Check if password contains spaces
                if (/\s/.test(password)) {
                    return false;
                }

                // Check if password is in weak passwords list
                if (weakPasswords.includes(password.toLowerCase())) {
                    return false;
                }

                // Check against strong password regex
                return strongPasswordRegex.test(password);
            },
            message: 'Password must be 8-16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*_-). Spaces and common passwords are not allowed.'
        }
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        default: 'student'
    },
    phone: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        default: 'default-avatar.png'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    enrolledCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    isPaid: {
        type: Boolean,
        default: false
    },
    paymentId: {
        type: String
    },
    orderId: {
        type: String
    },
    paymentMethod: {
        type: String,
        default: 'dummy'
    },
    enrolledCourseType: {
        type: String, // "2-wheeler" or "4-wheeler"
        enum: ['2-Wheeler', '4-Wheeler', null],
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
