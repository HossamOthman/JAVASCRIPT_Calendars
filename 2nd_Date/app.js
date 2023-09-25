const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const AllMonths = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December']

date.innerHTML = today.getDate() < 10 ? '0' +  today.getDate() : today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = AllMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


///////////////////////////////////////
// Clock

    function showTime(){
        'use strict';
        var now = new Date(),
            hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours(),
            minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes(),
            seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

            document.getElementById('clock').textContent = hours + ': ' + minutes + ': ' + seconds;
    };

window.onload = function () {
    'use strict';

    setInterval(showTime, 1000)
}

///////////////////////////////////////
// Countdown Timer

let countdownDate = new Date('Mon Oct 20 2025 23:30:42').getTime();

let counter = setInterval(() => {
    // get current date
    let dateNow = new Date().getTime();

    // difference bt now and countdown date
    let dateDiff = countdownDate - dateNow;

    // get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector('.minutes').innerHTML = minutes  < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0){
        clearInterval(counter);
        alert('reset timer from app.js')
    }

}, 1000)