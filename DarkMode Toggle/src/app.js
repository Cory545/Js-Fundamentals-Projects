const toggleSwitch = document.querySelector('input[type="checkbox"]');
let currentTheme = "light";


// Event Listener for the toggleSwitch
toggleSwitch.addEventListener('change', switchTheme);


function switchTheme(){
    if(currentTheme === "light"){
        document.body.style.backgroundColor = "black";
        return currentTheme = "night"
    }else if(currentTheme === "night"){
        document.body.style.backgroundColor = "white";
        return currentTheme = "light"
    }
};