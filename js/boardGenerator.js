// boardGenerator.js

// Example pre-generated board
export const BOARDS = [
    {
        boardNumber: 1,
        tiles: [
            { word: "Dragon", category: "good" },
            { word: "Knight", category: "good" },
            { word: "Castle", category: "good" },
            { word: "Sword", category: "good" },
            { word: "Wizard", category: "good" },
            { word: "Crown", category: "good" },
            { word: "Torch", category: "neutral" },
            { word: "Book", category: "neutral" },
            { word: "Gold", category: "neutral" },
            { word: "Scroll", category: "neutral" },
            { word: "Horse", category: "bad" },
            { word: "King", category: "bad" },
            { word: "Potion", category: "bad" },
            { word: "Shield", category: "bad" },
            { word: "Cave", category: "bad" },
            { word: "Forest", category: "bad" }
        ]
    }
    ,{
        boardNumber: 2,
        tiles: [
            { word: "River", category: "good" },
            { word: "Bridge", category: "good" },
            { word: "Boat", category: "good" },
            { word: "Fish", category: "good" },
            { word: "Rain", category: "good" },
            { word: "Cloud", category: "good" },
            { word: "Tree", category: "neutral" },
            { word: "Field", category: "neutral" },
            { word: "Road", category: "neutral" },
            { word: "Train", category: "neutral" },
            { word: "Storm", category: "bad" },
            { word: "Shark", category: "bad" },
            { word: "Cave", category: "bad" },
            { word: "Lightning", category: "bad" },
            { word: "Fire", category: "bad" },
            { word: "Flood", category: "bad" }
        ]
    },
    {
        boardNumber: 3,
        tiles: [
            { word: "Star", category: "good" },
            { word: "Planet", category: "good" },
            { word: "Rocket", category: "good" },
            { word: "Astronaut", category: "good" },
            { word: "Galaxy", category: "good" },
            { word: "Moon", category: "good" },
            { word: "Comet", category: "neutral" },
            { word: "Meteor", category: "neutral" },
            { word: "Satellite", category: "neutral" },
            { word: "Telescope", category: "neutral" },
            { word: "Explosion", category: "bad" },
            { word: "Blackhole", category: "bad" },
            { word: "Alien", category: "bad" },
            { word: "Crash", category: "bad" },
            { word: "Sunburn", category: "bad" },
            { word: "War", category: "bad" }
        ]
    },
    {
        boardNumber: 4,
        tiles: [
            { word: "Building", category: "good" },
            { word: "Bridge", category: "good" },
            { word: "Subway", category: "good" },
            { word: "Street", category: "good" },
            { word: "Skyscraper", category: "good" },
            { word: "Park", category: "good" },
            { word: "Taxi", category: "neutral" },
            { word: "Market", category: "neutral" },
            { word: "Bench", category: "neutral" },
            { word: "Store", category: "neutral" },
            { word: "Fire", category: "bad" },
            { word: "Dumpster", category: "bad" },
            { word: "Collapse", category: "bad" },
            { word: "Robbery", category: "bad" },
            { word: "Pollution", category: "bad" },
            { word: "Strike", category: "bad" }
        ]
    },
    {
        boardNumber: 5,
        tiles: [
            { word: "Train", category: "good" },
            { word: "Airport", category: "good" },
            { word: "Luggage", category: "good" },
            { word: "Map", category: "good" },
            { word: "Camera", category: "good" },
            { word: "Hotel", category: "good" },
            { word: "Ticket", category: "neutral" },
            { word: "Guide", category: "neutral" },
            { word: "Restaurant", category: "neutral" },
            { word: "Bridge", category: "neutral" },
            { word: "Storm", category: "bad" },
            { word: "Turbulence", category: "bad" },
            { word: "Traffic", category: "bad" },
            { word: "Delay", category: "bad" },
            { word: "Motel", category: "bad" },
            { word: "Accident", category: "bad" }
        ]
    },
    {
        boardNumber: 6,
        tiles: [
            { word: "Bread", category: "good" },
            { word: "Butter", category: "good" },
            { word: "Knife", category: "good" },
            { word: "Oven", category: "good" },
            { word: "Recipe", category: "good" },
            { word: "Chef", category: "good" },
            { word: "Table", category: "neutral" },
            { word: "Cup", category: "neutral" },
            { word: "Market", category: "neutral" },
            { word: "Pantry", category: "neutral" },
            { word: "Pan", category: "bad" },
            { word: "Stove", category: "bad" },
            { word: "Dish", category: "bad" },
            { word: "Plate", category: "bad" },
            { word: "Fork", category: "bad" },
            { word: "Salad", category: "bad" }
        ]
    },
    {
        boardNumber: 7,
        tiles: [
            { word: "Guitar", category: "good" },
            { word: "Drums", category: "good" },
            { word: "Stage", category: "good" },
            { word: "Singer", category: "good" },
            { word: "Microphone", category: "good" },
            { word: "Lights", category: "good" },
            { word: "Chord", category: "neutral" },
            { word: "Studio", category: "neutral" },
            { word: "Harmonica", category: "neutral" },
            { word: "Album", category: "neutral" },
            { word: "Trumpet", category: "bad" },
            { word: "Piano", category: "bad" },
            { word: "Dance", category: "bad" },
            { word: "Camera", category: "bad" },
            { word: "Crowd", category: "bad" },
            { word: "Fan", category: "bad" }
        ]
    },
    {
        boardNumber: 8,
        tiles: [
            { word: "Ball", category: "good" },
            { word: "Goal", category: "good" },
            { word: "Coach", category: "good" },
            { word: "Team", category: "good" },
            { word: "Referee", category: "good" },
            { word: "Stadium", category: "good" },
            { word: "Uniform", category: "neutral" },
            { word: "Whistle", category: "neutral" },
            { word: "Crowd", category: "neutral" },
            { word: "Medal", category: "neutral" },
            { word: "Racket", category: "bad" },
            { word: "Skate", category: "bad" },
            { word: "Field", category: "bad" },
            { word: "Trophy", category: "bad" },
            { word: "Bench", category: "bad" },
            { word: "Camera", category: "bad" }
        ]
    },
    {
        boardNumber: 9,
        tiles: [
            { word: "Judge", category: "good" },
            { word: "Jury", category: "good" },
            { word: "Prison", category: "good" },
            { word: "Thief", category: "good" },
            { word: "Camera", category: "good" },
            { word: "Weapon", category: "good" },
            { word: "Files", category: "neutral" },
            { word: "Office", category: "neutral" },
            { word: "Magnifying", category: "neutral" },
            { word: "Document", category: "neutral" },
            { word: "Detective", category: "bad" },
            { word: "Clue", category: "bad" },
            { word: "Case", category: "bad" },
            { word: "Evidence", category: "bad" },
            { word: "Suspect", category: "bad" },
            { word: "Notebook", category: "bad" }
        ]
    }
];

