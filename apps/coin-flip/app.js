flipDictionary = {
  flip:
    'https://66.media.tumblr.com/cf0b431f9472e7ae28034fc840263625/tumblr_o0n2lhOtzH1t0qqjbo1_400.gifv',
  heads:
    'https://upload.wikimedia.org/wikipedia/commons/2/28/98_quarter_obverse.png',
  tails: 'http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails.png'
};

const botChoice = ['Heads', 'Tails'];

const headsBtn = document.querySelector('#heads');
const tailsBtn = document.querySelector('#tails');
const resetBtn = document.querySelector('#reset');
const gif = document.querySelector('.gif');
let botScore = document.querySelector('#botScore');
let playerScore = document.querySelector('#playerScore');
let botOption = document.querySelector('#bChoice');
let playerChoice = document.querySelector('#pChoice');

botScore.innerText = 0;
playerScore.innerText = 0;

const randomBotChoice = () => {
  let choice = botChoice[Math.floor(Math.random() * botChoice.length)];
  return choice;
};

const flipCoin = () => {
  const { flip, heads, tails } = flipDictionary;

  let flipGif = `<img src='${flip}'>`;
  gif.innerHTML = flipGif;
  setTimeout(() => {
    if (randomBotChoice() === 'Heads') {
      let img = `<img src='${heads}'>`;
      return (gif.innerHTML = img);
    } else {
      let img = `<img src='${tails}'>`;
      return (gif.innerHTML = img);
    }
  }, 3000);
};

const reset = () => {
  botOption.innerText = '';
  playerChoice.innerText = '';
  playerScore.innerText = 0;
  botScore.innerText = 0;
  gif.innerText = '';
};

headsBtn.addEventListener('click', () => {
  flipCoin();
  let botFlip = randomBotChoice();
  botOption.innerText = botFlip;
  playerChoice.innerText = headsBtn.innerText;
  setTimeout(() => {
    if (botFlip === 'Heads') {
      botScore.innerText++;
      playerScore.innerText++;
      return console.log('Bot picked Heads');
    } else if (botFlip === 'Tails' && headsBtn.innerText === 'Heads') {
      playerScore.innerText++;
      return console.log('bot picked Tails');
    }
  }, 3000);
});

tailsBtn.addEventListener('click', () => {
  flipCoin();
  let botFlip = randomBotChoice();
  botOption.innerText = botFlip;
  playerChoice.innerText = tailsBtn.innerText;
  setTimeout(() => {
    if (botFlip === 'Heads' && tailsBtn.innerText === 'Tails') {
      playerScore.innerText++;
      return console.log('Bot picked Heads');
    } else if (botFlip === 'Tails') {
      botScore.innerText++;

      playerScore.innerText++;
      return console.log('bot picked Tails');
    }
  }, 3000);
});

resetBtn.addEventListener('click', () => {
  reset();
});
