// main.js
// Handler for starting experiment, gaining consent and participant info, tutorial, and launching game

import { setupConsentScreen, participantInfo } from './logger.js';
import { startGame } from './gameEngine.js';
import { startTutorial } from './tutorial.js';

// Helper function for preventing user reload once they have given consent to the experiment (so they don't lose progress)
function preventReloadsDuringExperiment() {
    let experimentActive = true;

    // Block reloads or navigation away
    window.addEventListener("beforeunload", (event) => {
        if (experimentActive) {
            event.preventDefault();
            event.returnValue = "";
        }
    });

    // Block keyboard reloads (F5, Ctrl/Cmd+R)
    window.addEventListener("keydown", (e) => {
        if (!experimentActive) return;

        if (
            e.key === "F5" ||
            (e.ctrlKey && e.key.toLowerCase() === "r") ||
            (e.metaKey && e.key.toLowerCase() === "r")
        ) {
            e.preventDefault();
            alert("Reloading will reset the experiment. Please continue.");
        }

        // Optional: prevent Enter-based accidental reloads on buttons/forms
        if (e.key === "Enter" && document.activeElement.tagName === "BUTTON") {
            e.preventDefault();
        }
    });

    // Optional cleanup (when experiment ends)
    return () => { experimentActive = false; };
}

let disableProtection; // outer scope

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

        // Prevent the user from normal reload after this point
        disableProtection = preventReloadsDuringExperiment();

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
            // Start game
            startGame(() => {
                console.log("Experiment finished — disabling reload block");
                disableProtection(); // Allow reloads again after final screen
            });
        });
    });
});
