import {isWeekend, getDayName} from "./date_helpers.js";

const calendar = document.querySelector('#app-calendar');



for(let day = 1; day <= 31; day++) {

    const weekEnd = isWeekend(day);

    let nameOfDay= "";
    if (day <= 7 ){
        const dayName = getDayName(day);
        nameOfDay = `<div class="dayName">${dayName}</div>`;
    }

    

calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekEnd ? 'weekEnd' : ''}">${nameOfDay}<p>${day}</p></div>`);
}