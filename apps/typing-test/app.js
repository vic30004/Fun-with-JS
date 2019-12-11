let textLibrary = [
        `To be successful, you have to use each day as an opportunity to improve, to be better, to get a little bit closer to your goals. It might sound like a lot of work—and with a busy schedule, next to impossible. But the best part is, the more you accomplish, the more you’ll want to do, the higher you’ll want to reach. So as long as you have the hunger for success, you will always have the power within you to achieve it.`,
        `If you look closely, you’ll notice the energy of inspiration is all around. From the rising sun to a placid lake on a warm summer night; from our favorite books to our own reflections, the places and things from which we can draw inspiration are infinite. And the best part is that every day is a chance to capture this energy—to seek out all of life’s possibilities.`,
      ];
let copy = [...textLibrary]


const button = document.querySelector('button');
const showText = document.querySelector('#type')
const textArea = document.querySelector('textarea')




const typeText = (arr) =>{
    let text = arr[Math.floor(Math.random()*arr.length)]
    let index = arr.indexOf(text);
    if (index >-1){
        arr.splice(index,1);
    }

    if(arr.length<=0){
        button.innerText="Reset"
       return showText.innerHTML=''
       
    }
    showText.innerText= text
    return text

}
typeText(textLibrary)

const reset=()=>{
    let test = [...copy];
    textLibrary= test
    button.innerText='Submit'
    typeText(textLibrary)
    console.log(textLibrary)
}

const hashTable  = (str) =>{
    if(str === ''){
        return 
    }
    let table = {};
    let clearnStr = str.replace(/[^\w]/g,' ').split(' ');
    for( char of clearnStr){
        table[char] = table[char]+1||1 
        delete table[""]
    }
   return table
}

button.addEventListener('click', ()=>{
    let correctText = hashTable(showText.innerText);
    let userText = hashTable(textArea.value);
    let count =0;
    console.log(correctText);
    console.log(userText)

    if(button.innerText === 'Submit'){
        for (text in correctText){
            if(correctText[text]!= userText[text]){
         
                count++;
                console.log(text)
                console.log(count)
            }
        }
        textArea.value=''
        typeText(textLibrary)
        console.log(textLibrary)
    }else if(button.innerText === 'Reset'){
        reset();
    }
})
