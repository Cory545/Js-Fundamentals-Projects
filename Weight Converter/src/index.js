
//Grabbing from Index.html
const weightDisplay = document.getElementById("weightDisplay");
const weightInput = document.getElementById('weightInput');
const convertButton = document.getElementById("convertButton");

console.log(weightInput);

convertButton.addEventListener("click", convert);

//Function
function convert() {
    return weightDisplay.innerText = weightInput.value * 2.2046;
  };