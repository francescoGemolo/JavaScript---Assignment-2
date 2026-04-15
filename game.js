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

  const quitMessage =
    "Are you giving up? I thought you’d be a worthy opponent...";
  const looseMessage =
    "Oh, no. You lost to a machine! Well, maybe next time...";
  const winMessage = "Congratulations! You are the WINNER!!";
  const drawMessage =
    "It ended in a draw. It was unlikely, but not impossible.";

  for (let round = 0; round < 5; round++) {
    if (round === 0) {
      message = window.alert(
        "I am the Evil AI, and I challenge you to Rock, Paper, Scissors! Can you beat me in 5 rounds? Remember: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Type your choice and let's see what you've got... if you dare.",
      );
    }
    playerBet = window.prompt("Choose one: ROCK, PAPER, or SCISSORS");

    if (playerBet === null) {
      console.log(quitMessage);
      return;
    }

    while (!options.includes(playerBet.toLowerCase())) {
      playerBet = window.prompt(
        `${playerBet} is not valid. Try again. ROCK, PAPER or SCISSORS?`,
      );
      if (playerBet === null) {
        console.log(quitMessage);
        return;
      }
    }

    computerBet = computerPlay();
    const result = playRound(playerBet, computerBet);

    console.log(`------ROUND ${round + 1}------`);
    console.log(`You chose: ${playerBet}. Evil AI chose: ${computerBet}`);

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
    console.log(looseMessage);
    alert(looseMessage);
  } else if (playerScore > computerScore) {
    console.log(winMessage);
    alert(winMessage);
  } else {
    console.log(drawMessage);
    alert(drawMessage);
  }
}

// Prompt
console.log(
  "No long no see, human. Type %cgame()%c and press Enter to start...",
  "color: green;",
  "color: inherit;",
);
