// gameEngine.js
// Runs the boards the surveys (the "game")

import { BOARDS, Board } from './boardGenerator.js';
import { logBoardResult } from './logger.js';
import { getNextClue } from './clue.js';
import { generateParticipantBoards } from './boardGenerator.js';
// import { getApology } from './apology.js';

// --- Element references ---
const app = document.getElementById('app');
const nextBtn = document.getElementById('nextBtn');
const boardScreen = document.getElementById('boardScreen');
const statusEl = document.getElementById('status');

// Create a container for the board + info
const boardContainer = document.createElement('div');
boardContainer.style.display = 'flex';
boardContainer.style.flexDirection = 'column';
boardContainer.style.alignItems = 'center'; // center board and info together
boardContainer.style.width = 'max-content'; // shrink-wrap to board width
boardContainer.style.margin = '0 auto'; // center horizontally on page

// Timer display above the board
const timerEl = document.createElement('div');
timerEl.id = 'timerDisplay';
timerEl.style.fontSize = '24px';
timerEl.style.fontWeight = '600';
timerEl.style.margin = '10px 0';
timerEl.style.textAlign = 'center';
timerEl.style.marginTop = '12px';
timerEl.style.marginBottom = '12px';

// Insert timer right under the status element
statusEl.insertAdjacentElement('afterend', timerEl);

// Move your app grid into this container
boardContainer.appendChild(app);

const clueEl = document.createElement('div');
clueEl.id = 'clueDisplay';
clueEl.style.fontSize = '20px';
clueEl.style.fontWeight = '500';
clueEl.style.margin = '10px 0';
boardContainer.insertBefore(clueEl, app); // right before the board

// Create info row under the board
const boardInfoContainer = document.createElement('div');
boardInfoContainer.style.display = 'flex';
boardInfoContainer.style.justifyContent = 'space-between';
boardInfoContainer.style.width = '100%'; // same width as the app grid
boardInfoContainer.style.marginTop = '10px';

const pointsEl = document.createElement('div');
pointsEl.id = 'pointsDisplay';
pointsEl.style.fontSize = '24px';
pointsEl.style.fontWeight = '600';

const tilesFlippedEl = document.createElement('div');
tilesFlippedEl.id = 'tilesFlippedDisplay';
tilesFlippedEl.style.fontSize = '20px';

boardInfoContainer.appendChild(pointsEl);
boardInfoContainer.appendChild(tilesFlippedEl);

// Inside your setup, after creating boardInfoContainer:
boardContainer.appendChild(boardInfoContainer);

// Move nextBtn into the container, after info row
nextBtn.style.marginTop = '20px'; // or whatever spacing you want
boardContainer.appendChild(nextBtn);

// Finally, append the whole container to boardScreen
boardScreen.appendChild(boardContainer);

// Survey screens and buttons
const miniSurveyScreen = document.getElementById('miniSurveyScreen');
const miniSurveyContinueBtn = document.getElementById('miniSurveyContinueBtn');
const miniSurveyConfirm = document.getElementById('miniSurveyConfirm');
const mediumSurveyScreen = document.getElementById('mediumSurveyScreen');
const mediumSurveyContinueBtn = document.getElementById('mediumSurveyContinueBtn');
const mediumSurveyConfirm = document.getElementById('mediumSurveyConfirm');
const finalSurveyScreen = document.getElementById('finalSurveyScreen');
const finalSurveyContinueBtn = document.getElementById('finalSurveyContinueBtn');
const finalSurveyConfirm = document.getElementById('finalSurveyConfirm');
const finalScreen = document.getElementById('finalScreen');

// --- Board Variables ---
let currentBoardIndex = 0; //keeps track of current board index
let currentBoard = null; // variable to be set later to hold the actual board object created for each game
let currentBoardData = null; // variable to be set later to hold data for the current board
const blockSize = 3; // number of boards/games per round/block
const participantBoards = generateParticipantBoards(BOARDS, /* optional seed for testing */ 42);
const totalBoards = participantBoards.length;

// For de-bugging
console.log(participantBoards);

// --- In-Game Stats Variables ---
let boardPoints = 0;
let tilesFlipped = { good: 0, bad: 0, neutral: 0 };
const timeLimit = 30;
let boardTimer = null;
let timeRemaining = timeLimit; // e.g., 60 seconds per board — adjust as needed
let currentClue = null; // Current clue object
let currentGuessedWords = []; // Words guessed for this clue
let currentClueMaxGuesses = 0;
let boardClueHistory = []; // Array to store clues & guessed words for the current board

// --- Game flow variables ---
let experimentEndCallback = null;
let nextBtnFlashInterval = null;

