//logger.js
// Log participant info
export let participantInfo = {};
export let gameLogs = []; // store all boards

function normalizeName(name) {
    return name
        .trim()
        .toLowerCase()
        .normalize("NFD")            // decompose accented characters
        .replace(/[\u0300-\u036f]/g, ""); // remove diacritics
}

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
            nameHash: sha256(normalizeName(firstNameInput.value) + normalizeName(lastNameInput.value)),
            consent: consentCheckbox.checked,
            startTime: new Date().toISOString()
        };
        onSubmitCallback(); // leave DOM handling to main.js
    });
}

async function sendLogWithRetry(logEntry, retries = 3, delayMs = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await fetch(
                'https://script.google.com/macros/s/AKfycbzU8z2ww7HYfhwn4YP7tHvYzONubTkN_Ykp-TAt3e-2vQM5MWdXsjKxTy9QfamsBY_pCA/exec',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(logEntry),
                    mode: 'no-cors'
                }
            );
            console.log('Log sent (attempt', attempt, ')');
            return; // success
        } catch (err) {
            console.warn(`Attempt ${attempt} failed:`, err);
            if (attempt < retries) {
                await new Promise(res => setTimeout(res, delayMs));
            } else {
                console.error('All retries failed for log entry:', logEntry);
            }
        }
    }
}

// --- Board logging ---
export function logBoardResult(
    boardIndex = null,
    apologyType,
    errorRate,
    points,
    tilesFlipped = { good: 0, bad: 0, neutral: 0 },
    timeTakenSeconds = null,
    reason = '',
    clueHistory = [],
    mistakesHistory = []
) {
    const entry = {
        participantLast: participantInfo.lastName,
        participantHash: participantInfo.nameHash,
        boardIndex,
        apologyType,
        errorRate,
        points,
        tilesFlippedGood: tilesFlipped.good || 0,
        tilesFlippedBad: tilesFlipped.bad || 0,
        tilesFlippedNeutral: tilesFlipped.neutral || 0,
        timeTakenSeconds,
        reason,
        clueHistory: JSON.stringify(clueHistory),
        mistakesHistory: JSON.stringify(mistakesHistory)
    };

    gameLogs.push(entry);
    console.log('Logging board:', entry);

    sendLogWithRetry(entry).catch(err => console.error('Failed to send log to Google Sheets:', err));
}
