const rpcLib = {
    undecided: "https://jenniferdewalt.com/images/right_fist.png",
    rock:'https://jenniferdewalt.com/images/right_fist.png',
    scissor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png',
    paper: 'https://toppng.com/public/uploads/preview/free-icons-slap-hand-115535377815nn6xph569.png'
}

const choices =['rock','paper','scissors'];

const botChoice = ()=>{
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}
const buttons = document.querySelectorAll('button')
botChoice()
buttons.forEach(button=>button.addEventListener('click',()=>{
    let bChoice = botChoice()
    console.log(bChoice)
    let pChoice=button.innerText.toLowerCase()
    console.log(pChoice)
    if(pChoice === 'rock' && bChoice === 'rock' || pChoice==='paper' && bChoice === 'paper' ||pChoice==='paper' && bChoice === 'paper'  ){
        return console.log(`It's a draw`)
    } else if(pChoice === 'paper' && bChoice === 'rock' ||pChoice==='scissors' && bChoice === 'paper'||pChoice === 'rock' && bChoice === 'scissors' ){
        return console.log('Player wins')
    } else if(pChoice==='scissors' && bChoice === 'rock' ||pChoice === 'paper' && bChoice === 'scissors' || pChoice === 'rock' && bChoice==='paper'){
        return console.log('Bot wins')
    }else{
        return console.log('Something Went Wrong')
    }
}))