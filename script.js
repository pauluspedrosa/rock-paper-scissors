function getComputerChoice() {
    let num = Math.floor(Math.random() * 100) + 1;

    if (num <= 35) {
        return "rock";
    } else if (num > 35 && num < 71) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerChoice, getComputerChoice());

        console.log(result);

        result = result.slice(0, 8);

        if (result === "You win!") {
            ++playerScore;
        } else if (result === "You lose") {
            ++computerScore;
        } else {
            --i;
        }
    }

    return (playerScore > computerScore) ?
            "Congrats! You're the winner!" :
            "You lost the game.";
}