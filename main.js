/*Player*/
var playerSelect = document.getElementById("player-select");
var playerImage = document.getElementById("player-image");
var playerScore = document.getElementById("player-score");

/*Player Buttons*/
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

/*Computer*/
var computerSelect = document.getElementById("computer-select");
var computerImage = document.getElementById("computer-image");
var computerScore = document.getElementById("computer-score");

var result = document.getElementById("result");
var round = document.getElementById("round");
var resultRound = document.getElementById("result-round");

var values = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let select = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return values[select];
}

function playAgain() {
  document.getElementById("reload").classList.add("reload");
  playerImage.setAttribute("src", `img/defaultPlayer.png`);
  computerImage.setAttribute("src", `img/defaultComputer.png`);
  rockButton.style.display = "";
  paperButton.style.display = "";
  scissorsButton.style.display = "";
  playerSelect.textContent = "";
  computerSelect.textContent = "";
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  result.textContent = "";
  round.textContent = "Start";
  resultRound.textContent = "";
}

function playRound(a, playerSelection, computerSelection) {
  /*Player */
  playerSelection = a.innerText;
  playerSelect.innerText = playerSelection;
  playerImage.setAttribute("src", `img/${playerSelection}.png`);

  /*Computer*/
  computerSelection = getComputerChoice();
  computerSelect.innerText = computerSelection;
  computerImage.setAttribute("src", `img/${computerSelection}.png`);

  /*Game*/
  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    resultRound.textContent = "You Win! Scissors beats Paper";
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    resultRound.textContent = "You Win! Paper beats Rock";
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    resultRound.textContent = "You Win! Rock beats Scissors";
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else if (playerSelection == computerSelection) {
    resultRound.textContent = "Draw";
  } else {
    resultRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = Number(computerScore.textContent) + 1;
  }

  /*Results*/
  const regex = /\d/;
  if (playerSelection !== "") {
    round.innerText = `Round ${Number(round.textContent.match(regex)) + 1}`;
  }

  if (round.textContent.match(regex) == 5) {
    if (Number(playerScore.textContent) > Number(computerScore.textContent)) {
      result.innerText = `You win ${playerScore.textContent} - ${computerScore.textContent}`;
    } else if (
      Number(playerScore.textContent) < Number(computerScore.textContent)
    ) {
      result.innerText = `You lose ${computerScore.textContent} - ${playerScore.textContent}`;
    } else {
      result.innerText = `Draw game ${computerScore.textContent} - ${playerScore.textContent}`;
    }
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    document.getElementById("reload").classList.remove("reload");
  }
}
