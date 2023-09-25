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