import { QuestionTemplate } from '../questionUtils';

const REAL_ASSESS: Record<string, QuestionTemplate[]> = {
    // --- KINDERGARTEN ---
    "101": [
        { q: "First letter of alphabet?", options: ["A", "B", "C", "Z"], correctIndex: 0, hint: "Start.", explanation: "A." },
        { q: "Which letter is round?", options: ["L", "T", "O", "X"], correctIndex: 2, hint: "Circle.", explanation: "O." },
        { q: "Identify: B", options: ["Bee", "B", "Dee", "Ay"], correctIndex: 1, hint: "Buzz.", explanation: "B." },
        { q: "Sound of S?", options: ["Buzz", "Pop", "Mmm", "Snake sound"], correctIndex: 3, hint: "Hiss.", explanation: "Snake sound." },
        { q: "Capital letter for a name?", options: ["No", "Yes"], correctIndex: 1, hint: "Big.", explanation: "Yes." },
        { q: "Identify: Z", options: ["Zee", "Ay", "Z", "Cee"], correctIndex: 2, hint: "Last.", explanation: "Z." },
        { q: "What letter comes after C?", options: ["D", "E", "B", "F"], correctIndex: 0, hint: "ABCD", explanation: "D." },
        { q: "Which is a vowel?", options: ["B", "C", "A", "D"], correctIndex: 2, hint: "AEIOU", explanation: "A." },
        { q: "Lowercase of T?", options: ["l", "t", "i", "j"], correctIndex: 1, hint: "Small.", explanation: "t." },
        { q: "Sound of M?", options: ["Buh", "Duh", "Mmm", "Sss"], correctIndex: 2, hint: "Yummy.", explanation: "Mmm." },
        { q: "Letter before B?", options: ["C", "D", "E", "A"], correctIndex: 3, hint: "First.", explanation: "A." },
        { q: "Letter after Y?", options: ["Z", "X", "W", "A"], correctIndex: 0, hint: "Last.", explanation: "Z." },
        { q: "Is 'cat' a letter?", options: ["No", "Yes"], correctIndex: 0, hint: "Word.", explanation: "No." },
        { q: "Sound of P?", options: ["Buh", "Puh", "Duh", "Sss"], correctIndex: 1, hint: "Pop.", explanation: "Puh." },
        { q: "Uppercase of 'a'?", options: ["B", "C", "D", "A"], correctIndex: 3, hint: "Big.", explanation: "A." }
    ],
    "102": [
        { q: "Rhymes with Bat?", options: ["Dog", "Cat", "Pig", "Cow"], correctIndex: 1, hint: "-at.", explanation: "Cat." },
        { q: "Rhymes with Log?", options: ["Dog", "Leg", "Lug", "Bug"], correctIndex: 0, hint: "-og.", explanation: "Dog." },
        { q: "Rhymes with Sun?", options: ["Ran", "Ron", "Run", "Ren"], correctIndex: 2, hint: "-un.", explanation: "Run." },
        { q: "Rhymes with Pig?", options: ["Bag", "Beg", "Bug", "Big"], correctIndex: 3, hint: "-ig.", explanation: "Big." },
        { q: "Rhymes with Red?", options: ["Bad", "Bed", "Bid", "Bud"], correctIndex: 1, hint: "-ed.", explanation: "Bed." },
        { q: "Rhymes with Fox?", options: ["Box", "Fix", "Fax", "Bus"], correctIndex: 0, hint: "-ox.", explanation: "Box." },
        { q: "Rhymes with Car?", options: ["Cat", "Can", "Star", "Cap"], correctIndex: 2, hint: "-ar.", explanation: "Star." },
        { q: "Rhymes with Tree?", options: ["Try", "Toe", "Ten", "Bee"], correctIndex: 3, hint: "-ee.", explanation: "Bee." },
        { q: "Rhymes with Moon?", options: ["Spoon", "Man", "Men", "Mine"], correctIndex: 0, hint: "-oon.", explanation: "Spoon." },
        { q: "Rhymes with Map?", options: ["Mop", "Cap", "Mup", "Met"], correctIndex: 1, hint: "-ap.", explanation: "Cap." },
        { q: "Rhymes with House?", options: ["Horse", "Hose", "Mouse", "Hat"], correctIndex: 2, hint: "Squeak.", explanation: "Mouse." },
        { q: "Rhymes with Go?", options: ["Now", "New", "Not", "No"], correctIndex: 3, hint: "Stop.", explanation: "No." },
        { q: "Rhymes with Wall?", options: ["Tall", "Will", "Well", "Wool"], correctIndex: 0, hint: "Height.", explanation: "Tall." },
        { q: "Rhymes with Ring?", options: ["Rang", "Sing", "Rung", "Run"], correctIndex: 1, hint: "Song.", explanation: "Sing." },
        { q: "Rhymes with Fish?", options: ["Dash", "Flash", "Dish", "Fast"], correctIndex: 2, hint: "Plate.", explanation: "Dish." }
    ],
    "103": [
        { q: "Question word?", options: ["Run", "Blue", "Fast", "Who"], correctIndex: 3, hint: "Ask.", explanation: "Who." },
        { q: "Question mark?", options: ["?", "!", ".", ","], correctIndex: 0, hint: "Ask.", explanation: "?." },
        { q: "Where asks about?", options: ["Person", "Place", "Time", "Reason"], correctIndex: 1, hint: "Location.", explanation: "Place." },
        { q: "Who asks about?", options: ["Place", "Time", "Person", "Thing"], correctIndex: 2, hint: "Character.", explanation: "Person." },
        { q: "When asks about?", options: ["Time", "Place", "Person", "Reason"], correctIndex: 0, hint: "Clock.", explanation: "Time." },
        { q: "Why asks about?", options: ["Time", "Reason", "Place", "Person"], correctIndex: 1, hint: "Because.", explanation: "Reason." },
        { q: "What asks about?", options: ["Time", "Place", "Thing/Action", "Person"], correctIndex: 2, hint: "Object.", explanation: "Thing/Action." },
        { q: "Which word starts a question?", options: ["Cat", "Run", "Blue", "How"], correctIndex: 3, hint: "Ask.", explanation: "How." },
        { q: "Does a period end a question?", options: ["No", "Yes"], correctIndex: 0, hint: "?", explanation: "No." },
        { q: "Answer to 'Who is that?'", options: ["The park", "My mom", "Tomorrow", "Because"], correctIndex: 1, hint: "Person.", explanation: "My mom." },
        { q: "Ask about choice?", options: ["Who", "Where", "Which", "When"], correctIndex: 2, hint: "Pick.", explanation: "Which." },
        { q: "Is 'The dog ran' a question?", options: ["No", "Yes"], correctIndex: 0, hint: "Statement.", explanation: "No." },
        { q: "Symbol for question?", options: ["!", ".", "?", "#"], correctIndex: 2, hint: "Hook.", explanation: "?." },
        { q: "Answer to 'Where are you?'", options: ["John", "At home", "Today", "Because"], correctIndex: 1, hint: "Place.", explanation: "At home." },
        { q: "How asks about?", options: ["Time", "Person", "Place", "Way/Method"], correctIndex: 3, hint: "Process.", explanation: "Way/Method." }
    ],
    "104": [
        { q: "Beginning?", options: ["End", "Start", "Middle", "Stop"], correctIndex: 1, hint: "First.", explanation: "Start." },
        { q: "Character?", options: ["Person", "Place", "Time", "Object"], correctIndex: 0, hint: "Who.", explanation: "Person." },
        { q: "Setting?", options: ["Who", "What", "Where", "Why"], correctIndex: 2, hint: "Place.", explanation: "Where." },
        { q: "End?", options: ["First", "Middle", "Start", "Last"], correctIndex: 3, hint: "Finish.", explanation: "Last." },
        { q: "Retell?", options: ["Tell again", "Forget", "Sleep", "Eat"], correctIndex: 0, hint: "Repeat.", explanation: "Tell again." },
        { q: "Middle?", options: ["First", "Between start/end", "Last", "Cover"], correctIndex: 1, hint: "Center.", explanation: "Between start/end." },
        { q: "Events?", options: ["Page numbers", "Cover", "Things that happen", "Title"], correctIndex: 2, hint: "Action.", explanation: "Things that happen." },
        { q: "Plot?", options: ["Character name", "Setting", "Title", "Story plan"], correctIndex: 3, hint: "Events.", explanation: "Story plan." },
        { q: "Title?", options: ["Name of story", "Author", "End", "Start"], correctIndex: 0, hint: "Cover.", explanation: "Name of story." },
        { q: "Author?", options: ["Draws", "Writes story", "Reads", "Prints"], correctIndex: 1, hint: "Writer.", explanation: "Writes story." },
        { q: "Illustrator?", options: ["Writes words", "Reads", "Draws pictures", "Binds"], correctIndex: 2, hint: "Art.", explanation: "Draws pictures." },
        { q: "Problem?", options: ["Happy ending", "Title", "Name", "Something wrong"], correctIndex: 3, hint: "Trouble.", explanation: "Something wrong." },
        { q: "Solution?", options: ["Fixes problem", "Causes problem", "Start", "End"], correctIndex: 0, hint: "Answer.", explanation: "Fixes problem." },
        { q: "Cover?", options: ["Middle", "Front of book", "Back only", "Page 1"], correctIndex: 1, hint: "Outside.", explanation: "Front of book." },
        { q: "Page number?", options: ["Tells author", "Tells title", "Tells order", "Tells price"], correctIndex: 2, hint: "Count.", explanation: "Tells order." }
    ],

    // --- 1ST GRADE ---
    "201": [
        { q: "Long A sound?", options: ["Cat", "Car", "Cap", "Cake"], correctIndex: 3, hint: "Ay.", explanation: "Cake." },
        { q: "Short E sound?", options: ["Bed", "Bead", "Bee", "Bean"], correctIndex: 0, hint: "Eh.", explanation: "Bed." },
        { q: "Silent E rule?", options: ["Makes vowel short", "Makes vowel long"], correctIndex: 1, hint: "Magic.", explanation: "Makes vowel long." },
        { q: "Syllables in 'Elephant'?", options: ["1", "2", "3", "4"], correctIndex: 2, hint: "Clap.", explanation: "3." },
        { q: "Vowel pair AI says?", options: ["Ay", "Ah", "Eye", "Ee"], correctIndex: 0, hint: "Rain.", explanation: "Ay." },
        { q: "Short I sound?", options: ["Pie", "Pig", "Pilot", "Pine"], correctIndex: 1, hint: "Ih.", explanation: "Pig." },
        { q: "Long O sound?", options: ["Box", "Bot", "Bone", "Bog"], correctIndex: 2, hint: "Oh.", explanation: "Bone." },
        { q: "Magic E in 'Hop' makes?", options: ["Hip", "Hup", "Hap", "Hope"], correctIndex: 3, hint: "Long O.", explanation: "Hope." },
        { q: "Syllables in 'Cat'?", options: ["1", "2", "3", "0"], correctIndex: 0, hint: "Clap.", explanation: "1." },
        { q: "Vowel pair EE says?", options: ["Eh", "Ee", "Ay", "Eye"], correctIndex: 1, hint: "Tree.", explanation: "Ee." },
        { q: "Short A sound?", options: ["Cake", "Rain", "Cat", "Pay"], correctIndex: 2, hint: "Ah.", explanation: "Cat." },
        { q: "Long I sound?", options: ["Bit", "Bin", "Big", "Bike"], correctIndex: 3, hint: "Eye.", explanation: "Bike." },
        { q: "Syllables in 'Banana'?", options: ["3", "2", "1", "4"], correctIndex: 0, hint: "Clap.", explanation: "3." },
        { q: "Short U sound?", options: ["Use", "Bug", "Blue", "Glue"], correctIndex: 1, hint: "Uh.", explanation: "Bug." },
        { q: "Long U sound?", options: ["Cub", "Tub", "Cube", "Sub"], correctIndex: 2, hint: "You.", explanation: "Cube." }
    ],
    "202": [
        { q: "Spell THE", options: ["Teh", "Het", "Eth", "The"], correctIndex: 3, hint: "T-H-E.", explanation: "The." },
        { q: "Sight word: AND", options: ["And", "Dan", "End", "Ant"], correctIndex: 0, hint: "A-N-D.", explanation: "And." },
        { q: "Sight word: IS", options: ["Si", "Is", "Iz", "Se"], correctIndex: 1, hint: "I-S.", explanation: "Is." },
        { q: "Sight word: YOU", options: ["Yew", "Uoy", "You", "Yuo"], correctIndex: 2, hint: "Point.", explanation: "You." },
        { q: "Sight word: SAID", options: ["Sed", "Sayed", "Sad", "Said"], correctIndex: 3, hint: "Talk.", explanation: "Said." },
        { q: "Sight word: LOOK", options: ["Look", "Luk", "Loc", "Like"], correctIndex: 0, hint: "Eyes.", explanation: "Look." },
        { q: "Sight word: FOR", options: ["Four", "For", "Fore", "Far"], correctIndex: 1, hint: "Gift.", explanation: "For." },
        { q: "Sight word: PLAY", options: ["Pla", "Ply", "Play", "Pay"], correctIndex: 2, hint: "Fun.", explanation: "Play." },
        { q: "Sight word: HELP", options: ["Hepl", "Hulp", "Hap", "Help"], correctIndex: 3, hint: "Aid.", explanation: "Help." },
        { q: "Sight word: BIG", options: ["Big", "Beg", "Bog", "Bug"], correctIndex: 0, hint: "Large.", explanation: "Big." },
        { q: "Sight word: TO", options: ["Ot", "To", "Too", "Two"], correctIndex: 1, hint: "Go.", explanation: "To." },
        { q: "Sight word: IN", options: ["Ni", "Im", "In", "On"], correctIndex: 2, hint: "Inside.", explanation: "In." },
        { q: "Sight word: IT", options: ["Ti", "Et", "At", "It"], correctIndex: 3, hint: "Thing.", explanation: "It." },
        { q: "Sight word: ME", options: ["Me", "My", "Mi", "Ma"], correctIndex: 0, hint: "Self.", explanation: "Me." },
        { q: "Sight word: UP", options: ["Pu", "Up", "Op", "Ap"], correctIndex: 1, hint: "Sky.", explanation: "Up." }
    ],
    "203": [
        { q: "Character trait?", options: ["Tall", "Fast", "Brave", "Blue"], correctIndex: 2, hint: "Inside.", explanation: "Brave." },
        { q: "Setting?", options: ["Wolf", "Pig", "Run", "Forest"], correctIndex: 3, hint: "Place.", explanation: "Forest." },
        { q: "Major event?", options: ["Wolf blew house", "Pig sat", "Sun shone", "Grass grew"], correctIndex: 0, hint: "Action.", explanation: "Wolf blew house." },
        { q: "Hero?", options: ["Bad guy", "Good guy", "Place", "Time"], correctIndex: 1, hint: "Main.", explanation: "Good guy." },
        { q: "Villain?", options: ["Good guy", "Place", "Bad guy", "Time"], correctIndex: 2, hint: "Enemy.", explanation: "Bad guy." },
        { q: "Plot?", options: ["Where", "Who", "When", "What happens"], correctIndex: 3, hint: "Story.", explanation: "What happens." },
        { q: "Problem?", options: ["Something wrong", "Happy ending", "Title", "Page"], correctIndex: 0, hint: "Conflict.", explanation: "Something wrong." },
        { q: "Solution?", options: ["Problem", "Fix", "Start", "Middle"], correctIndex: 1, hint: "Answer.", explanation: "Fix." },
        { q: "Character feeling?", options: ["Green", "Short", "Happy", "Loud"], correctIndex: 2, hint: "Emotion.", explanation: "Happy." },
        { q: "Setting clue?", options: ["Talking", "Thinking", "Running", "Trees and birds"], correctIndex: 3, hint: "Outside.", explanation: "Trees and birds." },
        { q: "Physical trait?", options: ["Tall", "Kind", "Mean", "Smart"], correctIndex: 0, hint: "See.", explanation: "Tall." },
        { q: "Setting time?", options: ["Forest", "Morning", "House", "Park"], correctIndex: 1, hint: "When.", explanation: "Morning." },
        { q: "Main Character?", options: ["Background", "Tree", "Most important", "Car"], correctIndex: 2, hint: "Focus.", explanation: "Most important." },
        { q: "Event order?", options: ["End, Start, Middle", "Start, End, Middle", "Middle, Start, End", "Start, Middle, End"], correctIndex: 3, hint: "Time.", explanation: "Start, Middle, End." },
        { q: "Character action?", options: ["Jumped", "Red", "Tall", "Nice"], correctIndex: 0, hint: "Verb.", explanation: "Jumped." }
    ],
    "204": [
        { q: "Lesson?", options: ["Title", "What we learn", "Author", "Page"], correctIndex: 1, hint: "Moral.", explanation: "What we learn." },
        { q: "Central message?", options: ["Small detail", "Name", "Big idea", "Date"], correctIndex: 2, hint: "Theme.", explanation: "Big idea." },
        { q: "Fable?", options: ["Fact book", "Biography", "News", "Story with moral"], correctIndex: 3, hint: "Lesson.", explanation: "Story with moral." },
        { q: "Tortoise lesson?", options: ["Slow & steady", "Fast wins", "Sleep more", "Eat"], correctIndex: 0, hint: "Win.", explanation: "Slow & steady." },
        { q: "Boy Cried Wolf lesson?", options: ["Yell loud", "Don't lie", "Run fast", "Eat"], correctIndex: 1, hint: "Truth.", explanation: "Don't lie." },
        { q: "Ant and Grasshopper?", options: ["Play always", "Sleep", "Work first", "Dance"], correctIndex: 2, hint: "Prepare.", explanation: "Work first." },
        { q: "Lion and Mouse?", options: ["Eat mouse", "Run away", "Sleep", "Little friends help"], correctIndex: 3, hint: "Help.", explanation: "Little friends help." },
        { q: "Moral location?", options: ["End", "Start", "Middle", "Cover"], correctIndex: 0, hint: "Last.", explanation: "End." },
        { q: "Do fables have animals?", options: ["No", "Yes"], correctIndex: 1, hint: "Characters.", explanation: "Yes." },
        { q: "Main purpose?", options: ["Scare", "Bore", "Teach lesson", "Confuse"], correctIndex: 2, hint: "Learn.", explanation: "Teach lesson." },
        { q: "Goldilocks lesson?", options: ["Eat porridge", "Sleep in beds", "Run", "Respect property"], correctIndex: 3, hint: "Manners.", explanation: "Respect property." },
        { q: "Red Riding Hood lesson?", options: ["Don't talk to strangers", "Wear red", "Visit grandma", "Eat"], correctIndex: 0, hint: "Safe.", explanation: "Don't talk to strangers." },
        { q: "Ugly Duckling lesson?", options: ["Be a duck", "Beauty inside", "Swim", "Fly"], correctIndex: 1, hint: "Acceptance.", explanation: "Beauty inside." },
        { q: "Three Pigs lesson?", options: ["Straw is best", "Sticks are best", "Hard work pays", "Wolves"], correctIndex: 2, hint: "Build.", explanation: "Hard work pays." },
        { q: "Moral is same as?", options: ["Title", "Author", "Page", "Lesson"], correctIndex: 3, hint: "Teach.", explanation: "Lesson." }
    ],

    // --- 2ND GRADE ---
    "301": [
        { q: "Main Topic?", options: ["What text is about", "Title", "Page 1", "Author"], correctIndex: 0, hint: "Subject.", explanation: "What text is about." },
        { q: "Key Detail?", options: ["Unrelated", "Supports main topic", "The end", "Title"], correctIndex: 1, hint: "Evidence.", explanation: "Supports main topic." },
        { q: "Text Feature?", options: ["Paper", "Ink", "Bold word", "Binding"], correctIndex: 2, hint: "Visual.", explanation: "Bold word." },
        { q: "Heading?", options: ["Footer", "Author", "Page #", "Title of section"], correctIndex: 3, hint: "Top.", explanation: "Title of section." },
        { q: "Glossary?", options: ["Definitions", "Map", "Index", "Story"], correctIndex: 0, hint: "Meaning.", explanation: "Definitions." },
        { q: "Index?", options: ["Map", "Page finder", "Story", "Cover"], correctIndex: 1, hint: "Back.", explanation: "Page finder." },
        { q: "Table of Contents?", options: ["Index", "Glossary", "Chapter list", "Title"], correctIndex: 2, hint: "Front.", explanation: "Chapter list." },
        { q: "Caption?", options: ["Title", "Page #", "Author", "Explains picture"], correctIndex: 3, hint: "Under image.", explanation: "Explains picture." },
        { q: "Diagram?", options: ["Labeled picture", "Story", "Poem", "Song"], correctIndex: 0, hint: "Parts.", explanation: "Labeled picture." },
        { q: "Bold text?", options: ["Mistake", "Important word", "End", "Start"], correctIndex: 1, hint: "Dark.", explanation: "Important word." },
        { q: "Main Idea vs Topic?", options: ["Same", "Topic is longer", "Main Idea is sentence", "None"], correctIndex: 2, hint: "Specific.", explanation: "Main Idea is sentence." },
        { q: "Paragraph?", options: ["One word", "Title", "Picture", "Group of sentences"], correctIndex: 3, hint: "Block.", explanation: "Group of sentences." },
        { q: "Conclusion?", options: ["Ending", "Beginning", "Middle", "Title"], correctIndex: 0, hint: "Wrap up.", explanation: "Ending." },
        { q: "Introduction?", options: ["End", "Beginning", "Middle", "Picture"], correctIndex: 1, hint: "Start.", explanation: "Beginning." },
        { q: "Fact?", options: ["Opinion", "Guess", "True statement", "Wish"], correctIndex: 2, hint: "Real.", explanation: "True statement." }
    ],
    "302": [
        { q: "Story structure?", options: ["Random", "Backwards", "Beginning, Middle, End"], correctIndex: 2, hint: "Order.", explanation: "B, M, E." },
        { q: "Point of View?", options: ["Where", "When", "Who tells story", "How"], correctIndex: 2, hint: "Narrator.", explanation: "Who tells story." },
        { q: "Character voice?", options: ["Volume", "How they speak", "Pitch", "Sound"], correctIndex: 1, hint: "Style.", explanation: "How they speak." },
        { q: "Dialogue?", options: ["Talking", "Walking", "Sleeping", "Eating"], correctIndex: 0, hint: "Speech.", explanation: "Talking." },
        { q: "Illustrations show?", options: ["Nothing", "Words", "Blank", "Setting/Events"], correctIndex: 3, hint: "Pictures.", explanation: "Setting/Events." },
        { q: "Narrator?", options: ["Storyteller", "Reader", "Paper", "Pen"], correctIndex: 0, hint: "Voice.", explanation: "Storyteller." },
        { q: "First person?", options: ["He/She", "I/Me", "They", "You"], correctIndex: 1, hint: "Self.", explanation: "I/Me." },
        { q: "Third person?", options: ["I", "Me", "He/She", "We"], correctIndex: 2, hint: "Other.", explanation: "He/She." },
        { q: "Problem happens in?", options: ["End", "Start", "Cover", "Middle"], correctIndex: 3, hint: "Conflict.", explanation: "Middle." },
        { q: "Solution happens in?", options: ["End", "Start", "Middle", "Cover"], correctIndex: 0, hint: "Fix.", explanation: "End." },
        { q: "Setting?", options: ["Who", "Where/When", "What", "Why"], correctIndex: 1, hint: "Place.", explanation: "Where/When." },
        { q: "Plot?", options: ["Title", "Author", "Action/Events", "Page"], correctIndex: 2, hint: "Story.", explanation: "Action/Events." },
        { q: "Climax?", options: ["Start", "End", "Title", "High point"], correctIndex: 3, hint: "Exciting.", explanation: "High point." },
        { q: "Characters?", options: ["People/Animals", "Trees", "Houses", "Cars"], correctIndex: 0, hint: "Actors.", explanation: "People/Animals." },
        { q: "Theme?", options: ["Topic", "Lesson", "Title", "Name"], correctIndex: 1, hint: "Message.", explanation: "Lesson." }
    ],
    "303": [
        { q: "Noun?", options: ["Action", "Describe", "Person/Place/Thing", "Link"], correctIndex: 2, hint: "Name.", explanation: "Person/Place/Thing." },
        { q: "Verb?", options: ["Thing", "Name", "Color", "Action"], correctIndex: 3, hint: "Do.", explanation: "Action." },
        { q: "Adjective?", options: ["Describing word", "Action", "Name", "Link"], correctIndex: 0, hint: "Feature.", explanation: "Describing word." },
        { q: "Plural?", options: ["One", "More than one", "None", "Half"], correctIndex: 1, hint: "Many.", explanation: "More than one." },
        { q: "Collective noun?", options: ["One", "Action", "Group", "Place"], correctIndex: 2, hint: "Team.", explanation: "Group." },
        { q: "Proper noun?", options: ["Common thing", "Action", "Color", "Specific name"], correctIndex: 3, hint: "Capital.", explanation: "Specific name." },
        { q: "Irregular plural?", options: ["Mice", "Cats", "Dogs", "Birds"], correctIndex: 0, hint: "Change word.", explanation: "Mice." },
        { q: "Pronoun?", options: ["Run", "He/She", "Blue", "Cat"], correctIndex: 1, hint: "Replace.", explanation: "He/She." },
        { q: "Possessive?", options: ["Plural", "Action", "Shows ownership", "Color"], correctIndex: 2, hint: "'s.", explanation: "Shows ownership." },
        { q: "Common noun?", options: ["Fido", "London", "Mr. Smith", "dog"], correctIndex: 3, hint: "General.", explanation: "dog." },
        { q: "Adverb?", options: ["Describes verb", "Describes noun", "Describes cat", "Describes dog"], correctIndex: 0, hint: "How.", explanation: "Describes verb." },
        { q: "Capital letter?", options: ["End", "Start of sentence", "Middle", "Never"], correctIndex: 1, hint: "Big.", explanation: "Start of sentence." },
        { q: "Sentence needs?", options: ["Noun only", "Verb only", "Subject/Verb", "Period only"], correctIndex: 2, hint: "Complete.", explanation: "Subject/Verb." },
        { q: "Punctuation?", options: ["Letter", "Word", "Space", "End mark"], correctIndex: 3, hint: "Stop.", explanation: "End mark." },
        { q: "Past tense?", options: ["Happened", "Happening", "Will happen", "Now"], correctIndex: 0, hint: "Ago.", explanation: "Happened." }
    ],
    "304": [
        { q: "Adjective modifies?", options: ["Verb", "Noun", "Pronoun", "Adverb"], correctIndex: 1, hint: "Thing.", explanation: "Noun." },
        { q: "Adverb modifies?", options: ["Noun", "Preposition", "Verb", "Pronoun"], correctIndex: 2, hint: "Action.", explanation: "Verb." },
        { q: "Comparative?", options: ["-est", "-ing", "-ed", "-er"], correctIndex: 3, hint: "Compare 2.", explanation: "-er." },
        { q: "Superlative?", options: ["-est", "-er", "-ing", "-ed"], correctIndex: 0, hint: "Compare 3+.", explanation: "-est." },
        { q: "Simple sentence?", options: ["Just words", "Subject + Predicate", "No verb", "Letters"], correctIndex: 1, hint: "Basic.", explanation: "Subject + Predicate." },
        { q: "Complex sentence?", options: ["One idea", "No verb", "Combined ideas", "One word"], correctIndex: 2, hint: "Longer.", explanation: "Combined ideas." },
        { q: "Conjunction?", options: ["Cat/Dog", "Run/Jump", "Blue/Red", "And/But"], correctIndex: 3, hint: "Join.", explanation: "And/But." },
        { q: "Adverb ending?", options: ["-ly", "-ed", "-s", "-er"], correctIndex: 0, hint: "Common.", explanation: "-ly." },
        { q: "Subject?", options: ["Action", "Who/What", "Describe", "End"], correctIndex: 1, hint: "Doer.", explanation: "Who/What." },
        { q: "Predicate?", options: ["Naming part", "Title", "Action part", "End"], correctIndex: 2, hint: "Verb.", explanation: "Action part." },
        { q: "Comma?", options: ["Stop", "Question", "Excitement", "Pause"], correctIndex: 3, hint: "Breath.", explanation: "Pause." },
        { q: "Apostrophe?", options: ["Ownership", "Plural", "Action", "End"], correctIndex: 0, hint: "'s.", explanation: "Ownership." },
        { q: "Compound word?", options: ["One word", "Two words joined", "Sentence", "Letter"], correctIndex: 1, hint: "Snowball.", explanation: "Two words joined." },
        { q: "Antonym?", options: ["Same", "Sound", "Opposite", "Name"], correctIndex: 2, hint: "Hot/Cold.", explanation: "Opposite." },
        { q: "Synonym?", options: ["Opposite", "Sound", "Name", "Same meaning"], correctIndex: 3, hint: "Big/Large.", explanation: "Same meaning." }
    ],

    // --- 3RD GRADE ---
    "401": [
        { q: "Main Idea?", options: ["Big point", "Detail", "Title", "Author"], correctIndex: 0, hint: "Focus.", explanation: "Big point." },
        { q: "Supporting detail?", options: ["Unrelated", "Proof", "Lie", "Question"], correctIndex: 1, hint: "Backs up.", explanation: "Proof." },
        { q: "Topic vs Main Idea?", options: ["Same", "Opposite", "Topic is subject, Idea is point", "None"], correctIndex: 2, hint: "What vs So What.", explanation: "Topic is subject, Idea is point." },
        { q: "Summary?", options: ["Long copy", "One word", "Brief", "Short retelling"], correctIndex: 3, hint: "Brief.", explanation: "Short retelling." },
        { q: "Topic sentence?", options: ["First sentence", "Last", "Middle", "End"], correctIndex: 0, hint: "Intro.", explanation: "First sentence." },
        { q: "Irrelevant detail?", options: ["Fits", "Does not fit", "Helpful", "Key"], correctIndex: 1, hint: "Extra.", explanation: "Does not fit." },
        { q: "Conclusion?", options: ["Intro", "Middle", "Wrap up", "Title"], correctIndex: 2, hint: "End.", explanation: "Wrap up." },
        { q: "Implied main idea?", options: ["Stated", "Title", "Picture", "Not stated"], correctIndex: 3, hint: "Guess.", explanation: "Not stated." },
        { q: "Detail purpose?", options: ["Explain/Prove", "Confuse", "Hide", "Stop"], correctIndex: 0, hint: "Why.", explanation: "Explain/Prove." },
        { q: "Is title the main idea?", options: ["Yes exactly", "Clue but not full idea", "No relation", "Always"], correctIndex: 1, hint: "Hint.", explanation: "Clue but not full idea." },
        { q: "Identify topic?", options: ["Sentence", "Paragraph", "1-2 words", "Book"], correctIndex: 2, hint: "Subject.", explanation: "1-2 words." },
        { q: "Identify main idea?", options: ["1 word", "Picture", "Number", "Full sentence"], correctIndex: 3, hint: "Point.", explanation: "Full sentence." },
        { q: "First step to find main idea?", options: ["Read text", "Guess", "Look at page", "Sleep"], correctIndex: 0, hint: "Start.", explanation: "Read text." },
        { q: "Does every paragraph have a main idea?", options: ["No", "Yes", "Maybe", "Never"], correctIndex: 1, hint: "Focus.", explanation: "Yes." },
        { q: "Summary length?", options: ["Longer", "Same", "Shorter than text", "Zero"], correctIndex: 2, hint: "Brief.", explanation: "Shorter than text." }
    ],
    "402": [
        { q: "Cause?", options: ["Result", "End", "Middle", "Why it happened"], correctIndex: 3, hint: "Reason.", explanation: "Why it happened." },
        { q: "Effect?", options: ["Result", "Reason", "Start", "Middle"], correctIndex: 0, hint: "Outcome.", explanation: "Result." },
        { q: "Signal word?", options: ["Tree", "Because", "House", "Car"], correctIndex: 1, hint: "Link.", explanation: "Because." },
        { q: "Rain causes?", options: ["Dry ground", "Fire", "Wet ground", "Sun"], correctIndex: 2, hint: "Logic.", explanation: "Wet ground." },
        { q: "Fire causes?", options: ["Cold", "Ice", "Water", "Heat"], correctIndex: 3, hint: "Logic.", explanation: "Heat." },
        { q: "Ice melts because?", options: ["Heat", "Cold", "Dark", "Wind"], correctIndex: 0, hint: "Warm.", explanation: "Heat." },
        { q: "Study causes?", options: ["Bad grades", "Good grades", "Sleep", "Hunger"], correctIndex: 1, hint: "Learn.", explanation: "Good grades." },
        { q: "Fall causes?", options: ["Flying", "Laughing", "Pain/Injury", "Sleeping"], correctIndex: 2, hint: "Ouch.", explanation: "Pain/Injury." },
        { q: "Signal: Therefore?", options: ["Cause", "Noun", "Verb", "Effect"], correctIndex: 3, hint: "So.", explanation: "Effect." },
        { q: "Signal: Due to?", options: ["Cause", "Effect", "Noun", "Verb"], correctIndex: 0, hint: "Reason.", explanation: "Cause." },
        { q: "Chain reaction?", options: ["Stop", "Cause leads to effect leads to cause", "One thing", "Loop"], correctIndex: 1, hint: "Link.", explanation: "Cause leads to effect leads to cause." },
        { q: "Multiple causes?", options: ["One reason", "No reason", "Many reasons for one result", "Random"], correctIndex: 2, hint: "Complex.", explanation: "Many reasons for one result." },
        { q: "Identify effect: I slipped because of ice.", options: ["Ice", "Because", "Of", "I slipped"], correctIndex: 3, hint: "Result.", explanation: "I slipped." },
        { q: "Identify cause: I slipped because of ice.", options: ["Ice", "I slipped", "Because", "Of"], correctIndex: 0, hint: "Reason.", explanation: "Ice." },
        { q: "Why ask why?", options: ["Find effect", "Find cause", "Find noun", "Find verb"], correctIndex: 1, hint: "Reason.", explanation: "Find cause." }
    ],
    "403": [
        { q: "Prefix?", options: ["End", "Middle", "Start of word", "None"], correctIndex: 2, hint: "Pre.", explanation: "Start of word." },
        { q: "Suffix?", options: ["Start", "Middle", "Top", "End of word"], correctIndex: 3, hint: "Post.", explanation: "End of word." },
        { q: "Root word?", options: ["Base", "Leaf", "Branch", "Stem"], correctIndex: 0, hint: "Core.", explanation: "Base." },
        { q: "Un- means?", options: ["Very", "Not", "Again", "Before"], correctIndex: 1, hint: "Undo.", explanation: "Not." },
        { q: "Re- means?", options: ["Not", "Before", "Again", "After"], correctIndex: 2, hint: "Redo.", explanation: "Again." },
        { q: "Dis- means?", options: ["Very", "Again", "With", "Not/Opposite"], correctIndex: 3, hint: "Disagree.", explanation: "Not/Opposite." },
        { q: "-ful means?", options: ["Full of", "Without", "Action", "Person"], correctIndex: 0, hint: "Plenty.", explanation: "Full of." },
        { q: "-less means?", options: ["Full of", "Without", "Action", "Person"], correctIndex: 1, hint: "None.", explanation: "Without." },
        { q: "Pre- means?", options: ["After", "Not", "Before", "Again"], correctIndex: 2, hint: "Preheat.", explanation: "Before." },
        { q: "Bi- means?", options: ["One", "Three", "Four", "Two"], correctIndex: 3, hint: "Bicycle.", explanation: "Two." },
        { q: "Tri- means?", options: ["Three", "Two", "One", "Four"], correctIndex: 0, hint: "Triangle.", explanation: "Three." },
        { q: "-er means?", options: ["Less", "Person who/More", "Not", "Full"], correctIndex: 1, hint: "Teacher.", explanation: "Person who/More." },
        { q: "-est means?", options: ["Least", "Person", "Most", "Action"], correctIndex: 2, hint: "Biggest.", explanation: "Most." },
        { q: "Base of 'Playing'?", options: ["Ing", "Pl", "Lay", "Play"], correctIndex: 3, hint: "Action.", explanation: "Play." },
        { q: "Base of 'Unhappy'?", options: ["Happy", "Un", "Hap", "Py"], correctIndex: 0, hint: "Feel.", explanation: "Happy." }
    ],
    "404": [
        { q: "Literal?", options: ["Fake", "Real meaning", "Joke", "Story"], correctIndex: 1, hint: "Fact.", explanation: "Real meaning." },
        { q: "Non-literal?", options: ["Fact", "Truth", "Figure of speech", "Math"], correctIndex: 2, hint: "Idiom.", explanation: "Figure of speech." },
        { q: "Simile?", options: ["Is", "Was", "Were", "Like/As"], correctIndex: 3, hint: "Compare.", explanation: "Like/As." },
        { q: "Metaphor?", options: ["Is", "Like", "As", "Than"], correctIndex: 0, hint: "Direct.", explanation: "Is." },
        { q: "Idiom?", options: ["Fact", "Phrase with hidden meaning", "Name", "Date"], correctIndex: 1, hint: "Expression.", explanation: "Phrase with hidden meaning." },
        { q: "Break a leg?", options: ["Get hurt", "Run fast", "Good luck", "Dance"], correctIndex: 2, hint: "Showbiz.", explanation: "Good luck." },
        { q: "Piece of cake?", options: ["Yummy", "Hard", "Dessert", "Easy"], correctIndex: 3, hint: "Simple.", explanation: "Easy." },
        { q: "Raining cats and dogs?", options: ["Heavy rain", "Pets falling", "Sunny", "Snow"], correctIndex: 0, hint: "Storm.", explanation: "Heavy rain." },
        { q: "Cold feet?", options: ["Cold toes", "Nervous", "Sick", "Tired"], correctIndex: 1, hint: "Scared.", explanation: "Nervous." },
        { q: "Hyperbole?", options: ["Truth", "Lie", "Exaggeration", "Question"], correctIndex: 2, hint: "Big.", explanation: "Exaggeration." },
        { q: "Personification?", options: ["Person acts like object", "Alive", "Statue", "Object acts human"], correctIndex: 3, hint: "Alive.", explanation: "Object acts human." },
        { q: "Onomatopoeia?", options: ["Sound word", "Name", "Action", "Place"], correctIndex: 0, hint: "Bang.", explanation: "Sound word." },
        { q: "Spill the beans?", options: ["Drop food", "Tell secret", "Cook", "Eat"], correctIndex: 1, hint: "Talk.", explanation: "Tell secret." },
        { q: "Under the weather?", options: ["Wet", "Cold", "Sick", "Hot"], correctIndex: 2, hint: "Ill.", explanation: "Sick." },
        { q: "Hit the hay?", options: ["Farm", "Work", "Play", "Sleep"], correctIndex: 3, hint: "Bed.", explanation: "Sleep." }
    ],

    // --- 4TH GRADE ---
    "501": [
        { q: "Text Structure?", options: ["Organization", "Font", "Paper", "Color"], correctIndex: 0, hint: "Build.", explanation: "Organization." },
        { q: "Chronological?", options: ["Size", "Time order", "Color", "Random"], correctIndex: 1, hint: "Time.", explanation: "Time order." },
        { q: "Problem/Solution?", options: ["Story", "List", "Issue & Fix", "Map"], correctIndex: 2, hint: "Solve.", explanation: "Issue & Fix." },
        { q: "Cause/Effect?", options: ["List", "Story", "Map", "Why/Result"], correctIndex: 3, hint: "Link.", explanation: "Why/Result." },
        { q: "Compare/Contrast?", options: ["Same/Diff", "Time", "List", "Story"], correctIndex: 0, hint: "Venn.", explanation: "Same/Diff." },
        { q: "Description?", options: ["Time", "Details/Features", "Problem", "Cause"], correctIndex: 1, hint: "About.", explanation: "Details/Features." },
        { q: "Sequence?", options: ["Map", "Drawing", "Steps", "Photo"], correctIndex: 2, hint: "1,2,3.", explanation: "Steps." },
        { q: "Signal word: Both?", options: ["Contrast", "Sequence", "Cause", "Compare"], correctIndex: 3, hint: "Same.", explanation: "Compare." },
        { q: "Signal word: Because?", options: ["Cause/Effect", "Compare", "Sequence", "Problem"], correctIndex: 0, hint: "Why.", explanation: "Cause/Effect." },
        { q: "Signal word: First?", options: ["Compare", "Sequence", "Cause", "Problem"], correctIndex: 1, hint: "Order.", explanation: "Sequence." },
        { q: "Signal word: Unlike?", options: ["Compare", "Sequence", "Contrast", "Description"], correctIndex: 2, hint: "Different.", explanation: "Contrast." },
        { q: "Signal word: Consequently?", options: ["Cause", "Compare", "Sequence", "Effect"], correctIndex: 3, hint: "Result.", explanation: "Effect." },
        { q: "Signal word: Solution?", options: ["Problem/Solution", "Compare", "Sequence", "Description"], correctIndex: 0, hint: "Fix.", explanation: "Problem/Solution." },
        { q: "Signal word: For example?", options: ["Sequence", "Description", "Compare", "Problem"], correctIndex: 1, hint: "Detail.", explanation: "Description." },
        { q: "Signal word: Next?", options: ["Compare", "Description", "Sequence", "Cause"], correctIndex: 2, hint: "Order.", explanation: "Sequence." }
    ],
    "502": [
        { q: "Summary length?", options: ["Long", "Medium", "Full", "Short"], correctIndex: 3, hint: "Brief.", explanation: "Short." },
        { q: "Main idea?", options: ["Big point", "Small detail", "Title", "Date"], correctIndex: 0, hint: "Focus.", explanation: "Big point." },
        { q: "Objective?", options: ["My opinion", "Facts only", "Feelings", "Guess"], correctIndex: 1, hint: "Truth.", explanation: "Facts only." },
        { q: "Supporting detail?", options: ["Unrelated", "Lie", "Proof", "Question"], correctIndex: 2, hint: "Backs up.", explanation: "Proof." },
        { q: "Paraphrase?", options: ["Copy exact", "Delete", "Ignore", "In own words"], correctIndex: 3, hint: "Rewrite.", explanation: "In own words." },
        { q: "Subjective?", options: ["Opinion based", "Fact based", "True", "Real"], correctIndex: 0, hint: "Feelings.", explanation: "Opinion based." },
        { q: "Key point?", options: ["Tiny detail", "Important info", "Title", "Page #"], correctIndex: 1, hint: "Vital.", explanation: "Important info." },
        { q: "Does summary have opinion?", options: ["Yes", "Maybe", "No", "Always"], correctIndex: 2, hint: "Neutral.", explanation: "No." },
        { q: "Summarize story?", options: ["End only", "Start only", "Characters", "B-M-E"], correctIndex: 3, hint: "Whole thing.", explanation: "B-M-E." },
        { q: "Summarize info text?", options: ["Main ideas", "Jokes", "Pictures", "Ads"], correctIndex: 0, hint: "Facts.", explanation: "Main ideas." },
        { q: "5 Ws?", options: ["ABCDE", "Who/What/Where/When/Why", "12345", "None"], correctIndex: 1, hint: "Details.", explanation: "Who/What/Where/When/Why." },
        { q: "First sentence of summary?", options: ["Tiny detail", "Ending", "Main Idea", "My name"], correctIndex: 2, hint: "Topic.", explanation: "Main Idea." },
        { q: "Order of summary?", options: ["Random", "Backwards", "Any", "Sequence of text"], correctIndex: 3, hint: "Flow.", explanation: "Sequence of text." },
        { q: "Plagiarism?", options: ["Copying", "Writing own", "Citing", "Summarizing"], correctIndex: 0, hint: "Steal.", explanation: "Copying." },
        { q: "Purpose of summary?", options: ["Waste time", "Show understanding", "Copy book", "Draw"], correctIndex: 1, hint: "Check.", explanation: "Show understanding." }
    ],
    "503": [
        { q: "Theme?", options: ["Topic", "Title", "Message/Lesson", "Name"], correctIndex: 2, hint: "Moral.", explanation: "Message/Lesson." },
        { q: "Universal theme?", options: ["Just one person", "My house", "Now", "Applies to all"], correctIndex: 3, hint: "Everyone.", explanation: "Applies to all." },
        { q: "Implicit?", options: ["Hidden", "Stated", "Clear", "Loud"], correctIndex: 0, hint: "Infer.", explanation: "Hidden." },
        { q: "Explicit?", options: ["Hidden", "Stated", "Secret", "Unknown"], correctIndex: 1, hint: "Clear.", explanation: "Stated." },
        { q: "Theme vs Topic?", options: ["Same", "Topic is message", "Message vs Subject", "Theme is one word"], correctIndex: 2, hint: "Meaning.", explanation: "Message vs Subject." },
        { q: "Common theme?", options: ["Pizza", "Running", "Tuesday", "Friendship"], correctIndex: 3, hint: "Life.", explanation: "Friendship." },
        { q: "Courage?", options: ["Bravery", "Fear", "Sleep", "Food"], correctIndex: 0, hint: "Hero.", explanation: "Bravery." },
        { q: "Honesty?", options: ["Lie", "Truth", "Game", "Toy"], correctIndex: 1, hint: "Real.", explanation: "Truth." },
        { q: "Theme of Cinderella?", options: ["Shoes hurt", "Mice talk", "Kindness wins", "Dance"], correctIndex: 2, hint: "Good.", explanation: "Kindness wins." },
        { q: "Can a story have 2 themes?", options: ["No", "Never", "Only one", "Yes"], correctIndex: 3, hint: "Multiple.", explanation: "Yes." },
        { q: "Perseverance?", options: ["Keep trying", "Quit", "Sleep", "Eat"], correctIndex: 0, hint: "Hard work.", explanation: "Keep trying." },
        { q: "Acceptance?", options: ["Excluding", "Including others", "Fighting", "Running"], correctIndex: 1, hint: "Love.", explanation: "Including others." },
        { q: "Greed?", options: ["Sharing", "Giving", "Wanting all", "Helping"], correctIndex: 2, hint: "Selfish.", explanation: "Wanting all." },
        { q: "Loyalty?", options: ["Leaving", "Lying", "Hiding", "Sticking by friends"], correctIndex: 3, hint: "True.", explanation: "Sticking by friends." },
        { q: "Is theme one word?", options: ["Usually phrase", "Yes always", "Never", "Maybe"], correctIndex: 0, hint: "Sentence.", explanation: "Usually phrase." }
    ],
    "504": [
        { q: "Character trait?", options: ["Action", "Personality", "Outside", "Look"], correctIndex: 1, hint: "Inside.", explanation: "Personality." },
        { q: "Motivation?", options: ["What", "Where", "Why", "When"], correctIndex: 2, hint: "Reason.", explanation: "Why." },
        { q: "Protagonist?", options: ["Villain", "Sidekick", "Enemy", "Hero"], correctIndex: 3, hint: "Main.", explanation: "Hero." },
        { q: "Antagonist?", options: ["Villain", "Hero", "Friend", "Pet"], correctIndex: 0, hint: "Bad.", explanation: "Villain." },
        { q: "Dynamic?", options: ["Stays same", "Changes", "Flat", "Boring"], correctIndex: 1, hint: "Grow.", explanation: "Changes." },
        { q: "Static?", options: ["Changes", "Grows", "Stays same", "Moves"], correctIndex: 2, hint: "Flat.", explanation: "Stays same." },
        { q: "Trait examples?", options: ["Running", "Jumping", "Singing", "Brave/Kind"], correctIndex: 3, hint: "Adjectives.", explanation: "Brave/Kind." },
        { q: "Action vs Trait?", options: ["Do vs Is", "Same", "Is vs Do", "None"], correctIndex: 0, hint: "Verb vs Adj.", explanation: "Do vs Is." },
        { q: "Conflict?", options: ["Solution", "Problem", "Happy", "End"], correctIndex: 1, hint: "Fight.", explanation: "Problem." },
        { q: "Resolution?", options: ["Problem", "Start", "Solution", "Middle"], correctIndex: 2, hint: "Fix.", explanation: "Solution." },
        { q: "Physical trait?", options: ["Nice", "Mean", "Smart", "Tall/Short"], correctIndex: 3, hint: "Look.", explanation: "Tall/Short." },
        { q: "Internal trait?", options: ["Kind/Smart", "Blue eyes", "Tall", "Fast"], correctIndex: 0, hint: "Inside.", explanation: "Kind/Smart." },
        { q: "Analyze?", options: ["Skim", "Look closely", "Skip", "Guess"], correctIndex: 1, hint: "Study.", explanation: "Look closely." },
        { q: "Infer?", options: ["Read", "Ignore", "Guess from clues", "Sleep"], correctIndex: 2, hint: "Deduce.", explanation: "Guess from clues." },
        { q: "Relationship?", options: ["Alone", "Separate", "Apart", "Connection"], correctIndex: 3, hint: "Link.", explanation: "Connection." }
    ],

    // --- 5TH GRADE ---
    "601": [
        { q: "Quote?", options: ["Exact words", "Paraphrase", "Summary", "Lie"], correctIndex: 0, hint: "Marks.", explanation: "Exact words." },
        { q: "Inference?", options: ["Guess", "Evidence + Knowledge", "Fact", "Lie"], correctIndex: 1, hint: "Deduce.", explanation: "Evidence + Knowledge." },
        { q: "Theme?", options: ["Title", "Character", "Lesson", "Plot"], correctIndex: 2, hint: "Moral.", explanation: "Lesson." },
        { q: "Evidence?", options: ["Opinion", "Guess", "Wish", "Proof"], correctIndex: 3, hint: "Fact.", explanation: "Proof." },
        { q: "Cite?", options: ["Credit source", "Copy", "Steal", "Hide"], correctIndex: 0, hint: "Name.", explanation: "Credit source." },
        { q: "Quotation marks?", options: [". .", "\" \"", ", ,", "! !"], correctIndex: 1, hint: "Speech.", explanation: "\" \"." },
        { q: "Explicit text?", options: ["Hidden", "Confusing", "Right there", "Secret"], correctIndex: 2, hint: "Clear.", explanation: "Right there." },
        { q: "Draw conclusion?", options: ["Start", "Middle", "Detail", "Final thought"], correctIndex: 3, hint: "End.", explanation: "Final thought." },
        { q: "Textual evidence?", options: ["From book", "From head", "From TV", "From friend"], correctIndex: 0, hint: "Source.", explanation: "From book." },
        { q: "Support?", options: ["Fall down", "Back up", "Ignore", "Break"], correctIndex: 1, hint: "Help.", explanation: "Back up." },
        { q: "Direct quote?", options: ["Summary", "Paraphrase", "Word for word", "Gist"], correctIndex: 2, hint: "Exact.", explanation: "Word for word." },
        { q: "Indirect quote?", options: ["Exact", "Word for word", "Quote", "Paraphrase"], correctIndex: 3, hint: "Own words.", explanation: "Paraphrase." },
        { q: "Citation format?", options: ["Author/Page", "Title only", "Nothing", "Date"], correctIndex: 0, hint: "Source.", explanation: "Author/Page." },
        { q: "Plagiarism?", options: ["Citing", "Stealing words", "Writing", "Reading"], correctIndex: 1, hint: "Bad.", explanation: "Stealing words." },
        { q: "Strong evidence?", options: ["Guess", "Wish", "Facts/Examples", "Hope"], correctIndex: 2, hint: "Proof.", explanation: "Facts/Examples." }
    ],
    "602": [
        { q: "Compare?", options: ["Differences", "Opposite", "Unless", "Similarities"], correctIndex: 3, hint: "Like.", explanation: "Similarities." },
        { q: "Contrast?", options: ["Differences", "Similarities", "Same", "Like"], correctIndex: 0, hint: "Unlike.", explanation: "Differences." },
        { q: "Genre?", options: ["Title", "Category", "Author", "Page"], correctIndex: 1, hint: "Type.", explanation: "Category." },
        { q: "Theme comparison?", options: ["Same font?", "Same length?", "Same message?", "Same color?"], correctIndex: 2, hint: "Lesson.", explanation: "Same message?" },
        { q: "Perspective?", options: ["Location", "Time", "Size", "Viewpoint"], correctIndex: 3, hint: "Angle.", explanation: "Viewpoint." },
        { q: "Visual element?", options: ["Picture", "Word", "Sound", "Smell"], correctIndex: 0, hint: "See.", explanation: "Picture." },
        { q: "Multimedia?", options: ["Book only", "Video/Audio", "Paper", "Pen"], correctIndex: 1, hint: "Mix.", explanation: "Video/Audio." },
        { q: "Tone?", options: ["Loudness", "Pitch", "Author attitude", "Speed"], correctIndex: 2, hint: "Mood.", explanation: "Author attitude." },
        { q: "Style?", options: ["What written", "Who wrote", "When written", "How written"], correctIndex: 3, hint: "Form.", explanation: "How written." },
        { q: "Setting impact?", options: ["Changes story", "Does nothing", "Is boring", "Is hidden"], correctIndex: 0, hint: "Place.", explanation: "Changes story." },
        { q: "Venn Diagram?", options: ["Map", "Compare tool", "Clock", "List"], correctIndex: 1, hint: "Circles.", explanation: "Compare tool." },
        { q: "Archetype?", options: ["Building", "Food", "Typical character", "Animal"], correctIndex: 2, hint: "Hero.", explanation: "Typical character." },
        { q: "Quest?", options: ["Sleep", "Eat", "Sit", "Journey"], correctIndex: 3, hint: "Adventure.", explanation: "Journey." },
        { q: "Dialect?", options: ["Way of speaking", "Food", "Clothes", "Walk"], correctIndex: 0, hint: "Accent.", explanation: "Way of speaking." },
        { q: "Plot pattern?", options: ["Random", "Repeated structure", "None", "Chaos"], correctIndex: 1, hint: "Common.", explanation: "Repeated structure." }
    ],
    "603": [
        { q: "Opinion?", options: ["Fact", "Truth", "Belief", "Proof"], correctIndex: 2, hint: "Think.", explanation: "Belief." },
        { q: "Fact?", options: ["Belief", "Guess", "Feeling", "Proven"], correctIndex: 3, hint: "True.", explanation: "Proven." },
        { q: "Reason?", options: ["Why", "What", "When", "Who"], correctIndex: 0, hint: "Support.", explanation: "Why." },
        { q: "Evidence?", options: ["Guess", "Proof", "Wish", "Hope"], correctIndex: 1, hint: "Data.", explanation: "Proof." },
        { q: "Persuade?", options: ["Tell", "Ignore", "Convince", "Hide"], correctIndex: 2, hint: "Argue.", explanation: "Convince." },
        { q: "Link words?", options: ["Cat/Dog", "Run/Jump", "Red/Blue", "Therefore/Because"], correctIndex: 3, hint: "Connect.", explanation: "Therefore/Because." },
        { q: "Introduction?", options: ["Hook/Thesis", "End", "Middle", "Conclusion"], correctIndex: 0, hint: "Start.", explanation: "Hook/Thesis." },
        { q: "Conclusion?", options: ["Start", "Wrap up", "Middle", "Title"], correctIndex: 1, hint: "End.", explanation: "Wrap up." },
        { q: "Audience?", options: ["Writer", "Self", "Readers", "None"], correctIndex: 2, hint: "Who.", explanation: "Readers." },
        { q: "Counter-argument?", options: ["Same view", "Agreement", "Support", "Opposite view"], correctIndex: 3, hint: "Against.", explanation: "Opposite view." },
        { q: "Thesis statement?", options: ["Main claim", "Question", "Detail", "Ending"], correctIndex: 0, hint: "Point.", explanation: "Main claim." },
        { q: "Biased?", options: ["Fair", "One-sided", "Neutral", "Correct"], correctIndex: 1, hint: "Unfair.", explanation: "One-sided." },
        { q: "Transition?", options: ["Stop", "End", "Move between ideas", "Start"], correctIndex: 2, hint: "Bridge.", explanation: "Move between ideas." },
        { q: "Emotional appeal?", options: ["Facts", "Logic", "Numbers", "Feelings"], correctIndex: 3, hint: "Heart.", explanation: "Feelings." },
        { q: "Call to action?", options: ["Ask to do", "Ask to sleep", "Ask to stop", "Ask to eat"], correctIndex: 0, hint: "Act.", explanation: "Ask to do." }
    ],
    "604": [
        { q: "Research?", options: ["Guess", "Study", "Sleep", "Eat"], correctIndex: 1, hint: "Learn.", explanation: "Study." },
        { q: "Source?", options: ["Sauce", "Destination", "Origin", "End"], correctIndex: 2, hint: "From.", explanation: "Origin." },
        { q: "Reliable?", options: ["Fake", "Lie", "False", "Trustworthy"], correctIndex: 3, hint: "True.", explanation: "Trustworthy." },
        { q: "Citation?", options: ["Reference", "Copy", "Steal", "Ignore"], correctIndex: 0, hint: "Credit.", explanation: "Reference." },
        { q: "Plagiarism?", options: ["Writing", "Stealing", "Reading", "Citing"], correctIndex: 1, hint: "Bad.", explanation: "Stealing." },
        { q: "Keyword?", options: ["Password", "Code", "Search term", "Key"], correctIndex: 2, hint: "Topic.", explanation: "Search term." },
        { q: "Summarize?", options: ["Lengthen", "Expand", "Repeat", "Shorten"], correctIndex: 3, hint: "Brief.", explanation: "Shorten." },
        { q: "Note taking?", options: ["Writing key points", "Drawing", "Sleeping", "Eating"], correctIndex: 0, hint: "Remember.", explanation: "Writing key points." },
        { q: "Bibliography?", options: ["List of sources", "Story", "Novel", "Poem"], correctIndex: 1, hint: "End.", explanation: "List of sources." },
        { q: "Credible?", options: ["False", "Lie", "Believable", "Fake"], correctIndex: 2, hint: "Real.", explanation: "Believable." },
        { q: "Primary Source?", options: ["Copy", "Book", "Movie", "Original"], correctIndex: 3, hint: "First.", explanation: "Original." },
        { q: "Secondary Source?", options: ["Analysis", "Original", "Diary", "Photo"], correctIndex: 0, hint: "Second.", explanation: "Analysis." },
        { q: "Topic sentence?", options: ["Detail", "Main idea", "End", "Question"], correctIndex: 1, hint: "Focus.", explanation: "Main idea." },
        { q: "Drafting?", options: ["Final", "Printing", "Writing first version", "Reading"], correctIndex: 2, hint: "Start.", explanation: "Writing first version." },
        { q: "Editing?", options: ["Writing", "Reading", "Sleeping", "Fixing errors"], correctIndex: 3, hint: "Check.", explanation: "Fixing errors." }
    ]
};

