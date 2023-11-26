const colors = ["red", "pink", "orange", "yellow", "purple", "green", "blue", "brown", "white", "gray"];
const body = document.body;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const randomNumber = getRandomNumber(colors);

// Initial color
body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber(colors);
    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});