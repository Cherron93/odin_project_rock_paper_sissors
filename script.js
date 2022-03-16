const rockPaperSissors = ['rock', 'paper', 'sissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let randNum = (Math.floor(Math.random() * 3));
    return rockPaperSissors[randNum];
}

// let computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();
    if (newPlayerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++;
        console.log(`You Lose! Paper beats Rock. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        console.log(`You win! Paper beats Rock. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === 'paper' && computerSelection === 'sissors') {
        computerScore ++;
        console.log(`You lose! Sissors beats Paper. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === 'sissors' && computerSelection === 'paper') {
        playerScore ++;
        console.log(`You win! Sissors beats Paper. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === 'sissors' && computerSelection === 'rock') {
        computerScore ++;
        console.log(`You lose! Rock beats sissors. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === 'rock' && computerSelection === 'sissors') {
        playerScore ++;
        console.log(`You win! Rock beats sissors. Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } else if (newPlayerSelection === computerSelection) {
        console.log(`Draw! Player score = ${playerScore}. Computer score = ${computerScore}.`)
    } 
    else {
        console.log('Not a valid input. Try entering rock, paper, or sissors')
    }
}; 

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Enter Rock, Paper, or Scissors');
        let computerSelection = computerPlay();
        playRound (playerSelection, computerSelection); 
    }
    if (playerScore > computerScore) {
        console.log(`Congrats! You win! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
    } else if (computerScore > playerScore) {
        console.log(`Boo! You lose! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
    } else if (computerScore === playerScore) {
        console.log(`By golly, we have a draw! Final player score = ${playerScore}. Final computer score = ${computerScore}.`)
    }
}