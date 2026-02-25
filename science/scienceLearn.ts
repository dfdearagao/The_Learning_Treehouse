import { LearnContent } from '../questionUtils';

const REAL_LEARN: Record<string, LearnContent> = {
    "101": { 
        objectives: ["Identify basic plant needs", "Understand seeds grow into plants", "Recognize parts of a plant"],
        learn: {
            type: 'flashcard', initialState: { content: "🌱", subtext: "Seed" },
            steps: [{ id: 1, prompt: "What does a seed need to grow?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌞 + 💧", subtext: "Sun & Water" }, feedback: { success: "Yes! Energy and hydration.", error: "" } }],
            quickCheck: []
        }
    },
    "102": {
        objectives: ["Five Senses", "Body parts", "Observation"],
        learn: {
            type: 'flashcard', initialState: { content: "👀", subtext: "Eye" },
            steps: [{ id: 1, prompt: "What do we do with eyes?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "See", subtext: "Sight" }, feedback: { success: "We use eyes to see!", error: "" } }],
            quickCheck: []
        }
    },
    "103": {
        objectives: ["Daily Weather", "Weather patterns", "Forecasting"],
        learn: {
            type: 'flashcard', initialState: { content: "☀️", subtext: "Sun" },
            steps: [{ id: 1, prompt: "What happens when clouds cover the sun?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "☁️", subtext: "Cloudy" }, feedback: { success: "It gets cloudy!", error: "" } }],
            quickCheck: []
        }
    },
    "104": {
        objectives: ["Four Seasons", "Seasonal changes", "Clothing"],
        learn: {
            type: 'flashcard', initialState: { content: "❄️", subtext: "Winter" },
            steps: [{ id: 1, prompt: "What comes after Winter?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌸", subtext: "Spring" }, feedback: { success: "Spring flowers bloom!", error: "" } }],
            quickCheck: []
        }
    },

    "201": { 
        objectives: ["Define Sound as vibration", "Identify Loud and Soft sounds", "Understand how we hear"],
        learn: {
            type: 'flashcard', initialState: { content: "🥁", subtext: "Drum" },
            steps: [{ id: 1, prompt: "When you hit a drum, it...", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "VIBRATE", subtext: "Shakes" }, feedback: { success: "Vibration makes sound!", error: "" } }],
            quickCheck: []
        }
    },
    "202": {
        objectives: ["Light and Shadows", "Transparency", "Reflection"],
        learn: {
            type: 'flashcard', initialState: { content: "🔦", subtext: "Flashlight" },
            steps: [{ id: 1, prompt: "Block the light to make a...", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Shadow", subtext: "Dark shape" }, feedback: { success: "You made a shadow!", error: "" } }],
            quickCheck: []
        }
    },
    "203": {
        objectives: ["Animal Parents and Babies", "Offspring", "Survival"],
        learn: {
            type: 'flashcard', initialState: { content: "🐶", subtext: "Dog" },
            steps: [{ id: 1, prompt: "What is a baby dog?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Puppy", subtext: "Offspring" }, feedback: { success: "A puppy looks like its parent!", error: "" } }],
            quickCheck: []
        }
    },
    "204": {
        objectives: ["Plant Parts", "Roots/Stems/Leaves", "Function"],
        learn: {
            type: 'flashcard', initialState: { content: "🌻", subtext: "Flower" },
            steps: [{ id: 1, prompt: "What holds the plant in dirt?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Roots", subtext: "Anchor" }, feedback: { success: "Roots drink water too!", error: "" } }],
            quickCheck: []
        }
    },

    "301": { 
        objectives: ["Differentiate Solids, Liquids, Gases", "Understand states of matter", "Observe physical changes"],
        learn: {
            type: 'flashcard', initialState: { content: "🧊", subtext: "Ice" },
            steps: [{ id: 1, prompt: "Ice is what state of matter?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "SOLID", subtext: "Hard" }, feedback: { success: "Correct, it keeps its shape.", error: "" } }],
            quickCheck: []
        }
    },
    "302": {
        objectives: ["Building Materials", "Strength/Flexibility", "Design"],
        learn: {
            type: 'flashcard', initialState: { content: "🧱", subtext: "Brick" },
            steps: [{ id: 1, prompt: "Is brick hard or soft?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Hard", subtext: "Strong" }, feedback: { success: "Good for building houses!", error: "" } }],
            quickCheck: []
        }
    },
    "303": {
        objectives: ["Fast and Slow Changes", "Erosion", "Volcanoes"],
        learn: {
            type: 'flashcard', initialState: { content: "⛰️", subtext: "Mountain" },
            steps: [{ id: 1, prompt: "How does wind change it?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Erosion", subtext: "Slow change" }, feedback: { success: "Wind wears it down slowly.", error: "" } }],
            quickCheck: []
        }
    },
    "304": {
        objectives: ["Forms of Water", "Solid/Liquid/Gas", "Water Cycle"],
        learn: {
            type: 'flashcard', initialState: { content: "💧", subtext: "Water" },
            steps: [{ id: 1, prompt: "Heat it up!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Steam", subtext: "Gas" }, feedback: { success: "Water becomes gas!", error: "" } }],
            quickCheck: []
        }
    },

    "401": {
        objectives: ["Push and Pull Forces", "Balanced forces", "Gravity/Friction"],
        learn: {
            type: 'flashcard', initialState: { content: "🛒", subtext: "Cart" },
            steps: [{ id: 1, prompt: "Move it away.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Push", subtext: "Force" }, feedback: { success: "A push moves things away!", error: "" } }],
            quickCheck: []
        }
    },
    "402": { 
        objectives: ["Identify magnetic poles", "Understand attraction vs repulsion", "Classify magnetic materials"],
        learn: {
            type: 'flashcard', initialState: { content: "🧲", subtext: "Magnet" },
            steps: [{ id: 1, prompt: "What happens when N meets S?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "ATTRACT", subtext: "Stick together" }, feedback: { success: "Opposites attract!", error: "" } }],
            quickCheck: []
        }
    },
    "403": {
        objectives: ["Life Cycles", "Metamorphosis", "Growth"],
        learn: {
            type: 'flashcard', initialState: { content: "🐛", subtext: "Caterpillar" },
            steps: [{ id: 1, prompt: "What does it become?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🦋", subtext: "Butterfly" }, feedback: { success: "Metamorphosis!", error: "" } }],
            quickCheck: []
        }
    },
    "404": {
        objectives: ["Inherited Traits", "Learned behaviors", "Genetics"],
        learn: {
            type: 'flashcard', initialState: { content: "Eye Color", subtext: "Trait" },
            steps: [{ id: 1, prompt: "Is this learned or inherited?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Inherited", subtext: "From parents" }, feedback: { success: "Born with it!", error: "" } }],
            quickCheck: []
        }
    },

    "501": {
        objectives: ["Forms of Energy", "Light/Heat/Sound", "Transfer"],
        learn: {
            type: 'flashcard', initialState: { content: "☀️", subtext: "Sun" },
            steps: [{ id: 1, prompt: "What energy does it give?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Light + Heat", subtext: "Energy" }, feedback: { success: "Powerful energy source!", error: "" } }],
            quickCheck: []
        }
    },
    "502": {
        objectives: ["Transfer of Energy", "Collisions", "Conversion"],
        learn: {
            type: 'flashcard', initialState: { content: "🎱", subtext: "Pool Ball" },
            steps: [{ id: 1, prompt: "Hit another ball.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Move", subtext: "Transfer" }, feedback: { success: "Energy transferred on impact!", error: "" } }],
            quickCheck: []
        }
    },
    "503": {
        objectives: ["Rocks and Fossils", "Types of rocks", "History of Earth"],
        learn: {
            type: 'flashcard', initialState: { content: "🦕", subtext: "Dino" },
            steps: [{ id: 1, prompt: "Turn to stone.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Fossil", subtext: "Rock Record" }, feedback: { success: "Fossils tell us about the past!", error: "" } }],
            quickCheck: []
        }
    },
    "504": { 
        objectives: ["Describe natural hazards", "Identify causes of natural disasters", "Understand safety procedures"],
        learn: {
            type: 'flashcard', initialState: { content: "🌋", subtext: "Volcano" },
            steps: [{ id: 1, prompt: "What comes out?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "LAVA", subtext: "Hot Rock" }, feedback: { success: "Explosive!", error: "" } }],
            quickCheck: []
        }
    },

    "601": {
        objectives: ["Particles of Matter", "Atoms", "Conservation"],
        learn: {
            type: 'flashcard', initialState: { content: "💧", subtext: "Water" },
            steps: [{ id: 1, prompt: "Zoom in!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "H2O", subtext: "Molecules" }, feedback: { success: "Everything is made of particles!", error: "" } }],
            quickCheck: []
        }
    },
    "602": {
        objectives: ["Chemical Changes", "Reactions", "New substances"],
        learn: {
            type: 'flashcard', initialState: { content: "🔥", subtext: "Fire" },
            steps: [{ id: 1, prompt: "Wood turns to...", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Ash", subtext: "Chemical Change" }, feedback: { success: "Cannot turn back to wood!", error: "" } }],
            quickCheck: []
        }
    },
    "603": { 
        objectives: ["Identify planets in order", "Understand orbit and rotation", "Describe features of the solar system"],
        learn: {
            type: 'flashcard', initialState: { content: "🌍", subtext: "Earth" },
            steps: [{ id: 1, prompt: "What does Earth orbit?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "☀️", subtext: "The Sun" }, feedback: { success: "One year per orbit.", error: "" } }],
            quickCheck: []
        }
    },
    "604": {
        objectives: ["Stars and Gravity", "Sun is a star", "Universe scale"],
        learn: {
            type: 'flashcard', initialState: { content: "🌟", subtext: "Star" },
            steps: [{ id: 1, prompt: "Why do we fall?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Gravity", subtext: "Pull" }, feedback: { success: "Gravity holds us down!", error: "" } }],
            quickCheck: []
        }
    }
};

export const SCIENCE_LEARN: Record<string, LearnContent> = {};

const defaultLearn: LearnContent = {
    objectives: ["Observe nature", "Form hypotheses", "Record data"],
    learn: { 
        type: 'flashcard', 
        initialState: { content: "🔬", subtext: "Examine" }, 
        steps: [
            { id: 1, prompt: "Look closer.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🦠", subtext: "Microbe" }, feedback: { success: "Wow!", error: "" } }
        ], 
        quickCheck: [] 
    }
};

const allIds = [
    ...Array.from({length: 4}, (_,i)=>101+i),
    ...Array.from({length: 4}, (_,i)=>201+i),
    ...Array.from({length: 4}, (_,i)=>301+i),
    ...Array.from({length: 4}, (_,i)=>401+i),
    ...Array.from({length: 4}, (_,i)=>501+i),
    ...Array.from({length: 4}, (_,i)=>601+i)
];

allIds.forEach(id => {
    const key = id.toString();
    SCIENCE_LEARN[key] = REAL_LEARN[key] || { ...defaultLearn, objectives: [`Science Lesson ${id}`] };
});