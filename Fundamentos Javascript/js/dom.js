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
/*
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

*/

//--------------------ESTILOS Y VARIABLES CSS----------------
/*const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.color);

//styles def
console.log(window.getComputedStyle($linkDOM));

console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));//acceso  a una propiedad de style

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//Variables CSS - Custom Porperties CSS
const $html = document.documentElement,
$body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
//console.log(getComputedStyle($html).getPropertyValue("--dark-color"));

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;


//modificar variables CSS
$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor);
*/


//--------------------------Clases CSS------------------------ 
/*
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");
*/

//----------------------Texto y HTML------------------
/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//$whatIsDOM.innerText = text; //innerText no reconoce los elementos HTML //No standard
//$whatIsDOM.textContent = text; //textContent no reconoce los elementos HTML // standard

$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/

//-------------------DOM Traversing----------------------------
/*
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);//MUESTRA EL PRIMERO NODO(YA SEA TABULACION ETC) 
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

//------------Creando Elementos y Fragmentos 
/*
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");


//configuro los elementos de la figure
$img.setAttribute("src","https://picsum.photos/200/200");
$img.setAttribute("alt","any");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);


//agrego una card
$cards.appendChild($figure)


$figure2.innerHTML = `
   <img src="https://picsum.photos/200/200" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);



const estaciones = ["Primavera","Verano","Otonio","Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del anio</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el
  $ul.appendChild($li);
})


const continentes = ["Africa","America","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);


const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();


meses.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li)
});
 

document.write("<h3>Meses del anio</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/

//-----------------Templates HTML=--------------


const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];
console.log( document.getElementById("template-card").content);

cardContent.forEach(el => {
  $template.querySelector("img").setAttribute("src",el.img);
  $template.querySelector("img").setAttribute("alt",el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template,true);
  $fragment.appendChild($clone);
})

$cards.appendChild($fragment);

