const wordList = ["Hello", "World", "Apple", "Zelous"];
let copy = [...wordList];

const randomWord = () => {
  if (wordList.length > 0) {
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let indexWord = wordList.indexOf(word);
    if (indexWord >-1){
    wordList.splice(indexWord, 1); 
      
    }
    
    console.log(indexWord)
    return console.log(word);
  } else {
    return;
  }
};

console.log(wordList)
randomWord()
console.log(wordList)