const gameOptions = ["rock", "paper", "scissors"];

const humanScoreCard = document.querySelector(`.humanScoreCard`);
const computerScoreCard = document.querySelector(`.computerScoreCard`);

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    humanScoreCard.innerText = humanScore;
    computerScoreCard.innerText = computerScore;
}

function getComputerChoice() {
    const randomSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomSelection;
}

function updateDOM(human, computer) {
    let humanUpdate = document.querySelector(`.optionHuman.${human}`);
    humanUpdate.classList.add('selected');
    let computerUpdate = document.querySelector(`.optionAi.${computer}`);
    computerUpdate.classList.add('selected');

    const options = document.querySelectorAll(`.option`);
        options.forEach(option => option.addEventListener('transitionend', removeTransition));

    function removeTransition (e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('selected');
    }
};

function checkEndGame () {
    if (humanScore < 5 && computerScore < 5) {
        return;
    } else if ( humanScore == 5) {
        document.querySelector('.winScreen').classList.add('showEndScreen');
        document.querySelector('.container').classList.add('hideAnimation');
        return;
    } else {
        document.querySelector('.loseScreen').classList.add('showEndScreen');
        document.querySelector('.container').classList.add('hideAnimation');
    }
    
}

function roundLogic(human, computer) {
    if (human === computer) {
        return;
    } else if (human === "rock" && computer === "scissors" ||
               human === "paper" && computer === "rock" ||
               human === "scissors" && computer === "paper") {
                humanScore ++;
                console.log(humanScore);
        return human;
    } else {
        computerScore ++;
        console.log(computerScore);
        return computer;
    }
}

function playRound(getHumanChoice) {
    let human = getHumanChoice.target.innerText.toLowerCase();
    let computer = getComputerChoice();
    let roundResult = roundLogic(human, computer);
    updateDOM(human, computer);
    updateScore();
    checkEndGame();
    console.log(roundResult);
};

window.addEventListener('click', function (getHumanChoice) {
    const humanSelection = getHumanChoice.target.innerText.toLowerCase();
    if (gameOptions.includes(humanSelection) !== true) {
        return;
    } else {
        playRound(getHumanChoice);
    }
});

window.addEventListener('touchstart', function (getHumanChoice) {
    const humanSelection = getHumanChoice.target.innerText.toLowerCase();
    if (gameOptions.includes(humanSelection) !== true) {
        return;
    } else {
        playRound(getHumanChoice);
    }
});