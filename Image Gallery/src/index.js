const images = ["../images/Lotro1.jpg","../images/starWars1.jpg","../images/starWars2.jpg","../images/starWars3.jpg"];
let imageSlider = document.getElementById("imageSlider");
let currentImageIndex = 0;

const nextButton = document.getElementById("nextButton"); // Assuming you have a button with id "nextButton"
nextButton.addEventListener("click", nextImage);


function nextImage(){
   currentImageIndex = (currentImageIndex + 1) % images.length;
   imageSlider.src = images[currentImageIndex];
};

function previousImage(){
    currentImageIndex = (currentImageIndex - 1) % images.length;
    imageSlider.src = images[currentImageIndex];
}