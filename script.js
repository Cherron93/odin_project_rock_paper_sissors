const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const roundWinner = document.querySelector('#roundWinner')
const playerScoreDiv = document.querySelector('#playerScore')
const computerScoreDiv = document.querySelector('#computerScore')
const rockPaperSissors = ['rock', 'paper', 'sissors'];
let playerScore = 0;
let computerScore = 0;

function computerSelection () {
    let randNum = (Math.floor(Math.random() * 3));
    return rockPaperSissors[randNum];
    
}

function playRound (playerSelection, computerSelection) {
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
    } else {
        roundWinner.innerText = 'Not a valid input. Try entering rock, paper, or sissors'
    }
}; 

rockButton.addEventListener('click', function run() {
    playerSelection = 'rock'
    playRound();
    console.log(playerSelection);
    console.log(computerSelection());
});


paperButton.addEventListener('click', function run() {
    playerSelection = 'paper'
    playRound();
    console.log(playerSelection);
    console.log(computerSelection());
});

scissorsButton.addEventListener('click', function run() {
    playerSelection = 'paper'
    playRound();
    console.log(playerSelection);
    console.log(computerSelection());
});

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = window.prompt('Enter Rock, Paper, or Scissors');
//         let computerSelection = computerPlay();
//         playRound (playerSelection, computerSelection); 
//     }
//     if (playerScore > computerScore) {
//         console.log(`Congrats! You win! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
//     } else if (computerScore > playerScore) {
//         console.log(`Boo! You lose! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
//     } else if (computerScore === playerScore) {
//         console.log(`By golly, we have a draw! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
//     }
// }

// buttons.addEventListener('click', computerPlay(), playRound());






