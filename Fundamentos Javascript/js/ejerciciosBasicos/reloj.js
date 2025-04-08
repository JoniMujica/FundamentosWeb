const d = document;

export function digitalClock(clock, btnPlay,btnStop){
    let clockTemp;
    d.addEventListener("click", e=>{
        if (e.target.matches(btnPlay)) {
            clockTemp = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            },1000)
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTemp);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
export function alarm(btnPlay,btnStop){
    let alarmaTemp;
    const $alarm = d.createElement("audio");
    $alarm.src = "assets/alarma.mp3";
    //const sound = new Audio("../../assets/alarma.mp3");
    d.addEventListener("click",e=>{
        if (e.target.matches(btnPlay)) {
            alarmaTemp = setTimeout(()=>{
                $alarm.play();
            },2000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmaTemp);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}