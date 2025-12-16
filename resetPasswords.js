import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

await mongoose.connect('mongodb://localhost:27017/eduverse');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    phone: String
});

const User = mongoose.model('User', userSchema);

async function resetPasswords() {
    try {
        // Reset admin password
        const adminHash = await bcrypt.hash('admin123', 10);
        await User.findOneAndUpdate(
            { email: 'admin@eduverse.com' },
            { password: adminHash }
        );
        console.log('✅ Admin password reset to: admin123');

        // Reset instructor password
        const instructorHash = await bcrypt.hash('instructor123', 10);
        await User.findOneAndUpdate(
            { email: 'instructor@eduverse.com' },
            { password: instructorHash }
        );
        console.log('✅ Instructor password reset to: instructor123');

        // Reset student password
        const studentHash = await bcrypt.hash('student123', 10);
        await User.findOneAndUpdate(
            { email: 'student@eduverse.com' },
            { password: studentHash }
        );
        console.log('✅ Student password reset to: student123');

        console.log('\n📋 Demo Credentials:');
        console.log('Admin: admin@eduverse.com / admin123');
        console.log('Instructor: instructor@eduverse.com / instructor123');
        console.log('Student: student@eduverse.com / student123');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

resetPasswords();
