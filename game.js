function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  const lowPlayerSelection = playerSelection.toLowerCase();

  console.log(lowPlayerSelection, computerSelection);

  if (
    (lowPlayerSelection === "rock" && computerSelection === "rock") ||
    (lowPlayerSelection === "paper" && computerSelection === "paper") ||
    (lowPlayerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "It's a draw!";
  } else if (
    (lowPlayerSelection === "rock" && computerSelection == "paper") ||
    (lowPlayerSelection === "paper" && computerSelection == "scissors") ||
    (lowPlayerSelection === "scissors" && computerSelection == "rock")
  ) {
    return `You lose, ${computerSelection} beats ${lowPlayerSelection}!`;
  } else {
    return `You win, ${lowPlayerSelection} beats ${computerSelection}!`;
  }
}

const playerSelection = "PapEr";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
