const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-action = start]')
const btnStopEl = document.querySelector('[data-action = stop]')


const timerChangeBackgroundFunk = {
  intervalId: null,
  isActive: false,
  
  start() {
    if (this.isActive) {
      return;
    };
    btnStartEl.setAttribute('disabled', 'true'),
    this.intervalId = setInterval(() => {
      const getRandomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
      const getRandomColor = colors[getRandomColorIndex];
      
      const changeBackgroundFunk = () => {
        bodyEl.style.backgroundColor = getRandomColor;
      };
      changeBackgroundFunk();
      console.log(getRandomColor)
    }, 1000);
  },
  
  stop() {
    clearInterval(this.intervalId);
    btnStartEl.removeAttribute('disabled');
  },
};

btnStartEl.addEventListener('click', timerChangeBackgroundFunk.start.bind(timerChangeBackgroundFunk));
btnStopEl.addEventListener('click', timerChangeBackgroundFunk.stop.bind(timerChangeBackgroundFunk));
