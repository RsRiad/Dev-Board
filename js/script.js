// Bg Color
let themeButton=document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
// Today date
let day=document.getElementById("day");
day.innerText = new Date().toLocaleDateString("en-US", { weekday: "short"}).replace(",", "");

let today=document.getElementById("today");
today.innerText = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).replace(",", "");

// completed
const buttons = document.querySelectorAll(".completed-button");

for (const button of buttons) {
    button.addEventListener("click", () => {
        alert("Task marked as completed!");
        let first=document.getElementById("task-ass");;
        let remain=parseInt(first.innerText);
        // console.log(first);
        remain-=1;
        first.innerHTML=remain;

        let final=document.getElementById("task-tot");;
        let total=parseInt(final.innerText);
        // console.log(first);
        total+=1;
        final.innerHTML=total;

        button.disabled = true;
        button.classList.add("bg-gray-400");
    });
}