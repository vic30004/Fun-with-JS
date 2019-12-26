const codeArea = document.querySelector(".code");
const startBtn = document.querySelector("#start");


startBtn.addEventListener("click", () => {
  addNumInput(5);
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
