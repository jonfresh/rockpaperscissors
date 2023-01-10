function getComputerChoice() {
    const randomSelection = Math.floor(Math.random() * 3 + 1);
    switch (randomSelection) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
    }
}

function startRound(humanSelection, computerSelection) {
    let humanSelects = humanSelection.toLowerCase();
    let computerSelects = computerSelection.toLowerCase();
    alert(`You go ${humanSelects}. AI goes ${computerSelects}`);
    if (humanSelects === computerSelects) {
        return DRAW;
    } else if (humanSelects === "rock" && computerSelects === "scissors" ||
               humanSelects === "paper" && computerSelects === "rock" ||
               humanSelects === "scissors" && computerSelects === "paper") {
        return WIN;
    } else {
        return LOSE;
    }
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0; 
    let gameScore = 0;
    let roundNumber = 0;
    roundMessage = '';
    alert(`Press OK to play five rounds of Rock, Paper, Scissors against the AI.`);
    for (let i = 0; i <= 4; i++) {
        let humanSelection = prompt(`Round ` + ( roundNumber + 1 ) + `: Rock, Paper or Scissors?`).toLowerCase();
        if (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
            roundMessage = `${humanSelection}` + ' is not an option. Tied round. Please select Rock, Paper or Scissors.';
            roundNumber++;
            alert(`${roundMessage} After Round ${roundNumber}: You have ${playerScore}. AI has ${computerScore}.`);
            continue;
        } else {
            let roundResult
            let computerSelection = getComputerChoice();
            roundResult = startRound(humanSelection, computerSelection);
            if (roundResult === DRAW) {
                roundMessage = `It\'s a tie. You both chose ${humanSelection}.`;
                roundNumber++;
            } else if (roundResult === WIN) {
                playerScore++;
                roundMessage = `You win.`;
                roundNumber++;
            } else {
                computerScore++;
                roundMessage = `You lose.`;
                roundNumber++;
            }
        }
        gameScore = playerScore - computerScore;
        alert(`${roundMessage} After Round ${roundNumber}: You have ${playerScore}. AI has ${computerScore}.`);
    }
    return gameScore;
}

function endGame() {
    let gameResult = game();
    if (gameResult === 0) {
        gameMessage = `The game ended a draw. `;
    } else if (gameResult > 0) {
        gameMessage = `This was a triumph! You defeated the AI!`;
    } else {
        gameMessage = `You lost the game! Better luck next time!`
    }
    alert(`${gameMessage}`);
}

const DRAW = 0
const WIN = +1
const LOSE = -1

endGame();