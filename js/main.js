// main.js
// Handler for starting experiment, gaining consent and participant info, tutorial, and launching game

import { setupConsentScreen, participantInfo } from './logger.js';
import { startGame } from './gameEngine.js';
import { startTutorial } from './tutorial.js';

document.addEventListener('DOMContentLoaded', () => {
    // Screens
    const startScreen = document.getElementById('startScreen');
    const consentScreen = document.getElementById('consentScreen');
    const startSurveyScreen = document.getElementById('startSurveyScreen');
    const instructionsScreen = document.getElementById('instructionsScreen');
    const boardScreen = document.getElementById('boardScreen');

    // Buttons
    const startBtn = document.getElementById('startExperimentBtn'); // from start screen
    const consentBackBtn = document.getElementById('backToStartBtn'); // back to start screen
    const startSurveyContinueBtn = document.getElementById('startSurveyContinueBtn');
    const instructionsContinueBtn = document.getElementById('instructionsContinueBtn'); // start game

    // --- Start screen button ---
    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        consentScreen.style.display = 'block';
    });

    // --- Consent screen ---
    // The callback here will run when the user clicks "Continue" on the consent screen
    setupConsentScreen(() => {
        console.log('Participant info:', participantInfo);

        // After consent screen, show initial survey screen
        consentScreen.style.display = 'none';
        startSurveyScreen.style.display = 'block';

        // After initial survey screen, show instructions
        startSurveyContinueBtn.onclick = () => {
            startSurveyScreen.style.display = 'none';
            instructionsScreen.style.display = 'block';
        };

    });

    // --- Back button on consent screen, allows user to go back to starting screen ---
    consentBackBtn.addEventListener('click', () => {
        consentScreen.style.display = 'none';
        startScreen.style.display = 'block';
    });

    // --- Start tutorial after instructions and start game after tutorial is complete ---
    instructionsContinueBtn.addEventListener('click', () => {
        instructionsScreen.style.display = 'none';

        startTutorial(() => {
            console.log("Tutorial complete — starting game"); // <-- debug line
            startGame(); // this should now run
        });
    });
});
