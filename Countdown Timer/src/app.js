//Grab ids from the index.html
const countdownDisplay = document.getElementById("countdownDisplay");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const playButton = document.getElementById("playButton");
const resumeButton = document.getElementById("resumeButton");
//Variables
let countdownDisplayNumber = 10;
let originalCountdownNumber = 10;
countdownDisplay.innerText = "Countdown from 10";
let isPaused = false;
//Functions
function pauseCountdown(){
    return isPaused = true;
};
function resumeCountdown(){
    return isPaused = false;
};
function resetCountdown(){
    isPaused = true;
    return countdownDisplayNumber = originalCountdownNumber;
};
function playCountdown(){
    const intervalId = setInterval(() =>  {
        if(!isPaused){
         countdownDisplay.innerText = countdownDisplayNumber;
        countdownDisplayNumber--;

        if (countdownDisplayNumber < 0){
            clearInterval(intervalId);
        }}
    }, 1000)
};