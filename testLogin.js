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

async function testLogin() {
    try {
        console.log('🔍 Testing login credentials...\n');

        const testAccounts = [
            { email: 'admin@eduverse.com', password: 'Admin123!', role: 'admin' },
            { email: 'instructor@eduverse.com', password: 'Instructor123!', role: 'instructor' },
            { email: 'student@eduverse.com', password: 'student123', role: 'student' }
        ];

        for (const account of testAccounts) {
            console.log(`Testing ${account.role.toUpperCase()}:`);
            console.log(`  Email: ${account.email}`);
            console.log(`  Password: ${account.password}`);

            const user = await User.findOne({ email: account.email });

            if (!user) {
                console.log(`  ❌ User not found in database\n`);
                continue;
            }

            console.log(`  ✅ User found`);
            console.log(`  Role in DB: ${user.role}`);

            const isMatch = await bcrypt.compare(account.password, user.password);

            if (isMatch) {
                console.log(`  ✅ Password matches!`);
            } else {
                console.log(`  ❌ Password does NOT match`);
                console.log(`  Resetting password...`);

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(account.password, salt);
                await User.findByIdAndUpdate(user._id, { password: hashedPassword });

                console.log(`  ✅ Password reset to: ${account.password}`);
            }
            console.log('');
        }

        console.log('✅ Login test complete!\n');
        console.log('📋 Use these credentials:');
        console.log('   Admin: admin@eduverse.com / Admin123!');
        console.log('   Instructor: instructor@eduverse.com / Instructor123!');
        console.log('   Student: student@eduverse.com / student123');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

testLogin();
