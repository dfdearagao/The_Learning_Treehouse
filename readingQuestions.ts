import { LessonContent } from './questionUtils';

export const READING_CONTENT: Record<string, LessonContent> = {
    // --- KINDERGARTEN ---
    "101": { 
        objectives: ["Identify letters A-Z", "Recognize letter sounds", "Match uppercase and lowercase"],
        learn: {
            type: 'flashcard',
            initialState: { content: "A", subtext: "Apple" },
            steps: [
                { id: 1, prompt: "What starts with A?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🍎", subtext: "Apple" }, feedback: { success: "A is for Apple!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Letter A sound?", options: ["Ah", "Buh", "Cuh", "Duh"], correctIndex: 0, hint: "Apple.", explanation: "Ah." },
            { q: "Find the B", options: ["B", "D", "P", "Q"], correctIndex: 0, hint: "Ball.", explanation: "B." },
            { q: "Letter C says?", options: ["Cuh", "Duh", "Ah", "Buh"], correctIndex: 0, hint: "Cat.", explanation: "Cuh." },
            { q: "Is D for Dog?", options: ["Yes", "No"], correctIndex: 0, hint: "Woof.", explanation: "Yes." },
            { q: "Find the M", options: ["M", "W", "N", "H"], correctIndex: 0, hint: "Mom.", explanation: "M." },
            { q: "Which starts with S?", options: ["Sun", "Moon", "Cat", "Dog"], correctIndex: 0, hint: "Snake.", explanation: "Sun." },
            { q: "T says?", options: ["Tuh", "Sss", "Mmm", "Ah"], correctIndex: 0, hint: "Top.", explanation: "Tuh." },
            { q: "Is Z the last letter?", options: ["Yes", "No"], correctIndex: 0, hint: "End.", explanation: "Yes." },
            { q: "Find the O", options: ["O", "Q", "C", "D"], correctIndex: 0, hint: "Circle.", explanation: "O." },
            { q: "A, B, C, _?", options: ["D", "E", "F", "G"], correctIndex: 0, hint: "Order.", explanation: "D." }
        ], 
        quiz: [
            { q: "First letter of alphabet?", options: ["A", "B", "C", "Z"], correctIndex: 0, hint: "Start.", explanation: "A." },
            { q: "Which letter is round?", options: ["O", "L", "T", "X"], correctIndex: 0, hint: "Circle.", explanation: "O." },
            { q: "Identify: B", options: ["Bee", "Cee", "Dee", "Ay"], correctIndex: 0, hint: "Buzz.", explanation: "B." },
            { q: "Sound of S?", options: ["Snake sound", "Buzz", "Pop", "Mmm"], correctIndex: 0, hint: "Hiss.", explanation: "Snake sound (Sss)." },
            { q: "Capital letter for a name?", options: ["Yes", "No"], correctIndex: 0, hint: "Big letter.", explanation: "Yes." },
            { q: "Which is a vowel?", options: ["A", "B", "C", "D"], correctIndex: 0, hint: "AEIOU.", explanation: "A." },
            { q: "Letter after C?", options: ["D", "E", "B", "F"], correctIndex: 0, hint: "ABCD.", explanation: "D." },
            { q: "Last letter?", options: ["Z", "A", "Y", "X"], correctIndex: 0, hint: "End.", explanation: "Z." },
            { q: "Small letter: M", options: ["m", "n", "w", "u"], correctIndex: 0, hint: "Mini.", explanation: "m." },
            { q: "Big letter: r", options: ["R", "P", "B", "D"], correctIndex: 0, hint: "Royal.", explanation: "R." },
            { q: "How many letters in CAT?", options: ["3", "2", "4", "1"], correctIndex: 0, hint: "C-A-T.", explanation: "3." },
            { q: "Start of 'Dog'?", options: ["D", "B", "P", "G"], correctIndex: 0, hint: "Duh.", explanation: "D." },
            { q: "Rhymes with Bat?", options: ["Cat", "Dog", "Pig", "Cow"], correctIndex: 0, hint: "-at.", explanation: "Cat." },
            { q: "Vowel in 'Pig'?", options: ["I", "A", "E", "O"], correctIndex: 0, hint: "Ih sound.", explanation: "I." },
            { q: "Letter with a dot?", options: ["i", "t", "l", "h"], correctIndex: 0, hint: "Small i.", explanation: "i." }
        ] 
    },

    // --- 1ST GRADE ---
    "202": { 
        objectives: ["Read common sight words", "Improve reading fluency", "Identify words in context"],
        learn: {
            type: 'flashcard',
            initialState: { content: "THE", subtext: "Sight Word" },
            steps: [
                { id: 1, prompt: "Tap to read the sentence.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "The Cat", subtext: "The cat sat." }, feedback: { success: "Good job!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Sight word: THE", options: ["The", "Teh", "Het", "Eth"], correctIndex: 0, hint: "T-H-E.", explanation: "The." },
            { q: "Sight word: AND", options: ["And", "Dan", "Nad", "Dna"], correctIndex: 0, hint: "A-N-D.", explanation: "And." },
            { q: "Sight word: IS", options: ["Is", "Si", "Iz", "Se"], correctIndex: 0, hint: "I-S.", explanation: "Is." },
            { q: "Sight word: IT", options: ["It", "Ti", "Et", "At"], correctIndex: 0, hint: "I-T.", explanation: "It." },
            { q: "Sight word: IN", options: ["In", "Ni", "Im", "On"], correctIndex: 0, hint: "I-N.", explanation: "In." },
            { q: "Sight word: TO", options: ["To", "Ot", "Tu", "Ta"], correctIndex: 0, hint: "T-O.", explanation: "To." },
            { q: "Sight word: HE", options: ["He", "Eh", "Ha", "Hi"], correctIndex: 0, hint: "H-E.", explanation: "He." },
            { q: "Sight word: YOU", options: ["You", "Yew", "Uoy", "Yuo"], correctIndex: 0, hint: "Point.", explanation: "You." },
            { q: "Sight word: THAT", options: ["That", "Taht", "Thot", "Thet"], correctIndex: 0, hint: "T-H-A-T.", explanation: "That." },
            { q: "Sight word: OF", options: ["Of", "Ov", "Off", "Ef"], correctIndex: 0, hint: "O-F.", explanation: "Of." }
        ], 
        quiz: [
            { q: "Spell IS", options: ["Is", "Si", "Iz", "Se"], correctIndex: 0, hint: "I-S.", explanation: "Is." },
            { q: "Sight word: AND", options: ["And", "Dan", "End", "Ant"], correctIndex: 0, hint: "A-N-D.", explanation: "And." },
            { q: "Opposite of Yes?", options: ["No", "Maybe", "Okay", "Sure"], correctIndex: 0, hint: "Refuse.", explanation: "No." },
            { q: "Sight word: YOU", options: ["You", "Yew", "Uoy", "Yuo"], correctIndex: 0, hint: "Point.", explanation: "You." },
            { q: "Which is a color?", options: ["Blue", "Blew", "Bool", "Bell"], correctIndex: 0, hint: "Sky.", explanation: "Blue." },
            { q: "Sight word: FOR", options: ["For", "Four", "Fore", "Far"], correctIndex: 0, hint: "Gift.", explanation: "For." },
            { q: "Sight word: SAID", options: ["Said", "Sed", "Sayed", "Sad"], correctIndex: 0, hint: "Talked.", explanation: "Said." },
            { q: "Sight word: LOOK", options: ["Look", "Luk", "Loc", "Like"], correctIndex: 0, hint: "Eyes.", explanation: "Look." },
            { q: "Sight word: PLAY", options: ["Play", "Pla", "Ply", "Pay"], correctIndex: 0, hint: "Fun.", explanation: "Play." },
            { q: "Sight word: MAKE", options: ["Make", "Maik", "Mac", "Meke"], correctIndex: 0, hint: "Create.", explanation: "Make." },
            { q: "Sight word: BIG", options: ["Big", "Beg", "Bog", "Bug"], correctIndex: 0, hint: "Large.", explanation: "Big." },
            { q: "Sight word: HELP", options: ["Help", "Hepl", "Hulp", "Hap"], correctIndex: 0, hint: "Aid.", explanation: "Help." },
            { q: "Sight word: RUN", options: ["Run", "Ran", "Ron", "Ren"], correctIndex: 0, hint: "Fast.", explanation: "Run." },
            { q: "Sight word: JUMP", options: ["Jump", "Jumped", "Jomp", "Gump"], correctIndex: 0, hint: "Hop.", explanation: "Jump." },
            { q: "Sight word: WE", options: ["We", "Wi", "Wa", "Wii"], correctIndex: 0, hint: "Us.", explanation: "We." }
        ] 
    },

    // --- 2ND GRADE ---
    "303": { 
        objectives: ["Identify Nouns (Person, Place, Thing)", "Identify Verbs (Action Words)", "Differentiate common and proper nouns"],
        learn: {
            type: 'flashcard',
            initialState: { content: "DOG", subtext: "Word" },
            steps: [
                { id: 1, prompt: "Is Dog a person, place, or thing?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "THING", subtext: "Noun" }, feedback: { success: "Yes, it's a noun!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Noun is a...", options: ["Thing", "Action", "Describe", "Link"], correctIndex: 0, hint: "Person/Place.", explanation: "Thing." },
            { q: "Verb is a...", options: ["Action", "Thing", "Name", "Color"], correctIndex: 0, hint: "Do.", explanation: "Action." },
            { q: "Identify Noun", options: ["Cat", "Run", "Blue", "Fast"], correctIndex: 0, hint: "Animal.", explanation: "Cat." },
            { q: "Identify Verb", options: ["Jump", "Dog", "House", "Tree"], correctIndex: 0, hint: "Action.", explanation: "Jump." },
            { q: "Proper Noun?", options: ["Sam", "boy", "girl", "dog"], correctIndex: 0, hint: "Name.", explanation: "Sam." },
            { q: "Common Noun?", options: ["city", "London", "Paris", "Rome"], correctIndex: 0, hint: "Not specific.", explanation: "city." },
            { q: "Plural Noun", options: ["Dogs", "Dog", "Run", "Blue"], correctIndex: 0, hint: "More than one.", explanation: "Dogs." },
            { q: "Past Tense Verb", options: ["Walked", "Walk", "Walking", "Will Walk"], correctIndex: 0, hint: "Already happened.", explanation: "Walked." },
            { q: "Identify Noun", options: ["School", "Study", "Learn", "Read"], correctIndex: 0, hint: "Place.", explanation: "School." },
            { q: "Identify Verb", options: ["Sing", "Song", "Music", "Note"], correctIndex: 0, hint: "Action.", explanation: "Sing." }
        ], 
        quiz: [
            { q: "Identify Noun", options: ["Dog", "Run", "Fast", "Blue"], correctIndex: 0, hint: "Animal.", explanation: "Dog." },
            { q: "Identify Verb", options: ["Jump", "Cat", "House", "Tree"], correctIndex: 0, hint: "Action.", explanation: "Jump." },
            { q: "Proper Noun?", options: ["London", "city", "town", "village"], correctIndex: 0, hint: "Capital letter.", explanation: "London." },
            { q: "Which is a Place?", options: ["School", "Teacher", "Pencil", "Study"], correctIndex: 0, hint: "Building.", explanation: "School." },
            { q: "Plural of Cat?", options: ["Cats", "Cat's", "Cates", "Catts"], correctIndex: 0, hint: "Add s.", explanation: "Cats." },
            { q: "Plural of Box?", options: ["Boxes", "Boxs", "Boxies", "Boxez"], correctIndex: 0, hint: "Add es.", explanation: "Boxes." },
            { q: "Identify Pronoun", options: ["He", "Boy", "Man", "Dad"], correctIndex: 0, hint: "Replaces name.", explanation: "He." },
            { q: "Past tense of Run?", options: ["Ran", "Runned", "Running", "Ranned"], correctIndex: 0, hint: "Yesterday.", explanation: "Ran." },
            { q: "Is 'Happy' a Noun?", options: ["No", "Yes"], correctIndex: 0, hint: "Feeling.", explanation: "No (Adjective)." },
            { q: "Identify Verb", options: ["Sleep", "Bed", "Pillow", "Night"], correctIndex: 0, hint: "Do it.", explanation: "Sleep." },
            { q: "Identify Noun", options: ["Apple", "Eat", "Red", "Sweet"], correctIndex: 0, hint: "Fruit.", explanation: "Apple." },
            { q: "Proper Noun?", options: ["Sarah", "girl", "sister", "friend"], correctIndex: 0, hint: "Name.", explanation: "Sarah." },
            { q: "Plural of Mouse?", options: ["Mice", "Mouses", "Moose", "Meese"], correctIndex: 0, hint: "Tricky.", explanation: "Mice." },
            { q: "Past tense of Jump?", options: ["Jumped", "Jumping", "Jumps", "Jamt"], correctIndex: 0, hint: "Add ed.", explanation: "Jumped." },
            { q: "Which is a Thing?", options: ["Ball", "Throw", "Catch", "Hit"], correctIndex: 0, hint: "Object.", explanation: "Ball." }
        ] 
    },

    // --- 3RD GRADE ---
    "401": { 
        objectives: ["Determine the Main Idea", "Identify Supporting Details", "Differentiate Topic vs Main Idea"],
        learn: {
            type: 'flashcard',
            initialState: { content: "STORY", subtext: "Read" },
            steps: [
                { id: 1, prompt: "The dog played ball. He had fun.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "IDEA", subtext: "Playing Ball" }, feedback: { success: "That's the main idea!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Main Idea is...", options: ["What it's about", "Detail", "Character", "Setting"], correctIndex: 0, hint: "Big picture.", explanation: "Topic." },
            { q: "Supporting detail...", options: ["Explains main idea", "Is the title", "Is the author", "Is the end"], correctIndex: 0, hint: "Support.", explanation: "Explains." },
            { q: "Where to find Main Idea?", options: ["First/Last sentence", "Middle word", "Page number", "Cover color"], correctIndex: 0, hint: "Look at start.", explanation: "First/Last sentence." },
            { q: "Topic vs Main Idea", options: ["Topic is short, Main Idea is sentence", "Same thing", "Topic is longer", "Main Idea is one word"], correctIndex: 0, hint: "Length.", explanation: "Topic is short, Main Idea is sentence." },
            { q: "Detail supports the...", options: ["Main Idea", "Title", "Date", "Barcode"], correctIndex: 0, hint: "Big picture.", explanation: "Main Idea." },
            { q: "Main Idea of paragraph about dogs?", options: ["Dogs are great pets", "Cats meow", "Fish swim", "Birds fly"], correctIndex: 0, hint: "Topic.", explanation: "Dogs are great pets." },
            { q: "Does every story have a main idea?", options: ["Yes", "No"], correctIndex: 0, hint: "Point.", explanation: "Yes." },
            { q: "Summary includes...", options: ["Main Idea + Key Details", "Every word", "The ending only", "Opinions"], correctIndex: 0, hint: "Short version.", explanation: "Main Idea + Key Details." },
            { q: "Detail: The car is red. Main Idea?", options: ["My new car", "Bicycles", "Walking", "Boats"], correctIndex: 0, hint: "Topic.", explanation: "My new car." },
            { q: "Which is a detail?", options: ["He wore a blue hat", "The story of a boy", "Friendship", "Bravery"], correctIndex: 0, hint: "Specific.", explanation: "He wore a blue hat." }
        ], 
        quiz: [
            { q: "Topic Sentence location?", options: ["First sentence", "Last", "Middle", "Anywhere"], correctIndex: 0, hint: "Start.", explanation: "Usually first." },
            { q: "Supporting detail...", options: ["Explains main idea", "Is the title", "Is unrelated", "Is a question"], correctIndex: 0, hint: "Support.", explanation: "Explains main idea." },
            { q: "Title gives clue about?", options: ["Main Idea", "Author's birthday", "Page count", "Font size"], correctIndex: 0, hint: "Name.", explanation: "Main Idea." },
            { q: "Main Idea of 'Three Little Pigs'?", options: ["Hard work pays off", "Wolves are nice", "Straw is strong", "Pigs can fly"], correctIndex: 0, hint: "Lesson.", explanation: "Hard work pays off." },
            { q: "Detail about a dog?", options: ["Has fur", "Is a cat", "Can fly", "Is purple"], correctIndex: 0, hint: "Fact.", explanation: "Has fur." },
            { q: "Summary length?", options: ["Short", "Long", "Whole book", "One word"], correctIndex: 0, hint: "Brief.", explanation: "Short." },
            { q: "Main Idea vs Topic?", options: ["Main idea is specific message", "Topic is longer", "Same thing", "Topic is sentence"], correctIndex: 0, hint: "Topic is 1-2 words.", explanation: "Main idea is the specific message." },
            { q: "Irrelevant detail?", options: ["Does not fit", "Supports idea", "Key fact", "Example"], correctIndex: 0, hint: "Extra.", explanation: "Does not fit." },
            { q: "Conclusion sentence?", options: ["Wraps up", "Introduces", "Asks question", "Lists detail"], correctIndex: 0, hint: "End.", explanation: "Wraps up." },
            { q: "Main idea of a recipe?", options: ["How to cook", "History of food", "Chef biography", "Farming"], correctIndex: 0, hint: "Instructions.", explanation: "How to cook." },
            { q: "Infer main idea?", options: ["Use clues", "Guess wildly", "Ask teacher", "Skip it"], correctIndex: 0, hint: "Thinking.", explanation: "Use clues." },
            { q: "Identify theme?", options: ["Lesson learned", "Character name", "Setting", "Plot"], correctIndex: 0, hint: "Message.", explanation: "Lesson learned." },
            { q: "Detail supports?", options: ["Main Idea", "Title", "Page number", "Cover art"], correctIndex: 0, hint: "Backs up.", explanation: "Main Idea." },
            { q: "Fact or Opinion in summary?", options: ["Facts", "Opinions"], correctIndex: 0, hint: "True.", explanation: "Facts." },
            { q: "Purpose of main idea?", options: ["Tell what text is about", "Confuse reader", "Hide info", "Fill space"], correctIndex: 0, hint: "Inform.", explanation: "Tell what text is about." }
        ] 
    },

    // --- 4TH GRADE ---
    "503": { 
        objectives: ["Identify the Theme", "Distinguish Theme from Topic", "Analyze character lessons"],
        learn: {
            type: 'flashcard',
            initialState: { content: "FABLE", subtext: "Tortoise & Hare" },
            steps: [
                { id: 1, prompt: "Who won the race?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "SLOW", subtext: "Slow and steady wins." }, feedback: { success: "That is the theme!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Theme is...", options: ["Message", "Title", "Topic", "Character"], correctIndex: 0, hint: "Lesson.", explanation: "Message." },
            { q: "Universal theme?", options: ["Love/Friendship", "Bob's hat", "Tuesday", "Rain"], correctIndex: 0, hint: "Everyone.", explanation: "Love/Friendship." },
            { q: "Implicit theme", options: ["Hidden", "Stated", "Title", "Cover"], correctIndex: 0, hint: "Infer.", explanation: "Hidden." },
            { q: "Explicit theme", options: ["Stated directly", "Hidden", "Secret", "Unknown"], correctIndex: 0, hint: "Clear.", explanation: "Stated directly." },
            { q: "Theme vs Topic", options: ["Theme is message, Topic is subject", "Same", "Topic is message", "Theme is one word"], correctIndex: 0, hint: "Lesson vs Subject.", explanation: "Theme is message, Topic is subject." },
            { q: "Fable theme", options: ["Moral", "Joke", "End", "Start"], correctIndex: 0, hint: "Lesson.", explanation: "Moral." },
            { q: "Theme of 'Tortoise & Hare'", options: ["Slow and steady wins", "Fast is best", "Sleep more", "Rabbits win"], correctIndex: 0, hint: "Pace.", explanation: "Slow and steady wins." },
            { q: "Can a story have multiple themes?", options: ["Yes", "No"], correctIndex: 0, hint: "Many lessons.", explanation: "Yes." },
            { q: "Theme: Good vs...", options: ["Evil", "Bad", "Nice", "Happy"], correctIndex: 0, hint: "Villain.", explanation: "Evil." },
            { q: "Find theme by analyzing...", options: ["Character change", "Word count", "Cover color", "Font size"], correctIndex: 0, hint: "Growth.", explanation: "Character change." }
        ], 
        quiz: [
            { q: "Implicit theme", options: ["Hidden/Inferred", "Stated clearly"], correctIndex: 0, hint: "Infer.", explanation: "Hidden/Inferred." },
            { q: "Universal theme?", options: ["Love/Friendship", "Bob's hat", "Tuesday", "Rain"], correctIndex: 0, hint: "Everyone.", explanation: "Love/Friendship." },
            { q: "Theme of 'Tortoise & Hare'?", options: ["Slow and steady", "Fast is best", "Sleeping is good", "Rabbits lose"], correctIndex: 0, hint: "Win race.", explanation: "Slow and steady." },
            { q: "Can a story have two themes?", options: ["Yes", "No"], correctIndex: 0, hint: "Multiple lessons.", explanation: "Yes." },
            { q: "Theme vs Plot?", options: ["Theme is message, Plot is events", "Same thing", "Plot is message", "Theme is characters"], correctIndex: 0, hint: "Meaning vs Action.", explanation: "Theme is message, Plot is events." },
            { q: "Common theme in fairy tales?", options: ["Good vs Evil", "Taxes", "Science", "Cooking"], correctIndex: 0, hint: "Hero vs Villain.", explanation: "Good vs Evil." },
            { q: "Theme of 'Boy Who Cried Wolf'?", options: ["Honesty", "Shepherding", "Wolves", "Hiking"], correctIndex: 0, hint: "Truth.", explanation: "Honesty." },
            { q: "Stated theme", options: ["Author tells you", "You guess", "Hidden", "Secret"], correctIndex: 0, hint: "Explicit.", explanation: "Author tells you." },
            { q: "Fable theme is called?", options: ["Moral", "Joke", "End", "Title"], correctIndex: 0, hint: "Lesson.", explanation: "Moral." },
            { q: "Courage theme?", options: ["Facing fear", "Running away", "Hiding", "Sleeping"], correctIndex: 0, hint: "Brave.", explanation: "Facing fear." },
            { q: "Friendship theme?", options: ["Helping others", "Being mean", "Ignoring", "Fighting"], correctIndex: 0, hint: "Kindness.", explanation: "Helping others." },
            { q: "Perseverance means?", options: ["Never giving up", "Quitting", "Being lazy", "Winning easy"], correctIndex: 0, hint: "Keep trying.", explanation: "Never giving up." },
            { q: "Theme of 'Cinderella'?", options: ["Kindness rewarded", "Shoes fit", "Pumpkins grow", "Mice talk"], correctIndex: 0, hint: "Good heart.", explanation: "Kindness rewarded." },
            { q: "Is 'Space' a theme?", options: ["No, it's a topic", "Yes"], correctIndex: 0, hint: "Topic vs Message.", explanation: "No, it's a topic (Theme would be 'Exploration')." },
            { q: "How to find theme?", options: ["Analyze character change", "Count words", "Look at cover", "Read title only"], correctIndex: 0, hint: "Growth.", explanation: "Analyze character change." }
        ] 
    },

    // Fallback
    "default": { 
        objectives: ["Read the passage", "Understand the meaning", "Answer questions"],
        learn: {
            type: 'flashcard',
            initialState: { content: "A", subtext: "Apple" },
            steps: [
                { id: 1, prompt: "What starts with A?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🍎", subtext: "Apple" }, feedback: { success: "A is for Apple!", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "Reading is fun?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Books have pages?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Authors write?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Illustrators draw?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Library has books?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Stories have a start?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Stories have an end?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Characters are people?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "Setting is place?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" },
            { q: "We read left to right?", options: ["Yes", "No"], correctIndex: 0, hint: "Yes", explanation: "Yes" }
        ], 
        quiz: [
            { q: "Read?", options: ["Book", "Shoe", "Wall", "Sky"], correctIndex: 0, hint: "Pages", explanation: "Book" },
            { q: "Author writes?", options: ["Words", "Pictures", "Paper", "Glue"], correctIndex: 0, hint: "Text", explanation: "Words" },
            { q: "Illustrator draws?", options: ["Pictures", "Words", "Lines", "Shapes"], correctIndex: 0, hint: "Art", explanation: "Pictures" },
            { q: "Cover is on?", options: ["Outside", "Inside", "Middle", "End"], correctIndex: 0, hint: "Front", explanation: "Outside" },
            { q: "Title is?", options: ["Name of book", "Author name", "Price", "Date"], correctIndex: 0, hint: "Name", explanation: "Name of book" },
            { q: "Character is?", options: ["Person", "Place", "Time", "Object"], correctIndex: 0, hint: "Who", explanation: "Person" },
            { q: "Setting is?", options: ["Where", "Who", "What", "Why"], correctIndex: 0, hint: "Place", explanation: "Where" },
            { q: "Plot is?", options: ["Events", "Cover", "Page", "Ink"], correctIndex: 0, hint: "Story", explanation: "Events" },
            { q: "Beginning is?", options: ["Start", "End", "Middle", "Stop"], correctIndex: 0, hint: "First", explanation: "Start" },
            { q: "End is?", options: ["Finish", "Start", "Go", "Run"], correctIndex: 0, hint: "Last", explanation: "Finish" },
            { q: "Library has?", options: ["Books", "Cars", "Food", "Beds"], correctIndex: 0, hint: "Read", explanation: "Books" },
            { q: "Fiction is?", options: ["Made up", "Real", "News", "Fact"], correctIndex: 0, hint: "Story", explanation: "Made up" },
            { q: "Non-fiction is?", options: ["Real", "Fake", "Dream", "Joke"], correctIndex: 0, hint: "Fact", explanation: "Real" },
            { q: "Period goes?", options: ["At end", "At start", "In middle", "Nowhere"], correctIndex: 0, hint: "Stop", explanation: "At end" },
            { q: "Question mark?", options: ["Asks something", "Yells", "Stops", "Pauses"], correctIndex: 0, hint: "?", explanation: "Asks something" }
        ] 
    }
};