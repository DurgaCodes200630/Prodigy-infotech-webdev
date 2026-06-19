let minutes = 0, seconds = 0, milliseconds = 0;
let interval;
let isRunning = false;

const minDisplay = document.getElementById('minutes');
const secDisplay = document.getElementById('seconds');
const msDisplay = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

function updateDisplay() {
  minDisplay.textContent = String(minutes).padStart(2, '0');
  secDisplay.textContent = String(seconds).padStart(2, '0');
  msDisplay.textContent = String(milliseconds).padStart(2, '0');
}

function start() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
  }
}

function pause() {
  isRunning = false;
  clearInterval(interval);
}

function reset() {
  pause();
  minutes = seconds = milliseconds = 0;
  updateDisplay();
  lapList.innerHTML = '';
}

function lap() {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = `Lap: ${minDisplay.textContent}:${secDisplay.textContent}:${msDisplay.textContent}`;
    lapList.appendChild(li);
  }
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
