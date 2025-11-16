'use strict';

////    1. Make a function called getComputerChoice that randonmly returns one of the following strings: rock, paper, or scissors

let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randComp = Math.floor(Math.random() * 3);
  console.log(`Computer chose: ${choices[randComp]}`);
  return choices[randComp];
}

////    2. Make a function called getHumanChoice which returns one of the valid choices depending on user input(hint: Use prompt)

function getHumanChoice() {
  let randHuman = prompt('Choose from rock, paper, scissors!').toLowerCase();
  console.log(`You chose: ${randHuman}`);
  return randHuman;
}

////    3. Create two variables called humanScore and comptuterScore in the global scope.
////       Initialize those variables with the value of 0.

////    4. Write the logic to play a single round. Create function called playRound.
////       The two parameters in the function will be humanChoice and computerChoice

////       The humanChoice must be case-insensitive so rock, Rock, RoCk (hint: Maybe use the toLowerCase function thingy majingy?)

////        Write the code to the functiion to console log a string value representing a winner, maybe use the `${}`??? You lose! Paper beats rock?#

////        Lastly increment humanScore or computerScore

////     5. Create a function called playGame. Must move playRound into that function and make it fun 5 times

function playGame() {
  for (let i = 1; i <= 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lost this round! ${computerChoice} covers ${humanChoice}.`);
        computerScore++;
      } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`Nice win! ${humanChoice} wraps ${computerChoice}.`);
        humanScore++;
      } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You sliced your way to victory! ${humanChoice} cuts ${computerChoice}.`);
        humanScore++;
      } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`Ouch! ${computerChoice} cuts through ${humanChoice}. You lose.`);
        computerScore++;
      } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`Crushed it! ${humanChoice} smashes ${computerChoice}.`);
        humanScore++;
      } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`Defeat! ${computerChoice} crushes ${humanChoice}.`);
        computerScore++;
      } else {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
      }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}
playGame();

if (humanScore > computerScore) {
  console.log(`You won: ${humanScore} VS ${computerScore}`);
} else if (computerScore > humanScore) {
  console.log(`You lost: ${humanScore} VS ${computerScore}`);
} else {
  console.log(`You've tied...${humanScore} VS ${computerScore}`);
}
