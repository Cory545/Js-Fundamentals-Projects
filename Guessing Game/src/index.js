// Variables
const inputValue = document.getElementById("inputValue");
const enterButton = document.getElementById("enterButton");
const display = document.getElementById("display");
let playersScore = 0;
let gamesChoice = Math.floor(Math.random() * 3);

// Event listener
enterButton.addEventListener("click", handleButton);

function handleButton(e) {
    // Get the current value of the input field and convert it to a number
    let inputtedValue = Number(inputValue.value);

    // Validate input
    if (isNaN(inputtedValue) || inputtedValue < 0 || inputtedValue > 2) {
        alert("Please enter a valid number between 0 and 2.");
        return;
    }

    if (inputtedValue === gamesChoice) {
        console.log("passed");
        playersScore++; // Increment playersScore if the guess is correct
        display.textContent = `Score: ${playersScore}`; // Update the display
    } else {
        playersScore = 0;
    }

    // Generate a new random number for the next game
    gamesChoice = Math.floor(Math.random() * 3);
}