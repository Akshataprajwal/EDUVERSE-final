// Simplified 4-Wheeler Lessons - Clean Version
import roadSignsData from './roadSignsData.js';

export const fourWheelerLessons = [
    {
        title: "Introduction to Four-Wheeler Driving",
        lessonNumber: 1,
        vehicleType: "4W",
        duration: 20,
        imageURL: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Introduction to Four-Wheeler Driving\n\nWelcome to your driving journey! This comprehensive course will teach you everything from basic controls to advanced driving techniques.\n\n## What You'll Learn\n- Car controls and handling\n- Traffic rules and road safety\n- Parking and maneuvering\n- Driving in various conditions\n- Highway and city driving\n\n## Safety First\nAlways wear seatbelt, follow traffic rules, and drive defensively.",
        roadSigns: roadSignsData.filter(sign => ["Stop", "Give Way"].includes(sign.name)),
        isFree: true
    },
    {
        title: "Basic Controls - Steering, Brake, Clutch, Gear",
        lessonNumber: 2,
        vehicleType: "4W",
        duration: 30,
        imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Mastering Car Controls\n\n## Steering\n- 9 and 3 o'clock hand position\n- Push-pull method for turns\n- Smooth movements\n\n## Pedals\n- Clutch (left foot) - Manual only\n- Brake (right foot)\n- Accelerator (right foot)\n\n## Gear Shifting\n- 1st: 0-15 km/h\n- 2nd: 15-25 km/h\n- 3rd: 25-40 km/h\n- 4th: 40-60 km/h\n- 5th: 60+ km/h",
        roadSigns: roadSignsData.filter(sign => ["One Way", "No Entry"].includes(sign.name)),
        isFree: true
    },
    {
        title: "Parking and Lane Discipline",
        lessonNumber: 3,
        vehicleType: "4W",
        duration: 35,
        imageURL: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Parking and Lane Discipline\n\n## Types of Parking\n1. Parallel Parking\n2. Perpendicular Parking\n3. Angle Parking\n4. Bay Parking\n\n## Lane Discipline\n- Keep left\n- Use indicators when changing lanes\n- Check blind spots\n- Maintain safe distance",
        roadSigns: roadSignsData.filter(sign => ["No Parking", "Roundabout"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Traffic Rules for Four-Wheelers",
        lessonNumber: 4,
        vehicleType: "4W",
        duration: 40,
        imageURL: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Traffic Rules for Car Drivers\n\n## Essential Laws\n- Seatbelt mandatory for all\n- Speed limits must be followed\n- No mobile phone while driving\n- No drunk driving\n- Carry all documents\n\n## Fines\n- Jumping red light: Rs 1,000\n- No seatbelt: Rs 1,000\n- Drunk driving: Rs 10,000 + jail\n- Overspeeding: Rs 1,000-2,000",
        roadSigns: roadSignsData.filter(sign => ["Stop", "Speed Limit 40", "School Zone"].includes(sign.name)),
        isFree: false
    },
    {
        title: "Road Signs and Their Meanings",
        lessonNumber: 5,
        vehicleType: "4W",
        duration: 40,
        imageURL: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Understanding Road Signs\n\n## Types of Signs\n1. Mandatory (Blue Circle)\n2. Prohibitory (Red Circle)\n3. Warning (Red Triangle)\n4. Informatory (Blue/Green Rectangle)\n\n## Remember\n- Shape tells the type\n- Color indicates urgency\n- Symbol shows meaning",
        roadSigns: roadSignsData,
        isFree: false
    },
    {
        title: "Driving in Rain and Fog",
        lessonNumber: 6,
        vehicleType: "4W",
        duration: 30,
        imageURL: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: "# Driving in Rain and Fog\n\n## Rain Driving\n- Reduce speed by 30-40%\n- Increase following distance\n- Use low beam lights\n- Avoid sudden movements\n\n## Fog Driving\n- Use fog lights\n- Drive slowly\n- Follow road markings\n- Don't use high beam",
        roadSigns: roadSignsData.filter(sign => ["Slippery Road"].includes(sign.name)),
        isFree: false
    }
];

export default fourWheelerLessons;
