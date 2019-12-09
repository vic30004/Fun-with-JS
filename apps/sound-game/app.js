class animals{
    constructor(name=''){
        this.name= name;
        
    }
    playSound = ()=>{
        let sound;

        if(this.name){
            sound = new Audio(`${this.name}.mp3`)
            sound.play();
            return
        }else{
            alert(`We don't have this sound yet.`)
        }
        
    }
}

const pictures = document.querySelector('#animals');

const lion = new animals('lion');
const polarBear = new animals('polar bear')
const baboon = new animals('baboon');
const camel = new animals('camel');

pictures.addEventListener('click', (e)=>{
   let animal =  e.target.id

   if(animal === 'lion'){
        lion.playSound()
   }else if(animal === 'bear'){
    polarBear.playSound()
   }else if (animal === 'baboon'){
    baboon.playSound()
   }else if (animal === 'camel'){
       camel.playSound();
   }
})