let input = document.getElementById("input");
let display = document.getElementById("display");

function updateCount(){
    display.innerText = input.value.length;
};

input.oninput = updateCount;