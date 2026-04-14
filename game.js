function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  console.log(random, options[random]);
}

computerPlay();
