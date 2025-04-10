
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
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";

const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburger("#btnh",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("#activar-alarma","#desactivar-alarma");
    countdown("countdown","April 08,2025, 22:45:00","Feliz Cumpleaños amigo y docente digital");
    scrollTopButtom(".scroll-top-btn");
    darkTheme(".dark-theme-btn","dark-mode");
})

d.addEventListener("keydown",e=>{
    shortcuts(e)
    moveBall(e,".ball",".stage");
})

