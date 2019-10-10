const yourChoice = document.querySelector('[data-summary="your-choice"]');
const aiChoice = document.querySelector('[data-summary="ai-choice"]');
const gameNumbers = document.querySelector('p.numbers span');
const winsNumbers = document.querySelector('p.wins span');
const lossesNumbers = document.querySelector('p.losses span');
const drawsNumbers = document.querySelector('p.draws span');
const whoWin = document.querySelector('[data-summary="who-win"]');


const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    drwas: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = {
    all: [...document.querySelectorAll('.select img')],
    rock: document.querySelector(".first")
}

const handleSelection = (e) => {
    console.log(e.target);
    console.log(game.playerHand = e.target.dataset.option);
    hands.all.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 5px red'
}

const computerChoice = () => {
    const index = Math.floor(Math.random() * 3)
    const computerHand = hands.all[index].dataset.option;
    return computerHand;
}

const checkResult = () => {
    if (game.playerHand === game.aiHand) {
        return 'draw'
    } else if ((game.playerHand === "paper" && game.aiHand === "rock") ||
        (game.playerHand === "rock" && game.aiHand === "scissors") ||
        (game.playerHand === "scissors" && game.aiHand === "paper")) {
        return 'win'
    } else {
        return 'loss'
    }
}

const publishResult = (result) => {
    yourChoice.textContent = game.playerHand;
    aiChoice.textContent = game.aiHand;
    console.log(result);
    gameNumbers.textContent = ++gameSummary.numbers;
    if (result === 'win') {
        winsNumbers.textContent = ++gameSummary.wins;
        whoWin.style.color = "green";
        whoWin.textContent = "You won!";
    } else if (result === 'loss') {
        lossesNumbers.textContent = ++gameSummary.losses;
        whoWin.style.color = "red";
        whoWin.textContent = "You lost!";
    } else {
        drawsNumbers.textContent = ++gameSummary.drwas;
        whoWin.style.color = "blue";
        whoWin.textContent = "Draw!";
    }
}

const resetGame = () => {
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = '';
    game.playerHand = '';
}

// --- Controller --- //
const startGame = () => {
    if (!game.playerHand) return alert("Choose a hand!");

    game.aiHand = computerChoice();
    console.log(game.aiHand);

    const gameResult = checkResult();
    console.log(gameResult);

    publishResult(gameResult);

    resetGame();
}

hands.all.forEach(hand => hand.addEventListener('click', handleSelection));

document.querySelector('.start').addEventListener('click', startGame);