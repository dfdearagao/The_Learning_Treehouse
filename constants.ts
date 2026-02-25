
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Globe2, 
  Users, 
  Gamepad2, 
  GraduationCap, 
  ShieldCheck,
  MousePointer2,
  UserPlus,
  Map as MapIcon,
  Trophy,
  Sparkles,
  Rocket,
  Puzzle,
  Zap,
  Star,
  Music,
  Palette,
  Brain,
  Ghost,
  Cat,
  Dog,
  Fish,
  Bird,
  Apple,
  Car,
  Plane,
  Heart,
  Scissors,
  CloudSun,
  Library,
  Smile,
  Shapes,
  Hammer,
  Search,
  Timer,
  Lightbulb
} from 'lucide-react';
import { FeatureItem, SubjectItem, User, EarlyChildhoodItem, GameItem, EarlyChildhoodCategory, StoreItem, Unit } from './types/types';
import { LESSON_CATALOG } from './lessonCatalog';

export const MOCK_USER: User = {
  name: "Alex",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  level: 5,
  xp: 1250,
  coins: 450,
  grade: "2nd Grade",
  inventory: ['furn_bed', 'dec_plant', 'toy_bear', 'furn_chair', 'dec_rug'], // Starting items
  treehouseState: {
    'bedroom': [
        { uid: '1', itemId: 'furn_bed', x: 20, y: 55 },
        { uid: '2', itemId: 'toy_bear', x: 50, y: 50 },
        { uid: '3', itemId: 'dec_rug', x: 40, y: 70 }
    ],
    'lobby': [
        { uid: '4', itemId: 'dec_plant', x: 80, y: 60 }
    ]
  },
  progress: {},
  lessonProgress: {}
};

export const FEATURES: FeatureItem[] = [
  {
    title: "Interactive Lessons",
    description: "Engage with gamified lessons that make mastering math, reading, and science a breeze.",
    icon: Gamepad2,
    colorClass: "bg-blue-100 text-blue-600"
  },
  {
    title: "Teacher Tools",
    description: "Track student progress, assign homework, and identify areas for improvement instantly.",
    icon: GraduationCap,
    colorClass: "bg-orange-100 text-orange-600"
  },
  {
    title: "Student Challenges",
    description: "Compete in friendly weekly challenges to earn badges and climb the class leaderboard.",
    icon: ShieldCheck,
    colorClass: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Fun & Safe Community",
    description: "A strictly moderated space where students can share achievements and encourage each other.",
    icon: Users,
    colorClass: "bg-green-100 text-green-600"
  }
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Sign Up & Customize",
    description: "Create your free account and design your own explorer avatar with cool hats and outfits.",
    icon: UserPlus,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 2,
    title: "Choose Your Path",
    description: "Pick a subject island to explore—Math Mountain, Reading River, or Science Sky.",
    icon: MapIcon,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 3,
    title: "Play to Learn",
    description: "Complete interactive games, quizzes, and puzzles to unlock new story levels.",
    icon: Sparkles,
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    id: 4,
    title: "Earn Rewards",
    description: "Collect coins to upgrade your virtual treehouse and earn badges for your sash!",
    icon: Trophy,
    color: "bg-amber-100 text-amber-600"
  }
];

