let btnStart = document.getElementById('start');
let btnPause = document.getElementById('pause');
let btnResume = document.getElementById('resume');
let time = document.getElementById('time');
let intervalTime = null;
theBtn = false;
const cases = document.querySelectorAll("*[id^='case']");

function startTimer() {
    if (theBtn == false) {
        if (intervalTime === null) {
            intervalTime = setInterval(updateChrono, 1000);
            theBtn = true;
        }
    } else if (theBtn == true) {
        theBtn = false;
        clearInterval(intervalTime);
        intervalTime = null;
    }
}

function updateChrono() {

    let currentValue = parseInt(time.innerText);
    time.innerText = currentValue + 1;
}



function resumeTimer() {
    if (theBtn == false) {
        clearInterval(intervalTime);
        intervalTime = null;
        time.innerText = 0;
    } else if (theBtn == true) {
        clearInterval(intervalTime);
        time.innerText = 0;
        intervalTime = setInterval(updateChrono, 1000);
    }
}

function display(event){
    let target = event.target.querySelector("img");
   target.setAttribute("src",'circle.png');
   target.style.display = 'block';
}

btnStart.addEventListener('click', startTimer);
btnResume.addEventListener('click', resumeTimer);

cases.forEach((item)=>{
    item.addEventListener('click', display);
})
