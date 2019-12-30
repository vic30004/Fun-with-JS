let textLibrary = [
  `To be successful, you have to use each day as an opportunity to improve, to be better, to get a little bit closer to your goals. It might sound like a lot of work—and with a busy schedule, next to impossible. But the best part is, the more you accomplish, the more you’ll want to do, the higher you’ll want to reach. So as long as you have the hunger for success, you will always have the power within you to achieve it.`,
  `If you look closely, you’ll notice the energy of inspiration is all around. From the rising sun to a placid lake on a warm summer night; from our favorite books to our own reflections, the places and things from which we can draw inspiration are infinite. And the best part is that every day is a chance to capture this energy—to seek out all of life’s possibilities.`,
`I love javascript!`
];
let copy = [...textLibrary];

const button = document.querySelector('button');
const showText = document.querySelector('#type');
const textArea = document.querySelector('textarea');
const message = document.querySelector('.text');
const wrong = document.querySelector('.wrong');
const time = document.querySelector('.time')
let startTime=0
let endTime=0
let count = 0;
textArea.disabled = true;

const typeText = arr => {
  let text = arr[Math.floor(Math.random() * arr.length)];
  let index = arr.indexOf(text);
  if (index > -1) {
    arr.splice(index, 1);
  }

  if (arr.length <= 0) {
    button.innerText = 'Reset';
    return (showText.innerHTML = '');
  }
  showText.innerText = text;
  return text;
};
typeText(textLibrary);

const reset = () => {
  let test = [...copy];
  textLibrary = test;
  textArea.value=''
  button.innerText = 'Start';
  typeText(textLibrary);
  count=0;
  wrong.innerHTML='';
  time.innerText='';

};

const hashTable = str => {
  if (str === '') {
    return;
  }
  let table = {};
  let clearnStr = str.replace(/[^\w]/g, ' ').split(' ');
  for (char of clearnStr) {
    table[char] = table[char] + 1 || 1;
    delete table[''];
  }
  return table;
};

const playGame = () => {
  let date = new Date();
  startTime = date.getTime();
  button.innerText = 'Done';
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime)/1000)
  let str = textArea.value.split(' ').length;
  let speed = Math.round((str / totalTime)*60)  
  time.innerText = `You typed at ${speed} words per minute.\n`;
};

button.addEventListener('click', () => {
  let correctText = hashTable(showText.innerText);
  let userText = hashTable(textArea.value);
 
  if (button.innerText === 'Start') {
    textArea.disabled = false;
    playGame();
  } else if (button.innerText === 'Done') {
    textArea.disabled = true;
    button.innerText = 'Reset';
    
    typeText(textLibrary);
    
    endGame();
    for (text in correctText) {
      if (userText[text] != correctText[text]) {
        count++;
        message.innerText = `You got ${count} wrong answers. Here is what you misspelled`;
        let wrongWords = `<li>${text}</li> `;
        wrong.innerHTML += wrongWords;
      }
    }
  } else if (button.innerText === 'Reset') {
    reset();
  }
});
