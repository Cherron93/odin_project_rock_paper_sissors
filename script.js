const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const roundWinner = document.querySelector('#roundWinner');
const restartButton = document.querySelector('#restart');

const rockPaperSissors = ['rock', 'paper', 'sissors'];
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let randNum = (Math.floor(Math.random() * 3));
    const rockPaperSissors = ['rock', 'paper', 'sissors'];
    return rockPaperSissors[randNum];
}

function playRound (playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {    
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore ++;
            computerScore.innerText = `Computer Score is ${computerScore}`;
            roundWinner.innerText = `You Lose! Paper beats Rock. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore ++;
            roundWinner.innerText = `You win! Paper beats Rock. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === 'paper' && computerSelection === 'sissors') {
            computerScore ++;
            roundWinner.innerText = `You lose! Sissors beats Paper. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === 'sissors' && computerSelection === 'paper') {
            playerScore ++;
            roundWinner.innerText = `You win! Sissors beats Paper. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === 'sissors' && computerSelection === 'rock') {
            computerScore ++;
            roundWinner.innerText = `You lose! Rock beats sissors. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === 'rock' && computerSelection === 'sissors') {
            playerScore ++;
            roundWinner.innerText = `You win! Rock beats sissors. Player score = ${playerScore}. Computer score = ${computerScore}.`
        } else if (playerSelection === computerSelection) {
            roundWinner.innerText = `Draw! Player score = ${playerScore}. Computer score = ${computerScore}.`
        } 
    } else if (playerScore === 5 ) {
        roundWinner.innerText = `Congrats! You win! Final player score = ${playerScore}. Final computer score = ${computerScore}.`
    } else if (computerScore === 5) {
        roundWinner.innerText = `Boo! You lose! Final player score = ${playerScore}. Final computer score = ${computerScore}.`
    }
}

rockButton.addEventListener('click', () => {playRound('rock', computerChoice())
});
paperButton.addEventListener('click', () => {playRound('paper', computerChoice())
});
scissorsButton.addEventListener('click', () => {playRound('paper', computerChoice())
});

restartButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    roundWinner.innerText = '';
});