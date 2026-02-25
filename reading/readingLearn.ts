import { LearnContent } from '../questionUtils';

const REAL_LEARN: Record<string, LearnContent> = {
    // --- KINDERGARTEN ---
    "101": { 
        objectives: ["Identify letters A-Z", "Recognize letter sounds", "Match uppercase and lowercase"],
        learn: {
            type: 'flashcard', initialState: { content: "A", subtext: "Apple" },
            steps: [{ id: 1, prompt: "What starts with A?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🍎", subtext: "Apple" }, feedback: { success: "A is for Apple!", error: "" } }],
            quickCheck: []
        }
    },
    "102": {
        objectives: ["Recognize rhyming words", "Produce simple rhymes", "Identify ending sounds"],
        learn: {
            type: 'flashcard', initialState: { content: "Cat", subtext: "Meow" },
            steps: [{ id: 1, prompt: "What rhymes with Cat?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Bat", subtext: "Cat - Bat" }, feedback: { success: "They rhyme!", error: "" } }],
            quickCheck: []
        }
    },
    "103": {
        objectives: ["Ask questions about text", "Answer who/what/where", "Listen actively"],
        learn: {
            type: 'flashcard', initialState: { content: "?", subtext: "Ask" },
            steps: [{ id: 1, prompt: "Tap to ask a question.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Who?", subtext: "Who is the hero?" }, feedback: { success: "Great question!", error: "" } }],
            quickCheck: []
        }
    },
    "104": {
        objectives: ["Retell stories", "Identify characters", "Sequence events"],
        learn: {
            type: 'flashcard', initialState: { content: "📖", subtext: "Story" },
            steps: [{ id: 1, prompt: "What happens first?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Start", subtext: "Once upon a time..." }, feedback: { success: "The beginning!", error: "" } }],
            quickCheck: []
        }
    },

    // --- 1ST GRADE ---
    "201": {
        objectives: ["Long vs Short Vowels", "Silent E rule", "Syllables"],
        learn: {
            type: 'flashcard', initialState: { content: "Cap", subtext: "Short A" },
            steps: [{ id: 1, prompt: "Add Magic E!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Cape", subtext: "Long A" }, feedback: { success: "Magic E makes the vowel say its name!", error: "" } }],
            quickCheck: []
        }
    },
    "202": { 
        objectives: ["Read common sight words", "Improve reading fluency", "Identify words in context"],
        learn: {
            type: 'flashcard', initialState: { content: "THE", subtext: "Sight Word" },
            steps: [{ id: 1, prompt: "Tap to read the sentence.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "The Cat", subtext: "The cat sat." }, feedback: { success: "Good job!", error: "" } }],
            quickCheck: []
        }
    },
    "203": {
        objectives: ["Describe characters", "Identify setting", "Explain major events"],
        learn: {
            type: 'flashcard', initialState: { content: "🦸", subtext: "Hero" },
            steps: [{ id: 1, prompt: "Is the hero brave?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Yes!", subtext: "Brave Character" }, feedback: { success: "Character trait identified!", error: "" } }],
            quickCheck: []
        }
    },
    "204": {
        objectives: ["Identify lesson of story", "Central message", "Retell to support message"],
        learn: {
            type: 'flashcard', initialState: { content: "Moral", subtext: "Lesson" },
            steps: [{ id: 1, prompt: "What did we learn?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Share", subtext: "Sharing is caring" }, feedback: { success: "That's the lesson!", error: "" } }],
            quickCheck: []
        }
    },

    // --- 2ND GRADE ---
    "301": {
        objectives: ["Reading comprehension", "Main topic", "Connection of ideas"],
        learn: {
            type: 'flashcard', initialState: { content: "Book", subtext: "Topic" },
            steps: [{ id: 1, prompt: "What is this book about?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Space", subtext: "Main Topic" }, feedback: { success: "You found the topic!", error: "" } }],
            quickCheck: []
        }
    },
    "302": {
        objectives: ["Structure of story", "Points of view", "Illustrations"],
        learn: {
            type: 'flashcard', initialState: { content: "Start", subtext: "Beginning" },
            steps: [{ id: 1, prompt: "What comes next?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Middle", subtext: "Action" }, feedback: { success: "The story continues!", error: "" } }],
            quickCheck: []
        }
    },
    "303": { 
        objectives: ["Identify Nouns/Verbs", "Collective nouns", "Irregular plurals"],
        learn: {
            type: 'flashcard', initialState: { content: "DOG", subtext: "Word" },
            steps: [{ id: 1, prompt: "Is Dog a person, place, or thing?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "THING", subtext: "Noun" }, feedback: { success: "Yes, it's a noun!", error: "" } }],
            quickCheck: []
        }
    },
    "304": {
        objectives: ["Adjectives and Adverbs", "Descriptive words", "Sentence structure"],
        learn: {
            type: 'flashcard', initialState: { content: "Run", subtext: "Verb" },
            steps: [{ id: 1, prompt: "Describe how to run.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Fast", subtext: "Adverb" }, feedback: { success: "Run fast!", error: "" } }],
            quickCheck: []
        }
    },

    // --- 3RD GRADE ---
    "401": { 
        objectives: ["Determine Main Idea", "Identify Supporting Details", "Differentiate Topic vs Main Idea"],
        learn: {
            type: 'flashcard', initialState: { content: "STORY", subtext: "Read" },
            steps: [{ id: 1, prompt: "The dog played ball. He had fun.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "IDEA", subtext: "Playing Ball" }, feedback: { success: "That's the main idea!", error: "" } }],
            quickCheck: []
        }
    },
    "402": {
        objectives: ["Cause and Effect", "Relationship between events", "Text evidence"],
        learn: {
            type: 'flashcard', initialState: { content: "Rain", subtext: "Cause" },
            steps: [{ id: 1, prompt: "What happens because of rain?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Wet", subtext: "Effect" }, feedback: { success: "Rain causes wetness!", error: "" } }],
            quickCheck: []
        }
    },
    "403": {
        objectives: ["Prefixes and Suffixes", "Root words", "Word meaning"],
        learn: {
            type: 'flashcard', initialState: { content: "Happy", subtext: "Root" },
            steps: [{ id: 1, prompt: "Add 'Un' to the start.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Unhappy", subtext: "Not Happy" }, feedback: { success: "Prefix changed the meaning!", error: "" } }],
            quickCheck: []
        }
    },
    "404": {
        objectives: ["Literal vs Non-literal", "Metaphors/Similes", "Word nuances"],
        learn: {
            type: 'flashcard', initialState: { content: "Piece of Cake", subtext: "Idiom" },
            steps: [{ id: 1, prompt: "Does it mean actual cake?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Easy", subtext: "Means 'It is easy'" }, feedback: { success: "You got the non-literal meaning!", error: "" } }],
            quickCheck: []
        }
    },

    // --- 4TH GRADE ---
    "501": {
        objectives: ["Text Structure", "Compare/Contrast", "Interpret charts"],
        learn: {
            type: 'flashcard', initialState: { content: "Text", subtext: "Structure" },
            steps: [{ id: 1, prompt: "How is it organized?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Sequence", subtext: "First, Next, Last" }, feedback: { success: "Chronological order!", error: "" } }],
            quickCheck: []
        }
    },
    "502": {
        objectives: ["Summarize Text", "Main idea support", "Explain details"],
        learn: {
            type: 'flashcard', initialState: { content: "Long Text", subtext: "Read" },
            steps: [{ id: 1, prompt: "Make it shorter.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Summary", subtext: "Key Points Only" }, feedback: { success: "Perfect summary!", error: "" } }],
            quickCheck: []
        }
    },
    "503": { 
        objectives: ["Identify the Theme", "Distinguish Theme from Topic", "Analyze character lessons"],
        learn: {
            type: 'flashcard', initialState: { content: "FABLE", subtext: "Tortoise & Hare" },
            steps: [{ id: 1, prompt: "Who won the race?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "SLOW", subtext: "Slow and steady wins." }, feedback: { success: "That is the theme!", error: "" } }],
            quickCheck: []
        }
    },
    "504": {
        objectives: ["Character Analysis", "Traits and motivations", "Draw inferences"],
        learn: {
            type: 'flashcard', initialState: { content: "Character", subtext: "Actions" },
            steps: [{ id: 1, prompt: "Why did he do that?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Motivation", subtext: "He was hungry" }, feedback: { success: "Understanding motivation is key!", error: "" } }],
            quickCheck: []
        }
    },

    // --- 5TH GRADE ---
    "601": {
        objectives: ["Quote Accurately", "Draw inferences", "Determine theme"],
        learn: {
            type: 'flashcard', initialState: { content: "Text", subtext: "Evidence" },
            steps: [{ id: 1, prompt: "Prove it.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Quote", subtext: "'The text says...'" }, feedback: { success: "Citing evidence is important!", error: "" } }],
            quickCheck: []
        }
    },
    "602": {
        objectives: ["Compare Stories", "Compare characters", "Analyze visual elements"],
        learn: {
            type: 'flashcard', initialState: { content: "Story A vs B", subtext: "Compare" },
            steps: [{ id: 1, prompt: "Find similarities.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Same Theme", subtext: "Both about friendship" }, feedback: { success: "Good comparison!", error: "" } }],
            quickCheck: []
        }
    },
    "603": {
        objectives: ["Write Opinion Pieces", "Support point of view", "Link opinion and reasons"],
        learn: {
            type: 'flashcard', initialState: { content: "Opinion", subtext: "I think..." },
            steps: [{ id: 1, prompt: "Why do you think that?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Reason", subtext: "Because..." }, feedback: { success: "Always support your opinion!", error: "" } }],
            quickCheck: []
        }
    },
    "604": {
        objectives: ["Research Projects", "Gather information", "Recall relevant info"],
        learn: {
            type: 'flashcard', initialState: { content: "Topic", subtext: "Research" },
            steps: [{ id: 1, prompt: "Find facts.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Sources", subtext: "Books & Websites" }, feedback: { success: "Gathering reliable info!", error: "" } }],
            quickCheck: []
        }
    }
};

export const READING_LEARN: Record<string, LearnContent> = {};

// Generator for fallback
const defaultLearn: LearnContent = {
    objectives: ["Read the passage", "Understand vocabulary", "Answer context questions"],
    learn: { 
        type: 'flashcard', 
        initialState: { content: "📖", subtext: "Read" }, 
        steps: [
            { id: 1, prompt: "Open the book.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Start", subtext: "Reading..." }, feedback: { success: "Great!", error: "" } }
        ], 
        quickCheck: [] 
    }
};

// Populate the export with Real Data + Fallbacks for any missing IDs in range
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
    READING_LEARN[key] = REAL_LEARN[key] || { ...defaultLearn, objectives: [`Master concepts for Lesson ${id}`] };
});