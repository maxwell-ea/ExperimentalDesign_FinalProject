// apology.js

const apologyComponents = {
    good: {
        responsibility: [
            "I could have chosen a clearer clue.",
            "I take full responsibility for that mix-up.",
            "I see that my clue wasn’t precise enough.",
            "I realize that clue was confusing.",
            "I should have thought more carefully about that clue.",
            "I misjudged how tricky that clue might be.",
            "I recognize that clue caused confusion.",
            "That clue didn’t communicate clearly."
        ],
        affirmation: [
            "I can see why you chose the word you did.",
            "Your reasoning makes sense with the clue I gave.",
            "Your guess was totally reasonable.",
            "I get why that seemed like the right word.",
            "That was a fair guess given the clue.",
            "I appreciate your interpretation, and I can totally see it.",
            "It makes sense that you picked that word.",
            "I can see your thought process in your choice."
        ],
        regret: [
            "It was totally different than what I intended—my apologies.",
            "So, I’m sorry for any confusion caused by that clue.",
            "My apologies, I really should have phrased that better.",
            "I'm sorry that the clue wasn’t clear enough.",
            "My apologies for the mix-up.",
            "I’m sorry for the unclear clue, that's super frustrating.",
            "Sorry for the misunderstanding.",
            "I'm sorry I didn't consider more interpretations."
        ],
        reform: [
            "I’ll phrase clues more precisely in the future.",
            "I’ll be more careful with my next clues.",
            "I’ll try to communicate more clearly next time.",
            "I’ll try to make sure clues are clearer going forward.",
            "Next clues will be more thoughtful.",
            "I’ll try to improve my clue selection from now on.",
            "I’ll try to avoid ambiguous clues in the future.",
            "I’ll aim for better clarity in upcoming clues."
        ],
        petition: [
            "Let’s move on from that one and keep working together.",
            "Shall we continue with the next clue together?",
            "Let’s keep going and try the next one.",
            "We can move past that and focus on the next clue.",
            "Let’s continue and see how the next one goes.",
            "Onward to the next clue! We've got this.",
            "Let’s tackle the next clue together.",
            "We can move forward and try again."
        ]
    },
    bad: {
        responsibility: [
            "That happened.",
            "Guess that clue didn’t land.",
            "That one didn’t go as planned.",
            "Oh well, that clue was off.",
            "Not much to say about that clue.",
            "That clue was whatever.",
            "I guess that was a mistake.",
            "Huh, that clue didn’t work."
        ],
        affirmation: [
            "But I only kind of see what you did there...",
            "You could guess a little better too, you know.",
            "I mean, I can barely see how you came up with that.",
            "But your guess was certainly... a choice.",
            "But you did your thing.",
            "If only you could sense my genius—then you could guess it perfectly.",
            "I don't know what I expected.",
            "But at the end of the day, it’s your call."
        ],
        regret: [
            "I guess this is the part where I say sorry.",
            "Anyway, I guess I'm sorry, if you care.",
            "We're a little off, but it's fine.",
            "Could’ve gone worse, I suppose.",
            "No matter whose fault it is, it's just a small mistake.",
            "I'll just keep giving clues, and you just try to keep up.",
            "Anyway, it's not a big deal.",
            "Let’s just pretend that one didn’t happen."
        ],
        reform: [
            "I'll try something simpler next time.",
            "I’ll see if I can get down to your level next time.",
            "Next clue should be easy enough for you.",
            "I'm confident you can understand me better next time.",
            "I just need to think slower, like you do.",
            "I'll try and adjust for your abilities.",
            "Perhaps the next one will work if I just keep trying.",
            "I'll try to dumb it down next time, okay?"
        ],
        petition: [
            "Let's just move on.",
            "Next...",
            "Let’s continue.",
            "Onward.",
            "So next clue, I guess...",
            "Let's just keep going.",
            "Shall we just move on?",
            "Time's ticking down, so let's go."
        ]
    }
};

// ----- Generate an apology based on type -----
export function makeAnApology(apologyType) {
    if (apologyType === "none") return null;

    const source = apologyType === "good" ? GOOD_APOLOGIES : BAD_APOLOGIES;

    // Helper to pick a random element from an array
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    const parts = [
        pick(source.responsibility),
        pick(source.affirmation),
        pick(source.regret),
        pick(source.reform),
        pick(source.petition)
    ];

    // Join with clean punctuation and spacing
    const apology = parts.map(p => p.trim().replace(/\.*$/, "")).join(". ") + ".";

    return apology;
}
