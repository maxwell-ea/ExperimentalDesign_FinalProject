// clue.js

// Example "goodness types" could be 'good', 'neutral', 'bad'
export function getNextClue(agentClueType = 'good') {
    let clueType = agentClueType.toLowerCase();

    // For now, just return a random placeholder text
    const dummyClues = {
        good: ['calm 4', 'bright 3', 'happy 2'],
        neutral: ['table 1', 'box 2', 'pen 3'],
        bad: ['pain 1', 'storm 2', 'mud 3']
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