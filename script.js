const rockPaperSissors = ['rock', 'paper', 'sissors'];

function computerPlay () {
    let randNum = (Math.floor(Math.random() * 3));
    return rockPaperSissors[randNum];
}

function playRound (playerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(newPlayerSelection);
    console.log(computerSelection);
    if (newPlayerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock')
    } else if (newPlayerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats Rock')
    } else if (newPlayerSelection === 'paper' && computerSelection === 'sissors') {
        console.log('You lose! Sissors beats Paper')
    } else if (newPlayerSelection === 'sissors' && computerSelection === 'paper') {
        console.log('You win! Sissors beats Paper')
    } else if (newPlayerSelection === 'sissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats sissors')
    } else if (newPlayerSelection === 'rock' && computerSelection === 'sissors') {
        console.log('You win! Rock beats sissors')
    } else if (newPlayerSelection === computerSelection) {
        console.log('Draw!')
    } 
    else {
        console.log('Not a valid input. Try entering rock, paper, or sissors')
    }
}; 




// function playRound (playerSelection) {
//     let newPlayerSelection = playerSelection.toLowerCase();
//     let computerSelection = computerPlay();
//     console.log(newPlayerSelection);
//     console.log(computerSelection);



        // if (newPlayerSelection === 'rock' && computerSelection === 'paper') {
        //     console.log('You Lose! Paper beats Rock')
        // } else if (newPlayerSelection === 'paper' && computerSelection === 'rock') {
        //     console.log('You win! Paper beats Rock')
        // } else if (newPlayerSelection === 'paper' && computerSelection === 'sissors') {
        //     console.log('You lose! Sissors beats Paper')
        // } else if (newPlayerSelection === 'sissors' && computerSelection === 'paper') {
        //     console.log('You win! Sissors beats Paper')
        // } else if (newPlayerSelection === 'sissors' && computerSelection === 'rock') {
        //     console.log('You lose! Rock beats sissors')
        // } else if (newPlayerSelection === 'rock' && computerSelection === 'sissors') {
        //     console.log('You win! Rock beats sissors')
        // } else {
        //     console.log('Not a valid input. Try entering rock, paper, or sissors')
        // }
    // }; 





// function game (playerSelection, newComputerSelection) {
//     let newPlayerString = playerSelection.toString();
//     let newPlayerSelection = newPlayerString.toLowerCase();
//     console.log(newPlayerSelection);
//     // let newComputerSelection = computerPlay ();
//     // if (newPlayerSelection === 'rock' && computerSelection === 'paper') {
//     //     console.log('You Lose! Paper beats Rock')
//     // } else if (newPlayerSelection === 'paper' && computerSelection === 'rock') {
//     //     console.log('You win! Paper beats Rock')
//     // } else if (newPlayerSelection === 'paper' && computerSelection === 'sissors') {
//     //     console.log('You lose! Sissors beats Paper')
//     // } else if (newPlayerSelection === 'sissors' && computerSelection === 'paper') {
//     //     console.log('You win! Sissors beats Paper')
//     // } else if (newPlayerSelection === 'sissors' && computerSelection === 'rock') {
//     //     console.log('You lose! Rock beats sissors')
//     // } else if (newPlayerSelection === 'rock' && computerSelection === 'sissors') {
//     //     console.log('You win! Rock beats sissors')
//     // } else {
//     //     console.log('Not a valid input. Try entering rock, paper, or sissors')
//     // }
// }; 