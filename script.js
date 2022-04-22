const clickBox = document.getElementById("clickBox");
let clicks = 0;
let startTime;
let runTime = 5000;
let clickStatus = document.getElementById("clickStatus");
const registerClick = () => {
    if(Date.now() - startTime >= runTime) {
        endClicker();
        return;
    };
    clicks++;
    clickStatus.innerHTML = "Time Elapsed: " + (Date.now() - startTime) + "ms<br/>" + "Clicks: " + clicks;
};
function initClicker() {;
    startTime = Date.now();
    clickBox.addEventListener("click", registerClick);
    clickStatus.innerHTML = "Time Elapsed: 0ms<br/>Clicks: 0";
};
function endClicker() {
    clickBox.removeEventListener("click", registerClick)
    console.log("Click test ended!");
    alert("Your CPS is: " + clicks / (runTime / 1000))
    clicks = 0;
    clickStatus.innerHTML = "Click anywhere inside to start!";
    clickBox.addEventListener("click", initListener);
};
const initListener = () => {
    initClicker();
    console.log("Click test started!");
    clickBox.removeEventListener("click", initListener);
};
const editRunTime = () => {
    runTime = window.prompt("Enter new test time in ms:");
};
clickBox.addEventListener("click", initListener);
