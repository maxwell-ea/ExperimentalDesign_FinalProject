// clue.js

// Example "goodness types" could be 'good', 'neutral', 'bad'
export function getNextClue(agentClueType = 'low') {
    let clueType = agentClueType.toLowerCase();

    console.log(clueType);

    // For now, just return a random placeholder text
    const dummyClues = {
        low: ['calm 4', 'bright 3', 'happy 2'],
        medium: ['table 1', 'box 2', 'pen 3'],
        high: ['pain 1', 'storm 2', 'mud 3']
    };

    // Pick randomly from the chosen type
    const clues = dummyClues[clueType];
    const index = Math.floor(Math.random() * clues.length);
    const rawText = clues[index]; // e.g., "Apple 2"
    const [word, number] = rawText.split(' ');

    return {
        text: word,                // just the word for display
        type: clueType,             // good/bad/neutral
        maxGuesses: parseInt(number, 10)
    };
}