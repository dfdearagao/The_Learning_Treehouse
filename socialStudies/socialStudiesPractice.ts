import { QuestionTemplate } from '../questionUtils';

const REAL_PRACTICE: Record<string, QuestionTemplate[]> = {
    "101": [
        { q: "Good citizen?", options: ["Helps", "Hurts"], correctIndex: 0, hint: "Nice", explanation: "Helps." },
        { q: "Rule?", options: ["Keep safe", "Be mean"], correctIndex: 0, hint: "Follow", explanation: "Keep safe." },
        { q: "Share?", options: ["Yes", "No"], correctIndex: 0, hint: "Together", explanation: "Yes." },
        { q: "Listen?", options: ["Yes", "No"], correctIndex: 0, hint: "Ears", explanation: "Yes." },
        { q: "Clean up?", options: ["Yes", "No"], correctIndex: 0, hint: "Tidy", explanation: "Yes." },
        { q: "Help neighbor?", options: ["Yes", "No"], correctIndex: 0, hint: "Kind", explanation: "Yes." },
        { q: "Break toys?", options: ["No", "Yes"], correctIndex: 0, hint: "Bad", explanation: "No." },
        { q: "Take turns?", options: ["Yes", "No"], correctIndex: 0, hint: "Fair", explanation: "Yes." },
        { q: "Say please?", options: ["Yes", "No"], correctIndex: 0, hint: "Polite", explanation: "Yes." },
        { q: "Push others?", options: ["No", "Yes"], correctIndex: 0, hint: "Hurt", explanation: "No." }
    ],
    "102": [
        { q: "Firefighter?", options: ["Puts out fire", "Cooks"], correctIndex: 0, hint: "Hose", explanation: "Fire." },
        { q: "Doctor?", options: ["Heals", "Drives"], correctIndex: 0, hint: "Sick", explanation: "Heals." },
        { q: "Teacher?", options: ["Teaches", "Builds"], correctIndex: 0, hint: "School", explanation: "Teaches." },
        { q: "Police?", options: ["Safety", "Farms"], correctIndex: 0, hint: "Badge", explanation: "Safety." },
        { q: "Mail Carrier?", options: ["Mail", "Pizza"], correctIndex: 0, hint: "Letters", explanation: "Mail." },
        { q: "Baker?", options: ["Bread", "Cars"], correctIndex: 0, hint: "Oven", explanation: "Bread." },
        { q: "Vet?", options: ["Animals", "Plants"], correctIndex: 0, hint: "Pet doctor", explanation: "Animals." },
        { q: "Dentist?", options: ["Teeth", "Toes"], correctIndex: 0, hint: "Smile", explanation: "Teeth." },
        { q: "Farmer?", options: ["Crops", "Computers"], correctIndex: 0, hint: "Tractor", explanation: "Crops." },
        { q: "Librarian?", options: ["Books", "Tools"], correctIndex: 0, hint: "Read", explanation: "Books." }
    ],
    "103": [
        { q: "Map shows?", options: ["Places", "Faces"], correctIndex: 0, hint: "Look", explanation: "Places." },
        { q: "Blue on map?", options: ["Water", "Land"], correctIndex: 0, hint: "Ocean", explanation: "Water." },
        { q: "Green on map?", options: ["Land", "Water"], correctIndex: 0, hint: "Grass", explanation: "Land." },
        { q: "Globe is?", options: ["Round", "Flat"], correctIndex: 0, hint: "Ball", explanation: "Round." },
        { q: "We live on?", options: ["Earth", "Mars"], correctIndex: 0, hint: "Planet", explanation: "Earth." },
        { q: "North is?", options: ["Up", "Down"], correctIndex: 0, hint: "Top", explanation: "Up." },
        { q: "South is?", options: ["Down", "Up"], correctIndex: 0, hint: "Bottom", explanation: "Down." },
        { q: "Ocean?", options: ["Big water", "Puddle"], correctIndex: 0, hint: "Salt", explanation: "Big water." },
        { q: "Mountain?", options: ["High land", "Flat land"], correctIndex: 0, hint: "Tall", explanation: "High land." },
        { q: "Compass?", options: ["Directions", "Time"], correctIndex: 0, hint: "N/S", explanation: "Directions." }
    ],
    "104": [
        { q: "Address?", options: ["Where you live", "Name"], correctIndex: 0, hint: "House", explanation: "Where you live." },
        { q: "School?", options: ["Learn", "Sleep"], correctIndex: 0, hint: "Class", explanation: "Learn." },
        { q: "City?", options: ["Big place", "One house"], correctIndex: 0, hint: "Town", explanation: "Big place." },
        { q: "Home?", options: ["Family", "Store"], correctIndex: 0, hint: "Sleep", explanation: "Family." },
        { q: "Neighborhood?", options: ["Area around home", "Moon"], correctIndex: 0, hint: "Streets", explanation: "Area around home." },
        { q: "Park?", options: ["Play", "Work"], correctIndex: 0, hint: "Fun", explanation: "Play." },
        { q: "Library?", options: ["Books", "Food"], correctIndex: 0, hint: "Read", explanation: "Books." },
        { q: "Store?", options: ["Buy", "Sell"], correctIndex: 0, hint: "Shop", explanation: "Buy." },
        { q: "Map of home?", options: ["Floor plan", "Globe"], correctIndex: 0, hint: "Rooms", explanation: "Floor plan." },
        { q: "Bedroom?", options: ["Sleep", "Cook"], correctIndex: 0, hint: "Bed", explanation: "Sleep." }
    ],
    "201": [
        { q: "Past?", options: ["Ago", "Now"], correctIndex: 0, hint: "Before", explanation: "Ago." },
        { q: "Present?", options: ["Now", "Later"], correctIndex: 0, hint: "Today", explanation: "Now." },
        { q: "Future?", options: ["Later", "Yesterday"], correctIndex: 0, hint: "Tomorrow", explanation: "Later." },
        { q: "Timeline?", options: ["Order of events", "Map"], correctIndex: 0, hint: "Line", explanation: "Order of events." },
        { q: "Change?", options: ["Different", "Same"], correctIndex: 0, hint: "New", explanation: "Different." },
        { q: "Long ago?", options: ["Old", "New"], correctIndex: 0, hint: "History", explanation: "Old." },
        { q: "Grandparents?", options: ["Older", "Younger"], correctIndex: 0, hint: "Family", explanation: "Older." },
        { q: "Baby picture?", options: ["Past", "Future"], correctIndex: 0, hint: "Young", explanation: "Past." },
        { q: "Tomorrow?", options: ["Future", "Past"], correctIndex: 0, hint: "Next", explanation: "Future." },
        { q: "History?", options: ["Story of past", "Math"], correctIndex: 0, hint: "Learn", explanation: "Story of past." }
    ],
    "202": [
        { q: "US Flag?", options: ["Stars/Stripes", "Polka dots"], correctIndex: 0, hint: "Wave", explanation: "Stars/Stripes." },
        { q: "Eagle?", options: ["Bird", "Fish"], correctIndex: 0, hint: "Fly", explanation: "Bird." },
        { q: "Statue of Liberty?", options: ["Freedom", "Pizza"], correctIndex: 0, hint: "Torch", explanation: "Freedom." },
        { q: "White House?", options: ["President", "Teacher"], correctIndex: 0, hint: "DC", explanation: "President." },
        { q: "Uncle Sam?", options: ["USA", "UK"], correctIndex: 0, hint: "Hat", explanation: "USA." },
        { q: "Stars on flag?", options: ["50", "10"], correctIndex: 0, hint: "States", explanation: "50." },
        { q: "Stripes on flag?", options: ["13", "50"], correctIndex: 0, hint: "Colonies", explanation: "13." },
        { q: "USA Capital?", options: ["DC", "NY"], correctIndex: 0, hint: "Washington", explanation: "DC." },
        { q: "President lives in?", options: ["White House", "Barn"], correctIndex: 0, hint: "House", explanation: "White House." },
        { q: "Pledge?", options: ["Promise", "Song"], correctIndex: 0, hint: "Flag", explanation: "Promise." }
    ],
    "203": [
        { q: "Need?", options: ["Water", "Toy"], correctIndex: 0, hint: "Survive", explanation: "Water." },
        { q: "Want?", options: ["Game", "Air"], correctIndex: 0, hint: "Fun", explanation: "Game." },
        { q: "Save?", options: ["Keep money", "Spend all"], correctIndex: 0, hint: "Bank", explanation: "Keep money." },
        { q: "Spend?", options: ["Buy", "Keep"], correctIndex: 0, hint: "Shop", explanation: "Buy." },
        { q: "Work?", options: ["Earn money", "Play"], correctIndex: 0, hint: "Job", explanation: "Earn money." },
        { q: "Food?", options: ["Need", "Want"], correctIndex: 0, hint: "Eat", explanation: "Need." },
        { q: "Video Game?", options: ["Want", "Need"], correctIndex: 0, hint: "Fun", explanation: "Want." },
        { q: "Shelter?", options: ["Need", "Want"], correctIndex: 0, hint: "Home", explanation: "Need." },
        { q: "Candy?", options: ["Want", "Need"], correctIndex: 0, hint: "Treat", explanation: "Want." },
        { q: "Clothes?", options: ["Need", "Want"], correctIndex: 0, hint: "Warmth", explanation: "Need." }
    ],
    "204": [
        { q: "Goods?", options: ["Things to buy", "Helping"], correctIndex: 0, hint: "Items", explanation: "Things to buy." },
        { q: "Service?", options: ["Helping/Doing", "Item"], correctIndex: 0, hint: "Action", explanation: "Helping/Doing." },
        { q: "Consumer?", options: ["Buyer", "Seller"], correctIndex: 0, hint: "Get", explanation: "Buyer." },
        { q: "Producer?", options: ["Maker", "Buyer"], correctIndex: 0, hint: "Make", explanation: "Maker." },
        { q: "Trade?", options: ["Swap", "Steal"], correctIndex: 0, hint: "Exchange", explanation: "Swap." },
        { q: "Buy apple?", options: ["Goods", "Service"], correctIndex: 0, hint: "Food", explanation: "Goods." },
        { q: "Haircut?", options: ["Service", "Goods"], correctIndex: 0, hint: "Cut", explanation: "Service." },
        { q: "Baker?", options: ["Producer", "Consumer"], correctIndex: 0, hint: "Make", explanation: "Producer." },
        { q: "Shopper?", options: ["Consumer", "Producer"], correctIndex: 0, hint: "Buy", explanation: "Consumer." },
        { q: "Money?", options: ["Pay", "Eat"], correctIndex: 0, hint: "Coins", explanation: "Pay." }
    ],
    "301": [
        { q: "Rule?", options: ["Keep safe", "Hurt"], correctIndex: 0, hint: "Law", explanation: "Keep safe." },
        { q: "Fair?", options: ["Equal", "Cheating"], correctIndex: 0, hint: "Share", explanation: "Equal." },
        { q: "Vote?", options: ["Choose", "Sleep"], correctIndex: 0, hint: "Pick", explanation: "Choose." },
        { q: "Law?", options: ["Community rule", "Game"], correctIndex: 0, hint: "Police", explanation: "Community rule." },
        { q: "Citizen?", options: ["Member", "Alien"], correctIndex: 0, hint: "Person", explanation: "Member." },
        { q: "Follow rules?", options: ["Yes", "No"], correctIndex: 0, hint: "Good", explanation: "Yes." },
        { q: "Break rules?", options: ["Consequence", "Reward"], correctIndex: 0, hint: "Bad", explanation: "Consequence." },
        { q: "Class rule?", options: ["Listen", "Run"], correctIndex: 0, hint: "School", explanation: "Listen." },
        { q: "Home rule?", options: ["Bedtime", "No sleep"], correctIndex: 0, hint: "Family", explanation: "Bedtime." },
        { q: "Safe?", options: ["Good", "Bad"], correctIndex: 0, hint: "Protect", explanation: "Good." }
    ],
    "302": [
        { q: "Local leader?", options: ["Mayor", "President", "Governor"], correctIndex: 0, hint: "City.", explanation: "Mayor." },
        { q: "City Hall?", options: ["Govt building", "Park", "School"], correctIndex: 0, hint: "Office.", explanation: "Govt building." },
        { q: "Council?", options: ["Group of leaders", "One person", "King"], correctIndex: 0, hint: "Team.", explanation: "Group of leaders." },
        { q: "Service: Trash?", options: ["Sanitation", "Police", "Fire"], correctIndex: 0, hint: "Clean.", explanation: "Sanitation." },
        { q: "Service: Safety?", options: ["Police", "Library", "Parks"], correctIndex: 0, hint: "Protect.", explanation: "Police." },
        { q: "Service: Fire?", options: ["Firefighters", "Doctors"], correctIndex: 0, hint: "Hose", explanation: "Firefighters." },
        { q: "Service: Books?", options: ["Library", "Police"], correctIndex: 0, hint: "Read", explanation: "Library." },
        { q: "Service: Parks?", options: ["Play", "Work"], correctIndex: 0, hint: "Fun", explanation: "Play." },
        { q: "Taxes pay for?", options: ["Services", "Candy"], correctIndex: 0, hint: "Money", explanation: "Services." },
        { q: "Vote for Mayor?", options: ["Yes", "No"], correctIndex: 0, hint: "Elect", explanation: "Yes." }
    ],
    "303": [
        { q: "Mountain?", options: ["High land", "Low land", "Water"], correctIndex: 0, hint: "Peak.", explanation: "High land." },
        { q: "Valley?", options: ["Low land", "High land", "Ocean"], correctIndex: 0, hint: "Between.", explanation: "Low land." },
        { q: "Plain?", options: ["Flat land", "Hill", "Mountain"], correctIndex: 0, hint: "Grass.", explanation: "Flat land." },
        { q: "Island?", options: ["Land in water", "Water in land", "Desert"], correctIndex: 0, hint: "Surrounded.", explanation: "Land in water." },
        { q: "Ocean?", options: ["Salt water", "Fresh water", "Ice"], correctIndex: 0, hint: "Big.", explanation: "Salt water." },
        { q: "Lake?", options: ["Water surrounded by land", "Ocean"], correctIndex: 0, hint: "Pond", explanation: "Water surrounded by land." },
        { q: "River?", options: ["Flowing water", "Still water"], correctIndex: 0, hint: "Stream", explanation: "Flowing water." },
        { q: "Hill?", options: ["Small mountain", "Flat"], correctIndex: 0, hint: "Bump", explanation: "Small mountain." },
        { q: "Desert?", options: ["Dry land", "Wet land"], correctIndex: 0, hint: "Sand", explanation: "Dry land." },
        { q: "Forest?", options: ["Trees", "Sand"], correctIndex: 0, hint: "Wood", explanation: "Trees." }
    ],
    "304": [
        { q: "Continents?", options: ["7", "10"], correctIndex: 0, hint: "Seven", explanation: "7." },
        { q: "Oceans?", options: ["5", "3"], correctIndex: 0, hint: "Five", explanation: "5." },
        { q: "Largest Ocean?", options: ["Pacific", "Indian"], correctIndex: 0, hint: "Big", explanation: "Pacific." },
        { q: "Cold Continent?", options: ["Antarctica", "Africa"], correctIndex: 0, hint: "Ice", explanation: "Antarctica." },
        { q: "We live in?", options: ["North America", "Asia"], correctIndex: 0, hint: "USA", explanation: "North America." },
        { q: "Smallest Continent?", options: ["Australia", "Asia"], correctIndex: 0, hint: "Island", explanation: "Australia." },
        { q: "Largest Continent?", options: ["Asia", "Europe"], correctIndex: 0, hint: "Big", explanation: "Asia." },
        { q: "Equator?", options: ["Middle line", "Top line"], correctIndex: 0, hint: "Hot", explanation: "Middle line." },
        { q: "Pole?", options: ["North/South", "East/West"], correctIndex: 0, hint: "Cold", explanation: "North/South." },
        { q: "Map key?", options: ["Symbols", "Lock"], correctIndex: 0, hint: "Read", explanation: "Symbols." }
    ],
    "401": [
        { q: "Culture?", options: ["Way of life", "Game"], correctIndex: 0, hint: "People", explanation: "Way of life." },
        { q: "Language?", options: ["Speak", "Eat"], correctIndex: 0, hint: "Talk", explanation: "Speak." },
        { q: "Tradition?", options: ["Old custom", "New toy"], correctIndex: 0, hint: "Passed down", explanation: "Old custom." },
        { q: "Holiday?", options: ["Celebration", "Work"], correctIndex: 0, hint: "Party", explanation: "Celebration." },
        { q: "Food is culture?", options: ["Yes", "No"], correctIndex: 0, hint: "Eat", explanation: "Yes." },
        { q: "Clothing?", options: ["Wear", "Drive"], correctIndex: 0, hint: "Dress", explanation: "Wear." },
        { q: "Music?", options: ["Listen", "Taste"], correctIndex: 0, hint: "Song", explanation: "Listen." },
        { q: "Diverse?", options: ["Different", "Same"], correctIndex: 0, hint: "Many", explanation: "Different." },
        { q: "Respect?", options: ["Kindness", "Mean"], correctIndex: 0, hint: "Nice", explanation: "Kindness." },
        { q: "Art?", options: ["Create", "Destroy"], correctIndex: 0, hint: "Paint", explanation: "Create." }
    ],
    "402": [
        { q: "Tradition?", options: ["Passed down", "New"], correctIndex: 0, hint: "Custom", explanation: "Passed down." },
        { q: "Celebrate?", options: ["Party/Honor", "Sleep"], correctIndex: 0, hint: "Happy", explanation: "Party/Honor." },
        { q: "Holiday?", options: ["Special day", "Work"], correctIndex: 0, hint: "Calendar", explanation: "Special day." },
        { q: "Family?", options: ["Relatives", "Strangers"], correctIndex: 0, hint: "Love", explanation: "Relatives." },
        { q: "Custom?", options: ["Habit", "Accident"], correctIndex: 0, hint: "Do", explanation: "Habit." },
        { q: "Birthday?", options: ["Celebration", "Work"], correctIndex: 0, hint: "Age", explanation: "Celebration." },
        { q: "New Year?", options: ["Jan 1", "Dec 1"], correctIndex: 0, hint: "Start", explanation: "Jan 1." },
        { q: "Giving gifts?", options: ["Kindness", "Mean"], correctIndex: 0, hint: "Present", explanation: "Kindness." },
        { q: "Decorate?", options: ["Make pretty", "Break"], correctIndex: 0, hint: "Ornaments", explanation: "Make pretty." },
        { q: "Feast?", options: ["Big meal", "Snack"], correctIndex: 0, hint: "Eat", explanation: "Big meal." }
    ],
    "403": [
        { q: "Adapt?", options: ["Change to fit", "Stay same"], correctIndex: 0, hint: "Survive", explanation: "Change to fit." },
        { q: "Shelter?", options: ["House/Protection", "Toy"], correctIndex: 0, hint: "Home", explanation: "House/Protection." },
        { q: "Environment?", options: ["Surroundings", "Self"], correctIndex: 0, hint: "Nature", explanation: "Surroundings." },
        { q: "Clothing?", options: ["Protect body", "Decoration"], correctIndex: 0, hint: "Wear", explanation: "Protect body." },
        { q: "Resource?", options: ["Useful material", "Trash"], correctIndex: 0, hint: "Use", explanation: "Useful material." },
        { q: "Cold place needs?", options: ["Warm clothes", "Shorts"], correctIndex: 0, hint: "Coat", explanation: "Warm clothes." },
        { q: "Hot place needs?", options: ["Cool clothes", "Parka"], correctIndex: 0, hint: "Shorts", explanation: "Cool clothes." },
        { q: "Forest home?", options: ["Log cabin", "Igloo"], correctIndex: 0, hint: "Wood", explanation: "Log cabin." },
        { q: "Ice home?", options: ["Igloo", "Hut"], correctIndex: 0, hint: "Snow", explanation: "Igloo." },
        { q: "Food from?", options: ["Farming/Hunting", "Magic"], correctIndex: 0, hint: "Grow", explanation: "Farming/Hunting." }
    ],
    "404": [
        { q: "Compass?", options: ["Direction tool", "Clock"], correctIndex: 0, hint: "North", explanation: "Direction tool." },
        { q: "North?", options: ["Up on map", "Down"], correctIndex: 0, hint: "Top", explanation: "Up on map." },
        { q: "Scale?", options: ["Distance", "Weight"], correctIndex: 0, hint: "Miles", explanation: "Distance." },
        { q: "Key/Legend?", options: ["Symbols", "Story"], correctIndex: 0, hint: "Read", explanation: "Symbols." },
        { q: "Grid?", options: ["Squares", "Circles"], correctIndex: 0, hint: "Find", explanation: "Squares." },
        { q: "East?", options: ["Right", "Left"], correctIndex: 0, hint: "Sun rise", explanation: "Right." },
        { q: "West?", options: ["Left", "Right"], correctIndex: 0, hint: "Sun set", explanation: "Left." },
        { q: "South?", options: ["Down", "Up"], correctIndex: 0, hint: "Bottom", explanation: "Down." },
        { q: "Symbol?", options: ["Picture", "Word"], correctIndex: 0, hint: "Icon", explanation: "Picture." },
        { q: "Map title?", options: ["Name of place", "Author"], correctIndex: 0, hint: "What is it", explanation: "Name of place." }
    ],
    "501": [
        { q: "State Capital?", options: ["Govt city", "Park"], correctIndex: 0, hint: "Main", explanation: "Govt city." },
        { q: "Governor?", options: ["State leader", "Teacher"], correctIndex: 0, hint: "Boss", explanation: "State leader." },
        { q: "State Bird?", options: ["Symbol", "Pet"], correctIndex: 0, hint: "Fly", explanation: "Symbol." },
        { q: "State Flag?", options: ["Banner", "Blanket"], correctIndex: 0, hint: "Wave", explanation: "Banner." },
        { q: "Capitol Building?", options: ["Laws made", "House"], correctIndex: 0, hint: "Dome", explanation: "Laws made." },
        { q: "State Flower?", options: ["Symbol", "Weed"], correctIndex: 0, hint: "Bloom", explanation: "Symbol." },
        { q: "State Tree?", options: ["Symbol", "Bush"], correctIndex: 0, hint: "Wood", explanation: "Symbol." },
        { q: "State Seal?", options: ["Official mark", "Animal"], correctIndex: 0, hint: "Stamp", explanation: "Official mark." },
        { q: "State Motto?", options: ["Phrase", "Song"], correctIndex: 0, hint: "Words", explanation: "Phrase." },
        { q: "Citizen?", options: ["Member", "Alien"], correctIndex: 0, hint: "Person", explanation: "Member." }
    ],
    "502": [
        { q: "Settler?", options: ["New resident", "Native", "Tourist"], correctIndex: 0, hint: "Move.", explanation: "New resident." },
        { q: "Log cabin?", options: ["House of wood", "Brick house", "Tent"], correctIndex: 0, hint: "Trees.", explanation: "House of wood." },
        { q: "Wagon?", options: ["Travel vehicle", "Car", "Plane"], correctIndex: 0, hint: "Wheels.", explanation: "Travel vehicle." },
        { q: "Hardship?", options: ["Difficulty", "Easy time", "Party"], correctIndex: 0, hint: "Tough.", explanation: "Difficulty." },
        { q: "Trade?", options: ["Swap goods", "Steal", "Buy only"], correctIndex: 0, hint: "Exchange.", explanation: "Swap goods." },
        { q: "Pioneer?", options: ["First settler", "Last"], correctIndex: 0, hint: "Early", explanation: "First settler." },
        { q: "Frontier?", options: ["Wild edge", "City"], correctIndex: 0, hint: "Border", explanation: "Wild edge." },
        { q: "Journey?", options: ["Trip", "Stay"], correctIndex: 0, hint: "Travel", explanation: "Trip." },
        { q: "Oregon Trail?", options: ["Path West", "Road East"], correctIndex: 0, hint: "Route", explanation: "Path West." },
        { q: "Supplies?", options: ["Food/Tools", "Toys"], correctIndex: 0, hint: "Need", explanation: "Food/Tools." }
    ],
    "503": [
        { q: "Resource?", options: ["Useful material", "Trash", "Toy"], correctIndex: 0, hint: "Use.", explanation: "Useful material." },
        { q: "Natural?", options: ["From nature", "Man-made", "Plastic"], correctIndex: 0, hint: "Earth.", explanation: "From nature." },
        { q: "Renewable?", options: ["Comes back", "Gone forever", "Rare"], correctIndex: 0, hint: "Sun/Wind.", explanation: "Comes back." },
        { q: "Conservation?", options: ["Saving resources", "Wasting", "Using all"], correctIndex: 0, hint: "Protect.", explanation: "Saving resources." },
        { q: "Economy?", options: ["Money system", "Weather", "Map"], correctIndex: 0, hint: "$$$", explanation: "Money system." },
        { q: "Non-renewable?", options: ["Gone once used", "Comes back"], correctIndex: 0, hint: "Oil", explanation: "Gone once used." },
        { q: "Fossil fuel?", options: ["Coal/Oil", "Sun/Wind"], correctIndex: 0, hint: "Burn", explanation: "Coal/Oil." },
        { q: "Recycle?", options: ["Reuse", "Trash"], correctIndex: 0, hint: "Bin", explanation: "Reuse." },
        { q: "Water?", options: ["Natural resource", "Man-made"], correctIndex: 0, hint: "Drink", explanation: "Natural resource." },
        { q: "Lumber?", options: ["Wood", "Metal"], correctIndex: 0, hint: "Tree", explanation: "Wood." }
    ],
    "504": [
        { q: "Import?", options: ["Bring in", "Send out"], correctIndex: 0, hint: "Buy", explanation: "Bring in." },
        { q: "Export?", options: ["Send out", "Bring in"], correctIndex: 0, hint: "Sell", explanation: "Send out." },
        { q: "Industry?", options: ["Business type", "Hobby"], correctIndex: 0, hint: "Work", explanation: "Business type." },
        { q: "Trade?", options: ["Exchange", "Keep"], correctIndex: 0, hint: "Swap", explanation: "Exchange." },
        { q: "Market?", options: ["Place to buy/sell", "Park"], correctIndex: 0, hint: "Store", explanation: "Place to buy/sell." },
        { q: "Factory?", options: ["Makes goods", "Sleeps"], correctIndex: 0, hint: "Build", explanation: "Makes goods." },
        { q: "Job?", options: ["Work", "Play"], correctIndex: 0, hint: "Earn", explanation: "Work." },
        { q: "Agriculture?", options: ["Farming", "Mining"], correctIndex: 0, hint: "Crops", explanation: "Farming." },
        { q: "Manufacturing?", options: ["Making things", "Growing"], correctIndex: 0, hint: "Build", explanation: "Making things." },
        { q: "Transportation?", options: ["Moving goods", "Sitting"], correctIndex: 0, hint: "Truck", explanation: "Moving goods." }
    ],
    "601": [
        { q: "Native?", options: ["Original", "New"], correctIndex: 0, hint: "First", explanation: "Original." },
        { q: "Tribe?", options: ["Group/Nation", "One person"], correctIndex: 0, hint: "Family", explanation: "Group/Nation." },
        { q: "Region?", options: ["Area", "Time"], correctIndex: 0, hint: "Place", explanation: "Area." },
        { q: "Culture?", options: ["Way of life", "Game"], correctIndex: 0, hint: "Customs", explanation: "Way of life." },
        { q: "Shelter?", options: ["Teepee/House", "Tree"], correctIndex: 0, hint: "Home", explanation: "Teepee/House." },
        { q: "Buffalo?", options: ["Animal source", "Pet"], correctIndex: 0, hint: "Hunt", explanation: "Animal source." },
        { q: "Maize?", options: ["Corn", "Wheat"], correctIndex: 0, hint: "Food", explanation: "Corn." },
        { q: "Canoe?", options: ["Boat", "Car"], correctIndex: 0, hint: "Water", explanation: "Boat." },
        { q: "Moccasin?", options: ["Shoe", "Hat"], correctIndex: 0, hint: "Foot", explanation: "Shoe." },
        { q: "Totem Pole?", options: ["Carved wood", "Stone"], correctIndex: 0, hint: "Art", explanation: "Carved wood." }
    ],
    "602": [
        { q: "Explorer?", options: ["Travels to new places", "Stays home", "Farmer"], correctIndex: 0, hint: "Discover.", explanation: "Travels to new places." },
        { q: "Columbus?", options: ["1492", "2020", "1776"], correctIndex: 0, hint: "Ocean blue.", explanation: "1492." },
        { q: "Colony?", options: ["Settlement", "Ship", "King"], correctIndex: 0, hint: "New land.", explanation: "Settlement." },
        { q: "13 Colonies?", options: ["Original US states", "50 states", "Islands"], correctIndex: 0, hint: "East coast.", explanation: "Original US states." },
        { q: "Jamestown?", options: ["First English settlement", "Last city", "Capital"], correctIndex: 0, hint: "Virginia.", explanation: "First English settlement." },
        { q: "Mayflower?", options: ["Ship", "Flower"], correctIndex: 0, hint: "Pilgrims", explanation: "Ship." },
        { q: "Pilgrims?", options: ["Settlers", "Natives"], correctIndex: 0, hint: "Plymouth", explanation: "Settlers." },
        { q: "Thanksgiving?", options: ["Feast", "Fast"], correctIndex: 0, hint: "Turkey", explanation: "Feast." },
        { q: "New World?", options: ["Americas", "Europe"], correctIndex: 0, hint: "West", explanation: "Americas." },
        { q: "King?", options: ["Ruler", "Peasant"], correctIndex: 0, hint: "Crown", explanation: "Ruler." }
    ],
    "603": [
        { q: "Bill of Rights?", options: ["First 10 amendments", "Book"], correctIndex: 0, hint: "List", explanation: "First 10 amendments." },
        { q: "1st Amendment?", options: ["Speech", "Driving"], correctIndex: 0, hint: "Talk", explanation: "Speech." },
        { q: "Right to Bear Arms?", options: ["2nd", "10th"], correctIndex: 0, hint: "Guns", explanation: "2nd." },
        { q: "Constitution?", options: ["Supreme Law", "Suggestion"], correctIndex: 0, hint: "Rule", explanation: "Supreme Law." },
        { q: "Amendment?", options: ["Change", "Book"], correctIndex: 0, hint: "Add", explanation: "Change." },
        { q: "Freedom of Religion?", options: ["Believe what you want", "One church"], correctIndex: 0, hint: "Faith", explanation: "Believe what you want." },
        { q: "Freedom of Press?", options: ["News", "Running"], correctIndex: 0, hint: "Paper", explanation: "News." },
        { q: "Trial by Jury?", options: ["Fair court", "No court"], correctIndex: 0, hint: "Judge", explanation: "Fair court." },
        { q: "No Cruel Punishment?", options: ["8th Amendment", "1st Amendment"], correctIndex: 0, hint: "Fair", explanation: "8th Amendment." },
        { q: "Ratify?", options: ["Approve", "Deny"], correctIndex: 0, hint: "Yes", explanation: "Approve." }
    ],
    "604": [
        { q: "Legislative?", options: ["Makes laws", "Enforces laws", "Judges laws"], correctIndex: 0, hint: "Congress.", explanation: "Makes laws." },
        { q: "Executive?", options: ["Enforces laws", "Makes laws", "Judges laws"], correctIndex: 0, hint: "President.", explanation: "Enforces laws." },
        { q: "Judicial?", options: ["Judges laws", "Makes laws", "Enforces laws"], correctIndex: 0, hint: "Court.", explanation: "Judges laws." },
        { q: "President?", options: ["Leader of Executive", "Leader of Judicial", "King"], correctIndex: 0, hint: "White House.", explanation: "Leader of Executive." },
        { q: "Congress?", options: ["Senate/House", "President", "Court", "Mayor"], correctIndex: 0, hint: "Capitol.", explanation: "Senate/House." },
        { q: "Supreme Court?", options: ["Highest court", "Low court"], correctIndex: 0, hint: "Top", explanation: "Highest court." },
        { q: "Veto?", options: ["Reject law", "Sign law"], correctIndex: 0, hint: "No", explanation: "Reject law." },
        { q: "Check and Balance?", options: ["Limit power", "Unlimited power"], correctIndex: 0, hint: "Fair", explanation: "Limit power." },
        { q: "Senator?", options: ["Legislative member", "Judge"], correctIndex: 0, hint: "Vote", explanation: "Legislative member." },
        { q: "White House?", options: ["President's home", "Court"], correctIndex: 0, hint: "DC", explanation: "President's home." }
    ]
};

export const SS_PRACTICE: Record<string, QuestionTemplate[]> = {};

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
        q: `Social Studies Practice Q${startIdx + i + 1} (Lesson ${id}): Who is the historical figure?`,
        options: ["Leader", "Citizen", "Soldier", "Explorer"],
        correctIndex: 0,
        explanation: "History is made by people."
    }));
};

allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_PRACTICE[key] || [];

    if (realQuestions.length >= 10) {
        SS_PRACTICE[key] = realQuestions.slice(0, 10);
    } else {
        const needed = 10 - realQuestions.length;
        const generated = generatePracticeSet(key, realQuestions.length).slice(0, needed);
        SS_PRACTICE[key] = [...realQuestions, ...generated];
    }
});

SS_PRACTICE['default'] = generatePracticeSet('General');