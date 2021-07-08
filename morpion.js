let btnStart = document.getElementById('start');
let btnPause = document.getElementById('pause');
let btnResume = document.getElementById('resume');
let time = document.getElementById('time');
let second = document.getElementById('second');
let intervalTime = null;
theBtn = false;
let circle = true;
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
    if (second.innerText < 59) {
        let currentValue = parseInt(second.innerText);
        second.innerText = currentValue + 1;
    } else if (second.innerText = 59){
        let currentValueMinute = parseInt(time.innerText);
        second.innerText = '0';
        time.innerText = currentValueMinute +1;
    }
}



function resumeTimer() {
    if (theBtn == false) {
        clearInterval(intervalTime);
        intervalTime = null;
        time.innerText = 0;
        second.innerText =0;
    } else if (theBtn == true) {
        clearInterval(intervalTime);
        time.innerText = 0;
        second.innerText =0;
        intervalTime = setInterval(updateChrono, 1000);
    }
}

function display(event) {
    
    let target = event.target.querySelector("img");
    if (circle == true) {
        target.setAttribute("src", 'cross.png');
        target.style.display = 'block';
        circle = false;
        console.log(circle);
    } else if (circle == false) {
        target.setAttribute("src", 'circle.png');
        target.style.display = 'block';
        circle = true;
    }
}

btnStart.addEventListener('click', startTimer);
btnResume.addEventListener('click', resumeTimer);

cases.forEach((item) => {
    item.addEventListener('click', display);
})
