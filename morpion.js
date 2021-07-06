let btnStart = document.getElementById('start');
let btnPause = document.getElementById('pause');
let btnResume = document.getElementById('resume');
let seconde = document.getElementById('seconde');
let time = document.getElementById('time');
let intervalTime = null;
theBtn = false;
const cases = document.querySelectorAll("*[id^='case']");

let win = false;
const possibiltyList = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

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
    if (seconde.innerText < 59) {
        let currentValue = "0" + parseInt(seconde.innerText);
        seconde.innerText = currentValue + 1;
    } else if(seconde.innerText = 59){
        let currentValueMinute = parseInt(time.innerText)
        time.innerText = currentValueMinute +1;
        seconde.innerText = '0';
    }
}



function resumeTimer() {
    if (theBtn == false) {
        clearInterval(intervalTime);
        intervalTime = null;
        seconde.innerText = '00';
        time.innerText = '00';
    } else if (theBtn == true) {
        clearInterval(intervalTime);
        seconde.innerText = '00';
        time.innerText = '00';
        intervalTime = setInterval(updateChrono, 1000);
    }
}

function display(event) {
    let target = event.target.querySelector("img");
    target.setAttribute("src", 'circle.png');
    target.style.display = 'block';
}


btnStart.addEventListener('click', startTimer);
btnResume.addEventListener('click', resumeTimer);

cases.forEach((item) => {
    item.addEventListener('click', display);
})

for(let possibilty of possibiltyList){
    console.log(possibilty)
}

