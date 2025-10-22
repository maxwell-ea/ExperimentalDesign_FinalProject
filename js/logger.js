//logger.js
// Log participant info

export let participantInfo = {};
export let gameLogs = []; // store all boards

export function setupConsentScreen(onSubmitCallback) {
    const consentBtn = document.getElementById('consentContinueBtn');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const consentCheckbox = document.getElementById('consentCheckbox');

    const validate = () => {
        consentBtn.disabled = !(firstNameInput.value.trim() &&
            lastNameInput.value.trim() &&
            consentCheckbox.checked);
    };

    firstNameInput.addEventListener('input', validate);
    lastNameInput.addEventListener('input', validate);
    consentCheckbox.addEventListener('change', validate);

    consentBtn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent form submission
        participantInfo = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            consent: consentCheckbox.checked,
            startTime: new Date().toISOString()
        };
        onSubmitCallback(); // leave DOM handling to main.js
    });
}

// --- Board logging ---
export function logBoardResult(boardIndex, apologyType, errorRate, points, tilesFlipped, timeTakenSeconds = null, reason = '', clueHistory = []) {
    const entry = {
        boardIndex,
        apologyType,
        errorRate,
        points,
        tilesFlipped,
        timeTakenSeconds,
        reason,
        clueHistory
    };
    gameLogs.push(entry);
    console.log('Logging board:', entry);
}

// --- Optional: get all logs ---
export function getLogs() {
    return {
        participantInfo,
        gameLogs
    };
}