// Declaring start variables
const gameOptions = ["rockButton", "paperButton", "scissorButton"];
let currentScore = 0;
// Grabbing each id from the HTML file
let rockButton = document.getElementById("rockButton");
let scissorButton = document.getElementById("scissorButton");
let paperButton = document.getElementById("paperButton");
let scoreShowing = document.getElementById("score");
let computersChoice = document.getElementById("computersChoice");
// Adding event listeners to buttons
rockButton.addEventListener("click", game);
scissorButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
// Changeing Text
scoreShowing.innerText = currentScore;
//The function of Game
function game(event){
    let currentChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    computersChoice.innerText = currentChoice;
    if(event.target.id === currentChoice){
        scoreShowing.innerText = currentScore;
        return currentScore++;
    }else{
        scoreShowing.innerText = currentScore;
        return currentScore = 0;
    };
};



//Previous ComputersChoice shown.
//Previous score Shown.
//Highest Score shown.
//Make it so the same choice cannot be made twice in a row from the computer