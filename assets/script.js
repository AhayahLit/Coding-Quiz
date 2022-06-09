var button= document.getElementById("startButton");
var timer= document.getElementById("timer");
var timerid;
var totaltime= 5;

button.addEventListener("click", startGame)
function startGame() {
    alert("test")
    timerid= setInterval(clocktick, 1000);
}
    function clocktick() {
    totaltime --;
    timer.textContent= totaltime;
    if (totaltime <=0) {
        totaltime =1;
    }
}
var questions= [ {
    Title: "What is 1+1?", 
    Answers: ["2", "window", "11", "3"],
    CorrectAnswer: "2",
    }
]

