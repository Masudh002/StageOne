
const currentDay = document.getElementById('Current__Day');
const utcTime = document.getElementById('UTC__Time');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.toUTCString().split(' ')[4];

const currentUTCTimeMilliseconds = new Date().getUTCMilliseconds();
const MillisecondsIn3Digits = currentUTCTimeMilliseconds.toString().padStart(3, '0');
const fullUTCTime = `${currentUTCTime}:${MillisecondsIn3Digits}`;

currentDay.innerHTML = currentDayOfWeek;
utcTime.innerHTML = fullUTCTime;