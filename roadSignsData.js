// Complete Road Signs Database with Images
export const roadSignsData = [
    // MANDATORY SIGNS (Blue Circle)
    {
        name: "Stop",
        category: "Mandatory",
        shape: "Octagon",
        color: "Red",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
        meaning: "You must stop completely before the stop line",
        action: "Stop vehicle, check traffic, proceed when safe",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Give Way",
        category: "Mandatory",
        shape: "Inverted Triangle",
        color: "Red & White",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
        meaning: "Slow down and give way to traffic on the main road",
        action: "Reduce speed, yield to other vehicles",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No Entry",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=400",
        meaning: "Entry prohibited for all vehicles",
        action: "Do not enter this road",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Speed Limit 40",
        category: "Mandatory",
        shape: "Circle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400",
        meaning: "Maximum speed limit is 40 km/h",
        action: "Do not exceed 40 km/h",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No U-Turn",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
        meaning: "U-turn is not allowed",
        action: "Continue straight, find alternative route",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "School Zone",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400",
        meaning: "School ahead, children may be crossing",
        action: "Reduce speed to 25 km/h, be extra alert",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Pedestrian Crossing",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=400",
        meaning: "Pedestrians may cross the road",
        action: "Slow down, give way to pedestrians",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Roundabout",
        category: "Informatory",
        shape: "Circle",
        color: "Blue",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400",
        meaning: "Roundabout ahead",
        action: "Give way to traffic from right, move clockwise",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Hairpin Bend",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
        meaning: "Sharp turn ahead",
        action: "Reduce speed significantly, use lower gear",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Steep Ascent",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=400",
        meaning: "Steep uphill road ahead",
        action: "Use lower gear, maintain steady speed",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Steep Descent",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400",
        meaning: "Steep downhill road ahead",
        action: "Use engine braking, avoid continuous braking",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Slippery Road",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
        meaning: "Road may be slippery",
        action: "Reduce speed, avoid sudden movements",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Two-Way Traffic",
        category: "Warning",
        shape: "Triangle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=400",
        meaning: "Traffic from both directions",
        action: "Stay in your lane, be alert for oncoming traffic",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "One Way",
        category: "Informatory",
        shape: "Rectangle",
        color: "Blue",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400",
        meaning: "Traffic allowed in one direction only",
        action: "Follow the arrow direction",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No Parking",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
        meaning: "Parking not allowed",
        action: "Do not stop or park vehicle",
        vehicleTypes: ["2W", "4W"]
    }
];

export default roadSignsData;
