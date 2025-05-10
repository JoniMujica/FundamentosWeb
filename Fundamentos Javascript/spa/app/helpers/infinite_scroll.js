import api from "./wp_api.js"

import { SerchCard } from "../components/SearchCard.js";
import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";

export async function infiniteScroll(){
    const d = document,
    w = window;
    let query = localStorage.getItem("wpSearch"),
    apiUrl,
    Component; //HIGH ORDER CCOMPONENT

    w.addEventListener("scroll", async (e)=>{
        let {scrollTop,clientHeight,scrollHeight} = d.documentElement,
        {hash} = w.location;

        //console.log(scrollTop,clientHeight,scrollHeight,hash);

        if (scrollTop + clientHeight >= scrollHeight) {
            api.page++;
            if (!hash || hash === "#/") {
                apiUrl = `${api.POSTS}&page=${api.page}`
                Component = PostCard;
            }else if (hash.includes("#/search")){
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SerchCard;
            }else{
                return;
            }

            d.querySelector(".loader").style.display = "block";
            await ajax({
                url: apiUrl,
                cbSuccess: (posts)=>{
                    console.log(posts);
                    let html = ""
                    posts.forEach(post=> html += Component(post));
                    d.getElementById("main").insertAdjacentHTML("beforeend",html);
                    d.querySelector(".loader").style.display = "none";
                }
            });
        }
    })
}