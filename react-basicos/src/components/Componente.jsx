import React, {Component} from "react";

//Componente funcional expresada
const Componente = (props) => <h2>{props.msg}</h2>;


//componente funcional
/*function Componente(props){
    return <h2>{props.msg}</h2>
}*/


/*class Componente extends Component{

    render(){
        return <h2>{this.props.msg}</h2>
    }
}*/

export default Componente;