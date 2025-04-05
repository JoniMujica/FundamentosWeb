
//const $btnBurger = document.getElementById("btnh");
//
//document.addEventListener("click",e=>{
//    console.log("click en" , e.target);
//    
//   if (e.target.matches("#btnh")) {
//        console.log("has clicked");
//   }
//})

import hamburger from "./menu-hamburguesa.js";
const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburger("#btnh",".panel",".menu a")
})
