// Returns a string value: rock, paper, or scissors.
function getComputerChoice() {
    // Creates a randomized number and stores it in a variable "num".
    let num = Math.floor(Math.random() * 100) + 1;

    /* Returns a string value that depends on what number was stored
       inside the variable "num". */
    if (num <= 35) {
        return "rock";
    } else if (num > 35 && num < 71) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Takes two parameters: the first one is the user's choice, 
   and the second is the computer's choice.
   After that, it tells the user if the user has won against the computer
   based on the two parameters. */
function playRound(playerSelection, computerSelection) {

    // Converts the user's choice to lower case.
    playerSelection = playerSelection.toLowerCase();

    // Tells the user if the user has won or lost.
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
}

/* Lets the user play the game "Rock Paper Scissors" for five times
   against the computer and tells the user if the user has won. */
function game() {

    // These are variables that store the scores of the user and the computer.
    let playerScore = 0;
    let computerScore = 0;

    // Loops for five times.
    for (let i = 0; i < 5; i++) {

        // Prompts the user for the user's choice then stores it in a variable.
        let playerChoice = prompt("Rock, Paper, or Scissors?");

        // Uses the function "playRound" then stores it in a variable.
        let result = playRound(playerChoice, getComputerChoice());

        // Prints the value of the variable "result".
        console.log(result);

        // Extracts 8 characters of the string inside the variable "result".
        result = result.slice(0, 8);

        /* Increments the user's score if the user wins a round, 
           but if the computer wins, the computer's score will
           be incremented. If it's a tie, it will add one more round
           of play. */
        if (result === "You win!") {
            ++playerScore;
        } else if (result === "You lose") {
            ++computerScore;
        } else {
            --i;
        }
    }

    // Returns the result of the game.
    return (playerScore > computerScore) ?
            "Congrats! You're the winner!" :
            "You lost the game.";
}