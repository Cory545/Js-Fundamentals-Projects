// Variables
const convertButton = document.getElementById("convertButton");
const inputTemp = document.getElementById("inputTemp");
const displayTemp = document.getElementById("displayTemp");
//Event listener
convertButton.addEventListener("click", calculateTemp);
//Function
function calculateTemp(){
    let celsiusTemp = inputTemp.value;
    let fahrenheit = (celsiusTemp * 2) + 30;
    return displayTemp.innerText = "In Fahrenheit :  " + fahrenheit;
};
