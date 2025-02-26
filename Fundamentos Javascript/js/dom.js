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
