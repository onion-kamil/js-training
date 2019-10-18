const spanDay = document.querySelector('span.day');
const spanHours = document.querySelector('span.hours');
const spanMinutes = document.querySelector('span.minutes');
const spanSeconds = document.querySelector('span.seconds');

const inputDate = document.querySelector('[type="datetime-local"]');
let userDate;

const getUserDate = () => {
    userDate = inputDate.value;
    setInterval(getDate, 1000);
}

inputDate.addEventListener('change', getUserDate);


const getDate = () => {

    const endTime = new Date(userDate);

    const nowTime = new Date().getTime();
    const time = endTime - nowTime;

    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    // Adding 0 before value
    days = days < 10 ? `0${days}` : days;

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    // Adding 0 before value
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    // Adding 0 before value
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((endTime / 100 - nowTime / 1000) % 60);
    // Adding 0 before value
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanDay.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;
}