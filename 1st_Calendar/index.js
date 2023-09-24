import {isWeekend} from "./date_helpers.js";

const calendar = document.querySelector('#app-calendar');



for(let day = 1; day <= 31; day++) {


    const weekEnd = isWeekend(day);

calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekEnd ? 'weekEnd' : ''}">${day}</day>`);
}