import realRoadSigns from './realRoadSigns.js';

// Complete 4-Wheeler Course - 7 Lessons
export const fourWheelerLessonsComplete = [
    {
        title: "Introduction to Car Driving",
        description: "Learn the fundamentals of car driving, safety features, and basic controls",
        lessonNumber: 1,
        vehicleType: "4W",
        duration: 20,
        imageUrls: [
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/8yZMXCaFshs",
        content: `# Introduction to Car Driving

## Welcome to Your Driving Journey!

### What You'll Learn
- Car controls and dashboard
- Seatbelt and safety features
- Proper seating position
- Pre-drive checks

### Essential Safety
1. **Seatbelt** - Mandatory for all passengers
2. **Child Seat** - For children under 4 years
3. **Airbags** - Understand how they work
4. **Mirrors** - Adjust properly

### Before You Start (DSSSM)
- **D**ocuments: License, RC, Insurance, PUC
- **S**eat: Adjust position and backrest
- **S**eatbelt: Fasten for all passengers
- **S**teering: Adjust height and reach
- **M**irrors: Adjust all three mirrors`,
        roadSigns: realRoadSigns.filter(s => ["Stop", "Give Way"].includes(s.name)),
        quizQuestions: [
            {
                question: "Seatbelt is mandatory for:",
                options: ["Driver only", "Front passengers only", "All passengers", "No one if airbags present"],
                correctAnswer: "All passengers",
                explanation: "Seatbelt is mandatory for driver and ALL passengers in front and rear seats"
            },
            {
                question: "What does DSSSM stand for?",
                options: ["Doors, Seat, Steering, Seatbelt, Mirrors", "Documents, Seat, Seatbelt, Steering, Mirrors", "Drive, Stop, Steer, Signal, Mirror", "None of above"],
                correctAnswer: "Documents, Seat, Seatbelt, Steering, Mirrors",
                explanation: "DSSSM is the pre-drive cockpit drill: Documents, Seat, Seatbelt, Steering, Mirrors."
            },
            {
                question: "Where should children under 4 years sit?",
                options: ["Front seat", "Rear seat with child seat", "Driver's lap", "Anywhere"],
                correctAnswer: "Rear seat with child seat",
                explanation: "Children under 4 must be secured in an appropriate child restraint system in the rear seat."
            }
        ],
        isFree: true
    },
    {
        title: "Steering, Braking, Clutch, Gear",
        description: "Master the essential controls - steering, braking, clutch, and gear shifting",
        lessonNumber: 2,
        vehicleType: "4W",
        duration: 30,
        imageUrls: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/3QhU9jdlsa8",
        content: `# Mastering Car Controls

## 1. Steering
- **Hand Position**: 9 and 3 o'clock
- **Push-Pull Method**: Smooth turns
- **Never cross arms**

## 2. Pedals (Manual)
- **Clutch** (Left foot): Gear changing
- **Brake** (Right foot): Stopping
- **Accelerator** (Right foot): Speed control

## 3. Gear Shifting
- 1st: 0-15 km/h (Starting)
- 2nd: 15-25 km/h (Slow traffic)
- 3rd: 25-40 km/h (City driving)
- 4th: 40-60 km/h (Fast city)
- 5th: 60+ km/h (Highway)

## 4. Smooth Driving
- Anticipate ahead
- Smooth inputs
- Proper gear for speed
- Practice makes perfect`,
        roadSigns: realRoadSigns.filter(s => ["Speed Limit 40", "No Entry"].includes(s.name)),
        quizQuestions: [
            {
                question: "Correct hand position on steering wheel is:",
                options: ["10 and 2", "9 and 3", "12 o'clock", "Bottom of wheel"],
                correctAnswer: "9 and 3",
                explanation: "9 and 3 o'clock position is safest and prevents airbag injury"
            },
            {
                question: "Which foot should operate the brake pedal in a manual car?",
                options: ["Left foot", "Right foot", "Either foot", "Both feet"],
                correctAnswer: "Right foot",
                explanation: "The right foot operates both the Accelerator and Brake. The left foot is ONLY for the Clutch."
            },
            {
                question: "When should you shift to 2nd gear?",
                options: ["At 5 km/h", "At 15-25 km/h", "At 40 km/h", "Never"],
                correctAnswer: "At 15-25 km/h",
                explanation: "Shift to 2nd gear once the car has gained momentum, usually around 15-20 km/h."
            }
        ],
        isFree: true
    },
    {
        title: "Lane Discipline & Parking",
        description: "Learn proper lane discipline and different parking techniques",
        lessonNumber: 3,
        vehicleType: "4W",
        duration: 35,
        imageUrls: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Lane Discipline & Parking

## Lane Discipline

### 3-Lane Road
- **Left**: Slow traffic, normal driving
- **Middle**: Moderate speed
- **Right**: Fast traffic, overtaking only

### Lane Changing
1. Check rearview mirror
2. Signal 3-5 seconds before
3. Check side mirror
4. Blind spot check (shoulder)
5. Move smoothly if clear

## Parking Types

### 1. Parallel Parking
- Most difficult
- Street parking
- Practice with cones

### 2. Perpendicular Parking (90°)
- Common in parking lots
- Reverse in for safety

### 3. Angle Parking (45°)
- Easiest type
- Drive forward

### Parking on Slopes
- **Uphill**: Wheels away from curb
- **Downhill**: Wheels towards curb`,
        roadSigns: realRoadSigns.filter(s => ["No Parking", "Roundabout"].includes(s.name)),
        quizQuestions: [
            {
                question: "When parking uphill with curb, turn wheels:",
                options: ["Towards curb", "Away from curb", "Straight", "Doesn't matter"],
                correctAnswer: "Away from curb",
                explanation: "Uphill: wheels away from curb so car hits curb if it rolls back"
            },
            {
                question: "Before changing lanes, you should signal for at least:",
                options: ["1 second", "3-5 seconds", "10 seconds", "No need"],
                correctAnswer: "3-5 seconds",
                explanation: "Signal for 3-5 seconds to give other drivers enough warning before you move."
            },
            {
                question: "The rightmost lane on a 3-lane highway is for:",
                options: ["Slow traffic", "Overtaking/Fast traffic", "Trucks only", "Parking"],
                correctAnswer: "Overtaking/Fast traffic",
                explanation: "The rightmost lane is the 'fast lane' intended for overtaking. Keep left otherwise."
            }
        ],
        isFree: false
    },
    {
        title: "Road Safety Rules",
        description: "Essential traffic rules and safety regulations for car drivers",
        lessonNumber: 4,
        vehicleType: "4W",
        duration: 40,
        imageUrls: [
            "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Traffic Rules for Car Drivers

## Essential Laws

### 1. Seatbelt Rules
- Mandatory for all passengers
- Front and rear seats
- Fine: Rs 1,000 per person

### 2. Speed Limits
- School Zone: 25 km/h
- City Roads: 50 km/h
- State Highways: 80 km/h
- National Highways: 100 km/h
- Expressways: 120 km/h

### 3. Mobile Phone
- Strictly prohibited while driving
- Use Bluetooth hands-free only
- Fine: Rs 1,000 (first), Rs 2,000 (repeat)

### 4. Drunk Driving
- BAC limit: 0.03%
- Fine: Rs 10,000 + 6 months jail
- License suspended

### 5. Documents
- Driving License
- RC (Registration Certificate)
- Insurance Certificate
- PUC Certificate`,
        roadSigns: realRoadSigns.filter(s => ["Stop", "School Zone", "Pedestrian Crossing"].includes(s.name)),
        quizQuestions: [
            {
                question: "Speed limit in school zone is:",
                options: ["15 km/h", "25 km/h", "40 km/h", "50 km/h"],
                correctAnswer: "25 km/h",
                explanation: "School zones have strict 25 km/h speed limit for children's safety"
            },
            {
                question: "Legal BAC (Blood Alcohol Concentration) limit is:",
                options: ["0.03%", "0.05%", "0.08%", "0.1%"],
                correctAnswer: "0.03%",
                explanation: "The legal limit is 0.03% (30mg per 100ml blood). Anything above is a criminal offense."
            },
            {
                question: "Using a mobile phone while driving attracts a fine of:",
                options: ["Rs 100", "Rs 500", "Rs 1,000 to 5,000", "No fine"],
                correctAnswer: "Rs 1,000 to 5,000",
                explanation: "Using handheld devices while driving is a major offense with heavy fines."
            }
        ],
        isFree: false
    },
    {
        title: "Mandatory Road Signs (with images)",
        description: "Learn all important road signs with their meanings and required actions",
        lessonNumber: 5,
        vehicleType: "4W",
        duration: 40,
        imageUrls: [],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        content: `# Understanding Road Signs

## Types of Road Signs

### 1. Mandatory Signs (Blue Circle)
- Must be obeyed
- Compulsory actions

### 2. Prohibitory Signs (Red Circle)
- What NOT to do
- Violations lead to fines

### 3. Warning Signs (Red Triangle)
- Danger ahead
- Be prepared

### 4. Informatory Signs (Blue/Green)
- Helpful information
- Directions and facilities

## Sign Recognition

### By Shape
- **Octagon**: STOP (only one)
- **Circle**: Order (must obey)
- **Triangle**: Trouble (warning)
- **Rectangle**: Information

### By Color
- **Red**: Danger/Stop/Prohibit
- **Blue**: Mandatory/Information
- **Green**: Highway info
- **Yellow**: Caution/Temporary`,
        roadSigns: realRoadSigns, // All signs for this lesson
        quizQuestions: [
            {
                question: "What does a red circle sign indicate?",
                options: ["Warning", "Mandatory", "Prohibition", "Information"],
                correctAnswer: "Prohibition",
                explanation: "Red circle signs are prohibitory - they tell you what NOT to do"
            },
            {
                question: "A sign in a Triangle shape indicates:",
                options: ["Stop", "Warning/Caution", "Order", "Info"],
                correctAnswer: "Warning/Caution",
                explanation: "Triangular signs are used to warn drivers of hazards ahead (e.g., curves, school)."
            },
            {
                question: "Information signs are usually:",
                options: ["Red", "Yellow", "Blue or Green", "Black"],
                correctAnswer: "Blue or Green",
                explanation: "Blue or Green rectangular signs provide information about directions, places, or facilities."
            }
        ],
        isFree: false
    },
    {
        title: "Weather Driving (Fog, Rain, Highways)",
        description: "Master driving techniques for different weather conditions and highways",
        lessonNumber: 6,
        vehicleType: "4W",
        duration: 30,
        imageUrls: [
            "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Driving in Different Conditions

## Rain Driving
- Reduce speed by 30-40%
- Increase following distance to 8-10 seconds
- Use low beam lights
- Avoid sudden movements
- Watch for hydroplaning

## Fog Driving
- Use fog lights (not high beam)
- Drive very slowly
- Follow road markings
- Increase following distance to 10-15 seconds
- Use defogger

## Highway Driving
- Maintain steady speed
- Keep left, overtake from right
- Take breaks every 2 hours
- Check blind spots
- Use indicators early

## Emergency
- If car stalls in water: Don't restart
- If skidding: Steer where you want to go
- If brakes fail: Use engine braking`,
        roadSigns: realRoadSigns.filter(s => ["Slippery Road", "Narrow Road"].includes(s.name)),
        quizQuestions: [
            {
                question: "In heavy rain, increase following distance to:",
                options: ["2 seconds", "3 seconds", "5 seconds", "8-10 seconds"],
                correctAnswer: "8-10 seconds",
                explanation: "In heavy rain, braking distance increases significantly - need 8-10 seconds"
            },
            {
                question: "When driving in fog, you should use:",
                options: ["High beam", "Low beam/Fog lights", "Parking lights only", "No lights"],
                correctAnswer: "Low beam/Fog lights",
                explanation: "High beams reflect off fog and blind you. Use low beams or dedicated fog lights."
            },
            {
                question: "If your car starts hydroplaning (skidding on water):",
                options: ["Brake hard", "Accelerate", "Ease off gas and steer straight", "Turn sharply"],
                correctAnswer: "Ease off gas and steer straight",
                explanation: "Do not brake or turn suddenly. Ease off the accelerator until tires regain traction."
            }
        ],
        isFree: false
    },
    {
        title: "Car Dashboard Symbols Explained",
        description: "Understand all dashboard warning lights and symbols",
        lessonNumber: 7,
        vehicleType: "4W",
        duration: 25,
        imageUrls: [
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Car Dashboard Symbols

## Red Warnings (STOP IMMEDIATELY)
- **Engine Temperature**: Overheating
- **Oil Pressure**: Low oil
- **Brake Warning**: Brake system fault
- **Battery**: Charging issue

## Yellow Warnings (Attention Needed)
- **Check Engine**: Engine fault
- **Low Fuel**: Refuel soon
- **Tire Pressure**: Check tires
- **Service Due**: Maintenance needed

## Green/Blue (Information)
- **Headlights**: Lights on
- **High Beam**: High beam active
- **Cruise Control**: Cruise active
- **Eco Mode**: Economy mode on

## What to Do

### Red Light Appears
1. Stop safely
2. Turn off engine
3. Check issue
4. Call mechanic if needed

### Yellow Light Appears
1. Note the warning
2. Check manual
3. Schedule service
4. Don't ignore

## Regular Checks
- Engine oil level
- Coolant level
- Brake fluid
- Tire pressure
- Battery terminals`,
        roadSigns: realRoadSigns.filter(s => ["No Overtaking", "Roundabout"].includes(s.name)),
        quizQuestions: [
            {
                question: "What should you do if red warning light appears?",
                options: ["Ignore it", "Continue driving", "Stop immediately", "Check later"],
                correctAnswer: "Stop immediately",
                explanation: "Red warning lights indicate serious issues - stop immediately and check"
            },
            {
                question: "What does the 'Check Engine' light (Yellow) usually mean?",
                options: ["Engine exploded", "Emission/electronic fault", "Out of gas", "Door open"],
                correctAnswer: "Emission/electronic fault",
                explanation: "It indicates a non-critical fault in the engine management system; check soon but you can drive."
            },
            {
                question: "A battery symbol light while driving means:",
                options: ["Battery is fully charged", "Charging system failure", "Electric car mode", "Radio on"],
                correctAnswer: "Charging system failure",
                explanation: "It means the alternator is not charging the battery, and the car may stop soon."
            }
        ],
        isFree: false
    }
];

export default fourWheelerLessonsComplete;
