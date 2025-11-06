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
    // Board 0 (Tutorial)
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
        new Clue("High", "good", ["Mountain", "Kite"]),
        new Clue("Orchard", "good", ["Apple", "Forest"]),
        new Clue("Cabin", "good", ["Forest", "House"]),
        new Clue("Denver", "good", ["Mountain", "Forest"]),

        // --- Neutral tiles: 2-word/3-word style, single-word clues ---
        new Clue("Fruit", "neutral", ["Apple"]),
        new Clue("String", "neutral", ["Kite"]),
        new Clue("School", "neutral", ["Apple"]),
        new Clue("Trees", "neutral", ["Forest"]),

        // --- Bad tiles: 2-word/3-word style, single-word clues ---
        new Clue("Family", "good", ["Dog", "House"]),
        new Clue("Driveway", "bad", ["House"]),
        new Clue("Wild", "bad", ["Mountain", "Forest"]),
        new Clue("Natural", "bad", ["Mountain", "Forest", "Apple"]),
        new Clue("Chill", "bad", ["Mountain"]),
        new Clue("Flow", "bad", ["Kite"]),
        new Clue("Huge", "bad", ["Mountain", "House"]),
        new Clue("Peaceful", "bad", ["Mountain", "Kite"])
    ],

    // Board 1
    [
    // --- GOOD CLUES ---
        new Clue("Scales", "good", ["Dragon"]),
        new Clue("Wings", "good", ["Dragon"]),
        new Clue("Gallant", "good", ["Knight"]),
        new Clue("Lancelot", "good", ["Knight"]),
        new Clue("Tower", "good", ["Castle"]),
        new Clue("Fort", "good", ["Castle"]),
        new Clue("Moat", "good", ["Castle"]),
    new Clue("Blade", "good", ["Sword"]),
        new Clue("Katana", "good", ["Sword"]),
        new Clue("Excalibur", "good", ["Sword"]),
    new Clue("Spellcaster", "good", ["Wizard"]),
        new Clue("Wand", "good", ["Wizard"]),
    new Clue("Head", "good", ["Crown"]),
    new Clue("Tiara", "good", ["Crown"]),
        new Clue("Mythical", "good", ["Dragon", "Wizard"]),

    // --- NEUTRAL CLUES ---
    new Clue("Fire", "neutral", ["Dragon", "Wizard"]), // could also hint at "Torch" (neutral)
    new Clue("Spell", "neutral", ["Wizard"]), // could also hint at "Scroll" (neutral)
        new Clue("Gandalf", "neutral", ["Wizard", ]), // could also hint at "Book"
        new Clue("Dumbledore", "neutral", ["Wizard", ]), // could also hint at "Book"
    new Clue("Treasure", "neutral", ["Crown", "Dragon"]), // could also hint at "Gold" (neutral)
    new Clue("Smaug", "neutral", ["Dragon"]), // could also hint at "Book", "Gold" (neutral)
        new Clue("Metal", "neutral", ["Sword", "Crown"]), // could also hint at "Gold" (neutral)

    // --- BAD CLUES ---
        new Clue("Valor", "good", ["Knight", "Sword"]),
    new Clue("Guard", "bad", ["Knight", "Castle", "Dragon"]), // could also hint at "Shield", "King" (bad)
        new Clue("Royal", "bad", ["Castle", "Crown"]), // could also hint at "King" (bad)
    new Clue("Rider", "bad", ["Dragon"]), // could also hint at "Horse" (bad)
    new Clue("Alchemist", "bad", ["Wizard"]), // could also hint at "Potion" (bad)
        new Clue("Magic", "bad", ["Wizard"]), // could also hint at "Potion" (bad)
    new Clue("Dark", "bad", ["Knight"]), // could also hint at "Forest", "Cave" (bad)
    new Clue("Dungeon", "bad", ["Castle", "Dragon"]), // could also hint at "Cave" (bad)
        new Clue("Armor", "bad", ["Knight", "Sword"])
    ],

    // Board 2
    [
    // --- GOOD CLUES ---
    new Clue("Nile", "good", ["River"]),
        new Clue("Stream", "good", ["River"]),
        new Clue("Crossing", "good", ["Bridge"]),
    new Clue("Span", "good", ["Bridge"]),
    new Clue("Harbor", "good", ["Boat"]),
    new Clue("Sail", "good", ["Boat"]),
    new Clue("Catch", "good", ["Fish"]),
        new Clue("Sushi", "good", ["Fish"]),
    new Clue("Drops", "good", ["Rain"]),
    new Clue("Showers", "good", ["Rain"]),
    new Clue("White", "good", ["Cloud"]),
    new Clue("Puffy", "good", ["Cloud"]),
    new Clue("Rafting", "good", ["River", "Boat"]),
    new Clue("Trout", "good", ["River", "Fish"]),
    new Clue("Steamboat", "good", ["River", "Boat"]),
        new Clue("Rainbow", "good", ["Cloud", "Rain"]),

    // --- NEUTRAL CLUES ---
    new Clue("Travel", "neutral", ["Boat"]), // could also hint at "Train" (neutral)
    new Clue("Manmade", "neutral", ["Bridge", "Boat"]), // could also hint at "Road" (neutral)
    new Clue("Lowland", "neutral", ["River"]), // could also hint at "Field" (neutral)
    new Clue("Wood", "neutral", ["Bridge"]), // could also hint at "Tree" (neutral)

    // --- BAD CLUES ---
    new Clue("Precipitation", "bad", ["Rain", "Cloud"]), // could also hint at "Storm" (bad)
        new Clue("Ocean", "bad", ["Boat", "Fish"]), // could also hint at "Shark" (bad)
        new Clue("Sky", "bad", ["Cloud"]), // could also hint at "Storm" or "Lightning" (bad)
    new Clue("Water", "bad", ["River", "Rain"]), // could also hint at "Flood", "Storm" (bad)
    new Clue("Bear", "bad", ["Fish"]), // could also hint at "Cave" (bad)
    new Clue("Forest", "bad", ["Tree"]), // could also hint at "Fire" (bad)
        new Clue("Cooking", "bad", ["Fish"]), // could also hint at "Fire" (bad)
    new Clue("Rushing", "bad", ["River"]), // could also hint at "Flood" (bad)
    new Clue("Current", "bad", ["River", "Fish"]) // could also hint at "Flood" or "Lightning" (bad)
    ],

    // Board 3
    [
    // --- GOOD CLUES ---
    new Clue("Twinkle", "good", ["Star"]),
        new Clue("Gold", "good", ["Star"]),
    new Clue("Venus", "good", ["Planet"]),
        new Clue("Saturn", "good", ["Planet"]),
        new Clue("Jupiter", "good", ["Planet"]),
    new Clue("SpaceX", "good", ["Rocket"]),
        new Clue("Booster", "good", ["Rocket"]),
    new Clue("Armstrong", "good", ["Astronaut"]),
        new Clue("Human", "good", ["Astronaut"]),
    new Clue("Andromeda", "good", ["Galaxy"]),
        new Clue("Milky", "good", ["Galaxy"]),
        new Clue("Spiral", "good", ["Galaxy"]),
    new Clue("Phases", "good", ["Moon"]),
    new Clue("Cheese", "good", ["Moon"]),
        new Clue("Lunar", "good", ["Moon"]),
    new Clue("Apollo", "good", ["Moon", "Rocket", "Astronaut"]),

    // --- NEUTRAL CLUES ---
        new Clue("Saturn", "good", ["Planet"]),
    new Clue("Night", "neutral", ["Star", "Moon"]), // could also hint at neutral words telescope, comet
    new Clue("Spaceship", "neutral", ["Rocket"]), // could also hint at neutral word, satellite
    new Clue("Terrestrial", "neutral", ["Planet", "Astronaut"]), // could also hint at Earth-origin things (astronaut, satellite, telescope)
    new Clue("Hubble", "neutral", ["Galaxy", "Planet"]), // could likely hint at telescope, satellite

    // --- BAD CLUES ---
    new Clue("Hot", "bad", ["Star", "Rocket"]), // could also hint at "Sunburn" (bad)
    new Clue("Missile", "bad", ["Rocket"]), // could also hint at "Explosion", "War" (bad)
    new Clue("Astronomy", "bad", ["Galaxy", "Moon", "Star"]), // could hint at a LOT, but includes black hole
    new Clue("Living", "bad", ["Astronaut"]), // could also hint at "Alien" (bad)
    new Clue("Reentry", "bad", ["Rocket"]), // could also hint at Crash, Satellite, Meteor, Comet
    new Clue("Conflict", "bad", ["Rocket", "Astronaut", "Moon"]) // could also hint at "War" (bad)
    ],

    // Board 4
    [
    // --- GOOD CLUES ---
    new Clue("House", "good", ["Building"]),
    new Clue("Suspension", "good", ["Bridge"]),
    new Clue("Span", "good", ["Bridge"]),
    new Clue("Train", "good", ["Subway"]),
        new Clue("Rail", "good", ["Subway"]),
        new Clue("Underground", "good", ["Subway"]),
    new Clue("Road", "good", ["Street"]),
        new Clue("Boulevard", "good", ["Street"]),
    new Clue("Tall", "good", ["Skyscraper"]),
        new Clue("Highrise", "good", ["Skyscraper"]),
        new Clue("Seesaw", "good", ["Park"]),
        new Clue("Grassy", "good", ["Park"]),
    new Clue("Elevator", "good", ["Skyscraper", "Building"]),
        new Clue("Cross", "good", ["Bridge", "Street"]),

    // --- NEUTRAL CLUES ---
    new Clue("Commute", "neutral", ["Subway"]), // could also hint at "Taxi" (neutral)
    new Clue("NYC", "neutral", ["Skyscraper", "Subway"]), // could also hint at "Taxi" (neutral)
    new Clue("Sandwich", "neutral", ["Subway"]), // could also hint at "Store", "Market" (neutral)
    new Clue("Vista", "neutral", ["Park"]), // could also hint at "Bench" (neutral)
        new Clue("Stall", "neutral", ["Street"]),

    // --- BAD CLUES ---
    new Clue("Chicago", "bad", ["Skyscraper", "Subway"]), // could also hint at "Fire" (bad)
    new Clue("Tunnel", "bad", ["Subway"]), // could also hint at "Collapse" (bad)
    new Clue("Bank", "bad", ["Building"]), // could also hint at "Robbery" (bad)
    new Clue("Traffic", "bad", ["Taxi"]), // could also hint at "Pollution" (bad)
    new Clue("Truck", "bad", ["Street"]), // could also hint at "Dumpster" or "Pollution" (bad)
        new Clue("Environment", "bad", ["Park"]),
        new Clue("Delay", "bad", ["Subway"])
    ],

    // Board 5
    [
    // --- GOOD CLUES ---
    new Clue("Rail", "good", ["Train"]),
    new Clue("Subway", "good", ["Train"]),
    new Clue("Runway", "good", ["Airport"]),
    new Clue("OHare", "good", ["Airport"]),
    new Clue("Carry-on", "good", ["Luggage"]),
    new Clue("Cargo", "good", ["Luggage"]),
    new Clue("GPS", "good", ["Map"]),
    new Clue("Navigate", "good", ["Map"]),
    new Clue("Directions", "good", ["Map"]),
    new Clue("Photo", "good", ["Camera"]),
    new Clue("Lens", "good", ["Camera"]),
    new Clue("Picture", "good", ["Camera"]),
    new Clue("Suite", "good", ["Hotel"]),
    new Clue("Mariott", "good", ["Hotel"]),
    new Clue("Wheels", "good", ["Train", "Luggage"]),
    new Clue("Conveyor", "good", ["Luggage", "Airport"]),
    new Clue("Bellhop", "good", ["Hotel", "Luggage"]),

    // --- NEUTRAL CLUES ---
    new Clue("Paper", "neutral", ["Map"]), // could also hint at "Ticket"  (neutral)
    new Clue("Conductor", "neutral", ["Train"]), // could also hint at "Ticket"  (neutral)
    new Clue("Luxury", "neutral", ["Hotel"]), // could also hint at "Restaurant" (neutral)
    new Clue("Trail", "neutral", ["Map"]), // could also hint at "Guide", "Bridge" (neutral)
    new Clue("Tourist", "neutral", ["Map", "Camera", "Hotel"]), // could also hint at "Guide" (neutral)

    // --- BAD CLUES ---
    new Clue("Plane", "bad", ["Airport", "Luggage"]), // could also hint at "Ticket", "Delay", "Turbulence" (bad)
    new Clue("Transportation", "bad", ["Train", "Airport"]), // could also hint at "Delay", "Accident" (bad)
    new Clue("Tiring", "bad", ["Airport"]), // could also hint at "Turbulence", "Luggage", "Delay", etc. (bad)
    new Clue("Commute", "bad", ["Train"]), // could also hint at "Traffic", "Delay", "Accident" (bad)
    new Clue("TSA", "bad", ["Airport"]), // could also hint at "Delay" (bad)
    new Clue("Cheap", "bad", ["Train", "Map"]) // could also hint at "Motel" (bad)
    ],

    // Board 6
    [
        new Clue("Carbs", "good", ["Bread"]),
        new Clue("Wheat", "good", ["Bread"]),
        new Clue("Soften", "good", ["Butter"]),
    new Clue("Spread", "good", ["Butter"]),
        new Clue("Dairy", "good", ["Butter"]),
        new Clue("Cut", "good", ["Knife"]),
        new Clue("Blade", "good", ["Knife"]),
        new Clue("Pre-Heat", "good", ["Oven"]),
        new Clue("Convection", "good", ["Oven"]),
        new Clue("Instructions", "good", ["Recipe"]),
        new Clue("Secret", "good", ["Recipe"]),
        new Clue("Cookbook", "good", ["Recipe"]),
    new Clue("Professional", "good", ["Chef"]),
        new Clue("Human", "good", ["Chef"]),
        new Clue("Cook", "good", ["Chef"]),
        new Clue("Bake", "good", ["Oven", "Bread"]),
    new Clue("Baker", "good", ["Bread", "Oven", "Chef"]),
        new Clue("Slice", "good", ["Bread", "Knife"]),

    // --- NEUTRAL CLUES ---
    new Clue("Large", "neutral", ["Oven"]), // could also hint at "Pantry", "Table", "Market" (neutral)
    new Clue("Mixologist", "neutral", ["Chef"]), // could also hint at "Cup" (neutral)
    new Clue("Flour", "neutral", ["Bread"]), // could also hint at "Pantry" (neutral)
    new Clue("Spread", "neutral", ["Bread", "Butter"]), // could also hint at "Table" (neutral)

    // --- BAD CLUES ---
    new Clue("Utensil", "bad", ["Knife"]), // could also hint at "Fork" (bad)
        new Clue("Appetizer", "bad", ["Bread", "Butter"]),
        new Clue("Dinner", "bad", ["Knife", "Recipe"]),
    new Clue("Hot", "bad", ["Oven"]), // could also hint at "Stove" (bad)
    new Clue("Toast", "bad", ["Bread", "Butter"]), // could also hint at "Pan" (bad)
    new Clue("Cookies", "bad", ["Oven", "Butter"]), // could also hint at "Dish" (bad)
    new Clue("Crafted", "bad", ["Recipe"]), // could also hint at "Dish" (bad)
    new Clue("Fresh", "bad", ["Bread"]) // could also hint at "Salad" (bad)
    ],

    // Board 7
    [
    // --- GOOD CLUES ---
    new Clue("Strings", "good", ["Guitar"]),
    new Clue("Pick", "good", ["Guitar"]),
    new Clue("Beat", "good", ["Drums"]),
    new Clue("Percussion", "good", ["Drums"]),
    new Clue("Curtains", "good", ["Stage"]),
    new Clue("Platform", "good", ["Stage"]),
    new Clue("Vocalist", "good", ["Singer"]),
        new Clue("Human", "good", ["Singer"]),
    new Clue("Stand", "good", ["Microphone"]),
    new Clue("Speak", "good", ["Microphone"]),
    new Clue("Effects", "good", ["Lights"]),
    new Clue("Bright", "good", ["Lights"]),
    new Clue("Karaoke", "good", ["Microphone", "Singer"]),
    new Clue("Vocals", "good", ["Singer", "Microphone"]),
    new Clue("Rock", "good", ["Guitar", "Drums"]),

    // --- NEUTRAL CLUES ---
        new Clue("Folk", "neutral", ["Guitar", "Singer"]), // could also hint at harmonica
    new Clue("Podcast", "neutral", ["Microphone"]), // could also hint at "Studio" (neutral)
    new Clue("Strum", "neutral", ["Guitar"]), // could also hint at "Chord" (neutral)
    new Clue("Hits", "neutral", ["Drums"]), // could also hint at "Album" (neutral)

    // --- BAD CLUES ---
        new Clue("Country", "neutral", ["Singer"]), // could also hint at "Harmonica" or "Dance" (neutral)
    new Clue("Loud", "bad", ["Guitar", "Drums"]), // so many (bad)
    new Clue("Solo", "bad", ["Microphone", "Singer"]), // could also hint at "Piano", "Trumpet", "Acoustic" (bad)
    new Clue("Metal", "bad", ["Guitar", "Microphone", "Drums"]), // could also hint at "Trumpet" (bad)
    new Clue("Flashy", "bad", ["Lights", "Guitar"]), // could also hint at "Camera" (bad)
    new Clue("Breath", "bad", ["Singer"]), // could also hint at "Trumpet" (bad)
    new Clue("Songwriter", "good", ["Guitar", "Singer"]),
    new Clue("Concert", "good", ["Stage", "Singer", "Microphone", "Lights"]) // could also hint at "Crowd" (bad)
    ],

    // Board 8
    [
    // --- GOOD CLUES ---
    new Clue("Throw", "good", ["Ball"]),
        new Clue("Yoga", "good", ["Ball"]),
    new Clue("Target", "good", ["Goal"]),
        new Clue("Net", "good", ["Goal"]),
    new Clue("Mentor", "good", ["Coach"]),
        new Clue("Strategist", "good", ["Coach"]),
    new Clue("Mates", "good", ["Team"]),
        new Clue("Players", "good", ["Team"]),
        new Clue("Judge", "good", ["Referee"]),
        new Clue("Rules", "good", ["Referee"]),
    new Clue("Arena", "good", ["Stadium"]),
        new Clue("Spotlights", "good", ["Stadium"]),
    new Clue("Strategy", "good", ["Coach", "Team"]),
    new Clue("Volley", "good", ["Ball", "Team"]),
    new Clue("Authority", "good", ["Coach", "Referee"]),

    // --- NEUTRAL CLUES ---
    new Clue("Official", "neutral", ["Referee"]), // could also hint at "Uniform" (neutral)
    new Clue("Fans", "neutral", ["Stadium"]), // could also hint at "Crowd" (neutral)
    new Clue("Timeout", "neutral", ["Referee", "Coach"]), // could also hint at "Whistle" (neutral)
    new Clue("Round", "neutral", ["Ball"]), // could also hint at "Medal", "Whistle" (neutral)
        new Clue("Broncos", "good", ["Team", "Stadium"]),

    // --- BAD CLUES ---
    new Clue("Jumbotron", "bad", ["Stadium"]), // could also hint at "Camera" (bad)
    new Clue("Victory", "bad", ["Goal"]), // could also hint at "Trophy" (bad)
    new Clue("Soccer", "bad", ["Team", "Goal", "Ball"]), // could also hint at "Field" (bad)
        new Clue("Lacrosse", "bad", ["Team", "Ball"]), // could also hint at "Field" (bad)
    new Clue("Waterboy", "bad", ["Team"]), // could also hint at "Bench" (bad)
    new Clue("Foot", "bad", ["Ball"]), // could also hint at "Skate" (bad)
        new Clue("Tennis", "bad", ["Ball"]) // could also hint at "Skate" (bad)
    ],

    // Board 9
    [
    // --- GOOD CLUES ---
    new Clue("Gavel", "good", ["Judge"]),
        new Clue("Judy", "good", ["Judge"]),
    new Clue("Peers", "good", ["Jury"]),
        new Clue("Duty", "good", ["Jury"]),
        new Clue("Slammer", "good", ["Prison"]),
        new Clue("Jail", "good", ["Prison"]),
        new Clue("Robinhood", "good", ["Thief"]),
        new Clue("Pickpocket", "good", ["Thief"]),
        new Clue("Film", "good", ["Camera"]),
        new Clue("Flash", "good", ["Camera"]),
        new Clue("Gun", "good", ["Weapon"]),
        new Clue("Knife", "good", ["Weapon"]),
    new Clue("Executioner", "good", ["Judge", "Jury", "Prison"]),
    new Clue("Verdict", "good", ["Judge", "Jury"]),

    // --- NEUTRAL CLUES ---
    new Clue("Lens", "neutral", ["Camera"]), // could also hint at "Magnifying" (neutral)
    new Clue("Hacker", "neutral", ["Thief"]), // could also hint at "Files" (neutral)
    new Clue("Chamber", "neutral", ["Judge"]), // could also hint at "Office" (neutral)
    new Clue("Law", "neutral", ["Judge"]), // could also hint at "Document" (neutral)
        new Clue("Tools", "neutral", ["Camera", "Weapon"]), // could hint at magnifying

    // --- BAD CLUES ---
    new Clue("Deliberate", "bad", ["Jury"]), // could also hint at "Detective" (neutral)
    new Clue("Apprehend", "bad", ["Thief"]), // could also hint at "Suspect" (neutral)
    new Clue("Proof", "bad", ["Camera"]), // could also hint at "Evidence" or "Clue" (bad)
    new Clue("Observations", "bad", ["Jury"]), // could also hint at "Notebook", "Case" (bad)
    new Clue("Trial", "bad", ["Judge", "Jury"]), // could also hint at "Case" (bad)
    new Clue("Convict", "bad", ["Thief"]), // could also hint at "Suspect" or "Prison" (bad)
        new Clue("Justice", "bad", ["Judge", "Jury"]), // vague
        new Clue("Violence", "bad", ["Weapon", "Thief"]), // could hint at Suspect, maybe Evidence
        new Clue("Police", "bad", ["Prison"]) // could hint at Detective
    ]
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
    const distribution = playerMadeError
        ? ERROR_RESPONSE_DISTRIBUTIONS[errorRate]
        : CLUE_TYPE_DISTRIBUTIONS[errorRate];

    // Start by sampling a clue type
    let clueType = sampleType(distribution);

    // Already guessed words
    const alreadyGuessedWords = boardClueHistory.flatMap(h => h.guessedWords);

    // Helper: get available clues by type, ignoring already used or guessed words
    const getAvailable = (type) => clues.filter(c =>
        !c.used &&
        c.type === type &&
        c.linkedWords.every(word => !alreadyGuessedWords.includes(word))
    );

    let available = getAvailable(clueType);

    // Fallback rules
    const resetOneWordGood = () => {
        clues.forEach(c => { if (c.type === 'good' && c.numLinked === 1) c.used = false; });
    };

    const tryFallbacks = () => {
        if (clueType === 'good') {
            available = getAvailable('neutral');
            if (available.length === 0) {
                resetOneWordGood();
                available = getAvailable('good');
            }
        } else if (clueType === 'neutral') {
            available = getAvailable('good');
            if (available.length === 0) {
                resetOneWordGood();
                available = getAvailable('good');
            }
        } else if (clueType === 'bad') {
            available = getAvailable('neutral');
            if (available.length === 0) available = getAvailable('good');
            if (available.length === 0) {
                resetOneWordGood();
                available = getAvailable('good');
            }
        }
    };

    if (available.length === 0) tryFallbacks();

    // Final fallback: reset all clues
    if (available.length === 0) {
        clues.forEach(c => c.used = false);
        available = clues;
        clueType = available[0].type;
    }

    // Sort for max payoff
    available.sort((a, b) => b.numLinked - a.numLinked);

    const chosen = available[0];
    chosen.used = true;

    return {
        text: chosen.text,
        type: chosen.type,
        maxGuesses: chosen.numLinked
    };
}
