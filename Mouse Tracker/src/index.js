function coordinate(event){
    let x = event.clientX;
    let y = event.clientY;

    document.getElementById("X").value = x;
    document.getElementById("Y").value = y;
};