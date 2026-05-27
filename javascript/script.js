// Get computer choice
function getComputerChoice() {
  let randNo = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randNo >= 2) {
    computerChoice = "Rock";
  } else if (randNo >= 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }

  return computerChoice;
}

// console.log(getComputerChoice());

// Get human choice
function getHumanChoice() {
  return prompt("What's your answer?");
}

// console.log(getHumanChoice());

// Set initial score

let humanScore, computerScore;

humanScore = 0;
computerScore = 0;

// Game's logic

function playRound(getHumanChoice, getComputerChoice) {
  let humanChoice =
    getHumanChoice().at(0).toUpperCase() +
    getHumanChoice().slice(1).toLowerCase();

  return hunanChoice + "12";
}

console.log(playRound(getHumanChoice));
