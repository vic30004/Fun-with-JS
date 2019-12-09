const diceLibrary = {
    one: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png',
    two:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png',
    three:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png',
    four:'https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png',
    five:'https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png',
    six:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png'
}

const dice = ['one','two','three', 'four', 'five', 'six']

const buttons = document.querySelectorAll('#buttons')



const randomRoll = () =>{
    let result = dice[Math.floor(Math.random()* dice.length)];

    return result
}

const roll = ()=> {
    let player1 = randomRoll();
    let player2 = randomRoll();

    if (player1>player2){
        return console.log(`Player one rolled ${player1} and player 2 rolled ${player2}. Player 1 wins`)
    }else if(player1<player2){
        return console.log(`Player two rolled ${player2} and player 1 rolled ${player1}. Player 2 wins`)
    }else if (player1 === player2){
        return console.log(`It's a tie! Both players rolled ${player1}`)
    }else{
        return console.log('Something Went Wrong')
    }
}

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let clickedBtn = e.target.innerText.toLowerCase()
        
        if (clickedBtn === 'roll'){
            roll()
        }
    })
})

