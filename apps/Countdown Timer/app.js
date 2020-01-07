const endDate = document.querySelector("input[name='endDate']");

const clock = document.querySelector('.clock');

endDate.addEventListener('change', e => {
  e.preventDefault();
  console.log(endDate.value);
  const temp = new Date(endDate.value);
  console.log(temp);
  startClock(temp);
});

const startClock = d => {
  let tl=timeLeft(d);
  console.log(tl.days)
  for(let prop in tl){
        console.log(tl[prop])
        let el = clock.querySelector("."+prop);
        if(el){
            el.innerHTML=tl[prop]
        }
  }
};

const timeLeft = d => {
  let currentDate = new Date();
  // console.log(currentDate)
  // console.log(Date.parse(currentDate))
  let t = Date.parse(d) - Date.parse(currentDate);
  console.log(t);
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};
