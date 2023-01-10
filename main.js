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
    console.log(`You go ${humanSelects}`);
    console.log(`AI goes ${computerSelects}`);
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
    roundMessage = 'Hello Human';
    console.log(`${roundMessage}. 5 rounds. The score is Player ${playerScore}, AI ${computerScore}.`);
    for (let i = 0; i <= 4; i++) {
        let humanSelection = prompt(`Round ` + ( roundNumber + 1 ) + `: Rock, Paper or Scissors?`).toLowerCase();
        if (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
            roundMessage = `${humanSelection}` + ' is not an option. Tied round. Please select Rock, Paper or Scissors.';
            roundNumber++;
            console.log(`Round ${roundNumber}: ${roundMessage} The score is Player ${playerScore}, AI ${computerScore}.`);
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
                roundMessage = `You win. ${humanSelection} beats ${computerSelection}.`;
                roundNumber++;
            } else {
                computerScore++;
                roundMessage = `You lose. ${computerSelection} beats ${humanSelection}`;
                roundNumber++;
            }
        }
        gameScore = playerScore - computerScore;
        console.log(`Round ${roundNumber}: ${roundMessage} The score is Player ${playerScore}, AI ${computerScore}.`);
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
    console.log(`${gameMessage}`);
}

const DRAW = 0
const WIN = +1
const LOSE = -1

endGame();