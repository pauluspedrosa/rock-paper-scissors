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