let playerScore = 0;
let computerScore = 0;
let clicked = 0;

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

function playRound() {
    const h4 = document.querySelector(".final");
    h4.textContent="";
    let playerSelection = "";
    let computerSelection = computerPlay();
    clicked++;
    if (this.id === "rock") playerSelection = "rock";
    else if (this.id === "paper") playerSelection = "paper";
    else playerSelection = "scissors";
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        updateScore();
        updateResult("You win! Rock beats scissors!");
        checkReset();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        updateScore();
        updateResult("You lose! Rock beats scissors!");
        checkReset();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        updateScore();
        updateResult("You lose! Scissors bests paper!");
        checkReset();
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        updateScore();
        updateResult("You lose! Paper bests paper!");
        checkReset();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        updateScore();
        updateResult("You win! Paper bests rock!");
        checkReset();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        updateScore();
        updateResult("You win! Scissors bests paper!");
        checkReset();
    }else {
        updateResult("Tie!");
    }
}

const allImgs = document.querySelectorAll('img');

allImgs.forEach( image => image.addEventListener('click', playRound));

function updateScore() {
    const scoreP = document.querySelector("#scoreP");
    scoreP.textContent = `Player: ${playerScore}`;

    const scoreC = document.querySelector("#scoreC");
    scoreC.textContent = `Computer: ${computerScore}`;
}


function updateResult(result) {
    const h4 = document.querySelector(".result");

    h4.textContent = result;
}

function checkReset() {
    if (playerScore===5 || computerScore===5) {
        const h4 = document.querySelector(".final");
        if (playerScore===5) {
        h4.textContent = "You win the best of 5! Congrats. Click to play again.";
        }
        else {
            h4.textContent = "You lost the best of 5! :( Click to play again.";
        }
        const scoreP = document.querySelector("#scoreP");
        scoreP.textContent = `Player: 0`;

        const scoreC = document.querySelector("#scoreC");
        scoreC.textContent = `Computer: 0`;

        playerScore = 0;
        computerScore = 0;
    }
}