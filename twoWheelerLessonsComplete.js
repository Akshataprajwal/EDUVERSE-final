import realRoadSigns from './realRoadSigns.js';

// Complete 2-Wheeler Course - 7 Lessons
export const twoWheelerLessonsComplete = [
    {
        title: "Introduction to Two-Wheeler Riding",
        description: "Learn the basics of motorcycle riding, safety gear, and essential controls",
        lessonNumber: 1,
        vehicleType: "2W",
        duration: 20,
        imageUrls: [
            "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800",
            "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/8yZMXCaFshs",
        content: `# Introduction to Two-Wheeler Riding

## Welcome to Your Riding Journey!

### What You'll Learn
- Motorcycle parts and controls
- Safety gear requirements
- Basic riding position
- Pre-ride checks

### Essential Safety Gear
1. **ISI Marked Helmet** - Mandatory by law
2. **Riding Jacket** - Protects from abrasions
3. **Gloves** - Better grip and protection
4. **Riding Boots** - Ankle protection
5. **Knee Guards** - Additional safety

### Before You Start
- Check tire pressure
- Test brakes
- Adjust mirrors
- Wear all safety gear`,
        roadSigns: realRoadSigns.filter(s => ["Stop", "Give Way"].includes(s.name)),
        quizQuestions: [
            {
                question: "What is mandatory safety gear for riding?",
                options: ["Helmet", "Gloves", "Jacket", "All of above"],
                correctAnswer: "Helmet",
                explanation: "ISI marked helmet is mandatory by law for both rider and pillion"
            },
            {
                question: "Which of the following creates a 'blind spot' for a rider?",
                options: ["Behind a truck", "Directly in front of a car", "Open road", "Parking lot"],
                correctAnswer: "Behind a truck",
                explanation: "Large vehicles create large blind spots where you cannot be seen by the driver."
            },
            {
                question: "The 'friction zone' refers to:",
                options: ["Tire contact patch", "Clutch engagement point", "Braking distance", "Road surface"],
                correctAnswer: "Clutch engagement point",
                explanation: "The friction zone is the area of clutch travel where power begins to transmit to the rear wheel."
            }
        ],
        isFree: true
    },
    {
        title: "Basic Controls (Throttle, Brake, Clutch)",
        description: "Master the essential controls of a motorcycle - throttle, brakes, and clutch",
        lessonNumber: 2,
        vehicleType: "2W",
        duration: 25,
        imageUrls: [
            "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/3QhU9jdlsa8",
        content: `# Basic Motorcycle Controls

## Understanding Your Bike's Controls

### 1. Throttle (Right Handlebar)
- Controls engine speed
- Twist towards you to accelerate
- Use smooth, gradual movements

### 2. Front Brake (Right Hand Lever)
- Provides 70% of braking power
- Squeeze gradually, never grab suddenly
- Use 2-3 fingers for better control

### 3. Clutch (Left Hand Lever)
- Disconnects engine from transmission
- Pull in to shift gears, release smoothly
- Find the "friction zone" for smooth starts

### 4. Rear Brake (Right Foot Pedal)
- Provides 30% of braking power
- Press down gently
- Use with front brake for maximum stopping power`,
        roadSigns: realRoadSigns.filter(s => ["Speed Limit 40", "No Entry"].includes(s.name)),
        quizQuestions: [
            {
                question: "What is the safest way to brake on a motorcycle?",
                options: ["Front brake only", "Rear brake only", "Both brakes together", "Engine brake only"],
                correctAnswer: "Both brakes together",
                explanation: "Using both brakes provides maximum stopping power - 70% front, 30% rear"
            },
            {
                question: "Which brake provides the most stopping power?",
                options: ["Rear Brake", "Front Brake", "Both are equal", "Engine Brake"],
                correctAnswer: "Front Brake",
                explanation: "The front brake provides about 70% of the motorcycle's stopping power due to weight transfer."
            },
            {
                question: "What happens if you grab the front brake properly?",
                options: ["The bike flips", "The front wheel locks up", "Smooth stop", "Engine stalls"],
                correctAnswer: "Smooth stop",
                explanation: "Gradual progressive squeezing of the front brake lever results in a smooth, controlled stop."
            }
        ],
        isFree: true
    },
    {
        title: "Balancing Techniques",
        description: "Learn how to balance a two-wheeler at slow and high speeds",
        lessonNumber: 3,
        vehicleType: "2W",
        duration: 30,
        imageUrls: [
            "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Mastering Balance on Two Wheels

## The Art of Balance

### Slow Speed Balance
- Look where you want to go
- Use rear brake for control
- Keep clutch in friction zone
- Sit upright

### High Speed Balance
- Lean with the bike
- Look through turns
- Smooth throttle control
- Body positioning

### Practice Drills
1. **Figure-8**: Practice in parking lot
2. **Slow Riding**: Go as slow as possible
3. **U-Turn**: Tight turns using countersteering`,
        roadSigns: realRoadSigns.filter(s => ["Hairpin Bend Left", "Hairpin Bend Right"].includes(s.name)),
        quizQuestions: [
            {
                question: "What should you look at while riding?",
                options: ["Down at ground", "At front wheel", "Where you want to go", "At speedometer"],
                correctAnswer: "Where you want to go",
                explanation: "Always look where you want to go - your bike follows your eyes (target fixation)."
            },
            {
                question: "For slow speed balance, you should use:",
                options: ["Front brake", "Rear brake", "Both brakes", "Feet"],
                correctAnswer: "Rear brake",
                explanation: "Using the rear brake gently helps stabilize the motorcycle at slow speeds."
            },
            {
                question: "During a turn, you should:",
                options: ["Accelerate sharply", "Brake hard", "Maintain steady throttle", "Pull clutch"],
                correctAnswer: "Maintain steady throttle",
                explanation: "Maintenance throttle helps keep the suspension settled and the bike stable through a turn."
            }
        ],
        isFree: false
    },
    {
        title: "Road Safety Rules",
        description: "Essential traffic rules and safety regulations for two-wheeler riders",
        lessonNumber: 4,
        vehicleType: "2W",
        duration: 35,
        imageUrls: [
            "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Traffic Rules for Two-Wheeler Riders

## Essential Traffic Laws

### 1. Helmet Rule
- Mandatory for rider and pillion
- Must be ISI marked
- Fine: Rs 1,000 + license suspension

### 2. Speed Limits
- City Roads: 40-50 km/h
- Highways: 60-80 km/h
- School Zones: 25 km/h

### 3. Lane Discipline
- Ride in leftmost lane
- Use indicators before changing lanes
- Never ride on footpath

### 4. Documents to Carry
- Driving License
- Registration Certificate (RC)
- Insurance Certificate
- PUC Certificate`,
        roadSigns: realRoadSigns.filter(s => ["Stop", "School Zone", "Pedestrian Crossing"].includes(s.name)),
        quizQuestions: [
            {
                question: "What is the penalty for not wearing helmet?",
                options: ["Rs 500", "Rs 1,000", "Rs 2,000", "Rs 5,000"],
                correctAnswer: "Rs 1,000",
                explanation: "Not wearing helmet attracts Rs 1,000 fine plus 3 months license suspension"
            },
            {
                question: "When changing lanes, you must:",
                options: ["Honk loudly", "Speed up", "Signal and check mirrors", "Close eyes"],
                correctAnswer: "Signal and check mirrors",
                explanation: "Always signal your intent and check mirrors/blind spots before changing lanes."
            },
            {
                question: "Maximum speed limit near schools is usually:",
                options: ["25 km/h", "40 km/h", "50 km/h", "60 km/h"],
                correctAnswer: "25 km/h",
                explanation: "School zones have lower speed limits (usually 25 km/h) to ensure student safety."
            }
        ],
        isFree: false
    },
    {
        title: "Mandatory Road Signs (with images)",
        description: "Learn all important road signs with their meanings and required actions",
        lessonNumber: 5,
        vehicleType: "2W",
        duration: 40,
        imageUrls: [],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Understanding Road Signs

## Types of Road Signs

### 1. Mandatory Signs (Blue Circle)
- Must be followed
- Violation leads to fines

### 2. Prohibitory Signs (Red Circle)
- Tell you what NOT to do
- Heavy penalties for violation

### 3. Warning Signs (Red Triangle)
- Warn about dangers ahead
- Prepare and slow down

### 4. Informatory Signs (Blue/Green Rectangle)
- Provide helpful information
- Guide your journey

## Remember
- Shape tells the type
- Color indicates urgency
- Symbol shows meaning`,
        roadSigns: realRoadSigns, // All signs for this lesson
        quizQuestions: [
            {
                question: "What does a red triangle sign indicate?",
                options: ["Mandatory action", "Prohibition", "Warning", "Information"],
                correctAnswer: "Warning",
                explanation: "Red triangle signs warn you about potential hazards ahead"
            },
            {
                question: "A blue circle sign indicates:",
                options: ["Warning", "Mandatory Action", "Information", "Prohibition"],
                correctAnswer: "Mandatory Action",
                explanation: "Blue circular signs (like Turn Left) give positive instructions that MUST be followed."
            },
            {
                question: "An Octagonal (8-sided) sign is ALWAYS:",
                options: ["Stop", "Go", "Yield", "Parking"],
                correctAnswer: "Stop",
                explanation: "The Stop sign is the only octagonal traffic sign, making it recognizable even from behind."
            }
        ],
        isFree: false
    },
    {
        title: "Riding in Rain, Night, Traffic",
        description: "Master riding techniques for different weather and traffic conditions",
        lessonNumber: 6,
        vehicleType: "2W",
        duration: 30,
        imageUrls: [
            "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Riding in Different Conditions

## Rain Riding
- Reduce speed by 30-40%
- Increase following distance
- Use both brakes gently
- Avoid painted lines and metal surfaces

## Night Riding
- Use low beam in traffic
- Use high beam on empty roads
- Wear reflective gear
- Reduce speed by 10-15%

## Heavy Traffic
- Stay alert and patient
- Use mirrors frequently
- Maintain safe distance
- Be visible to others`,
        roadSigns: realRoadSigns.filter(s => ["Slippery Road", "Narrow Road"].includes(s.name)),
        quizQuestions: [
            {
                question: "By how much should you reduce speed in rain?",
                options: ["10%", "20%", "30-40%", "50%"],
                correctAnswer: "30-40%",
                explanation: "Reduce speed by 30-40% in rain as braking distance increases significantly"
            },
            {
                question: "When riding at night, you should:",
                options: ["Use high beam always", "Wear dark clothes", "Increase following distance", "Ride faster"],
                correctAnswer: "Increase following distance",
                explanation: "Visibility is lower at night, so increased reaction time/distance is needed."
            },
            {
                question: "Painted road lines in the rain are:",
                options: ["Extra grippy", "Very slippery", "Safe to brake on", "No different"],
                correctAnswer: "Very slippery",
                explanation: "Road paint becomes extremely slick when wet; avoid braking or turning sharply on them."
            }
        ],
        isFree: false
    },
    {
        title: "Protective Gear & Emergency Handling",
        description: "Essential protective equipment and how to handle emergency situations",
        lessonNumber: 7,
        vehicleType: "2W",
        duration: 25,
        imageUrls: [
            "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Safety Gear & Emergency Handling

## Complete Safety Gear

### 1. Helmet
- ISI/DOT certified
- Full face recommended
- Replace after 5 years or any crash

### 2. Riding Jacket
- Abrasion-resistant
- CE-approved armor
- Reflective elements

### 3. Gloves & Boots
- Knuckle protection
- Palm sliders
- Ankle support

## Emergency Situations

### If Rear Wheel Skids
1. Don't panic
2. Release rear brake slightly
3. Keep bike upright
4. Look where you want to go

### Emergency Braking
1. Use both brakes
2. Keep bike straight
3. Don't lock wheels
4. Progressive pressure`,
        roadSigns: realRoadSigns.filter(s => ["No Overtaking", "Roundabout"].includes(s.name)),
        quizQuestions: [
            {
                question: "When should you replace your helmet?",
                options: ["Every year", "Every 3 years", "After crash or 5 years", "Never"],
                correctAnswer: "After crash or 5 years",
                explanation: "Replace helmet after any crash or every 5 years due to material degradation"
            },
            {
                question: "If your rear wheel skids, you should:",
                options: ["Brake harder", "Turn opposite to skid", "Look where you want to go", "Close eyes"],
                correctAnswer: "Look where you want to go",
                explanation: "Keep your eyes on your intended path; the bike will naturally align if you don't panic."
            },
            {
                question: "The most important gear for abrasion resistance is:",
                options: ["Cotton shirt", "Riding Jacket", "Windcheater", "Wool sweater"],
                correctAnswer: "Riding Jacket",
                explanation: "A proper riding jacket with abrasion-resistant material (leather/textile) protects skin during a slide."
            }
        ],
        isFree: false
    }
];

export default twoWheelerLessonsComplete;
