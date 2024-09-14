let timeNow = [];
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

function time() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
    hoursDisplay.innerText = hours;
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;


  return timeNow = [hours, minutes, seconds];
}
setInterval(time, 1000);
// Access the hours, minutes, and seconds:
const [hours, minutes, seconds] = timeNow;
