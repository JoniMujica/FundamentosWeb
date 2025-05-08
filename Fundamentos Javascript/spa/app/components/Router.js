import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js";

export function Router(){

    const d = document,
    w = window,
    $posts = d.getElementById("posts");

    let {hash} = location;
    console.log(hash);

    $posts.innerHTML = null;

    if (!hash || hash === "#/") {
        ajax({
            url:api.POSTS,
            cbSuccess: (posts)=>{
                console.log(posts);
                let html = "";
                posts.forEach(post=> html += PostCard(post));
                d.querySelector(".loader").style.display = "none";
                $posts.innerHTML = html;
            }
        })
        $posts.innerHTML = "<h2>Seccion del home</h2>";
    }else if(hash.includes("#/search")){
        $posts.innerHTML = "<h2>Seccion del buscador</h2>";
    }else if (hash === "#/contacto") {
        $posts.innerHTML = "<h2>Seccion del contacto</h2>";
    }else{
        $posts.innerHTML = "<h2>Aqui cargara el contenido  del post previamente seleccionado</h2>";
    }
    
    
}