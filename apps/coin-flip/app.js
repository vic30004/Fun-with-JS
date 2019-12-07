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
let flipped = ''
botScore.innerText = 0;
playerScore.innerText = 0;

const randomBotChoice = () => {
  let choice = botChoice[Math.floor(Math.random() * botChoice.length)];
  return choice;
};

const flipCoin = () => {
  const { flip, heads, tails } = flipDictionary;
    flipped = randomBotChoice()
  let flipGif = `<img src='${flip}'>`;
  gif.innerHTML = flipGif;
  setTimeout(() => {
    if (flipped === 'Heads') {
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
    if (flipped === 'Heads' && botFlip==='Heads' && headsBtn.innerText === 'Heads') {
      botScore.innerText++;
      playerScore.innerText++;
      return console.log('Bot picked Heads');
    }else if(flipped === 'Heads' && botFlip==='Tails' && headsBtn.innerText === 'Heads'){
        playerScore.innerText++;
      return console.log('bot picked Tails');
    }
    
    
    else if (flipped === 'Tails' && botFlip==='Heads' && headsBtn.innerText === 'Heads') {
      return 
    }

    else if (flipped === 'Tails' && botFlip==='Tails' && headsBtn.innerText === 'Heads'){
        botScore.innerText++;
        return
    }
  }, 3000);
});

tailsBtn.addEventListener('click', () => {
  flipCoin();
  let botFlip = randomBotChoice();
  botOption.innerText = botFlip;
  playerChoice.innerText = tailsBtn.innerText;
  setTimeout(() => {
    if (flipped === 'Tails' && botFlip==='Tails' && tailsBtn.innerText === 'Tails') {
        botScore.innerText++;
        playerScore.innerText++;
        return console.log('Bot picked Heads');
      }else if(flipped === 'Tails' && botFlip==='Heads' && tailsBtn.innerText === 'Tails'){
          playerScore.innerText++;
        return console.log('bot picked Tails');
      }
      
      
      else if (flipped === 'Heads' && botFlip==='Heads' && tailsBtn.innerText === 'Tails') {
        botScore.innerText++;
          return 
      }
      else if (flipped === 'Heads' && botFlip==='Tails' && tailsBtn.innerText === 'Tails') {
          return 
      }
  
  }, 3000);
});

resetBtn.addEventListener('click', () => {
  reset();
});
