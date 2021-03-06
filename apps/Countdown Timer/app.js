const endDate = document.querySelector("input[name='endDate']");

const clock = document.querySelector('.clock');
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem('countDown') || false;

const timeLeft = d => {
  let currentDate = new Date();
  let t = Date.parse(d) - Date.parse(currentDate);
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

const startClock = d => {
  function updateCounter() {
    let tl = timeLeft(d);
    if (tl.total <= 0) {
      timeStop = false;
    }

    for (let prop in tl) {
      let el = clock.querySelector('.' + prop);
      if (el) {
        el.innerHTML = tl[prop];
      }
    }
  }
  updateCounter();
  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
};

if (savedValue) {
  startClock(savedValue);
  let inputValue= new Date(savedValue);
  console.log(inputValue)
  endDate.valueAsDate=inputValue;

}

endDate.addEventListener('change', e => {
  e.preventDefault();
  clearInterval(timeInterval);
  const temp = new Date(endDate.value);
  localStorage.setItem('countDown', temp);
  startClock(temp);
  timeStop = false;
});
