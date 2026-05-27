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

console.log(getComputerChoice());
