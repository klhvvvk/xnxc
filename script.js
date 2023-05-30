const startButton = document.getElementById('startButton');
const clicker = document.getElementById('clicker');
const timer = document.getElementById('timer');
const tryAgainButton = document.getElementById('tryAgainButton');
const clickPerSecond = document.getElementById('clickPerSecond');
const bestScore = document.getElementById('bestScore');
const userNsme = document.getElementById('users');

let score = 0;
let time = 10;
let timetwo = null;
let GameRun = false;
let startTime = 0;
let endTime = 0;
let clickCount = 0;
let bestScoreValue = 0;

function startGame() {
  if (GameRun) return;
  
  GameRun= true;
  startTime = Date.now();
  startButton.textContent = score;
  
  timetwo = setInterval(updateTimer, 1000);
}

function plusScore() {
  if (!GameRun) return;
  startButton.removeEventListener('click', startGame)
  score++;
  startButton.textContent = score;
  clickCount++;
}

function updateTimer() {
  time--;
  timer.textContent = time;
  
  if (time === 0) {
    clearInterval(timetwo);
    endGame();
  }
}


function endGame() {
  GameRun= false;
  endTime = Date.now();
  tryAgainButton.style.display = 'block';
  

  if (score > bestScoreValue) {
    bestScoreValue = score;
    bestScore.textContent = bestScoreValue;
  }
  

  const average = (endTime - startTime) / 1000;
  const averageclicktime = clickCount / average;
  clickPerSecond.textContent = averageclicktime.toFixed(1);
  

  score = 0;
  time = 10;
  clickCount = 0;
}

function tryAgain() {
  tryAgainButton.style.display = 'none';
  startButton.style.display = 'block';
  timer.textContent = time;
  startButton.addEventListener('click',startGame)
  startButton.textContent="start";
  clickPerSecond.textContent = '';
}

function enterUser() {
    
}

startButton.addEventListener('click', startGame);
startButton.addEventListener('click', plusScore);
tryAgainButton.addEventListener('click', tryAgain);
userNsme.addEventListener('click', enterUser);