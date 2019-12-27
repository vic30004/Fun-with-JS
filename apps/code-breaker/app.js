const codeArea = document.querySelector(".code");
const startBtn = document.querySelector("#start");
const inputs = document.querySelectorAll("input")
let score = 0;


startBtn.addEventListener("click", () => {
  if(startBtn.innerText==='Start'|| startBtn.innerText==='Reset'){
    codeArea.innerHTML=""
    startBtn.innerText="Guess"
    addNumInput(6)
  
    
  }else if(startBtn.innerText==="Guess"){
    const numbers = document.querySelectorAll(".numb")
    let winCondition = 0;
    for (let i=0; i<numbers.length; i++){
      if(numbers[i].value<numbers[i].correct){
        numbers[i].style.background="blue";
        numbers[i].style.color="white";
      }else if(numbers[i].value>numbers[i].correct){
        numbers[i].style.background="red"
        numbers[i].style.color="white"
      }else if (numbers[i].value==numbers[i].correct){
        numbers[i].style.background="green"
        numbers[i].style.color="white"
        score++
        winCondition++;
        console.log(score)
      }
      if(winCondition === numbers.length){
        console.log("game over")
        startBtn.innerText='Reset'
        score=0
        
      }
    }
  }
  
});

const addNumInput = num => {
  for (let i = 0; i < num; i++) {
    let numbers = document.createElement("input");
    numbers.setAttribute("type", "number");
    numbers.max=9;
    numbers.min=0;
    numbers.correct= Math.floor(Math.random()*10)
    numbers.classList.add("numb")
    numbers.order=i
    numbers.value=0
    codeArea.appendChild(numbers);
  }
};



