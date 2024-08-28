// variables
const button = document.getElementById("button");
const priceInput = document.getElementById("priceInput");
const peopleInput = document.getElementById("peopleInput");
const tipInput = document.getElementById("tipInput");
const display = document.getElementById("display");
//Button click
button.addEventListener("click", calculate);
//Function
function calculate(){
    let percent = parseFloat(tipInput.value);
    let people = parseFloat(peopleInput.value);
    let totalPrice = parseFloat(priceInput.value);

    const perPersonCostBeforeTip = totalPrice / people;
    const tipAmount = (percent / 100) * totalPrice;
    const perPersonTip = tipAmount / people;
    const perPersonTotal = perPersonCostBeforeTip + perPersonTip;

    display.textContent = 
    `Per person cost before tip: £${perPersonCostBeforeTip.toFixed(2)}\n - Per person tip: £${perPersonTip.toFixed(2)}\n  - Per person total: £${perPersonTotal.toFixed(2)}`
};