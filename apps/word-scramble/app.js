let wordList = ["Hello", "World", "Apple", "Zelous"];
let copy = [...wordList];

let button = document.querySelector('button')
const input = document.querySelector('input')
let guessWord = document.querySelector('#word')
let currentWord;
let text;
let shuffled;

const randomWord = () => {
  if (wordList.length>=0) {
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let indexWord = wordList.indexOf(word);
    if (indexWord >-1){
    wordList.splice(indexWord, 1); 
      
    }
    currentWord=word
    return word;
  } else {
    return;
  }
};

const shuffleWord = text =>{
    if (wordList){
    let textSplit=text.split('');
    let currentIndex = textSplit.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = textSplit[currentIndex];
		textSplit[currentIndex] = textSplit[randomIndex];
		textSplit[randomIndex] = temporaryValue;
    }
    return textSplit.join('')
    }else if(wordList.length==false){
        return
    }
    
}



button.addEventListener('click', ()=>{

  
  if (wordList.length===0){
    button.innerText='Reset'
    console.log("We ran out of words. You can always play again");
    input.value=''
    return
  }


  if (button.innerText.toLowerCase()==='start'){
    button.innerText='Guess'
    text=randomWord()
    shuffled =shuffleWord(text)
    console.log(shuffled)
    return
  }

  else if(button.innerText.toLowerCase()=== 'guess'){
   let check= checkIfSame(text,input.value)
   if (check){
     console.log("It's the same")
     button.innerText="Play Again"
     input.value=''
   }
   else{
     console.log("Nope, try again!")
   }

 
  }  else if(button.innerText.toLowerCase()==="play again"){
    text = randomWord()
    shuffled =shuffleWord(text)
    button.innerText="Guess"
    console.log(shuffled)
  }

  else if(button.innerText.toLowerCase()==='reset'){
    wordList=copy
    button.innerText="Start"
    input.value=''
    return
  }




})


const checkIfSame=(text1,text2)=>{
    if(text1.toLowerCase() === text2.toLowerCase()){
        return true
    }else{
        return false
    }
}

