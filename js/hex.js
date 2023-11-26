const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let hexColor = "#";

for (let i = 0; i < 6; i++) {
    const hexDigit = hexDigits[getRandomNumber(hexDigits)];
    hexColor += hexDigit;
}

body.style.backgroundColor = hexColor;
color.textContent = hexColor;

btn.addEventListener("click", () => {
    hexColor = "#";
    for (let i = 0; i < 6; i++) {
        const hexDigit = hexDigits[getRandomNumber(hexDigits)];
        hexColor += hexDigit;
    }

    body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})