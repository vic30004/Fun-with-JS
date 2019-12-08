const rpcLib = {
  undecided: 'https://jenniferdewalt.com/images/right_fist.png',
  rock: 'https://jenniferdewalt.com/images/right_fist.png',
  scissor:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png',
  paper:
    'https://toppng.com/public/uploads/preview/free-icons-slap-hand-115535377815nn6xph569.png'
};

const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');
const bScore = document.querySelector('#bScore');
const bPick = document.querySelector('#bPick');
const pScore = document.querySelector('#pScore');
const pPick = document.querySelector('#pPick');

bScore.innerText = 0;
pScore.innerText = 0;

const botChoice = () => {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

const playAnimation = () => {
  let choice = botChoice();
  
};

const reset = () => {
  bScore.innerText = 0;
  pScore.innerText = 0;
  bPick.innerText = '';
  pPick.innerText = '';
};

buttons.forEach(button =>
  button.addEventListener('click', () => {
    let bChoice = botChoice();
    console.log(bChoice);
    let pChoice = button.innerText.toLowerCase();
    console.log(pChoice);
    if (
      (pChoice === 'rock' && bChoice === 'rock') ||
      (pChoice === 'paper' && bChoice === 'paper') ||
      (pChoice === 'scissors' && bChoice === 'scissors')
    ) {
      pScore.innerText++;
      bScore.innerText++;
      return console.log(`It's a draw`);
    } else if (
      (pChoice === 'paper' && bChoice === 'rock') ||
      (pChoice === 'scissors' && bChoice === 'paper') ||
      (pChoice === 'rock' && bChoice === 'scissors')
    ) {
      pScore.innerText++;
      return console.log('Player wins');
    } else if (
      (pChoice === 'scissors' && bChoice === 'rock') ||
      (pChoice === 'paper' && bChoice === 'scissors') ||
      (pChoice === 'rock' && bChoice === 'paper')
    ) {
      bScore.innerText++;
      return console.log('Bot wins');
    }else if(pChoice==='reset'){
       return reset()
    } else {
      return console.log('Something Went Wrong');
    }
  })
);
