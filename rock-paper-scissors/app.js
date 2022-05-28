const computerPlay = () => {
  let randomNumber = Math.floor((Math.random()*3) + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore;
let computerScore;

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else {
    return "Incorrect selection! Please correctly type in rock, paper, or scissors.";
  }
}

const game = () => {
  playerScore = 0;
  computerScore = 0;
  for (i = 0; i < 5; i++) {
    console.log(playRound(prompt("Please type Rock, Paper, or Scissors"), computerPlay()));
  }
  gameResult(playerScore, computerScore);
}

const gameResult = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("You lose the game!");
  } else {
    console.log("You tied the game!");
  }
}

game();