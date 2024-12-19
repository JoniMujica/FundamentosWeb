//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


const ErrorString = () => console.log("No es una cadena");
const validarString = str => (typeof str) === "string";
const validarNumber = num => ((typeof num) === "number"); 
const validarArray = arr => Array.isArray(arr);

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
//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function contarVocales(str){
    if (!validarString(str)) {
        ErrorString();
        return;
    }
    let vocales = ["a","e","i","o","u"], vocal = 0,consonantes = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (str[i].toLowerCase() === vocales[j]) {
                vocal++;
            }
        }
    }
    consonantes = str.split(" ").join("").length - vocal;
    return console.log(`Vocales: ${vocal}, constantes: ${consonantes}`);
}

contarVocales("Cantidad de años");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function validarNombre(nombre){
    if (!validarString(nombre)) {
        ErrorString();
        return;
    }

    let expReg = /^[A-Za-zÑñÁaÉéÍíÓóÚúü\s]+$/g.test(nombre) //^: no puede haber nada antes de la expresion , $: no puede haber nada despues de la expresion, []:agrupadores, +: evalua cada caracter que tenga nuestra cadena de texto

    return expReg? console.info(`${nombre}, es un nombre valido`) : console.warn(`${nombre}, no es un nombre valido`);
}

validarNombre("Jonathan Mujica");


//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function validarEmail(email){
    if (!validarString(email)) {
        ErrorString();
        return;
    }

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email) //^: no puede haber nada antes de la expresion , $: no puede haber nada despues de la expresion, []:agrupadores, +: evalua cada caracter que tenga nuestra cadena de texto

    return expReg? console.info(`${email}, es un email valido`) : console.warn(`${email}, no es un email valido`);
}
validarEmail("jon@a.com");

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function arrayAlCuadrado(array){
    if(!validarArray(array)){
        console.error("El parametro ingresado no es un array");
        return;
    }
    return array.map((e) => Math.pow(e,2))
}
console.log(arrayAlCuadrado([1, 4, 5]));

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

let masBajoAlto = (array) =>{
    if(!validarArray(array)){
        console.error("El parametro ingresado no es un array");
        return;
    }
    let arr = []
    arr.push(Math.max(...array));
    arr.push(Math.min(...array));
    console.log(arr);
    
    return arr;
}
masBajoAlto([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

let objetoSeparador = (array) =>{
    if(!validarArray(array)){
        console.error("El parametro ingresado no es un array");
        return;
    }
    const pares = [], impares = [];
    array.forEach((e)=>{
        if (e % 2 === 0) {
            pares.push(e);
        }else{
            impares.push(e);
        }
    })
    return {pares: pares, impares: impares}
}
console.log(objetoSeparador([1,2,3,4,5,6,7,8,9,0]));

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const ordenarArrayObj = (array) =>{
    if(!validarArray(array)){
        console.error("El parametro ingresado no es un array");
        return;
    }

    console.log(array.sort());
    console.log(array.sort().reverse());
    
    

    return {
        asc: array.map(el=> el).sort(),
        desc: array.map(el => el).sort().reverse()
    }
}
console.log((ordenarArrayObj([7, 5,7,8,6])));

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarRepetidos = (arr) => {
    if(!validarArray(arr)){
        console.error("El parametro ingresado no es un array");
        return;
    }
    /*return{
        original: arr,
        sinDuplicados: arr.filter((value,index,self)=> self.indexOf(value) === index)
    }*/

        return {
            original: arr,
            sinDuplicados: [...new Set(arr)]
        }
}

console.log(eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true]));
 

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const Promedio = (arr) => {
    if(!validarArray(arr)){
        console.error("El parametro ingresado no es un array");
        return;
    }
    return console.log(
        arr.reduce((total,num,index,arr)=>{
            total += num;    
            if(index === arr.length-1){
                return `El promediode ${arr.join(" + ")} es igual a ${total/arr.length}`
            }else{
                return total
            }
        })
    );
    
}

Promedio([9,8,7,6,5,4,3,2,1,0]);


/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.
Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join()}`)
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);
    
        return true;
    }
    validarCadenas(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "string") return console.warn(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        
        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "number") return console.warn(`${propiedad} "${valor}" ingresado, NO es un numero`);
        
        return true;
    }

    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        
        for (const cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }
        return true;
    }

    

    validarGeneros(generos){
        if (this.validarArreglo("Generos",generos)) {
            for (const genero of generos) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Genero(s) incorrectos "${generos.join(", ")}`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarPais(pais){
        this.validarArreglo("Pais",pais)
    }

    validarEstreno(estreno){
        if (this.validarNumero("Año de estreno",estreno)) {
            if (!(/^([0-9]{4})$/.test(estreno))) {
                return console.error(`Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
            }
        }
    }

    validarCalificacion(calificacion){
        if (this.validarNumero("Calificacion",calificacion)) {
            return (calificacion < 0 || calificacion > 10)? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`): this.calificacion = calificacion.toFixed(1);
            
        }
    }

    validarMDB(id){
        if (this.validarCadenas("IMDB id",id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, las 2 primeras letras minusculas, los 7 restantes numeros`);
            }
        }
    }
    validarTitulo(titulo){
        if (this.validarCadenas("Titulo",titulo)) {
           this.validarLongitudCadena("Titulo",titulo,100)
        }
    }
    validarDirector(director){
        if (this.validarCadenas("Director",director)) {
           this.validarLongitudCadena("Director",director,100)
        }
    }

    fichaTecnica(){
        console.info(`Ficha tecnica\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGeneros:"${this.generos.join(", ")}"\nCalificacion:"${this.calificacion}"\nIMDB Id:"${this.id}"`)
    }
}

Pelicula.generosAceptados();


const peli = new Pelicula({
    id:"tt1234567",
    titulo: "Titulo de la peli",
    director: "Director de la peli",
    estreno: 2020,
    pais: ["Argentina"],
    generos: ["Comedy","Sport"],
    calificacion: 7.899
});
peli.fichaTecnica();
console.log(peli);
