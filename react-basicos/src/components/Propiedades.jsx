import React from "react";
import PropTypes from "prop-types"

export default function Propiedades({porDefecto="Las Props",cadena,numero,booleano,arreglo,objeto,elementoReact,funcion,componenteReact}){
    return(
        <div>
            <h2>{porDefecto}</h2>
            <ul>
                <li>{cadena}</li>
                <li>{numero}</li>
                <li>{booleano? "Verdadero":"Falso"}</li>
                <li>{arreglo.join(",")}</li>
                <li>{objeto.nombre + "-" + objeto.correo}</li>
                <li>{elementoReact}</li>
                <li>{arreglo.map(funcion).join(",")}</li>
                <li>{componenteReact}</li>
            </ul>
        </div>
    )
}


// esto en React < 17
//Propiedades.propTypes ={
//    porDefecto: PropTypes.number,
//}
/*
Propiedades.defaultProps = {
    porDefecto: "Las Props",
};
*/