let clues = [
    "I live in the ocean.",
    "I can be white.",
    "I can be blue.",
    "I am very big.",
    "There is a famous movie about me.",
    "I can be very scary.",
    "Do you know who I am?"
];
let clueIndex = 0;

function showClue() {
    if (clueIndex < clues.length) {
        document.getElementById("clue").innerText = clues[clueIndex];
        clueIndex++;
    }
}

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value.toLowerCase();
    if (userGuess === "shark") {
        document.getElementById("feedback").innerText = "YOU GOT IT RIGHT!";
    } else {
        document.getElementById("feedback").innerText = "NOT THIS TIME. TRY AGAIN.";
    }
}
