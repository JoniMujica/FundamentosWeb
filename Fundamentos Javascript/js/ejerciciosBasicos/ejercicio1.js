//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


const ErrorString = () => console.log("No es una cadena");
const validarString = str => (typeof str) === "string";

(function(str){
    validarString(str)? console.log(str.length) : ErrorString();
    
}({}));

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

(function(str,num){

    (validarString(str) && num < str.length + 1)? console.log(str.slice(0,num)) :  console.log("No es un string o el numero indicado supera la cantidad de posiciones de string");
    
}("Hola mundo" , 10));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

(function(str,separador){
    validarString(str)? console.log(str.split(separador)) : ErrorString();
}("Hola Mundo Como estan", " "));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
(function(str,cant){
    validarString(str)? console.log(str.concat(" ").repeat(cant).trim()) : ErrorString();
}("Hola",3))