// Enhanced 4-Wheeler Course Data with Real Content
export const enhancedFourWheelerData = {
    courseInfo: {
        courseTitle: "Complete 4-Wheeler Driving Mastery",
        description: "Master car driving from basics to advanced techniques with comprehensive traffic knowledge and all-weather driving skills",
        category: "4-Wheeler",
        level: "Beginner",
        price: 4999,
        durationDays: 45,
        thumbnailImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        learningOutcomes: [
            "Master traffic signals and road signs",
            "Safe driving in all weather conditions",
            "Highway and hill station driving",
            "Parking and maneuvering skills",
            "Complete RTO test preparation"
        ]
    },

    sections: [
        {
            sectionTitle: "Traffic Signals & Road Signs",
            sectionNumber: 1,
            description: "Master traffic signals, road signs, and road safety rules for cars"
        },
        {
            sectionTitle: "Driving in Different Climates",
            sectionNumber: 2,
            description: "Learn to drive safely in various weather and terrain conditions"
        }
    ],

    lessons: [
        // SECTION 1: Traffic Signals & Road Signs
        {
            title: "Traffic Light System for Cars",
            sectionNumber: 1,
            lessonNumber: 1,
            description: "Understand traffic light signals and proper stopping procedures for cars",
            imageURL: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=600",
            content: `# Traffic Light Signals for Cars

## Red Light 🔴
- **STOP** completely before the stop line
- Keep foot on brake
- Engage handbrake if waiting long
- Never cross on red (₹1,000 fine)

## Yellow/Amber Light 🟡
- **PREPARE TO STOP** if safe
- Only proceed if stopping would be unsafe
- Reduce speed gradually
- Check mirrors for vehicles behind

## Green Light 🟢
- **PROCEED** when safe
- Check cross traffic before moving
- Watch for pedestrians
- Accelerate smoothly

## Green Arrow
- Protected turn
- Oncoming traffic has red
- Still check before turning

## Traffic Light Positioning
- Stop at the white line
- Not in the crosswalk
- Not past the line
- Ensure car is fully stopped`,
            duration: 15,
            isFree: true,
            status: "not_started"
        },
        {
            title: "Mandatory Signs for Car Drivers",
            sectionNumber: 1,
            lessonNumber: 2,
            description: "Learn all mandatory road signs specific to car driving",
            imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
            content: `# Mandatory Road Signs for Cars

## Blue Circle Signs - MUST FOLLOW

### Speed Limit
- Maximum speed allowed
- Varies by area:
  - School zones: 25 km/h
  - Residential: 40 km/h
  - City roads: 50-60 km/h
  - Highways: 80-100 km/h

### Seat Belt Compulsory
- Driver and all passengers
- Fine: ₹1,000 per person
- Front and rear seats

### One Way
- Traffic flows in one direction only
- Do not enter from wrong side
- Fine: ₹10,000

### Keep Left/Right
- Stay on indicated side
- Usually on divided roads
- Follow lane discipline

### Roundabout
- Give way to traffic already in roundabout
- Indicate before exiting
- Stay in correct lane

### Minimum Speed
- Must maintain minimum speed
- Usually on highways
- Keep up with traffic flow`,
            duration: 20,
            isFree: true,
            status: "not_started"
        },
        {
            title: "Warning Signs for Drivers",
            sectionNumber: 1,
            lessonNumber: 3,
            description: "Recognize and respond to warning signs on the road",
            imageURL: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600",
            content: `# Warning Signs (Red Triangle)

## Critical Warning Signs

### Sharp Turn/Curve
- Reduce speed to 30-40 km/h
- Stay in your lane
- Don't cut corners
- Look through the turn

### Steep Descent/Ascent
- Use lower gear
- Don't ride the brakes
- Engine braking preferred
- Check brakes before descent

### Narrow Road Ahead
- Reduce speed
- Be prepared to give way
- Watch for oncoming traffic
- Fold mirrors if needed

### Slippery Road
- Reduce speed by 40%
- Gentle steering inputs
- Avoid sudden braking
- Increase following distance

### School Zone
- Speed limit: 25 km/h
- Watch for children
- Be prepared to stop
- Extra caution during school hours

### Pedestrian Crossing
- Slow down
- Stop if pedestrians waiting
- Give complete right of way
- Be patient

### Speed Breaker
- Slow to 10-15 km/h
- Approach straight
- Don't brake on breaker
- Accelerate after crossing

### Railway Crossing
- Stop, look, listen
- Never race a train
- Gear in neutral if waiting
- Cross only when clear`,
            duration: 25,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Prohibitory Signs & Penalties",
            sectionNumber: 1,
            lessonNumber: 4,
            description: "Know what's prohibited and the penalties for violations",
            imageURL: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=600",
            content: `# Prohibitory Signs & Penalties

## Red Circle Signs - PROHIBITED

### No Entry
- Absolutely forbidden
- Usually one-way streets
- Fine: ₹10,000
- License points deducted

### No Parking
- Parking not allowed
- Tow-away zone
- Fine: ₹500-₹2,000
- Vehicle may be impounded

### No Stopping
- Cannot stop even briefly
- Usually on busy roads
- Fine: ₹500

### No Overtaking
- Stay in your lane
- Do not pass
- Usually on curves/hills
- Fine: ₹1,000

### No Horn
- Silent zone
- Hospitals, schools, courts
- Fine: ₹500

### No U-Turn
- Cannot reverse direction
- Find alternative route
- Fine: ₹500

### Height/Weight Limit
- Vehicle restrictions
- Check before proceeding
- Alternative route if exceeded

## Common Violations & Fines

| Violation | Fine | Additional Penalty |
|-----------|------|-------------------|
| Jumping Red Light | ₹1,000 | Points on license |
| Wrong Side Driving | ₹10,000 | License suspension |
| No Seat Belt | ₹1,000 | Per person |
| Drunk Driving | ₹10,000 | 6 months jail |
| Over Speeding | ₹1,000-₹2,000 | Based on excess |
| Mobile Phone Use | ₹1,000 | License suspension |
| No Insurance | ₹2,000 | Vehicle impounded |`,
            duration: 20,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Lane Discipline & Highway Rules",
            sectionNumber: 1,
            lessonNumber: 5,
            description: "Master proper lane usage and highway driving rules",
            imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
            content: `# Lane Discipline & Highway Rules

## Lane Discipline

### Three-Lane Highway
- **Left Lane**: Slow vehicles (40-60 km/h)
- **Middle Lane**: Normal speed (60-80 km/h)
- **Right Lane**: Fast/overtaking (80-100 km/h)

### Two-Lane Highway
- **Left Lane**: Normal driving
- **Right Lane**: Overtaking only

### City Roads
- Keep left unless overtaking
- Use indicators before changing lanes
- Check blind spots
- Don't weave between lanes

## Lane Changing Procedure

1. **Check mirrors** (rear and side)
2. **Signal** 3-5 seconds before
3. **Check blind spot** (shoulder check)
4. **Change smoothly** (don't cut)
5. **Cancel signal** after changing

## Highway Driving Rules

### Speed Management
- Maintain consistent speed
- Use cruise control if available
- Match traffic flow
- Don't drive too slow in fast lane

### Following Distance
- **3-Second Rule** minimum
- Increase to 5 seconds at high speed
- Double in bad weather
- More space for large vehicles

### Overtaking
- Only on right side
- Signal well in advance
- Check mirrors and blind spots
- Accelerate smoothly
- Return to left lane after passing
- Don't cut back too soon

### Merging onto Highway
- Use acceleration lane
- Match highway speed
- Find gap in traffic
- Signal and merge smoothly
- Never stop on acceleration lane

### Exiting Highway
- Plan ahead (know your exit)
- Move to right lane early
- Signal 300 meters before exit
- Use deceleration lane
- Slow down after exiting`,
            duration: 30,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Parking Rules & Techniques",
            sectionNumber: 1,
            lessonNumber: 6,
            description: "Master all types of parking and understand parking regulations",
            imageURL: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600",
            content: `# Parking Rules & Techniques

## Parallel Parking

### Steps:
1. Pull alongside front car
2. Align your mirror with their mirror
3. Reverse straight until your rear axle aligns with their bumper
4. Turn wheel fully towards curb
5. Reverse until at 45° angle
6. Straighten wheel, continue reversing
7. Turn wheel away from curb
8. Adjust position

### Tips:
- Practice makes perfect
- Use reference points
- Take your time
- Check all mirrors

## Perpendicular Parking

### Forward Parking:
1. Identify spot
2. Position car parallel to parking line
3. Turn wheel fully
4. Move forward slowly
5. Straighten when centered

### Reverse Parking (Preferred):
1. Drive past the spot
2. Stop when rear axle aligns with parking line
3. Turn wheel fully
4. Reverse slowly
5. Straighten when aligned
6. Adjust position

## Angle Parking
- Easier than perpendicular
- Turn wheel at 45° angle
- Align car with lines
- Straighten and adjust

## Parking Regulations

### Where NOT to Park:
- Within 15m of traffic signal
- On pedestrian crossings
- Near fire hydrants
- In front of driveways
- On curves or hills
- Near bus stops
- In no-parking zones

### Parking on Hills:
**Uphill**: Turn wheels away from curb
**Downhill**: Turn wheels towards curb
**Always**: Engage handbrake, use gear`,
            duration: 35,
            isFree: false,
            status: "not_started"
        },

        // SECTION 2: Driving in Different Climates
        {
            title: "Snow & Fog Driving",
            sectionNumber: 2,
            lessonNumber: 7,
            description: "Master driving techniques for snow and fog conditions",
            imageURL: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=600",
            content: `# Snow & Fog Driving

## Snow Driving

### Preparation:
- Winter tires essential
- Check antifreeze levels
- Full fuel tank (prevents line freeze)
- Emergency kit in car
- Clear all windows and lights

### Driving Techniques:
- Reduce speed by 50-70%
- Gentle acceleration
- Brake early and softly
- Increase following distance to 8-10 seconds
- Avoid sudden movements

### If Skidding:
1. Don't panic
2. Ease off accelerator
3. Steer in direction of skid
4. Don't brake suddenly
5. Regain control gradually

## Fog Driving

### Lighting:
- Use **LOW BEAM** (high beam reflects)
- Turn on fog lights if equipped
- Use hazard lights if visibility < 50m
- Ensure all lights are clean

### Speed & Distance:
- Reduce to 20-40 km/h
- Increase following distance to 6-8 seconds
- Drive within visible range
- Use road edge markings as guide

### Navigation:
- Follow lane markings
- Use cat's eyes
- Don't follow taillights blindly
- Avoid overtaking

### When to Stop:
- Visibility less than 10 meters
- Feeling unsafe
- Cannot see road markings
- Pull completely off road
- Use hazard lights`,
            duration: 30,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Highway Driving Mastery",
            sectionNumber: 2,
            lessonNumber: 8,
            description: "Become confident on highways with proper techniques",
            imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
            content: `# Highway Driving Mastery

## Pre-Highway Checklist

### Vehicle Check:
- Tire pressure (including spare)
- Fuel level (minimum half tank)
- All lights working
- Coolant and oil levels
- Windshield washer fluid
- Brakes functioning

### Driver Preparation:
- Well-rested
- Route planned
- Emergency contacts saved
- Toll money/FASTag ready

## Highway Driving Techniques

### Entering Highway:
1. Use acceleration lane
2. Match highway speed (80-100 km/h)
3. Check mirrors and blind spots
4. Signal and merge smoothly
5. Never stop on ramp

### Maintaining Speed:
- Consistent speed (80-100 km/h)
- Use cruise control if available
- Match traffic flow
- Don't drive too slow in fast lane

### Lane Selection:
- **Left**: Slow vehicles
- **Middle**: Normal speed
- **Right**: Overtaking
- Return to left after overtaking

### Overtaking:
1. Check mirrors
2. Signal right
3. Check blind spot
4. Accelerate smoothly
5. Pass quickly but safely
6. Signal left
7. Return to left lane

### Following Distance:
- Minimum 3-second rule
- 5 seconds at high speed
- 8 seconds for trucks
- Double in bad weather

## Highway Hazards

### Truck Blind Spots:
- Directly behind
- Directly in front
- Left side
- Right side (largest)
- **Stay visible or stay back**

### Wind Gusts:
- Common near overpasses
- Firm grip on steering
- Reduce speed slightly
- Expect crosswinds

### Fatigue Management:
- Break every 2 hours
- Stretch and walk
- Stay hydrated
- Switch drivers if possible
- Stop if drowsy

## Exiting Highway:
1. Plan 2km ahead
2. Move to right lane early
3. Signal 300m before exit
4. Use deceleration lane
5. Slow down after exiting
6. Adjust to lower speed limit`,
            duration: 35,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Night Driving Safety",
            sectionNumber: 2,
            lessonNumber: 9,
            description: "Drive safely and confidently during night hours",
            imageURL: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600",
            content: `# Night Driving Safety

## Pre-Night Drive Preparation

### Vehicle Check:
- All lights working (headlights, taillights, indicators)
- Headlights properly aimed
- Windshield clean (inside and out)
- Mirrors clean and adjusted
- Wipers functioning

### Driver Preparation:
- Well-rested
- Eyes not strained
- Familiar with route
- Phone charged
- Emergency kit in car

## Night Driving Techniques

### Headlight Usage:

**High Beam:**
- Use on empty roads
- Better visibility (100-150m)
- Dip for oncoming traffic
- Dip when following vehicles

**Low Beam:**
- Use in traffic
- City driving
- Prevents blinding others
- 30-50m visibility

### Speed Reduction:
- Reduce by 20-30%
- Drive within headlight range
- More reaction time needed
- Account for reduced visibility

### Following Distance:
- Increase to 4-5 seconds
- Can't judge distance as well
- More time to react
- Use their lights to see road

## Dealing with Glare

### Oncoming Headlights:
1. Look to right edge of road
2. Use peripheral vision
3. Don't stare at lights
4. Slow down if needed
5. Blink to reset vision

### Rear View Mirror:
- Use night mode
- Adjust to reduce glare
- Check side mirrors instead

## Night Hazards

### Reduced Visibility:
- Pedestrians harder to see
- Animals on road
- Potholes and obstacles
- Road work may not be lit

### Other Drivers:
- Drunk drivers more common
- Tired drivers
- Speeders
- Be extra defensive

### Fatigue:
- Sets in faster at night
- Watch for warning signs
- Take breaks every hour
- Stop if drowsy

## Emergency Situations

### Breakdown at Night:
1. Pull off road completely
2. Turn on hazard lights
3. Use reflective triangle
4. Stay in car if unsafe outside
5. Call for help

### If Blinded:
1. Slow down
2. Look right
3. Use road edge as guide
4. Don't brake suddenly
5. Pull over if necessary`,
            duration: 30,
            isFree: false,
            status: "not_started"
        },
        {
            title: "Hill Station Driving",
            sectionNumber: 2,
            lessonNumber: 10,
            description: "Master the techniques for safe mountain and hill driving",
            imageURL: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
            content: `# Hill Station Driving

## Pre-Hill Drive Preparation

### Vehicle Check:
- Brakes in perfect condition
- Coolant level full
- Engine oil level
- Tire condition and pressure
- Spare tire and tools
- Fuel tank full

### Essential Items:
- Emergency kit
- Drinking water
- Snacks
- Warm clothes
- Phone charged
- Route map/GPS

## Uphill Driving

### Gear Selection:
- Use lower gears (2nd or 3rd)
- Don't strain engine in high gear
- Downshift before steep sections
- Maintain steady speed

### Techniques:
- Build momentum before climb
- Maintain consistent speed
- Don't stop mid-climb if possible
- If stopping, use handbrake

### Overtaking Uphill:
- Only on straight sections
- Need more power
- Check for oncoming traffic
- Complete quickly

## Downhill Driving

### Critical Rule:
**Use ENGINE BRAKING, not just brakes!**

### Proper Technique:
1. Select lower gear (2nd or 3rd)
2. Let engine control speed
3. Use brakes intermittently
4. Never ride the brakes
5. Brake before curves, not during

### Why Engine Braking:
- Prevents brake fade
- Maintains control
- Saves brake pads
- Safer on long descents

## Hairpin Bends

### Approaching:
1. Slow down well before
2. Downshift to 2nd gear
3. Stay in your lane
4. Horn before blind turns
5. Be prepared to stop

### Navigating:
- Look through the turn
- Turn steering smoothly
- Accelerate gently out
- Don't cut corners

## Mountain Road Rules

### Right of Way:
- **Uphill vehicle has priority**
- Downhill vehicle must give way
- Pull over to let faster vehicles pass
- Be courteous

### Safety Tips:
- Drive during daylight
- Avoid monsoon season
- Watch for falling rocks
- Respect speed limits
- Take breaks frequently

## Emergency Situations

### Brake Failure:
1. Pump brakes rapidly
2. Downshift to lower gear
3. Use handbrake gradually
4. Look for escape route
5. Use runaway truck ramp if available

### Overheating:
1. Turn off AC
2. Turn on heater (full blast)
3. Pull over safely
4. Let engine cool (30 min)
5. Check coolant when cool

### If Vehicle Rolls Back:
1. Apply handbrake immediately
2. Press clutch and brake
3. Shift to 1st gear
4. Release handbrake slowly
5. Give gas and release clutch`,
            duration: 40,
            isFree: false,
            status: "not_started"
        }
    ],

    quizzes: [
        {
            title: "Traffic Signals & Road Signs Quiz",
            sectionNumber: 1,
            questions: [
                {
                    question: "What is the speed limit in school zones?",
                    options: [
                        "40 km/h",
                        "25 km/h",
                        "50 km/h",
                        "30 km/h"
                    ],
                    correctAnswer: 1,
                    explanation: "The speed limit in school zones is 25 km/h to ensure maximum safety for children."
                },
                {
                    question: "What is the fine for not wearing a seat belt?",
                    options: [
                        "₹500",
                        "₹1,000 per person",
                        "₹2,000",
                        "₹5,000"
                    ],
                    correctAnswer: 1,
                    explanation: "Not wearing a seat belt attracts a fine of ₹1,000 per person not wearing it."
                },
                {
                    question: "What is the 3-second rule?",
                    options: [
                        "Time to check mirrors",
                        "Minimum following distance",
                        "Time to signal before turning",
                        "Time to stop at red light"
                    ],
                    correctAnswer: 1,
                    explanation: "The 3-second rule is the minimum safe following distance between vehicles."
                },
                {
                    question: "When parking uphill, which way should you turn your wheels?",
                    options: [
                        "Towards the curb",
                        "Away from the curb",
                        "Straight",
                        "Doesn't matter"
                    ],
                    correctAnswer: 1,
                    explanation: "When parking uphill, turn wheels away from the curb so the car won't roll into traffic if brakes fail."
                },
                {
                    question: "A red triangle sign indicates:",
                    options: [
                        "Mandatory instruction",
                        "Prohibition",
                        "Warning of hazard",
                        "Information"
                    ],
                    correctAnswer: 2,
                    explanation: "Red triangle signs are warning signs that alert you to potential hazards ahead."
                }
            ]
        },
        {
            title: "Climate & Terrain Driving Quiz",
            sectionNumber: 2,
            questions: [
                {
                    question: "Which beam should you use in fog?",
                    options: [
                        "High beam",
                        "Low beam",
                        "No lights",
                        "Hazard lights only"
                    ],
                    correctAnswer: 1,
                    explanation: "Use LOW beam in fog. High beam reflects back off fog and reduces visibility."
                },
                {
                    question: "On a downhill, what should you primarily use to control speed?",
                    options: [
                        "Foot brake only",
                        "Handbrake",
                        "Engine braking in lower gear",
                        "Neutral and brake"
                    ],
                    correctAnswer: 2,
                    explanation: "Use engine braking by selecting a lower gear. This prevents brake fade and maintains better control."
                },
                {
                    question: "On a hill, who has right of way?",
                    options: [
                        "Downhill vehicle",
                        "Uphill vehicle",
                        "Larger vehicle",
                        "First to arrive"
                    ],
                    correctAnswer: 1,
                    explanation: "Uphill vehicles have priority as it's harder for them to stop and restart on an incline."
                },
                {
                    question: "By how much should you reduce speed in snow?",
                    options: [
                        "20-30%",
                        "50-70%",
                        "10-20%",
                        "No reduction needed"
                    ],
                    correctAnswer: 1,
                    explanation: "In snow, reduce speed by 50-70% as traction is severely reduced."
                },
                {
                    question: "How often should you take breaks on highway?",
                    options: [
                        "Every hour",
                        "Every 2 hours",
                        "Every 3 hours",
                        "No breaks needed"
                    ],
                    correctAnswer: 1,
                    explanation: "Take breaks every 2 hours on highways to prevent fatigue and maintain alertness."
                }
            ]
        }
    ]
};

export default enhancedFourWheelerData;
