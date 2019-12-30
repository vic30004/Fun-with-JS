const wordList = ["Hello", "World", "Apple", "Zelous"];
let copy = [...wordList];

let button = document.querySelector('button')
const input = document.querySelector('input')
let guessWord = document.querySelector('#word')
let currentWord

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

if (button.innerText.toLowerCase()==="guess"){
  if(wordList.length>=0){
    let text = randomWord();

    let shuffledWord= shuffleWord(text);
    
    let textToGuess = document.createElement('h4')
    textToGuess.innerText=shuffledWord
    guessWord.append(textToGuess)
    checkIfSame(currentWord,input.value)

    }
    else{
        button.innerText="Reset"
    }
    }
  
 if(button.innerText.toLowerCase()==="rest"){
    wordList=copy
 }  
  


})


const checkIfSame=(text1,text2)=>{
    if(text1 === text2){
        return console.log("Yup same")
    }else{
        return console.log("Nope try again")
    }
}