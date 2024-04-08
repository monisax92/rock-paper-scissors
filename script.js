const playerScoreEl = document.getElementById("player-score");
const playerChoiceEl = document.getElementById("player-choice");
const computerScoreEl = document.getElementById("computer-score");
const computerChoiceEl = document.getElementById("computer-choice");
const presultText = document.getElementById("result-text");

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerSpock = document.getElementById('playerSpock');
const playerLizard = document.getElementById('playerLizard');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerSpock = document.getElementById('computerSpock');
const computerLizard = document.getElementById('computerLizard');

const allGameIcons = document.querySelectorAll(".far");

const infoBtn = document.getElementById("info-btn");
const iframe = document.querySelector("iframe");

let computerChoice = '';

let playerScore = 0;
let computerScore = 0;

const rules = {
  rock: {name: "Rock", defeats: ['scissors', 'lizard']},
  paper: {name: "Paper", defeats: ['rock', 'spock']},
  scissors: {name: "Scissors", defeats: ['paper', 'lizard']},
  lizard: {name: "Lizard", defeats: ['paper', 'spock']},
  spock: {name: "Spock", defeats: ['scissors', 'rock']}
}

const resetSelection = () => {
  stopConfetti();
  removeConfetti();
  allGameIcons.forEach(icon => {
    icon.classList.remove("selected");
  })
}

const resetAll = () => {
  resetSelection();
  playerScore = 0;
  playerScoreEl.textContent = 0;
  computerScore = 0;
  computerScoreEl.textContent = 0;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
}

const computerRandomSelect = () => {
  const random = Math.random();
  if (random < .2) computerChoice = 'rock';
  else if (random < .4) computerChoice = "paper";
  else if (random < .6) computerChoice = "scissors";
  else if (random < .8) computerChoice = "lizard";
  else computerChoice = "spock";
}

const updateScores = (choice) => {
  if(rules[choice].defeats.includes(computerChoice)){
    startConfetti();
    resultText.textContent = "You won!";
    playerScore++;
    playerScoreEl.textContent = playerScore; 
  } else if (choice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    resultText.textContent = "Computer won.";
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

const checkResult = (choice) => {
  resetSelection();
  computerRandomSelect();
  displayComputerSelection();
  updateScores(choice);
}

const displayComputerSelection = () => {
  switch(computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
} 

const select = (playerChoice) => {
  checkResult(playerChoice);

  switch(playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
} 


infoBtn.addEventListener("click", () => {
  if(iframe.style.display === "none") {
    iframe.style.display = "block";
    infoBtn.innerText = "Close it";
  } else {
    iframe.style.display = "none";
    infoBtn.innerText = "Show instructions";
  }
})

resetAll();