import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";

export function App(){
    ajax({
        url: api.POSTS,
        cbSuccess: (posts)=>{
            console.log(posts);
        }
    })

    document.getElementById("root").innerHTML  = `<h1>Bienvenidos a mi primer SPA con vanilla SJ</h1>`
    console.log(api);
}
