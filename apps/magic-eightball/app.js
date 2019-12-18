const answerList =["That's highly likely", "That's not likely"]

const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('.result')


button.addEventListener('click',()=>{
    if (input.value!== ''){
    
    let question;
    let answer= answerList[Math.floor(Math.random()*answerList.length)]
    question = input.value;
    let res = document.createElement('h3');
    res.innerText = `${question}: ${answer}`;
    
    result.appendChild(res)
    
    input.value = ""
    
    }
    return 
})