export const READING_ASSESS: Record<string, QuestionTemplate[]> = {};

const allIds = [
    ...Array.from({length: 4}, (_,i)=>101+i),
    ...Array.from({length: 4}, (_,i)=>201+i),
    ...Array.from({length: 4}, (_,i)=>301+i),
    ...Array.from({length: 4}, (_,i)=>401+i),
    ...Array.from({length: 4}, (_,i)=>501+i),
    ...Array.from({length: 4}, (_,i)=>601+i)
];

const generateQuizSet = (id: string, startIdx: number = 0): QuestionTemplate[] => {
    return Array.from({length: 15}, (_, i) => {
        // Deterministically mix the correct index
        const correctIndex = i % 4; 
        const options = ["Correct Analysis", "Incorrect Detail", "Unrelated Idea", "Opposite Meaning"];
        const mixedOptions = [...options];
        const correct = mixedOptions.shift()!;
        mixedOptions.splice(correctIndex, 0, correct);

        return {
            q: `Reading Quiz Q${startIdx + i + 1} (Lesson ${id}): Analyze the text.`,
            options: mixedOptions,
            correctIndex: correctIndex,
            explanation: "The text supports this answer."
        };
    });
};

allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_ASSESS[key] || [];

    if (realQuestions.length >= 15) {
        READING_ASSESS[key] = realQuestions.slice(0, 15);
    } else {
        const needed = 15 - realQuestions.length;
        const generated = generateQuizSet(key, realQuestions.length).slice(0, needed);
        READING_ASSESS[key] = [...realQuestions, ...generated];
    }
});

READING_ASSESS['default'] = generateQuizSet('General');