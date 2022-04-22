const clickBox = document.getElementById("clickBox");
let clicks = 0;
let startTime;
let runTime = 5000;
let clickStatus = document.getElementById("clickStatus");
let dynamicCPS = false;
const registerClick = () => {
    clicks++;
    clickStatus.innerHTML = `Time Elapsed: ${Date.now() - startTime}ms<br/>Clicks: ${clicks + 1}`;
};
function initClicker() {
    startTime = Date.now();
    setTimeout(() => {
        clickBox.removeEventListener("click", registerClick)
        console.log("Click test ended!");
        alert("Your CPS is: " + clicks / (runTime / 1000))
        clicks = 0;
        clickStatus.innerHTML = "Click anywhere inside to start!";
        clickBox.addEventListener("click", initClicker);
    }, runTime);
    console.log("Click test started!");
    clickBox.removeEventListener("click", initClicker);
    clickBox.addEventListener("click", registerClick);
    clickStatus.innerHTML = "Time Elapsed: 0ms<br/>Clicks: 1";
    if(dynamicCPS) clickStatus.innerHTML = "Time Elapsed: 0ms<br/>Clicks: "
};
clickBox.addEventListener("click", initClicker);
