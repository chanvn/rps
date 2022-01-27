function computerPlay() {
    let randomNum = Math.floor(Math.random() * (3)) + 1;

    if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors bests paper!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper bests paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper bests rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors bests paper!";
    }else {
        return "Tie!";
    }
}

function game() {
        for (let i = 0; i < 5; i++){
        let player = prompt("Enter rock, paper, or scissors")
        let result = playRound(player, computerPlay());
        console.log(result);
        }
    }


game()