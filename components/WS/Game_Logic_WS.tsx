import { GRID_WIDTH, GRID_HEIGHT, SHAPES, BASIC_DICTIONARY } from '../../constants_WS';
import { Grid, ActivePiece, Coordinate, WordMatch, Cell } from '../../types/types_WS';

export const createEmptyGrid = (): Grid => {
  return Array.from({ length: GRID_HEIGHT }, () =>
    Array(GRID_WIDTH).fill(null)
  );
};

export const checkCollision = (
  piece: ActivePiece,
  grid: Grid,
  moveX: number = 0,
  moveY: number = 0
): boolean => {
  const shape = SHAPES[piece.shape][piece.rotation];
  for (let i = 0; i < shape.length; i++) {
    const [row, col] = shape[i];
    const newX = piece.x + col + moveX;
    const newY = piece.y + row + moveY;

    if (
      newX < 0 ||
      newX >= GRID_WIDTH ||
      newY >= GRID_HEIGHT
    ) {
      return true;
    }

    // Ghost pieces pass through blocks until they become solid
    if (newY >= 0 && grid[newY][newX] !== null) {
      if (piece.specialType === 'GHOST' && !piece.isGhostSolid) {
        continue;
      }
      return true;
    }
  }
  return false;
};

export const mergePieceToGrid = (piece: ActivePiece, grid: Grid): Grid => {
  const newGrid = grid.map((row) => [...row]);

  // Handle BOMB piece: Explode 5x5 area
  if (piece.specialType === 'BOMB') {
    const centerX = piece.x; // Assuming 1x1 shape for bomb, or use center of shape
    const centerY = piece.y;
    const radius = 2;

    for (let y = centerY - radius; y <= centerY + radius; y++) {
      for (let x = centerX - radius; x <= centerX + radius; x++) {
        if (y >= 0 && y < GRID_HEIGHT && x >= 0 && x < GRID_WIDTH) {
          newGrid[y][x] = null; // Clear cell
        }
      }
    }
    return newGrid;
  }

  const shape = SHAPES[piece.shape][piece.rotation];

  shape.forEach(([row, col], index) => {
    const x = piece.x + col;
    const y = piece.y + row;
    if (y >= 0 && y < GRID_HEIGHT && x >= 0 && x < GRID_WIDTH) {
      newGrid[y][x] = {
        letter: piece.letters[index] || '?',
        locked: true,
        color: piece.color,
        id: `${Date.now()}-${index}-${Math.random()}`,
      };
    }
  });
  return newGrid;
};

// Word Checking Logic
const DIRECTIONS = [
  { dx: 1, dy: 0 }, // Horizontal
  { dx: 0, dy: 1 }, // Vertical
  { dx: 1, dy: 1 }, // Diagonal Down-Right
  { dx: 1, dy: -1 }, // Diagonal Up-Right
];

export const findWords = (grid: Grid): WordMatch[] => {
  const matches: WordMatch[] = [];
  
  // Helper to check validity
  const isValid = (x: number, y: number) =>
    x >= 0 && x < GRID_WIDTH && y >= 0 && y < GRID_HEIGHT;

  for (let y = 0; y < GRID_HEIGHT; y++) {
    for (let x = 0; x < GRID_WIDTH; x++) {
      const cell = grid[y][x];
      if (!cell) continue;

      for (const { dx, dy } of DIRECTIONS) {
        let currentWord = '';
        const currentCoords: Coordinate[] = [];
        let cx = x;
        let cy = y;

        // Trace in direction
        while (isValid(cx, cy)) {
          const c = grid[cy][cx];
          if (!c) break;
          
          currentWord += c.letter;
          currentCoords.push({ x: cx, y: cy });

          // Check if current string is a word (min 4 chars)
          if (currentWord.length >= 4) {
             if (BASIC_DICTIONARY.has(currentWord.toUpperCase())) {
                const type = currentWord.length >= 5 ? 'CLEAR' : 'HINT';
                matches.push({
                    word: currentWord,
                    coordinates: [...currentCoords],
                    score: currentWord.length * 100, // Basic scoring
                    type
                });
             }
          }
          
          cx += dx;
          cy += dy;
        }
      }
    }
  }

  return matches;
};

export const checkFullRows = (grid: Grid): number[] => {
  const fullRows: number[] = [];
  for (let y = 0; y < GRID_HEIGHT; y++) {
    // Check if every cell in the row is not null
    if (grid[y].every((cell) => cell !== null)) {
      fullRows.push(y);
    }
  }
  return fullRows;
};

// Returns new grid and score gained
export const clearBoard = (
  grid: Grid, 
  matches: WordMatch[], 
  fullRows: number[]
): { grid: Grid; score: number; clearedCells: number } => {
  if (matches.length === 0 && fullRows.length === 0) {
    return { grid, score: 0, clearedCells: 0 };
  }

  const newGrid = grid.map(row => row.map(cell => cell ? { ...cell } : null));
  const cellsToRemove = new Set<string>(); // "x,y"
  let totalScore = 0;

  // Add word matches to removal set
  matches.forEach(match => {
      totalScore += match.score;
      match.coordinates.forEach(c => cellsToRemove.add(`${c.x},${c.y}`));
  });

  // Add full rows to removal set and calculate score
  if (fullRows.length > 0) {
    // Classic scoring: 100 * lines * lines (exponential bonus for multi-line clears)
    totalScore += 100 * fullRows.length * fullRows.length;
    
    fullRows.forEach(y => {
      for (let x = 0; x < GRID_WIDTH; x++) {
        cellsToRemove.add(`${x},${y}`);
      }
    });
  }

  let clearedCount = 0;
  for(let y=0; y<GRID_HEIGHT; y++) {
      for(let x=0; x<GRID_WIDTH; x++) {
          if (cellsToRemove.has(`${x},${y}`)) {
              newGrid[y][x] = null;
              clearedCount++;
          }
      }
  }
  
  return { grid: newGrid, score: totalScore, clearedCells: clearedCount };
};

// Backward compatibility wrapper if needed, or simply replaced usage
export const clearMatches = (grid: Grid, matches: WordMatch[]) => clearBoard(grid, matches, []);

export const applyGravity = (grid: Grid): Grid => {
    const newGrid = createEmptyGrid();

    for (let x = 0; x < GRID_WIDTH; x++) {
        let writeY = GRID_HEIGHT - 1;
        for (let y = GRID_HEIGHT - 1; y >= 0; y--) {
            if (grid[y][x] !== null) {
                newGrid[writeY][x] = grid[y][x];
                writeY--;
            }
        }
    }
    return newGrid;
};
