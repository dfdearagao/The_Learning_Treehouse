export interface LessonEntry {
  grade: string;
  subject: string;
  unitId: number;
  unitTitle: string;
  lessonId: number;
  lessonName: string;
  description: string;
}

export const LESSON_CATALOG: LessonEntry[] = [
  // --- 100 LEVEL (KINDERGARTEN) ---
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 1,
    unitTitle: "Counting and Cardinality",
    lessonId: 101,
    lessonName: "Know number names and the count sequence",
    description: "Count orally from 1 to 20. Recognize written numerals 0-20. Understand that numbers represent quantities."
  },
  {
    grade: "Kindergarten",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Foundational Skills",
    lessonId: 101,
    lessonName: "Alphabet and Sounds",
    description: "Identify uppercase and lowercase letters. Recognize primary sounds for each letter. Associate letters with picture words."
  },
  {
    grade: "Kindergarten",
    subject: "Science",
    unitId: 1,
    unitTitle: "Life Science",
    lessonId: 101,
    lessonName: "Plants and Animals",
    description: "Identify living vs non-living things. Describe what plants/animals need to survive. Observe similarities between parents/offspring."
  },
  {
    grade: "Kindergarten",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Civics",
    lessonId: 101,
    lessonName: "Being a Good Citizen",
    description: "Follow rules and laws. Respect others and property. Understand fairness and honesty."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 1,
    unitTitle: "Counting and Cardinality",
    lessonId: 102,
    lessonName: "Count to tell the number of objects",
    description: "Count objects in a line or circle. Answer 'how many?' questions. Understand the last number said is the total."
  },
  {
    grade: "Kindergarten",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Foundational Skills",
    lessonId: 102,
    lessonName: "Rhyming Words",
    description: "Recognize rhyming words in spoken language. Produce simple rhymes. Identify the ending sound in words."
  },
  {
    grade: "Kindergarten",
    subject: "Science",
    unitId: 1,
    unitTitle: "Life Science",
    lessonId: 102,
    lessonName: "Five Senses",
    description: "Identify the five senses. Match body parts to senses. Use senses to observe the world."
  },
  {
    grade: "Kindergarten",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Civics",
    lessonId: 102,
    lessonName: "Community Helpers",
    description: "Identify jobs in the community. Explain how helpers keep us safe. Recognize tools used by helpers."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 1,
    unitTitle: "Counting and Cardinality",
    lessonId: 103,
    lessonName: "Compare numbers",
    description: "Identify groups with more or less items. Compare written numbers (e.g. 5 > 3). Use matching strategies to compare."
  },
  {
    grade: "Kindergarten",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 103,
    lessonName: "Ask and Answer Questions",
    description: "Ask questions about key details in a text. Answer who, what, where questions. Listen actively to stories."
  },
  {
    grade: "Kindergarten",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 103,
    lessonName: "Daily Weather",
    description: "Observe and describe daily weather. Identify weather patterns. Understand the purpose of weather forecasting."
  },
  {
    grade: "Kindergarten",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 103,
    lessonName: "Maps and Globes",
    description: "Distinguish between land and water. Use directional words. Understand maps are models of places."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 2,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 104,
    lessonName: "Understand addition and subtraction",
    description: "Model addition as putting together. Model subtraction as taking apart. Solve simple word problems using objects."
  },
  {
    grade: "Kindergarten",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 104,
    lessonName: "Retell Familiar Stories",
    description: "Retell a story including key details. Identify characters and setting. Sequence events (beginning, middle, end)."
  },
  {
    grade: "Kindergarten",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 104,
    lessonName: "Four Seasons",
    description: "Name the four seasons. Describe seasonal changes. Identify appropriate clothing for each season."
  },
  {
    grade: "Kindergarten",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 104,
    lessonName: "My Home and School",
    description: "Locate home and school on a map. Describe the immediate environment. Create a simple map."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 105,
    lessonName: "Work with numbers 11-19 for place value",
    description: "Compose numbers 11-19 using ten ones and more ones. Decompose teen numbers into tens and ones. Understand 10 as a bundle of ones."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 106,
    lessonName: "Describe and compare measurable attributes",
    description: "Describe objects by length or weight. Compare two objects directly (longer vs shorter). Use vocabulary like 'heavy' and 'light'."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 107,
    lessonName: "Classify objects and count categories",
    description: "Sort objects into categories (color, shape). Count the number of objects in each category. Identify which category has the most."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 108,
    lessonName: "Identify and describe shapes",
    description: "Name shapes like squares, circles, triangles. Describe relative positions (above, below, beside). Identify shapes in the real world."
  },
  {
    grade: "Kindergarten",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 109,
    lessonName: "Analyze, compare, create, and compose shapes",
    description: "Analyze attributes like corners and sides. Build larger shapes from smaller ones. Draw simple 2D shapes."
  },

  // --- 200 LEVEL (1ST GRADE) ---
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 201,
    lessonName: "Solve problems involving addition/subtraction",
    description: "Use drawings to solve word problems. Solve for unknowns in all positions. Add and subtract within 20."
  },
  {
    grade: "1st Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Foundational Skills",
    lessonId: 201,
    lessonName: "Long and Short Vowels",
    description: "Distinguish between long and short vowel sounds. Read words with final -e. Break words into syllables."
  },
  {
    grade: "1st Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 201,
    lessonName: "Sound and Vibration",
    description: "Understand sound comes from vibration. Investigate how to make sound. Describe loud vs soft sounds."
  },
  {
    grade: "1st Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "History",
    lessonId: 201,
    lessonName: "Families Now and Long Ago",
    description: "Compare life today with life in the past. Understand timelines. Identify changes in daily life."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 202,
    lessonName: "Properties of operations",
    description: "Apply the commutative property (3+2 = 2+3). Apply the associative property. Understand subtraction as an unknown-addend problem."
  },
  {
    grade: "1st Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Foundational Skills",
    lessonId: 202,
    lessonName: "Sight Words",
    description: "Read grade-appropriate sight words. Use sight words in simple sentences. Improve reading fluency."
  },
  {
    grade: "1st Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 202,
    lessonName: "Light and Shadows",
    description: "Observe that objects need light to be seen. Investigate how shadows are formed. Experiment with transparent/opaque materials."
  },
  {
    grade: "1st Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "History",
    lessonId: 202,
    lessonName: "American Symbols",
    description: "Identify national symbols (flag, eagle). Understand the pledge of allegiance. Explain the significance of symbols."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 203,
    lessonName: "Add and subtract within 20",
    description: "Relate counting to addition and subtraction. Add and subtract fluently within 10. Use strategies like making ten."
  },
  {
    grade: "1st Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 203,
    lessonName: "Describe Characters",
    description: "Describe characters using key details. Identify the setting of a story. Explain major events in a story."
  },
  {
    grade: "1st Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Life Science",
    lessonId: 203,
    lessonName: "Animal Parents and Babies",
    description: "Observe that offspring look like parents. Identify ways parents help offspring survive. Describe animal behaviors."
  },
  {
    grade: "1st Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Economics",
    lessonId: 203,
    lessonName: "Needs vs Wants",
    description: "Distinguish between needs and wants. Identify goods and services. Understand basic spending and saving."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 204,
    lessonName: "Work with addition and subtraction equations",
    description: "Understand the meaning of the equal sign. Determine if equations are true or false. Find the unknown number in an equation."
  },
  {
    grade: "1st Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 204,
    lessonName: "Identify Lesson of Story",
    description: "Understand the central message or lesson. Retell stories to support the main message. Connect story events to the lesson."
  },
  {
    grade: "1st Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Life Science",
    lessonId: 204,
    lessonName: "Plant Parts",
    description: "Identify roots, stems, leaves, flowers. Explain the function of each plant part. Understand how new plants grow from seeds."
  },
  {
    grade: "1st Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Economics",
    lessonId: 204,
    lessonName: "Goods and Services",
    description: "Identify producers and consumers. Explain how people get goods. Understand trade/exchange."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 205,
    lessonName: "Extend the counting sequence",
    description: "Count to 120 starting at any number. Read and write numerals to 120. Understand that digits represent amounts."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 206,
    lessonName: "Understand place value",
    description: "Understand a two-digit number is tens and ones. Compare two two-digit numbers using <, >, =. Identify the value of each digit."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 207,
    lessonName: "Use place value to add and subtract",
    description: "Add within 100 using models. Mentally find 10 more or 10 less. Subtract multiples of 10."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 208,
    lessonName: "Measure lengths indirectly",
    description: "Order three objects by length. Measure length using non-standard units. Understand length iteration."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 209,
    lessonName: "Tell and write time",
    description: "Tell time to the hour. Tell time to the half-hour. Read both analog and digital clocks."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 210,
    lessonName: "Represent and interpret data",
    description: "Organize data into up to three categories. Ask and answer questions about the data. Create simple charts."
  },
  {
    grade: "1st Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Geometry",
    lessonId: 211,
    lessonName: "Reason with shapes and their attributes",
    description: "Distinguish defining attributes (e.g. triangles have 3 sides). Compose 2D and 3D shapes. Partition circles and rectangles into halves/quarters."
  },

  // --- 300 LEVEL (2ND GRADE) ---
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 301,
    lessonName: "Solve problems involving addition/subtraction",
    description: "Use addition/subtraction within 100 to solve word problems. Solve one- and two-step problems. Use drawings and equations."
  },
  {
    grade: "2nd Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 301,
    lessonName: "Reading Comprehension",
    description: "Ask and answer questions to demonstrate understanding. Identify the main topic of a text. Describe the connection between ideas."
  },
  {
    grade: "2nd Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 301,
    lessonName: "Solids and Liquids",
    description: "Distinguish between solids and liquids. Describe properties of matter (hard, soft, etc.). Observe changes in states of matter."
  },
  {
    grade: "2nd Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Government",
    lessonId: 301,
    lessonName: "Purpose of Rules",
    description: "Explain why rules are necessary. Understand consequences of breaking rules. Participate in making class rules."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 302,
    lessonName: "Add and subtract within 20",
    description: "Fluently add and subtract within 20. Know from memory all sums of two one-digit numbers. Use mental strategies."
  },
  {
    grade: "2nd Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 302,
    lessonName: "Structure of a Story",
    description: "Describe the overall structure of a story. Acknowledge differences in points of view. Use information from illustrations."
  },
  {
    grade: "2nd Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 302,
    lessonName: "Building Materials",
    description: "Analyze properties of materials for building. Test material strength and flexibility. Design a structure for a specific purpose."
  },
  {
    grade: "2nd Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Government",
    lessonId: 302,
    lessonName: "Local Government",
    description: "Identify local government leaders (Mayor). Understand services provided by government. Explain how laws are made."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 303,
    lessonName: "Work with equal groups (Multiplication Intro)",
    description: "Determine if a group has odd or even members. Write equations for equal addends. Use rectangular arrays to find totals."
  },
  {
    grade: "2nd Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Grammar",
    lessonId: 303,
    lessonName: "Nouns and Verbs",
    description: "Identify nouns and verbs in sentences. Use collective nouns. Form and use irregular plural nouns."
  },
  {
    grade: "2nd Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 303,
    lessonName: "Fast and Slow Changes",
    description: "Identify fast changes (volcanoes, earthquakes). Identify slow changes (erosion). Understand Earth changes over time."
  },
  {
    grade: "2nd Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 303,
    lessonName: "Landforms",
    description: "Identify major landforms (mountains, hills). Identify bodies of water (oceans, lakes). Create a model of a landscape."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 304,
    lessonName: "Understand place value",
    description: "Understand three-digit numbers as hundreds, tens, ones. Count within 1000. Read and write numbers to 1000."
  },
  {
    grade: "2nd Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Grammar",
    lessonId: 304,
    lessonName: "Adjectives and Adverbs",
    description: "Use adjectives to describe nouns. Use adverbs to describe verbs. Produce simple, compound, and complex sentences."
  },
  {
    grade: "2nd Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 304,
    lessonName: "Forms of Water",
    description: "Identify water in solid and liquid forms. Understand where water is found on Earth. Map bodies of water."
  },
  {
    grade: "2nd Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 304,
    lessonName: "Continents and Oceans",
    description: "Locate the 7 continents. Locate the 5 oceans. Use a compass rose."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 305,
    lessonName: "Use place value to add and subtract",
    description: "Fluently add and subtract within 100. Add up to four two-digit numbers. Add and subtract within 1000 using models."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 306,
    lessonName: "Measure/estimate lengths in standard units",
    description: "Measure using rulers, yardsticks, meter sticks. Estimate lengths in inches and cm. Compare lengths of two objects."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 307,
    lessonName: "Relate addition/subtraction to length",
    description: "Use a number line to solve addition/subtraction. Solve word problems involving lengths. Represent whole numbers on a line diagram."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 308,
    lessonName: "Work with time and money",
    description: "Tell time to the nearest 5 minutes. Solve word problems involving dollar bills and coins. Use $ and ¢ symbols correctly."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Measurement and Data",
    lessonId: 309,
    lessonName: "Represent and interpret data",
    description: "Generate measurement data. Draw a picture graph and bar graph. Solve problems using information in graphs."
  },
  {
    grade: "2nd Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Geometry",
    lessonId: 310,
    lessonName: "Reason with shapes and their attributes",
    description: "Recognize and draw shapes with specific attributes. Partition a rectangle into rows and columns. Partition circles and rectangles into shares."
  },

  // --- 400 LEVEL (3RD GRADE) ---
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 401,
    lessonName: "Represent/solve multiplication & division",
    description: "Interpret products of whole numbers. Interpret whole-number quotients. Use multiplication/division to solve word problems."
  },
  {
    grade: "3rd Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 401,
    lessonName: "Main Idea and Details",
    description: "Determine the main idea of a text. Recount key details and explain support. Distinguish personal point of view from author's."
  },
  {
    grade: "3rd Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 401,
    lessonName: "Push and Pull Forces",
    description: "Investigate balanced and unbalanced forces. Predict motion based on force patterns. Understand gravity and friction."
  },
  {
    grade: "3rd Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Culture",
    lessonId: 401,
    lessonName: "World Cultures",
    description: "Define culture and tradition. Identify cultural elements (food, clothing). Compare communities in different regions."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 402,
    lessonName: "Properties of multiplication/division",
    description: "Apply properties of operations (commutative, associative). Understand division as an unknown-factor problem. Fluently multiply and divide within 100."
  },
  {
    grade: "3rd Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 402,
    lessonName: "Cause and Effect",
    description: "Describe the relationship between events. Identify cause and effect keywords. Use text evidence to support answers."
  },
  {
    grade: "3rd Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 402,
    lessonName: "Magnets",
    description: "Identify magnetic materials. Investigate attraction and repulsion. Solve a problem using magnets."
  },
  {
    grade: "3rd Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "Culture",
    lessonId: 402,
    lessonName: "Traditions and Holidays",
    description: "Describe various cultural holidays. Understand the meaning of traditions. Share personal family traditions."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 403,
    lessonName: "Multiply and divide within 100",
    description: "Fluently multiply and divide within 100. Know all products of two one-digit numbers. Use strategies for multiplication."
  },
  {
    grade: "3rd Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Vocabulary",
    lessonId: 403,
    lessonName: "Prefixes and Suffixes",
    description: "Determine the meaning of new words. Identify common prefixes and suffixes. Use root words as clues."
  },
  {
    grade: "3rd Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Life Science",
    lessonId: 403,
    lessonName: "Life Cycles",
    description: "Describe life cycles of plants and animals. Compare different life cycles. Understand birth, growth, reproduction, death."
  },
  {
    grade: "3rd Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 403,
    lessonName: "Adapting to Environment",
    description: "Explain how people adapt to environment. Identify human modifications to land. Understand renewable/nonrenewable resources."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 404,
    lessonName: "Solve four-operation problems & patterns",
    description: "Solve two-step word problems using the four operations. Identify arithmetic patterns. Explain patterns using properties of operations."
  },
  {
    grade: "3rd Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Vocabulary",
    lessonId: 404,
    lessonName: "Literal vs Non-literal",
    description: "Distinguish literal from non-literal language. Interpret metaphors and similes. Understand nuances in word meanings."
  },
  {
    grade: "3rd Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Life Science",
    lessonId: 404,
    lessonName: "Inherited Traits",
    description: "Distinguish inherited traits from learned behaviors. Analyze traits influenced by environment. Observe variation within a species."
  },
  {
    grade: "3rd Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Geography",
    lessonId: 404,
    lessonName: "Using Maps",
    description: "Use map scales and grids. Interpret map keys/legends. Locate places using cardinal directions."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 405,
    lessonName: "Place value & multi-digit arithmetic",
    description: "Use place value understanding to round numbers. Fluently add and subtract within 1000. Multiply one-digit whole numbers by multiples of 10."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 406,
    lessonName: "Understand fractions as numbers",
    description: "Understand a fraction 1/b as one part of a whole. Represent fractions on a number line. Explain equivalence of fractions."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 407,
    lessonName: "Time, volume, and mass problems",
    description: "Tell time to the nearest minute. Measure liquid volumes and masses. Solve word problems involving time intervals."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 408,
    lessonName: "Represent and interpret data",
    description: "Draw a scaled picture graph and bar graph. Generate measurement data by measuring lengths. Show data on a line plot."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 409,
    lessonName: "Concepts of area",
    description: "Recognize area as an attribute of plane figures. Measure area by counting unit squares. Relate area to multiplication and addition."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 410,
    lessonName: "Perimeter vs Area",
    description: "Solve real world problems involving perimeter. Distinguish between linear and area measures. Find rectangles with the same perimeter but different areas."
  },
  {
    grade: "3rd Grade",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 411,
    lessonName: "Reason with shapes and their attributes",
    description: "Categorize shapes by shared attributes. Partition shapes into parts with equal areas. Express the area of each part as a fraction."
  },

  // --- 500 LEVEL (4TH GRADE) ---
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 501,
    lessonName: "Use four operations with whole numbers",
    description: "Interpret a multiplication equation as a comparison. Solve multistep word problems with remainders. Assess the reasonableness of answers."
  },
  {
    grade: "4th Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Informational Text",
    lessonId: 501,
    lessonName: "Text Structure",
    description: "Describe the overall structure of events. Compare/contrast firsthand and secondhand accounts. Interpret information from charts and graphs."
  },
  {
    grade: "4th Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 501,
    lessonName: "Forms of Energy",
    description: "Identify forms of energy (light, heat, sound). Observe evidence of energy transfer. Relate speed to energy of an object."
  },
  {
    grade: "4th Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "State History",
    lessonId: 501,
    lessonName: "State Symbols",
    description: "Identify state bird, flower, flag. Explain the history of state symbols. Locate the state capital."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 502,
    lessonName: "Factors and multiples",
    description: "Find all factor pairs for a whole number 1-100. Determine if a number is prime or composite. Determine if a number is a multiple of a given digit."
  },
  {
    grade: "4th Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Informational Text",
    lessonId: 502,
    lessonName: "Summarize Text",
    description: "Determine the main idea. Summarize the text. Explain how details support the main idea."
  },
  {
    grade: "4th Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 502,
    lessonName: "Transfer of Energy",
    description: "Investigate energy transfer in collisions. Understand conversion of energy. Design a device to convert energy."
  },
  {
    grade: "4th Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "State History",
    lessonId: 502,
    lessonName: "Early Settlers",
    description: "Describe the lives of early settlers. Understand reasons for settlement. Identify indigenous peoples of the region."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 503,
    lessonName: "Generate and analyze patterns",
    description: "Generate a number or shape pattern. Identify apparent features of the pattern. Extend a pattern sequence."
  },
  {
    grade: "4th Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 503,
    lessonName: "Theme of a Story",
    description: "Determine the theme of a story/drama. Summarize the text. Describe in depth a character/setting."
  },
  {
    grade: "4th Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 503,
    lessonName: "Rocks and Fossils",
    description: "Identify rock types (sedimentary, igneous, metamorphic). Use fossils to understand past environments. Explain rock formation processes."
  },
  {
    grade: "4th Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Economics",
    lessonId: 503,
    lessonName: "Natural Resources",
    description: "Identify key natural resources of the state. Explain how resources impact economy. Understand conservation."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 504,
    lessonName: "Generalize place value understanding",
    description: "Recognize that a digit in one place represents 10x what it represents to its right. Read and write multi-digit whole numbers. Round multi-digit whole numbers."
  },
  {
    grade: "4th Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Literature",
    lessonId: 504,
    lessonName: "Character Analysis",
    description: "Analyze character traits and motivations. Explain how character actions contribute to sequence. Draw inferences from the text."
  },
  {
    grade: "4th Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Earth Science",
    lessonId: 504,
    lessonName: "Natural Hazards",
    description: "Identify causes of natural hazards. Map locations of volcanoes/earthquakes. Design solutions to reduce hazard impacts."
  },
  {
    grade: "4th Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Economics",
    lessonId: 504,
    lessonName: "Trade and Industry",
    description: "Identify major industries in the state. Understand imports and exports. Analyze the state's role in national economy."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 505,
    lessonName: "Multi-digit arithmetic",
    description: "Fluently add and subtract multi-digit whole numbers. Multiply a whole number of up to four digits. Find whole-number quotients and remainders."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 506,
    lessonName: "Fraction equivalence and ordering",
    description: "Explain why a fraction a/b is equivalent to (n x a)/(n x b). Compare two fractions with different numerators and denominators. Use visual fraction models."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 507,
    lessonName: "Build fractions from unit fractions",
    description: "Understand addition/subtraction of fractions. Decompose a fraction into a sum of fractions. Multiply a fraction by a whole number."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 508,
    lessonName: "Decimal notation & comparing decimals",
    description: "Express a fraction with denominator 10 as an equivalent with denominator 100. Use decimal notation for fractions. Compare two decimals to hundredths."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 509,
    lessonName: "Measurement conversions",
    description: "Know relative sizes of measurement units (km, m, cm; kg, g). Use the four operations to solve word problems involving distance/time. Apply area and perimeter formulas."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 510,
    lessonName: "Represent and interpret data",
    description: "Make a line plot to display a data set of measurements. Solve problems involving addition/subtraction of fractions using line plots. Analyze data trends."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 511,
    lessonName: "Concepts of angles and measurement",
    description: "Understand concepts of angle measurement. Measure angles in whole-number degrees using a protractor. Recognize angle measure as additive."
  },
  {
    grade: "4th Grade",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 512,
    lessonName: "Draw/identify lines, angles, shapes",
    description: "Draw points, lines, line segments, rays, angles. Classify 2D figures based on parallel or perpendicular lines. Identify lines of symmetry."
  },

  // --- 600 LEVEL (5TH GRADE) ---
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 601,
    lessonName: "Write and interpret numerical expressions",
    description: "Use parentheses, brackets, or braces in expressions. Write simple expressions that record calculations. Evaluate expressions using order of operations."
  },
  {
    grade: "5th Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 601,
    lessonName: "Quote Accurately",
    description: "Quote accurately from a text. Draw inferences from the text. Determine the theme from details."
  },
  {
    grade: "5th Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 601,
    lessonName: "Particles of Matter",
    description: "Model matter as made of particles. Understand conservation of matter. Observe mixing of substances."
  },
  {
    grade: "5th Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "US History",
    lessonId: 601,
    lessonName: "Native Americans",
    description: "Describe Native American cultural regions. Compare different tribal groups. Understand pre-colonial history."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 1,
    unitTitle: "Operations and Algebraic Thinking",
    lessonId: 602,
    lessonName: "Analyze patterns and relationships",
    description: "Generate two numerical patterns using two given rules. Identify apparent relationships between corresponding terms. Form ordered pairs and graph them."
  },
  {
    grade: "5th Grade",
    subject: "Reading",
    unitId: 1,
    unitTitle: "Literature",
    lessonId: 602,
    lessonName: "Compare Stories",
    description: "Compare and contrast two or more characters. Analyze how visual elements contribute to meaning. Compare stories in the same genre."
  },
  {
    grade: "5th Grade",
    subject: "Science",
    unitId: 1,
    unitTitle: "Physical Science",
    lessonId: 602,
    lessonName: "Chemical Changes",
    description: "Distinguish physical vs chemical changes. Identify signs of chemical reactions. Investigate properties of new substances."
  },
  {
    grade: "5th Grade",
    subject: "Social Studies",
    unitId: 1,
    unitTitle: "US History",
    lessonId: 602,
    lessonName: "Exploration and Colonization",
    description: "Identify early European explorers. Explain reasons for colonization. Describe life in the 13 colonies."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 603,
    lessonName: "Understand the place value system",
    description: "Understand place value powers of 10. Read, write, and compare decimals to thousandths. Round decimals to any place."
  },
  {
    grade: "5th Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Writing",
    lessonId: 603,
    lessonName: "Write Opinion Pieces",
    description: "Write opinion pieces on topics/texts. Support a point of view with reasons. Link opinion and reasons using words."
  },
  {
    grade: "5th Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Space Science",
    lessonId: 603,
    lessonName: "Solar System Planets",
    description: "Identify planets in the solar system. Understand orbit and rotation. Describe the scale of the solar system."
  },
  {
    grade: "5th Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Government",
    lessonId: 603,
    lessonName: "Bill of Rights",
    description: "Identify the Bill of Rights. Explain the purpose of amendments. Understand individual freedoms."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 2,
    unitTitle: "Number and Operations in Base Ten",
    lessonId: 604,
    lessonName: "Operations with multi-digit numbers & decimals",
    description: "Fluently multiply multi-digit whole numbers. Find whole-number quotients with up to four-digit dividends. Add, subtract, multiply, and divide decimals."
  },
  {
    grade: "5th Grade",
    subject: "Reading",
    unitId: 2,
    unitTitle: "Writing",
    lessonId: 604,
    lessonName: "Research Projects",
    description: "Conduct short research projects. Recall relevant information from experiences. Gather relevant information from print/digital sources."
  },
  {
    grade: "5th Grade",
    subject: "Science",
    unitId: 2,
    unitTitle: "Space Science",
    lessonId: 604,
    lessonName: "Stars and Gravity",
    description: "Understand the sun is a star. Explain apparent brightness of stars. Describe gravity's role in the universe."
  },
  {
    grade: "5th Grade",
    subject: "Social Studies",
    unitId: 2,
    unitTitle: "Government",
    lessonId: 604,
    lessonName: "Three Branches of Government",
    description: "Identify Legislative, Executive, Judicial branches. Explain checks and balances. Understand the separation of powers."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 605,
    lessonName: "Add and subtract fractions",
    description: "Add/subtract fractions with unlike denominators. Solve word problems involving addition/subtraction of fractions. Use benchmark fractions to estimate reasonableness."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 3,
    unitTitle: "Number and Operations—Fractions",
    lessonId: 606,
    lessonName: "Multiply and divide fractions",
    description: "Interpret a fraction as division of the numerator by the denominator. Multiply a fraction or whole number by a fraction. Divide unit fractions by whole numbers and vice versa."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 607,
    lessonName: "Convert measurement units",
    description: "Convert among different-sized standard measurement units. Use conversions in solving multi-step, real world problems. Understand metric vs US customary units."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 608,
    lessonName: "Represent and interpret data",
    description: "Make a line plot to display a data set. Use operations on fractions for line plot problems. Interpret data distribution."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 4,
    unitTitle: "Measurement and Data",
    lessonId: 609,
    lessonName: "Concepts of volume",
    description: "Recognize volume as an attribute of solid figures. Measure volume by counting unit cubes. Relate volume to multiplication and addition."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 610,
    lessonName: "Graph points on coordinate plane",
    description: "Understand a coordinate system (x-axis, y-axis). Represent real world and mathematical problems by graphing. Interpret coordinate values."
  },
  {
    grade: "5th Grade",
    subject: "Math",
    unitId: 5,
    unitTitle: "Geometry",
    lessonId: 611,
    lessonName: "Classify 2D figures",
    description: "Understand attributes belonging to a category of 2D figures. Classify two-dimensional figures in a hierarchy. Identify properties of polygons."
  }
];