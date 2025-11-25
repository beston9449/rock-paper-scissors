'use strict';

let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randComp = Math.floor(Math.random() * 3);
  console.log(`Computer chose: ${choices[randComp]}`);
  return choices[randComp];
}

let paperBtn = document.createElement('button');
let scissorsBtn = document.createElement('button');
let rockBtn = document.createElement('button');
let body = document.querySelector('body');
let divChoice = document.createElement('div');
let divResult = document.createElement('div');

paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';
rockBtn.textContent = 'Rock';
divChoice.style.border = '1px solid black';
divResult.textContent = 'Results here';

body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(rockBtn);
body.appendChild(divChoice);
body.appendChild(divResult);

paperBtn.addEventListener('click', () => playRound('paper'));

scissorsBtn.addEventListener('click', () => playRound('scissors'));

rockBtn.addEventListener('click', () => playRound('rock'));

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  divChoice.textContent = `You chose ${humanChoice} Computer chose ${computerChoice}`;

  if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    divResult.textContent = `Computer won. Score: You ${humanScore} - ${computerScore} Computer`;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    divResult.textContent = `You won! Score: You ${humanScore} - ${computerScore} Computer`;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    divResult.textContent = `You won! Score: You ${humanScore} - ${computerScore} Computer`;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    divResult.textContent = `Computer won. Score: You ${humanScore} - ${computerScore} Computer`;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    divResult.textContent = `You won! Score: You ${humanScore} - ${computerScore} Computer`;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    divResult.textContent = `Computer won. Score: You ${humanScore} - ${computerScore} Computer`;
  } else {
    divResult.textContent = `It's a tie! Score: You ${humanScore} - ${computerScore} Computer`;
  }
}
