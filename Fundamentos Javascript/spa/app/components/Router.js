import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SerchCard } from "./SearchCard.js";


//Al ser asincrono, ya puedo utilizar await, y asi puedo esperar primero que espere a la peticion de Ajax, para despues, pintar lo que esta por defecto (loader = none)
export async function Router(){
    const d = document,
    w = window,
    $main = d.getElementById("main");

    let {hash} = location;
    console.log(hash);

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        //Aca se detiene hasta que termine la consulta
        //aca tambien tiene que ejecutarse async await, para que Primero se compla con la peticion, luego ejecutar los detalles por defecto (fuera del if)
        await ajax({
            url:api.POSTS,
            cbSuccess: (posts)=>{
                console.log(posts);
                let html = "";
                posts.forEach(post=> html += PostCard(post));
                //d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        })
        //$main.innerHTML = "<h2>Seccion del home</h2>";
    }else if(hash.includes("#/search")){
        let query = localStorage.getItem("wpSearch");
        if (!query) {
            d.querySelector(".loader").style.display = "none";
            return;
        }


        await ajax({
            url:`${api.SEARCH}${query}`,
            cbSuccess: (search)=>{
                console.log(search);
                let html = "";
                if (search.length===0) {
                    html = `
                        <p class="error">
                            No existen resultados de busqueda para el termino <mark>${query}</mark>
                        </p>
                    `;
                }else{
                    search.forEach(post=>html += SerchCard(post));
                }
                $main.innerHTML = html;
            }
        })

    }else if (hash === "#/contacto") {
        $main.appendChild(ContactForm())
    }else{
        //console.log(api.POST);
        //console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
        
        await ajax({
            url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post)=>{
                console.log(post);
                $main.innerHTML = Post(post);
                //let html = "";
                //posts.forEach(post=> html += PostCard(post));
                //d.querySelector(".loader").style.display = "none";
                //$main.innerHTML = html;
            }
        })
        //$main.innerHTML = "<h2>Aqui cargara el contenido  del post previamente seleccionado</h2>";
    }
    d.querySelector(".loader").style.display = "none";
    
    
}