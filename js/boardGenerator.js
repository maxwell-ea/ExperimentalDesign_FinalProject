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
    },
    {
        boardNumber: 2,
        tiles: [
            { word: "Rainbow", category: "good" },
            { word: "Snow", category: "bad" },
            { word: "Train", category: "bad" },
            { word: "Cat", category: "good" },
            { word: "River", category: "neutral" },
            { word: "Book", category: "good" },
            { word: "Bridge", category: "neutral" },
            { word: "Chair", category: "bad" },
            { word: "Cloud", category: "good" },
            { word: "Flower", category: "neutral" },
            { word: "Plane", category: "bad" },
            { word: "Sun", category: "good" },
            { word: "Tree", category: "good" },
            { word: "Moon", category: "bad" },
            { word: "Desk", category: "neutral" },
            { word: "Giraffe", category: "bad" } // corrected from good → bad
        ]
    },
    {
        boardNumber: 3,
        tiles: [
            { word: "Laptop", category: "good" },
            { word: "Chair", category: "bad" },
            { word: "Coffee", category: "neutral" },
            { word: "Dog", category: "good" },
            { word: "Street", category: "bad" },
            { word: "Window", category: "good" },
            { word: "Book", category: "neutral" },
            { word: "Car", category: "bad" },
            { word: "Pen", category: "good" },
            { word: "Clock", category: "neutral" },
            { word: "Bottle", category: "bad" },
            { word: "Apple", category: "good" },
            { word: "Phone", category: "good" },
            { word: "Lamp", category: "bad" },
            { word: "Notebook", category: "neutral" },
            { word: "Plant", category: "bad" } // corrected from good → bad
        ]
    },
    {
        boardNumber: 4,
        tiles: [
            { word: "Sunflower", category: "good" },
            { word: "Storm", category: "bad" },
            { word: "Notebook", category: "neutral" },
            { word: "Butterfly", category: "good" },
            { word: "Spider", category: "bad" },
            { word: "River", category: "neutral" },
            { word: "Chocolate", category: "good" },
            { word: "Trash", category: "bad" },
            { word: "Rainbow", category: "good" },
            { word: "Mold", category: "bad" },
            { word: "Chair", category: "neutral" },
            { word: "Ocean", category: "good" },
            { word: "Virus", category: "bad" },
            { word: "Pencil", category: "good" },
            { word: "Smoke", category: "bad" },
            { word: "Cloud", category: "neutral" }
        ]
    },
    {
        boardNumber: 5,
        tiles: [
            { word: "Apple", category: "good" },
            { word: "Flood", category: "bad" },
            { word: "Desk", category: "neutral" },
            { word: "Cat", category: "good" },
            { word: "Broken", category: "bad" },
            { word: "Book", category: "neutral" },
            { word: "Guitar", category: "good" },
            { word: "Garbage", category: "bad" },
            { word: "Sun", category: "good" },
            { word: "Shark", category: "bad" },
            { word: "Lamp", category: "neutral" },
            { word: "Tree", category: "good" },
            { word: "Fire", category: "bad" },
            { word: "Cake", category: "good" },
            { word: "Mud", category: "bad" },
            { word: "River", category: "neutral" }
        ]
    },
    {
        boardNumber: 6,
        tiles: [
            { word: "Laptop", category: "good" },
            { word: "Smoke", category: "bad" },
            { word: "Paper", category: "neutral" },
            { word: "Dog", category: "good" },
            { word: "Flood", category: "bad" },
            { word: "Notebook", category: "neutral" },
            { word: "Chocolate", category: "good" },
            { word: "Garbage", category: "bad" },
            { word: "Flower", category: "good" },
            { word: "Virus", category: "bad" },
            { word: "Pen", category: "neutral" },
            { word: "Sun", category: "good" },
            { word: "Storm", category: "bad" },
            { word: "Cake", category: "good" },
            { word: "Mud", category: "bad" },
            { word: "Chair", category: "neutral" }
        ]
    }
];

// Board class
export class Board {
    constructor(boardData, flipCallback) {
        this.boardNumber = boardData.boardNumber;
        this.tiles = boardData.tiles.map(tile => ({ ...tile, revealed: false }));
        this.flipCallback = flipCallback;
        this.disableClicks = false; // <-- add this
    }

    render(container) {
        container.innerHTML = '';

        this.tiles.forEach((tile) => {
            const tileEl = document.createElement('button');
            tileEl.textContent = tile.word;
            tileEl.classList.add('tile');

            tileEl.addEventListener('click', () => {
                if (tile.revealed) return;
                if (this.disableClicks) return; // <-- add this

                tile.revealed = true;

                if(tile.category === 'good') tileEl.classList.add('tile-good');
                if(tile.category === 'bad') tileEl.classList.add('tile-bad');
                if(tile.category === 'neutral') tileEl.classList.add('tile-neutral');

                // Notify gameEngine
                if (this.flipCallback) {
                    const pointsEarned = tile.category === 'good' ? 1
                        : tile.category === 'bad' ? -1
                            : 0;
                    this.flipCallback(tile.category, pointsEarned, tile.word); // pass tile.word too
                }

                tileEl.textContent = tile.word;
            });

            container.appendChild(tileEl);
        });
    }
}
