import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Connect to MongoDB
await mongoose.connect('mongodb://localhost:27017/eduverse');

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    phone: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function createDemoUsers() {
    try {
        // Check if users already exist
        const existingUsers = await User.find({
            email: { $in: ['admin@eduverse.com', 'instructor@eduverse.com', 'student@eduverse.com'] }
        });

        if (existingUsers.length > 0) {
            console.log('✅ Demo users already exist!');
            existingUsers.forEach(user => {
                console.log(`   - ${user.role}: ${user.email}`);
            });
            await mongoose.connection.close();
            process.exit(0);
        }

        // Hash passwords
        const hashedPasswordAdmin = await bcrypt.hash('Admin@123', 10);
        const hashedPasswordInstructor = await bcrypt.hash('Instructor@123', 10);
        const hashedPasswordStudent = await bcrypt.hash('Student@123', 10);

        // Create demo users
        const demoUsers = [
            {
                name: 'Admin User',
                email: 'admin@eduverse.com',
                password: hashedPasswordAdmin,
                role: 'admin',
                phone: '1234567890'
            },
            {
                name: 'Instructor User',
                email: 'instructor@eduverse.com',
                password: hashedPasswordInstructor,
                role: 'instructor',
                phone: '1234567891'
            },
            {
                name: 'Student User',
                email: 'student@eduverse.com',
                password: hashedPasswordStudent,
                role: 'student',
                phone: '1234567892'
            }
        ];

        await User.insertMany(demoUsers);
        console.log('✅ Demo users created successfully!');
        console.log('   - Admin: admin@eduverse.com / Admin@123');
        console.log('   - Instructor: instructor@eduverse.com / Instructor@123');
        console.log('   - Student: student@eduverse.com / Student@123');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating demo users:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

createDemoUsers();
