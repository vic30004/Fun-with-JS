const codeArea = document.querySelector(".code");
const startBtn = document.querySelector("#start");
const inputs = document.querySelectorAll("input")

startBtn.addEventListener("click", () => {
  if(startBtn.innerText==='Start'){
    startBtn.innerText="Guess"
    addNumInput(6)
  
    
  }else if(startBtn.innerText==="Guess"){
    const numbers = document.querySelectorAll(".numb")
    console.log(numbers)
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



