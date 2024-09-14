let block = document.getElementById("container");
let block2 = document.getElementById("container2");
let displayOption = true;
let displayOption2 = "Toggled";

function onMouseOver(){
    if (displayOption === true){
        displayOption = false;
        block.style.display = "none";
    } else {
        displayOption = true;
        block.style.display = "inline-block";
    };
};

function toggleContainer(){
    if(displayOption2 === "Toggled"){
        displayOption2 = "notToggled";
        block2.style.display = "none";
    }else{
        displayOption2 = "Toggled";
        block2.style.display = "inline-block"
    };
};