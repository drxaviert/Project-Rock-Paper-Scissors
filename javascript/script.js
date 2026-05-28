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

// ***Get human choice
function getHumanChoice() {
  let humanChoice = prompt("What's your answer?");

  // Make humanChoice case insensitive
  humanChoice =
    humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  return humanChoice;
}

// ***Set initial score
let humanScore, computerScore;

humanScore = 0;
computerScore = 0;

// ***Game's logic
let message, humanSelection, computerSelection;

const winMessage = "You win!";
const loseMessage = "You lose!";
const drawMessage = "It's a draw!";

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    message = drawMessage;
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    message = winMessage;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    message = winMessage;
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    message = winMessage;
  } else {
    message = loseMessage;
  }

  humanSelection = humanChoice;
  computerSelection = computerChoice;
  return message;
}

function playGame(numberOfMatches) {
  for (let i = 0; i < numberOfMatches; i++) {
    let oneRound = playRound(getHumanChoice(), getComputerChoice());

    if (message === winMessage) {
      humanScore++;
    } else if (message === loseMessage) {
      computerScore++;
    }

    console.log(
      `${oneRound} Your choice: ${humanSelection} | Computer choice: ${computerSelection}`,
    );

    // console.log(humanScore);
    // console.log(computerScore);
  }

  console.log(
    `Total | Your score: ${humanScore} | Computer score: ${computerScore}`,
  );

  if (humanScore > computerScore) {
    console.log(`Congratulations! You have won `);
  } else if (humanScore < computerScore) {
    console.log(`Tough luck! The computer has won`);
  } else {
    console.log(`Eh, it's a  tie`);
  }
}

playGame(3);