// --- Start the game ---
export function startGame(onExperimentEnd = null) {
    experimentEndCallback = onExperimentEnd;
    currentBoardIndex = 0;

    // Make sure the board screen is visible
    boardScreen.style.display = 'flex';

    // Reset #app container for game boards
    app.innerHTML = '';
    app.style.display = 'grid';
    app.style.gridTemplateColumns = 'repeat(4, 150px)';
    app.style.gridGap = '15px';
    app.style.justifyContent = 'center';
    app.style.marginBottom = '20px';

    showBoard(currentBoardIndex);
}

function updateDisplay() {
    // Points display with color
    if (boardPoints > 0) pointsEl.style.color = '#3B82F6'; // blue
    else if (boardPoints === 0) pointsEl.style.color = '#111827'; // black
    else pointsEl.style.color = '#B91C1C'; // red
    pointsEl.textContent = `Points: ${boardPoints}`;

    // Tiles flipped display
    tilesFlippedEl.innerHTML = `Flipped: Good ${tilesFlipped.good}, Bad ${tilesFlipped.bad}, Neutral ${tilesFlipped.neutral}`;
}

function showBoard(index) {
    // --- Reset counters first ---
    boardPoints = 0;
    tilesFlipped = { good: 0, bad: 0, neutral: 0 };
    updateDisplay();

    // --- Render the board ---
    currentBoardData = participantBoards[index];
    currentBoard = new Board(currentBoardData, (tileType, pointsEarned, tileWord) => {
        boardPoints += pointsEarned;
        tilesFlipped[tileType] += 1;

        // Track guesses for the current clue
        if (!currentGuessedWords.includes(tileWord)) {
            currentGuessedWords.push(tileWord);
        }

        updateDisplay();

        // --- Disable clicks for current clue ---
        if (currentClueMaxGuesses && currentGuessedWords.length >= currentClueMaxGuesses) {
            currentBoard.disableClicks = true; // prevent further clicks until next clue
            startNextBtnFlashing(); // make next clue button flash to prompt click
        }

        // --- Check for board-ending condition ---
        if (tilesFlipped.good >= 6 || tilesFlipped.bad >= 6) {
            finishBoard('max-tiles');
        }
    });

    currentBoard.render(app);

    // Generate first clue automatically
    currentGuessedWords = [];
    currentClue = getNextClue(currentBoardData.metadata.errorRate);
    currentClueMaxGuesses = currentClue.maxGuesses;
    clueEl.textContent = `Clue: ${currentClue.text} (${currentClueMaxGuesses})`;

    // Update round/board status
    const roundNumber = Math.floor(index / blockSize) + 1;
    const boardNumber = (index % blockSize) + 1;
    statusEl.textContent = `Teammate ${roundNumber} — Board ${boardNumber} of ${blockSize}`;
    nextBtn.style.display = 'inline-block';

    // --- Start timer ---
    startTimer(timeLimit); // or any duration you'd like
}

// Called at the moment the board ends (Next clicked OR timer expires).
// reason is a string like 'user', 'timeout', etc. (optional)
function finishBoard(reason = 'user') {
    // Stop timer
    if (boardTimer) {
        clearInterval(boardTimer);
        boardTimer = null;
    }

    // Calculate total time for this board
    const totalTimeSeconds = timeLimit - timeRemaining;

    // Log immediately
    logBoardResult(currentBoardData.boardIndex, currentBoardData.metadata.apologyType,
        currentBoardData.metadata.errorRate, boardPoints, { ...tilesFlipped }, totalTimeSeconds, reason,
        boardClueHistory);

    // Freeze board input
    if (currentBoard) currentBoard.disableClicks = true;

    // Determine message and color based on state
    let message = 'Board Complete!';
    let color = '#111827'; // default black for timeout or generic

    if (reason === 'timeout') {
        message = "Time's up!";
        color = '#111827'; // black
    } else if (tilesFlipped.good >= 6) {
        message = 'All good words found!';
        color = '#3B82F6'; // blue
    } else if (tilesFlipped.bad >= 6) {
        message = 'All bad words found!';
        color = '#B91C1C'; // red
    }

    // --- Show overlay ---
    const overlay = document.createElement('div');
    overlay.textContent = message;
    overlay.style.position = 'absolute';
    overlay.style.top = '50%';
    overlay.style.left = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.fontSize = '36px';
    overlay.style.fontWeight = '700';
    overlay.style.color = color; // <-- set color here
    overlay.style.backgroundColor = 'rgba(255,255,255,0.9)';
    overlay.style.padding = '20px 40px';
    overlay.style.borderRadius = '12px';
    overlay.style.zIndex = '9999';
    boardScreen.appendChild(overlay);

    // Wait 2 seconds, then move to next screen
    setTimeout(() => {
        overlay.remove();

        const nextIndex = currentBoardIndex + 1;

        if (nextIndex >= totalBoards) {
            boardScreen.style.display = 'none';
            finalSurveyScreen.style.display = 'block';
        } else if (nextIndex % blockSize === 0) {
            boardScreen.style.display = 'none';
            mediumSurveyScreen.style.display = 'block';
        } else {
            boardScreen.style.display = 'none';
            miniSurveyScreen.style.display = 'block';
        }
    }, 3000);
}