const tutorialBoard = {
    boardNumber: 0,
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
        { word: "Piano", category: "bad" }
    ],
    metadata: { isTutorial: true, errorRate: "medium", apologyType: "good", teammateIcon: "🤖"}
};

const TEAMMATE_ICONS = [
    '🦊', // fox — clever, friendly
    '🐧', // penguin — cooperative
    '🐝', // bee — industrious team player
    '🦉', // owl — wise and calm
    '🐢', // turtle — steady and kind
    '🦋', // butterfly — gentle, transformative
    '🐇', // rabbit — energetic, hopeful
    '🐋', // whale — peaceful and deep
    '🐦', // bird — curious, observant
    '🦦', // otter — playful and social
    '🐙', // octopus — creative multitasker
    '🐼', // panda — calm and empathetic
    '🦜', // parrot — communicative
    '🐠', // fish — fluid and adaptive
    '🦢'  // swan — graceful and loyal
];

let blockSize = 3;

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

    let participantBoards = originalBoards.map((board) => ({
        ...board,
        tiles: shuffleArray(board.tiles, rng), // 🔀 shuffle tile order per board
        metadata: { isTutorial: false }
    }));

    participantBoards = shuffleArray(participantBoards, rng);

    const apologyTypes = shuffleArray(['good', 'bad', 'none'], rng);
    const teammateIcons = shuffleArray([...TEAMMATE_ICONS], rng);

    const allErrorRates = ['high', 'medium', 'low'];
    const usedErrorOrders = new Set();

    for (let i = 0; i < blockSize; i++) {
        const roundBoards = participantBoards.slice(i * blockSize, i * blockSize + blockSize);
        const teammateIcon = teammateIcons[i % teammateIcons.length];

        // Assign apology type
        roundBoards.forEach(board => {
            board.metadata.apologyType = apologyTypes[i];
            board.metadata.teammateIcon = teammateIcon;
        });

        // Generate unique error rate ordering for this round
        let errorOrder;
        do {
            errorOrder = shuffleArray([...allErrorRates], rng);
        } while (usedErrorOrders.has(errorOrder.join(',')));

        usedErrorOrders.add(errorOrder.join(','));

        roundBoards.forEach((board, j) => {
            board.metadata.errorRate = errorOrder[j];
        });
    }

    return [tutorialBoard, ...participantBoards];
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
