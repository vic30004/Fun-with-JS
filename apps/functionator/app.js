let myBlock;
let myFunctionList;
let funList = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');

  myBlock = document.createElement('div');
  myBlock.textContent = 'hello world';
  myBlock.style.width = '100px';
  myBlock.style.height = '100px';
  myBlock.style.backgroundColor = 'red';

  myBlock.style.lineHeight = '100px';
  myBlock.style.textAlign = 'center';
  myBlock.style.position = 'absolute';
  myBlock.style.top = '100px';
  myBlock.style.left = '150px';

  document.body.appendChild(myBlock);

  myFunctionList = document.createElement('div');
  document.body.appendChild(myFunctionList)
 
});





document.addEventListener("keydown", (e)=>{
    console.log(e.key)

    if(e.key === "ArrowUp"){
        addFun("Up")
    } else if(e.key==="ArrowDown"){
        addFun("Down")
    } else if(e.key === "ArrowRight"){
        addFun("Right")
    } else if (e.key === "ArrowLeft"){
        addFun("Left")
    }else if (e.key === "c" || e.key === "C"){
        myBlock.style.backgroundColor = randomColor()
        
    }else if(e.key==="Enter"){
        mover()
    }
    else {
        return
    }

})


const randomColor = ()=>{
    return "#"+Math.random().toString(16).substr(-6)
}

function mover(){
    if(funList.length>0){
        let curr = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+","").toLowerCase();
        myFunctionList.removeChild(el)
        if(item === "left"){
            myBlock.style.left = curr.left - curr.width +"px"
        }else if(item === "right"){
            myBlock.style.left = curr.left + curr.width +"px"
        }
        else if(item === "up"){
            myBlock.style.top= curr.top - curr.height +"px"
        }
        else if(item === "down"){
            myBlock.style.top = curr.top + curr.height +"px"
        }
        setTimeout(mover,300)
    }
}

const addFun=val=>{
    let span = document.createElement("span");
    span.textContent = "+"+val;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd"
    
    span.addEventListener("mouseover",()=>{
        span.style.backgroundColor="red";
       span.style.color="white"
    })

myFunctionList.appendChild(span)
funList.push(span);

}

const goLeft = () =>{
    let temp = myBlock.offsetLeft;
    temp = temp-50;
    myBlock.style.left=`${temp}px`
}
const goRight = () =>{
    let temp = myBlock.offsetLeft;
    temp = temp+50;
    myBlock.style.left=`${temp}px`
}
const goTop = () =>{
    let temp = myBlock.offsetTop;
    temp = temp-50;
    myBlock.style.top=`${temp}px`
}
const goDown= () =>{
    let temp = myBlock.offsetTop;
    temp = temp+50;
    myBlock.style.top=`${temp}px`
}