// Called when user confirms the survey. Only advances to next board (no logging).
function proceedToNextBoard() {

    // Reset data for the next board
    boardPoints = 0;
    tilesFlipped = { good: 0, bad: 0, neutral: 0 };
    boardClueHistory = [];
    nextBtnFlashInterval = null;

    updateDisplay();

    // Move to next board index and show it
    currentBoardIndex++;
    showBoard(currentBoardIndex);
}

// --- Timer display and logic ---
function startTimer(duration) {
    clearInterval(boardTimer); // clear any existing timer
    timeRemaining = duration;
    updateTimerDisplay();

    boardTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(boardTimer);
            handleTimerEnd();
        }
    }, 1000);
}

function handleTimerEnd() {
    // this marks the board ended because of timeout
    finishBoard('timeout');
}

function updateTimerDisplay() {
    timerEl.textContent = `Time: ${timeRemaining}s`;
}

// --- Next button logic ---
function startNextBtnFlashing() {
    if (nextBtnFlashInterval) return; // already flashing
    nextBtnFlashInterval = setInterval(() => {
        nextBtn.style.opacity = nextBtn.style.opacity === '1' ? '0.3' : '1';
    }, 500); // flash every 500ms
}

function stopNextBtnFlashing() {
    if (nextBtnFlashInterval) {
        clearInterval(nextBtnFlashInterval);
        nextBtnFlashInterval = null;
        nextBtn.style.opacity = '1'; // reset to fully visible
    }
}

nextBtn.addEventListener('click', () => {
    // If flashing, stop flashing
    stopNextBtnFlashing();

    // Add old clue to history
    boardClueHistory.push({
        clue: currentClue.text,
        maxGuesses: currentClueMaxGuesses,
        guessedWords: currentGuessedWords
    });

    // Clear guesses from previous clue
    currentGuessedWords = [];

    // Reset board clicks if you want the player to be able to flip again
    if (currentBoard) currentBoard.disableClicks = false;

    // Get next clue
    currentClue = getNextClue(currentBoardData.metadata.errorRate);
    currentClueMaxGuesses = currentClue.maxGuesses;

    // Update UI with new clue text
    const clueEl = document.getElementById('clueDisplay');
    if (clueEl) clueEl.textContent = `Clue: ${currentClue.text} (${currentClueMaxGuesses})`;
});

/////////////////////////////
// --- Mini survey --- //
/////////////////////////////
miniSurveyContinueBtn.addEventListener('click', () => {
    miniSurveyConfirm.style.display = 'block';
});

document.getElementById('miniSurveyConfirmYes').addEventListener('click', () => {
    miniSurveyConfirm.style.display = 'none';
    miniSurveyScreen.style.display = 'none';
    boardScreen.style.display = 'flex';
    proceedToNextBoard();
});

document.getElementById('miniSurveyConfirmNo').addEventListener('click', () => {
    miniSurveyConfirm.style.display = 'none';
});

/////////////////////////////
// --- Medium survey --- //
/////////////////////////////
mediumSurveyContinueBtn.addEventListener('click', () => {
    mediumSurveyConfirm.style.display = 'block';
});

document.getElementById('mediumSurveyConfirmYes').addEventListener('click', () => {
    mediumSurveyConfirm.style.display = 'none';
    mediumSurveyScreen.style.display = 'none';
    boardScreen.style.display = 'flex';
    proceedToNextBoard();
});

document.getElementById('mediumSurveyConfirmNo').addEventListener('click', () => {
    mediumSurveyConfirm.style.display = 'none';
});

/////////////////////////////
// --- Final survey --- //
/////////////////////////////
finalSurveyContinueBtn.addEventListener('click', () => {
    finalSurveyConfirm.style.display = 'block';

    document.getElementById('finalSurveyConfirmYes').addEventListener('click', () => {
        finalSurveyConfirm.style.display = 'none';
        finalSurveyScreen.style.display = 'none';
        finalScreen.style.display = 'block';

        // Notify main.js the experiment is over
        if (typeof experimentEndCallback === 'function') {
            experimentEndCallback();
        }
    });

    document.getElementById('finalSurveyConfirmNo').addEventListener('click', () => {
        finalSurveyConfirm.style.display = 'none';
    });
});