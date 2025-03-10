//--------------------------------------------------------------------- */
/*
console.log("***************Elementos del documento****************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);//html
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Mundoooooo desde el DOM</h2>")

*/


/*
console.log(document.getElementsByTagName("li")); //Deprecated
console.log(document.getElementsByClassName("card")); //Deprecated
console.log(document.getElementsByName("nombre")); //Deprecated
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(e => console.log(e));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); //accedo a la 3 tarjeta del nodeList
console.log(document.querySelectorAll("#menu li"));
*/

//--------------------------Atributos y Data-Attributes-----------------------
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));


//obtener datos de atributos
console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/Fundamentos%20Javascript/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //dom.html  | getAttribute trae lo que contiene el atributo literal del documento html. Con el punto, nos trael la url del servidor y el acceso del html

//establecer datos a los atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom"); //Buena practica, usar "$" para indicar variables del DOM

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


//------------------Data Attribute----------------
//GET
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

//SET
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal, y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
