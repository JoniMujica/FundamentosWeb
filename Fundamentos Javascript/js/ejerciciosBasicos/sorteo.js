const d = document;

export default function draw(btn,selector){
    

    d.addEventListener("click",e=>{
        if (e.target.matches(btn)) {
            let result = getWinneComment(selector);
            alert(result);
            console.log(result);
        }
    })
}

const getWinneComment = (selector) =>{
    const $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];



    return `El ganador es: ${winner.textContent}`
}