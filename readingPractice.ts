import { QuestionTemplate } from './questionUtils';

const REAL_PRACTICE: Record<string, QuestionTemplate[]> = {
    // --- KINDERGARTEN ---
    "101": [
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
    "102": [
        { q: "Rhymes with Cat?", options: ["Hat", "Dog", "Fish", "Car"], correctIndex: 0, hint: "-at sound", explanation: "Hat." },
        { q: "Rhymes with Pin?", options: ["Win", "Pen", "Pan", "Pig"], correctIndex: 0, hint: "-in sound", explanation: "Win." },
        { q: "Rhymes with Log?", options: ["Dog", "Leg", "Lug", "Bug"], correctIndex: 0, hint: "-og sound", explanation: "Dog." },
        { q: "Do 'Star' and 'Car' rhyme?", options: ["Yes", "No"], correctIndex: 0, hint: "Same ending", explanation: "Yes." },
        { q: "Rhymes with Bed?", options: ["Red", "Bad", "Bid", "Bud"], correctIndex: 0, hint: "-ed sound", explanation: "Red." },
        { q: "Rhymes with Sun?", options: ["Run", "Ran", "Ron", "Ren"], correctIndex: 0, hint: "-un.", explanation: "Run." },
        { q: "Rhymes with Fox?", options: ["Box", "Fix", "Fax", "Bus"], correctIndex: 0, hint: "-ox.", explanation: "Box." },
        { q: "Rhymes with Tree?", options: ["Bee", "Try", "Toe", "Ten"], correctIndex: 0, hint: "-ee.", explanation: "Bee." },
        { q: "Rhymes with Moon?", options: ["Spoon", "Man", "Men", "Mine"], correctIndex: 0, hint: "-oon.", explanation: "Spoon." },
        { q: "Rhymes with Map?", options: ["Cap", "Mop", "Mup", "Met"], correctIndex: 0, hint: "-ap.", explanation: "Cap." }
    ],
    "103": [
        { q: "Who is the story about?", options: ["Character", "Setting", "Plot"], correctIndex: 0, hint: "Person", explanation: "Character." },
        { q: "Where does it happen?", options: ["Setting", "Character", "Ending"], correctIndex: 0, hint: "Place", explanation: "Setting." },
        { q: "What happened first?", options: ["Beginning", "End", "Middle"], correctIndex: 0, hint: "Start", explanation: "Beginning." },
        { q: "Ask a question word.", options: ["Who", "Run", "Blue"], correctIndex: 0, hint: "?", explanation: "Who." },
        { q: "Why did he run?", options: ["To win", "To sleep"], correctIndex: 0, hint: "Reason", explanation: "To win." },
        { q: "Question mark?", options: ["?", "!", ".", ","], correctIndex: 0, hint: "Ask.", explanation: "?." },
        { q: "Where asks about?", options: ["Place", "Person", "Time", "Reason"], correctIndex: 0, hint: "Location.", explanation: "Place." },
        { q: "Who asks about?", options: ["Person", "Place", "Time", "Thing"], correctIndex: 0, hint: "Character.", explanation: "Person." },
        { q: "When asks about?", options: ["Time", "Place", "Person", "Reason"], correctIndex: 0, hint: "Clock.", explanation: "Time." },
        { q: "Why asks about?", options: ["Reason", "Time", "Place", "Person"], correctIndex: 0, hint: "Because.", explanation: "Reason." }
    ],
    "104": [
        { q: "Retell means?", options: ["Tell again", "Forget", "Sleep"], correctIndex: 0, hint: "Repeat", explanation: "Tell again." },
        { q: "Main character?", options: ["Hero", "Tree", "House"], correctIndex: 0, hint: "Person", explanation: "Hero." },
        { q: "The end is?", options: ["Last part", "First part"], correctIndex: 0, hint: "Finish", explanation: "Last part." },
        { q: "Setting of '3 Pigs'?", options: ["Houses", "Space", "Ocean"], correctIndex: 0, hint: "Place", explanation: "Houses." },
        { q: "Problem in story?", options: ["Something wrong", "Happy time"], correctIndex: 0, hint: "Conflict", explanation: "Something wrong." },
        { q: "Middle?", options: ["Between start/end", "First", "Last", "Cover"], correctIndex: 0, hint: "Center.", explanation: "Between start/end." },
        { q: "Events?", options: ["Things that happen", "Page numbers", "Cover", "Title"], correctIndex: 0, hint: "Action.", explanation: "Things that happen." },
        { q: "Plot?", options: ["Story plan", "Character name", "Setting", "Title"], correctIndex: 0, hint: "Events.", explanation: "Story plan." },
        { q: "Title?", options: ["Name of story", "Author", "End", "Start"], correctIndex: 0, hint: "Cover.", explanation: "Name of story." },
        { q: "Author?", options: ["Writes story", "Draws", "Reads", "Prints"], correctIndex: 0, hint: "Writer.", explanation: "Writes story." }
    ],

    // --- 1ST GRADE ---
    "201": [
        { q: "Short A sound?", options: ["Cat", "Cake", "Car"], correctIndex: 0, hint: "Ah", explanation: "Cat." },
        { q: "Long A sound?", options: ["Cake", "Cat", "Cap"], correctIndex: 0, hint: "Ay", explanation: "Cake." },
        { q: "Silent E makes vowel?", options: ["Long", "Short"], correctIndex: 0, hint: "Name", explanation: "Long." },
        { q: "Short I sound?", options: ["Pig", "Pie", "Pilot"], correctIndex: 0, hint: "Ih", explanation: "Pig." },
        { q: "Syllables in 'Banana'?", options: ["3", "2", "1"], correctIndex: 0, hint: "Clap", explanation: "3." },
        { q: "Long O sound?", options: ["Bone", "Box", "Bot", "Bog"], correctIndex: 0, hint: "Oh.", explanation: "Bone." },
        { q: "Magic E in 'Hop' makes?", options: ["Hope", "Hip", "Hup", "Hap"], correctIndex: 0, hint: "Long O.", explanation: "Hope." },
        { q: "Syllables in 'Cat'?", options: ["1", "2", "3", "0"], correctIndex: 0, hint: "Clap.", explanation: "1." },
        { q: "Vowel pair EE says?", options: ["Ee", "Eh", "Ay", "Eye"], correctIndex: 0, hint: "Tree.", explanation: "Ee." },
        { q: "Short E sound?", options: ["Bed", "Bead", "Bee", "Bean"], correctIndex: 0, hint: "Eh.", explanation: "Bed." }
    ],
    "202": [
        { q: "Sight word: THE", options: ["The", "Teh", "Het"], correctIndex: 0, hint: "T-H-E", explanation: "The." },
        { q: "Sight word: AND", options: ["And", "Dan", "End"], correctIndex: 0, hint: "A-N-D", explanation: "And." },
        { q: "Sight word: IS", options: ["Is", "Si", "Iz"], correctIndex: 0, hint: "I-S", explanation: "Is." },
        { q: "Sight word: OF", options: ["Of", "Off", "Ove"], correctIndex: 0, hint: "O-F", explanation: "Of." },
        { q: "Read: 'I ___ a dog.'", options: ["See", "Sea", "Saw"], correctIndex: 0, hint: "Look", explanation: "See." },
        { q: "Sight word: TO", options: ["To", "Ot", "Tu", "Ta"], correctIndex: 0, hint: "T-O.", explanation: "To." },
        { q: "Sight word: HE", options: ["He", "Eh", "Ha", "Hi"], correctIndex: 0, hint: "H-E.", explanation: "He." },
        { q: "Sight word: YOU", options: ["You", "Yew", "Uoy", "Yuo"], correctIndex: 0, hint: "Point.", explanation: "You." },
        { q: "Sight word: THAT", options: ["That", "Taht", "Thot", "Thet"], correctIndex: 0, hint: "T-H-A-T.", explanation: "That." },
        { q: "Sight word: IN", options: ["In", "Ni", "Im", "On"], correctIndex: 0, hint: "I-N.", explanation: "In." }
    ],
    "203": [
        { q: "Character trait?", options: ["Brave", "Tall", "Fast"], correctIndex: 0, hint: "Inside", explanation: "Brave." },
        { q: "Setting?", options: ["Forest", "Wolf", "Running"], correctIndex: 0, hint: "Place", explanation: "Forest." },
        { q: "Major event?", options: ["Wolf blew house", "Pig sat", "Sun shone"], correctIndex: 0, hint: "Action", explanation: "Wolf blew house." },
        { q: "Hero is?", options: ["Good guy", "Bad guy"], correctIndex: 0, hint: "Main", explanation: "Good guy." },
        { q: "Villain is?", options: ["Bad guy", "Friend"], correctIndex: 0, hint: "Enemy", explanation: "Bad guy." },
        { q: "Plot?", options: ["What happens", "Where", "Who", "When"], correctIndex: 0, hint: "Story.", explanation: "What happens." },
        { q: "Problem?", options: ["Something wrong", "Happy ending", "Title", "Page"], correctIndex: 0, hint: "Conflict.", explanation: "Something wrong." },
        { q: "Solution?", options: ["Fix", "Problem", "Start", "Middle"], correctIndex: 0, hint: "Answer.", explanation: "Fix." },
        { q: "Character feeling?", options: ["Happy", "Green", "Short", "Loud"], correctIndex: 0, hint: "Emotion.", explanation: "Happy." },
        { q: "Setting clue?", options: ["Trees and birds", "Talking", "Thinking", "Running"], correctIndex: 0, hint: "Outside.", explanation: "Trees and birds." }
    ],
    "204": [
        { q: "Lesson of 'Tortoise & Hare'?", options: ["Slow & steady", "Run fast"], correctIndex: 0, hint: "Moral", explanation: "Slow & steady." },
        { q: "Lesson of 'Boy Who Cried Wolf'?", options: ["Don't lie", "Yell loud"], correctIndex: 0, hint: "Truth", explanation: "Don't lie." },
        { q: "Central message?", options: ["Big idea", "Small detail"], correctIndex: 0, hint: "Theme", explanation: "Big idea." },
        { q: "Fables have?", options: ["Animals", "Aliens"], correctIndex: 0, hint: "Characters", explanation: "Animals." },
        { q: "Moral means?", options: ["Lesson", "End"], correctIndex: 0, hint: "Teach", explanation: "Lesson." },
        { q: "Ant and Grasshopper?", options: ["Work first", "Play always", "Sleep", "Dance"], correctIndex: 0, hint: "Prepare.", explanation: "Work first." },
        { q: "Lion and Mouse?", options: ["Little friends help", "Eat mouse", "Run away", "Sleep"], correctIndex: 0, hint: "Help.", explanation: "Little friends help." },
        { q: "Moral location?", options: ["End", "Start", "Middle", "Cover"], correctIndex: 0, hint: "Last.", explanation: "End." },
        { q: "Do fables have animals?", options: ["Yes", "No"], correctIndex: 0, hint: "Characters.", explanation: "Yes." },
        { q: "Main purpose?", options: ["Teach lesson", "Scare", "Bore", "Confuse"], correctIndex: 0, hint: "Learn.", explanation: "Teach lesson." }
    ],

    // --- 2ND GRADE ---
    "301": [
        { q: "Main topic?", options: ["Subject", "Title"], correctIndex: 0, hint: "What about", explanation: "Subject." },
        { q: "Key detail?", options: ["Fact", "Opinion"], correctIndex: 0, hint: "Support", explanation: "Fact." },
        { q: "Paragraphs have?", options: ["Main idea", "No point"], correctIndex: 0, hint: "Focus", explanation: "Main idea." },
        { q: "Connection?", options: ["Link ideas", "Separate"], correctIndex: 0, hint: "Join", explanation: "Link ideas." },
        { q: "Conclusion?", options: ["End", "Start"], correctIndex: 0, hint: "Wrap up", explanation: "End." },
        { q: "Index?", options: ["Page finder", "Map", "Story", "Cover"], correctIndex: 0, hint: "Back.", explanation: "Page finder." },
        { q: "Table of Contents?", options: ["Chapter list", "Glossary", "Index", "Title"], correctIndex: 0, hint: "Front.", explanation: "Chapter list." },
        { q: "Caption?", options: ["Explains picture", "Title", "Page #", "Author"], correctIndex: 0, hint: "Under image.", explanation: "Explains picture." },
        { q: "Diagram?", options: ["Labeled picture", "Story", "Poem", "Song"], correctIndex: 0, hint: "Parts.", explanation: "Labeled picture." },
        { q: "Bold text?", options: ["Important word", "Mistake", "End", "Start"], correctIndex: 0, hint: "Dark.", explanation: "Important word." }
    ],
    "302": [
        { q: "Structure?", options: ["Start, Middle, End", "Random"], correctIndex: 0, hint: "Order", explanation: "Start, Middle, End." },
        { q: "Point of View?", options: ["Who tells story", "Where"], correctIndex: 0, hint: "Narrator", explanation: "Who tells story." },
        { q: "Dialogue?", options: ["Talking", "Thinking"], correctIndex: 0, hint: "Speech", explanation: "Talking." },
        { q: "Voice?", options: ["Character style", "Volume"], correctIndex: 0, hint: "Sound", explanation: "Character style." },
        { q: "Author writes?", options: ["Words", "Pictures"], correctIndex: 0, hint: "Text", explanation: "Words." },
        { q: "Narrator?", options: ["Storyteller", "Reader", "Paper", "Pen"], correctIndex: 0, hint: "Voice.", explanation: "Storyteller." },
        { q: "First person?", options: ["I/Me", "He/She", "They", "You"], correctIndex: 0, hint: "Self.", explanation: "I/Me." },
        { q: "Third person?", options: ["He/She", "I", "We", "Me"], correctIndex: 0, hint: "Other.", explanation: "He/She." },
        { q: "Problem happens in?", options: ["Middle", "End", "Start", "Cover"], correctIndex: 0, hint: "Conflict.", explanation: "Middle." },
        { q: "Solution happens in?", options: ["End", "Start", "Middle", "Cover"], correctIndex: 0, hint: "Fix.", explanation: "End." }
    ],
    "303": [
        { q: "Noun?", options: ["Cat", "Run"], correctIndex: 0, hint: "Thing", explanation: "Cat." },
        { q: "Verb?", options: ["Jump", "Blue"], correctIndex: 0, hint: "Action", explanation: "Jump." },
        { q: "Proper noun?", options: ["London", "city"], correctIndex: 0, hint: "Name", explanation: "London." },
        { q: "Plural?", options: ["Dogs", "Dog"], correctIndex: 0, hint: "Many", explanation: "Dogs." },
        { q: "Irregular plural?", options: ["Mice", "Mouses"], correctIndex: 0, hint: "Tricky", explanation: "Mice." },
        { q: "Noun is a...", options: ["Thing", "Action", "Describe", "Link"], correctIndex: 0, hint: "Person/Place.", explanation: "Thing." },
        { q: "Verb is a...", options: ["Action", "Thing", "Name", "Color"], correctIndex: 0, hint: "Do.", explanation: "Action." },
        { q: "Collective noun?", options: ["Group", "One", "Action", "Place"], correctIndex: 0, hint: "Team.", explanation: "Group." },
        { q: "Pronoun?", options: ["He/She", "Run", "Blue", "Cat"], correctIndex: 0, hint: "Replace.", explanation: "He/She." },
        { q: "Possessive?", options: ["Shows ownership", "Plural", "Action", "Color"], correctIndex: 0, hint: "'s.", explanation: "Shows ownership." }
    ],
    "304": [
        { q: "Adjective?", options: ["Blue", "Run"], correctIndex: 0, hint: "Describe", explanation: "Blue." },
        { q: "Adverb?", options: ["Fast", "Cat"], correctIndex: 0, hint: "How", explanation: "Fast." },
        { q: "Describe Noun?", options: ["Adjective", "Verb"], correctIndex: 0, hint: "Feature", explanation: "Adjective." },
        { q: "Describe Verb?", options: ["Adverb", "Noun"], correctIndex: 0, hint: "Action detail", explanation: "Adverb." },
        { q: "Superlative?", options: ["Biggest", "Big"], correctIndex: 0, hint: "Most", explanation: "Biggest." },
        { q: "Comparative?", options: ["-er", "-est", "-ing", "-ed"], correctIndex: 0, hint: "Compare 2.", explanation: "-er." },
        { q: "Simple sentence?", options: ["Subject + Predicate", "Just words", "No verb"], correctIndex: 0, hint: "Basic.", explanation: "Subject + Predicate." },
        { q: "Complex sentence?", options: ["Combined ideas", "One idea", "No verb", "One word"], correctIndex: 0, hint: "Longer.", explanation: "Combined ideas." },
        { q: "Conjunction?", options: ["And/But", "Cat/Dog", "Run/Jump", "Blue/Red"], correctIndex: 0, hint: "Join.", explanation: "And/But." },
        { q: "Adverb ending?", options: ["-ly", "-ed", "-s", "-er"], correctIndex: 0, hint: "Common.", explanation: "-ly." }
    ],

    // --- 3RD GRADE ---
    "401": [
        { q: "Main Idea?", options: ["Big point", "Detail"], correctIndex: 0, hint: "Focus", explanation: "Big point." },
        { q: "Detail supports?", options: ["Main Idea", "Title"], correctIndex: 0, hint: "Back up", explanation: "Main Idea." },
        { q: "Topic vs Main Idea?", options: ["Topic is short", "Same"], correctIndex: 0, hint: "Length", explanation: "Topic is short." },
        { q: "Summary?", options: ["Short retelling", "Long copy"], correctIndex: 0, hint: "Brief", explanation: "Short retelling." },
        { q: "Irrelevant detail?", options: ["Does not fit", "Fits"], correctIndex: 0, hint: "Extra", explanation: "Does not fit." },
        { q: "Supporting detail...", options: ["Explains main idea", "Is the title", "Is the author", "Is the end"], correctIndex: 0, hint: "Support.", explanation: "Explains." },
        { q: "Where to find Main Idea?", options: ["First/Last sentence", "Middle word", "Page number", "Cover color"], correctIndex: 0, hint: "Look at start.", explanation: "First/Last sentence." },
        { q: "Topic vs Main Idea", options: ["Topic is short, Main Idea is sentence", "Same thing", "Topic is longer", "Main Idea is one word"], correctIndex: 0, hint: "Length.", explanation: "Topic is short, Main Idea is sentence." },
        { q: "Does every story have a main idea?", options: ["Yes", "No"], correctIndex: 0, hint: "Point.", explanation: "Yes." },
        { q: "Detail: The car is red. Main Idea?", options: ["My new car", "Bicycles", "Walking", "Boats"], correctIndex: 0, hint: "Topic.", explanation: "My new car." }
    ],
    "402": [
        { q: "Cause?", options: ["Why it happened", "What happened"], correctIndex: 0, hint: "Reason", explanation: "Why it happened." },
        { q: "Effect?", options: ["Result", "Reason"], correctIndex: 0, hint: "Outcome", explanation: "Result." },
        { q: "Signal word?", options: ["Because", "Tree"], correctIndex: 0, hint: "Link", explanation: "Because." },
        { q: "Rain causes?", options: ["Wet ground", "Dry ground"], correctIndex: 0, hint: "Logic", explanation: "Wet ground." },
        { q: "Fire causes?", options: ["Heat", "Cold"], correctIndex: 0, hint: "Logic", explanation: "Heat." },
        { q: "Ice melts because?", options: ["Heat", "Cold", "Dark", "Wind"], correctIndex: 0, hint: "Warm.", explanation: "Heat." },
        { q: "Study causes?", options: ["Good grades", "Bad grades", "Sleep", "Hunger"], correctIndex: 0, hint: "Learn.", explanation: "Good grades." },
        { q: "Fall causes?", options: ["Pain/Injury", "Flying", "Laughing", "Sleeping"], correctIndex: 0, hint: "Ouch.", explanation: "Pain/Injury." },
        { q: "Signal: Therefore?", options: ["Effect", "Cause", "Noun", "Verb"], correctIndex: 0, hint: "So.", explanation: "Effect." },
        { q: "Signal: Due to?", options: ["Cause", "Effect", "Noun", "Verb"], correctIndex: 0, hint: "Reason.", explanation: "Cause." }
    ],
    "403": [
        { q: "Prefix 'Un-'?", options: ["Not", "Very"], correctIndex: 0, hint: "Undo", explanation: "Not." },
        { q: "Suffix '-less'?", options: ["Without", "More"], correctIndex: 0, hint: "None", explanation: "Without." },
        { q: "Root word?", options: ["Base", "End"], correctIndex: 0, hint: "Core", explanation: "Base." },
        { q: "Prefix 'Re-'?", options: ["Again", "Not"], correctIndex: 0, hint: "Redo", explanation: "Again." },
        { q: "Suffix '-ful'?", options: ["Full of", "Empty"], correctIndex: 0, hint: "Plenty", explanation: "Full of." },
        { q: "Dis- means?", options: ["Not/Opposite", "Very", "Again", "With"], correctIndex: 0, hint: "Disagree.", explanation: "Not/Opposite." },
        { q: "-ful means?", options: ["Full of", "Without", "Action", "Person"], correctIndex: 0, hint: "Plenty.", explanation: "Full of." },
        { q: "Pre- means?", options: ["Before", "After", "Not", "Again"], correctIndex: 0, hint: "Preheat.", explanation: "Before." },
        { q: "Bi- means?", options: ["Two", "One", "Three", "Four"], correctIndex: 0, hint: "Bicycle.", explanation: "Two." },
        { q: "Base of 'Reading'?", options: ["Read", "Ing", "Re", "Ding"], correctIndex: 0, hint: "Root.", explanation: "Read." }
    ],
    "404": [
        { q: "Literal?", options: ["Real meaning", "Figure of speech"], correctIndex: 0, hint: "Fact", explanation: "Real meaning." },
        { q: "Non-literal?", options: ["Idiom", "Fact"], correctIndex: 0, hint: "Figure", explanation: "Idiom." },
        { q: "Piece of cake?", options: ["Easy", "Dessert"], correctIndex: 0, hint: "Idiom", explanation: "Easy." },
        { q: "Simile?", options: ["Like/As", "Is"], correctIndex: 0, hint: "Compare", explanation: "Like/As." },
        { q: "Metaphor?", options: ["Is", "Like"], correctIndex: 0, hint: "Direct", explanation: "Is." },
        { q: "Break a leg?", options: ["Good luck", "Get hurt", "Run fast", "Dance"], correctIndex: 0, hint: "Showbiz.", explanation: "Good luck." },
        { q: "Raining cats and dogs?", options: ["Heavy rain", "Pets falling", "Sunny", "Snow"], correctIndex: 0, hint: "Storm.", explanation: "Heavy rain." },
        { q: "Cold feet?", options: ["Nervous", "Cold toes", "Sick", "Tired"], correctIndex: 0, hint: "Scared.", explanation: "Nervous." },
        { q: "Hyperbole?", options: ["Exaggeration", "Truth", "Lie", "Question"], correctIndex: 0, hint: "Big.", explanation: "Exaggeration." },
        { q: "As fast as a cheetah?", options: ["Simile", "Metaphor", "Fact", "Literal"], correctIndex: 0, hint: "Like/As.", explanation: "Simile." }
    ],

    // --- 4TH GRADE ---
    "501": [
        { q: "Chronological?", options: ["Time order", "Size"], correctIndex: 0, hint: "Clock", explanation: "Time order." },
        { q: "Compare/Contrast?", options: ["Same/Diff", "Time"], correctIndex: 0, hint: "Venn", explanation: "Same/Diff." },
        { q: "Problem/Solution?", options: ["Fix issue", "Story"], correctIndex: 0, hint: "Solve", explanation: "Fix issue." },
        { q: "Cause/Effect?", options: ["Why/Result", "List"], correctIndex: 0, hint: "Because", explanation: "Why/Result." },
        { q: "Description?", options: ["Details", "Time"], correctIndex: 0, hint: "About", explanation: "Details." },
        { q: "Sequence?", options: ["Steps", "Map", "Drawing", "Photo"], correctIndex: 0, hint: "1,2,3.", explanation: "Steps." },
        { q: "Signal word: Both?", options: ["Compare", "Contrast", "Sequence", "Cause"], correctIndex: 0, hint: "Same.", explanation: "Compare." },
        { q: "Signal word: Because?", options: ["Cause/Effect", "Compare", "Sequence", "Problem"], correctIndex: 0, hint: "Why.", explanation: "Cause/Effect." },
        { q: "Signal word: First?", options: ["Sequence", "Compare", "Cause", "Problem"], correctIndex: 0, hint: "Order.", explanation: "Sequence." },
        { q: "Signal word: However?", options: ["Contrast", "Compare", "Sequence", "Description"], correctIndex: 0, hint: "Different.", explanation: "Contrast." }
    ],
    "502": [
        { q: "Summarize?", options: ["Key points", "All words"], correctIndex: 0, hint: "Short", explanation: "Key points." },
        { q: "Objective?", options: ["Fact", "Opinion"], correctIndex: 0, hint: "Real", explanation: "Fact." },
        { q: "Main idea?", options: ["Central point", "Detail"], correctIndex: 0, hint: "Big", explanation: "Central point." },
        { q: "Quote?", options: ["Exact words", "Paraphrase"], correctIndex: 0, hint: "Marks", explanation: "Exact words." },
        { q: "Paraphrase?", options: ["Own words", "Copy"], correctIndex: 0, hint: "Rewrite", explanation: "Own words." },
        { q: "Subjective?", options: ["Opinion based", "Fact based", "True", "Real"], correctIndex: 0, hint: "Feelings.", explanation: "Opinion based." },
        { q: "Key point?", options: ["Important info", "Tiny detail", "Title", "Page #"], correctIndex: 0, hint: "Vital.", explanation: "Important info." },
        { q: "Does summary have opinion?", options: ["No", "Yes"], correctIndex: 0, hint: "Neutral.", explanation: "No." },
        { q: "Summarize story?", options: ["B-M-E", "End only", "Start only", "Characters"], correctIndex: 0, hint: "Whole thing.", explanation: "B-M-E." },
        { q: "Summarize info text?", options: ["Main ideas", "Jokes", "Pictures", "Ads"], correctIndex: 0, hint: "Facts.", explanation: "Main ideas." }
    ],
    "503": [
        { q: "Theme?", options: ["Message", "Topic"], correctIndex: 0, hint: "Lesson", explanation: "Message." },
        { q: "Universal theme?", options: ["Friendship", "Pizza"], correctIndex: 0, hint: "Everyone", explanation: "Friendship." },
        { q: "Implicit?", options: ["Hidden", "Stated"], correctIndex: 0, hint: "Infer", explanation: "Hidden." },
        { q: "Explicit?", options: ["Stated", "Hidden"], correctIndex: 0, hint: "Clear", explanation: "Stated." },
        { q: "Theme vs Topic?", options: ["Lesson vs Subject", "Same"], correctIndex: 0, hint: "Meaning", explanation: "Lesson vs Subject." },
        { q: "Fable theme", options: ["Moral", "Joke", "End", "Start"], correctIndex: 0, hint: "Lesson.", explanation: "Moral." },
        { q: "Theme of 'Tortoise & Hare'", options: ["Slow and steady wins", "Fast is best", "Sleep more", "Rabbits win"], correctIndex: 0, hint: "Pace.", explanation: "Slow and steady wins." },
        { q: "Can a story have multiple themes?", options: ["Yes", "No"], correctIndex: 0, hint: "Many lessons.", explanation: "Yes." },
        { q: "Theme: Good vs...", options: ["Evil", "Bad", "Nice", "Happy"], correctIndex: 0, hint: "Villain.", explanation: "Evil." },
        { q: "Find theme by analyzing...", options: ["Character change", "Word count", "Cover color", "Font size"], correctIndex: 0, hint: "Growth.", explanation: "Character change." }
    ],
    "504": [
        { q: "Trait?", options: ["Personality", "Action"], correctIndex: 0, hint: "Inside", explanation: "Personality." },
        { q: "Motivation?", options: ["Why", "What"], correctIndex: 0, hint: "Reason", explanation: "Why." },
        { q: "Protagonist?", options: ["Hero", "Villain"], correctIndex: 0, hint: "Main", explanation: "Hero." },
        { q: "Antagonist?", options: ["Villain", "Hero"], correctIndex: 0, hint: "Bad", explanation: "Villain." },
        { q: "Inference?", options: ["Clue + Know", "Guess"], correctIndex: 0, hint: "Deduce", explanation: "Clue + Know." },
        { q: "Dynamic character?", options: ["Changes", "Stays same"], correctIndex: 0, hint: "Grow.", explanation: "Changes." },
        { q: "Static character?", options: ["Stays same", "Changes"], correctIndex: 0, hint: "Flat.", explanation: "Stays same." },
        { q: "Trait examples?", options: ["Brave/Kind", "Running/Jumping"], correctIndex: 0, hint: "Adjectives.", explanation: "Brave/Kind." },
        { q: "Action vs Trait?", options: ["Do vs Is", "Same"], correctIndex: 0, hint: "Verb vs Adj.", explanation: "Do vs Is." },
        { q: "Conflict?", options: ["Problem", "Solution"], correctIndex: 0, hint: "Fight.", explanation: "Problem." }
    ],

    // --- 5TH GRADE ---
    "601": [
        { q: "Quote accurately?", options: ["Exact words", "Change words"], correctIndex: 0, hint: "Precise", explanation: "Exact words." },
        { q: "Inference?", options: ["Evidence based", "Guess"], correctIndex: 0, hint: "Clues", explanation: "Evidence based." },
        { q: "Theme?", options: ["Life lesson", "Title"], correctIndex: 0, hint: "Moral", explanation: "Life lesson." },
        { q: "Support?", options: ["Back up", "Fall"], correctIndex: 0, hint: "Proof", explanation: "Back up." },
        { q: "Explicit?", options: ["In text", "In head"], correctIndex: 0, hint: "There", explanation: "In text." },
        { q: "Quotation marks?", options: ["\" \"", ". .", ", ,"], correctIndex: 0, hint: "Speech.", explanation: "\" \"." },
        { q: "Draw conclusion?", options: ["Final thought", "Start", "Middle", "Detail"], correctIndex: 0, hint: "End.", explanation: "Final thought." },
        { q: "Textual evidence?", options: ["From book", "From head"], correctIndex: 0, hint: "Source.", explanation: "From book." },
        { q: "Cite?", options: ["Credit source", "Copy"], correctIndex: 0, hint: "Name.", explanation: "Credit source." },
        { q: "Evidence?", options: ["Proof", "Opinion"], correctIndex: 0, hint: "Fact.", explanation: "Proof." }
    ],
    "602": [
        { q: "Compare?", options: ["Similarities", "Differences"], correctIndex: 0, hint: "Like", explanation: "Similarities." },
        { q: "Contrast?", options: ["Differences", "Similarities"], correctIndex: 0, hint: "Unlike", explanation: "Differences." },
        { q: "Genre?", options: ["Type", "Title"], correctIndex: 0, hint: "Kind", explanation: "Type." },
        { q: "Visuals?", options: ["Pictures", "Words"], correctIndex: 0, hint: "See", explanation: "Pictures." },
        { q: "Tone?", options: ["Attitude", "Sound"], correctIndex: 0, hint: "Mood", explanation: "Attitude." },
        { q: "Perspective?", options: ["Viewpoint", "Location"], correctIndex: 0, hint: "Angle.", explanation: "Viewpoint." },
        { q: "Theme comparison?", options: ["Same message?", "Same font?"], correctIndex: 0, hint: "Lesson.", explanation: "Same message?" },
        { q: "Visual element?", options: ["Picture", "Word"], correctIndex: 0, hint: "See.", explanation: "Picture." },
        { q: "Multimedia?", options: ["Video/Audio", "Book only"], correctIndex: 0, hint: "Mix.", explanation: "Video/Audio." },
        { q: "Style?", options: ["How written", "What written"], correctIndex: 0, hint: "Form.", explanation: "How written." }
    ],
    "603": [
        { q: "Opinion?", options: ["Belief", "Fact"], correctIndex: 0, hint: "Think", explanation: "Belief." },
        { q: "Fact?", options: ["Proven", "Belief"], correctIndex: 0, hint: "True", explanation: "Proven." },
        { q: "Reason?", options: ["Why", "What"], correctIndex: 0, hint: "Support", explanation: "Why." },
        { q: "Link words?", options: ["Because", "Cat"], correctIndex: 0, hint: "Connect", explanation: "Because." },
        { q: "Conclusion?", options: ["Wrap up", "Start"], correctIndex: 0, hint: "End", explanation: "Wrap up." },
        { q: "Evidence?", options: ["Proof", "Guess"], correctIndex: 0, hint: "Data.", explanation: "Proof." },
        { q: "Persuade?", options: ["Convince", "Tell"], correctIndex: 0, hint: "Argue.", explanation: "Convince." },
        { q: "Introduction?", options: ["Hook/Thesis", "End"], correctIndex: 0, hint: "Start.", explanation: "Hook/Thesis." },
        { q: "Audience?", options: ["Readers", "Writer"], correctIndex: 0, hint: "Who.", explanation: "Readers." },
        { q: "Counter-argument?", options: ["Opposite view", "Same view"], correctIndex: 0, hint: "Against.", explanation: "Opposite view." }
    ],
    "604": [
        { q: "Research?", options: ["Find facts", "Guess"], correctIndex: 0, hint: "Study", explanation: "Find facts." },
        { q: "Source?", options: ["Origin", "Sauce"], correctIndex: 0, hint: "Where from", explanation: "Origin." },
        { q: "Reliable?", options: ["Trustworthy", "Fake"], correctIndex: 0, hint: "True", explanation: "Trustworthy." },
        { q: "Cite?", options: ["Credit", "Copy"], correctIndex: 0, hint: "Name", explanation: "Credit." },
        { q: "Plagiarism?", options: ["Stealing", "Writing"], correctIndex: 0, hint: "Bad", explanation: "Stealing." },
        { q: "Keyword?", options: ["Search term", "Password"], correctIndex: 0, hint: "Topic.", explanation: "Search term." },
        { q: "Summarize?", options: ["Shorten", "Lengthen"], correctIndex: 0, hint: "Brief.", explanation: "Shorten." },
        { q: "Note taking?", options: ["Writing key points", "Drawing"], correctIndex: 0, hint: "Remember.", explanation: "Writing key points." },
        { q: "Bibliography?", options: ["List of sources", "Story"], correctIndex: 0, hint: "End.", explanation: "List of sources." },
        { q: "Credible?", options: ["Believable", "False"], correctIndex: 0, hint: "Real.", explanation: "Believable." }
    ]
};

export const READING_PRACTICE: Record<string, QuestionTemplate[]> = {};

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
        q: `Reading Practice Q${startIdx + i + 1} (Lesson ${id}): Identify the meaning.`,
        options: ["Correct Meaning", "Wrong A", "Wrong B", "Wrong C"],
        correctIndex: 0,
        explanation: "Context clues help define the word."
    }));
};

allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_PRACTICE[key] || [];

    if (realQuestions.length >= 10) {
        READING_PRACTICE[key] = realQuestions.slice(0, 10);
    } else {
        const needed = 10 - realQuestions.length;
        const generated = generatePracticeSet(key, realQuestions.length).slice(0, needed);
        READING_PRACTICE[key] = [...realQuestions, ...generated];
    }
});

READING_PRACTICE['default'] = generatePracticeSet('General');