// Declaring start variables
const gameOptions = ["rock", "paper", "scissor"];
let currentScore = 0;
// Grabbing each id from the HTML file
let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let scoreShowing = document.getElementById("score");
let computersChoice = document.getElementById("computersChoice");
// Adding event listeners to buttons
rock.addEventListener("click", game);
scissor.addEventListener("click", game);
paper.addEventListener("click", game);
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