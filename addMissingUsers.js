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

async function addMissingUsers() {
    try {
        // Check which users exist
        const existingEmails = await User.find({}).select('email');
        const emailList = existingEmails.map(u => u.email);

        console.log('\n📊 Existing users:', emailList);

        const usersToCreate = [];

        // Check and create instructor
        if (!emailList.includes('instructor@eduverse.com')) {
            const hashedPassword = await bcrypt.hash('instructor123', 10);
            usersToCreate.push({
                name: 'Instructor User',
                email: 'instructor@eduverse.com',
                password: hashedPassword,
                role: 'instructor',
                phone: '1234567891'
            });
            console.log('➕ Will create: instructor@eduverse.com');
        } else {
            console.log('✅ Already exists: instructor@eduverse.com');
        }

        // Check and create student
        if (!emailList.includes('student@eduverse.com')) {
            const hashedPassword = await bcrypt.hash('student123', 10);
            usersToCreate.push({
                name: 'Student User',
                email: 'student@eduverse.com',
                password: hashedPassword,
                role: 'student',
                phone: '1234567892'
            });
            console.log('➕ Will create: student@eduverse.com');
        } else {
            console.log('✅ Already exists: student@eduverse.com');
        }

        if (usersToCreate.length > 0) {
            await User.insertMany(usersToCreate);
            console.log(`\n✅ Created ${usersToCreate.length} new user(s)!\n`);
        } else {
            console.log('\n✅ All demo users already exist!\n');
        }

        // Show final list
        const allUsers = await User.find({});
        console.log('📋 Final user list:');
        allUsers.forEach(user => {
            console.log(`   - ${user.role.toUpperCase()}: ${user.email}`);
        });
        console.log('\n');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

addMissingUsers();
