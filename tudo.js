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
    "JAGUAR", "COBRA", "LAGARTO", "SAPO", "RA",
    "AZUL", "VERMELHO", "VERDE", "AMARELO", "ROXO", 
    "LARANJA", "CINZA", "PRETO", "BRANCO", "MARROM", 
    "ROSADO", "PRATA", "DOURADO", "VINHO", "BEGE", 
    "TURQUESA", "AQUA", "MAGENTA", "CORAL", "INDIGO", 
    "BEJE", "CARAMELO", "SALMAO", "TAUPE", 
    "ESMERALDA", "VIOLETA", "CEREJA", "AÇAFRAO", "JADE", 
    "CARMESIM", "ORQUIDEA", "SAFIRA", "TOPAZIO", "MELROSA", 
    "LIMA", "COBALTO", "LAVANDA", "CARBONO", "AZULBEI", 
    "EBANO", "MARFIM", "TERROSO", "LILAS", "ALFAZEMA", 
    "FUCSIA", "TERRAQUEA", "CHOCOLATE",
    "FUTEBOL", "BASQUETE", "VOLEI", "TENIS", "NATAÇAO",
    "ATLETISMO", "GINASTICA", "HANDEBOL", "BOXE", "JUDO",
    "ESGRIMA", "FUTSAL", "RUGBY", "GOLF", "SURF",
    "SKATE", "CICLISMO", "BADMINTON", "TAEKWONDO", "KARATE",
    "PENTATLO", "TRIATLO", "ESCALADA", "TIRO", "CANOAGEM",
    "VELA", "HOCKEY", "PATINACAO", "PARAPENTE", "LUTA",
    "PETANCA", "SQUASH", "PESCA", "BILHAR", "HIKING",
    "WINDSURF", "RAQUETEBOL", "BASQUETE", "CANOAGEM", "TENIS",
    "NEYMAR", "MADONA", "LUDIMILA", "MESSI", "ANITA", "PELE", "EMINEM", "ADELE", "VIRGINIA", "KAKA","RONALDO", "PELE", "MARADONA","BEYONCE","XUXA","ELIANA","ANGELICA",
    "MATRIX", "TITANIC", "GLADIADOR", "INTERSTELLAR", "INCEPTION",
    "AVATAR", "BRASIL", "KILLBILL", "SCARFACE",
    "ROCKY", "ALIEN", "PREDADOR", "GLADIADOR", "BATMAN",
    "ROBOCOP", "CORINGA", "MULAN", "BRAVEHEART",
    "GODZILLA", "VENOM", "SAW", "MEMENTO", "DRACULA",
    "GHOST", "CINDERELLA", "ROCK", "GOONIES",
    "BRAVE", "HULK", "UP", "BOLT", "RANGO",
    "MOANA", "CARS", "SHREK", "RATATOUILLE", "COCO",
    "PARIS", "LONDRES", "ROMA", "TOKYO", 
    "BERLIM", "MADRI", "LISBOA", 
    "AMSTERDA", "SIDNEY", "PEQUIM", "MOSCOU", "ISTAMBUL", 
    "DUBAI", "BANGUECOQUE", "TORONTO", "JERUSALEM", "CANCUN", 
    "MIAMI", "MILAO", "VIENA", "BARCELONA", "FORTALEZA", "MARACANAU",
    "ATENAS", "PRAGA", "OTTAWA", "SANTIAGO", "BUDAPESTE", 
    "SEOUL", "CARACAS", "BAGDA", "DELHI", "OSLO", 
    "BRUXELAS", "COPENHAGUE", "HELSINKI", "VARSÓVIA", "ZURIQUE", 
    "NASSAU", "MONTEVIDEO", "QUITO", "ASUNCION", "LIMA", 
    "BOGOTA", "BUENOSAIRES", "HONOLULU", "BEIRUTE", "BRASILIA",
    "ANA", "JOAO", "MARIA", "PEDRO", "LUCAS", 
    "JULIA", "GABRIEL", "CAROLINA", "RAFAEL", "FERNANDA", 
    "MATEUS", "VITORIA", "THIAGO", "LARISSA", "MATHEUS", 
    "NATALIA", "GUSTAVO", "ISABELA", "DANIEL", "LETICIA", 
    "BRUNO", "BARBARA", "RODRIGO", "AMANDA", "GUILHERME", 
    "VANESSA", "RICARDO", "TATIANA", "FELIPE", "PATRICIA", 
    "ALEXANDRE", "PAULA", "MARCELO", "JESSICA", "ANDRE", 
    "SILVIA", "LEONARDO", "SARA", "EDUARDO", "CAMILA", 
    "MAURICIO", "CRISTIANE", "FABIO", "PRISCILA", "FERNANDO", 
    "SABRINA", "ANTONIO", "ADRIANA",
    "COMPUTADOR", "TELEVISAO", "CELULAR", "CADEIRA", "MESA", 
    "CANETA", "LIVRO", "OCULOS", "CARRO", "BICICLETA", 
    "GELADEIRA", "FOGAO", "MICROONDAS", "CAMISETA", "CALÇA", 
    "RELOGIO", "ANEL", "COLAR", "CADEADO", "CHAVE", 
    "LAMPADA", "CADEIRA", "SOFA", "TENIS", "BOLSA", 
    "TRAVESSEIRO", "ESCOVA", "XICARA", "PRATO", "GARFO", 
    "COLHER", "BULE", "PANELA", "ESPONJA", "SAPATO", 
    "CARTEIRA", "TOALHA","FIO", 
    "LIVRO", "OCULOS", 
    "MEDICO", "ENGENHEIRO", "PROFESSOR", "ADVOGADO", "PROGRAMADOR",
    "DENTISTA", "ENFERMEIRO", "MOTORISTA", "FARMACEUTICO", "ARQUITETO",
    "VETERINARIO", "CONTADOR", "BOMBEIRO", "JORNALISTA", "PSICOLOGO",
    "ELETRICISTA", "PEDREIRO", "MECANICO", "ANALISTA", "ECONOMISTA",
    "ARTISTA", "FOTOGRAFO", "MILITAR", "PILOTO", "CHEFE",
    "DESIGNER", "CIENTISTA", "GERENTE", "MOTOCICLISTA", "PESQUISADOR",
    "PINTOR", "AUXILIAR", "FISIOTERAPEUTA", "CIRURGIAO", "ADMINISTRADOR",
    "VENDEDOR", "ELETRONICISTA", "TECNICO", "ATOR", "MODELO"
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
