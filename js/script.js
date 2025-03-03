// Bg Color
let themeButton=document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});


//blog
document.getElementById("que").addEventListener("click", function() {
    window.location.href = "./blog.html";
});


// Today date
let day=document.getElementById("day");
day.innerText = new Date().toLocaleDateString("en-US", { weekday: "short"}).replace(",", "");

let today=document.getElementById("today");
today.innerText = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).replace(",", "");


// completed
const buttons = document.querySelectorAll(".completed-button");
for (const button of buttons) {
    button.addEventListener("click", (event) => {
        
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

        let taskName = button.closest('.bg-gray-100').querySelector('h2').innerText;
        let currentTime = new Date().toLocaleTimeString();

        let activityLog = document.getElementById("activity-log");
        let logMessage = document.createElement("div");
        logMessage.classList.add("p-2", "border-b", "border-gray-200");

        logMessage.innerText = `You have completed the task "${taskName}" at ${currentTime}`;
        activityLog.appendChild(logMessage);
        alert("Task marked as completed!");
        if(remain==0){
            alert("Congratulation !!!! You have completed all the task.");
        }

        button.disabled = true;
        button.classList.add("bg-gray-400");
    });
}


// Clear History
document.getElementById("clear-history").addEventListener("click", () => {
    document.getElementById("activity-log").innerHTML = "";
    
});