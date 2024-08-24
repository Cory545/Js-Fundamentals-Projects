let button = document.getElementById("button");
let h1 = document.getElementById("h1");
let quotes = [
"The way to get started is to quit talking and begin doing.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
"The only thing we have to fear is fear itself.",
"Well done is better than well said. ",
"It is during our darkest moments that we must focus to see the light.",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
];

button.addEventListener("click", () => {
    h1.innerText = quotes[Math.floor(Math.random() * quotes.length)];
});