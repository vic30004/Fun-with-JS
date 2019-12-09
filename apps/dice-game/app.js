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