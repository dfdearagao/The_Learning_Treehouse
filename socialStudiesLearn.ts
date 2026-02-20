import { LearnContent } from './questionUtils';

const REAL_LEARN: Record<string, LearnContent> = {
    "101": {
        objectives: ["Being a Good Citizen", "Rules and Laws", "Fairness"],
        learn: {
            type: 'flashcard', initialState: { content: "🤝", subtext: "Help" },
            steps: [{ id: 1, prompt: "Tap to be a good citizen.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Good", subtext: "Citizen" }, feedback: { success: "Helping others is good!", error: "" } }],
            quickCheck: []
        }
    },
    "102": { 
        objectives: ["Identify community helpers", "Describe helper jobs", "Understand helper tools"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🚒", subtext: "Firefighter" },
            steps: [
                { id: 1, prompt: "What does a firefighter use?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "💦", subtext: "Water Hose" }, feedback: { success: "To put out fires!", error: "" } }
            ],
            quickCheck: []
        }
    },
    "103": {
        objectives: ["Maps and Globes", "Land vs Water", "Directions"],
        learn: {
            type: 'flashcard', initialState: { content: "🌍", subtext: "Globe" },
            steps: [{ id: 1, prompt: "Find the water.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Blue", subtext: "Ocean" }, feedback: { success: "Blue is water!", error: "" } }],
            quickCheck: []
        }
    },
    "104": {
        objectives: ["My Home and School", "Location", "Environment"],
        learn: {
            type: 'flashcard', initialState: { content: "🏫", subtext: "School" },
            steps: [{ id: 1, prompt: "Where do we learn?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Class", subtext: "Room" }, feedback: { success: "In the classroom!", error: "" } }],
            quickCheck: []
        }
    },

    "201": {
        objectives: ["Families Now and Long Ago", "Timelines", "Change"],
        learn: {
            type: 'flashcard', initialState: { content: "🕰️", subtext: "Past" },
            steps: [{ id: 1, prompt: "Go to the past.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Old", subtext: "Long Ago" }, feedback: { success: "Things were different!", error: "" } }],
            quickCheck: []
        }
    },
    "202": { 
        objectives: ["Identify national symbols", "Explain the meaning of symbols", "Recognize patriotic songs"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🦅", subtext: "Bald Eagle" },
            steps: [
                { id: 1, prompt: "What does the Eagle represent?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "FREEDOM", subtext: "USA Symbol" }, feedback: { success: "Strength and Freedom.", error: "" } }
            ],
            quickCheck: []
        }
    },
    "203": {
        objectives: ["Needs vs Wants", "Goods and Services", "Saving"],
        learn: {
            type: 'flashcard', initialState: { content: "🍔", subtext: "Food" },
            steps: [{ id: 1, prompt: "Is food a Need or Want?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Need", subtext: "Survival" }, feedback: { success: "We need food to live!", error: "" } }],
            quickCheck: []
        }
    },
    "204": {
        objectives: ["Goods and Services", "Producers/Consumers", "Trade"],
        learn: {
            type: 'flashcard', initialState: { content: "💰", subtext: "Buy" },
            steps: [{ id: 1, prompt: "Buy a toy.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Consumer", subtext: "Buyer" }, feedback: { success: "You are a consumer!", error: "" } }],
            quickCheck: []
        }
    },

    "301": {
        objectives: ["Purpose of Rules", "Laws", "Consequences"],
        learn: {
            type: 'flashcard', initialState: { content: "🛑", subtext: "Stop" },
            steps: [{ id: 1, prompt: "Why stop?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Safe", subtext: "Safety" }, feedback: { success: "Rules keep us safe!", error: "" } }],
            quickCheck: []
        }
    },
    "302": {
        objectives: ["Local Government", "Mayor", "Services"],
        learn: {
            type: 'flashcard', initialState: { content: "City", subtext: "Hall" },
            steps: [{ id: 1, prompt: "Who leads the city?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Mayor", subtext: "Leader" }, feedback: { success: "The Mayor!", error: "" } }],
            quickCheck: []
        }
    },
    "303": {
        objectives: ["Landforms", "Mountains/Hills", "Bodies of Water"],
        learn: {
            type: 'flashcard', initialState: { content: "⛰️", subtext: "Mountain" },
            steps: [{ id: 1, prompt: "Is it high or low?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "High", subtext: "Peak" }, feedback: { success: "Mountains are high!", error: "" } }],
            quickCheck: []
        }
    },
    "304": { 
        objectives: ["Identify continents and oceans", "Read a world map", "Locate poles and equator"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🗺️", subtext: "Map" },
            steps: [
                { id: 1, prompt: "What color is water on a map?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "BLUE", subtext: "Ocean" }, feedback: { success: "Water is blue.", error: "" } }
            ],
            quickCheck: []
        }
    },

    "401": { 
        objectives: ["Define culture and tradition", "Identify cultural differences", "Understand global diversity"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🍲", subtext: "Food" },
            steps: [
                { id: 1, prompt: "Is food part of culture?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "YES", subtext: "Tradition" }, feedback: { success: "Yes, it is!", error: "" } }
            ],
            quickCheck: []
        }
    },
    "402": {
        objectives: ["Traditions and Holidays", "Celebrations", "Family"],
        learn: {
            type: 'flashcard', initialState: { content: "🎉", subtext: "Party" },
            steps: [{ id: 1, prompt: "Why do we celebrate?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Honor", subtext: "Memory" }, feedback: { success: "To remember and honor!", error: "" } }],
            quickCheck: []
        }
    },
    "403": {
        objectives: ["Adapting to Environment", "Shelter/Clothing", "Resources"],
        learn: {
            type: 'flashcard', initialState: { content: "🌵", subtext: "Desert" },
            steps: [{ id: 1, prompt: "How to live here?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Adapt", subtext: "Change" }, feedback: { success: "We adapt to survive!", error: "" } }],
            quickCheck: []
        }
    },
    "404": {
        objectives: ["Using Maps", "Scale/Grid", "Cardinal Directions"],
        learn: {
            type: 'flashcard', initialState: { content: "🧭", subtext: "Compass" },
            steps: [{ id: 1, prompt: "Find North.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "N", subtext: "Up" }, feedback: { success: "North is usually up on a map!", error: "" } }],
            quickCheck: []
        }
    },

    "501": { 
        objectives: ["Explain state government roles", "Identify government branches", "Understand rights and responsibilities"],
        learn: {
            type: 'flashcard',
            initialState: { content: "🏛️", subtext: "Capitol" },
            steps: [
                { id: 1, prompt: "Who works here?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "LEADERS", subtext: "Government" }, feedback: { success: "Making laws.", error: "" } }
            ],
            quickCheck: []
        }
    },
    "502": {
        objectives: ["Early Settlers", "Pioneers", "Challenges"],
        learn: {
            type: 'flashcard', initialState: { content: "🏚️", subtext: "Cabin" },
            steps: [{ id: 1, prompt: "Who lived here?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Pioneer", subtext: "Settler" }, feedback: { success: "Early settlers built cabins!", error: "" } }],
            quickCheck: []
        }
    },
    "503": {
        objectives: ["Natural Resources", "Economy", "Conservation"],
        learn: {
            type: 'flashcard', initialState: { content: "🌲", subtext: "Tree" },
            steps: [{ id: 1, prompt: "Is this a resource?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Yes", subtext: "Wood" }, feedback: { success: "Trees provide wood and paper!", error: "" } }],
            quickCheck: []
        }
    },
    "504": {
        objectives: ["Trade and Industry", "Imports/Exports", "Market"],
        learn: {
            type: 'flashcard', initialState: { content: "🚢", subtext: "Ship" },
            steps: [{ id: 1, prompt: "Moving goods.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Trade", subtext: "Commerce" }, feedback: { success: "Shipping goods is trade!", error: "" } }],
            quickCheck: []
        }
    },

    "601": {
        objectives: ["Native Americans", "Regions", "Culture"],
        learn: {
            type: 'flashcard', initialState: { content: "🏹", subtext: "Arrow" },
            steps: [{ id: 1, prompt: "Who used this?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Native", subtext: "Hunter" }, feedback: { success: "Native Americans used arrows.", error: "" } }],
            quickCheck: []
        }
    },
    "602": {
        objectives: ["Exploration and Colonization", "European Explorers", "New World"],
        learn: {
            type: 'flashcard', initialState: { content: "⛵", subtext: "Ship" },
            steps: [{ id: 1, prompt: "Sailing West.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Explore", subtext: "Discover" }, feedback: { success: "Explorers sought new lands.", error: "" } }],
            quickCheck: []
        }
    },
    "603": { 
        objectives: ["Identify the Bill of Rights", "Explain key amendments", "Understand the Constitution"],
        learn: {
            type: 'flashcard',
            initialState: { content: "📜", subtext: "Constitution" },
            steps: [
                { id: 1, prompt: "What is this document?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "RULES", subtext: "Supreme Law" }, feedback: { success: "The rules of the USA.", error: "" } }
            ],
            quickCheck: []
        }
    },
    "604": {
        objectives: ["Three Branches of Government", "Checks and Balances", "Separation of Powers"],
        learn: {
            type: 'flashcard', initialState: { content: "⚖️", subtext: "Scale" },
            steps: [{ id: 1, prompt: "Balance power.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Justice", subtext: "Fairness" }, feedback: { success: "Branches balance each other!", error: "" } }],
            quickCheck: []
        }
    }
};

export const SS_LEARN: Record<string, LearnContent> = {};

const allIds = [
    ...Array.from({length: 4}, (_,i)=>101+i),
    ...Array.from({length: 4}, (_,i)=>201+i),
    ...Array.from({length: 4}, (_,i)=>301+i),
    ...Array.from({length: 4}, (_,i)=>401+i),
    ...Array.from({length: 4}, (_,i)=>501+i),
    ...Array.from({length: 4}, (_,i)=>601+i)
];

const defaultLearn: LearnContent = {
    objectives: ["Identify historical events", "Understand geography", "Learn citizenship"],
    learn: { 
        type: 'flashcard', 
        initialState: { content: "🌍", subtext: "World" }, 
        steps: [
            { id: 1, prompt: "Explore the map.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🗺️", subtext: "Map" }, feedback: { success: "Let's explore!", error: "" } }
        ], 
        quickCheck: [] 
    }
};

allIds.forEach(id => {
    const key = id.toString();
    SS_LEARN[key] = REAL_LEARN[key] || { ...defaultLearn, objectives: [`Social Studies Lesson ${id}`] };
});