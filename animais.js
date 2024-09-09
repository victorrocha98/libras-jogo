const words = [
    "CACHORRO", "GATO", "ELEFANTE", "LEAO", "TIGRE", 
    "GIRAFA", "MACACO", "CROCODILO", "RINOCERONTE", "HIPOPOTAMO", 
    "ZEBRA", "PANDA", "GOLFINHO", "FOCA", "SURICATO", 
    "PAPAGAIO", "CORUJA", "ABELHA", "FORMIGA", "BORBOLETA", 
    "POLVO", "TARTARUGA", "PEIXE", "BACALHAU", "CAMARAO", 
    "CARANGUEJO", "PATO", "CISNE", "AGUIA", "FALCAO", 
    "BUFALO", "CAVALO", "VACA", "PORCO", "GALO", 
    "PERU", "AVESTRUZ", "COELHO", "RAPOSA", "LOBO", 
    "URSO", "VEADO", "ESQUILO", "OURICO", "PANTERA", 
    "JAGUAR", "COBRA", "LAGARTO", "SAPO", "RA"
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
