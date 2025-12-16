// COMPLETE DRIVING EDUCATION COURSE CONTENT
// All images sourced from open-license platforms (Wikimedia Commons, Unsplash, Pexels, Pixabay)

const completeCourseContent = {
    // ==================== TWO-WHEELER COURSE ====================
    twoWheelerCourse: {
        lessons: [
            {
                id: 1,
                title: "Introduction to Two-Wheeler Riding Basics",
                description: "Learn the fundamental concepts of motorcycle riding, including understanding your bike's controls, proper mounting and dismounting techniques, and basic safety checks before every ride. This lesson covers the essential pre-ride inspection checklist and introduces you to the primary controls of a motorcycle.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Motorcycle_Safety_Course.jpg/1280px-Motorcycle_Safety_Course.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Honda_motorcycle_controls.jpg/1280px-Honda_motorcycle_controls.jpg",
                    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80"
                ],
                roadSigns: [
                    {
                        name: "Two-Wheeler Prohibited",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Indonesia_road_sign_3a.svg/200px-Indonesia_road_sign_3a.svg.png",
                        description: "Indicates areas where motorcycles and two-wheelers are not allowed to enter"
                    },
                    {
                        name: "Motorcycle Lane",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zeichen_255_-_Verkehrsverbot_f%C3%BCr_Kraftr%C3%A4der%2C_auch_mit_Beiwagen%2C_Kleinr%C3%A4der_und_Mofas%2C_StVO_1992.svg/200px-Zeichen_255.svg.png",
                        description: "Designated lane specifically for two-wheeler vehicles"
                    },
                    {
                        name: "Helmet Mandatory",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Italian_traffic_signs_-_obbligo_casco.svg/200px-Italian_traffic_signs_-_obbligo_casco.svg.png",
                        description: "Wearing a helmet is compulsory in this area"
                    }
                ],
                practiceTasks: [
                    "Perform a complete pre-ride inspection checklist on your motorcycle",
                    "Practice mounting and dismounting your bike 10 times from both sides",
                    "Identify and operate all primary controls (throttle, clutch, brakes, indicators) while stationary",
                    "Practice finding the friction zone of your clutch in a safe, stationary position",
                    "Check tire pressure and ensure it matches manufacturer specifications"
                ],
                safetyTips: [
                    "Always wear a DOT-approved helmet that fits properly",
                    "Perform the T-CLOCS inspection before every ride (Tires, Controls, Lights, Oil, Chassis, Stands)",
                    "Ensure your motorcycle is on level ground before mounting",
                    "Never ride with loose clothing that could get caught in the chain or wheels",
                    "Check that mirrors are properly adjusted before starting your journey",
                    "Wear protective gear including gloves, jacket, and proper footwear"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=DKkLKfUZKIg",
                    "https://www.youtube.com/watch?v=8xF_BSNqL1g"
                ]
            },
            {
                id: 2,
                title: "Balance, Clutch Control & Throttle Management",
                description: "Master the critical skills of maintaining balance on a two-wheeler, smooth clutch operation, and precise throttle control. This lesson focuses on developing muscle memory for coordinated control inputs, understanding the friction zone, and practicing slow-speed maneuvers that are essential for safe riding.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Motorcycle_training.jpg/1280px-Motorcycle_training.jpg",
                    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Motorcycle_Clutch_Lever.jpg/1280px-Motorcycle_Clutch_Lever.jpg"
                ],
                roadSigns: [
                    {
                        name: "Slow Down",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/MUTCD_W13-1.svg/200px-MUTCD_W13-1.svg.png",
                        description: "Reduce speed ahead, important for practicing throttle control"
                    },
                    {
                        name: "Sharp Turn Ahead",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png",
                        description: "Indicates a sharp curve requiring balance and throttle control"
                    },
                    {
                        name: "Narrow Road",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MUTCD_W5-1.svg/200px-MUTCD_W5-1.svg.png",
                        description: "Road narrows ahead, requiring precise control and balance"
                    }
                ],
                practiceTasks: [
                    "Practice clutch control by finding and holding the friction zone for 30 seconds",
                    "Perform figure-8 maneuvers in a parking lot at walking speed",
                    "Practice starting from a stop on a slight incline without rolling backward",
                    "Execute smooth acceleration and deceleration cycles in first and second gear",
                    "Ride in a straight line at 10 km/h for 50 meters without putting feet down",
                    "Practice emergency stops from 20 km/h using both brakes progressively"
                ],
                safetyTips: [
                    "Always use both front and rear brakes together, with 70% front and 30% rear pressure",
                    "Keep your eyes up and look where you want to go, not at the ground",
                    "Maintain a relaxed grip on the handlebars to improve balance",
                    "Practice in a safe, traffic-free area before riding on public roads",
                    "Never release the clutch abruptly; always use smooth, progressive movements",
                    "Keep your knees gripping the tank for better control and balance"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=AWvbKzUMZfE",
                    "https://www.youtube.com/watch?v=ljywO-uRFlE"
                ]
            },
            {
                id: 3,
                title: "Road Positioning & Lane Discipline for Two-Wheelers",
                description: "Understand proper road positioning strategies specific to motorcycles, including lane positioning for maximum visibility and safety, navigating through traffic, and maintaining safe following distances. Learn the blocking position technique and how to position yourself to be seen by other drivers.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorcycle_lane_splitting.jpg/1280px-Motorcycle_lane_splitting.jpg",
                    "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&q=80",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Motorcycle_road_position.jpg/1280px-Motorcycle_road_position.jpg"
                ],
                roadSigns: [
                    {
                        name: "Keep Left",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/MUTCD_R4-7.svg/200px-MUTCD_R4-7.svg.png",
                        description: "Stay in the left portion of the lane"
                    },
                    {
                        name: "Lane Ends",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MUTCD_W4-2.svg/200px-MUTCD_W4-2.svg.png",
                        description: "Right lane ends ahead, merge left safely"
                    },
                    {
                        name: "Two-Way Traffic",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MUTCD_W6-3.svg/200px-MUTCD_W6-3.svg.png",
                        description: "Oncoming traffic ahead, maintain proper lane position"
                    }
                ],
                practiceTasks: [
                    "Practice riding in the left, center, and right portions of your lane",
                    "Identify the best lane position when approaching intersections",
                    "Practice changing lane positions smoothly when passing parked cars",
                    "Maintain a 2-second following distance behind vehicles in various traffic conditions",
                    "Execute safe lane changes with proper mirror checks and shoulder checks",
                    "Practice the 'blocking position' to prevent cars from sharing your lane"
                ],
                safetyTips: [
                    "Use the left third of the lane when riding on highways for maximum visibility",
                    "Move to the right third when approaching intersections to avoid left-turning vehicles",
                    "Never ride in a vehicle's blind spot; either pass quickly or drop back",
                    "Increase following distance in wet or slippery conditions to 4 seconds",
                    "Always check mirrors and blind spots before changing lane position",
                    "Avoid riding directly behind large vehicles that block your view ahead"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=8xF_BSNqL1g",
                    "https://www.youtube.com/watch?v=eqQBubilSXU"
                ]
            },
            {
                id: 4,
                title: "Cornering Techniques & Body Positioning",
                description: "Master the art of safe cornering on a motorcycle, including proper body positioning, counter-steering techniques, visual targeting through turns, and understanding the traction circle. Learn how to navigate different types of corners at various speeds while maintaining control and safety.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Motorcycle_cornering.jpg/1280px-Motorcycle_cornering.jpg",
                    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Motorcycle_lean_angle.jpg/1280px-Motorcycle_lean_angle.jpg"
                ],
                roadSigns: [
                    {
                        name: "Hairpin Bend",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MUTCD_W1-11.svg/200px-MUTCD_W1-11.svg.png",
                        description: "Very sharp turn ahead requiring significant speed reduction"
                    },
                    {
                        name: "Series of Curves",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MUTCD_W1-5.svg/200px-MUTCD_W1-5.svg.png",
                        description: "Multiple curves ahead, maintain steady speed and control"
                    },
                    {
                        name: "Advisory Speed",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/MUTCD_W13-1P.svg/200px-MUTCD_W13-1P.svg.png",
                        description: "Recommended maximum safe speed for the upcoming curve"
                    }
                ],
                practiceTasks: [
                    "Practice the SLOW-LOOK-PRESS-ROLL technique for cornering",
                    "Execute 10 right-hand turns and 10 left-hand turns at increasing speeds",
                    "Practice counter-steering by pushing forward on the inside handlebar",
                    "Navigate a series of cones set up in an S-pattern",
                    "Practice looking through the turn to your exit point",
                    "Perform U-turns within a single lane width"
                ],
                safetyTips: [
                    "Always slow down BEFORE entering a turn, not during the turn",
                    "Look through the turn to where you want to exit, not at obstacles",
                    "Maintain steady or slightly increasing throttle through the turn",
                    "Keep your body relaxed and let the bike lean, not your body",
                    "Never brake hard while leaned over in a turn",
                    "If you feel you're going too fast, look harder through the turn and trust the bike"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=ljywO-uRFlE",
                    "https://www.youtube.com/watch?v=8xF_BSNqL1g"
                ]
            },
            {
                id: 5,
                title: "Riding in Adverse Conditions (Rain, Night, Traffic)",
                description: "Develop skills for safely riding in challenging conditions including rain, night-time, heavy traffic, and poor visibility. Learn how to adjust your riding style, increase safety margins, and use proper lighting and visibility techniques to stay safe when conditions are less than ideal.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Motorcycle_rain_riding.jpg/1280px-Motorcycle_rain_riding.jpg",
                    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Night_motorcycle_riding.jpg/1280px-Night_motorcycle_riding.jpg"
                ],
                roadSigns: [
                    {
                        name: "Slippery When Wet",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/MUTCD_W8-5.svg/200px-MUTCD_W8-5.svg.png",
                        description: "Road surface becomes slippery in wet conditions"
                    },
                    {
                        name: "Fog Area",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/MUTCD_W19-6.svg/200px-MUTCD_W19-6.svg.png",
                        description: "Area prone to fog, reduce speed and use lights"
                    },
                    {
                        name: "Low Visibility",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UK_traffic_sign_562.svg/200px-UK_traffic_sign_562.svg.png",
                        description: "Poor visibility conditions ahead"
                    }
                ],
                practiceTasks: [
                    "Practice smooth braking on wet pavement in a controlled environment",
                    "Identify and avoid road hazards like painted lines, metal surfaces, and oil patches",
                    "Practice riding with rain gear to understand how it affects movement",
                    "Adjust following distance to 4-6 seconds in wet conditions",
                    "Practice using high beam and low beam appropriately at night",
                    "Navigate through simulated heavy traffic maintaining safe spacing"
                ],
                safetyTips: [
                    "Reduce speed by 25-30% in wet conditions and increase following distance",
                    "Avoid painted road markings, metal surfaces, and leaves when wet - they're extremely slippery",
                    "Use both lights and reflective gear to increase visibility at night",
                    "Never ride through standing water if you can't see the bottom",
                    "In heavy rain, consider pulling over and waiting for conditions to improve",
                    "Be extra cautious in the first 15 minutes of rain when oil rises to the surface",
                    "Use your high beam on dark roads but switch to low beam when approaching traffic"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=kxzONeqhSgQ",
                    "https://www.youtube.com/watch?v=VKGZdsIkLog"
                ]
            },
            {
                id: 6,
                title: "Advanced Safety, Emergency Maneuvers & Defensive Riding",
                description: "Learn advanced defensive riding techniques, emergency braking, swerving to avoid obstacles, and how to handle common emergency situations. Understand the importance of maintaining escape routes, reading traffic patterns, and developing a sixth sense for potential hazards.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Motorcycle_training.jpg/1280px-Motorcycle_training.jpg",
                    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Motorcycle_Safety_Course.jpg/1280px-Motorcycle_Safety_Course.jpg"
                ],
                roadSigns: [
                    {
                        name: "Stop Ahead",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/MUTCD_W3-1.svg/200px-MUTCD_W3-1.svg.png",
                        description: "Stop sign ahead, prepare to stop"
                    },
                    {
                        name: "Pedestrian Crossing",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MUTCD_W11-2.svg/200px-MUTCD_W11-2.svg.png",
                        description: "Watch for pedestrians crossing the road"
                    },
                    {
                        name: "School Zone",
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MUTCD_S1-1.svg/200px-MUTCD_S1-1.svg.png",
                        description: "School area, watch for children and reduce speed"
                    }
                ],
                practiceTasks: [
                    "Practice emergency braking from 40 km/h to a complete stop",
                    "Execute swerve maneuvers around sudden obstacles",
                    "Practice the SEE system: Search, Evaluate, Execute",
                    "Identify escape routes while riding in traffic",
                    "Perform quick stops while in a curve (advanced)",
                    "Practice maintaining 360-degree awareness using mirrors and head checks"
                ],
                safetyTips: [
                    "Always have an escape route planned - know where you'll go if traffic stops suddenly",
                    "Use the SEE system constantly: Search for hazards, Evaluate risks, Execute your response",
                    "Cover your brakes when approaching intersections or potential hazards",
                    "Assume you're invisible to other drivers and ride accordingly",
                    "In an emergency, swerving is often safer than braking if you have space",
                    "Practice emergency maneuvers regularly in a safe environment",
                    "Wear full protective gear on every ride - ATGATT (All The Gear, All The Time)",
                    "Take an advanced riding course to further develop your skills"
                ],
                videoLinks: [
                    "https://www.youtube.com/watch?v=eqQBubilSXU",
                    "https://www.youtube.com/watch?v=DKkLKfUZKIg"
                ]
            }
        ],
        quiz: [
            {
                question: "What is the correct way to find the friction zone on a motorcycle?",
                options: [
                    "Release the clutch quickly while giving full throttle",
                    "Slowly release the clutch until the bike starts to move forward slightly, then hold",
                    "Keep the clutch fully pulled in at all times",
                    "Release the clutch completely before applying throttle"
                ],
                correctAnswer: "Slowly release the clutch until the bike starts to move forward slightly, then hold",
                explanation: "The friction zone is the point where the clutch plates begin to engage. You find it by slowly releasing the clutch lever until you feel the bike start to move or the engine RPM drop slightly.",
                imageUrl: null
            },
            {
                question: "When riding a motorcycle in rain, you should:",
                options: [
                    "Increase speed to get through the rain faster",
                    "Reduce speed by 25-30% and increase following distance",
                    "Use only the front brake to avoid rear wheel skids",
                    "Ride in the center of the lane where oil accumulates"
                ],
                correctAnswer: "Reduce speed by 25-30% and increase following distance",
                explanation: "Wet conditions significantly reduce traction. You should slow down, increase your following distance to 4-6 seconds, and avoid sudden movements.",
                imageUrl: null
            },
            {
                question: "What does the 'blocking position' mean for motorcyclists?",
                options: [
                    "Blocking other vehicles from passing you",
                    "Positioning your bike to prevent cars from sharing your lane",
                    "Blocking the view of the rider behind you",
                    "Stopping in the middle of the road"
                ],
                correctAnswer: "Positioning your bike to prevent cars from sharing your lane",
                explanation: "The blocking position means positioning your motorcycle in your lane to discourage cars from trying to share your lane, which is dangerous and illegal.",
                imageUrl: null
            },
            {
                question: "What is counter-steering on a motorcycle?",
                options: [
                    "Steering in the opposite direction you want to go",
                    "Pushing forward on the handlebar in the direction you want to turn",
                    "Using only the rear brake to steer",
                    "Turning the handlebars sharply"
                ],
                correctAnswer: "Pushing forward on the handlebar in the direction you want to turn",
                explanation: "Counter-steering is the primary method of steering at speeds above 15-20 km/h. To turn right, you push forward on the right handlebar.",
                imageUrl: null
            },
            {
                question: "Before every ride, you should perform which inspection?",
                options: [
                    "Only check if you have fuel",
                    "T-CLOCS inspection (Tires, Controls, Lights, Oil, Chassis, Stands)",
                    "Just check the brakes",
                    "No inspection needed if you rode yesterday"
                ],
                correctAnswer: "T-CLOCS inspection (Tires, Controls, Lights, Oil, Chassis, Stands)",
                explanation: "T-CLOCS is a comprehensive pre-ride inspection checklist that covers all critical systems. Always check your motorcycle before riding.",
                imageUrl: null
            },
            {
                question: "What is the recommended following distance for motorcycles in normal conditions?",
                options: [
                    "1 second",
                    "2-3 seconds",
                    "5 seconds",
                    "10 seconds"
                ],
                correctAnswer: "2-3 seconds",
                explanation: "A 2-3 second following distance is recommended in good conditions. In poor conditions, increase this to 4-6 seconds.",
                imageUrl: null
            },
            {
                question: "When approaching a curve on a motorcycle, you should:",
                options: [
                    "Accelerate through the curve",
                    "Brake hard in the middle of the curve",
                    "Slow down before the curve, then maintain or slightly increase throttle",
                    "Coast through with the clutch pulled in"
                ],
                correctAnswer: "Slow down before the curve, then maintain or slightly increase throttle",
                explanation: "The proper technique is SLOW (before), LOOK (through), PRESS (counter-steer), and ROLL (maintain throttle). Braking in a curve can cause loss of traction.",
                imageUrl: null
            },
            {
                question: "What percentage of braking power should come from the front brake?",
                options: [
                    "0% - never use the front brake",
                    "50% front, 50% rear",
                    "70% front, 30% rear",
                    "100% front brake only"
                ],
                correctAnswer: "70% front, 30% rear",
                explanation: "The front brake provides about 70% of stopping power due to weight transfer. Use both brakes together progressively.",
                imageUrl: null
            },
            {
                question: "Which surface is most slippery when wet?",
                options: [
                    "Asphalt road surface",
                    "Painted road markings and metal surfaces",
                    "Concrete",
                    "Gravel"
                ],
                correctAnswer: "Painted road markings and metal surfaces",
                explanation: "Painted lines, crosswalks, manhole covers, and metal surfaces become extremely slippery when wet. Avoid these while turning or braking.",
                imageUrl: null
            },
            {
                question: "What is the proper way to carry a passenger on a motorcycle?",
                options: [
                    "Passenger should sit as far back as possible",
                    "Passenger should lean opposite to the rider in turns",
                    "Passenger should sit close, hold onto rider or grab rails, and lean with the rider",
                    "Passenger should stand on the pegs for better balance"
                ],
                correctAnswer: "Passenger should sit close, hold onto rider or grab rails, and lean with the rider",
                explanation: "Passengers should sit close to the rider, hold securely, keep feet on pegs, and lean with the motorcycle in turns. Never lean opposite.",
                imageUrl: null
            },
            {
                question: "When should you use your motorcycle's horn?",
                options: [
                    "To express anger at other drivers",
                    "To alert others of your presence when necessary",
                    "Continuously in heavy traffic",
                    "Only when someone cuts you off"
                ],
                correctAnswer: "To alert others of your presence when necessary",
                explanation: "Use your horn to alert other road users of your presence when necessary for safety, such as when someone might not see you. Don't use it aggressively.",
                imageUrl: null
            },
            {
                question: "What is the correct riding position for maximum control?",
                options: [
                    "Lean back with arms fully extended",
                    "Sit upright with slightly bent elbows, knees gripping the tank",
                    "Slouch forward over the handlebars",
                    "Sit sideways for better visibility"
                ],
                correctAnswer: "Sit upright with slightly bent elbows, knees gripping the tank",
                explanation: "Proper riding position includes sitting upright, elbows slightly bent, knees gripping the tank, and feet on pegs. This provides maximum control and reduces fatigue.",
                imageUrl: null
            },
            {
                question: "When is it safe to lane split or filter on a motorcycle?",
                options: [
                    "Whenever traffic is moving slowly",
                    "Only when legal in your jurisdiction and done at safe speeds",
                    "Always, as motorcycles have the right of way",
                    "Never, it's always illegal"
                ],
                correctAnswer: "Only when legal in your jurisdiction and done at safe speeds",
                explanation: "Lane splitting legality varies by location. Where legal, do it only at safe speeds (typically no more than 10-15 km/h faster than traffic) and with caution.",
                imageUrl: null
            },
            {
                question: "What should you do if your motorcycle starts to skid?",
                options: [
                    "Apply more brake pressure",
                    "Release the brakes, look where you want to go, and gently reapply",
                    "Pull in the clutch and coast",
                    "Lay the bike down immediately"
                ],
                correctAnswer: "Release the brakes, look where you want to go, and gently reapply",
                explanation: "If you skid, release the brakes to regain traction, look where you want to go (not at the obstacle), and gently reapply brakes if needed.",
                imageUrl: null
            },
            {
                question: "What is the minimum recommended protective gear for motorcycle riding?",
                options: [
                    "Just a helmet",
                    "Helmet and gloves",
                    "Helmet, gloves, jacket, long pants, and over-ankle boots",
                    "No gear needed for short trips"
// ==================== FOUR-WHEELER COURSE ====================
fourWheelerCourse: {
                        lessons: [
                            {
                                id: 1,
                                title: "Introduction to Four-Wheeler Driving Fundamentals",
                                description: "Begin your journey to becoming a safe and confident driver. This lesson covers the basics of vehicle controls, seating position, mirror adjustment, and understanding your car's dashboard. Learn the essential pre-drive checks and familiarize yourself with the primary and secondary controls of a modern automobile.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Driving_lesson.jpg/1280px-Driving_lesson.jpg",
                                    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Car_dashboard_controls.jpg/1280px-Car_dashboard_controls.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Stop Sign",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MUTCD_R1-1.svg/200px-MUTCD_R1-1.svg.png",
                                        description: "Come to a complete stop, check for traffic, then proceed when safe"
                                    },
                                    {
                                        name: "Yield Sign",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MUTCD_R1-2.svg/200px-MUTCD_R1-2.svg.png",
                                        description: "Slow down and give right of way to other vehicles and pedestrians"
                                    },
                                    {
                                        name: "Speed Limit",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUTCD_R2-1.svg/200px-MUTCD_R2-1.svg.png",
                                        description: "Maximum legal speed allowed on this road"
                                    }
                                ],
                                practiceTasks: [
                                    "Adjust your seat, steering wheel, and all three mirrors for optimal visibility",
                                    "Identify and operate all dashboard controls including lights, wipers, and climate control",
                                    "Practice the pre-drive checklist: tires, lights, fluids, and surroundings",
                                    "Familiarize yourself with the location of all pedals and hand controls",
                                    "Practice starting the engine and engaging different gear positions (P, R, N, D)",
                                    "Understand all dashboard warning lights and their meanings"
                                ],
                                safetyTips: [
                                    "Always wear your seatbelt before starting the engine",
                                    "Adjust mirrors to minimize blind spots - you should barely see the side of your car",
                                    "Ensure your seat position allows you to fully depress all pedals comfortably",
                                    "Check that all passengers are buckled up before moving",
                                    "Never start driving until you're familiar with all controls",
                                    "Keep both hands on the steering wheel at the 9 and 3 o'clock positions",
                                    "Ensure children are in appropriate car seats or booster seats"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=nOTZ_JRfKIA",
                                    "https://www.youtube.com/watch?v=wRJ8KkW6vJc"
                                ]
                            },
                            {
                                id: 2,
                                title: "Steering Control, Acceleration & Braking Techniques",
                                description: "Develop smooth and precise control over your vehicle's primary functions. Learn proper steering techniques including hand-over-hand and push-pull methods, smooth acceleration and deceleration, and progressive braking. Understand weight transfer and how it affects vehicle control.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Steering_wheel_hand_position.jpg/1280px-Steering_wheel_hand_position.jpg",
                                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Car_brake_pedal.jpg/1280px-Car_brake_pedal.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Sharp Turn",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png",
                                        description: "Sharp curve ahead, reduce speed and prepare to steer"
                                    },
                                    {
                                        name: "Winding Road",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MUTCD_W1-5.svg/200px-MUTCD_W1-5.svg.png",
                                        description: "Series of curves ahead, maintain steady speed and control"
                                    },
                                    {
                                        name: "Steep Grade",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MUTCD_W7-1.svg/200px-MUTCD_W7-1.svg.png",
                                        description: "Steep hill ahead, control speed and use appropriate gear"
                                    }
                                ],
                                practiceTasks: [
                                    "Practice smooth acceleration from 0 to 40 km/h without jerking",
                                    "Execute progressive braking from various speeds to a complete stop",
                                    "Practice hand-over-hand steering through tight turns",
                                    "Navigate a figure-8 course maintaining smooth speed",
                                    "Practice stopping at a predetermined point within 1 meter accuracy",
                                    "Perform hill starts without rolling backward"
                                ],
                                safetyTips: [
                                    "Always apply brakes progressively, not abruptly, to maintain control",
                                    "Keep both hands on the steering wheel except when operating other controls",
                                    "Look where you want to go, not at obstacles or the hood of your car",
                                    "Avoid sudden steering movements, especially at higher speeds",
                                    "In an automatic, use your right foot for both gas and brake - never use both feet",
                                    "Practice smooth inputs - jerky movements upset the car's balance",
                                    "On hills, use the handbrake to prevent rolling back when starting"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=LnhkBWLRWkg",
                                    "https://www.youtube.com/watch?v=wRJ8KkW6vJc"
                                ]
                            },
                            {
                                id: 3,
                                title: "Lane Discipline, Merging & Highway Driving",
                                description: "Master the rules of lane usage, safe merging techniques, and highway driving skills. Learn how to maintain proper lane position, execute safe lane changes, merge onto highways smoothly, and understand highway-specific rules and etiquette. Develop skills for high-speed driving and traffic flow management.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Highway_driving.jpg/1280px-Highway_driving.jpg",
                                    "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lane_merge.jpg/1280px-Lane_merge.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Merge Sign",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png",
                                        description: "Traffic from the right merges into your lane"
                                    },
                                    {
                                        name: "Lane Ends",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MUTCD_W4-2.svg/200px-MUTCD_W4-2.svg.png",
                                        description: "Right lane ends ahead, merge left"
                                    },
                                    {
                                        name: "Keep Right",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/MUTCD_R4-7.svg/200px-MUTCD_R4-7.svg.png",
                                        description: "Slower traffic must keep to the right lane"
                                    }
                                ],
                                practiceTasks: [
                                    "Practice the mirror-signal-blind spot-maneuver sequence for lane changes",
                                    "Execute smooth merges onto a highway using the acceleration lane",
                                    "Practice maintaining consistent speed in highway traffic",
                                    "Perform safe exits from highways using deceleration lanes",
                                    "Practice the 3-second following distance rule at various speeds",
                                    "Navigate multi-lane roundabouts safely"
                                ],
                                safetyTips: [
                                    "Always check mirrors and blind spots before changing lanes",
                                    "Use your turn signal at least 3 seconds before changing lanes",
                                    "Match the speed of highway traffic when merging, don't merge slowly",
                                    "Maintain a 3-second following distance (4-6 seconds in poor conditions)",
                                    "Stay in the right lane except when passing on multi-lane highways",
                                    "Never stop in an acceleration or deceleration lane unless absolutely necessary",
                                    "Be aware of merge points and adjust speed or lane to help others merge safely"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=DxZXn4zSjLA",
                                    "https://www.youtube.com/watch?v=ZZfOKN9Fiqo"
                                ]
                            },
                            {
                                id: 4,
                                title: "Parking Techniques: Parallel, Perpendicular & Angle Parking",
                                description: "Develop confidence in all parking scenarios. Learn step-by-step techniques for parallel parking, perpendicular (90-degree) parking, and angle parking. Understand spatial awareness, reference points, and how to maneuver your vehicle safely in tight spaces. Master both forward and reverse parking methods.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Parallel_parking.jpg/1280px-Parallel_parking.jpg",
                                    "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Parking_diagram.jpg/1280px-Parking_diagram.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Parking Allowed",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MUTCD_R7-1.svg/200px-MUTCD_R7-1.svg.png",
                                        description: "Parking is permitted in this area"
                                    },
                                    {
                                        name: "No Parking",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/MUTCD_R8-3.svg/200px-MUTCD_R8-3.svg.png",
                                        description: "Parking is prohibited in this zone"
                                    },
                                    {
                                        name: "Handicapped Parking",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/MUTCD_R7-8.svg/200px-MUTCD_R7-8.svg.png",
                                        description: "Reserved parking for vehicles with disabled permits"
                                    }
                                ],
                                practiceTasks: [
                                    "Successfully parallel park between two vehicles within 3 attempts",
                                    "Practice perpendicular reverse parking in a marked space",
                                    "Execute forward angle parking and reverse exit",
                                    "Practice using reference points for consistent parking",
                                    "Park on a hill with wheels turned correctly and parking brake engaged",
                                    "Practice parking in progressively smaller spaces"
                                ],
                                safetyTips: [
                                    "Always check all mirrors and blind spots before reversing",
                                    "Use reference points on your car to judge distances consistently",
                                    "Take your time - there's no rush when parking",
                                    "If you make a mistake, pull forward and try again",
                                    "When parking on a hill, turn wheels toward the curb (downhill) or away (uphill)",
                                    "Always engage the parking brake, especially on inclines",
                                    "Never park in handicapped spaces without a valid permit",
                                    "Leave adequate space for other vehicles to exit their parking spots"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=gDJxS8OMvT0",
                                    "https://www.youtube.com/watch?v=jhR2G7jCUJw"
                                ]
                            },
                            {
                                id: 5,
                                title: "Understanding Dashboard Indicators & Vehicle Maintenance",
                                description: "Learn to interpret all dashboard warning lights and indicators, understand basic vehicle maintenance requirements, and know when to seek professional help. Develop awareness of your vehicle's condition through visual and auditory cues. Understand the importance of regular maintenance for safety and vehicle longevity.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Car_dashboard_controls.jpg/1280px-Car_dashboard_controls.jpg",
                                    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dashboard_warning_lights.jpg/1280px-Dashboard_warning_lights.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Service Station",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MUTCD_D9-1.svg/200px-MUTCD_D9-1.svg.png",
                                        description: "Gas station or service facility ahead"
                                    },
                                    {
                                        name: "Mechanic Services",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MUTCD_D9-2.svg/200px-MUTCD_D9-2.svg.png",
                                        description: "Auto repair services available"
                                    },
                                    {
                                        name: "Rest Area",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/MUTCD_D5-1.svg/200px-MUTCD_D5-1.svg.png",
                                        description: "Rest area with facilities ahead"
                                    }
                                ],
                                practiceTasks: [
                                    "Identify all warning lights on your dashboard and their meanings",
                                    "Check engine oil level using the dipstick",
                                    "Inspect tire pressure and tread depth on all four tires",
                                    "Check all exterior lights (headlights, brake lights, turn signals)",
                                    "Locate and check coolant and windshield washer fluid levels",
                                    "Review your vehicle's maintenance schedule in the owner's manual"
                                ],
                                safetyTips: [
                                    "Never ignore warning lights - address them promptly",
                                    "Check tire pressure monthly and before long trips",
                                    "Change engine oil according to manufacturer recommendations",
                                    "Keep your windshield washer fluid topped up",
                                    "Replace wiper blades when they start streaking",
                                    "Check brake fluid level regularly - low fluid indicates a problem",
                                    "If the check engine light flashes, stop driving and seek immediate help",
                                    "Keep emergency supplies in your car: spare tire, jack, jumper cables, flashlight"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=cdIHEEfRCGE",
                                    "https://www.youtube.com/watch?v=3cH7TRLsGhE"
                                ]
                            },
                            {
                                id: 6,
                                title: "Defensive Driving, Hazard Perception & Emergency Situations",
                                description: "Develop advanced defensive driving skills to anticipate and avoid dangerous situations. Learn hazard perception techniques, how to handle emergency situations like brake failure or tire blowouts, and understand the principles of defensive driving. Master the art of staying safe by predicting and preventing accidents before they happen.",
                                images: [
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Driving_lesson.jpg/1280px-Driving_lesson.jpg",
                                    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Defensive_driving.jpg/1280px-Defensive_driving.jpg"
                                ],
                                roadSigns: [
                                    {
                                        name: "Pedestrian Crossing",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MUTCD_W11-2.svg/200px-MUTCD_W11-2.svg.png",
                                        description: "Watch for pedestrians crossing the road"
                                    },
                                    {
                                        name: "School Zone",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MUTCD_S1-1.svg/200px-MUTCD_S1-1.svg.png",
                                        description: "School area ahead, watch for children"
                                    },
                                    {
                                        name: "Intersection Ahead",
                                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MUTCD_W2-1.svg/200px-MUTCD_W2-1.svg.png",
                                        description: "Intersection ahead, prepare to yield or stop"
                                    }
                                ],
                                practiceTasks: [
                                    "Practice scanning 12-15 seconds ahead while driving",
                                    "Identify potential hazards in various traffic scenarios",
                                    "Practice emergency braking from different speeds",
                                    "Simulate tire blowout response (in a safe environment with instructor)",
                                    "Practice maintaining escape routes in traffic",
                                    "Execute evasive maneuvers around sudden obstacles"
                                ],
                                safetyTips: [
                                    "Always scan 12-15 seconds ahead to identify potential hazards early",
                                    "Maintain a 3-second following distance minimum (more in poor conditions)",
                                    "Always have an escape route - know where you'll go if traffic stops suddenly",
                                    "If a tire blows out, grip the wheel firmly, ease off gas, and brake gently",
                                    "If brakes fail, pump the pedal, downshift, and use the parking brake gradually",
                                    "In a skid, look and steer where you want to go, avoid slamming brakes",
                                    "Never drive when drowsy - pull over and rest if you feel tired",
                                    "Avoid distractions: no phone use, eating, or other activities while driving",
                                    "Assume other drivers will make mistakes and be prepared to react"
                                ],
                                videoLinks: [
                                    "https://www.youtube.com/watch?v=F0kYdZdead8",
                                    "https://www.youtube.com/watch?v=nOTZ_JRfKIA"
                                ]
                            }
                        ],
                        quiz: [
                            {
                                question: "What is the correct hand position on a steering wheel?",
                                options: [
                                    "10 and 2 o'clock",
                                    "9 and 3 o'clock",
                                    "12 o'clock with one hand",
                                    "8 and 4 o'clock"
                                ],
                                correctAnswer: "9 and 3 o'clock",
                                explanation: "Modern driving instruction recommends 9 and 3 o'clock hand position. This provides better control and reduces injury risk from airbag deployment. The old 10 and 2 position can cause arm injuries if the airbag deploys.",
                                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Steering_wheel_hand_position.jpg/400px-Steering_wheel_hand_position.jpg"
                            },
                            {
                                question: "What is the minimum safe following distance in normal conditions?",
                                options: [
                                    "1 second",
                                    "2 seconds",
                                    "3 seconds",
                                    "5 seconds"
                                ],
                                correctAnswer: "3 seconds",
                                explanation: "The 3-second rule is the minimum safe following distance in good conditions. Pick a fixed point, and when the car ahead passes it, you should take at least 3 seconds to reach that same point. Increase this to 4-6 seconds in poor conditions.",
                                imageUrl: null
                            },
                            {
                                question: "When parallel parking, you should:",
                                options: [
                                    "Park as close to the car in front as possible",
                                    "Leave about 1-2 feet between your car and the cars in front and behind",
                                    "Park at least 5 feet away from other cars",
                                    "Touch bumpers with the car behind to know you're close enough"
                                ],
                                correctAnswer: "Leave about 1-2 feet between your car and the cars in front and behind",
                                explanation: "Proper parallel parking leaves adequate space (1-2 feet or 30-60 cm) for both you and the other vehicles to exit their parking spots. This prevents damage and allows for easy maneuvering.",
                                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Parallel_parking.jpg/400px-Parallel_parking.jpg"
                            },
                            {
                                question: "What does a flashing check engine light indicate?",
                                options: [
                                    "You need an oil change soon",
                                    "A serious problem requiring immediate attention",
                                    "Your gas cap is loose",
                                    "Normal operation"
                                ],
                                correctAnswer: "A serious problem requiring immediate attention",
                                explanation: "A flashing check engine light indicates a severe problem, usually a misfire that can damage the catalytic converter. You should stop driving immediately and have the vehicle towed to a mechanic. A steady check engine light is less urgent but still requires attention.",
                                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dashboard_warning_lights.jpg/400px-Dashboard_warning_lights.jpg"
                            },
                            {
                                question: "When merging onto a highway, you should:",
                                options: [
                                    "Stop at the end of the ramp and wait for a gap",
                                    "Merge slowly at 40 km/h",
                                    "Use the acceleration lane to match highway speed, then merge",
                                    "Force your way into traffic"
                                ],
                                correctAnswer: "Use the acceleration lane to match highway speed, then merge",
                                explanation: "The acceleration lane is designed for you to speed up to match highway traffic. Merging at highway speed makes it safer and easier to blend into traffic. Stopping or merging too slowly creates dangerous speed differentials.",
                                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png"
                            },
                            {
                                question: "If your vehicle starts to skid, you should:",
                                options: [
                                    "Slam on the brakes immediately",
                                    "Accelerate to regain control",
                                    "Look and steer where you want to go, ease off the gas",
                                    "Turn the wheel in the opposite direction of the skid"
                                ],
                                correctAnswer: "Look and steer where you want to go, ease off the gas",
                                explanation: "In a skid, look where you want the car to go and steer in that direction. Ease off the gas and avoid slamming the brakes. This technique, called 'steering into the skid,' helps regain traction and control.",
                                imageUrl: null
                            },
                            {
                                question: "What should you do if a tire blows out while driving?",
                                options: [
                                    "Brake hard immediately",
                                    "Grip the wheel firmly, ease off gas, brake gently once under control",
                                    "Accelerate to maintain control",
                                    "Turn sharply to the side of the road"
                                ],
                                correctAnswer: "Grip the wheel firmly, ease off gas, brake gently once under control",
                                explanation: "A tire blowout can cause the car to pull sharply. Grip the wheel firmly, ease off the accelerator (don't brake immediately), and once you have control, brake gently and steer to a safe location. Sudden braking or steering can cause loss of control.",
                                imageUrl: null
                            },
                            {
                                question: "When parking on a downhill slope, you should turn your wheels:",
                                options: [
                                    "Straight ahead",
                                    "Toward the curb",
                                    "Away from the curb",
                                    "It doesn't matter"
                                ],
                                correctAnswer: "Toward the curb",
                                explanation: "When parking downhill, turn your wheels toward the curb. If the car rolls, it will hit the curb and stop. When parking uphill, turn wheels away from the curb. Always engage the parking brake on hills.",
                                imageUrl: null
                            },
                            {
                                question: "Before changing lanes, you must:",
                                options: [
                                    "Only check your mirrors",
                                    "Only use your turn signal",
                                    "Check mirrors, signal, check blind spot, then maneuver",
                                    "Just check your blind spot"
                                ],
                                correctAnswer: "Check mirrors, signal, check blind spot, then maneuver",
                                explanation: "Safe lane changes require a complete sequence: check mirrors, signal your intention (3 seconds before), check your blind spot with a shoulder check, then maneuver if safe. Skipping any step increases accident risk.",
                                imageUrl: null
                            },
                            {
                                question: "What is defensive driving?",
                                options: [
                                    "Driving aggressively to defend your position",
                                    "Anticipating hazards and driving to prevent accidents",
                                    "Always driving at the speed limit",
                                    "Honking at other drivers who make mistakes"
                                ],
                                correctAnswer: "Anticipating hazards and driving to prevent accidents",
                                explanation: "Defensive driving means anticipating potential hazards, maintaining awareness of your surroundings, and taking action to prevent accidents before they happen. It assumes other drivers may make mistakes and prepares you to react safely.",
                                imageUrl: null
                            }
                        ]
                    },

                    // ==================== ROAD SIGNS DATABASE ====================
                    roadSigns: [
                        {
                            name: "Stop Sign",
                            meaning: "Come to a complete stop. Check for traffic and pedestrians. Proceed only when safe.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MUTCD_R1-1.svg/200px-MUTCD_R1-1.svg.png",
                            description: "An octagonal red sign with white letters. You must come to a complete stop at the stop line, crosswalk, or intersection. Look left, right, and left again before proceeding."
                        },
                        {
                            name: "Yield Sign",
                            meaning: "Slow down and give right of way to other vehicles and pedestrians.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MUTCD_R1-2.svg/200px-MUTCD_R1-2.svg.png",
                            description: "A downward-pointing triangle with a red border and white background. Slow down and be prepared to stop if necessary to let other traffic proceed."
                        },
                        {
                            name: "Speed Limit",
                            meaning: "Maximum legal speed allowed on this road in ideal conditions.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUTCD_R2-1.svg/200px-MUTCD_R2-1.svg.png",
                            description: "A rectangular white sign with black numbers indicating the maximum speed limit. You may drive slower but never faster than this speed."
                        },
                        {
                            name: "No Entry",
                            meaning: "Do not enter this road or area. Traffic flows in the opposite direction.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/MUTCD_R5-1.svg/200px-MUTCD_R5-1.svg.png",
                            description: "A white rectangular sign with red circle and white horizontal bar. Entering this road would put you in the path of oncoming traffic."
                        },
                        {
                            name: "One Way",
                            meaning: "Traffic flows only in the direction indicated by the arrow.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/MUTCD_R6-1.svg/200px-MUTCD_R6-1.svg.png",
                            description: "A white rectangular sign with a black arrow. All traffic must travel in the direction shown. Going the wrong way is extremely dangerous."
                        },
                        {
                            name: "No Parking",
                            meaning: "Parking is prohibited in this area at all times or during specified hours.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/MUTCD_R8-3.svg/200px-MUTCD_R8-3.svg.png",
                            description: "A white sign with red circle and slash over a 'P'. Your vehicle will be towed if parked here. Check for time restrictions."
                        },
                        {
                            name: "Pedestrian Crossing",
                            meaning: "Watch for pedestrians crossing the road. Yield to pedestrians in crosswalk.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MUTCD_W11-2.svg/200px-MUTCD_W11-2.svg.png",
                            description: "A yellow diamond sign with a walking person symbol. Slow down and be prepared to stop for pedestrians."
                        },
                        {
                            name: "School Zone",
                            meaning: "School area ahead. Reduced speed limit when children are present.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MUTCD_S1-1.svg/200px-MUTCD_S1-1.svg.png",
                            description: "A yellow-green pentagon sign with children crossing symbol. Observe reduced speed limits during school hours and watch carefully for children."
                        },
                        {
                            name: "Railroad Crossing",
                            meaning: "Railroad tracks cross the road ahead. Look and listen for trains.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MUTCD_W10-1.svg/200px-MUTCD_W10-1.svg.png",
                            description: "A yellow circular sign with an X and RR letters. Always stop if lights are flashing or gates are down. Never try to beat a train."
                        },
                        {
                            name: "Slippery When Wet",
                            meaning: "Road surface becomes slippery in wet conditions. Reduce speed.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/MUTCD_W8-5.svg/200px-MUTCD_W8-5.svg.png",
                            description: "A yellow diamond sign with a car skidding. Reduce speed in wet weather and avoid sudden braking or steering."
                        },
                        {
                            name: "Sharp Turn Ahead",
                            meaning: "Sharp curve in the road ahead. Reduce speed before entering the curve.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MUTCD_W1-1.svg/200px-MUTCD_W1-1.svg.png",
                            description: "A yellow diamond sign with a curved arrow. Slow down before the curve, not during it. The arrow shows the direction of the turn."
                        },
                        {
                            name: "Roundabout Ahead",
                            meaning: "Circular intersection ahead. Yield to traffic already in the roundabout.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MUTCD_W2-6.svg/200px-MUTCD_W2-6.svg.png",
                            description: "A yellow diamond sign with circular arrows. Slow down, yield to traffic in the circle, and travel counter-clockwise."
                        },
                        {
                            name: "Merge Sign",
                            meaning: "Two lanes of traffic merge into one. Adjust speed and position to merge safely.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MUTCD_W4-1.svg/200px-MUTCD_W4-1.svg.png",
                            description: "A yellow diamond sign with merging arrows. Traffic from the right merges into your lane. Be prepared to adjust speed."
                        },
                        {
                            name: "U-Turn Prohibited",
                            meaning: "Making a U-turn is not allowed at this location.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/MUTCD_R3-4.svg/200px-MUTCD_R3-4.svg.png",
                            description: "A white sign with red circle and slash over a U-turn arrow. Turning around is prohibited for safety or traffic flow reasons."
                        },
                        {
                            name: "Hospital Ahead",
                            meaning: "Medical facility ahead. Quiet zone - no unnecessary horn use.",
                            category: "Information",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MUTCD_D9-13.svg/200px-MUTCD_D9-13.svg.png",
                            description: "A blue sign with white H symbol. Indicates hospital location and reminds drivers to avoid unnecessary noise."
                        },
                        {
                            name: "Men at Work",
                            meaning: "Road work ahead. Workers present. Slow down and be alert.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/MUTCD_W21-1.svg/200px-MUTCD_W21-1.svg.png",
                            description: "An orange diamond sign with a worker symbol. Construction zone ahead. Reduce speed, watch for workers and equipment, and obey all work zone signs."
                        },
                        {
                            name: "Steep Grade",
                            meaning: "Steep hill ahead. Use lower gear and control speed.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MUTCD_W7-1.svg/200px-MUTCD_W7-1.svg.png",
                            description: "A yellow diamond sign with a truck on a slope. Steep downgrade ahead. Use lower gear to control speed and avoid brake overheating."
                        },
                        {
                            name: "Narrow Bridge",
                            meaning: "Bridge ahead is narrower than the road. Reduce speed.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MUTCD_W5-1.svg/200px-MUTCD_W5-1.svg.png",
                            description: "A yellow diamond sign showing a narrowing road. The bridge or road ahead is narrower. Slow down and be prepared to yield."
                        },
                        {
                            name: "Two-Way Traffic",
                            meaning: "Oncoming traffic ahead. Road changes from one-way to two-way.",
                            category: "Warning",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MUTCD_W6-3.svg/200px-MUTCD_W6-3.svg.png",
                            description: "A yellow diamond sign with arrows pointing up and down. You're entering a section where traffic flows in both directions."
                        },
                        {
                            name: "Keep Right",
                            meaning: "Stay to the right of the divider or obstacle.",
                            category: "Regulatory",
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/MUTCD_R4-7.svg/200px-MUTCD_R4-7.svg.png",
                            description: "A white rectangular sign with a black arrow pointing right. Pass on the right side of a traffic island or obstruction."
                        }
                    ]
};

        export default completeCourseContent;
