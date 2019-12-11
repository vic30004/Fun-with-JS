let textLibrary = [
        'Beethoven was born in Bonn, the capital of the Electorate of Cologne, and part of the Holy Roman Empire. He displayed his musical talents at an early age and was vigorously taught by his father Johann van Beethoven, and was later taught by composer and conductor Christian Gottlob Neefe. At age 21, he moved to Vienna and studied composition with Joseph Haydn. Beethoven then gained a reputation as a virtuoso pianist, and was soon courted by Karl Alois, Prince Lichnowsky for compositions, which resulted in Opus 1 in 1795.',
        `Weezer is an American rock band formed in Los Angeles, California in 1992. Since 2001, the band has consisted of Rivers Cuomo (lead vocals, lead guitar, keyboards), Patrick Wilson (drums), Brian Bell (guitar, backing vocals, keyboards), and Scott Shriner (bass, backing vocals).
      
        After signing to Geffen Records in 1993, Weezer released its debut self-titled album, also known as the "Blue Album", in 1994. Backed by music videos for the singles "Buddy Holly", "Undone – The Sweater Song", and "Say It Ain't So", the Blue Album became a multiplatinum success. Weezer's second album, Pinkerton (1996), featuring a darker, more abrasive sound, was a commercial failure and initially received mixed reviews, but went on to achieve cult status and critical acclaim years later. Both the Blue Album and Pinkerton are now frequently cited among the best albums of the 1990s. Following the tour for Pinkerton, bassist Matt Sharp left the band and Weezer went on hiatus.`,
        `Weezer is an American rock band formed in Los Angeles, California in 1992. Since 2001, the band has consisted of Rivers Cuomo (lead vocals, lead guitar, keyboards), Patrick Wilson (drums), Brian Bell (guitar, backing vocals, keyboards), and Scott Shriner (bass, backing vocals).
      
        After signing to Geffen Records in 1993, Weezer released its debut self-titled album, also known as the "Blue Album", in 1994. Backed by music videos for the singles "Buddy Holly", "Undone – The Sweater Song", and "Say It Ain't So", the Blue Album became a multiplatinum success. Weezer's second album, Pinkerton (1996), featuring a darker, more abrasive sound, was a commercial failure and initially received mixed reviews, but went on to achieve cult status and critical acclaim years later. Both the Blue Album and Pinkerton are now frequently cited among the best albums of the 1990s. Following the tour for Pinkerton, bassist Matt Sharp left the band and Weezer went on hiatus.`,
      ];
let copy = [...textLibrary]


const button = document.querySelector('button');
const showText = document.querySelector('#type')




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

button.addEventListener('click', ()=>{
    
    if(button.innerText === 'Submit'){
        typeText(textLibrary)
        console.log(textLibrary)
    }else if(button.innerText === 'Reset'){
        reset();
    }
})
