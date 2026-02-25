import { QuestionTemplate } from '../questionUtils';

const REAL_ASSESS: Record<string, QuestionTemplate[]> = {
    "101": [
        { q: "Good citizen?", options: ["Helps others", "Mean"], correctIndex: 0, hint: "Nice.", explanation: "Helps others." },
        { q: "Rule?", options: ["Follow it", "Break it"], correctIndex: 0, hint: "Obey.", explanation: "Follow it." },
        { q: "Vote?", options: ["Choose", "Sleep"], correctIndex: 0, hint: "Pick.", explanation: "Choose." },
        { q: "Community?", options: ["Group", "Alone"], correctIndex: 0, hint: "People.", explanation: "Group." },
        { q: "Leader?", options: ["Guide", "Follower"], correctIndex: 0, hint: "Boss.", explanation: "Guide." },
        { q: "Sharing?", options: ["Good", "Bad"], correctIndex: 0, hint: "Give.", explanation: "Good." },
        { q: "Honesty?", options: ["Truth", "Lie"], correctIndex: 0, hint: "Real.", explanation: "Truth." },
        { q: "Helpful?", options: ["Clean up", "Make mess"], correctIndex: 0, hint: "Nice.", explanation: "Clean up." },
        { q: "Respect?", options: ["Kindness", "Rude"], correctIndex: 0, hint: "Polite.", explanation: "Kindness." },
        { q: "Fair?", options: ["Equal", "Cheating"], correctIndex: 0, hint: "Same.", explanation: "Equal." }
    ],
    "102": [
        { q: "Doctor helps?", options: ["Sick people", "Cars", "Pets", "Toys"], correctIndex: 0, hint: "Health.", explanation: "Sick people." },
        { q: "Teacher works at?", options: ["School", "Hospital", "Fire station", "Police station"], correctIndex: 0, hint: "Classroom.", explanation: "School." },
        { q: "Police officer keeps us?", options: ["Safe", "Scared", "Sad", "Hungry"], correctIndex: 0, hint: "Protect.", explanation: "Safe." },
        { q: "Firefighter?", options: ["Puts out fires", "Cooks"], correctIndex: 0, hint: "Hose.", explanation: "Puts out fires." },
        { q: "Mail carrier?", options: ["Delivers mail", "Pizza"], correctIndex: 0, hint: "Letters.", explanation: "Delivers mail." },
        { q: "Baker makes?", options: ["Bread", "Shoes", "Cars", "Books"], correctIndex: 0, hint: "Food.", explanation: "Bread." },
        { q: "Vet helps?", options: ["Animals", "People", "Plants", "Robots"], correctIndex: 0, hint: "Pets.", explanation: "Animals." },
        { q: "Dentist checks?", options: ["Teeth", "Eyes", "Ears", "Toes"], correctIndex: 0, hint: "Smile.", explanation: "Teeth." },
        { q: "Librarian works with?", options: ["Books", "Food", "Tools", "Animals"], correctIndex: 0, hint: "Read.", explanation: "Books." },
        { q: "Farmer grows?", options: ["Food", "Toys", "Cars", "Houses"], correctIndex: 0, hint: "Crops.", explanation: "Food." }
    ],
    "103": [
        { q: "Globe?", options: ["Round map", "Flat"], correctIndex: 0, hint: "Ball.", explanation: "Round map." },
        { q: "Water color?", options: ["Blue", "Green"], correctIndex: 0, hint: "Ocean.", explanation: "Blue." },
        { q: "Land color?", options: ["Green/Brown", "Blue"], correctIndex: 0, hint: "Grass.", explanation: "Green/Brown." },
        { q: "North?", options: ["Up", "Down"], correctIndex: 0, hint: "Top.", explanation: "Up." },
        { q: "South?", options: ["Down", "Up"], correctIndex: 0, hint: "Bottom.", explanation: "Down." },
        { q: "Map is?", options: ["Flat", "Round"], correctIndex: 0, hint: "Paper.", explanation: "Flat." },
        { q: "Ocean is?", options: ["Big water", "Puddle"], correctIndex: 0, hint: "Salt.", explanation: "Big water." },
        { q: "Continent?", options: ["Big land", "City"], correctIndex: 0, hint: "Huge.", explanation: "Big land." },
        { q: "Compass shows?", options: ["Directions", "Time"], correctIndex: 0, hint: "Way.", explanation: "Directions." },
        { q: "Where do we live?", options: ["Earth", "Mars"], correctIndex: 0, hint: "Home.", explanation: "Earth." }
    ],
    "104": [
        { q: "Address?", options: ["Home location", "Name"], correctIndex: 0, hint: "Number.", explanation: "Home location." },
        { q: "School?", options: ["Learn", "Shop"], correctIndex: 0, hint: "Study.", explanation: "Learn." },
        { q: "Park?", options: ["Play", "Work"], correctIndex: 0, hint: "Fun.", explanation: "Play." },
        { q: "Library?", options: ["Books", "Food"], correctIndex: 0, hint: "Read.", explanation: "Books." },
        { q: "Store?", options: ["Buy things", "Sleep"], correctIndex: 0, hint: "Shop.", explanation: "Buy things." },
        { q: "City?", options: ["Big place", "House"], correctIndex: 0, hint: "Town.", explanation: "Big place." },
        { q: "Neighborhood?", options: ["Area around home", "Moon"], correctIndex: 0, hint: "Streets.", explanation: "Area around home." },
        { q: "State?", options: ["Bigger than city", "Small"], correctIndex: 0, hint: "Region.", explanation: "Bigger than city." },
        { q: "Country?", options: ["USA", "City"], correctIndex: 0, hint: "Nation.", explanation: "USA." },
        { q: "Map of room?", options: ["Floor plan", "Globe"], correctIndex: 0, hint: "Inside.", explanation: "Floor plan." }
    ],
    "201": [
        { q: "Past?", options: ["Before", "Now"], correctIndex: 0, hint: "Ago.", explanation: "Before." },
        { q: "Present?", options: ["Now", "Later"], correctIndex: 0, hint: "Today.", explanation: "Now." },
        { q: "Future?", options: ["Later", "Before"], correctIndex: 0, hint: "Tomorrow.", explanation: "Later." },
        { q: "Timeline?", options: ["Events in order", "Map"], correctIndex: 0, hint: "Line.", explanation: "Events in order." },
        { q: "Change?", options: ["Different", "Same"], correctIndex: 0, hint: "New.", explanation: "Different." },
        { q: "History?", options: ["Story of past", "Math"], correctIndex: 0, hint: "Old.", explanation: "Story of past." },
        { q: "Long ago people rode?", options: ["Horses", "Jets"], correctIndex: 0, hint: "Animal.", explanation: "Horses." },
        { q: "Now we ride?", options: ["Cars", "Horses"], correctIndex: 0, hint: "Fast.", explanation: "Cars." },
        { q: "Then vs Now?", options: ["Compare time", "Same time"], correctIndex: 0, hint: "Change.", explanation: "Compare time." },
        { q: "Growing up?", options: ["Change", "Stay baby"], correctIndex: 0, hint: "Age.", explanation: "Change." }
    ],
    "202": [
        { q: "Flag stars?", options: ["50", "13"], correctIndex: 0, hint: "States.", explanation: "50." },
        { q: "Flag stripes?", options: ["13", "50"], correctIndex: 0, hint: "Colonies.", explanation: "13." },
        { q: "Eagle?", options: ["National Bird", "Pet"], correctIndex: 0, hint: "Fly.", explanation: "National Bird." },
        { q: "Statue of Liberty?", options: ["Freedom", "King"], correctIndex: 0, hint: "Torch.", explanation: "Freedom." },
        { q: "White House?", options: ["President's home", "School"], correctIndex: 0, hint: "DC.", explanation: "President's home." },
        { q: "Uncle Sam?", options: ["Symbol of USA", "Real person"], correctIndex: 0, hint: "Poster.", explanation: "Symbol of USA." },
        { q: "Liberty Bell?", options: ["Freedom bell", "Dinner bell"], correctIndex: 0, hint: "Ring.", explanation: "Freedom bell." },
        { q: "Mount Rushmore?", options: ["Faces in rock", "Building"], correctIndex: 0, hint: "Presidents.", explanation: "Faces in rock." },
        { q: "Pledge?", options: ["Promise to flag", "Song"], correctIndex: 0, hint: "Hand on heart.", explanation: "Promise to flag." },
        { q: "Anthem?", options: ["National song", "Story"], correctIndex: 0, hint: "Sing.", explanation: "National song." }
    ],
    "203": [
        { q: "Need?", options: ["Must have", "Like"], correctIndex: 0, hint: "Survive.", explanation: "Must have." },
        { q: "Want?", options: ["Like to have", "Must have"], correctIndex: 0, hint: "Toy.", explanation: "Like to have." },
        { q: "Save?", options: ["Keep for later", "Spend"], correctIndex: 0, hint: "Bank.", explanation: "Keep for later." },
        { q: "Job?", options: ["Earn money", "Play"], correctIndex: 0, hint: "Work.", explanation: "Earn money." },
        { q: "Money?", options: ["Buy things", "Eat"], correctIndex: 0, hint: "Pay.", explanation: "Buy things." },
        { q: "Food?", options: ["Need", "Want"], correctIndex: 0, hint: "Eat.", explanation: "Need." },
        { q: "Water?", options: ["Need", "Want"], correctIndex: 0, hint: "Drink.", explanation: "Need." },
        { q: "Video Game?", options: ["Want", "Need"], correctIndex: 0, hint: "Fun.", explanation: "Want." },
        { q: "Shelter?", options: ["Need", "Want"], correctIndex: 0, hint: "Home.", explanation: "Need." },
        { q: "Spend?", options: ["Use money", "Keep money"], correctIndex: 0, hint: "Buy.", explanation: "Use money." }
    ],
    "204": [
        { q: "Goods?", options: ["Items", "Actions"], correctIndex: 0, hint: "Touch.", explanation: "Items." },
        { q: "Services?", options: ["Actions", "Items"], correctIndex: 0, hint: "Help.", explanation: "Actions." },
        { q: "Producer?", options: ["Makes", "Buys"], correctIndex: 0, hint: "Create.", explanation: "Makes." },
        { q: "Consumer?", options: ["Buys", "Makes"], correctIndex: 0, hint: "Shop.", explanation: "Buys." },
        { q: "Trade?", options: ["Exchange", "Keep"], correctIndex: 0, hint: "Swap.", explanation: "Exchange." },
        { q: "Barter?", options: ["Trade without money", "Buy"], correctIndex: 0, hint: "Swap items.", explanation: "Trade without money." },
        { q: "Factory?", options: ["Where goods made", "Park"], correctIndex: 0, hint: "Build.", explanation: "Where goods made." },
        { q: "Market?", options: ["Place to sell", "Home"], correctIndex: 0, hint: "Store.", explanation: "Place to sell." },
        { q: "Supply?", options: ["Amount available", "Want"], correctIndex: 0, hint: "Stock.", explanation: "Amount available." },
        { q: "Demand?", options: ["Amount wanted", "Have"], correctIndex: 0, hint: "Desire.", explanation: "Amount wanted." }
    ],
    "301": [
        { q: "Rule?", options: ["Instruction", "Game"], correctIndex: 0, hint: "Safety.", explanation: "Instruction." },
        { q: "Law?", options: ["Community rule", "Suggestion"], correctIndex: 0, hint: "Must.", explanation: "Community rule." },
        { q: "Consequence?", options: ["Result of action", "Prize"], correctIndex: 0, hint: "After.", explanation: "Result of action." },
        { q: "Fairness?", options: ["Just", "Mean"], correctIndex: 0, hint: "Equal.", explanation: "Just." },
        { q: "Responsibility?", options: ["Duty", "Fun"], correctIndex: 0, hint: "Job.", explanation: "Duty." },
        { q: "Safety?", options: ["Not getting hurt", "Running"], correctIndex: 0, hint: "Careful.", explanation: "Not getting hurt." },
        { q: "Respect?", options: ["Being nice", "Ignoring"], correctIndex: 0, hint: "Kind.", explanation: "Being nice." },
        { q: "Vote?", options: ["Choose", "Sleep"], correctIndex: 0, hint: "Pick.", explanation: "Choose." },
        { q: "Citizen?", options: ["Member of group", "Alien"], correctIndex: 0, hint: "Person.", explanation: "Member of group." },
        { q: "Government?", options: ["Makes laws", "Plays games"], correctIndex: 0, hint: "Leaders.", explanation: "Makes laws." }
    ],
    "302": [
        { q: "Mayor leads?", options: ["City", "State", "Country", "World"], correctIndex: 0, hint: "Town.", explanation: "City." },
        { q: "Governor leads?", options: ["State", "City", "School", "Park"], correctIndex: 0, hint: "Big area.", explanation: "State." },
        { q: "President leads?", options: ["Country", "City", "State", "Class"], correctIndex: 0, hint: "USA.", explanation: "Country." },
        { q: "Tax money?", options: ["Services", "Candy", "Games", "Parties"], correctIndex: 0, hint: "Public.", explanation: "Services." },
        { q: "Police job?", options: ["Safety", "Cooking", "Farming", "Building"], correctIndex: 0, hint: "Protect.", explanation: "Safety." },
        { q: "Fire dept?", options: ["Puts out fire", "Teaches"], correctIndex: 0, hint: "Hose.", explanation: "Puts out fire." },
        { q: "School board?", options: ["Runs schools", "Runs parks"], correctIndex: 0, hint: "Learn.", explanation: "Runs schools." },
        { q: "Court?", options: ["Judges laws", "Makes food"], correctIndex: 0, hint: "Legal.", explanation: "Judges laws." },
        { q: "Council?", options: ["City leaders", "King"], correctIndex: 0, hint: "Group.", explanation: "City leaders." },
        { q: "Public Library?", options: ["Free books", "Store"], correctIndex: 0, hint: "Read.", explanation: "Free books." }
    ],
    "303": [
        { q: "Mountain?", options: ["Very high", "Flat", "Low", "Wet"], correctIndex: 0, hint: "Peak.", explanation: "Very high." },
        { q: "Hill?", options: ["Rounded high", "Mountain", "Valley", "Hole"], correctIndex: 0, hint: "Bump.", explanation: "Rounded high." },
        { q: "Valley?", options: ["Low between hills", "High peak", "Ocean", "Sky"], correctIndex: 0, hint: "V shape.", explanation: "Low between hills." },
        { q: "Plain?", options: ["Flat land", "Bumpy", "Wet", "Forest"], correctIndex: 0, hint: "Grass.", explanation: "Flat land." },
        { q: "Island?", options: ["Surrounded by water", "Surrounded by land", "Desert", "City"], correctIndex: 0, hint: "Water.", explanation: "Surrounded by water." },
        { q: "Peninsula?", options: ["Water on 3 sides", "Island", "Lake", "Pond"], correctIndex: 0, hint: "Finger.", explanation: "Water on 3 sides." },
        { q: "Lake?", options: ["Water surrounded by land", "Ocean", "River", "Puddle"], correctIndex: 0, hint: "Pond.", explanation: "Water surrounded by land." },
        { q: "River?", options: ["Flowing water", "Still water", "Ocean", "Pool"], correctIndex: 0, hint: "Stream.", explanation: "Flowing water." },
        { q: "Ocean?", options: ["Huge salt water", "Small fresh water"], correctIndex: 0, hint: "Sea.", explanation: "Huge salt water." },
        { q: "Desert?", options: ["Dry sandy place", "Wet forest"], correctIndex: 0, hint: "Hot.", explanation: "Dry sandy place." }
    ],
    "304": [
        { q: "Largest Ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], correctIndex: 0, hint: "Big.", explanation: "Pacific." },
        { q: "Largest Continent?", options: ["Asia", "Europe", "Africa", "Australia"], correctIndex: 0, hint: "East.", explanation: "Asia." },
        { q: "Coldest Continent?", options: ["Antarctica", "Africa", "South America", "Europe"], correctIndex: 0, hint: "Ice.", explanation: "Antarctica." },
        { q: "Smallest Continent?", options: ["Australia", "Asia", "North America", "Europe"], correctIndex: 0, hint: "Island.", explanation: "Australia." },
        { q: "Compass shows?", options: ["Direction", "Time", "Temp", "Weight"], correctIndex: 0, hint: "N/S.", explanation: "Direction." },
        { q: "Equator?", options: ["Middle line", "Top line"], correctIndex: 0, hint: "Hot.", explanation: "Middle line." },
        { q: "North Pole?", options: ["Top of Earth", "Bottom"], correctIndex: 0, hint: "Up.", explanation: "Top of Earth." },
        { q: "South Pole?", options: ["Bottom of Earth", "Top"], correctIndex: 0, hint: "Down.", explanation: "Bottom of Earth." },
        { q: "Hemisphere?", options: ["Half of Earth", "All of Earth"], correctIndex: 0, hint: "Part.", explanation: "Half of Earth." },
        { q: "Atlantic Ocean?", options: ["Between US and Europe", "Near Japan"], correctIndex: 0, hint: "East Coast.", explanation: "Between US and Europe." }
    ],
    "401": [
        { q: "Culture?", options: ["Way of life", "Math", "Science", "Gym"], correctIndex: 0, hint: "People", explanation: "Way of life" },
        { q: "Language?", options: ["Speech", "Food"], correctIndex: 0, hint: "Talk.", explanation: "Speech." },
        { q: "Food?", options: ["Dish", "Game"], correctIndex: 0, hint: "Eat.", explanation: "Dish." },
        { q: "Diversity?", options: ["Differences", "Same"], correctIndex: 0, hint: "Variety.", explanation: "Differences." },
        { q: "Custom?", options: ["Habit", "Accident"], correctIndex: 0, hint: "Tradition.", explanation: "Habit." },
        { q: "Clothing?", options: ["Dress", "Walk"], correctIndex: 0, hint: "Wear.", explanation: "Dress." },
        { q: "Beliefs?", options: ["Ideas/Faith", "Toys"], correctIndex: 0, hint: "Think.", explanation: "Ideas/Faith." },
        { q: "Music?", options: ["Songs", "Silence"], correctIndex: 0, hint: "Listen.", explanation: "Songs." },
        { q: "Arts?", options: ["Painting/Dance", "Sleeping"], correctIndex: 0, hint: "Create.", explanation: "Painting/Dance." },
        { q: "Celebration?", options: ["Party", "Work"], correctIndex: 0, hint: "Fun.", explanation: "Party." }
    ],
    "402": [
        { q: "Tradition?", options: ["Passed down", "New"], correctIndex: 0, hint: "Old.", explanation: "Passed down." },
        { q: "Holiday?", options: ["Celebration", "Work"], correctIndex: 0, hint: "Party.", explanation: "Celebration." },
        { q: "Ancestor?", options: ["Past family", "Friend"], correctIndex: 0, hint: "Grandparent.", explanation: "Past family." },
        { q: "Heritage?", options: ["Background", "Future"], correctIndex: 0, hint: "History.", explanation: "Background." },
        { q: "Folktale?", options: ["Old story", "News"], correctIndex: 0, hint: "Legend.", explanation: "Old story." },
        { q: "Thanksgiving?", options: ["Gratitude feast", "Fast"], correctIndex: 0, hint: "Turkey.", explanation: "Gratitude feast." },
        { q: "Independence Day?", options: ["July 4", "Dec 25"], correctIndex: 0, hint: "Freedom.", explanation: "July 4." },
        { q: "Parade?", options: ["Street march", "Sleep"], correctIndex: 0, hint: "Walk.", explanation: "Street march." },
        { q: "Festival?", options: ["Public party", "School"], correctIndex: 0, hint: "Fun.", explanation: "Public party." },
        { q: "Monument?", options: ["Statue/Building", "Toy"], correctIndex: 0, hint: "Remember.", explanation: "Statue/Building." }
    ],
    "403": [
        { q: "Adapt?", options: ["Change", "Stay"], correctIndex: 0, hint: "Fit.", explanation: "Change." },
        { q: "Environment?", options: ["Surroundings", "Self"], correctIndex: 0, hint: "Place.", explanation: "Surroundings." },
        { q: "Shelter?", options: ["Home", "Food"], correctIndex: 0, hint: "Safe.", explanation: "Home." },
        { q: "Clothing?", options: ["Wear", "Eat"], correctIndex: 0, hint: "Body.", explanation: "Wear." },
        { q: "Resource?", options: ["Useful", "Useless"], correctIndex: 0, hint: "Help.", explanation: "Useful." },
        { q: "Igloo?", options: ["Ice house", "Wood house"], correctIndex: 0, hint: "Cold.", explanation: "Ice house." },
        { q: "Adobe?", options: ["Mud brick", "Ice"], correctIndex: 0, hint: "Desert.", explanation: "Mud brick." },
        { q: "Irrigation?", options: ["Moving water", "Stopping water"], correctIndex: 0, hint: "Farm.", explanation: "Moving water." },
        { q: "Harvest?", options: ["Gather crops", "Plant"], correctIndex: 0, hint: "Fall.", explanation: "Gather crops." },
        { q: "Modify?", options: ["Change land", "Leave alone"], correctIndex: 0, hint: "Build.", explanation: "Change land." }
    ],
    "404": [
        { q: "Compass?", options: ["N/S/E/W", "A/B/C"], correctIndex: 0, hint: "Direction.", explanation: "N/S/E/W." },
        { q: "Scale?", options: ["Distance", "Weight"], correctIndex: 0, hint: "Miles.", explanation: "Distance." },
        { q: "Grid?", options: ["Location", "Picture"], correctIndex: 0, hint: "Box.", explanation: "Location." },
        { q: "Key?", options: ["Symbols", "Lock"], correctIndex: 0, hint: "Legend.", explanation: "Symbols." },
        { q: "Map?", options: ["Flat", "Round"], correctIndex: 0, hint: "Paper.", explanation: "Flat." },
        { q: "Title?", options: ["Name of map", "Author"], correctIndex: 0, hint: "Top.", explanation: "Name of map." },
        { q: "North?", options: ["Up", "Down"], correctIndex: 0, hint: "Top.", explanation: "Up." },
        { q: "East?", options: ["Right", "Left"], correctIndex: 0, hint: "Sun.", explanation: "Right." },
        { q: "Symbol for hospital?", options: ["H", "X"], correctIndex: 0, hint: "Help.", explanation: "H." },
        { q: "Blue line?", options: ["River", "Road"], correctIndex: 0, hint: "Water.", explanation: "River." }
    ],
    "501": [
        { q: "Governor?", options: ["State Leader", "Mayor"], correctIndex: 0, hint: "State.", explanation: "State Leader." },
        { q: "Legislature?", options: ["Makes Laws", "Police"], correctIndex: 0, hint: "Write.", explanation: "Makes Laws." },
        { q: "Judicial?", options: ["Courts", "Army"], correctIndex: 0, hint: "Judge.", explanation: "Courts." },
        { q: "Citizen rights?", options: ["Vote/Speech", "Steal"], correctIndex: 0, hint: "Free.", explanation: "Vote/Speech." },
        { q: "Responsibility?", options: ["Obey laws", "Break laws"], correctIndex: 0, hint: "Duty.", explanation: "Obey laws." },
        { q: "State Capitol?", options: ["Govt building", "Park"], correctIndex: 0, hint: "Dome.", explanation: "Govt building." },
        { q: "Capital City?", options: ["Main city", "Small town"], correctIndex: 0, hint: "Govt.", explanation: "Main city." },
        { q: "State Bird?", options: ["Symbol", "Pet"], correctIndex: 0, hint: "Fly.", explanation: "Symbol." },
        { q: "State Flag?", options: ["Symbol", "Towel"], correctIndex: 0, hint: "Wave.", explanation: "Symbol." },
        { q: "Constitution?", options: ["State laws", "Menu"], correctIndex: 0, hint: "Rules.", explanation: "State laws." }
    ],
    "502": [
        { q: "Settler?", options: ["Newcomer", "Native"], correctIndex: 0, hint: "Move.", explanation: "Newcomer." },
        { q: "Pioneer?", options: ["First settler", "Last"], correctIndex: 0, hint: "Early.", explanation: "First settler." },
        { q: "Hardship?", options: ["Difficulty", "Fun"], correctIndex: 0, hint: "Tough.", explanation: "Difficulty." },
        { q: "Wagon?", options: ["Transport", "House"], correctIndex: 0, hint: "Ride.", explanation: "Transport." },
        { q: "Frontier?", options: ["Wild edge", "City"], correctIndex: 0, hint: "Border.", explanation: "Wild edge." },
        { q: "Log cabin?", options: ["Wood house", "Brick house"], correctIndex: 0, hint: "Tree.", explanation: "Wood house." },
        { q: "Migration?", options: ["Moving", "Staying"], correctIndex: 0, hint: "Go.", explanation: "Moving." },
        { q: "Trail?", options: ["Path", "Wall"], correctIndex: 0, hint: "Walk.", explanation: "Path." },
        { q: "Gold Rush?", options: ["Seek wealth", "Run"], correctIndex: 0, hint: "Money.", explanation: "Seek wealth." },
        { q: "Homestead?", options: ["Farm home", "Hotel"], correctIndex: 0, hint: "Land.", explanation: "Farm home." }
    ],
    "503": [
        { q: "Renewable?", options: ["Sun/Wind", "Oil"], correctIndex: 0, hint: "Again.", explanation: "Sun/Wind." },
        { q: "Non-renewable?", options: ["Coal/Oil", "Sun"], correctIndex: 0, hint: "Gone.", explanation: "Coal/Oil." },
        { q: "Conservation?", options: ["Save", "Waste"], correctIndex: 0, hint: "Protect.", explanation: "Save." },
        { q: "Pollution?", options: ["Dirty", "Clean"], correctIndex: 0, hint: "Trash.", explanation: "Dirty." },
        { q: "Economy?", options: ["Money/Trade", "Art"], correctIndex: 0, hint: "Job.", explanation: "Money/Trade." },
        { q: "Natural Resource?", options: ["From Earth", "Man-made"], correctIndex: 0, hint: "Nature.", explanation: "From Earth." },
        { q: "Fuel?", options: ["Energy source", "Toy"], correctIndex: 0, hint: "Gas.", explanation: "Energy source." },
        { q: "Recycle?", options: ["Reuse", "Trash"], correctIndex: 0, hint: "Bin.", explanation: "Reuse." },
        { q: "Mineral?", options: ["Rock resource", "Plant"], correctIndex: 0, hint: "Mine.", explanation: "Rock resource." },
        { q: "Agriculture?", options: ["Farming", "Mining"], correctIndex: 0, hint: "Grow.", explanation: "Farming." }
    ],
    "504": [
        { q: "Export?", options: ["Sell out", "Buy in"], correctIndex: 0, hint: "Exit.", explanation: "Sell out." },
        { q: "Import?", options: ["Buy in", "Sell out"], correctIndex: 0, hint: "Enter.", explanation: "Buy in." },
        { q: "Industry?", options: ["Business", "Play"], correctIndex: 0, hint: "Make.", explanation: "Business." },
        { q: "Trade?", options: ["Swap", "Keep"], correctIndex: 0, hint: "Exchange.", explanation: "Swap." },
        { q: "Market?", options: ["Place to trade", "Home"], correctIndex: 0, hint: "Shop.", explanation: "Place to trade." },
        { q: "Global?", options: ["Worldwide", "Local"], correctIndex: 0, hint: "Earth.", explanation: "Worldwide." },
        { q: "Supply?", options: ["Amount made", "Amount wanted"], correctIndex: 0, hint: "Have.", explanation: "Amount made." },
        { q: "Demand?", options: ["Amount wanted", "Amount made"], correctIndex: 0, hint: "Want.", explanation: "Amount wanted." },
        { q: "Factory?", options: ["Makes goods", "Park"], correctIndex: 0, hint: "Build.", explanation: "Makes goods." },
        { q: "Transport?", options: ["Move goods", "Sleep"], correctIndex: 0, hint: "Ship.", explanation: "Move goods." }
    ],
    "601": [
        { q: "Tribe?", options: ["Group", "One"], correctIndex: 0, hint: "Nation.", explanation: "Group." },
        { q: "Region?", options: ["Area", "Time"], correctIndex: 0, hint: "Place.", explanation: "Area." },
        { q: "Native?", options: ["Original", "New"], correctIndex: 0, hint: "First.", explanation: "Original." },
        { q: "Culture?", options: ["Lifestyle", "Game"], correctIndex: 0, hint: "Way.", explanation: "Lifestyle." },
        { q: "Tradition?", options: ["Custom", "New"], correctIndex: 0, hint: "Old.", explanation: "Custom." },
        { q: "Nomad?", options: ["Moves around", "Stays put"], correctIndex: 0, hint: "Travel.", explanation: "Moves around." },
        { q: "Pueblo?", options: ["Adobe home", "Tent"], correctIndex: 0, hint: "Mud.", explanation: "Adobe home." },
        { q: "Totem?", options: ["Carved pole", "Boat"], correctIndex: 0, hint: "Art.", explanation: "Carved pole." },
        { q: "Buffalo?", options: ["Food source", "Pet"], correctIndex: 0, hint: "Plains.", explanation: "Food source." },
        { q: "Chief?", options: ["Leader", "Follower"], correctIndex: 0, hint: "Boss.", explanation: "Leader." }
    ],
    "602": [
        { q: "Explorer?", options: ["Traveler", "Farmer"], correctIndex: 0, hint: "Search.", explanation: "Traveler." },
        { q: "Colony?", options: ["Settlement", "Ship"], correctIndex: 0, hint: "Town.", explanation: "Settlement." },
        { q: "Columbus?", options: ["1492", "2000"], correctIndex: 0, hint: "Sail.", explanation: "1492." },
        { q: "New World?", options: ["Americas", "Europe"], correctIndex: 0, hint: "West.", explanation: "Americas." },
        { q: "Old World?", options: ["Europe", "Americas"], correctIndex: 0, hint: "East.", explanation: "Europe." },
        { q: "Jamestown?", options: ["First town", "Last town"], correctIndex: 0, hint: "1607.", explanation: "First town." },
        { q: "Mayflower?", options: ["Ship", "Flower"], correctIndex: 0, hint: "Pilgrims.", explanation: "Ship." },
        { q: "Pilgrim?", options: ["Settler", "Native"], correctIndex: 0, hint: "Plymouth.", explanation: "Settler." },
        { q: "Route?", options: ["Path", "Wall"], correctIndex: 0, hint: "Way.", explanation: "Path." },
        { q: "Trade?", options: ["Exchange", "Steal"], correctIndex: 0, hint: "Swap.", explanation: "Exchange." }
    ],
    "603": [
        { q: "Constitution?", options: ["Supreme Law", "Book"], correctIndex: 0, hint: "Rules.", explanation: "Supreme Law." },
        { q: "Bill of Rights?", options: ["Amendments", "Map"], correctIndex: 0, hint: "Rights.", explanation: "Amendments." },
        { q: "Freedom Speech?", options: ["1st", "2nd"], correctIndex: 0, hint: "Talk.", explanation: "1st." },
        { q: "Bear Arms?", options: ["2nd", "1st"], correctIndex: 0, hint: "Gun.", explanation: "2nd." },
        { q: "Amendment?", options: ["Change", "Same"], correctIndex: 0, hint: "Add.", explanation: "Change." },
        { q: "Preamble?", options: ["Intro", "End"], correctIndex: 0, hint: "We the People.", explanation: "Intro." },
        { q: "Democracy?", options: ["People rule", "King rules"], correctIndex: 0, hint: "Vote.", explanation: "People rule." },
        { q: "Liberty?", options: ["Freedom", "Jail"], correctIndex: 0, hint: "Free.", explanation: "Freedom." },
        { q: "Right?", options: ["Entitlement", "Wrong"], correctIndex: 0, hint: "Law.", explanation: "Entitlement." },
        { q: "Jury?", options: ["Court group", "Teacher"], correctIndex: 0, hint: "Trial.", explanation: "Court group." }
    ],
    "604": [
        { q: "Legislative?", options: ["Makes laws", "Signs"], correctIndex: 0, hint: "Congress.", explanation: "Makes laws." },
        { q: "Executive?", options: ["Enforces", "Makes"], correctIndex: 0, hint: "President.", explanation: "Enforces." },
        { q: "Judicial?", options: ["Interprets", "Makes"], correctIndex: 0, hint: "Court.", explanation: "Interprets." },
        { q: "President?", options: ["Leader", "Follower"], correctIndex: 0, hint: "Chief.", explanation: "Leader." },
        { q: "Check/Balance?", options: ["Equal power", "One boss"], correctIndex: 0, hint: "Fair.", explanation: "Equal power." },
        { q: "Congress?", options: ["House/Senate", "President"], correctIndex: 0, hint: "Lawmakers.", explanation: "House/Senate." },
        { q: "Supreme Court?", options: ["Highest court", "Low court"], correctIndex: 0, hint: "Top.", explanation: "Highest court." },
        { q: "Veto?", options: ["Reject", "Sign"], correctIndex: 0, hint: "No.", explanation: "Reject." },
        { q: "Election?", options: ["Vote", "War"], correctIndex: 0, hint: "Choose.", explanation: "Vote." },
        { q: "Term?", options: ["Time in office", "School"], correctIndex: 0, hint: "Years.", explanation: "Time in office." }
    ]
};

export const SS_ASSESS: Record<string, QuestionTemplate[]> = {};

const allIds = [
    ...Array.from({length: 4}, (_,i)=>101+i),
    ...Array.from({length: 4}, (_,i)=>201+i),
    ...Array.from({length: 4}, (_,i)=>301+i),
    ...Array.from({length: 4}, (_,i)=>401+i),
    ...Array.from({length: 4}, (_,i)=>501+i),
    ...Array.from({length: 4}, (_,i)=>601+i)
];

const generateQuizSet = (id: string, startIdx: number = 0): QuestionTemplate[] => {
    return Array.from({length: 10}, (_, i) => ({
        q: `Social Studies Quiz Q${startIdx + i + 1} (Lesson ${id}): Identify the location.`,
        options: ["Correct Place", "Wrong Place", "Ocean", "Space"],
        correctIndex: 0,
        explanation: "Geography defines where we are."
    }));
};

allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_ASSESS[key] || [];

    if (realQuestions.length >= 10) {
        SS_ASSESS[key] = realQuestions.slice(0, 10);
    } else {
        const needed = 10 - realQuestions.length;
        const generated = generateQuizSet(key, realQuestions.length).slice(0, needed);
        SS_ASSESS[key] = [...realQuestions, ...generated];
    }
});

SS_ASSESS['default'] = generateQuizSet('General');