export const CORE_SUBJECTS: SubjectItem[] = [
  {
    id: 'reading',
    title: 'Reading',
    mascot: BookOpen,
    gradient: 'from-blue-400 to-cyan-300',
    textColor: 'text-blue-900',
    longDescription: "Dive into magical worlds! From mastering phonics to exploring chapter books, our reading adventures help you become a storytelling superhero. Build your vocabulary and imagination one page at a time.",
    learningTags: ["Phonics & Sounds", "Reading Comprehension", "Vocabulary Building", "Grammar Fun", "Storytelling"],
    sampleActivities: [
      { title: "The Word Wizard's Tower", type: "Game" },
      { title: "Story Sequence Puzzle", type: "Puzzle" },
      { title: "Rhyme Time Challenge", type: "Quiz" }
    ]
  },
  {
    id: 'math',
    title: 'Math',
    mascot: Calculator,
    gradient: 'from-red-400 to-orange-300',
    textColor: 'text-red-900',
    longDescription: "Numbers are your friends! Climb Math Mountain by solving puzzles, building shapes, and mastering arithmetic. We make tough problems feel like fun challenges.",
    learningTags: ["Addition & Subtraction", "Multiplication & Division", "Fractions", "Geometry & Shapes", "Logic Puzzles"],
    sampleActivities: [
      { title: "Pizza Fraction Factory", type: "Game" },
      { title: "Number Ninja Battle", type: "Arcade" },
      { title: "Geometry City Builder", type: "Creative" }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    mascot: FlaskConical,
    gradient: 'from-green-400 to-emerald-300',
    textColor: 'text-green-900',
    longDescription: "Put on your lab coat! Explore nature, outer space, and cool experiments. Ask big questions about the world around us and find amazing answers through discovery.",
    learningTags: ["Plants & Animals", "Space & Planets", "Weather Watchers", "Physics Fun", "Human Body"],
    sampleActivities: [
      { title: "Volcano Lab Experiment", type: "Simulation" },
      { title: "Bug Hunter Expedition", type: "Adventure" },
      { title: "Solar System Tour", type: "Interactive" }
    ]
  },
  {
    id: 'social-studies',
    title: 'Social Studies',
    mascot: Globe2,
    gradient: 'from-purple-400 to-pink-300',
    textColor: 'text-purple-900',
    longDescription: "Travel through time and around the world! Learn about history, geography, and different cultures. Discover how communities work and how you can be a great citizen.",
    learningTags: ["World Geography", "History Heroes", "Community Helpers", "Ancient Civilizations", "Maps & Globes"],
    sampleActivities: [
      { title: "Time Traveler's Quest", type: "Adventure" },
      { title: "Map Maker Challenge", type: "Creative" },
      { title: "Community Helper Match", type: "Game" }
    ]
  }
];

export const EARLY_CHILDHOOD: EarlyChildhoodItem = {
  title: "Early Childhood",
  description: "A gentle start for our littlest learners (Pre-K).",
  mascot: MousePointer2, 
  gradient: 'from-yellow-300 to-amber-200'
};

export const ARCADE_GAMES: GameItem[] = [
    // --- Snake Games (IDs 3, 5, 11) ---
    { id: '3', title: 'Space Snake', category: 'Fun', color: 'bg-indigo-500', icon: Rocket },
    { id: '5', title: 'Dino Dash', category: 'Fun', color: 'bg-green-500', icon: Gamepad2 },
    { id: '11', title: 'Cosmic Caterpillar', category: 'Fun', color: 'bg-indigo-600', icon: Star },

    // --- Math Games ---
    { id: '1', title: 'Number Ninja', category: 'Math', color: 'bg-red-500', icon: Calculator },
    { id: '6', title: 'Pizza Math', category: 'Math', color: 'bg-orange-500', icon: Calculator },
    { id: '10', title: 'Shape Solver', category: 'Math', color: 'bg-red-400', icon: Shapes },
    { id: '16', title: 'Turbo Tables', category: 'Math', color: 'bg-orange-600', icon: Zap },
    { id: '20', title: 'Rocket Arithmetic', category: 'Math', color: 'bg-sky-500', icon: Plane },
    { id: '26', title: 'Star Counter', category: 'Math', color: 'bg-indigo-900', icon: Star },

    // --- Memory Games (Logic/Reading) ---
    { id: '2', title: 'Alphabet Match', category: 'Reading', color: 'bg-blue-500', icon: BookOpen },
    { id: '4', title: 'Pattern Pairs', category: 'Logic', color: 'bg-purple-500', icon: Puzzle },
    { id: '7', title: 'Letter Link', category: 'Reading', color: 'bg-yellow-500', icon: BookOpen },
    { id: '8', title: 'Mega Memory', category: 'Logic', color: 'bg-pink-500', icon: Brain },
    { id: '12', title: 'Symbol Scramble', category: 'Logic', color: 'bg-slate-700', icon: Puzzle },
    { id: '17', title: 'Story Pairs', category: 'Reading', color: 'bg-emerald-500', icon: BookOpen },
    { id: '18', title: 'Twin Tiles', category: 'Logic', color: 'bg-violet-500', icon: Puzzle },
    { id: '29', title: 'Vocab Vault', category: 'Reading', color: 'bg-pink-600', icon: Library },
    { id: '30', title: 'Brainy Pairs', category: 'Logic', color: 'bg-purple-700', icon: Brain },

    // --- Whack-a-Mole Games (Fun/Science/Others) ---
    { id: '9', title: 'Paint Popper', category: 'Fun', color: 'bg-teal-500', icon: Palette },
    { id: '13', title: 'Critter Catcher', category: 'Science', color: 'bg-green-400', icon: Cat },
    { id: '14', title: 'Note Nabber', category: 'Fun', color: 'bg-fuchsia-500', icon: Music },
    { id: '15', title: 'Globe Trotter', category: 'Science', color: 'bg-blue-400', icon: Globe2 },
    { id: '19', title: 'Asteroid Blaster', category: 'Fun', color: 'bg-red-600', icon: Hammer },
    { id: '21', title: 'Fruit Frenzy', category: 'Fun', color: 'bg-lime-500', icon: Apple },
    { id: '22', title: 'Bird Spotter', category: 'Science', color: 'bg-cyan-500', icon: Bird },
    { id: '23', title: 'Fish Feeder', category: 'Science', color: 'bg-blue-600', icon: Fish },
    { id: '24', title: 'Ghost Buster', category: 'Fun', color: 'bg-gray-500', icon: Ghost },
    { id: '25', title: 'Puppy Petting', category: 'Fun', color: 'bg-amber-500', icon: Dog },
    { id: '27', title: 'Artifact Hunter', category: 'Science', color: 'bg-yellow-600', icon: Search },
    { id: '28', title: 'Bubble Pop Lab', category: 'Science', color: 'bg-green-700', icon: FlaskConical },
];

export const EARLY_CHILDHOOD_CATEGORIES: EarlyChildhoodCategory[] = [
    {
        id: 'pre-reading',
        title: 'Pre-Reading Skills',
        description: 'Focus on early literacy foundations.',
        icon: BookOpen,
        colorClass: 'bg-orange-100 text-orange-600'
    },
    {
        id: 'math-foundations',
        title: 'Early Math Foundations',
        description: 'Simple, visual, hands-on math concepts.',
        icon: Calculator,
        colorClass: 'bg-blue-100 text-blue-600'
    },
    {
        id: 'creative-play',
        title: 'Creative Play',
        description: 'Encourage imagination and expression.',
        icon: Palette,
        colorClass: 'bg-pink-100 text-pink-600'
    },
    {
        id: 'sel',
        title: 'Social & Emotional',
        description: 'Feelings, sharing, and kindness stories.',
        icon: Heart,
        colorClass: 'bg-yellow-100 text-yellow-600'
    },
    {
        id: 'fine-motor',
        title: 'Fine Motor Skills',
        description: 'Supports handwriting and coordination.',
        icon: Scissors,
        colorClass: 'bg-purple-100 text-purple-600'
    },
    {
        id: 'exploration',
        title: 'Exploration & Discovery',
        description: 'Simple world awareness.',
        icon: CloudSun,
        colorClass: 'bg-green-100 text-green-600'
    },
    {
        id: 'songs',
        title: 'Songs & Movement',
        description: 'High engagement music and dance.',
        icon: Music,
        colorClass: 'bg-teal-100 text-teal-600'
    },
    {
        id: 'story-library',
        title: 'Story Library',
        description: 'A dedicated storytelling space.',
        icon: Library,
        colorClass: 'bg-indigo-100 text-indigo-600'
    },
    {
        id: 'toddler-learning',
        title: 'Toddler Learning',
        description: 'Fun games for our youngest explorers.',
        icon: Smile,
        colorClass: 'bg-rose-100 text-rose-600'
    },
    {
        id: 'parent-teacher',
        title: 'Parent/Teacher Corner',
        description: 'Progress tracking and printable resources.',
        icon: Users,
        colorClass: 'bg-slate-200 text-slate-600'
    }
];

export const STORE_ITEMS: StoreItem[] = [
    // --- Furniture ---
    { id: 'furn_bed', name: 'Cozy Bed', price: 200, category: 'Furniture', icon: '🛏️', color: 'bg-blue-200' },
    { id: 'furn_couch', name: 'Soft Couch', price: 150, category: 'Furniture', icon: '🛋️', color: 'bg-green-200' },
    { id: 'furn_chair', name: 'Reading Chair', price: 80, category: 'Furniture', icon: '🪑', color: 'bg-yellow-200' },
    { id: 'furn_desk', name: 'Study Desk', price: 120, category: 'Furniture', icon: '🪚', color: 'bg-orange-200' },
    { id: 'furn_shelf', name: 'Bookshelf', price: 100, category: 'Furniture', icon: '📚', color: 'bg-stone-200' },
    { id: 'furn_beanbag', name: 'Beanbag', price: 60, category: 'Furniture', icon: '🥔', color: 'bg-purple-200' },
    
    // --- Decoration ---
    { id: 'dec_rug', name: 'Fluffy Rug', price: 50, category: 'Decor', icon: '🧶', color: 'bg-pink-200' },
    { id: 'dec_plant', name: 'Potted Plant', price: 40, category: 'Decor', icon: '🪴', color: 'bg-green-200' },
    { id: 'dec_lamp', name: 'Lava Lamp', price: 70, category: 'Decor', icon: '💡', color: 'bg-red-200' },
    { id: 'dec_clock', name: 'Wall Clock', price: 30, category: 'Decor', icon: '🕰️', color: 'bg-stone-300' },
    { id: 'dec_globe', name: 'World Globe', price: 90, category: 'Decor', icon: '🌍', color: 'bg-blue-300' },
    { id: 'dec_poster', name: 'Space Poster', price: 25, category: 'Decor', icon: '🖼️', color: 'bg-indigo-200' },
    { id: 'dec_paint', name: 'Art Easel', price: 110, category: 'Decor', icon: '🎨', color: 'bg-yellow-100' },

    // --- Tech ---
    { id: 'tech_tv', name: 'Television', price: 300, category: 'Tech', icon: '📺', color: 'bg-gray-300' },
    { id: 'tech_pc', name: 'Computer', price: 500, category: 'Tech', icon: '💻', color: 'bg-blue-100' },
    { id: 'tech_telescope', name: 'Telescope', price: 250, category: 'Tech', icon: '🔭', color: 'bg-indigo-300' },
    { id: 'tech_music', name: 'Boombox', price: 120, category: 'Tech', icon: '📻', color: 'bg-red-300' },

    // --- Pets ---
    { id: 'pet_dog', name: 'Puppy', price: 150, category: 'Pet', icon: '🐶', color: 'bg-amber-200' },
    { id: 'pet_cat', name: 'Kitten', price: 150, category: 'Pet', icon: '🐱', color: 'bg-orange-100' },
    { id: 'pet_dragon', name: 'Mini Dragon', price: 800, category: 'Pet', icon: '🐉', color: 'bg-emerald-200' },
    { id: 'pet_fish', name: 'Goldfish', price: 60, category: 'Pet', icon: '🐠', color: 'bg-cyan-200' },
    
    // --- Toys ---
    { id: 'toy_car', name: 'Race Car', price: 40, category: 'Toy', icon: '🏎️', color: 'bg-red-400' },
    { id: 'toy_bear', name: 'Teddy Bear', price: 30, category: 'Toy', icon: '🧸', color: 'bg-yellow-400' },
    { id: 'toy_robot', name: 'Robot', price: 85, category: 'Toy', icon: '🤖', color: 'bg-slate-300' },
    { id: 'toy_ball', name: 'Soccer Ball', price: 25, category: 'Toy', icon: '⚽', color: 'bg-white' },

    // --- Accessories (Wearables/Misc) ---
    { id: 'acc_hat', name: 'Wizard Hat', price: 80, category: 'Accessory', icon: '🎩', color: 'bg-purple-300' },
    { id: 'acc_glasses', name: 'Cool Shades', price: 30, category: 'Accessory', icon: '🕶️', color: 'bg-black text-white' },
    { id: 'acc_crown', name: 'Gold Crown', price: 300, category: 'Accessory', icon: '👑', color: 'bg-yellow-300' },
];

// ... (Rest of file unchanged, just updating MOCK_USER)
const generateCurriculum = (subject: string): Record<string, Unit[]> => {
  const subjectLessons = LESSON_CATALOG.filter(l => l.subject === subject);
  const grades = Array.from(new Set(subjectLessons.map(l => l.grade)));
  
  const curriculum: Record<string, Unit[]> = {};

  grades.forEach(grade => {
    const lessonsInGrade = subjectLessons.filter(l => l.grade === grade);
    const unitsMap = new globalThis.Map<number, Unit>(); 

    lessonsInGrade.forEach(entry => {
      if (!unitsMap.has(entry.unitId)) {
        unitsMap.set(entry.unitId, {
          id: entry.unitId,
          title: entry.unitTitle,
          description: `Focus on ${entry.unitTitle}`, 
          lessons: []
        });
      }
      
      const unit = unitsMap.get(entry.unitId)!;
      
      const types: Array<'practice' | 'project' | 'quiz'> = ['practice', 'project', 'quiz'];
      const type = types[entry.lessonId % 3];
      
      const durations = ["15m", "20m", "25m", "30m"];
      const duration = durations[entry.lessonId % 4];

      const objectives = entry.description
        .split('. ')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => s.endsWith('.') ? s : s + '.');

      unit.lessons.push({
        id: entry.lessonId,
        title: entry.lessonName,
        duration: duration,
        type: type,
        objectives: objectives
      });
    });

    curriculum[grade] = Array.from(unitsMap.values());
  });

  return curriculum;
};

export const MATH_CURRICULUM = generateCurriculum("Math");
export const READING_CURRICULUM = generateCurriculum("Reading");
export const SCIENCE_CURRICULUM = generateCurriculum("Science");
export const SOCIAL_STUDIES_CURRICULUM = generateCurriculum("Social Studies");
