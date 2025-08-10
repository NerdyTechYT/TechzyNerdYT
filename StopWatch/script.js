let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(ms) {
  const date = new Date(ms);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
  const now = Date.now();
  const time = elapsedTime + (now - startTime);
  display.textContent = formatTime(time);
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
  }
}

function stopTimer() {
  if (timerInterval) {
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
