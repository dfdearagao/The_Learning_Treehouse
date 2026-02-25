import { LessonContent } from '../questionUtils';

export const SCIENCE_CONTENT: Record<string, LessonContent> = {
    // Kindergarten (101 Example)
    "101": { 
        objectives: ["Identify basic plant needs", "Understand seeds grow into plants", "Recognize parts of a plant"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🌱", subtext: "Seed" },
            steps: [
                { id: 1, prompt: "What does a seed need to grow?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌞 + 💧", subtext: "Sun & Water" }, feedback: { success: "Yes! Energy and hydration.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Plant need?", options: ["Sun", "Pizza"], correctIndex: 0, hint: "Sky", explanation: "Sun." },
            { q: "Roots grow?", options: ["Underground", "Sky"], correctIndex: 0, hint: "Dirt", explanation: "Underground." },
            { q: "Water helps plants?", options: ["Yes", "No"], correctIndex: 0, hint: "Drink", explanation: "Yes." },
            { q: "Sun comes from?", options: ["Sky", "Ground"], correctIndex: 0, hint: "Up", explanation: "Sky." },
            { q: "Animals need?", options: ["Food/Water", "Toys"], correctIndex: 0, hint: "Eat", explanation: "Food/Water." },
            { q: "Birds have?", options: ["Feathers", "Fur"], correctIndex: 0, hint: "Fly", explanation: "Feathers." },
            { q: "Fish live in?", options: ["Water", "Trees"], correctIndex: 0, hint: "Swim", explanation: "Water." },
            { q: "Dogs have?", options: ["Fur", "Scales"], correctIndex: 0, hint: "Pet", explanation: "Fur." },
            { q: "Seeds become?", options: ["Plants", "Rocks"], correctIndex: 0, hint: "Grow", explanation: "Plants." },
            { q: "Green part of plant?", options: ["Leaf", "Root"], correctIndex: 0, hint: "Photosynthesis", explanation: "Leaf." }
        ], 
        quiz: [
            { q: "Do plants drink water?", options: ["Yes", "No"], correctIndex: 0, hint: "Thirsty.", explanation: "Yes." },
            { q: "Where do roots grow?", options: ["Underground", "In sky", "On leaves", "In water"], correctIndex: 0, hint: "Dirt.", explanation: "Underground." },
            { q: "Leaves are usually?", options: ["Green", "Blue", "Black", "White"], correctIndex: 0, hint: "Grass color.", explanation: "Green." },
            { q: "Sunlight helps plants?", options: ["Grow", "Sleep", "Run", "Cry"], correctIndex: 0, hint: "Big.", explanation: "Grow." },
            { q: "Is a dog a plant?", options: ["No", "Yes"], correctIndex: 0, hint: "Animal.", explanation: "No." },
            { q: "Seeds turn into?", options: ["Plants", "Rocks", "Cars", "Toys"], correctIndex: 0, hint: "Grow.", explanation: "Plants." },
            { q: "Flower petal color?", options: ["Any color", "Invisible", "Clear", "None"], correctIndex: 0, hint: "Colorful.", explanation: "Any color." },
            { q: "Do plants eat pizza?", options: ["No", "Yes"], correctIndex: 0, hint: "Sunlight.", explanation: "No." },
            { q: "What is a baby plant?", options: ["Sprout", "Puppy", "Kitten", "Cub"], correctIndex: 0, hint: "Small.", explanation: "Sprout." },
            { q: "Tree trunk is?", options: ["Hard", "Soft", "Liquid", "Gas"], correctIndex: 0, hint: "Wood.", explanation: "Hard." },
            { q: "Plants need air?", options: ["Yes", "No"], correctIndex: 0, hint: "Breathe.", explanation: "Yes." },
            { q: "Where is the stem?", options: ["Middle", "Bottom", "Top", "Nowhere"], correctIndex: 0, hint: "Holds up.", explanation: "Middle." },
            { q: "Fruit comes from?", options: ["Plants", "Sky", "Rocks", "Ocean"], correctIndex: 0, hint: "Trees.", explanation: "Plants." },
            { q: "Is a rock alive?", options: ["No", "Yes"], correctIndex: 0, hint: "Stone.", explanation: "No." },
            { q: "Grass is a?", options: ["Plant", "Animal", "Mineral", "Gas"], correctIndex: 0, hint: "Green.", explanation: "Plant." }
        ] 
    },

    // 1st Grade (201 Example)
    "201": { 
        objectives: ["Define Sound as vibration", "Identify Loud and Soft sounds", "Understand how we hear"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🥁", subtext: "Drum" },
            steps: [
                { id: 1, prompt: "When you hit a drum, it...", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "VIBRATE", subtext: "Shakes" }, feedback: { success: "Vibration makes sound!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Sound is?", options: ["Vibration", "Light"], correctIndex: 0, hint: "Shake", explanation: "Vibration." },
            { q: "Use ears to?", options: ["Hear", "See"], correctIndex: 0, hint: "Listen", explanation: "Hear." },
            { q: "Loud sound?", options: ["Drum", "Feather"], correctIndex: 0, hint: "Bang", explanation: "Drum." },
            { q: "Quiet sound?", options: ["Whisper", "Yell"], correctIndex: 0, hint: "Shh", explanation: "Whisper." },
            { q: "Music is?", options: ["Sound", "Smell"], correctIndex: 0, hint: "Listen", explanation: "Sound." },
            { q: "Vibration moves?", options: ["Back and forth", "Up only"], correctIndex: 0, hint: "Shake", explanation: "Back and forth." },
            { q: "Can you see sound?", options: ["No", "Yes"], correctIndex: 0, hint: "Invisible", explanation: "No." },
            { q: "Echo?", options: ["Repeated sound", "New sound"], correctIndex: 0, hint: "Bounce", explanation: "Repeated sound." },
            { q: "Guitar uses?", options: ["Strings", "Keys"], correctIndex: 0, hint: "Pluck", explanation: "Strings." },
            { q: "Drum uses?", options: ["Hit", "Blow"], correctIndex: 0, hint: "Bang", explanation: "Hit." }
        ], 
        quiz: [
            { q: "Loud sound?", options: ["Drum", "Feather", "Whisper", "Sleep"], correctIndex: 0, hint: "Bang.", explanation: "Drum." },
            { q: "Soft sound?", options: ["Whisper", "Scream", "Horn", "Boom"], correctIndex: 0, hint: "Quiet.", explanation: "Whisper." },
            { q: "Sound travels to?", options: ["Ears", "Eyes", "Nose", "Toes"], correctIndex: 0, hint: "Hear.", explanation: "Ears." },
            { q: "Vibration means?", options: ["Shaking fast", "Sleeping", "Eating", "Running"], correctIndex: 0, hint: "Buzz.", explanation: "Shaking fast." },
            { q: "Can sound move water?", options: ["Yes", "No"], correctIndex: 0, hint: "Ripples.", explanation: "Yes." },
            { q: "No sound is called?", options: ["Silence", "Loud", "Noise", "Music"], correctIndex: 0, hint: "Quiet.", explanation: "Silence." },
            { q: "Guitar makes sound with?", options: ["Strings", "Keys", "Drum", "Air"], correctIndex: 0, hint: "Pluck.", explanation: "Strings." },
            { q: "Flute uses?", options: ["Air", "Strings", "Hit", "Shake"], correctIndex: 0, hint: "Blow.", explanation: "Air." },
            { q: "High pitch?", options: ["Whistle", "Thunder", "Lion", "Bear"], correctIndex: 0, hint: "Squeak.", explanation: "Whistle." },
            { q: "Low pitch?", options: ["Thunder", "Bird", "Bell", "Mouse"], correctIndex: 0, hint: "Boom.", explanation: "Thunder." },
            { q: "Echolocation used by?", options: ["Bat", "Dog", "Cat", "Fish"], correctIndex: 0, hint: "Night flyer.", explanation: "Bat." },
            { q: "Sound wave?", options: ["Invisible", "Blue", "Red", "Square"], correctIndex: 0, hint: "Cant see.", explanation: "Invisible." },
            { q: "Protect ears from?", options: ["Loud noise", "Soft music", "Whispers", "Silence"], correctIndex: 0, hint: "Ouch.", explanation: "Loud noise." },
            { q: "Phone rings with?", options: ["Sound", "Smell", "Taste", "Touch"], correctIndex: 0, hint: "Ring.", explanation: "Sound." },
            { q: "Echo is?", options: ["Bouncing sound", "New sound", "Quiet", "Gone"], correctIndex: 0, hint: "Repeat.", explanation: "Bouncing sound." }
        ] 
    },

    // 2nd Grade (301 Example)
    "301": { 
        objectives: ["Differentiate Solids, Liquids, Gases", "Understand states of matter", "Observe physical changes"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🧊", subtext: "Ice" },
            steps: [
                { id: 1, prompt: "Ice is what state of matter?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "SOLID", subtext: "Hard" }, feedback: { success: "Correct, it keeps its shape.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Solid?", options: ["Rock", "Water"], correctIndex: 0, hint: "Hard", explanation: "Rock." },
            { q: "Liquid?", options: ["Water", "Ice", "Wood", "Sand"], correctIndex: 0, hint: "Pour", explanation: "Water." },
            { q: "Gas?", options: ["Air", "Rock", "Water", "Tree"], correctIndex: 0, hint: "Invisible", explanation: "Air." },
            { q: "Ice is a?", options: ["Solid", "Liquid"], correctIndex: 0, hint: "Hard", explanation: "Solid." },
            { q: "Water is a?", options: ["Liquid", "Solid"], correctIndex: 0, hint: "Wet", explanation: "Liquid." },
            { q: "Steam is a?", options: ["Gas", "Solid"], correctIndex: 0, hint: "Hot air", explanation: "Gas." },
            { q: "Does solid change shape?", options: ["No", "Yes"], correctIndex: 0, hint: "Fixed", explanation: "No." },
            { q: "Does liquid change shape?", options: ["Yes", "No"], correctIndex: 0, hint: "Fills cup", explanation: "Yes." },
            { q: "Melting?", options: ["Solid to Liquid", "Liquid to Solid"], correctIndex: 0, hint: "Ice to Water", explanation: "Solid to Liquid." },
            { q: "Freezing?", options: ["Liquid to Solid", "Solid to Liquid"], correctIndex: 0, hint: "Water to Ice", explanation: "Liquid to Solid." }
        ], 
        quiz: [
            { q: "Liquid?", options: ["Milk", "Ice", "Wood", "Stone"], correctIndex: 0, hint: "Pour.", explanation: "Milk." },
            { q: "Gas?", options: ["Air", "Water", "Ice", "Dirt"], correctIndex: 0, hint: "Breathe.", explanation: "Air." },
            { q: "Solid shape?", options: ["Stays same", "Changes", "Flows", "Fills room"], correctIndex: 0, hint: "Rigid.", explanation: "Stays same." },
            { q: "Liquid shape?", options: ["Fills container", "Stays same", "Hard", "Fixed"], correctIndex: 0, hint: "Cup.", explanation: "Fills container." },
            { q: "Ice melting turns to?", options: ["Water", "Gas", "Solid", "Rock"], correctIndex: 0, hint: "Liquid.", explanation: "Water." },
            { q: "Water freezing turns to?", options: ["Ice", "Steam", "Air", "Juice"], correctIndex: 0, hint: "Solid.", explanation: "Ice." },
            { q: "Boiling water makes?", options: ["Steam", "Ice", "Snow", "Mud"], correctIndex: 0, hint: "Gas.", explanation: "Steam." },
            { q: "Hardest solid?", options: ["Diamond", "Chalk", "Paper", "Wood"], correctIndex: 0, hint: "Gem.", explanation: "Diamond." },
            { q: "Can you pour sand?", options: ["Yes", "No"], correctIndex: 0, hint: "Tiny solids.", explanation: "Yes." },
            { q: "Is honey a liquid?", options: ["Yes", "No"], correctIndex: 0, hint: "Thick.", explanation: "Yes." },
            { q: "Matter is?", options: ["Everything", "Nothing", "Just gas", "Just solid"], correctIndex: 0, hint: "Stuff.", explanation: "Everything." },
            { q: "Invisible matter?", options: ["Air", "Water", "Ice", "Wood"], correctIndex: 0, hint: "Gas.", explanation: "Air." },
            { q: "Reversible change?", options: ["Melting ice", "Burning wood", "Cooking egg", "Rusting"], correctIndex: 0, hint: "Go back.", explanation: "Melting ice." },
            { q: "Irreversible change?", options: ["Burning paper", "Freezing water", "Folding paper", "Mixing sand"], correctIndex: 0, hint: "Cant fix.", explanation: "Burning paper." },
            { q: "Which is heavy?", options: ["Brick", "Feather", "Air", "Leaf"], correctIndex: 0, hint: "Solid.", explanation: "Brick." }
        ] 
    },

    // 3rd Grade (402 Example)
    "402": { 
        objectives: ["Identify magnetic poles", "Understand attraction vs repulsion", "Classify magnetic materials"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🧲", subtext: "Magnet" },
            steps: [
                { id: 1, prompt: "What happens when N meets S?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "ATTRACT", subtext: "Stick together" }, feedback: { success: "Opposites attract!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Magnet attracts?", options: ["Iron", "Wood"], correctIndex: 0, hint: "Metal", explanation: "Iron." },
            { q: "Magnet poles?", options: ["North/South", "East/West"], correctIndex: 0, hint: "Ends", explanation: "North/South." },
            { q: "Opposites?", options: ["Attract", "Repel"], correctIndex: 0, hint: "Pull", explanation: "Attract." },
            { q: "Likes?", options: ["Repel", "Attract"], correctIndex: 0, hint: "Push", explanation: "Repel." },
            { q: "Is plastic magnetic?", options: ["No", "Yes"], correctIndex: 0, hint: "Plastic", explanation: "No." },
            { q: "Is paper clip magnetic?", options: ["Yes", "No"], correctIndex: 0, hint: "Metal", explanation: "Yes." },
            { q: "Magnet push?", options: ["Repel", "Attract"], correctIndex: 0, hint: "Away", explanation: "Repel." },
            { q: "Magnet pull?", options: ["Attract", "Repel"], correctIndex: 0, hint: "Towards", explanation: "Attract." },
            { q: "Compass uses?", options: ["Magnet", "Battery"], correctIndex: 0, hint: "North", explanation: "Magnet." },
            { q: "Lodestone?", options: ["Natural magnet", "Fake magnet"], correctIndex: 0, hint: "Rock", explanation: "Natural magnet." }
        ], 
        quiz: [
            { q: "Magnetic poles?", options: ["North/South", "East/West", "Up/Down", "Left/Right"], correctIndex: 0, hint: "N/S.", explanation: "North/South." },
            { q: "Opposites?", options: ["Attract", "Repel", "Nothing", "Sleep"], correctIndex: 0, hint: "Pull.", explanation: "Attract." },
            { q: "Likes?", options: ["Repel", "Attract", "Stick", "Pull"], correctIndex: 0, hint: "Push away.", explanation: "Repel." },
            { q: "Magnet metal?", options: ["Iron", "Gold", "Silver", "Aluminum"], correctIndex: 0, hint: "Fe.", explanation: "Iron." },
            { q: "Earth is a magnet?", options: ["Yes", "No"], correctIndex: 0, hint: "Compass.", explanation: "Yes." },
            { q: "Invisible force?", options: ["Magnetism", "Glue", "Tape", "Rope"], correctIndex: 0, hint: "Field.", explanation: "Magnetism." },
            { q: "Compass points?", options: ["North", "South", "East", "West"], correctIndex: 0, hint: "N.", explanation: "North." },
            { q: "Is plastic magnetic?", options: ["No", "Yes"], correctIndex: 0, hint: "Not metal.", explanation: "No." },
            { q: "Is paper clip magnetic?", options: ["Yes", "No"], correctIndex: 0, hint: "Steel.", explanation: "Yes." },
            { q: "Strongest part of magnet?", options: ["Poles", "Middle", "Side", "Top"], correctIndex: 0, hint: "Ends.", explanation: "Poles." },
            { q: "Temporary magnet?", options: ["Electromagnet", "Bar magnet", "Horseshoe", "Rock"], correctIndex: 0, hint: "Electricity.", explanation: "Electromagnet." },
            { q: "Lodestone is?", options: ["Natural magnet", "Fake", "Plastic", "Wood"], correctIndex: 0, hint: "Rock.", explanation: "Natural magnet." },
            { q: "Magnet shape?", options: ["Horseshoe", "Triangle", "Star", "Liquid"], correctIndex: 0, hint: "U shape.", explanation: "Horseshoe." },
            { q: "Does magnet work underwater?", options: ["Yes", "No"], correctIndex: 0, hint: "Field.", explanation: "Yes." },
            { q: "Distance affects strength?", options: ["Yes", "No"], correctIndex: 0, hint: "Farther is weaker.", explanation: "Yes." }
        ] 
    },

    // 4th Grade (504 Example)
    "504": { 
        objectives: ["Describe natural hazards", "Identify causes of natural disasters", "Understand safety procedures"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🌋", subtext: "Volcano" },
            steps: [
                { id: 1, prompt: "What comes out?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "LAVA", subtext: "Hot Rock" }, feedback: { success: "Explosive!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Earthquake?", options: ["Shake", "Wind"], correctIndex: 0, hint: "Ground", explanation: "Shake." },
            { q: "Volcano?", options: ["Eruption", "Rain"], correctIndex: 0, hint: "Lava", explanation: "Eruption." },
            { q: "Flood?", options: ["Too much water", "No water"], correctIndex: 0, hint: "Wet", explanation: "Too much water." },
            { q: "Drought?", options: ["No water", "Too much water"], correctIndex: 0, hint: "Dry", explanation: "No water." },
            { q: "Tornado?", options: ["Wind funnel", "Snow"], correctIndex: 0, hint: "Twist", explanation: "Wind funnel." },
            { q: "Hurricane?", options: ["Big storm", "Small rain"], correctIndex: 0, hint: "Ocean storm", explanation: "Big storm." },
            { q: "Tsunami?", options: ["Big wave", "Small ripple"], correctIndex: 0, hint: "Ocean", explanation: "Big wave." },
            { q: "Landslide?", options: ["Falling dirt", "Falling rain"], correctIndex: 0, hint: "Hill", explanation: "Falling dirt." },
            { q: "Blizzard?", options: ["Snow storm", "Sand storm"], correctIndex: 0, hint: "Cold", explanation: "Snow storm." },
            { q: "Safety kit?", options: ["Food/Water", "Toys"], correctIndex: 0, hint: "Survive", explanation: "Food/Water." }
        ], 
        quiz: [
            { q: "Tsunami?", options: ["Giant wave", "Fire", "Wind", "Rain"], correctIndex: 0, hint: "Ocean.", explanation: "Giant wave." },
            { q: "Volcano releases?", options: ["Lava", "Ice", "Water", "Sand"], correctIndex: 0, hint: "Hot.", explanation: "Lava." },
            { q: "Hurricane is?", options: ["Storm", "Fire", "Shake", "Snow"], correctIndex: 0, hint: "Wind/Rain.", explanation: "Storm." },
            { q: "Tornado shape?", options: ["Funnel", "Square", "Circle", "Line"], correctIndex: 0, hint: "Twister.", explanation: "Funnel." },
            { q: "Flood?", options: ["Too much water", "No water", "Fire", "Wind"], correctIndex: 0, hint: "Overflow.", explanation: "Too much water." },
            { q: "Drought?", options: ["No rain", "Too much rain", "Snow", "Wind"], correctIndex: 0, hint: "Dry.", explanation: "No rain." },
            { q: "Earthquake scale?", options: ["Richter", "Weight", "Length", "Temp"], correctIndex: 0, hint: "Magnitude.", explanation: "Richter." },
            { q: "Magma is?", options: ["Underground lava", "Rock", "Water", "Air"], correctIndex: 0, hint: "Inside.", explanation: "Underground lava." },
            { q: "Fault line?", options: ["Crack in Earth", "Road", "River", "Wall"], correctIndex: 0, hint: "Quake.", explanation: "Crack in Earth." },
            { q: "Blizzard?", options: ["Snow storm", "Rain storm", "Sand storm", "Fire"], correctIndex: 0, hint: "Cold.", explanation: "Snow storm." },
            { q: "Avalanche?", options: ["Falling snow", "Falling rock", "Rain", "Wind"], correctIndex: 0, hint: "Mountain.", explanation: "Falling snow." },
            { q: "Wildfire cause?", options: ["Lightning", "Rain", "Snow", "Ice"], correctIndex: 0, hint: "Spark.", explanation: "Lightning." },
            { q: "Safety in quake?", options: ["Drop, Cover, Hold", "Run", "Jump", "Swim"], correctIndex: 0, hint: "Table.", explanation: "Drop, Cover, Hold." },
            { q: "Eye of hurricane?", options: ["Calm center", "Windy part", "Rainy part", "Outside"], correctIndex: 0, hint: "Middle.", explanation: "Calm center." },
            { q: "Landslide?", options: ["Falling dirt", "Water", "Snow", "Air"], correctIndex: 0, hint: "Gravity.", explanation: "Falling dirt." }
        ] 
    },

    // 5th Grade (603 Example)
    "603": { 
        objectives: ["Identify planets in order", "Understand orbit and rotation", "Describe features of the solar system"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🌍", subtext: "Earth" },
            steps: [
                { id: 1, prompt: "What does Earth orbit?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "☀️", subtext: "The Sun" }, feedback: { success: "One year per orbit.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Largest planet?", options: ["Jupiter", "Mars"], correctIndex: 0, hint: "Big", explanation: "Jupiter." },
            { q: "Sun is a?", options: ["Star", "Planet"], correctIndex: 0, hint: "Hot", explanation: "Star." },
            { q: "Earth orbits?", options: ["Sun", "Moon"], correctIndex: 0, hint: "Circle", explanation: "Sun." },
            { q: "Moon orbits?", options: ["Earth", "Sun"], correctIndex: 0, hint: "Circle", explanation: "Earth." },
            { q: "Red planet?", options: ["Mars", "Venus"], correctIndex: 0, hint: "Color", explanation: "Mars." },
            { q: "Blue planet?", options: ["Earth", "Mars"], correctIndex: 0, hint: "Water", explanation: "Earth." },
            { q: "Rings?", options: ["Saturn", "Mercury"], correctIndex: 0, hint: "Circle", explanation: "Saturn." },
            { q: "Closest to Sun?", options: ["Mercury", "Neptune"], correctIndex: 0, hint: "First", explanation: "Mercury." },
            { q: "Farthest planet?", options: ["Neptune", "Mercury"], correctIndex: 0, hint: "Last", explanation: "Neptune." },
            { q: "Gravity?", options: ["Pulls down", "Pushes up"], correctIndex: 0, hint: "Fall", explanation: "Pulls down." }
        ], 
        quiz: [
            { q: "Planet we live on?", options: ["Earth", "Mars", "Venus", "Moon"], correctIndex: 0, hint: "Home.", explanation: "Earth." },
            { q: "Red Planet?", options: ["Mars", "Jupiter", "Saturn", "Sun"], correctIndex: 0, hint: "Rust.", explanation: "Mars." },
            { q: "Planet with rings?", options: ["Saturn", "Mercury", "Venus", "Mars"], correctIndex: 0, hint: "Beautiful.", explanation: "Saturn." },
            { q: "Closest to Sun?", options: ["Mercury", "Earth", "Pluto", "Neptune"], correctIndex: 0, hint: "Hot.", explanation: "Mercury." },
            { q: "Farthest planet?", options: ["Neptune", "Mercury", "Mars", "Venus"], correctIndex: 0, hint: "Cold.", explanation: "Neptune." },
            { q: "Is Pluto a planet?", options: ["Dwarf planet", "Yes", "Star", "Moon"], correctIndex: 0, hint: "Small.", explanation: "Dwarf planet." },
            { q: "Sun is a?", options: ["Star", "Planet", "Moon", "Comet"], correctIndex: 0, hint: "Hot gas.", explanation: "Star." },
            { q: "Earth orbits?", options: ["Sun", "Moon", "Mars", "Stars"], correctIndex: 0, hint: "Center.", explanation: "Sun." },
            { q: "Moon orbits?", options: ["Earth", "Sun", "Mars", "Venus"], correctIndex: 0, hint: "Satellite.", explanation: "Earth." },
            { q: "Hottest planet?", options: ["Venus", "Mercury", "Mars", "Earth"], correctIndex: 0, hint: "Greenhouse.", explanation: "Venus." },
            { q: "Gas Giant?", options: ["Jupiter", "Earth", "Mars", "Venus"], correctIndex: 0, hint: "Big.", explanation: "Jupiter." },
            { q: "Galaxy name?", options: ["Milky Way", "Snickers", "Andromeda", "Swirl"], correctIndex: 0, hint: "Dairy.", explanation: "Milky Way." },
            { q: "Astronaut goes to?", options: ["Space", "Ocean", "Cave", "Forest"], correctIndex: 0, hint: "Rocket.", explanation: "Space." },
            { q: "Gravity on Moon?", options: ["Less than Earth", "More", "Same", "None"], correctIndex: 0, hint: "Bounce.", explanation: "Less than Earth." },
            { q: "Shooting star is?", options: ["Meteor", "Star", "Planet", "Sun"], correctIndex: 0, hint: "Rock.", explanation: "Meteor." }
        ] 
    },

    // Fallback for default
    "default": { 
        objectives: ["Ask scientific questions", "Make observations", "Use scientific tools"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🌱", subtext: "Seed" },
            steps: [
                { id: 1, prompt: "What does a seed need to grow?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌞 + 💧", subtext: "Sun & Water" }, feedback: { success: "Yes! Energy and hydration.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Science is?", options: ["Study of world", "Magic", "Art", "PE"], correctIndex: 0, hint: "Real", explanation: "Study." },
            { q: "Test?", options: ["Experiment", "Guess", "Sleep", "Eat"], correctIndex: 0, hint: "Try", explanation: "Experiment" },
            { q: "Observation?", options: ["Looking", "Sleeping", "Running", "Hiding"], correctIndex: 0, hint: "See", explanation: "Looking" },
            { q: "Data?", options: ["Numbers", "Food", "Toys", "Games"], correctIndex: 0, hint: "Info", explanation: "Numbers" },
            { q: "Lab coat?", options: ["Safety", "Fashion", "Warmth", "Rain"], correctIndex: 0, hint: "Protect", explanation: "Safety" },
            { q: "Goggles?", options: ["Eye safety", "Swimming", "Cool", "Sleep"], correctIndex: 0, hint: "Eyes", explanation: "Eye safety" },
            { q: "Beaker?", options: ["Cup for liquid", "Hat", "Shoe", "Ball"], correctIndex: 0, hint: "Pour", explanation: "Cup for liquid" },
            { q: "Thermometer?", options: ["Temperature", "Weight", "Length", "Time"], correctIndex: 0, hint: "Hot/Cold", explanation: "Temperature" },
            { q: "Ruler?", options: ["Length", "Weight", "Volume", "Temp"], correctIndex: 0, hint: "Measure", explanation: "Length" },
            { q: "Question?", options: ["Ask why", "Say no", "Sleep", "Run"], correctIndex: 0, hint: "Wonder", explanation: "Ask why" }
        ], 
        quiz: [
            { q: "Test?", options: ["Experiment", "Guess", "Sleep", "Eat"], correctIndex: 0, hint: "Try", explanation: "Experiment" },
            { q: "Hypothesis?", options: ["Guess", "Fact", "Law", "Done"], correctIndex: 0, hint: "Prediction", explanation: "Guess" },
            { q: "Data?", options: ["Info", "Food", "Toy", "Game"], correctIndex: 0, hint: "Numbers", explanation: "Info" },
            { q: "Lab?", options: ["Work room", "Kitchen", "Bed", "Car"], correctIndex: 0, hint: "Science place", explanation: "Work room" },
            { q: "Safety gear?", options: ["Goggles", "Hat", "Scarf", "Socks"], correctIndex: 0, hint: "Eyes", explanation: "Goggles" },
            { q: "Microscope?", options: ["See small things", "See far", "Cook", "Run"], correctIndex: 0, hint: "Tiny", explanation: "See small things" },
            { q: "Telescope?", options: ["See far", "See small", "Hear", "Smell"], correctIndex: 0, hint: "Stars", explanation: "See far" },
            { q: "Beaker?", options: ["Cup", "Fork", "Plate", "Napkin"], correctIndex: 0, hint: "Liquid", explanation: "Cup" },
            { q: "Thermometer?", options: ["Temp", "Weight", "Length", "Time"], correctIndex: 0, hint: "Hot/Cold", explanation: "Temp" },
            { q: "Ruler?", options: ["Length", "Weight", "Volume", "Temp"], correctIndex: 0, hint: "Measure", explanation: "Length" },
            { q: "Scale?", options: ["Weight", "Length", "Time", "Temp"], correctIndex: 0, hint: "Heavy", explanation: "Weight" },
            { q: "Magnet?", options: ["Attracts metal", "Floats", "Burns", "Freezes"], correctIndex: 0, hint: "Stick", explanation: "Attracts metal" },
            { q: "Battery?", options: ["Power", "Water", "Food", "Air"], correctIndex: 0, hint: "Energy", explanation: "Power" },
            { q: "Wire?", options: ["Conductor", "Insulator", "Liquid", "Gas"], correctIndex: 0, hint: "Metal", explanation: "Conductor" },
            { q: "Bulb?", options: ["Light", "Sound", "Heat", "Cold"], correctIndex: 0, hint: "Bright", explanation: "Light" }
        ] 
    }
};