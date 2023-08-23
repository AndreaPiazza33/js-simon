// tempo ad oggi
const today = new Date();
console.log(today);
let timeNow =parseInt(today.getTime());
console.log(timeNow);

//tempo a domani (09.30)
const tomorrow = new Date(2023,7,24,9,30);
console.log(tomorrow);
let timeTomorrow =parseInt(tomorrow.getTime());
console.log(timeTomorrow);

//tempo rimanente (in secondi)
let timeRemaining = ((timeTomorrow - timeNow) / 1000)
console.log(timeRemaining);

