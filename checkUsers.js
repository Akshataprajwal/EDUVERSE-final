import mongoose from 'mongoose';

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

async function checkUsers() {
    try {
        const users = await User.find({});
        console.log(`\n📊 Total users in database: ${users.length}\n`);

        users.forEach(user => {
            console.log(`✅ ${user.role.toUpperCase()}: ${user.email} (${user.name})`);
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

checkUsers();
