import { TetrominoShape, ThemeConfig } from './types/types_WS';

export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;

export const SHAPES: Record<TetrominoShape, number[][][]> = {
  I: [
    [[0, 0], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [1, 0], [2, 0], [3, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [1, 0], [2, 0], [3, 0]],
  ],
  O: [
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
  ],
  T: [
    [[0, 1], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [1, 2], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [2, 1]],
    [[0, 1], [1, 0], [1, 1], [2, 1]],
  ],
  S: [
    [[0, 1], [0, 2], [1, 0], [1, 1]],
    [[0, 1], [1, 1], [1, 2], [2, 2]],
    [[0, 1], [0, 2], [1, 0], [1, 1]],
    [[0, 1], [1, 1], [1, 2], [2, 2]],
  ],
  Z: [
    [[0, 0], [0, 1], [1, 1], [1, 2]],
    [[0, 2], [1, 1], [1, 2], [2, 1]],
    [[0, 0], [0, 1], [1, 1], [1, 2]],
    [[0, 2], [1, 1], [1, 2], [2, 1]],
  ],
  J: [
    [[0, 0], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [0, 2], [1, 1], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [2, 2]],
    [[0, 1], [1, 1], [2, 0], [2, 1]],
  ],
  L: [
    [[0, 2], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [2, 1], [2, 2]],
    [[1, 0], [1, 1], [1, 2], [2, 0]],
    [[0, 0], [0, 1], [1, 1], [2, 1]],
  ],
  P_I: [
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
  ],
  P_T: [
    [[0, 1], [1, 1], [2, 1], [1, 0], [1, 2]],
    [[1, 0], [1, 1], [1, 2], [0, 1], [2, 1]],
    [[0, 1], [1, 1], [2, 1], [1, 0], [1, 2]],
    [[1, 0], [1, 1], [1, 2], [0, 1], [2, 1]],
  ],
  P_U: [
    [[0, 0], [0, 1], [1, 1], [2, 1], [2, 0]],
    [[0, 2], [1, 2], [1, 1], [1, 0], [0, 0]],
    [[0, 1], [0, 0], [1, 0], [2, 0], [2, 1]],
    [[1, 2], [0, 2], [0, 1], [0, 0], [1, 0]],
  ],
  P_V: [
    [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]],
    [[0, 2], [0, 1], [0, 0], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
    [[2, 0], [2, 1], [2, 2], [1, 2], [0, 2]],
  ],
  P_W: [
    [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]],
    [[0, 2], [0, 1], [1, 1], [1, 0], [2, 0]],
    [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]],
    [[0, 2], [0, 1], [1, 1], [1, 0], [2, 0]],
  ],
  BOMB: [
    [[0, 0]], [[0, 0]], [[0, 0]], [[0, 0]]
  ],
  HEAVY: [
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
  ],
  SPLITTER: [
    [[0, 0], [0, 1], [0, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [0, 2]],
    [[0, 0], [1, 0], [2, 0]],
  ],
  GHOST: [
    [[0, 1], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [1, 2], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [2, 1]],
    [[0, 1], [1, 0], [1, 1], [2, 1]],
  ],
};

export const COLORS: Record<TetrominoShape, string> = {
  I: 'bg-cyan-500',
  O: 'bg-yellow-400',
  T: 'bg-purple-500',
  S: 'bg-green-500',
  Z: 'bg-red-500',
  J: 'bg-blue-500',
  L: 'bg-orange-500',
  P_I: 'bg-teal-500',
  P_T: 'bg-indigo-500',
  P_U: 'bg-pink-500',
  P_V: 'bg-rose-500',
  P_W: 'bg-emerald-500',
  BOMB: 'bg-red-700',
  HEAVY: 'bg-slate-500',
  SPLITTER: 'bg-lime-500',
  GHOST: 'bg-white/50',
};

// Standard English Letter Frequency (approximate for game balance)
export const STANDARD_LETTER_WEIGHTS: Record<string, number> = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};

export const INITIAL_THEME: ThemeConfig = {
  name: 'Standard',
  letterWeights: STANDARD_LETTER_WEIGHTS,
};

