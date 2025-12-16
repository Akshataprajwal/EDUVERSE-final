import User from '../models/User.js';
import bcrypt from 'bcryptjs';

/**
 * Initialize default users (Admin & Instructor) on server startup
 * This function runs once when the server starts
 */
const initDefaultUsers = async () => {
    try {
        console.log('🔍 Checking for default users...');

        // Default users configuration
        const defaultUsers = [
            {
                name: 'Super Admin',
                email: 'admin@eduverse.com',
                password: 'Admin@123',
                role: 'admin',
                phone: '1234567890'
            },
            {
                name: 'Default Instructor',
                email: 'instructor@eduverse.com',
                password: 'Instructor@123',
                role: 'instructor',
                phone: '1234567891'
            },
            {
                name: 'Demo Student',
                email: 'student@eduverse.com',
                password: 'Student@123',
                role: 'student',
                phone: '1234567892'
            }
        ];

        // Check and create each default user
        for (const userData of defaultUsers) {
            // Check if user already exists
            const existingUser = await User.findOne({ email: userData.email });

            if (existingUser) {
                console.log(`✅ ${userData.role.toUpperCase()} user already exists: ${userData.email}`);
            } else {
                // Hash password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userData.password, salt);

                // Create new user
                const newUser = await User.create({
                    name: userData.name,
                    email: userData.email,
                    password: hashedPassword,
                    role: userData.role,
                    phone: userData.phone
                });

                console.log(`✨ Created ${userData.role.toUpperCase()} user: ${userData.email}`);
            }
        }

        console.log('✅ Default users initialization complete!\n');
        console.log('📋 Demo Credentials:');
        console.log('   Admin: admin@eduverse.com / Admin@123');
        console.log('   Instructor: instructor@eduverse.com / Instructor@123');
        console.log('   Student: student@eduverse.com / Student@123');
        console.log('');

    } catch (error) {
        console.error('❌ Error initializing default users:', error.message);
        // Don't crash the server, just log the error
    }
};

export default initDefaultUsers;
