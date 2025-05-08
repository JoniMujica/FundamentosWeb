//hacemos async a la funcion para que espere la peticion con await en el fetch
// esto no va a devolver la ejecucion de nuestro RunTime de nuestra aplicacion hasta que Ajax sea completado

//Internamente esta funcion ya funciona con async await,pero.. depende de donde se este ejecutando (ver Router.js)
export async function ajax(props){
    let {url,cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err =>{
        let message = err.statusText || "Ocurrio un error al acceder a la API"
        document.getElementById("main").innerHTML = `
            <div class="error">
                <p>Error ${err.status}:${message}</p>
            </div>
        `;

        document.querySelector(".loader").style.display = "none"
        console.log(err);
    })
}