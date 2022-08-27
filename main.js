console.log("Hello World");

const values = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let select = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return values[select];
}

function playRound(playerSelection, computerSelection) {
  let value = prompt("Ingresa un valor Rock, Paper, Scissor");
  playerSelection = value.toLowerCase();
  computerSelection = getComputerChoice();
  console.log("player = " + playerSelection);
  console.log("computer = " + computerSelection);
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else {
    return "Draw";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();
