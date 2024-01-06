// Date object
// const date = new Date();
// console.log(date);
// // get
// const year = date.getFullYear();
// const month = date.getMonth(); // 0-jan, 11-dec
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const doli = date.getMilliseconds();
// const dayOfWeek = date.getDay();
// // check
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(doli);
// console.log(dayOfWeek);

// const set_date = new Date(2023,5,10);
// console.log(set_date);
console.log("test");
function updateClock(){
    const now = new Date();
    const hour = now.getHours()%12;
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    let secondsDeg = seconds * 6;
    let hourDeg = ((hour+minute / 60) * 30)+90;
    let minuteDeg = ((minute+seconds /60) * 6)+90;
    document.querySelector('#hour').style.transform = 'rotate('+hourDeg+'deg)';
    document.querySelector('#minute').style.transform = 'rotate('+minuteDeg+'deg)';
    document.querySelector('#second').style.transform = 'rotate('+secondsDeg+'deg)';
}
setInterval(updateClock,1000);
updateClock();