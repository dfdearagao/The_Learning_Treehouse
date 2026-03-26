export type Direction = [number, number]; // [dRow, dCol]

export const DIRS_EASY: Direction[] = [[0, 1], [1, 0]]; // Right, Down
export const DIRS_MEDIUM: Direction[] = [[0, 1], [1, 0], [1, 1], [-1, 1]]; // Right, Down, Diagonal Down-Right, Diagonal Up-Right
export const DIRS_HARD: Direction[] = [
  [0, 1], [1, 0], [1, 1], [-1, 1], // Forwards
  [0, -1], [-1, 0], [-1, -1], [1, -1] // Backwards
];

export interface PlacedWord {
  id: string;
  word: string;
  found: boolean;
  start: { r: number; c: number };
  end: { r: number; c: number };
  cells: { r: number; c: number }[];
  color: string;
}

export interface GridCell {
  letter: string;
  r: number;
  c: number;
}

const COLORS = [
  'bg-red-300', 'bg-orange-300', 'bg-amber-300', 'bg-yellow-300', 
  'bg-lime-300', 'bg-green-300', 'bg-emerald-300', 'bg-teal-300', 
  'bg-cyan-300', 'bg-sky-300', 'bg-blue-300', 'bg-indigo-300', 
  'bg-violet-300', 'bg-purple-300', 'bg-fuchsia-300', 'bg-pink-300', 'bg-rose-300'
];

export function generateGrid(words: string[], difficulty: 'easy' | 'medium' | 'hard', rng: () => number = Math.random) {
  let size = 8;
  let dirs = DIRS_EASY;
  let wordCount = 6;

  if (difficulty === 'medium') {
    size = 10;
    dirs = DIRS_MEDIUM;
    wordCount = 8;
  } else if (difficulty === 'hard') {
    size = 12;
    dirs = DIRS_HARD;
    wordCount = 10;
  }

  // select random words
  const selectedWords = [...words].sort(() => rng() - 0.5).slice(0, wordCount);
  
  // initialize grid
  const grid: string[][] = Array(size).fill(null).map(() => Array(size).fill(''));
  const placedWords: PlacedWord[] = [];
  const usedColors = new Set<string>();

  for (const word of selectedWords) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 200) {
      attempts++;
      const dir = dirs[Math.floor(rng() * dirs.length)];
      const startR = Math.floor(rng() * size);
      const startC = Math.floor(rng() * size);

      let canPlace = true;
      const cells: {r: number, c: number}[] = [];
      for (let i = 0; i < word.length; i++) {
        const r = startR + i * dir[0];
        const c = startC + i * dir[1];
        if (r < 0 || r >= size || c < 0 || c >= size) {
          canPlace = false;
          break;
        }
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
          canPlace = false;
          break;
        }
        cells.push({r, c});
      }

      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          grid[cells[i].r][cells[i].c] = word[i];
        }
        
        let color = COLORS[Math.floor(rng() * COLORS.length)];
        while (usedColors.has(color) && usedColors.size < COLORS.length) {
          color = COLORS[Math.floor(rng() * COLORS.length)];
        }
        usedColors.add(color);

        placedWords.push({
          id: word + '-' + startR + '-' + startC,
          word,
          found: false,
          start: cells[0],
          end: cells[cells.length - 1],
          cells,
          color
        });
        placed = true;
      }
    }
  }

  // fill empty
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const finalGrid: GridCell[][] = [];
  for (let r = 0; r < size; r++) {
    const row: GridCell[] = [];
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === '') {
        row.push({ letter: alphabet[Math.floor(rng() * alphabet.length)], r, c });
      } else {
        row.push({ letter: grid[r][c], r, c });
      }
    }
    finalGrid.push(row);
  }

  return { grid: finalGrid, placedWords, size };
}
