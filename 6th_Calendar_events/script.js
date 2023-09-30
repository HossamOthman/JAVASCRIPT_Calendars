let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

load();
initBtns();

function load(){
const dt = new Date();

if (nav !== 0){
    dt.setMonth(new Date().getMonth() + nav);
}

const day = dt.getDate();
const month = dt.getMonth();
const year = dt.getFullYear();

const firstDayOfMonth = new Date(year, month, 1);
const daysInMonth = new Date(year, month + 1, 0).getDate();

const dateString = firstDayOfMonth.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
});
const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
document.getElementById('monthDisplay').innerText =
 `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

 calendar.innerHTML = '';

for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daysSquare = document.createElement('div');
    daysSquare.classList.add('day');

    if (i > paddingDays) {
        daysSquare.innerText = i - paddingDays;
        daysSquare.addEventListener('click', () => console.log('click'));
    } else {
        daysSquare.classList.add('padding');
    }
    calendar.appendChild(daysSquare);
}
}

function initBtns() {
document.getElementById('nextBtn').addEventListener('click', () => {
    nav++;
    load();
});
document.getElementById('backBtn').addEventListener('click', () => {
    nav--;
    load();
});
}