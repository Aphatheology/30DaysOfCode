let hour = document.getElementById('hour');
let minute = document.getElementById('minute')
let seconds = document.getElementById('second')

function digitalWatch() {
    let today = new Date();
    hour.innerHTML = today.getHours();
    minute.innerHTML = doubleDigit(today.getMinutes());
    seconds.innerHTML = doubleDigit(today.getSeconds());
    let timeout = setTimeout(digitalWatch, 500);
}
function doubleDigit(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}