import { QuestionTemplate } from '../questionUtils';

const REAL_PRACTICE: Record<string, QuestionTemplate[]> = {
    "101": [
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
    "102": [
        { q: "Use eyes to?", options: ["See", "Hear"], correctIndex: 0, hint: "Sight", explanation: "See." },
        { q: "Use ears to?", options: ["Hear", "Smell"], correctIndex: 0, hint: "Sound", explanation: "Hear." },
        { q: "Use nose to?", options: ["Smell", "Taste"], correctIndex: 0, hint: "Scent", explanation: "Smell." },
        { q: "Use tongue to?", options: ["Taste", "See"], correctIndex: 0, hint: "Food", explanation: "Taste." },
        { q: "Use hands to?", options: ["Touch", "Smell"], correctIndex: 0, hint: "Feel", explanation: "Touch." },
        { q: "How many senses?", options: ["5", "10"], correctIndex: 0, hint: "Count", explanation: "5." },
        { q: "Observe means?", options: ["Look closely", "Sleep"], correctIndex: 0, hint: "Watch", explanation: "Look closely." },
        { q: "Magnifying glass?", options: ["Makes bigger", "Makes smaller"], correctIndex: 0, hint: "Zoom", explanation: "Makes bigger." },
        { q: "Soft?", options: ["Pillow", "Rock"], correctIndex: 0, hint: "Feel", explanation: "Pillow." },
        { q: "Rough?", options: ["Sandpaper", "Glass"], correctIndex: 0, hint: "Feel", explanation: "Sandpaper." }
    ],
    "103": [
        { q: "Sunny day?", options: ["Sun is out", "Rain"], correctIndex: 0, hint: "Bright", explanation: "Sun is out." },
        { q: "Rainy day?", options: ["Wet", "Dry"], correctIndex: 0, hint: "Water", explanation: "Wet." },
        { q: "Snowy day?", options: ["Cold/White", "Hot"], correctIndex: 0, hint: "Ice", explanation: "Cold/White." },
        { q: "Windy?", options: ["Air moving", "Still"], correctIndex: 0, hint: "Blow", explanation: "Air moving." },
        { q: "Wear in rain?", options: ["Raincoat", "Swimsuit"], correctIndex: 0, hint: "Dry", explanation: "Raincoat." },
        { q: "Wear in snow?", options: ["Coat/Hat", "Shorts"], correctIndex: 0, hint: "Warm", explanation: "Coat/Hat." },
        { q: "Forecaster?", options: ["Predicts weather", "Cooks"], correctIndex: 0, hint: "TV", explanation: "Predicts weather." },
        { q: "Cloud?", options: ["Water vapor", "Cotton"], correctIndex: 0, hint: "Sky", explanation: "Water vapor." },
        { q: "Sun feels?", options: ["Warm", "Cold"], correctIndex: 0, hint: "Heat", explanation: "Warm." },
        { q: "Night time?", options: ["Dark", "Bright"], correctIndex: 0, hint: "Sleep", explanation: "Dark." }
    ],
    "104": [
        { q: "How many seasons?", options: ["4", "2"], correctIndex: 0, hint: "Count", explanation: "4." },
        { q: "Winter is?", options: ["Cold", "Hot"], correctIndex: 0, hint: "Snow", explanation: "Cold." },
        { q: "Summer is?", options: ["Hot", "Cold"], correctIndex: 0, hint: "Beach", explanation: "Hot." },
        { q: "Spring has?", options: ["Flowers", "Snow"], correctIndex: 0, hint: "Grow", explanation: "Flowers." },
        { q: "Fall leaves?", options: ["Change color", "Turn blue"], correctIndex: 0, hint: "Orange", explanation: "Change color." },
        { q: "Snowman in?", options: ["Winter", "Summer"], correctIndex: 0, hint: "Cold", explanation: "Winter." },
        { q: "Swim in?", options: ["Summer", "Winter"], correctIndex: 0, hint: "Hot", explanation: "Summer." },
        { q: "Baby animals in?", options: ["Spring", "Winter"], correctIndex: 0, hint: "Born", explanation: "Spring." },
        { q: "Pumpkin in?", options: ["Fall", "Spring"], correctIndex: 0, hint: "Halloween", explanation: "Fall." },
        { q: "Cycle?", options: ["Repeats", "Stops"], correctIndex: 0, hint: "Circle", explanation: "Repeats." }
    ],
    "201": [
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
    "202": [
        { q: "Light helps us?", options: ["See", "Hear"], correctIndex: 0, hint: "Eyes", explanation: "See." },
        { q: "Source of light?", options: ["Sun", "Rock"], correctIndex: 0, hint: "Bright", explanation: "Sun." },
        { q: "Shadow created by?", options: ["Blocked light", "Added light"], correctIndex: 0, hint: "Dark", explanation: "Blocked light." },
        { q: "Transparent?", options: ["See through", "Solid"], correctIndex: 0, hint: "Glass", explanation: "See through." },
        { q: "Opaque?", options: ["Blocks light", "See through"], correctIndex: 0, hint: "Wall", explanation: "Blocks light." },
        { q: "Reflect?", options: ["Bounce back", "Absorb"], correctIndex: 0, hint: "Mirror", explanation: "Bounce back." },
        { q: "Daytime has?", options: ["Sun", "Moon"], correctIndex: 0, hint: "Light", explanation: "Sun." },
        { q: "Nighttime has?", options: ["Darkness", "Sun"], correctIndex: 0, hint: "Sleep", explanation: "Darkness." },
        { q: "Rainbow needs?", options: ["Light & Water", "Darkness"], correctIndex: 0, hint: "Colors", explanation: "Light & Water." },
        { q: "Mirror?", options: ["Reflects", "Blocks"], correctIndex: 0, hint: "See self", explanation: "Reflects." }
    ],
    "203": [
        { q: "Offspring?", options: ["Baby", "Parent"], correctIndex: 0, hint: "Child", explanation: "Baby." },
        { q: "Parent?", options: ["Adult", "Baby"], correctIndex: 0, hint: "Mom/Dad", explanation: "Adult." },
        { q: "Do babies look like parents?", options: ["Yes", "No"], correctIndex: 0, hint: "Similar", explanation: "Yes." },
        { q: "Kitten grows into?", options: ["Cat", "Dog"], correctIndex: 0, hint: "Meow", explanation: "Cat." },
        { q: "Puppy grows into?", options: ["Dog", "Bird"], correctIndex: 0, hint: "Woof", explanation: "Dog." },
        { q: "Does parent help baby?", options: ["Yes", "No"], correctIndex: 0, hint: "Care", explanation: "Yes." },
        { q: "Bird feeds baby?", options: ["Worms", "Pizza"], correctIndex: 0, hint: "Beak", explanation: "Worms." },
        { q: "Egg?", options: ["Baby bird inside", "Rock"], correctIndex: 0, hint: "Shell", explanation: "Baby bird inside." },
        { q: "Mammals have?", options: ["Fur/Hair", "Scales"], correctIndex: 0, hint: "Warm", explanation: "Fur/Hair." },
        { q: "Life cycle?", options: ["Circle of life", "Line"], correctIndex: 0, hint: "Repeat", explanation: "Circle of life." }
    ],
    "204": [
        { q: "Roots?", options: ["Drink water", "Make seeds"], correctIndex: 0, hint: "Underground", explanation: "Drink water." },
        { q: "Stem?", options: ["Holds up plant", "Eats bugs"], correctIndex: 0, hint: "Support", explanation: "Holds up plant." },
        { q: "Leaves?", options: ["Make food", "Drink water"], correctIndex: 0, hint: "Sun", explanation: "Make food." },
        { q: "Flower?", options: ["Makes seeds", "Holds plant"], correctIndex: 0, hint: "Pretty", explanation: "Makes seeds." },
        { q: "Seed?", options: ["Grows new plant", "Does nothing"], correctIndex: 0, hint: "Baby", explanation: "Grows new plant." },
        { q: "Photosynthesis?", options: ["Making food", "Sleeping"], correctIndex: 0, hint: "Sunlight", explanation: "Making food." },
        { q: "Pollination?", options: ["Spreading pollen", "Watering"], correctIndex: 0, hint: "Bees", explanation: "Spreading pollen." },
        { q: "Fruit?", options: ["Holds seeds", "Leaf"], correctIndex: 0, hint: "Eat", explanation: "Holds seeds." },
        { q: "Trunk?", options: ["Tree stem", "Root"], correctIndex: 0, hint: "Wood", explanation: "Tree stem." },
        { q: "Can we eat plants?", options: ["Yes", "No"], correctIndex: 0, hint: "Salad", explanation: "Yes." }
    ],
    "301": [
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
    "302": [
        { q: "Material?", options: ["What things made of", "Air"], correctIndex: 0, hint: "Stuff", explanation: "What things made of." },
        { q: "Wood is?", options: ["Hard", "Liquid"], correctIndex: 0, hint: "Tree", explanation: "Hard." },
        { q: "Glass is?", options: ["Clear/Breakable", "Soft"], correctIndex: 0, hint: "Window", explanation: "Clear/Breakable." },
        { q: "Metal is?", options: ["Strong", "Weak"], correctIndex: 0, hint: "Car", explanation: "Strong." },
        { q: "Paper is?", options: ["Thin/Flexible", "Hard"], correctIndex: 0, hint: "Write", explanation: "Thin/Flexible." },
        { q: "Absorbent?", options: ["Soaks water", "Repels water"], correctIndex: 0, hint: "Sponge", explanation: "Soaks water." },
        { q: "Waterproof?", options: ["Repels water", "Soaks water"], correctIndex: 0, hint: "Umbrella", explanation: "Repels water." },
        { q: "Structure?", options: ["Building", "Puddle"], correctIndex: 0, hint: "House", explanation: "Building." },
        { q: "Engineer?", options: ["Designs/Builds", "Cooks"], correctIndex: 0, hint: "Plan", explanation: "Designs/Builds." },
        { q: "Bridge?", options: ["Connects places", "Wall"], correctIndex: 0, hint: "Over water", explanation: "Connects places." }
    ],
    "303": [
        { q: "Fast change?", options: ["Volcano", "Erosion"], correctIndex: 0, hint: "Boom", explanation: "Volcano." },
        { q: "Slow change?", options: ["Erosion", "Earthquake"], correctIndex: 0, hint: "Years", explanation: "Erosion." },
        { q: "Earthquake?", options: ["Ground shakes", "Rain"], correctIndex: 0, hint: "Rumble", explanation: "Ground shakes." },
        { q: "Volcano?", options: ["Lava erupts", "Wind"], correctIndex: 0, hint: "Fire", explanation: "Lava erupts." },
        { q: "Erosion?", options: ["Wearing away", "Building up"], correctIndex: 0, hint: "Wind/Water", explanation: "Wearing away." },
        { q: "Weathering?", options: ["Breaking rock", "Painting"], correctIndex: 0, hint: "Break", explanation: "Breaking rock." },
        { q: "Landslide?", options: ["Dirt falls", "Snow falls"], correctIndex: 0, hint: "Slide", explanation: "Dirt falls." },
        { q: "Flood?", options: ["Too much water", "No water"], correctIndex: 0, hint: "Overflow", explanation: "Too much water." },
        { q: "Drought?", options: ["No water", "Flood"], correctIndex: 0, hint: "Dry", explanation: "No water." },
        { q: "Fossil?", options: ["Old bone in rock", "New bone"], correctIndex: 0, hint: "Dino", explanation: "Old bone in rock." }
    ],
    "304": [
        { q: "Solid water?", options: ["Ice", "Steam"], correctIndex: 0, hint: "Cold", explanation: "Ice." },
        { q: "Liquid water?", options: ["Ocean", "Ice"], correctIndex: 0, hint: "Wet", explanation: "Ocean." },
        { q: "Gas water?", options: ["Steam/Vapor", "Ice"], correctIndex: 0, hint: "Invisible", explanation: "Steam/Vapor." },
        { q: "Salt water?", options: ["Ocean", "Lake"], correctIndex: 0, hint: "Salty", explanation: "Ocean." },
        { q: "Fresh water?", options: ["River/Lake", "Ocean"], correctIndex: 0, hint: "Drink", explanation: "River/Lake." },
        { q: "Most water is?", options: ["Salt", "Fresh"], correctIndex: 0, hint: "Ocean.", explanation: "Salt." },
        { q: "Glacier?", options: ["Big ice", "Puddle"], correctIndex: 0, hint: "Frozen", explanation: "Big ice." },
        { q: "Map blue?", options: ["Water", "Land"], correctIndex: 0, hint: "Color", explanation: "Water." },
        { q: "Evaporation?", options: ["Liquid to Gas", "Gas to Liquid"], correctIndex: 0, hint: "Dry up", explanation: "Liquid to Gas." },
        { q: "Condensation?", options: ["Gas to Liquid", "Liquid to Gas"], correctIndex: 0, hint: "Cloud", explanation: "Gas to Liquid." }
    ],
    "401": [
        { q: "Push?", options: ["Move away", "Move closer"], correctIndex: 0, hint: "Away", explanation: "Move away." },
        { q: "Pull?", options: ["Move closer", "Move away"], correctIndex: 0, hint: "Toward", explanation: "Move closer." },
        { q: "Force?", options: ["Push or Pull", "Object"], correctIndex: 0, hint: "Action", explanation: "Push or Pull." },
        { q: "Gravity?", options: ["Pulls down", "Pushes up"], correctIndex: 0, hint: "Fall", explanation: "Pulls down." },
        { q: "Friction?", options: ["Slows down", "Speeds up"], correctIndex: 0, hint: "Rub", explanation: "Slows down." },
        { q: "Balanced?", options: ["No movement", "Moves"], correctIndex: 0, hint: "Equal", explanation: "No movement." },
        { q: "Unbalanced?", options: ["Moves", "Stays"], correctIndex: 0, hint: "Unequal", explanation: "Moves." },
        { q: "Motion?", options: ["Moving", "Stopping"], correctIndex: 0, hint: "Go", explanation: "Moving." },
        { q: "Speed?", options: ["How fast", "How heavy"], correctIndex: 0, hint: "Fast/Slow", explanation: "How fast." },
        { q: "Magnet?", options: ["Pulls metal", "Pulls wood"], correctIndex: 0, hint: "Iron", explanation: "Pulls metal." }
    ],
    "402": [
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
    "403": [
        { q: "Life cycle?", options: ["Growth stages", "Circle"], correctIndex: 0, hint: "Born to Die", explanation: "Growth stages." },
        { q: "Metamorphosis?", options: ["Big change", "Small change"], correctIndex: 0, hint: "Butterfly", explanation: "Big change." },
        { q: "Caterpillar becomes?", options: ["Butterfly", "Beetle"], correctIndex: 0, hint: "Fly", explanation: "Butterfly." },
        { q: "Tadpole becomes?", options: ["Frog", "Fish"], correctIndex: 0, hint: "Jump", explanation: "Frog." },
        { q: "Seed becomes?", options: ["Plant", "Rock"], correctIndex: 0, hint: "Grow", explanation: "Plant." },
        { q: "Egg?", options: ["First stage", "Last stage"], correctIndex: 0, hint: "Start", explanation: "First stage." },
        { q: "Larva?", options: ["Worm-like", "Adult"], correctIndex: 0, hint: "Caterpillar", explanation: "Worm-like." },
        { q: "Pupa?", options: ["Cocoon", "Egg"], correctIndex: 0, hint: "Rest", explanation: "Cocoon." },
        { q: "Adult?", options: ["Grown up", "Baby"], correctIndex: 0, hint: "Big", explanation: "Grown up." },
        { q: "Germination?", options: ["Seed sprouting", "Leaf falling"], correctIndex: 0, hint: "Start grow", explanation: "Seed sprouting." }
    ],
    "404": [
        { q: "Inherited trait?", options: ["Born with", "Learned"], correctIndex: 0, hint: "Parents", explanation: "Born with." },
        { q: "Learned behavior?", options: ["Taught", "Born with"], correctIndex: 0, hint: "School", explanation: "Taught." },
        { q: "Eye color?", options: ["Inherited", "Learned"], correctIndex: 0, hint: "Genes", explanation: "Inherited." },
        { q: "Reading?", options: ["Learned", "Inherited"], correctIndex: 0, hint: "School", explanation: "Learned." },
        { q: "Hair color?", options: ["Inherited", "Learned"], correctIndex: 0, hint: "Genes", explanation: "Inherited." },
        { q: "Riding bike?", options: ["Learned", "Inherited"], correctIndex: 0, hint: "Practice", explanation: "Learned." },
        { q: "Speaking?", options: ["Learned", "Inherited"], correctIndex: 0, hint: "Talk", explanation: "Learned." },
        { q: "Height?", options: ["Inherited/Environment", "Learned"], correctIndex: 0, hint: "Tall", explanation: "Inherited/Environment." },
        { q: "Scar?", options: ["Environmental", "Inherited"], correctIndex: 0, hint: "Hurt", explanation: "Environmental." },
        { q: "Instinct?", options: ["Inherited behavior", "Learned"], correctIndex: 0, hint: "Know how", explanation: "Inherited behavior." }
    ],
    "501": [
        { q: "Energy?", options: ["Ability to do work", "Sleep"], correctIndex: 0, hint: "Power", explanation: "Ability to do work." },
        { q: "Light?", options: ["Energy we see", "Sound"], correctIndex: 0, hint: "Bright", explanation: "Energy we see." },
        { q: "Heat?", options: ["Thermal energy", "Cold"], correctIndex: 0, hint: "Hot", explanation: "Thermal energy." },
        { q: "Sound?", options: ["Vibration energy", "Light"], correctIndex: 0, hint: "Hear", explanation: "Vibration energy." },
        { q: "Electrical?", options: ["Power from flow", "Still"], correctIndex: 0, hint: "Plug", explanation: "Power from flow." },
        { q: "Mechanical?", options: ["Motion energy", "Heat"], correctIndex: 0, hint: "Move", explanation: "Motion energy." },
        { q: "Potential?", options: ["Stored energy", "Moving"], correctIndex: 0, hint: "Wait", explanation: "Stored energy." },
        { q: "Kinetic?", options: ["Moving energy", "Stored"], correctIndex: 0, hint: "Go", explanation: "Moving energy." },
        { q: "Chemical?", options: ["Energy in food", "Light"], correctIndex: 0, hint: "Eat", explanation: "Energy in food." },
        { q: "Transfer?", options: ["Move energy", "Stop energy"], correctIndex: 0, hint: "Pass", explanation: "Move energy." }
    ],
    "502": [
        { q: "Transfer?", options: ["Move from one to another", "Stay"], correctIndex: 0, hint: "Pass", explanation: "Move from one to another." },
        { q: "Collision?", options: ["Hit together", "Miss"], correctIndex: 0, hint: "Crash", explanation: "Hit together." },
        { q: "Conversion?", options: ["Change form", "Stay same"], correctIndex: 0, hint: "Switch", explanation: "Change form." },
        { q: "Solar panel?", options: ["Light to Electric", "Heat to Sound"], correctIndex: 0, hint: "Sun", explanation: "Light to Electric." },
        { q: "Toaster?", options: ["Electric to Heat", "Sound to Light"], correctIndex: 0, hint: "Hot", explanation: "Electric to Heat." },
        { q: "Battery?", options: ["Chemical to Electric", "Light to Sound"], correctIndex: 0, hint: "Power", explanation: "Chemical to Electric." },
        { q: "Lamp?", options: ["Electric to Light", "Heat to Sound"], correctIndex: 0, hint: "Bright", explanation: "Electric to Light." },
        { q: "Car engine?", options: ["Chemical to Mechanical", "Light to Heat"], correctIndex: 0, hint: "Gas", explanation: "Chemical to Mechanical." },
        { q: "Conservation?", options: ["Energy not lost", "Energy disappears"], correctIndex: 0, hint: "Save", explanation: "Energy not lost." },
        { q: "Sound transfer?", options: ["Waves", "Lines"], correctIndex: 0, hint: "Vibrate", explanation: "Waves." }
    ],
    "503": [
        { q: "Rock?", options: ["Solid earth", "Liquid"], correctIndex: 0, hint: "Stone", explanation: "Solid earth." },
        { q: "Igneous?", options: ["From lava", "From sand"], correctIndex: 0, hint: "Fire", explanation: "From lava." },
        { q: "Sedimentary?", options: ["Layers of sand", "Lava"], correctIndex: 0, hint: "Layer", explanation: "Layers of sand." },
        { q: "Metamorphic?", options: ["Changed by heat/pressure", "Melted"], correctIndex: 0, hint: "Change", explanation: "Changed by heat/pressure." },
        { q: "Fossil?", options: ["Ancient remains", "New bone"], correctIndex: 0, hint: "Dino", explanation: "Ancient remains." },
        { q: "Paleontologist?", options: ["Studies fossils", "Studies stars"], correctIndex: 0, hint: "Dino doctor", explanation: "Studies fossils." },
        { q: "Mineral?", options: ["Building block of rock", "Plant"], correctIndex: 0, hint: "Gem", explanation: "Building block of rock." },
        { q: "Magma?", options: ["Underground lava", "Rock"], correctIndex: 0, hint: "Hot", explanation: "Underground lava." },
        { q: "Lava?", options: ["Above ground magma", "Ice"], correctIndex: 0, hint: "Volcano", explanation: "Above ground magma." },
        { q: "Cycle?", options: ["Rock cycle", "Line"], correctIndex: 0, hint: "Circle", explanation: "Rock cycle." }
    ],
    "504": [
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
    "601": [
        { q: "Matter?", options: ["Takes up space", "Nothing"], correctIndex: 0, hint: "Stuff", explanation: "Takes up space." },
        { q: "Particle?", options: ["Tiny piece", "Big rock"], correctIndex: 0, hint: "Small", explanation: "Tiny piece." },
        { q: "Atom?", options: ["Basic unit", "Molecule"], correctIndex: 0, hint: "Smallest", explanation: "Basic unit." },
        { q: "Molecule?", options: ["Group of atoms", "Single atom"], correctIndex: 0, hint: "Team", explanation: "Group of atoms." },
        { q: "Solid particles?", options: ["Packed tight", "Far apart"], correctIndex: 0, hint: "Close", explanation: "Packed tight." },
        { q: "Liquid particles?", options: ["Flow past", "Fixed"], correctIndex: 0, hint: "Move", explanation: "Flow past." },
        { q: "Gas particles?", options: ["Far apart", "Touching"], correctIndex: 0, hint: "Fly", explanation: "Far apart." },
        { q: "Conservation?", options: ["Matter not lost", "Lost"], correctIndex: 0, hint: "Save", explanation: "Matter not lost." },
        { q: "Weight?", options: ["Measure of mass", "Height"], correctIndex: 0, hint: "Heavy", explanation: "Measure of mass." },
        { q: "Mixture?", options: ["Combined", "Separate"], correctIndex: 0, hint: "Mix", explanation: "Combined." }
    ],
    "602": [
        { q: "Chemical change?", options: ["New substance", "Same substance"], correctIndex: 0, hint: "New", explanation: "New substance." },
        { q: "Physical change?", options: ["Same substance", "New substance"], correctIndex: 0, hint: "Same", explanation: "Same substance." },
        { q: "Reaction?", options: ["Change happens", "Nothing"], correctIndex: 0, hint: "Act", explanation: "Change happens." },
        { q: "Rust?", options: ["Chemical change", "Physical"], correctIndex: 0, hint: "Iron", explanation: "Chemical change." },
        { q: "Melting?", options: ["Physical change", "Chemical"], correctIndex: 0, hint: "Ice", explanation: "Physical change." },
        { q: "Burning?", options: ["Chemical change", "Physical"], correctIndex: 0, hint: "Fire", explanation: "Chemical change." },
        { q: "Cutting?", options: ["Physical change", "Chemical"], correctIndex: 0, hint: "Scissor", explanation: "Physical change." },
        { q: "Baking?", options: ["Chemical change", "Physical"], correctIndex: 0, hint: "Cake", explanation: "Chemical change." },
        { q: "Fizzing?", options: ["Sign of chemical", "Physical"], correctIndex: 0, hint: "Gas", explanation: "Sign of chemical." },
        { q: "Precipitate?", options: ["Solid formed", "Gas"], correctIndex: 0, hint: "Chunk", explanation: "Solid formed." }
    ],
    "603": [
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
    "604": [
        { q: "Star?", options: ["Gas ball", "Rock"], correctIndex: 0, hint: "Sun", explanation: "Gas ball." },
        { q: "Constellation?", options: ["Star pattern", "Planet"], correctIndex: 0, hint: "Shape", explanation: "Star pattern." },
        { q: "Brightness?", options: ["How bright", "Color"], correctIndex: 0, hint: "Light", explanation: "How bright." },
        { q: "Distance?", options: ["How far", "Size"], correctIndex: 0, hint: "Far", explanation: "How far." },
        { q: "Gravity?", options: ["Pulling force", "Push"], correctIndex: 0, hint: "Fall", explanation: "Pulling force." },
        { q: "Universe?", options: ["Everything", "Earth"], correctIndex: 0, hint: "All", explanation: "Everything." },
        { q: "Galaxy?", options: ["Group of stars", "One star"], correctIndex: 0, hint: "Milky Way", explanation: "Group of stars." },
        { q: "Orbit?", options: ["Path around", "Straight line"], correctIndex: 0, hint: "Circle", explanation: "Path around." },
        { q: "Rotation?", options: ["Spin", "Walk"], correctIndex: 0, hint: "Turn", explanation: "Spin." },
        { q: "Axis?", options: ["Imaginary line", "Real pole"], correctIndex: 0, hint: "Tilt", explanation: "Imaginary line." }
    ]
};

export const SCIENCE_PRACTICE: Record<string, QuestionTemplate[]> = {};

const allIds = [
    ...Array.from({length: 4}, (_,i)=>101+i),
    ...Array.from({length: 4}, (_,i)=>201+i),
    ...Array.from({length: 4}, (_,i)=>301+i),
    ...Array.from({length: 4}, (_,i)=>401+i),
    ...Array.from({length: 4}, (_,i)=>501+i),
    ...Array.from({length: 4}, (_,i)=>601+i)
];

const generatePracticeSet = (id: string, startIdx: number = 0): QuestionTemplate[] => {
    return Array.from({length: 10}, (_, i) => ({
        q: `Science Practice Q${startIdx + i + 1} (Lesson ${id}): What is the observation?`,
        options: ["Correct Fact", "Hypothesis", "Conclusion", "Random Guess"],
        correctIndex: 0,
        explanation: "Science relies on data."
    }));
};

allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_PRACTICE[key] || [];

    if (realQuestions.length >= 10) {
        SCIENCE_PRACTICE[key] = realQuestions.slice(0, 10);
    } else {
        const needed = 10 - realQuestions.length;
        const generated = generatePracticeSet(key, realQuestions.length).slice(0, needed);
        SCIENCE_PRACTICE[key] = [...realQuestions, ...generated];
    }
});

SCIENCE_PRACTICE['default'] = generatePracticeSet('General');