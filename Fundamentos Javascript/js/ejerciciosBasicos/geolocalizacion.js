const d = document,
n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAcurracy:true, //def: false -> le decimos que el dispositio, trate de hacer la mejor lectura posible (aceleramos el hardware)
        timeout: 5000, //cuanto tiempo va a esperar para tomar la lectura 
        maximumAge: 0 //evita que se guarde cache en la lectura (no tenga como referencia la anterior)
    };

    const success = position =>{
        console.log(position);
        let coords = position.coords;
        $id.innerHTML = `
            <p>Tu posicion actual es:</p>
            <ul>
                <li>Latitud:<b>${coords.latitude}</b></li>
                <li>Longitud:<b>${coords.longitude}</b></li>
                <li>Precicion:<b>${coords.accuracy}</b>Metros</li>
                <li><b></b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
        `
    }
    const error = err => {
        $id.innerHTML = `<p><mark>Error ${err.code} : ${err.message}</mark></p>`
        console.log(err);
    }
    n.geolocation.getCurrentPosition(success,error,options)

}