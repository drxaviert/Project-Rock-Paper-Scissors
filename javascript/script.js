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

function playRound(playerChoice, computerChoice) {
  const a = playerChoice;
  const b = computerChoice();

  if (a === b) {
    return "It's a draw!";
  } else if (
    (a === "Rock" && b === "Scissor") ||
    (a === "Scissor" && b === "Paper") ||
    (a === "Paper" && b === "Rock")
  ) {
    return "Player wins!";
    playerScore++;
  } else {
    return "Computer wins!";
    computerScore++;
  }
}

const resultContainer = document.querySelector("#resultContainer");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", (event) => {
  let playerChoice = "Rock";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", (event) => {
  let playerChoice = "Paper";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);
});

const btnScissor = document.querySelector("#btnScissor");
btnScissor.addEventListener("click", (event) => {
  let playerChoice = "Scissor";
  let resultFromGame = playRound(playerChoice, getComputerChoice);
  console.log(resultFromGame);

  const result = document.createElement("div");
  result.textContent = resultFromGame;
  resultContainer.appendChild(result);
});

// let playerScore = 0;
// let computerScore = 0;

// if (playerScore === 5) {
//   console.log("We've got a winner! It's the player");
// } else if (computerScore === 5) {
//   console.log("We've got a winner! It's the computer");
// }
