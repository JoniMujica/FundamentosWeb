//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


const ErrorString = () => console.log("No es una cadena");
const validarString = str => (typeof str) === "string";
const validarNumber = num => ((typeof num) === "number"); 

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
}("Hola",3));

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

(function(str){
    validarString(str)? console.log(str.split("").reverse().join("")) : ErrorString();
}("Hola Mundo"));

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

(function(str,sString){
    if (!validarString(str) || !validarString(sString)){
        ErrorString();
        return;
    }
    let palabras = str.split(" "),contador = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === sString) {
            contador++;
        }
    }
    console.log(contador);
    
    return contador;
}("Hola mundo adios mundo mundo","mundo"));

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

(function(str){
    if (!validarString(str)) {
        ErrorString();
        return;
    }
    let reversa = str.split("").reverse().join("").toLowerCase();
    console.log(reversa);    
    return str.toLowerCase() === reversa;
}("Amar - rama"));

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

(function(str,patron){
    if(!validarString(str)){
        ErrorString();
        return;
    }
    return str.replace(new RegExp(patron,"ig"),"");
}("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
(function(){
    return Math.round(Math.random() * 100) + 500;
}());

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
(function(num){
    if (!validarNumber(num)) {
        console.error("El dato ingresado no es un numero");
        return;  
    }

    let cadena = num.toString();
    let reversa = parseInt(cadena.split("").reverse().join(""));
    console.log(reversa === num);
    return reversa === num;
}(2002));

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

(function(num){
    if (!validarNumber(num)) {
        console.error("El dato ingresado no es un numero");
        return;
    }
    let factoral = 1;
    for (let i = 1; i <= num ;i++) {
        factoral *= i;
    }
    console.log(factoral);
    
    return factoral;
}(5));

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

(function(num){
    if (!validarNumber(num)) {
        console.error("El dato ingresado no es un numero");
        return;
    }

    let esPrimo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false
            break;
        }
    }

    console.log(esPrimo);
    return esPrimo;
}(7));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

(function(num){
    if (!validarNumber(num)) {
        console.error("El dato ingresado no es un numero");
        return;
    }
    console.log(num % 2 === 0);
    return num % 2 === 0;
}(2));

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

(function(num,type){
    if (!validarNumber(num) || !validarString(type) || type.length > 1) {
        console.error("Los datos ingresados son incorrectos");
        return;
    }

    if (type === "c") {
        console.log(`${(num*(9/5))+32}°f`);
        return `${(num*(9/5))+32}°f`;
    }else if (type === "f") {
        console.log(`${(num-32)*5/9}°c`);
        return `${(num-32)*5/9}°c`;
    }

    console.log("El tipo de grados no es valido");
    return;

}(50,"f"))

/* 

*/

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

function BinarioDecimal(num,base){
    if (!validarNumber(num)||!validarNumber(base)) {
        console.error("El dato ingresado no es un numero");
        return;
    }


    if (base === 2) {
        return console.info(`${num} base ${base} = ${parseInt(num,base)} base 10`);
    }else if(base === 10){
        return console.info(`${num} base ${base} = ${num.toString(2)} base 2`);
    }else{
        console.error("El tipo de base a convertir no es valido")
    }

}
BinarioDecimal(11,3);


//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function MontoFinal(monto,desc){
    if (!validarNumber(monto) || !validarNumber(desc)) {
        console.error("El dato ingresado no es un numero");
        return;
    }
    return console.log(monto - (monto / 100) * desc);
    
}

MontoFinal(550,20);


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function cantidadAnios(dia,mes,anio){
    let hoy = new Date();
    let fechaEst = new Date(anio,mes-1,dia);
    let anios = hoy.getFullYear() - fechaEst.getFullYear();
    let difMeses = hoy.getMonth() - fechaEst.getMonth();
    //console.log(hoy.getMonth()); devuelve index de 0 - 11
    //console.log(fechaEst.getMonth());
    //console.log(difMeses);
    if (difMeses < 0 || (difMeses === 0  && hoy.getDate() < fechaEst.getDate())) {
        anios--;
    }
    
    return console.log(`Cantidad de años ${anios}`);
    ;
}

cantidadAnios(25, 11,1999);