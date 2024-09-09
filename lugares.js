const words = [
    "PARIS", "LONDRES", "ROMA", "TOKYO", 
    "BERLIM", "MADRI", "LISBOA", 
    "AMSTERDA", "SIDNEY", "PEQUIM", "MOSCOU", "ISTAMBUL", 
    "DUBAI", "BANGUECOQUE", "TORONTO", "JERUSALEM", "CANCUN", 
    "MIAMI", "MILAO", "VIENA", "BARCELONA", "FORTALEZA", "MARACANAU",
    "ATENAS", "PRAGA", "OTTAWA", "SANTIAGO", "BUDAPESTE", 
    "SEOUL", "CARACAS", "BAGDA", "DELHI", "OSLO", 
    "BRUXELAS", "COPENHAGUE", "HELSINKI", "VARSOVIA", "ZURIQUE", 
    "NASSAU", "MONTEVIDEO", "QUITO", "ASUNCION", "LIMA", 
    "BOGOTA", "HONOLULU", "BEIRUTE", "BRASILIA"
];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let wordDisplay = [];
let wrongLetters = [];
let hangmanImage = 0;
let gameEnded = false;

function initWordDisplay() {
    for (let i = 0; i < selectedWord.length; i++) {
        wordDisplay.push("_");
    }
    updateWordDisplay();
}

function updateWordDisplay() {
    document.getElementById("word-display").textContent = wordDisplay.join(" ");
}

function updateHangmanImage() {
    document.getElementById("hangman-image").src = `hangman-${hangmanImage}.png`;
}

function checkLetter(letter) {
    if (gameEnded) return;

    let letterFound = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            wordDisplay[i] = letter;
            letterFound = true;
        }
    }
    
    if (!letterFound) {
        wrongLetters.push(letter);
        document.getElementById("wrong-letters").textContent = `Letras erradas: ${wrongLetters.join(", ")}`;
        hangmanImage++;
        updateHangmanImage();
    }

    updateWordDisplay();
    checkWinOrLose();
}

function checkWinOrLose() {
    if (wordDisplay.join("") === selectedWord) {
        document.getElementById("message").textContent = "Você ganhou! A palavra era: " + selectedWord;
        gameEnded = true;
    } else if (hangmanImage === 6) {
        document.getElementById("message").textContent = "Você perdeu! A palavra era: " + selectedWord;
        gameEnded = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initWordDisplay();
    updateHangmanImage();
    
    document.querySelectorAll(".letter").forEach((button) => {
        button.addEventListener("click", () => {
            if (gameEnded || button.disabled) return;
            const letter = button.textContent;
            button.disabled = true; // desabilita o botão após ser clicado
            checkLetter(letter);
        });
    });
});
