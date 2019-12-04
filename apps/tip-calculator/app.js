const tipBtn = document.querySelector('button');
const tipAmtDisplay = document.querySelector('#tipAmount')
const tipVal = document.querySelector('select')
let otherIn= document.querySelector('.other')

tipVal.addEventListener('change',()=>{
    if(tipVal.value==='other'){
        
        let newInput = `<input type='number' class="otherVal" value=0>`
        otherIn.innerHTML=newInput
      
    }else{
        return
    }
})



tipBtn.addEventListener('click',(e)=>{
    let tipValue=document.querySelector('input').value;
    console.log(tipVal.value)
    let totalTip=0;
    tipMsg=''
    switch (tipVal.value){
        case "10":
            totalTip = (tipValue*.10).toFixed(2);
            tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
            tipAmtDisplay.innerHTML=tipMsg
            return 
        case "15":
                totalTip = (tipValue*.15).toFixed(2);
               tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
            tipAmtDisplay.innerHTML=tipMsg
            return 
        case "20":
                totalTip = (tipValue*.20).toFixed(2);
                tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
                tipAmtDisplay.innerHTML=tipMsg
                return 
        case "25":
                totalTip = (tipValue*.25).toFixed(2);
                tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
                tipAmtDisplay.innerHTML=tipMsg
                return
        case "other":
                let otherDis = document.querySelector('.otherVal').value
                if(Math.sign(otherDis)===-1){
                    let errMsg= `<h1>Please make sure you add a valid number</h1>`
                    tipAmtDisplay.innerHTML=errMsg;
                    return
                }
                let discountAmount= otherDis/100;
                totalTip = (tipValue*discountAmount).toFixed(2);
                tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
                tipAmtDisplay.innerHTML=tipMsg

                return
                
        default:
            totalTip=(tipValue*.10).toFixed(2);
            tipMsg = `<h1>You should tip $${totalTip} on a $${tipValue} order!</h1>`
            tipAmtDisplay.innerHTML=tipMsg
            return 
    }

})