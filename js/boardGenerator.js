// boardGenerator.js

// Example pre-generated board
export const BOARDS = [
    {
        boardNumber: 1,
        tiles: [
            { word: "Apple", category: "good" },
            { word: "Banana", category: "neutral" },
            { word: "Car", category: "bad" },
            { word: "Dog", category: "good" },
            { word: "Elephant", category: "bad" },
            { word: "Forest", category: "good" },
            { word: "Guitar", category: "neutral" },
            { word: "House", category: "good" },
            { word: "Ice", category: "bad" },
            { word: "Jungle", category: "neutral" },
            { word: "Kite", category: "good" },
            { word: "Lion", category: "bad" },
            { word: "Mountain", category: "good" },
            { word: "Notebook", category: "neutral" },
            { word: "Ocean", category: "bad" },
            { word: "Piano", category: "bad" } // corrected from good → bad
        ]
    }
    // ,{
    //     boardNumber: 2,
    //     tiles: [
    //         { word: "Rainbow", category: "good" },
    //         { word: "Snow", category: "bad" },
    //         { word: "Train", category: "bad" },
    //         { word: "Cat", category: "good" },
    //         { word: "River", category: "neutral" },
    //         { word: "Book", category: "good" },
    //         { word: "Bridge", category: "neutral" },
    //         { word: "Chair", category: "bad" },
    //         { word: "Cloud", category: "good" },
    //         { word: "Flower", category: "neutral" },
    //         { word: "Plane", category: "bad" },
    //         { word: "Sun", category: "good" },
    //         { word: "Tree", category: "good" },
    //         { word: "Moon", category: "bad" },
    //         { word: "Desk", category: "neutral" },
    //         { word: "Giraffe", category: "bad" } // corrected from good → bad
    //     ]
    // },
    // {
    //     boardNumber: 3,
    //     tiles: [
    //         { word: "Laptop", category: "good" },
    //         { word: "Chair", category: "bad" },
    //         { word: "Coffee", category: "neutral" },
    //         { word: "Dog", category: "good" },
    //         { word: "Street", category: "bad" },
    //         { word: "Window", category: "good" },
    //         { word: "Book", category: "neutral" },
    //         { word: "Car", category: "bad" },
    //         { word: "Pen", category: "good" },
    //         { word: "Clock", category: "neutral" },
    //         { word: "Bottle", category: "bad" },
    //         { word: "Apple", category: "good" },
    //         { word: "Phone", category: "good" },
    //         { word: "Lamp", category: "bad" },
    //         { word: "Notebook", category: "neutral" },
    //         { word: "Plant", category: "bad" } // corrected from good → bad
    //     ]
    // },
    // {
    //     boardNumber: 4,
    //     tiles: [
    //         { word: "Sunflower", category: "good" },
    //         { word: "Storm", category: "bad" },
    //         { word: "Notebook", category: "neutral" },
    //         { word: "Butterfly", category: "good" },
    //         { word: "Spider", category: "bad" },
    //         { word: "River", category: "neutral" },
    //         { word: "Chocolate", category: "good" },
    //         { word: "Trash", category: "bad" },
    //         { word: "Rainbow", category: "good" },
    //         { word: "Mold", category: "bad" },
    //         { word: "Chair", category: "neutral" },
    //         { word: "Ocean", category: "good" },
    //         { word: "Virus", category: "bad" },
    //         { word: "Pencil", category: "good" },
    //         { word: "Smoke", category: "bad" },
    //         { word: "Cloud", category: "neutral" }
    //     ]
    // },
    // {
    //     boardNumber: 5,
    //     tiles: [
    //         { word: "Apple", category: "good" },
    //         { word: "Flood", category: "bad" },
    //         { word: "Desk", category: "neutral" },
    //         { word: "Cat", category: "good" },
    //         { word: "Broken", category: "bad" },
    //         { word: "Book", category: "neutral" },
    //         { word: "Guitar", category: "good" },
    //         { word: "Garbage", category: "bad" },
    //         { word: "Sun", category: "good" },
    //         { word: "Shark", category: "bad" },
    //         { word: "Lamp", category: "neutral" },
    //         { word: "Tree", category: "good" },
    //         { word: "Fire", category: "bad" },
    //         { word: "Cake", category: "good" },
    //         { word: "Mud", category: "bad" },
    //         { word: "River", category: "neutral" }
    //     ]
    // },
    // {
    //     boardNumber: 6,
    //     tiles: [
    //         { word: "Laptop", category: "good" },
    //         { word: "Smoke", category: "bad" },
    //         { word: "Paper", category: "neutral" },
    //         { word: "Dog", category: "good" },
    //         { word: "Flood", category: "bad" },
    //         { word: "Notebook", category: "neutral" },
    //         { word: "Chocolate", category: "good" },
    //         { word: "Garbage", category: "bad" },
    //         { word: "Flower", category: "good" },
    //         { word: "Virus", category: "bad" },
    //         { word: "Pen", category: "neutral" },
    //         { word: "Sun", category: "good" },
    //         { word: "Storm", category: "bad" },
    //         { word: "Cake", category: "good" },
    //         { word: "Mud", category: "bad" },
    //         { word: "Chair", category: "neutral" }
    //     ]
    // },
    // {
    //     boardNumber: 7,
    //     tiles: [
    //         { word: "Camera", category: "good" },
    //         { word: "Storm", category: "bad" },
    //         { word: "Table", category: "neutral" },
    //         { word: "Dog", category: "good" },
    //         { word: "Virus", category: "bad" },
    //         { word: "Book", category: "neutral" },
    //         { word: "Sun", category: "good" },
    //         { word: "Trash", category: "bad" },
    //         { word: "Laptop", category: "good" },
    //         { word: "Flood", category: "bad" },
    //         { word: "Pencil", category: "neutral" },
    //         { word: "Chair", category: "good" },
    //         { word: "Fire", category: "bad" },
    //         { word: "Cake", category: "good" },
    //         { word: "Mud", category: "bad" },
    //         { word: "Notebook", category: "neutral" }
    //     ]
    // },
    // {
    //     boardNumber: 8,
    //     tiles: [
    //         { word: "Tree", category: "good" },
    //         { word: "Broken", category: "bad" },
    //         { word: "Paper", category: "neutral" },
    //         { word: "Cat", category: "good" },
    //         { word: "Ice", category: "bad" },
    //         { word: "Clock", category: "neutral" },
    //         { word: "Rainbow", category: "good" },
    //         { word: "Garbage", category: "bad" },
    //         { word: "Flower", category: "good" },
    //         { word: "Shark", category: "bad" },
    //         { word: "Lamp", category: "neutral" },
    //         { word: "Chocolate", category: "good" },
    //         { word: "Storm", category: "bad" },
    //         { word: "Ocean", category: "good" },
    //         { word: "Virus", category: "bad" },
    //         { word: "Desk", category: "neutral" }
    //     ]
    // },
    // {
    //     boardNumber: 9,
    //     tiles: [
    //         { word: "Mountain", category: "good" },
    //         { word: "Flood", category: "bad" },
    //         { word: "Notebook", category: "neutral" },
    //         { word: "Piano", category: "good" },
    //         { word: "Smoke", category: "bad" },
    //         { word: "Book", category: "neutral" },
    //         { word: "Kite", category: "good" },
    //         { word: "Broken", category: "bad" },
    //         { word: "Sunflower", category: "good" },
    //         { word: "Trash", category: "bad" },
    //         { word: "Chair", category: "neutral" },
    //         { word: "Dog", category: "good" },
    //         { word: "Ice", category: "bad" },
    //         { word: "Tree", category: "good" },
    //         { word: "Mold", category: "bad" },
    //         { word: "Paper", category: "neutral" }
    //     ]
    // }
];

