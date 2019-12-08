const rpcLib = {
  undecided: 'https://jenniferdewalt.com/images/right_fist.png',
  rock: 'https://jenniferdewalt.com/images/right_fist.png',
  scissor:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png',
  paper:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png',
  rock2:
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png'
};

const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');
const bScore = document.querySelector('#bScore');
const bPick = document.querySelector('#bPick');
const pScore = document.querySelector('#pScore');
const pPick = document.querySelector('#pPick');
const pChoice = document.querySelector('.pChoice');
const bChoice = document.querySelector('.bChoice');
const animate = document.querySelector('#animation');
const result = document.querySelector('#result');
bScore.innerText = 0;
pScore.innerText = 0;

const botChoice = () => {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

const playAnimation = (playerChoice, botChoice) => {
  const { undecided, rock, paper, scissor, rock2 } = rpcLib;
  pChoice.src = rock2;
  bChoice.src = rock2;

  setTimeout(() => {
    if (playerChoice === 'rock') {
      pChoice.src = rock2;
      return;
    } else if (playerChoice === 'paper') {
      pChoice.src = paper;
      return;
    } else if (playerChoice === 'scissors') {
      pChoice.src = scissor;
      return;
    }
  }, 3000);

  setTimeout(() => {
    if (botChoice === 'rock') {
      bChoice.src = rock2;
      return;
    } else if (botChoice === 'paper') {
      bChoice.src = paper;
      return;
    } else if (botChoice === 'scissors') {
      bChoice.src = scissor;
      return;
    }
  }, 3000);
};

const reset = () => {
  bScore.innerText = 0;
  pScore.innerText = 0;
  bPick.innerText = '';
  pPick.innerText = '';
  pChoice.src = '';
  bChoice.src = '';
  result.innerText = '';
};

buttons.forEach(button =>
  button.addEventListener('click', () => {
    let bChoice = botChoice();

    let pChoice = button.innerText.toLowerCase();
    if (pChoice === 'reset') {
      return reset();
    }
    playAnimation(pChoice, bChoice);
    animate.classList.toggle('animationRun');

    setTimeout(() => {
      pPick.innerText = pChoice;
      bPick.innerText = bChoice;

      if (
        (pChoice === 'rock' && bChoice === 'rock') ||
        (pChoice === 'paper' && bChoice === 'paper') ||
        (pChoice === 'scissors' && bChoice === 'scissors')
      ) {
        pScore.innerText++;
        bScore.innerText++;
        animate.classList.toggle('animationRun');
        result.innerText = `It's a draw`;
        setTimeout(() => {
          result.innerText = '';
        }, 1000);
        return;
      } else if (
        (pChoice === 'paper' && bChoice === 'rock') ||
        (pChoice === 'scissors' && bChoice === 'paper') ||
        (pChoice === 'rock' && bChoice === 'scissors')
      ) {
        pScore.innerText++;
        animate.classList.toggle('animationRun');
        result.innerText = 'Player wins';
        setTimeout(() => {
          result.innerText = '';
        }, 1000);
        return;
      } else if (
        (pChoice === 'scissors' && bChoice === 'rock') ||
        (pChoice === 'paper' && bChoice === 'scissors') ||
        (pChoice === 'rock' && bChoice === 'paper')
      ) {
        bScore.innerText++;
        animate.classList.toggle('animationRun');
        result.innerText = 'Bot wins';
        setTimeout(() => {
          result.innerText = '';
        }, 1000);
        return;
      } else {
        return (result.innerText = 'Something Went Wrong');
      }
    }, 3000);
  })
);
