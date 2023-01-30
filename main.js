// Rock Paper Scissors game by Jon Stead. An Odin Project.

// getComputerChoice is a repeatable function that selects a random selection of 1, 2 or 3.
// The selection is then returned as either Rock, Paper or Scissors.

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

// startRound is a repeatable function that takes a selection from both the player and the computer.
// It compares the selections to see if the player wins, loses or draws the round and returns the result to the main game.
// It also alerts the player to the selections made each round.

function startRound(humanSelection, computerSelection) {
    let humanSelects = humanSelection.toLowerCase();
    let computerSelects = computerSelection.toLowerCase();
    // alert(`You go ${humanSelects}. AI goes ${computerSelects}`);
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

// game is a looping function that plays the game for 5 rounds. It calls on the other functions for its inputs and keeps score.
// As each round is played it asks for the player's selection and receives a return from the startRound function.
// Depending on the result of the round the score is adjusted through the playerScore, computerScore and gameScore variables.
// It also alerts the player after each round with the result and the updated score. At the end of the game it returns the final score.


const humanBtns = document.querySelectorAll('.humanBtn');

function logText() {
    console.log(this.id);
}   

humanBtns.forEach(humanBtn => humanBtn.addEventListener('click', () => {
    alert(humanBtn.id);
}));




function game() {
    let playerScore = 0;
    let computerScore = 0; 
    let gameScore = 0;
    let roundNumber = 0;
    roundMessage = '';
    // alert(`Press OK to play five rounds of Rock, Paper, Scissors against the AI.`);
    for (let i = 0; i <= 0; i++) {
        let humanSelection = prompt(`Round ` + ( roundNumber + 1 ) + `: Rock, Paper or Scissors?`).toLowerCase();
        if (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
            roundMessage = `${humanSelection}` + ' is not an option. Tied round. Please select Rock, Paper or Scissors.';
            roundNumber++;
            // alert(`${roundMessage} After Round ${roundNumber}: You have ${playerScore}. AI has ${computerScore}.`);
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
        // alert(`${roundMessage} After Round ${roundNumber}: You have ${playerScore}. AI has ${computerScore}.`);
    }
    return gameScore;
}

// runGame is a function that initializes the game and returns the final result to the player.

function runGame() {
    let gameResult = game();
    if (gameResult === 0) {
        gameMessage = `The game ended a draw. `;
    } else if (gameResult > 0) {
        gameMessage = `This was a triumph! You defeated the AI!`;
    } else {
        gameMessage = `You lost the game! Better luck next time!`
    }
    // alert(`${gameMessage}`);
}

// These variables are defined to adjust the gameScore during each round.

const DRAW = 0
const WIN = +1
const LOSE = -1

// Runs the game.

runGame();