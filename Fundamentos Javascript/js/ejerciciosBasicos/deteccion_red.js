const d = document,
w = window,
n = navigator;


export default function networkStatus(){

    const isOnline = ()=>{
        const $div = d.createElement("div");
        if (n.onLine) {
            $div.textContent = "Conexion reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("onlines");
        }

        d.body.insertAdjacentElement("afterbegin", $div); // clase 71
        setTimeout(() => {
            d.body.removeChild($div);
        }, 2000);
    }


    w.addEventListener("online",e=>{
        console.log(n.onLine);
        isOnline();
    })

    w.addEventListener("offline",e=>{
        console.log(n.onLine);
        isOnline();
    })
}