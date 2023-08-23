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
let secTimeRemaining = Math.floor((timeTomorrow - timeNow) / 1000)
//tempo rimanente (in minuti)
let minTimeRemaining = Math.floor(secTimeRemaining / 60)
//tempo rimanente (in ore)
let hourTimeRemaining = Math.floor(minTimeRemaining / 60)
//tempo rimanente (in giorni)
let dayTimeRemaining = Math.floor(hourTimeRemaining / 24)
console.log('secondi : ',secTimeRemaining);
console.log('minuti : ',minTimeRemaining);
console.log('ore : ',hourTimeRemaining);
console.log('giorni : ',dayTimeRemaining);
