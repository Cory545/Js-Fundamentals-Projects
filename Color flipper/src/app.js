//Very simple project.
//Declare array with a bunch of colors.
const colors = ["red", "blue", "green", "purple", "yellow", "brown", "white", "black"];
//Grab both the h1 element, and the button. 
const button = document.querySelector("button");
const h1 = document.getElementById("h1");
//Event listener, calls to function "changeBackground"
button.addEventListener("click", changeBackground);
//Randomly chooses a color from the array.
function changeBackground(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    //Changes the background color of the body to the random color.
    document.body.style.backgroundColor = randomColor;
    //The html text inside the h1 shows what the current color is.
    h1.innerHTML = randomColor;
};