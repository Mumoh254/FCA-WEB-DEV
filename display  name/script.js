



const input = document.getElementById("input");
const displayText = document.getElementById("displayText");

input.addEventListener("input", () => {
    displayText.textContent = input.value;
});