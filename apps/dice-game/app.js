const diceLibrary = {
  one: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png',
  two: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png',
  three: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png',
  four: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png',
  five: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png',
  six: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png'
};

const dice = [1, 2, 3, 4, 5, 6];

const buttons = document.querySelectorAll('#buttons');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const message =document.querySelector('.message')

score1.innerText=0;
score2.innerText=0


const randomRoll = () => {
  let result = dice[Math.floor(Math.random() * dice.length)];

  return result;
};

const loadDicePic = (player1,player2)=>{
    const { one, two, three, four, five, six } = diceLibrary;
  if (player1 === 1) {
    p1.src = one;
  } else if (player1 === 2) {
    p1.src = two;
  } else if (player1 === 3) {
    p1.src = three;
  } else if (player1 === 4) {
    p1.src = four;
  } else if (player1 === 5) {
    p1.src = five;
  } else if (player1 === 6) {
    p1.src = six;
  }

  if (player2 === 1) {
    p2.src = one;
  } else if (player2 === 2) {
    p2.src = two;
  } else if (player2 === 3) {
    p2.src = three;
  } else if (player2 === 4) {
    p2.src = four;
  } else if (player2 === 5) {
    p2.src = five;
  } else if (player2 === 6) {
    p2.src = six;
  }
}

const roll = () => {
  let player1 = randomRoll();
  let player2 = randomRoll();
  
  loadDicePic(player1,player2)

  if (player1 > player2) {
      score1.innerText++
    return message.innerText=
      `Player one rolled ${player1} and player two rolled ${player2}. Player 1 wins!`
    ;
  } else if (player1 < player2) {
      score2.innerText++
    return message.innerText=
      `Player two rolled ${player2} and player one rolled ${player1}. Player 2 wins!`
    ;
  } else if (player1 === player2) {
      score1.innerText++
      score2.innerText++
    return message.innerText=`It's a tie! Both players rolled ${player1}!`;
  } else {
      return message.innerText='Something went horibly wrong!'
  }
};

const reset = ()=>{
    score1.innerText=0;
    score2.innerText=0;
    p1.src ='https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png';
    p2.src='https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png';
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let clickedBtn = e.target.innerText.toLowerCase();

    if (clickedBtn === 'roll') {
      roll();
      return
    }else if (clickedBtn === 'reset'){
        reset()
        return
    }
  });
});
