const wordList = ["Hello", "World", "Apple", "Zelous"];
let copy = [...wordList];

const randomWord = () => {
  if (wordList) {
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let indexWord = wordList.indexOf(word);
    if (indexWord >-1){
    wordList.splice(indexWord, 1); 
      
    }
    return word;
  } else {
    return;
  }
};

const shuffleWord = text =>{
    console.log(text)
    let textSplit=text.split('');
    var currentIndex = textSplit.length;
	var temporaryValue, randomIndex;

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
    return console.log(textSplit)
}


