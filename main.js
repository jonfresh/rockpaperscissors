

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
    roundMessage = 'Welcome';
    console.log(`${roundMessage} The score is Player ${playerScore}, AI ${computerScore}.`);
    for (let i = 0; i <= 5; i++) {
        let humanSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        if (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
            roundMessage = `${humanSelection}` + ' is not an option. Please select Rock, Paper or Scissors.';
        } else {
            let roundResult
            let computerSelection = getComputerChoice();
            roundResult = startRound(humanSelection, computerSelection);
            if (roundResult === DRAW) {
                roundMessage = `It\'s a tie. You both chose ${humanSelection}.`;
            } else if (roundResult === WIN) {
                playerScore++;
                roundMessage = `You win. ${humanSelection} beats ${computerSelection}.`;
            } else if (roundResult === LOSE) {
                computerScore++;
                roundMessage = `You lose. ${computerSelection} beats ${humanSelection}`;
            } else {
                roundMessage = `Error!`;
            }
        }
        console.log(`${roundMessage} The score is Player ${playerScore}, AI ${computerScore}.`);

    }
}


const DRAW = 0
const WIN = +1
const LOSE = -1

game();
