// clue.js

// ----- Define the Clue class -----
export class Clue {
    constructor(text, type, linkedWords) {
        this.text = text; // display text includes number of linked words
        this.type = type;                               // "good", "neutral", or "bad"
        this.linkedWords = linkedWords;                 // actual words this clue points to
        this.numLinked = linkedWords.length;            // convenience field
        this.used = false;                              // whether this clue has been used already
    }
}

// ----- Define clue sets for each board -----
export const CLUES = [
    // Board 1
    [
        // --- Good tiles: 2 single-word clues each ---
        new Clue("Cider", "good", ["Apple"]),
        new Clue("Red", "good", ["Apple"]),
        new Clue("Pet", "good", ["Dog"]),
        new Clue("Canine", "good", ["Dog"]),
        new Clue("Pines", "good", ["Forest"]),
        new Clue("Camping", "good", ["Forest"]),
        new Clue("Home", "good", ["House"]),
        new Clue("Building", "good", ["House"]),
        new Clue("Fly", "good", ["Kite"]),
        new Clue("Sky", "good", ["Kite"]),
        new Clue("Peak", "good", ["Mountain"]),
        new Clue("Rock", "good", ["Mountain"]),
        new Clue("Family", "good", ["Dog", "House"]),
        new Clue("Denver", "good", ["Mountain", "Forest"]),
        new Clue("High", "good", ["Mountain", "Kite"]),
        new Clue("Orchard", "good", ["Apple", "Forest"]),
        new Clue("Cabin", "good", ["Forest", "House"]),

        // --- Neutral tiles: 2-word/3-word style, single-word clues ---
        new Clue("Fruit", "neutral", ["Apple"]),
        new Clue("String", "neutral", ["Kite"]),
        new Clue("School", "neutral", ["Apple"]),
        new Clue("Trees", "neutral", ["Forest"]),

        // --- Bad tiles: 2-word/3-word style, single-word clues ---
        new Clue("Driveway", "bad", ["House"]),
        new Clue("Wild", "bad", ["Mountain", "Forest"]),
        new Clue("Natural", "bad", ["Mountain", "Forest", "Apple"]),
        new Clue("Chill", "bad", ["Mountain"]),
        new Clue("Flow", "bad", ["Kite"]),
        new Clue("Huge", "bad", ["Mountain", "House"]),
        new Clue("Peaceful", "bad", ["Mountain", "Kite"])
    ],
    // Board 2 (example)
    // [
    //     new Clue("Water", "good", ["Ice", "Ocean"]),
    //     new Clue("Travel", "neutral", ["Car", "Plane"]),
    //     new Clue("Home", "bad", ["House", "Apartment"]),
    // ],
    // Add more boards here as needed
];

// ----- Hardcoded error rate distributions -----
export const CLUE_TYPE_DISTRIBUTIONS = {
    low:    { good: 0.8, neutral: 0.15, bad: 0.05 },
    medium: { good: 0.6, neutral: 0.2, bad: 0.2 },
    high:   { good: 0.3, neutral: 0.2,  bad: 0.5 }
};

// ----- Override distributions when the player made an error -----
export const ERROR_RESPONSE_DISTRIBUTIONS = {
    low:    { good: 1.0, neutral: 0.0, bad: 0.0 },
    medium: { good: 0.9, neutral: 0.1, bad: 0.0 },
    high:   { good: 0.7, neutral: 0.25, bad: 0.05 }
};

// ----- Helper to get clues for a board -----
export function getCluesForBoard(boardNumber) {
    const clues = CLUES[boardNumber] || [];
    console.log(`Board ${boardNumber} clues:`, clues.map(c => c.text));
    return clues;
}

// ----- Utility: pick a random clue type based on weighted probabilities -----
function sampleType(distribution) {
    const r = Math.random();
    let cumulative = 0;
    for (const [type, prob] of Object.entries(distribution)) {
        cumulative += prob;
        if (r <= cumulative) return type;
    }
    return 'good'; // fallback
}

// // ----- Utility: pick a random element from an array -----
// function randomChoice(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

// ----- Main clue generator function -----
export function getNextClue(boardNumber, errorRate, playerMadeError, boardClueHistory) {
    const clues = getCluesForBoard(boardNumber);

    // 1. Decide which distribution to use
    const distribution = playerMadeError
        ? ERROR_RESPONSE_DISTRIBUTIONS[errorRate]
        : CLUE_TYPE_DISTRIBUTIONS[errorRate];

    // 2. Sample a clue type
    let clueType = sampleType(distribution);

    // --- Added: define priority order for fallback ---
    const CLUE_TYPE_PRIORITY = ["good", "neutral", "bad"];

    // 3. Filter clues that are unused and whose linked words haven't been guessed
    const alreadyGuessedWords = boardClueHistory.flatMap(h => h.guessedWords);

    let available = clues.filter(c =>
        !c.used &&
        c.type === clueType &&
        c.linkedWords.every(word => !alreadyGuessedWords.includes(word))
    );

    // --- 4. Fallback: If empty, try next-best clue types ---
    if (available.length === 0) {
        let clueTypeIndex = CLUE_TYPE_PRIORITY.indexOf(clueType);
        let triedTypes = 0;

        while (available.length === 0 && triedTypes < CLUE_TYPE_PRIORITY.length - 1) {
            // loop through next types
            clueTypeIndex = (clueTypeIndex + 1) % CLUE_TYPE_PRIORITY.length;
            const nextType = CLUE_TYPE_PRIORITY[clueTypeIndex];

            available = clues.filter(c =>
                !c.used &&
                c.type === nextType &&
                c.linkedWords.every(word => !alreadyGuessedWords.includes(word))
            );
            triedTypes++;
        }

        if (available.length === 0) {
            const oneWordClues = clues.filter(c => c.numLinked === 1);
            oneWordClues.forEach(c => c.used = false);

            available = clues.filter(c =>
                !c.used &&
                c.type === clueType &&
                c.linkedWords.every(word => !alreadyGuessedWords.includes(word))
            );
        }

        // update clueType to the type we actually found (optional)
        if (available.length > 0) clueType = available[0].type;
    }

    // 5. Final fallback: if still empty, return null
    if (available.length === 0) return null;

    // 6. Sort by numLinked descending so higher payoff clues come first
    available.sort((a, b) => b.numLinked - a.numLinked);

    // Pick the first clue deterministically
    const chosen = available[0];
    chosen.used = true;

    // 7. Return in the same format as existing gameEngine expects
    return {
        text: chosen.text,
        type: chosen.type,
        maxGuesses: chosen.numLinked
    };
}