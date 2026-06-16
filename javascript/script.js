function getPlayerChoice() {
  let playerChoice = prompt("What's your answer?");
  return (playerChoice =
    playerChoice.at(0).toUpperCase() + playerChoice.slice(1).toLowerCase());
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);

  if (rand >= 2) {
    return "Rock";
  } else if (rand >= 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

let message;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  const a = playerChoice;
  const b = computerChoice();

  if (a === b) {
    return (message = "It's a draw!");
  } else if (
    (a === "Rock" && b === "Scissor") ||
    (a === "Scissor" && b === "Paper") ||
    (a === "Paper" && b === "Rock")
  ) {
    playerScore++;
    return (message = "Player wins!");
  } else {
    computerScore++;
    return (message = "Computer wins!");
  }
}

function playGame(numMatch) {
  for (let i = 0; i < numMatch; i++) {
    let message = playRound(getPlayerChoice(), getComputerChoice);
    console.log(message);
    console.log(`${playerScore} || ${computerScore}`);
  }
}

const resultContainer = document.querySelector("#resultContainer");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", (event) => {
  let playerChoice = "Rock";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);
  console.log(`${playerScore} | ${computerScore}`);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);

  if (playerScore === 5) {
    console.log("We've got a winner! It's the player");
  } else if (computerScore === 5) {
    console.log("We've got a winner! It's the computer");
  }
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", (event) => {
  let playerChoice = "Paper";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);

  if (playerScore === 5) {
    console.log("We've got a winner! It's the player");
  } else if (computerScore === 5) {
    console.log("We've got a winner! It's the computer");
  }
});

const btnScissor = document.querySelector("#btnScissor");
btnScissor.addEventListener("click", (event) => {
  let playerChoice = "Scissor";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);

  if (playerScore === 5) {
    console.log("We've got a winner! It's the player");
  } else if (computerScore === 5) {
    console.log("We've got a winner! It's the computer");
  }
});
