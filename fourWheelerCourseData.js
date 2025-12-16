
export const fourWheelerCourseData = {
    courseInfo: {
        courseTitle: "Complete 4-Wheeler Driving Mastery",
        description: "Master safe and confident car driving from basics to advanced highway driving. Comprehensive training for manual and automatic cars.",
        category: "4-Wheeler",
        level: "Beginner",
        price: 4999,
        durationDays: 45,
        thumbnailImage: "car-course-thumbnail.jpg",
        learningOutcomes: [
            "Master car controls and dashboard",
            "Understand traffic rules thoroughly",
            "Learn defensive driving techniques",
            "Navigate city and highway confidently",
            "Perfect parking (parallel & perpendicular)",
            "Night and adverse weather driving",
            "Emergency situation handling",
            "Complete RTO test preparation"
        ],
        certificateAvailable: true
    },
    lessons: [
        {
            lessonTitle: "Car Controls & Dashboard",
            moduleNumber: 1,
            lessonNumber: 1,
            lessonType: "video",
            duration: 25,
            isFree: true,
            videoURL: "https://www.youtube.com/embed/M6X2z5aI2wE",
            content: `
# Car Controls & Dashboard

## Understanding Your Vehicle

Before you start driving, you must be intimately familiar with your car's controls.

### The Foot Pedals (ABC)
1. **A - Accelerator (Gas)**: The rightmost pedal. Controls speed.
2. **B - Brake**: The middle pedal (or left in automatic). Stops the car.
3. **C - Clutch**: The leftmost pedal (Manual only). Disengages engine from wheels.

### The Dashboard
- **Speedometer**: Shows current speed
- **Tachometer**: Shows engine RPM
- **Fuel Gauge**: Fuel level
- **Temperature Gauge**: Engine temperature

### Hand Controls
- **Steering Wheel**: Directional control
- **Gear Stick**: Changing gears
- **Handbrake**: Parking brake
- **Indicators**: Signal lights
            `
        },
        {
            lessonTitle: "Starting & Moving Off",
            moduleNumber: 1,
            lessonNumber: 2,
            lessonType: "video",
            duration: 30,
            isFree: true,
            videoURL: "https://www.youtube.com/embed/M6X2z5aI2wE",
            content: `
# Starting the Engine and Moving Off

## The Process (Manual)
1. Ensure gear is in **Neutral**.
2. Press **Clutch** fully.
3. Turn key / Press Start button.
4. Shift to **1st Gear**.
5. Find the **Biting Point** (friction point).
6. Release handbrake.
7. Gently apply gas while slowly releasing clutch.

## The Process (Automatic)
1. Ensure gear is in **Park (P)**.
2. Press **Brake** pedal.
3. Start engine.
4. Shift to **Drive (D)**.
5. Release handbrake.
6. Release brake and gently apply gas.
            `
        },
        {
            lessonTitle: "Traffic Rules & Signs",
            moduleNumber: 1,
            lessonNumber: 3,
            lessonType: "text",
            duration: 35,
            isFree: false,
            videoURL: "",
            content: `
# Traffic Rules & Road Signs

## Priority Rules
- **Yield to right** at uncontrolled intersections.
- **Pedestrians** have right of way at crossings.
- **Emergency vehicles** always have priority.

## Essential Signs
- **Stop Sign (Octagon)**: Full stop required.
- **Give Way (Inverted Triangle)**: Yield to other traffic.
- **Speed Limit (Circle with number)**: Maximum legal speed.
- **No Entry (Circle with line)**: Do not enter.

## Lane Discipline
- Drive in the **left lane** (in India/UK) or right lane (US/Europe) as per local laws.
- Use indicators before changing lanes.
- Checking mirrors and blind spots is mandatory.
            `
        },
        {
            lessonTitle: "Steering & Turns",
            moduleNumber: 1,
            lessonNumber: 4,
            lessonType: "video",
            duration: 30,
            isFree: false,
            videoURL: "https://www.youtube.com/embed/M6X2z5aI2wE",
            content: `
# Steering Techniques

## Hand Position
- **9 and 3**: The modern standard for airbag safety.
- **10 and 2**: Old school, acceptable but less recommended now.

## Turning Methods
1. **Push-Pull (Shuffle)**: Safest, keeps hands on wheel.
2. **Hand-over-Hand**: Good for tight maneuvers and parking.

## Making a Turn
1. **Mirror-Signal-Maneuver** routine.
2. Slow down *before* the turn.
3. Select appropriate gear (usually 2nd).
4. Look through the turn.
5. Accelerate gently out of the turn.
            `
        },
        {
            lessonTitle: "Parking Mastery",
            moduleNumber: 2,
            lessonNumber: 5,
            lessonType: "video",
            duration: 40,
            isFree: false,
            videoURL: "https://www.youtube.com/embed/M6X2z5aI2wE",
            content: `
# Parking Techniques

## Parallel Parking Steps
1. Pull up parallel to the car in front of the empty spot.
2. Align your rear bumper with theirs.
3. Reverse straight until your rear axle is at their bumper.
4. Turn wheel fully towards curb.
5. Reverse until at 45 degree angle.
6. Straighten wheel, reverse.
7. Turn wheel fully away from curb to swing front in.

## Perpendicular Parking
1. Identify spot.
2. Swing wide to get angle.
3. Turn wheel fully into spot.
4. Straighten out.
            `
        },
        {
            lessonTitle: "Highway Driving",
            moduleNumber: 2,
            lessonNumber: 6,
            lessonType: "video",
            duration: 35,
            isFree: false,
            videoURL: "https://www.youtube.com/embed/M6X2z5aI2wE",
            content: `
# Highway Driving

## Merging
- Match speed of highway traffic on the ramp.
- Check mirrors and blind spot.
- Find a gap and merge smoothly.
- Do not stop on the acceleration ramp!

## Lane Driving
- Keep left (slow lane) unless overtaking.
- Maintain constant speed.
- **2-Second Rule**: Maintain safe following distance.

## Exiting
- Plan ahead.
- Signal early (300m).
- Decelerate *after* entering the exit ramp.
            `
        },
        {
            lessonTitle: "Night & Weather Driving",
            moduleNumber: 2,
            lessonNumber: 7,
            lessonType: "text",
            duration: 30,
            isFree: false,
            videoURL: "",
            content: `
# Adverse Conditions

## Night Driving
- Use high beams only when no oncoming traffic.
- Reduce speed (visibility is lower).
- Watch for pedestrians and animals.
- Don't look directly at oncoming headlights.

## Rain
- **Aquaplaning**: When tires lose contact with road. Lift off gas, don't brake hard.
- Increase following distance (4 seconds).
- Use wipers and defoggers.
- Turn on headlights (low beam).
            `
        },
        {
            lessonTitle: "Defensive Driving",
            moduleNumber: 2,
            lessonNumber: 8,
            lessonType: "text",
            duration: 40,
            isFree: false,
            videoURL: "",
            content: `
# Defensive Driving

1. **Scan Ahead**: Look 12-15 seconds down the road, not just at the car in front.
2. **Space Cushion**: Keep space all around your vehicle.
3. **Be Visible**: Use lights, signals, and positioning.
4. **Anticipate**: Expect other drivers to make mistakes.
5. **Stay Calm**: Avoid road rage.

## Emergency Stops
- Apply brakes firmly and steadily (with ABS).
- Clutch in (to prevent stalling) just before stop.
            `
        }
    ]
};
