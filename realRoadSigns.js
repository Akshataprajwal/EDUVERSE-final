// Real Road Signs with Wikimedia Images (Copyright-Free)
export const realRoadSigns = [
    {
        name: "Stop",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Stop_sign.svg",
        category: "Mandatory",
        shape: "Octagon",
        color: "Red",
        meaning: "You must stop completely before the stop line",
        action: "Stop vehicle, check traffic, proceed when safe",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Speed Limit 40",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/India_road_sign_Speed_Limit_40.svg",
        category: "Mandatory",
        shape: "Circle",
        color: "Red & White",
        meaning: "Maximum speed limit is 40 km/h",
        action: "Do not exceed 40 km/h",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No Entry",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/India_road_sign_No_Entry.svg",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        meaning: "Entry prohibited for all vehicles",
        action: "Do not enter this road",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Give Way",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/India_road_sign_Give_Way.svg",
        category: "Mandatory",
        shape: "Inverted Triangle",
        color: "Red & White",
        meaning: "Slow down and give way to traffic on the main road",
        action: "Reduce speed, yield to other vehicles",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "School Zone",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_school_ahead.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "School ahead, children may be crossing",
        action: "Reduce speed to 25 km/h, be extra alert",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Pedestrian Crossing",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/India_Pedestrian_Crossing.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Pedestrians may cross the road",
        action: "Slow down, give way to pedestrians",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Hairpin Bend Left",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/India_warning_sign_left_hair_pin_bend.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Sharp left turn ahead",
        action: "Reduce speed significantly, use lower gear",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Hairpin Bend Right",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/India_warning_sign_right_hair_pin_bend.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Sharp right turn ahead",
        action: "Reduce speed significantly, use lower gear",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Right Turn",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/India_road_sign_Right_Turn.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Right turn ahead",
        action: "Prepare to turn right, reduce speed",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Left Turn",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/India_road_sign_Left_Turn.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Left turn ahead",
        action: "Prepare to turn left, reduce speed",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Narrow Road",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/India_road_sign_Narrow_Road.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Road narrows ahead",
        action: "Reduce speed, be prepared to give way",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Slippery Road",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/India_road_sign_Slippery_Road.svg",
        category: "Warning",
        shape: "Triangle",
        color: "Red & White",
        meaning: "Road may be slippery",
        action: "Reduce speed, avoid sudden movements",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No Parking",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/India_road_sign_No_Parking.svg",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        meaning: "Parking not allowed",
        action: "Do not stop or park vehicle",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "No Overtaking",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/India_road_sign_No_Overtaking.svg",
        category: "Prohibitory",
        shape: "Circle",
        color: "Red",
        meaning: "Overtaking not allowed",
        action: "Stay in your lane, do not overtake",
        vehicleTypes: ["2W", "4W"]
    },
    {
        name: "Roundabout",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/India_road_sign_Roundabout.svg",
        category: "Informatory",
        shape: "Circle",
        color: "Blue",
        meaning: "Roundabout ahead",
        action: "Give way to traffic from right, move clockwise",
        vehicleTypes: ["2W", "4W"]
    }
];

export default realRoadSigns;
