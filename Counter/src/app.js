//Starting with variables.
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let resetButton = document.getElementById("reset");
let h1Element = document.getElementById("h1");
let count = 0;
h1Element.innerHTML = count;

//Button clicks
plusButton.addEventListener("click", plusFunction);
minusButton.addEventListener("click", minusFunction);
resetButton.addEventListener("click", resetFunction);

//Functions
function plusFunction(){
    return h1Element.innerHTML = count++;
};
function minusFunction(){
    
    return h1Element.innerHTML = count--;
};
function resetFunction(){
    return h1Element.innerHTML = count = 0;
};