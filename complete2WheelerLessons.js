import roadSignsData from './roadSignsData.js';

// Complete 2-Wheeler Course with 10 Comprehensive Lessons
export const twoWheelerLessons = [
    {
        title: "Introduction to Two-Wheeler Riding",
        lessonNumber: 1,
        vehicleType: "2W",
        duration: 20,
        imageURL: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Introduction to Two-Wheeler Riding

## Welcome to Your Riding Journey

Learning to ride a two-wheeler is an exciting skill that offers freedom and convenience. This course will guide you from basics to advanced riding.

### What You'll Learn
- Motorcycle controls and their functions
- Balance and coordination techniques
- Traffic rules specific to two-wheelers
- Safe riding practices in all conditions
- Emergency handling procedures

### Safety First
Always remember: **Safety is not optional**. Wear proper gear, follow traffic rules, and ride defensively.

## Essential Safety Gear
1. **ISI Marked Helmet** - Mandatory by law
2. **Riding Jacket** - Protects from abrasions
3. **Gloves** - Better grip and protection
4. **Riding Boots** - Ankle protection
5. **Knee Guards** - Additional safety

### Before You Start
- Ensure your bike is in good condition
- Check tire pressure, brakes, and lights
- Adjust mirrors properly
- Wear all safety gear

Let's begin your journey to becoming a confident rider!`,
        roadSigns: roadSignsData.filter(sign => ["Stop", "Give Way", "Speed Limit 40"].includes(sign.name)),
        isFree: true
    },
    {
        title: "Basic Controls - Brake, Clutch, Throttle",
        lessonNumber: 2,
        vehicleType: "2W",
        duration: 25,
        imageURL: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Basic Motorcycle Controls

## Understanding Your Bike's Controls

### 1. Throttle (Right Handlebar)
- **Function**: Controls engine speed
- **How to Use**: Twist towards you to accelerate, away to decelerate
- **Tip**: Use smooth, gradual movements

### 2. Front Brake (Right Hand Lever)
- **Function**: Provides 70% of braking power
- **How to Use**: Squeeze gradually, never grab suddenly
- **Tip**: Use 2-3 fingers for better control

### 3. Clutch (Left Hand Lever)
- **Function**: Disconnects engine from transmission
- **How to Use**: Pull in to shift gears, release smoothly
- **Tip**: Find the "friction zone" for smooth starts

### 4. Rear Brake (Right Foot Pedal)
- **Function**: Provides 30% of braking power
- **How to Use**: Press down gently
- **Tip**: Use with front brake for maximum stopping power

### 5. Gear Shifter (Left Foot Lever)
- **Function**: Changes gears
- **Pattern**: 1-N-2-3-4-5-6 (typical)
- **How to Use**: Press down for lower gears, lift up for higher gears

## Practice Exercises
1. **Clutch Control**: Practice finding the friction zone
2. **Braking**: Practice using both brakes together
3. **Throttle Control**: Practice smooth acceleration

## Common Mistakes to Avoid
❌ Grabbing the front brake suddenly
❌ Riding with clutch partially engaged
❌ Using only rear brake
❌ Jerky throttle movements`,
        roadSigns: roadSignsData.filter(sign => ["No Entry", "One Way"].includes(sign.name)),
        isFree: true
    },
    {
        title: "Balancing Techniques & Slow Speed Control",
        lessonNumber: 3,
        vehicleType: "2W",
        duration: 30,
        imageURL: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Mastering Balance on Two Wheels

## The Art of Balance

Balance is the foundation of motorcycle riding. Unlike four-wheelers, bikes require constant balance adjustment.

### Physics of Balance
- **Gyroscopic Effect**: Wheels create stability when moving
- **Countersteering**: Push right handlebar to turn right
- **Body Position**: Your body weight affects balance

## Slow Speed Balance Techniques

### 1. Look Where You Want to Go
- **Never look down** at the ground
- Focus on your destination
- Your bike follows your eyes

### 2. Use Rear Brake for Control
- Front brake can cause falls at slow speed
- Rear brake provides smooth control
- Practice in a safe area

### 3. Clutch Control (Friction Zone)
- Keep clutch in friction zone
- Modulate power delivery
- Prevents stalling

### 4. Body Position
- Sit upright
- Relax your shoulders
- Keep elbows slightly bent
- Grip tank with knees

## Practice Drills

### Drill 1: Figure-8
- Set up two cones 10 feet apart
- Ride in figure-8 pattern
- Practice both directions
- **Goal**: Complete without putting feet down

### Drill 2: Slow Riding
- Ride as slowly as possible
- Maintain straight line
- Use rear brake and clutch
- **Goal**: Take 30 seconds for 50 feet

### Drill 3: U-Turn
- Practice tight U-turns
- Use countersteering
- Look through the turn
- **Goal**: Complete in one smooth motion

## Common Balance Mistakes
❌ Looking down at the ground
❌ Gripping handlebars too tight
❌ Using front brake at slow speed
❌ Not using clutch friction zone
❌ Stiff body posture

## Safety Tips
✅ Practice in empty parking lot
✅ Wear full safety gear
✅ Start at walking speed
✅ Gradually increase difficulty
✅ Take breaks when tired`,
        roadSigns: roadSignsData.filter(sign => ["Roundabout", "Hairpin Bend"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Traffic Rules for Two-Wheelers",
        lessonNumber: 4,
        vehicleType: "2W",
        duration: 35,
        imageURL: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Traffic Rules for Two-Wheeler Riders

## Essential Traffic Laws in India

### 1. Helmet Rule
- **Mandatory** for both rider and pillion
- Must be **ISI marked**
- **Fine**: ₹1,000 + 3 months license suspension
- Chin strap must be fastened

### 2. License Requirements
- **Learner's License**: Valid for 6 months
- **Permanent License**: After passing test
- Must carry license while riding
- **Fine for no license**: ₹5,000

### 3. Speed Limits
- **City Roads**: 40-50 km/h
- **Highways**: 60-80 km/h
- **School Zones**: 25 km/h
- **Residential Areas**: 30 km/h

### 4. Lane Discipline
- **Ride in leftmost lane** for normal speed
- **Middle lane** for overtaking only
- **Never ride on footpath** - ₹500 fine
- **Stay in designated two-wheeler lane** if available

### 5. Overtaking Rules
- Overtake **from the right side only**
- Check mirrors and blind spot
- Use indicator before overtaking
- Ensure sufficient space
- **Never overtake**:
  - At intersections
  - On curves
  - Near pedestrian crossings
  - In no-overtaking zones

### 6. Signal Compliance
- **Red Light**: Stop completely before stop line
- **Yellow Light**: Prepare to stop (don't speed up!)
- **Green Light**: Proceed when safe
- **Jumping red light**: ₹1,000 fine + license points

### 7. Mobile Phone Usage
- **Strictly prohibited** while riding
- **Fine**: ₹1,000 (first offense)
- **Fine**: ₹2,000 (repeat offense)
- Use Bluetooth headset if necessary

### 8. Drunk Driving
- **Blood Alcohol**: Must be 0%
- **Fine**: ₹10,000 + 6 months jail
- **License suspended** for minimum 6 months

### 9. Documents to Carry
✅ Driving License
✅ Registration Certificate (RC)
✅ Insurance Papers
✅ Pollution Under Control (PUC) Certificate

### 10. Pillion Rider Rules
- Only one pillion allowed
- Must wear helmet
- Sit properly on designated seat
- Hold grab rail or rider's waist
- No children under 4 years

## Right of Way Rules

### You Must Give Way To:
1. Emergency vehicles (ambulance, fire, police)
2. Vehicles already in roundabout
3. Vehicles on main road (when you're on side road)
4. Pedestrians at zebra crossings
5. Funeral processions

## Parking Rules
- Park only in designated areas
- Don't block:
  - Driveways
  - Fire hydrants
  - Pedestrian crossings
  - Bus stops
- **No parking fine**: ₹500

## Common Traffic Violations & Fines

| Violation | Fine Amount |
|-----------|-------------|
| No Helmet | ₹1,000 |
| Jumping Red Light | ₹1,000 |
| Wrong Side Driving | ₹10,000 |
| No License | ₹5,000 |
| Triple Riding | ₹1,000 |
| Overspeeding | ₹1,000-₹2,000 |
| No Insurance | ₹2,000 |
| Drunk Driving | ₹10,000 |

## Remember
**Following traffic rules is not just about avoiding fines - it's about saving lives!**`,
        roadSigns: roadSignsData.filter(sign => ["Stop", "Give Way", "No Entry", "Speed Limit 40", "No U-Turn"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Road Signs & Their Meanings",
        lessonNumber: 5,
        vehicleType: "2W",
        duration: 40,
        imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Understanding Road Signs

## Types of Road Signs

### 1. Mandatory Signs (Blue Circle)
These signs **MUST** be followed. Violation leads to fines.

### 2. Prohibitory Signs (Red Circle)
These signs tell you what **NOT** to do.

### 3. Warning Signs (Red Triangle)
These signs **warn** you about potential hazards ahead.

### 4. Informatory Signs (Blue/Green Rectangle)
These signs **provide information** about routes, distances, facilities.

## Sign Categories by Shape

### Octagon (8-sided)
- **STOP sign only**
- Must come to complete stop

### Circle
- Mandatory or Prohibitory
- Red border = Prohibition
- Blue background = Mandatory

### Triangle
- Warning signs
- Red border
- Alert you to dangers

### Rectangle
- Informatory signs
- Blue = City roads
- Green = Highways

## Important Road Signs for Two-Wheelers

All road signs are displayed below with images and meanings.

### Remember the Colors:
- **Red**: Stop, Prohibit, Warn
- **Blue**: Mandatory, Information
- **Green**: Highway information
- **Yellow**: Temporary/Construction

## Tips for Remembering Signs
1. **Shape tells the type**
2. **Color indicates urgency**
3. **Symbol shows the meaning**
4. **Practice with flashcards**

## Common Mistakes
❌ Ignoring warning signs
❌ Not stopping at STOP sign
❌ Confusing similar signs
❌ Not understanding symbol meanings`,
        roadSigns: roadSignsData, // All signs
        isFree: false
    },
    {
        title: "Riding in Rain & Wet Conditions",
        lessonNumber: 6,
        vehicleType: "2W",
        duration: 25,
        imageURL: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Riding Safely in Rain

## Challenges of Wet Riding

### 1. Reduced Traction
- Tires have less grip on wet roads
- Braking distance increases by 50%
- Risk of skidding is higher

### 2. Poor Visibility
- Rain reduces visibility
- Other drivers can't see you clearly
- Visor gets fogged up

### 3. Road Hazards
- Potholes hidden under water
- Oil slicks become slippery
- Metal surfaces (manhole covers) are dangerous

## Pre-Rain Preparation

### Check Your Bike
✅ Tire tread depth (minimum 1.6mm)
✅ Brake pads condition
✅ Headlight and taillight working
✅ Chain lubrication (use wet lube)

### Gear Up Properly
✅ Waterproof riding jacket
✅ Rain pants
✅ Waterproof gloves
✅ Anti-fog visor or pin-lock
✅ Bright colored rain gear (visibility)

## Riding Techniques in Rain

### 1. Reduce Speed by 30-40%
- Give yourself more reaction time
- Braking distance is longer
- Cornering requires more space

### 2. Smooth Inputs
- **No sudden braking**
- **No aggressive acceleration**
- **Gentle steering**
- Think "smooth and steady"

### 3. Increase Following Distance
- Normal: 2 seconds
- Rain: 4-5 seconds
- Gives you time to react

### 4. Avoid These Surfaces
❌ **Painted road markings** - Very slippery
❌ **Metal surfaces** - Manhole covers, tram tracks
❌ **Oil patches** - Rainbow colors on water
❌ **Wet leaves** - Slippery as ice
❌ **Puddles** - May hide potholes

### 5. Braking in Rain
- Use **both brakes gently**
- Front brake: 60%, Rear brake: 40%
- Brake earlier than usual
- Brake in straight line, not while turning

### 6. Cornering in Rain
- **Slow down before the turn**
- Look through the turn
- Maintain steady throttle
- Don't brake mid-corner
- Wider turning radius

## What to Do If You Start Skidding

### Rear Wheel Skid
1. Don't panic
2. Release rear brake slightly
3. Keep bike upright
4. Look where you want to go

### Front Wheel Skid
1. Immediately release front brake
2. Straighten handlebars
3. Re-apply brakes gently

## Visibility Tips

### Make Yourself Visible
- Turn on headlight (even during day)
- Use hazard lights if visibility is very poor
- Wear bright/reflective gear
- Avoid blind spots of cars

### Improve Your Vision
- Use anti-fog spray on visor
- Crack visor open slightly for airflow
- Clean visor before riding
- Use pin-lock visor if possible

## When NOT to Ride

Don't ride if:
- Heavy downpour with zero visibility
- Flooding on roads
- Thunderstorm with lightning
- Strong winds (above 40 km/h)

**Safety first! Wait for conditions to improve.**

## After Rain Riding

- Dry your brakes (gentle braking while riding)
- Clean and dry your bike
- Lubricate chain
- Check for water in electrical components

## Emergency Contacts
Keep these numbers handy:
- Emergency: 112
- Roadside Assistance: Your insurance provider
- Family/Friend contact`,
        roadSigns: roadSignsData.filter(sign => ["Slippery Road", "School Zone"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Night Riding Mastery",
        lessonNumber: 7,
        vehicleType: "2W",
        duration: 20,
        imageURL: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Safe Night Riding Techniques

## Challenges of Night Riding

### 1. Limited Visibility
- Can only see what headlight illuminates
- Peripheral vision is reduced
- Depth perception is affected

### 2. Fatigue
- Eyes strain more at night
- Body's natural sleep cycle
- Reduced alertness

### 3. Other Hazards
- Drunk drivers on road
- Animals crossing roads
- Potholes harder to spot
- Oncoming high beams

## Pre-Ride Checks for Night

### Lights Check
✅ Headlight (high and low beam)
✅ Taillight
✅ Brake light
✅ Turn indicators
✅ Number plate light

### Visibility Check
✅ Clean headlight lens
✅ Clean visor
✅ Adjust headlight angle
✅ Check battery charge

## Night Riding Techniques

### 1. Use Headlights Correctly
- **Low Beam**: In traffic, city roads
- **High Beam**: Empty highways
- **Switch to low beam** when vehicle approaches
- **Flash high beam** to alert others

### 2. Reduce Speed
- Ride 10-15 km/h slower than daytime
- Your visibility is limited
- Reaction time is slower

### 3. Increase Following Distance
- Stay 4-5 seconds behind vehicles
- Use their taillights as guide
- Don't tailgate

### 4. Watch for Animals
- Common on highways at night
- Slow down in rural areas
- Use high beam to spot them early
- Honk to scare them away

### 5. Avoid Glare
- **Don't stare** at oncoming headlights
- Look at **right edge** of road
- Use hand to block glare if needed
- Slow down if blinded

### 6. Be Extra Visible
- Wear **reflective jacket**
- Use **reflective tape** on helmet
- Keep headlight on always
- Use hazard lights if stopped

## Dealing with Fatigue

### Signs of Fatigue
- Yawning frequently
- Heavy eyelids
- Difficulty focusing
- Drifting in lane
- Missing exits/turns

### What to Do
1. **Stop immediately** - Find safe place
2. **Take a break** - 15-20 minutes
3. **Drink water** - Stay hydrated
4. **Walk around** - Get blood flowing
5. **Coffee/tea** - If available
6. **Power nap** - 20 minutes max

**Never fight sleep while riding!**

## Highway Night Riding

### Tips
- Stick to well-lit highways
- Take breaks every hour
- Avoid overtaking at night
- Watch for trucks (they may not have taillights)
- Be extra cautious at toll plazas

### What to Avoid
❌ Riding after midnight (if possible)
❌ Riding when very tired
❌ Riding after drinking
❌ Riding in unfamiliar areas
❌ Riding in heavy fog

## Emergency Preparedness

### Carry These Items
- Fully charged mobile phone
- Emergency contact numbers
- Basic tool kit
- Flashlight/torch
- First aid kit
- Reflective triangle
- Spare bulbs

### If Bike Breaks Down
1. Move to safe location (off road)
2. Turn on hazard lights
3. Place reflective triangle behind bike
4. Wear reflective jacket
5. Call for help
6. Stay visible to traffic

## City vs Highway Night Riding

### City Riding
- More traffic
- Better lighting
- Shorter distances
- More signals
- **Strategy**: Stay alert, use low beam

### Highway Riding
- Less traffic
- Poor lighting
- Longer distances
- Higher speeds
- **Strategy**: Take breaks, use high beam

## Remember
**If you're too tired, don't ride. No destination is worth risking your life.**`,
        roadSigns: roadSignsData.filter(sign => ["Two-Way Traffic", "Pedestrian Crossing"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Hill Riding Techniques",
        lessonNumber: 8,
        vehicleType: "2W",
        duration: 30,
        imageURL: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Mastering Hill Riding

## Understanding Hill Riding

Hills present unique challenges:
- Steep gradients
- Sharp hairpin bends
- Changing weather
- Altitude effects
- Heavy traffic

## Uphill Riding Techniques

### 1. Gear Selection
- Use **lower gears** (2nd or 3rd)
- Don't lug the engine
- Maintain steady RPM (3000-4000)
- Downshift before hill, not during

### 2. Momentum Management
- Build speed before hill
- Maintain steady throttle
- Don't stop mid-hill if possible
- If stopping, use handbrake

### 3. Starting on Uphill
**Method 1: Handbrake Method**
1. Pull handbrake
2. Rev engine slightly
3. Release clutch to friction zone
4. Release handbrake
5. Give throttle smoothly

**Method 2: Rear Brake Method**
1. Hold rear brake
2. Rev engine
3. Release clutch slowly
4. Release brake, add throttle

### 4. Overtaking Uphill
- **Avoid if possible**
- Need clear visibility
- Requires more power
- Plan well ahead

## Downhill Riding Techniques

### 1. Engine Braking
- Use **lower gear** (2nd or 3rd)
- Let engine slow you down
- Don't coast in neutral
- Saves brake pads

### 2. Braking Technique
- Use **both brakes**
- Front: 60%, Rear: 40%
- **Don't brake continuously**
- Brake in pulses to prevent overheating

### 3. Speed Control
- Maintain steady, slow speed
- Don't gain momentum
- Be ready to stop
- Watch for vehicles ahead

### 4. Overheated Brakes
**Signs:**
- Spongy brake lever
- Reduced braking power
- Burning smell

**What to Do:**
1. Stop safely
2. Let brakes cool (15-20 min)
3. Don't pour water on them
4. Check brake fluid level

## Hairpin Bends

### Approaching a Hairpin
1. **Slow down well before** the turn
2. **Downshift** to 2nd or 1st gear
3. **Look through** the turn
4. **Outside-Inside-Outside** line
5. **Steady throttle** through turn

### Common Mistakes
❌ Braking in the turn
❌ Looking at the cliff edge
❌ Too much speed
❌ Wrong gear
❌ Panic braking

## Weather Challenges

### Fog
- Reduce speed drastically
- Use low beam (high beam reflects)
- Follow road markings
- Increase following distance
- Use horn at blind turns

### Rain on Hills
- Extra slippery
- Reduce speed by 50%
- Avoid painted lines
- Watch for landslides
- Don't ride in heavy rain

### Cold Weather
- Wear layers
- Warm up bike longer
- Tires take time to warm up
- Watch for ice patches
- Keep visor clear

## Altitude Effects

### Above 2000m
- Engine loses power (less oxygen)
- You may feel breathless
- Bike may overheat
- Fuel efficiency drops

### What to Do
- Take frequent breaks
- Stay hydrated
- Don't push bike hard
- Let bike cool down
- Adjust carburetor if needed

## Safety Tips for Hill Riding

### Before the Ride
✅ Check brakes thoroughly
✅ Check tire pressure
✅ Full fuel tank
✅ Carry warm clothes
✅ Inform someone of route

### During the Ride
✅ Take breaks every hour
✅ Stay hydrated
✅ Don't rush
✅ Follow local traffic rules
✅ Be courteous to locals

### Emergency Preparedness
- Know location of nearest mechanic
- Carry basic tools
- Have emergency contacts
- Know nearest hospital
- Carry first aid kit

## Common Hill Riding Mistakes

1. **Riding too fast downhill**
   - Solution: Use engine braking

2. **Wrong gear selection**
   - Solution: Downshift before gradient changes

3. **Continuous braking**
   - Solution: Use engine braking + pulsed braking

4. **Not acclimatizing**
   - Solution: Take breaks, drink water

5. **Overconfidence**
   - Solution: Respect the mountains

## Remember
**Hills are beautiful but demanding. Ride within your limits, and you'll enjoy the journey safely!**`,
        roadSigns: roadSignsData.filter(sign => ["Steep Ascent", "Steep Descent", "Hairpin Bend"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Safety Gear & Best Practices",
        lessonNumber: 9,
        vehicleType: "2W",
        duration: 25,
        imageURL: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# Complete Safety Guide for Riders

## Essential Safety Gear

### 1. Helmet (Most Important!)
**Types:**
- **Full Face**: Best protection, covers entire head
- **Modular**: Flip-up chin bar, versatile
- **Open Face**: Less protection, better ventilation
- **Half Helmet**: Minimal protection (not recommended)

**Choosing a Helmet:**
✅ **ISI/DOT/ECE certified**
✅ Proper fit (snug but comfortable)
✅ No more than 5 years old
✅ Replace after any crash
✅ Chin strap always fastened

**Helmet Care:**
- Clean regularly with mild soap
- Don't drop it
- Store in cool, dry place
- Replace padding when worn

### 2. Riding Jacket
**Features to Look For:**
✅ Abrasion-resistant material (leather/textile)
✅ CE-approved armor (shoulders, elbows, back)
✅ Reflective elements
✅ Ventilation zippers
✅ Proper fit (not loose)

**Types:**
- **Leather**: Best abrasion resistance
- **Textile**: Waterproof, versatile
- **Mesh**: Hot weather riding

### 3. Riding Gloves
**Why Important:**
- Protect hands in crash
- Better grip on controls
- Weather protection
- Prevent blisters

**Features:**
✅ Knuckle protection
✅ Palm sliders
✅ Secure wrist closure
✅ Touchscreen compatible (optional)

### 4. Riding Pants
**Options:**
- **Riding Jeans**: Kevlar-lined denim
- **Textile Pants**: Waterproof, armored
- **Leather Pants**: Maximum protection

**Must Have:**
✅ Knee armor
✅ Hip armor
✅ Abrasion-resistant material

### 5. Riding Boots
**Features:**
✅ Ankle protection
✅ Reinforced toe and heel
✅ Oil-resistant sole
✅ Gear shift pad
✅ Waterproof (optional)

**Avoid:**
❌ Sandals
❌ Flip-flops
❌ Regular sneakers
❌ Loose laces

### 6. Additional Protection

**Back Protector:**
- Protects spine
- CE Level 1 or 2
- Can be standalone or jacket insert

**Knee Guards:**
- Extra protection for knees
- Useful for long rides
- Comfortable fit important

**Chest Protector:**
- Protects ribs and chest
- Used in off-road riding
- Optional for street riding

## Visibility Enhancements

### Day Riding
✅ Bright colored gear (yellow, orange, white)
✅ Reflective strips on jacket/helmet
✅ Headlight always on
✅ Avoid blind spots

### Night Riding
✅ Reflective jacket/vest
✅ Reflective tape on helmet
✅ Reflective strips on bike
✅ High-visibility gear

## Pre-Ride Safety Checks (T-CLOCS)

### T - Tires
- Check pressure (front & rear)
- Look for cuts, cracks, wear
- Check tread depth
- Look for embedded objects

### C - Controls
- Throttle moves smoothly
- Clutch lever free play
- Brake levers work properly
- All cables intact

### L - Lights
- Headlight (high/low beam)
- Taillight
- Brake light
- Turn signals
- License plate light

### O - Oil
- Engine oil level
- No leaks
- Brake fluid level
- Coolant level (if applicable)

### C - Chassis
- Frame cracks
- Suspension works
- Chain tension & lubrication
- Wheel bearings

### S - Stands
- Side stand works
- Center stand works (if equipped)
- Side stand spring intact
- Auto-cutoff switch works

## Defensive Riding Principles

### 1. Assume You're Invisible
- Other drivers may not see you
- Make eye contact
- Use horn when needed
- Position yourself to be seen

### 2. Maintain Space Cushion
- **Front**: 2-3 seconds following distance
- **Sides**: Don't ride in blind spots
- **Rear**: Watch mirrors for tailgaters
- **Escape routes**: Always have one

### 3. Scan Constantly
- Look 12 seconds ahead
- Check mirrors every 5-7 seconds
- Scan intersections
- Watch for hazards

### 4. Predict Others' Actions
- Watch for turn signals
- Notice brake lights
- Watch wheels (shows direction)
- Expect the unexpected

### 5. Be Smooth
- Smooth throttle
- Smooth braking
- Smooth steering
- No sudden movements

## Common Riding Mistakes

### 1. Target Fixation
- **Problem**: Staring at obstacle
- **Solution**: Look where you want to go

### 2. Overbraking
- **Problem**: Grabbing brakes hard
- **Solution**: Progressive braking

### 3. Underestimating Corners
- **Problem**: Too fast into turn
- **Solution**: Slow before turn, accelerate through

### 4. Poor Lane Position
- **Problem**: Riding in blind spots
- **Solution**: Position for visibility

### 5. Riding Beyond Limits
- **Problem**: Overconfidence
- **Solution**: Know your limits

## Emergency Maneuvers

### Emergency Braking
1. Squeeze both brakes firmly (not grab)
2. Front: 70%, Rear: 30%
3. Keep bike upright
4. Look where you want to go

### Swerving
1. Press handlebar in direction of swerve
2. Look at escape path
3. Lean bike, not body
4. Practice in safe area

### Low-Side Crash
- If bike starts sliding
- Don't fight it
- Let go and slide away from bike
- Protect your head

## Riding in Groups

### Group Riding Etiquette
✅ Staggered formation
✅ Maintain space
✅ Hand signals
✅ No showing off
✅ Ride your own ride

### Hand Signals
- **Left Turn**: Left arm extended
- **Right Turn**: Left arm up at 90°
- **Stop**: Left arm down at 45°
- **Hazard**: Point to hazard
- **Single File**: Arm up, one finger

## Maintenance for Safety

### Weekly Checks
- Tire pressure
- Chain tension
- Lights
- Brake pads
- Fluid levels

### Monthly Checks
- Chain lubrication
- Brake fluid
- Coolant
- Battery
- Suspension

### Annual Service
- Complete inspection
- Oil change
- Brake service
- Valve clearance
- Professional check

## Remember
**All the gear, all the time (ATGATT). Your safety gear is your life insurance on two wheels!**`,
        roadSigns: roadSignsData.filter(sign => ["School Zone", "Pedestrian Crossing"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Final Assessment & RTO Test Preparation",
        lessonNumber: 10,
        vehicleType: "2W",
        duration: 45,
        imageURL: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `# RTO Test Preparation Guide

## Understanding the RTO Test

The RTO (Regional Transport Office) test consists of two parts:
1. **Written/Computer Test** - Traffic rules and signs
2. **Practical Driving Test** - Actual riding skills

## Part 1: Written/Computer Test

### Test Format
- **Questions**: 20 multiple choice
- **Pass Mark**: 60% (12 correct answers)
- **Time**: 30 minutes
- **Language**: Available in multiple languages

### Topics Covered
1. Traffic signals and signs (40%)
2. Traffic rules and regulations (30%)
3. Safety and first aid (20%)
4. Vehicle maintenance (10%)

### Preparation Tips
✅ Study all road signs
✅ Learn traffic rules thoroughly
✅ Practice online mock tests
✅ Understand right-of-way rules
✅ Know penalty amounts

### Common Questions Topics
- Helmet rules
- Speed limits
- Overtaking rules
- Signal meanings
- Parking regulations
- License requirements
- Insurance rules
- Drunk driving penalties

## Part 2: Practical Riding Test

### Test Components

#### 1. Figure-8
- **What**: Ride in figure-8 pattern between cones
- **How**: Use clutch control, look ahead
- **Tips**: Go slow, don't put feet down

#### 2. Straight Line Riding
- **What**: Ride slowly in straight line
- **How**: Use rear brake and clutch
- **Tips**: Look ahead, not down

#### 3. U-Turn
- **What**: Make tight U-turn in marked area
- **How**: Countersteering, clutch control
- **Tips**: Look through turn, use friction zone

#### 4. Emergency Stop
- **What**: Stop quickly when signaled
- **How**: Use both brakes, stay upright
- **Tips**: Don't lock wheels, straight line stop

#### 5. Slope Start
- **What**: Start bike on uphill slope
- **How**: Handbrake or rear brake method
- **Tips**: Don't roll back, smooth start

### What Examiners Look For
✅ Proper gear (helmet mandatory)
✅ Confidence in handling
✅ Smooth control
✅ Following instructions
✅ Safety awareness
✅ Not putting feet down
✅ Completing tasks correctly

### Common Reasons for Failure
❌ Not wearing helmet
❌ Putting feet down repeatedly
❌ Knocking down cones
❌ Stalling the bike
❌ Not following instructions
❌ Unsafe riding
❌ Nervousness affecting performance

## Test Day Preparation

### Documents to Carry
✅ Learner's license
✅ Application form
✅ Fee receipt
✅ ID proof
✅ Address proof
✅ Passport size photos

### What to Wear
✅ ISI marked helmet
✅ Full-sleeve shirt/jacket
✅ Long pants
✅ Closed shoes
✅ Gloves (optional but recommended)

### Bike Preparation
✅ Bike in good condition
✅ All lights working
✅ Horn working
✅ Mirrors adjusted
✅ Clean and presentable

## Day Before Test

### Do's
✅ Get good sleep
✅ Practice basic maneuvers
✅ Check all documents
✅ Prepare bike
✅ Plan route to RTO
✅ Reach early

### Don'ts
❌ Don't practice excessively
❌ Don't stay up late
❌ Don't try new techniques
❌ Don't panic
❌ Don't skip meals

## During the Test

### Written Test Tips
1. Read questions carefully
2. Eliminate wrong options
3. Don't rush
4. Review answers before submitting
5. Stay calm

### Practical Test Tips
1. **Listen carefully** to instructions
2. **Take your time** - no rush
3. **Look ahead**, not down
4. **Use clutch smoothly**
5. **Stay calm** if you make mistake
6. **Follow examiner's** directions
7. **Don't argue** with examiner

## After Passing

### Getting Your License
- Collect license after 7-30 days
- Check details are correct
- Keep it safe
- Carry while riding always

### Continuing Education
- Keep learning
- Practice regularly
- Take advanced courses
- Join riding groups
- Stay updated on rules

## If You Don't Pass

### Don't Be Discouraged
- Many people don't pass first time
- Identify what went wrong
- Practice those areas
- Reapply after waiting period
- Stay positive

### Retest Process
- Wait for specified period (usually 7 days)
- Pay retest fee
- Book new slot
- Practice identified weaknesses
- Try again with confidence

## Advanced Riding Courses

After getting license, consider:
- **Advanced riding course**
- **Track day training**
- **Off-road riding course**
- **Long-distance touring prep**
- **Emergency response training**

## Final Tips for New Riders

### First 6 Months
- Avoid highways initially
- Don't ride in heavy rain
- Avoid night riding
- Don't carry pillion
- Build confidence gradually

### Building Skills
- Practice in safe areas
- Take one challenge at a time
- Learn from experienced riders
- Join riding community
- Never stop learning

### Safety Mindset
- **ATGATT**: All The Gear, All The Time
- Ride within limits
- Stay alert always
- Respect other road users
- Maintain your bike

## Remember
**Getting a license is just the beginning. Real learning happens on the road. Ride safe, ride smart!**

## Good Luck! 🏍️

You've completed the course. You're now ready for your RTO test and a lifetime of safe, enjoyable riding!`,
        roadSigns: roadSignsData, // All signs for final review
        isFree: false
    }
];

export default twoWheelerLessons;
