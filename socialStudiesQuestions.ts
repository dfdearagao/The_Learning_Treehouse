import { LessonContent } from './questionUtils';

export const SS_CONTENT: Record<string, LessonContent> = {
    // Kindergarten (102 Example)
    "102": { 
        objectives: ["Identify community helpers", "Describe helper jobs", "Understand helper tools"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🚒", subtext: "Firefighter" },
            steps: [
                { id: 1, prompt: "What does a firefighter use?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "💦", subtext: "Water Hose" }, feedback: { success: "To put out fires!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
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
        quiz: [
            { q: "Doctor helps?", options: ["Sick people", "Cars", "Pets", "Toys"], correctIndex: 0, hint: "Health.", explanation: "Sick people." },
            { q: "Teacher works at?", options: ["School", "Hospital", "Fire station", "Police station"], correctIndex: 0, hint: "Classroom.", explanation: "School." },
            { q: "Police officer keeps us?", options: ["Safe", "Scared", "Sad", "Hungry"], correctIndex: 0, hint: "Protect.", explanation: "Safe." },
            { q: "Mail carrier brings?", options: ["Mail", "Pizza", "Trash", "Snow"], correctIndex: 0, hint: "Letters.", explanation: "Mail." },
            { q: "Baker makes?", options: ["Bread", "Shoes", "Cars", "Books"], correctIndex: 0, hint: "Food.", explanation: "Bread." },
            { q: "Vet helps?", options: ["Animals", "People", "Plants", "Robots"], correctIndex: 0, hint: "Pets.", explanation: "Animals." },
            { q: "Dentist checks?", options: ["Teeth", "Eyes", "Ears", "Toes"], correctIndex: 0, hint: "Smile.", explanation: "Teeth." },
            { q: "Librarian works with?", options: ["Books", "Food", "Tools", "Animals"], correctIndex: 0, hint: "Read.", explanation: "Books." },
            { q: "Farmer grows?", options: ["Food", "Toys", "Cars", "Houses"], correctIndex: 0, hint: "Crops.", explanation: "Food." },
            { q: "Chef works in?", options: ["Kitchen", "Gym", "Park", "Bus"], correctIndex: 0, hint: "Cook.", explanation: "Kitchen." },
            { q: "Bus driver drives?", options: ["Bus", "Plane", "Boat", "Bike"], correctIndex: 0, hint: "School.", explanation: "Bus." },
            { q: "Pilot flies?", options: ["Plane", "Car", "Train", "Ship"], correctIndex: 0, hint: "Sky.", explanation: "Plane." },
            { q: "Artist makes?", options: ["Art", "Noise", "Mess", "Food"], correctIndex: 0, hint: "Paint.", explanation: "Art." },
            { q: "Coach teaches?", options: ["Sports", "Math", "Reading", "Sleeping"], correctIndex: 0, hint: "Game.", explanation: "Sports." },
            { q: "Trash collector takes?", options: ["Garbage", "Mail", "Food", "Money"], correctIndex: 0, hint: "Clean.", explanation: "Garbage." }
        ] 
    },

    // 1st Grade (202 Example)
    "202": { 
        objectives: ["Identify national symbols", "Explain the meaning of symbols", "Recognize patriotic songs"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🦅", subtext: "Bald Eagle" },
            steps: [
                { id: 1, prompt: "What does the Eagle represent?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "FREEDOM", subtext: "USA Symbol" }, feedback: { success: "Strength and Freedom.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "US Flag colors?", options: ["R/W/B", "G/Y"], correctIndex: 0, hint: "Stars", explanation: "R/W/B." },
            { q: "Bald Eagle?", options: ["Bird", "Fish"], correctIndex: 0, hint: "Fly", explanation: "Bird." },
            { q: "Statue of Liberty?", options: ["Freedom", "Pizza"], correctIndex: 0, hint: "Torch", explanation: "Freedom." },
            { q: "White House?", options: ["President", "Teacher"], correctIndex: 0, hint: "DC", explanation: "President." },
            { q: "Liberty Bell?", options: ["Crack", "Whole"], correctIndex: 0, hint: "Broken", explanation: "Crack." },
            { q: "Uncle Sam?", options: ["USA", "UK"], correctIndex: 0, hint: "Hat", explanation: "USA." },
            { q: "Stars on flag?", options: ["50", "10"], correctIndex: 0, hint: "States", explanation: "50." },
            { q: "Stripes on flag?", options: ["13", "50"], correctIndex: 0, hint: "Colonies", explanation: "13." },
            { q: "USA Capital?", options: ["DC", "NY"], correctIndex: 0, hint: "Washington", explanation: "DC." },
            { q: "President lives in?", options: ["White House", "Barn"], correctIndex: 0, hint: "House", explanation: "White House." }
        ], 
        quiz: [
            { q: "Bald Eagle is?", options: ["National Bird", "Pet", "Food", "Toy"], correctIndex: 0, hint: "Symbol.", explanation: "National Bird." },
            { q: "Flag has?", options: ["Stars & Stripes", "Polka Dots", "Squares", "Circles"], correctIndex: 0, hint: "Pattern.", explanation: "Stars & Stripes." },
            { q: "Statue of Liberty represents?", options: ["Freedom", "Money", "War", "Sleep"], correctIndex: 0, hint: "Torch.", explanation: "Freedom." },
            { q: "White House is for?", options: ["President", "King", "Teacher", "Chef"], correctIndex: 0, hint: "Leader.", explanation: "President." },
            { q: "Liberty Bell has a?", options: ["Crack", "Bird", "Flag", "Star"], correctIndex: 0, hint: "Broken.", explanation: "Crack." },
            { q: "Mount Rushmore has?", options: ["Faces", "Cars", "Houses", "Trees"], correctIndex: 0, hint: "Presidents.", explanation: "Faces." },
            { q: "Uncle Sam wants?", options: ["You", "Food", "Money", "Sleep"], correctIndex: 0, hint: "Poster.", explanation: "You." },
            { q: "Number of stars on flag?", options: ["50", "13", "10", "100"], correctIndex: 0, hint: "States.", explanation: "50." },
            { q: "Number of stripes?", options: ["13", "50", "10", "5"], correctIndex: 0, hint: "Colonies.", explanation: "13." },
            { q: "Capital of USA?", options: ["Washington DC", "New York", "London", "Texas"], correctIndex: 0, hint: "DC.", explanation: "Washington DC." },
            { q: "National Anthem?", options: ["Star Spangled Banner", "Happy Birthday", "ABC", "Jingle Bells"], correctIndex: 0, hint: "Song.", explanation: "Star Spangled Banner." },
            { q: "4th of July is?", options: ["Independence Day", "Christmas", "Easter", "Halloween"], correctIndex: 0, hint: "Fireworks.", explanation: "Independence Day." },
            { q: "Dollar bill symbol?", options: ["$", "#", "&", "@"], correctIndex: 0, hint: "Money.", explanation: "$." },
            { q: "Lincoln Memorial honors?", options: ["Abraham Lincoln", "George Washington", "Obama", "Trump"], correctIndex: 0, hint: "Abe.", explanation: "Abraham Lincoln." },
            { q: "Pledge of Allegiance is?", options: ["Promise", "Song", "Dance", "Joke"], correctIndex: 0, hint: "Flag.", explanation: "Promise." }
        ] 
    },

    // 2nd Grade (304 Example)
    "304": { 
        objectives: ["Identify continents and oceans", "Read a world map", "Locate poles and equator"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🗺️", subtext: "Map" },
            steps: [
                { id: 1, prompt: "What color is water on a map?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "BLUE", subtext: "Ocean" }, feedback: { success: "Water is blue.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Continents?", options: ["7", "10"], correctIndex: 0, hint: "Seven", explanation: "7." },
            { q: "Oceans?", options: ["5", "3"], correctIndex: 0, hint: "Five", explanation: "5." },
            { q: "Largest Ocean?", options: ["Pacific", "Indian"], correctIndex: 0, hint: "Big", explanation: "Pacific." },
            { q: "Cold Continent?", options: ["Antarctica", "Africa"], correctIndex: 0, hint: "Ice", explanation: "Antarctica." },
            { q: "Largest Continent?", options: ["Asia", "Europe"], correctIndex: 0, hint: "East", explanation: "Asia." },
            { q: "Smallest Continent?", options: ["Australia", "North America"], correctIndex: 0, hint: "Island", explanation: "Australia." },
            { q: "We live in?", options: ["North America", "Asia"], correctIndex: 0, hint: "USA", explanation: "North America." },
            { q: "Equator?", options: ["Middle", "Top"], correctIndex: 0, hint: "Hot", explanation: "Middle." },
            { q: "Pole?", options: ["North/South", "East/West"], correctIndex: 0, hint: "Cold", explanation: "North/South." },
            { q: "Globe shape?", options: ["Sphere", "Flat"], correctIndex: 0, hint: "Ball", explanation: "Sphere." }
        ], 
        quiz: [
            { q: "Largest Ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], correctIndex: 0, hint: "Big.", explanation: "Pacific." },
            { q: "Largest Continent?", options: ["Asia", "Europe", "Africa", "Australia"], correctIndex: 0, hint: "East.", explanation: "Asia." },
            { q: "Coldest Continent?", options: ["Antarctica", "Africa", "South America", "Europe"], correctIndex: 0, hint: "Ice.", explanation: "Antarctica." },
            { q: "Ocean near USA East?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correctIndex: 0, hint: "New York.", explanation: "Atlantic." },
            { q: "Ocean near USA West?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], correctIndex: 0, hint: "California.", explanation: "Pacific." },
            { q: "Smallest Continent?", options: ["Australia", "Asia", "North America", "Europe"], correctIndex: 0, hint: "Island.", explanation: "Australia." },
            { q: "Compass shows?", options: ["Direction", "Time", "Temp", "Weight"], correctIndex: 0, hint: "N/S.", explanation: "Direction." },
            { q: "North Pole is?", options: ["Top", "Bottom", "Middle", "Side"], correctIndex: 0, hint: "Up.", explanation: "Top." },
            { q: "South Pole is?", options: ["Bottom", "Top", "Middle", "Side"], correctIndex: 0, hint: "Down.", explanation: "Bottom." },
            { q: "Equator is?", options: ["Middle line", "Top line", "Bottom line", "Side line"], correctIndex: 0, hint: "Hot.", explanation: "Middle line." },
            { q: "Shape of Earth?", options: ["Sphere", "Flat", "Cube", "Pyramid"], correctIndex: 0, hint: "Ball.", explanation: "Sphere." },
            { q: "Globe is model of?", options: ["Earth", "Moon", "Mars", "Sun"], correctIndex: 0, hint: "Planet.", explanation: "Earth." },
            { q: "Blue on map?", options: ["Water", "Land", "Ice", "Forest"], correctIndex: 0, hint: "Ocean.", explanation: "Water." },
            { q: "Green on map?", options: ["Land", "Water", "Ice", "Clouds"], correctIndex: 0, hint: "Grass.", explanation: "Land." },
            { q: "How many oceans?", options: ["5", "1", "7", "10"], correctIndex: 0, hint: "Five.", explanation: "5." }
        ] 
    },

    // 3rd Grade (401 Example)
    "401": { 
        objectives: ["Define culture and tradition", "Identify cultural differences", "Understand global diversity"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🍲", subtext: "Food" },
            steps: [
                { id: 1, prompt: "Is food part of culture?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "YES", subtext: "Tradition" }, feedback: { success: "Yes, it is!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
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
        quiz: [
            { q: "Language is part of culture?", options: ["Yes", "No"], correctIndex: 0, hint: "Talk.", explanation: "Yes." },
            { q: "Food is culture?", options: ["Yes", "No"], correctIndex: 0, hint: "Eat.", explanation: "Yes." },
            { q: "Clothing varies by culture?", options: ["Yes", "No"], correctIndex: 0, hint: "Wear.", explanation: "Yes." },
            { q: "Tradition means?", options: ["Passed down", "New thing", "Joke", "Game"], correctIndex: 0, hint: "Old.", explanation: "Passed down." },
            { q: "Diverse means?", options: ["Different", "Same", "One", "None"], correctIndex: 0, hint: "Variety.", explanation: "Different." },
            { q: "Immigrant?", options: ["Moves to new country", "Stays home", "Tourist", "Alien"], correctIndex: 0, hint: "Move.", explanation: "Moves to new country." },
            { q: "Ancestor?", options: ["Relative from past", "Friend", "Pet", "Neighbor"], correctIndex: 0, hint: "Grandparent.", explanation: "Relative from past." },
            { q: "Holiday?", options: ["Celebration", "Work day", "Sad day", "Normal day"], correctIndex: 0, hint: "Party.", explanation: "Celebration." },
            { q: "Religion?", options: ["Belief system", "Sport", "Food", "Toy"], correctIndex: 0, hint: "Faith.", explanation: "Belief system." },
            { q: "Music is culture?", options: ["Yes", "No"], correctIndex: 0, hint: "Song.", explanation: "Yes." },
            { q: "Folktale?", options: ["Traditional story", "News", "Fact", "Math"], correctIndex: 0, hint: "Story.", explanation: "Traditional story." },
            { q: "Custom?", options: ["Habit/Practice", "Costume", "Money", "Game"], correctIndex: 0, hint: "Do.", explanation: "Habit/Practice." },
            { q: "Respect means?", options: ["Being kind/fair", "Being mean", "Ignoring", "Hating"], correctIndex: 0, hint: "Nice.", explanation: "Being kind/fair." },
            { q: "Festival?", options: ["Big party/event", "Sleep", "Work", "School"], correctIndex: 0, hint: "Fun.", explanation: "Big party/event." },
            { q: "Heritage?", options: ["Background/History", "Hair color", "Height", "Weight"], correctIndex: 0, hint: "Roots.", explanation: "Background/History." }
        ] 
    },

    // 4th Grade (501 Example)
    "501": { 
        objectives: ["Explain state government roles", "Identify government branches", "Understand rights and responsibilities"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🏛️", subtext: "Capitol" },
            steps: [
                { id: 1, prompt: "Who works here?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "LEADERS", subtext: "Government" }, feedback: { success: "Making laws.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "State Capital?", options: ["Govt city", "Park"], correctIndex: 0, hint: "Main", explanation: "Govt city." },
            { q: "Governor?", options: ["State leader", "Teacher"], correctIndex: 0, hint: "Boss", explanation: "State leader." },
            { q: "State Bird?", options: ["Symbol", "Pet"], correctIndex: 0, hint: "Fly", explanation: "Symbol." },
            { q: "State Flag?", options: ["Banner", "Blanket"], correctIndex: 0, hint: "Wave", explanation: "Banner." },
            { q: "Capitol Building?", options: ["Laws made", "House"], correctIndex: 0, hint: "Dome", explanation: "Laws made." },
            { q: "Citizen?", options: ["Member", "Alien"], correctIndex: 0, hint: "Person", explanation: "Member." },
            { q: "Voting?", options: ["Choice", "Sleep"], correctIndex: 0, hint: "Ballot", explanation: "Choice." },
            { q: "Law?", options: ["Rule", "Suggestion"], correctIndex: 0, hint: "Obey", explanation: "Rule." },
            { q: "Tax?", options: ["Money for roads", "Gift"], correctIndex: 0, hint: "Pay", explanation: "Money for roads." },
            { q: "Constitution?", options: ["Plan", "Map"], correctIndex: 0, hint: "Paper", explanation: "Plan." }
        ], 
        quiz: [
            { q: "Governor leads?", options: ["State", "Country", "City", "School"], correctIndex: 0, hint: "Big area.", explanation: "State." },
            { q: "Mayor leads?", options: ["City", "State", "Country", "World"], correctIndex: 0, hint: "Town.", explanation: "City." },
            { q: "President leads?", options: ["Country", "State", "City", "School"], correctIndex: 0, hint: "USA.", explanation: "Country." },
            { q: "State Bird?", options: ["Symbol", "Pet", "Food", "Toy"], correctIndex: 0, hint: "Official.", explanation: "Symbol." },
            { q: "State Flag?", options: ["Symbol", "Blanket", "Towel", "Rug"], correctIndex: 0, hint: "Fly.", explanation: "Symbol." },
            { q: "State Flower?", options: ["Symbol", "Weed", "Food", "Gift"], correctIndex: 0, hint: "Bloom.", explanation: "Symbol." },
            { q: "Capitol Building?", options: ["Where laws made", "Mall", "Park", "House"], correctIndex: 0, hint: "Govt.", explanation: "Where laws made." },
            { q: "Citizen?", options: ["Member of community", "Alien", "Tourist", "Pet"], correctIndex: 0, hint: "Person.", explanation: "Member of community." },
            { q: "Voting?", options: ["Choosing leader", "Sleeping", "Eating", "Running"], correctIndex: 0, hint: "Ballot.", explanation: "Choosing leader." },
            { q: "Law?", options: ["Rule", "Suggestion", "Joke", "Story"], correctIndex: 0, hint: "Follow.", explanation: "Rule." },
            { q: "Tax?", options: ["Money for govt", "Gift", "Prize", "Fine"], correctIndex: 0, hint: "Pay.", explanation: "Money for govt." },
            { q: "Constitution?", options: ["Supreme Law", "Book", "Paper", "Letter"], correctIndex: 0, hint: "Rules.", explanation: "Supreme Law." },
            { q: "State Motto?", options: ["Phrase", "Song", "Dance", "Food"], correctIndex: 0, hint: "Words.", explanation: "Phrase." },
            { q: "License plate?", options: ["On car", "On house", "On bike", "On person"], correctIndex: 0, hint: "ID.", explanation: "On car." },
            { q: "State Map?", options: ["Shows cities", "Shows stars", "Shows food", "Shows cars"], correctIndex: 0, hint: "Geography.", explanation: "Shows cities." }
        ] 
    },

    // 5th Grade (603 Example)
    "603": { 
        objectives: ["Identify the Bill of Rights", "Explain key amendments", "Understand the Constitution"],
        learn: {
            type: 'flashcard',
            initialState: { content: "📜", subtext: "Constitution" },
            steps: [
                { id: 1, prompt: "What is this document?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "RULES", subtext: "Supreme Law" }, feedback: { success: "The rules of the USA.", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Bill of Rights?", options: ["First 10 amendments", "Book"], correctIndex: 0, hint: "List", explanation: "First 10 amendments." },
            { q: "1st Amendment?", options: ["Speech", "Driving"], correctIndex: 0, hint: "Talk", explanation: "Speech." },
            { q: "Right to Bear Arms?", options: ["2nd", "10th"], correctIndex: 0, hint: "Guns", explanation: "2nd." },
            { q: "Freedom of Religion?", options: ["Believe what you want", "One church"], correctIndex: 0, hint: "Faith", explanation: "Believe what you want." },
            { q: "Freedom of Press?", options: ["News", "Running"], correctIndex: 0, hint: "Paper", explanation: "News." },
            { q: "Trial by Jury?", options: ["Fair court", "No court"], correctIndex: 0, hint: "Judge", explanation: "Fair court." },
            { q: "No Cruel Punishment?", options: ["8th Amendment", "1st Amendment"], correctIndex: 0, hint: "Fair", explanation: "8th Amendment." },
            { q: "Constitution?", options: ["Supreme Law", "Suggestion"], correctIndex: 0, hint: "Rule", explanation: "Supreme Law." },
            { q: "Amendment?", options: ["Change", "Book"], correctIndex: 0, hint: "Add", explanation: "Change." },
            { q: "Ratify?", options: ["Approve", "Deny"], correctIndex: 0, hint: "Yes", explanation: "Approve." }
        ], 
        quiz: [
            { q: "First Amendment?", options: ["Speech/Religion", "Guns", "Soldiers", "Search"], correctIndex: 0, hint: "Talk.", explanation: "Speech/Religion." },
            { q: "How many amendments in Bill of Rights?", options: ["10", "5", "20", "1"], correctIndex: 0, hint: "Ten.", explanation: "10." },
            { q: "Right to bear arms?", options: ["2nd", "1st", "3rd", "4th"], correctIndex: 0, hint: "Two.", explanation: "2nd." },
            { q: "Freedom of Press?", options: ["News", "Running", "Sleeping", "Eating"], correctIndex: 0, hint: "Paper.", explanation: "News." },
            { q: "Right to trial?", options: ["Fair court", "No court", "Prison", "Fine"], correctIndex: 0, hint: "Judge.", explanation: "Fair court." },
            { q: "Constitution written in?", options: ["1787", "2000", "1900", "1492"], correctIndex: 0, hint: "Old.", explanation: "1787." },
            { q: "We the People?", options: ["Intro to Constitution", "Song", "Book", "Movie"], correctIndex: 0, hint: "Preamble.", explanation: "Intro to Constitution." },
            { q: "Founding Fathers?", options: ["Wrote Constitution", "Built houses", "Farmed", "Sailed"], correctIndex: 0, hint: "Leaders.", explanation: "Wrote Constitution." },
            { q: "Democracy?", options: ["Rule by people", "King", "Queen", "Army"], correctIndex: 0, hint: "Vote.", explanation: "Rule by people." },
            { q: "Republic?", options: ["Representatives", "King", "Dictator", "None"], correctIndex: 0, hint: "Reps.", explanation: "Representatives." },
            { q: "Supreme Court?", options: ["Highest court", "Small court", "Mall", "Park"], correctIndex: 0, hint: "Top.", explanation: "Highest court." },
            { q: "Veto?", options: ["President rejects law", "Signs law", "Writes law", "Reads law"], correctIndex: 0, hint: "No.", explanation: "President rejects law." },
            { q: "Checks and Balances?", options: ["Limit power", "Money", "Weights", "Scales"], correctIndex: 0, hint: "Fair.", explanation: "Limit power." },
            { q: "Congress?", options: ["Makes laws", "Enforces laws", "Judges laws", "Breaks laws"], correctIndex: 0, hint: "Write.", explanation: "Makes laws." },
            { q: "Amendment?", options: ["Change to Constitution", "New book", "Mistake", "Erase"], correctIndex: 0, hint: "Add.", explanation: "Change to Constitution." }
        ] 
    },

    // Fallback for default
    "default": { 
        objectives: ["Learn about community", "Identify map symbols", "Understand history"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🚒", subtext: "Firefighter" },
            steps: [
                { id: 1, prompt: "What does a firefighter use?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "💦", subtext: "Water Hose" }, feedback: { success: "To put out fires!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "History is?", options: ["Past", "Future", "Now", "Never"], correctIndex: 0, hint: "Ago", explanation: "Past." },
            { q: "Geography is?", options: ["Earth study", "Math", "Reading", "PE"], correctIndex: 0, hint: "Map", explanation: "Earth study." },
            { q: "Map?", options: ["Picture of place", "Story"], correctIndex: 0, hint: "Look", explanation: "Picture of place." },
            { q: "Globe?", options: ["Round map", "Flat map"], correctIndex: 0, hint: "Ball", explanation: "Round map." },
            { q: "Community?", options: ["People living together", "Alone"], correctIndex: 0, hint: "Group", explanation: "People living together." },
            { q: "Rule?", options: ["Keep safe", "Be mean"], correctIndex: 0, hint: "Follow", explanation: "Keep safe." },
            { q: "Leader?", options: ["In charge", "Follower"], correctIndex: 0, hint: "Boss", explanation: "In charge." },
            { q: "Vote?", options: ["Choose", "Sleep"], correctIndex: 0, hint: "Pick", explanation: "Choose." },
            { q: "Flag?", options: ["Symbol", "Blanket"], correctIndex: 0, hint: "Wave", explanation: "Symbol." },
            { q: "Country?", options: ["Nation", "City"], correctIndex: 0, hint: "Big", explanation: "Nation." }
        ], 
        quiz: [
            { q: "Geography?", options: ["Earth study", "Math", "Reading", "PE"], correctIndex: 0, hint: "Map", explanation: "Earth study" },
            { q: "History?", options: ["Past events", "Future", "Now", "Never"], correctIndex: 0, hint: "Ago", explanation: "Past events" },
            { q: "Civics?", options: ["Citizenship", "Cars", "Cooking", "Cleaning"], correctIndex: 0, hint: "Rights", explanation: "Citizenship" },
            { q: "Economics?", options: ["Money/Trade", "Exercise", "Sleep", "Art"], correctIndex: 0, hint: "Buy", explanation: "Money/Trade" },
            { q: "Culture?", options: ["Way of life", "Math", "Science", "Gym"], correctIndex: 0, hint: "People", explanation: "Way of life" },
            { q: "Timeline?", options: ["Order of events", "Map", "Clock", "Scale"], correctIndex: 0, hint: "Line", explanation: "Order of events" },
            { q: "Artifact?", options: ["Old object", "New toy", "Food", "Trash"], correctIndex: 0, hint: "Museum", explanation: "Old object" },
            { q: "Primary Source?", options: ["Firsthand account", "Textbook", "Story", "Movie"], correctIndex: 0, hint: "Original", explanation: "Firsthand account" },
            { q: "Secondary Source?", options: ["Textbook", "Diary", "Photo", "Letter"], correctIndex: 0, hint: "Report", explanation: "Textbook" },
            { q: "Biography?", options: ["Life story", "Map", "Dictionary", "Menu"], correctIndex: 0, hint: "Person", explanation: "Life story" },
            { q: "Autobiography?", options: ["Self written", "Written by other", "Fiction", "Poem"], correctIndex: 0, hint: "Self", explanation: "Self written" },
            { q: "Cause?", options: ["Why it happened", "Result", "End", "Middle"], correctIndex: 0, hint: "Reason", explanation: "Why it happened" },
            { q: "Effect?", options: ["Result", "Reason", "Start", "Middle"], correctIndex: 0, hint: "Outcome", explanation: "Result" },
            { q: "Chronological?", options: ["Time order", "Random", "Size", "Color"], correctIndex: 0, hint: "Time", explanation: "Time order" },
            { q: "Decade?", options: ["10 years", "100 years", "1 year", "5 years"], correctIndex: 0, hint: "Ten", explanation: "10 years" }
        ] 
    }
};