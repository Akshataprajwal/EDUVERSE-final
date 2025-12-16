import mongoose from 'mongoose';
import RoadSignal from './src/models/RoadSignal.js';
import User from './src/models/User.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await mongoose.connect('mongodb://localhost:27017/eduverse');

async function seedRoadSigns() {
    try {
        console.log('🚦 Starting road signs seed...\n');

        // Get an admin user for uploadedBy field
        const admin = await User.findOne({ role: 'admin' });
        if (!admin) {
            console.log('❌ No admin found. Please run initDefaultUsers first.');
            process.exit(1);
        }

        // Read the JSON data
        const dataPath = path.join(__dirname, 'src', 'data', 'roadSignsData.json');
        const roadSignsData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

        // Clear existing road signs
        await RoadSignal.deleteMany({});
        console.log('🗑️  Cleared existing road signs\n');

        let totalSigns = 0;
        const categoryMap = {
            'Cautionary': 'Warning',  // Map Cautionary to Warning
            'Informatory': 'Information'  // Map Informatory to Information
        };

        // Process each category
        for (const categoryData of roadSignsData) {
            const category = categoryMap[categoryData.category] || categoryData.category;

            for (const sign of categoryData.signs) {
                await RoadSignal.create({
                    title: sign.title,
                    image: sign.image,
                    description: sign.description,
                    category: category,
                    uploadedBy: admin._id
                });
                totalSigns++;
            }
        }

        console.log(`✅ Created ${totalSigns} road signs\n`);
        console.log('📊 Summary by Category:');

        for (const categoryData of roadSignsData) {
            console.log(`   - ${categoryData.name}: ${categoryData.signs.length} signs`);
        }

        console.log('\n✨ Road signs seed completed successfully!');
        console.log('🎯 Students can now learn all traffic signs with images and quizzes!');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding road signs:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

seedRoadSigns();