// TODO: CHANGE BACK TO 3 AFTER PILOT DEMO
let blockSize = 1;

// --- Seedable random function for testing ---
export function mulberry32(a) {
    return function() {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// --- Shuffle function with optional RNG ---
export function shuffleArray(array, rng = Math.random) {
    const arr = array.slice(); // make a copy
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- Participant-specific board generator ---
export function generateParticipantBoards(originalBoards, seed = null) {
    const rng = seed ? mulberry32(seed) : Math.random;

    // Copy original boards and attach metadata
    let participantBoards = originalBoards.map((board) => ({
        ...board,  // track original board for comparisons
        metadata: {}            // placeholder for apology type & error rate
    }));

    // Shuffle participant boards
    participantBoards = shuffleArray(participantBoards, rng);

    // Assign apology types per round (3 boards per round)
    const apologyTypes = shuffleArray(['good', 'bad', 'none'], rng);
    for (let i = 0; i < blockSize; i++) {
        const roundBoards = participantBoards.slice(i * blockSize, i * blockSize + blockSize);
        roundBoards.forEach(board => {
            board.metadata.apologyType = apologyTypes[i];
        });

        // Assign error rates randomly within the round
        const errorRates = shuffleArray(['high', 'medium', 'low'], rng);
        roundBoards.forEach((board, j) => {
            board.metadata.errorRate = errorRates[j];
        });
    }

    return participantBoards;
}

// --- Board class (unchanged from your current implementation) ---
export class Board {
    constructor(boardData, flipCallback) {
        this.boardNumber = boardData.boardNumber;
        this.tiles = boardData.tiles.map(tile => ({ ...tile, revealed: false }));
        this.flipCallback = flipCallback;
        this.disableClicks = false;
    }

    render(container) {
        container.innerHTML = '';

        this.tiles.forEach((tile) => {
            const tileEl = document.createElement('button');
            tileEl.textContent = tile.word;
            tileEl.classList.add('tile');

            tileEl.addEventListener('click', () => {
                if (tile.revealed || this.disableClicks) return;

                tile.revealed = true;

                if(tile.category === 'good') tileEl.classList.add('tile-good');
                if(tile.category === 'bad') tileEl.classList.add('tile-bad');
                if(tile.category === 'neutral') tileEl.classList.add('tile-neutral');

                if (this.flipCallback) {
                    const pointsEarned = tile.category === 'good' ? 1
                        : tile.category === 'bad' ? -1
                            : 0;
                    this.flipCallback(tile.category, pointsEarned, tile.word);
                }
            });

            container.appendChild(tileEl);
        });
    }
}
