function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  const lowPlayerSelection = playerSelection.toLowerCase();

  if (
    (lowPlayerSelection === "rock" && computerSelection === "rock") ||
    (lowPlayerSelection === "paper" && computerSelection === "paper") ||
    (lowPlayerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return 1;
  } else if (
    (lowPlayerSelection === "rock" && computerSelection == "paper") ||
    (lowPlayerSelection === "paper" && computerSelection == "scissors") ||
    (lowPlayerSelection === "scissors" && computerSelection == "rock")
  ) {
    return 2;
  } else {
    return 3;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  let playerBet;
  let computerBet;

  const options = ["rock", "paper", "scissors"];

  for (let round = 0; round < 5; round++) {
    playerBet = window.prompt("Choose one: ROCK, PAPER, or SCISSORS");
    if (!options.includes(playerBet.toLowerCase())) {
      playerBet = window.prompt(
        `${playerBet} is not valid. Try again. ROCK, PAPER or SCISSORS?`,
      );
    }

    computerBet = computerPlay();
    const result = playRound(playerBet, computerBet);

    switch (result) {
      case 1:
        console.log("This round ended in a draw :|");
        console.log(
          `Your score: ${playerScore} - Computer score: ${computerScore}`,
        );
        break;

      case 2:
        computerScore++;
        console.log(`You lose this round, ${computerBet} beats ${playerBet}!`);
        console.log(
          `Your score: ${playerScore} - Computer score: ${computerScore}`,
        );
        break;

      case 3:
        playerScore++;
        console.log(`You win this round, ${playerBet} beats ${computerBet}!`);
        console.log(
          `Your score: ${playerScore} - Computer score: ${computerScore}`,
        );
        break;
    }
  }

  if (playerScore < computerScore) {
    console.log("Oh, no. You lost to a machine! Well, maybe next time...");
  } else if (playerScore > computerScore) {
    console.log("Congratulations! You are the WINNER!!");
  } else {
    console.log("It ended in a draw. It was unlikely, but not impossible.");
  }
}

game();
