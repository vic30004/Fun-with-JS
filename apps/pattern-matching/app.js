const message = document.querySelector('.message');
const gameArea = document.querySelector('.gamearea');
const button = document.querySelector('button');

const gameColor = ['red', 'blue', 'green', 'orange'];
let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

button.addEventListener('click', () => {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.disabled = true;
  gameClicks = [];
  userClicks = [];
  runSequence();
}

function runSequence() {
    inPlay=true;
}

const checkAnswer = e => {
  if (inPlay) {
    let el = e.target;
    console.log(el);
    userClicks.push(el.myColor);
    el.style.opacity="1";
    setTimeout(()=>{
        el.style.opacity="0.5"
    },500);
  }
  console.log(userClicks);
};

const setup = () => {
  console.log('Loaded');
  for (let i = 0; i < 4; i++) {
    let div = eleFactory('div');
    div.style.backgroundColor = gameColor[i];
    div.classList.add('box');
    div.style.opacity = '0.5';
    div.myColor = gameColor[i];
    div.addEventListener('click', checkAnswer);
    gameArea.appendChild(div);
  }
};

window.addEventListener('load', setup);

const eleFactory = elType => {
  let ele = document.createElement(elType);
  return ele;
};
