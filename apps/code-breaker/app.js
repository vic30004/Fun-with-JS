const codeArea = document.querySelector(".code");
const startBtn = document.querySelector("#start");
const inputs = document.querySelectorAll("input")


startBtn.addEventListener("click", () => {
    if (startBtn.innerText==="Start"){
        addNumInput(6);
  startBtn.innerText="Guess"
    }
  

 else if(startBtn.innerText==="Guess"){
      let correctAnswer = numToList(randomNumber())
      playGame()
      console.log(inputs)
  }
});

const addNumInput = num => {
  for (let i = 0; i < num; i++) {
    let numbers = document.createElement("input");
    numbers.value=0;
    numbers.setAttribute("type", "number");
    numbers.max=9;
    numbers.min=0;
    codeArea.appendChild(numbers);
  }
};


const randomNumber= ()=>{
    return Math.floor(Math.random()*1000000)
}


const numToList = (num)=>{
    let list= num.toString().split('')
    
    return list
}

const playGame = ()=>{
    if(inputs){
       inputs.forEach(data=>console.log(data.value))
 
    }

}
