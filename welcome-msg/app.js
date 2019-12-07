const inp = document.querySelector('input');
const msgBtn = document.querySelector('button')


inp.addEventListener('change',(e)=>{
 let msg = document.querySelector('span');
    msg.innerText=e.target.value
})

msgBtn.addEventListener('click',()=>{
    let msg = document.querySelector('.time')


    if(inp.value === ''){
        return msg.innerText='Please add you full name!'
    }else{
        msg.innerText=''
    let date = new Date();
    let curr = date.getHours();
        if(curr<12){
            return msg.innerText='Good Morning! Hope you have a great day!';
        }else if(curr===12){
           return msg.innerText ='It noon, hope you had a great morning !';
        }else if(curr>12 && curr >=6){
            return msg.innerText='Good Afternoon!';
        }else if(curr>6 && curr <0){
            return msg.innerText='Good Night! Almost time to sleep'
        }else{
            return msg.innerText= 'Wow you still up? Go to sleep already!'
        }
    }
    
    })