const message = document.querySelector('.message');
const gameArea = document.querySelector('.gamearea');
const button = document.querySelector('button');

const gameColor = ["red","blue","green","orange"];

button.addEventListener('click', () => {
  console.log('clicked');
});


const checkAnswer=(e)=>{
    let el= e.target;
    console.log(el)
}

const setup= ()=>{
    console.log("Loaded");
    for (let i=0;i<4;i++){
        let div=eleFactory("div");
        div.style.backgroundColor=gameColor[i];
        div.classList.add("box");
        div.style.opacity="0.5";
        div.myColor = gameColor[i];
        div.addEventListener("click",checkAnswer);
        gameArea.appendChild(div);
        
    }
}



window.addEventListener("load",setup);





const eleFactory=(elType)=>{
    let ele = document.createElement(elType);
    return ele;
}

