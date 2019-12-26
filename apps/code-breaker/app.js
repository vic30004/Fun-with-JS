const codeArea = document.querySelector(".code");
const startBtn = document.querySelector("#start");


startBtn.addEventListener("click", () => {
  addNumInput(6);
  startBtn.innerText="Guess"
});

const addNumInput = num => {
  for (let i = 0; i < num; i++) {
    let numbers = document.createElement("input");
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
    
    console.log(list)
}
numToList(randomNumber())