export const PI = Math.PI;

export let usuario = "jon";
let password = "qwerty"
//export default password;


const hello = () => console.log("Hola");

export default function saludar(){ //solamente puedo tener un solo export default x js
        console.log("Hola modulo +ES6");
}
export class Saludar{ //solamente puedo tener un solo export default x js
    constructor(){
        console.log("Hola clases +ES6");
    }
}