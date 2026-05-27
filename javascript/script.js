// ***Get computer choice
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

// ***Get human choice
function getHumanChoice() {
  let humanChoice = prompt("What's your answer?");

  // Make humanChoice case insensitive
  humanChoice =
    humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}

// console.log(getHumanChoice());

// ***Set initial score

let humanScore, computerScore;

humanScore = 0;
computerScore = 0;

// ***Game's logic

const winMessage = "You win!";
const loseMessage = "You lose!";
const drawMessage = "It's a draw!";

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return drawMessage;
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    return winMessage;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    return winMessage;
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    return winMessage;
  } else {
    return loseMessage;
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let playOneRound = playRound(humanSelection, computerSelection);

if (playOneRound === winMessage) {
  humanScore++;
} else if (playOneRound === loseMessage) {
  computerScore++;
}

console.log(`You: ${humanSelection}`);
console.log(`Computer: ${computerSelection}`);

console.log(`Result: ${playOneRound}`);
console.log(`Score: You - ${humanScore} | Computer - ${computerScore}`);
