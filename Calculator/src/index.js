// Grabbing the element with the id of "display" and assigns it the variable of display.
const display = document.getElementById("display");
//Each button when clicked calls to this function. And will add the value to the display value.
function appendToDisplay(input){
    display.value += input;
};
//This when called by the clear button, changes the value of the display to an empty string.
function clearDisplay(){
    display.value = "";
};
// This uses a try and catch, it'll try using the "eval" function, which is essentially it's own calculator. It'll change the value to what the answer is. So if the value is "10 - 1", it'll do 10 minus one.
// And also if there is an error, it will change the display to "Error".
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    };
};