// A small subset of common words for offline validation to ensure basic playability
// without hitting API limits instantly. Real game relies on this + user "Challenge" via AI.
export const BASIC_DICTIONARY = new Set([
  "THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "ANY", "CAN", "HAD", "HER", "WAS", "ONE", "OUR", "OUT", "DAY", "GET", "HAS", "HIM", "HIS", "HOW", "MAN", "NEW", "NOW", "OLD", "SEE", "TWO", "WAY", "WHO", "BOY", "DID", "ITS", "LET", "PUT", "SAY", "SHE", "TOO", "USE", "EAT", "ATE", "TEA", "CAT", "DOG", "BAT", "HAT", "MAT", "RAT", "SAT", "FAT", "LOG", "FOG", "JOG", "BIG", "DIG", "PIG", "WIG", "SUN", "RUN", "FUN", "GUN", "BUN", "HOT", "LOT", "POT", "COT", "DOT", "RED", "BED", "LED", "FED", "NET", "WET", "PET", "GET", "SET", "BET", "LET", "MET", "YET", "PEN", "HEN", "MEN", "TEN", "DEN", "WIN", "BIN", "PIN", "TIN", "SIN", "FIN", "KIN", "HIT", "BIT", "FIT", "LIT", "KIT", "SIT", "WIT", "CUT", "HUT", "NUT", "GUT", "RUT", "BUT", "JUT", "MUG", "RUG", "BUG", "HUG", "JUG", "TUG", "PUG", "DUG", "FOX", "BOX", "POX", "SIX", "FIX", "MIX", "WAX", "TAX", "MAX", "ZOO", "MOO", "BOO", "TOO", "COO", "LOO", "AIR", "AIM", "AGE", "AGO", "ANT", "APE", "ARM", "ART", "ASK", "BAD", "BAG", "BAR", "BAT", "BAY", "BED", "BEE", "BEG", "BET", "BID", "BIG", "BIN", "BIT", "BUS", "BUY", "CAN", "CAP", "CAR", "CAT", "COW", "CRY", "CUP", "CUT", "DAD", "DAY", "DID", "DIE", "DIG", "DIP", "DOG", "DRY", "DUE", "EAR", "EAT", "EGG", "EGO", "END", "EYE", "FAN", "FAR", "FAT", "FEW", "FIX", "FLY", "FOG", "FOR", "FUN", "FUR", "GAP", "GAS", "GAY", "GET", "GOD", "GOT", "GUM", "GUN", "GUY", "GYM", "HAD", "HAM", "HAS", "HAT", "HAY", "HEM", "HEN", "HER", "HEY", "HID", "HIM", "HIP", "HIS", "HIT", "HOG", "HOT", "HOW", "HUB", "HUE", "HUG", "HUM", "HUT", "ICE", "ICY", "ILL", "INK", "INN", "ION", "ITS", "IVY", "JAM", "JAR", "JAW", "JAY", "JET", "JEW", "JOB", "JOG", "JOY", "KEY", "KID", "KIN", "KIT", "LAB", "LAD", "LAG", "LAP", "LAW", "LAY", "LEG", "LET", "LID", "LIE", "LIP", "LOG", "LOT", "LOW", "MAD", "MAN", "MAP", "MAT", "MAY", "MEN", "MET", "MID", "MIX", "MOB", "MOM", "MUD", "MUG", "NET", "NEW", "NOD", "NOR", "NOT", "NOW", "NUT", "OAK", "ODD", "OFF", "OIL", "OLD", "ONE", "OUR", "OUT", "OWL", "OWN", "PAD", "PAN", "PAT", "PAY", "PEA", "PEN", "PET", "PIE", "PIG", "PIN", "PIT", "POT", "PRO", "PUT", "RAG", "RAM", "RAN", "RAP", "RAT", "RAW", "RAY", "RED", "RIB", "RID", "RIG", "RIM", "RIP", "ROB", "ROD", "ROW", "RUB", "RUG", "RUN", "SAD", "SAG", "SAT", "SAW", "SAY", "SEA", "SEE", "SET", "SEW", "SEX", "SHE", "SHY", "SIN", "SIP", "SIR", "SIT", "SIX", "SKI", "SKY", "SLY", "SON", "SOY", "SPA", "SPY", "SUM", "SUN", "TAB", "TAG", "TAN", "TAP", "TAX", "TEA", "TEN", "THE", "TIE", "TIN", "TIP", "TOE", "TON", "TOP", "TOY", "TRY", "TUB", "TUG", "TWO", "USE", "VAN", "VET", "VIA", "WAR", "WAS", "WAX", "WAY", "WEB", "WED", "WET", "WHO", "WHY", "WIG", "WIN", "WIT", "WON", "WOW", "YES", "YET", "YOU", "ZIP", "ZOO", "GAME", "PLAY", "WORD", "TEXT", "CODE", "TYPE", "READ", "BOOK", "PAGE", "LIST", "DATA", "INFO", "USER", "FILE", "EDIT", "SAVE", "LOAD", "OPEN", "EXIT", "QUIT", "STOP", "WAIT", "TIME", "DATE", "YEAR", "WEEK", "HOUR", "LONG", "TALL", "HIGH", "WIDE", "DEEP", "FAST", "SLOW", "GOOD", "BEST", "FINE", "NICE", "COOL", "WARM", "COLD", "BLUE", "CYAN", "LIME", "PINK", "TEAL", "GREY", "DARK", "SOFT", "HARD", "EASY", "SAFE", "TRUE", "REAL", "FULL", "FREE", "RICH", "POOR", "LOVE", "HATE", "LIKE", "HOPE", "WISH", "MIND", "SOUL", "BODY", "HEAD", "HAND", "FOOT", "FACE", "EYES", "EARS", "NOSE", "HAIR", "SKIN", "BONE", "CITY", "TOWN", "LAND", "ROAD", "PATH", "PARK", "HILL", "LAKE", "RIVER", "WIND", "RAIN", "SNOW", "FIRE", "STAR", "MOON", "PLANET", "SPACE", "SHIP", "BOAT", "CARS", "BIKE", "DOOR", "WALL", "ROOF", "ROOM", "HALL", "GATE", "SEAT", "DESK", "LAMP", "LOCK", "KEYS", "RING", "BAND", "SONG", "NOTE", "TONE", "TUNE", "BEAT", "DRUM", "BASS", "ROCK", "JAZZ", "POP", "SOUL", "KING", "QUEEN", "LORD", "LADY", "DUKE", "HERO", "GODS", "MYTH", "LORE", "EPIC", "TALE", "SAGA", "POEM", "WORD", "VERB", "NOUN", "MATH", "PLUS", "ZERO", "UNIT", "ITEM", "TOOL", "GEAR", "KIT", "PACK", "BAGS", "CASE", "BOX", "CARD", "DICE", "ROLL", "SPIN", "LUCK", "CHANCE", "RISK", "SAFE", "HEAL", "HURT", "PAIN", "CURE", "PILL", "DRUG", "DOSE", "VACCINE", "VIRUS", "GERM", "CELL", "ATOM", "CORE", "ROOT", "STEM", "LEAF", "TREE", "WOOD", "DIRT", "SAND", "DUST", "ASH", "MUD", "CLAY", "IRON", "GOLD", "LEAD", "ZINC", "COAL", "FUEL", "GAS", "OIL", "POWER", "WATT", "VOLT", "AMP", "OHM", "WIRE", "CORD", "PLUG", "JACK", "PORT", "LINK", "NODE", "HOST", "WEB", "NET", "SITE", "APP", "JAVA", "HTML", "CSS", "SQL", "PHP", "RUBY", "RUST", "PERL", "BASH", "SHELL", "UNIX", "LINUX", "WINDOWS", "MAC", "IOS", "ANDROID", "PHONE", "CALL", "TEXT", "MAIL", "CHAT", "ZOOM", "MEET", "TEAM", "WORK", "JOB", "BOSS", "HIRE", "FIRE", "SALE", "BUY", "SELL", "PAY", "COST", "CASH", "COIN", "BILL", "BANK", "LOAN", "DEBT", "TAX", "FEE", "FINE", "RATE", "DUE", "PAID", "OWE", "OWN", "RENT", "LEASE", "SOLD", "HELD", "KEPT", "LOST", "MADE", "DONE", "SEEN", "GONE", "TOOK", "GAVE", "SENT", "TOLD", "SAID", "KNEW", "FELT", "HEARD",
  // 5-Letter Words
  "APPLE", "BEACH", "BRAIN", "BREAD", "BRUSH", "CHAIR", "CHEST", "CHORD", "CLICK", "CLOCK", "CLOUD", "DANCE", "DIARY", "DRINK", "DRIVE", "EARTH", "FEAST", "FIELD", "FRUIT", "GLASS", "GRAPE", "GREEN", "GHOST", "HEART", "HOUSE", "IMAGE", "JUICE", "LIGHT", "LEMON", "MELON", "MONEY", "MUSIC", "NIGHT", "OCEAN", "PARTY", "PHONE", "PIZZA", "PLANE", "PLANT", "PLATE", "POWER", "RADIO", "RIVER", "ROBOT", "SHIRT", "SHOES", "SMILE", "SNAKE", "SPACE", "SPOON", "STORM", "TABLE", "TIGER", "TOAST", "TOUCH", "TRACK", "TRAIN", "TRUCK", "VOICE", "WATCH", "WATER", "WHALE", "WORLD", "WRITE", "YOUTH", "ZEBRA",
  // 6-Letter Words
  "ANIMAL", "BANANA", "BRIDGE", "BUTTON", "CAMERA", "CANDLE", "CASTLE", "CIRCLE", "COFFEE", "DINNER", "DOCTOR", "FAMILY", "FINGER", "FLOWER", "FOREST", "FRIEND", "GARDEN", "GUITAR", "ISLAND", "JACKET", "JUNGLE", "LADDER", "LETTER", "MARKET", "MEMORY", "MIRROR", "MONKEY", "MOTHER", "NATURE", "NUMBER", "OFFICE", "ORANGE", "PENCIL", "PERSON", "PLANET", "POCKET", "POLICE", "POTATO", "PURPLE", "RABBIT", "ROCKET", "SCHOOL", "SCREEN", "SEASON", "SHADOW", "SILVER", "SISTER", "SOCCER", "SPIRIT", "SPRING", "SQUARE", "STREET", "SUMMER", "SUNDAY", "SUNSET", "SYMBOL", "SYSTEM", "TENNIS", "TICKET", "TOMATO", "TRAVEL", "TURTLE", "VALLEY", "VIDEO", "VIOLIN", "WALLET", "WINDOW", "WINTER", "WONDER", "YELLOW"
]);
