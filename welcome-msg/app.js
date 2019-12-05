const inp = document.querySelector('input');
const msgBtn = document.querySelector('button')


inp.addEventListener('change',(e)=>{
 let msg = document.querySelector('span');
    msg.innerText=e.target.value
})