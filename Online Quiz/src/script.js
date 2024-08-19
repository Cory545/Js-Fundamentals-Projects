//Grab all my buttons and make them into variables.
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const scoreButton = document.getElementById("scoreButton");
//Setting the default score to 0;
let score = 0;
//Adding event listener to button1.
button1.addEventListener("click", () => {
    //Grabbing which input was checked when the button was pressed.
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    //Disabling the button after the button is pressed.
    button1.disabled = true;
    //Now checking if the checked value is equal to bike, perhaps I'll change it to a variable called answer1.
    if(checkedValue === "bike"){
        //Increase the score variable 
        return score++;
    } else{

    }
});


button2.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button2.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Matthew"){
        console.log(score)
        return score++;
    } else{

    }
})
button3.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button3.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "BJJ"){
        console.log(score)
        return score++;
    } else{

    }
})
button4.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button4.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Adidas"){
        console.log(score)
        return score++;
    } else{

    }
})
button5.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button5.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Star Wars Battlefront 2"){
        console.log(score)
        return score++;
    } else{

    }
})
button6.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button6.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Merlin"){
        console.log(score)
        return score++;
    } else{

    }
})
button7.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button7.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "None"){
        console.log(score)
        return score++;
    } else{

    }
})
button8.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button8.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Judo"){
        console.log(score)
        return score++;
    } else{

    }
})
button9.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button9.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "Violin"){
        console.log(score)
        return score++;
    } else{

    }
})
button10.addEventListener("click", () => {
    let checkedValue = document.querySelector('input[name="question"]:checked').value;
    button10.disabled = true;
    console.log(checkedValue);
    if(checkedValue === "No"){
        console.log(score)
        return score++;
    } else{

    }
})


scoreButton.addEventListener("click", () =>{
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = `Your Score: ${score}`;
})