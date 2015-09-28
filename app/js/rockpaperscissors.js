////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput(); 
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if  (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    }
    else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    }
    else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    }
    else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    }
    else {
        winner = 'Invalid input';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove1;
    var computerMove1;
    var winner;

    while (playerWins < 5 && computerWins < 5) {
        playerMove1 = getPlayerMove();
        console.log("Got player move.");
        computerMove1 = getComputerMove();
        console.log("Got computer move.");
        console.log('Player chose ' + playerMove1 + ' while Computer chose ' + computerMove1);
        winner = getWinner(playerMove1,computerMove1);
        if(winner == 'player'){
            playerWins = playerWins + 1;
            console.log('Player wins.');
        }
            else if (winner == 'computer'){
            computerWins = computerWins + 1;
            console.log('Computer wins.');
        }
        else{
            console.log('No winner');
        }
        console.log('The score is now ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}
playToFive();

