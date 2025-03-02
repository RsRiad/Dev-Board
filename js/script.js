// Bg Color
let themeButton=document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
// completed
const buttons = document.querySelectorAll(".completed-button");

for (const button of buttons) {
    button.addEventListener("click", () => {
        alert("Task marked as completed!");


        button.disabled = true;
        button.classList.add("bg-gray-400");
    });
}