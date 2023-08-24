
setInterval(timer, 1000)
function timer (){
    // tempo ad oggi
    const today = new Date();
    let timeNow =parseInt(today.getTime());

    //tempo a domani (09.30)
    const tomorrow = new Date(2023,7,24,9,30);
    let timeTomorrow =parseInt(tomorrow.getTime());

    let timeRemaining = (timeTomorrow - timeNow)    
    //tempo rimanente (in giorni)
    let dayTimeRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    document.getElementById('days').innerText = dayTimeRemaining
   //tempo rimanente (in ore)
    let hourTimeRemaining = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.getElementById('hours').innerText = hourTimeRemaining
    //tempo rimanente (in minuti)
    let minTimeRemaining = Math.floor(timeRemaining % (1000 * 60 * 60 ) / (1000 * 60))
    document.getElementById('minutes').innerText = minTimeRemaining
    //tempo rimanente (in secondi)
    let secTimeRemaining = Math.floor(timeRemaining % (1000 * 60) / 1000)
    document.getElementById('seconds').innerText = secTimeRemaining
        if (timeRemaining < 0) {
        clearInterval(timer)
    } 
}



