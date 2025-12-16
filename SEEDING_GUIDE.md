# Complete Course Content Seeding Guide

## 📦 What's Included

This seeding package includes:
- ✅ **2 Complete Courses** (Two-Wheeler & Four-Wheeler)
- ✅ **12 Detailed Lessons** (6 per course)
- ✅ **20 Quiz Questions** (10 per course)
- ✅ **20 Road Signs** with real images
- ✅ **All images from open-license sources** (Wikimedia Commons, Unsplash)

## 🚀 How to Seed the Database

### Method 1: Using npm script (Recommended)

1. **Ensure MongoDB is running**
   ```bash
   # Check if MongoDB is running
   mongod --version
   ```

2. **Make sure your `.env` file exists in the backend folder** with:
   ```
   MONGO_URI=mongodb://localhost:27017/eduverse
   ```

3. **Run the seed script**:
   ```bash
   cd backend
   npm run seed:courses
   ```

### Method 2: Direct Node Execution

If Method 1 doesn't work, try:

```bash
cd backend
node src/utils/seedCompleteCourseContent.js
```

### Method 3: Manual MongoDB Import (Fallback)

If the above methods fail, you can manually import using MongoDB Compass or mongoimport.

## 📊 Expected Output

When successful, you should see:

```
✅ MongoDB Connected for seeding...
📌 Using instructor: [Instructor Name]
🗑️  Clearing existing course data...
✅ Existing data cleared

🏍️  Creating Two-Wheeler Course...
✅ Two-Wheeler Course created
📚 Creating Two-Wheeler Lessons...
  ✓ Lesson 1: Introduction to Two-Wheeler Riding Basics
  ✓ Lesson 2: Balance, Clutch Control & Throttle Management
  ... (and so on)

🚗 Creating Four-Wheeler Course...
✅ Four-Wheeler Course created
📚 Creating Four-Wheeler Lessons...
  ✓ Lesson 1: Introduction to Four-Wheeler Driving Fundamentals
  ... (and so on)

🚦 Creating Road Signs...
✅ Created 20 road signs

🎉 SEEDING COMPLETED SUCCESSFULLY!
```

## 🔍 Verify the Data

After seeding, you can verify the data was created:

1. **Check in MongoDB Compass**:
   - Connect to `mongodb://localhost:27017/eduverse`
   - Look for collections: `courses`, `lessons`, `quizzes`, `roadsignals`

2. **Check via API**:
   ```bash
   # Get all courses
   curl http://localhost:5000/api/courses

   # Get 2-Wheeler course
   curl http://localhost:5000/api/courses?category=2-Wheeler

   # Get 4-Wheeler course
   curl http://localhost:5000/api/courses?category=4-Wheeler
   ```

## 📁 Files Created

1. **`src/data/completeCourseContent.js`** - Complete course content data
2. **`src/utils/seedCompleteCourseContent.js`** - Seeding script
3. **`package.json`** - Updated with `seed:courses` script

## ⚠️ Troubleshooting

### Error: "MONGO_URI is not defined"

**Solution**: Create or check your `.env` file in the `backend` folder:

```env
MONGO_URI=mongodb://localhost:27017/eduverse
PORT=5000
JWT_SECRET=your_jwt_secret_here
FRONTEND_URL=http://localhost:5173
```

### Error: "No instructor or admin found"

**Solution**: Run the admin seed first:
```bash
npm run seed
```

### Error: MongoDB connection failed

**Solution**: 
1. Make sure MongoDB is running
2. Check your MONGO_URI in .env
3. Try connecting with MongoDB Compass first

## 🎯 Next Steps

After successful seeding:

1. **Start your backend server**:
   ```bash
   npm run dev
   ```

2. **Start your frontend**:
   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Access the courses**:
   - Login as a student
   - Navigate to `/student/course-selection`
   - Select either 2-Wheeler or 4-Wheeler
   - Start learning!

## 📝 Content Summary

### Two-Wheeler Course Lessons:
1. Introduction to Two-Wheeler Riding Basics
2. Balance, Clutch Control & Throttle Management
3. Road Positioning & Lane Discipline for Two-Wheelers
4. Cornering Techniques & Body Positioning
5. Riding in Adverse Conditions (Rain, Night, Traffic)
6. Advanced Safety, Emergency Maneuvers & Defensive Riding

### Four-Wheeler Course Lessons:
1. Introduction to Four-Wheeler Driving Fundamentals
2. Steering Control, Acceleration & Braking Techniques
3. Lane Discipline, Merging & Highway Driving
4. Parking Techniques: Parallel, Perpendicular & Angle Parking
5. Understanding Dashboard Indicators & Vehicle Maintenance
6. Defensive Driving, Hazard Perception & Emergency Situations

### Road Signs Included:
- Stop Sign, Yield Sign, Speed Limit
- No Entry, One Way, No Parking
- Pedestrian Crossing, School Zone
- Railroad Crossing, Slippery When Wet
- Sharp Turn, Roundabout, Merge
- U-Turn Prohibited, Hospital Ahead
- Men at Work, Steep Grade, Narrow Bridge
- Two-Way Traffic, Keep Right

## ✅ Success Criteria

Your seeding is successful if:
- ✅ 2 courses are created (2-Wheeler & 4-Wheeler)
- ✅ 12 lessons are created (6 per course)
- ✅ 2 quizzes are created with 10 questions each
- ✅ 20 road signs are created
- ✅ All images are real URLs (no placeholders)
- ✅ All content is professional and educational

---

**Need Help?** Check the console output for detailed error messages.
