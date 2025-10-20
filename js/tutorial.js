// tutorial.js
// Dummy tutorial logic that mimics the main game engine
// TODO: actually code tutorial

// --- Element references ---
const tutorialBoardScreen = document.getElementById('tutorialBoardScreen');
const tutorialApp = document.getElementById('tutorialApp');
const tutorialNextBtn = document.getElementById('tutorialNextBtn');

// Practice survey elements
const practiceSurveyScreen = document.getElementById('practiceSurveyScreen');
const practiceSurveyConfirm = document.getElementById('practiceSurveyConfirm');
const practiceSurveyConfirmYes = document.getElementById('practiceSurveyConfirmYes');
const practiceSurveyConfirmNo = document.getElementById('practiceSurveyConfirmNo');

/**
 * Start the tutorial.
 * @param {Function} onTutorialComplete Callback to run after tutorial and practice survey
 */
export function startTutorial(onTutorialComplete) {
    // Show the tutorial board screen
    tutorialBoardScreen.style.display = 'flex';
    tutorialBoardScreen.style.flexDirection = 'column';
    tutorialBoardScreen.style.alignItems = 'center';
    tutorialBoardScreen.style.justifyContent = 'center';
    tutorialBoardScreen.style.minHeight = '80vh';

    // Render a dummy tutorial board
    tutorialApp.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 40px; max-width: 500px; width: 100%; text-align:center;">
            <h3>Dummy Tutorial Board</h3>
            <p>This is a placeholder board. Click "Next" to go to the practice survey.</p>
        </div>
    `;

    // Show the next button
    tutorialNextBtn.style.display = 'inline-block';

    // Handle tutorial "Next" click
    tutorialNextBtn.onclick = () => {
        // Hide tutorial board
        tutorialBoardScreen.style.display = 'none';
        tutorialApp.innerHTML = ''; // clear content
        tutorialNextBtn.onclick = null;

        // Show practice survey
        practiceSurveyScreen.style.display = 'block';

        // Confirm Yes/No buttons
        practiceSurveyConfirmYes.onclick = () => {
            practiceSurveyConfirm.style.display = 'none';
            practiceSurveyScreen.style.display = 'none';

            // Callback: start actual game
            if (onTutorialComplete) onTutorialComplete();
        };

        practiceSurveyConfirmNo.onclick = () => {
            practiceSurveyConfirm.style.display = 'none';
        };

        // Show confirm overlay when clicking "Continue" on practice survey
        const practiceSurveyContinueBtn = document.getElementById('practiceSurveyContinueBtn');
        practiceSurveyContinueBtn.onclick = () => {
            practiceSurveyConfirm.style.display = 'block';
        };
    };
}
