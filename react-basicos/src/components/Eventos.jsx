import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        
    }
    sumar(){
        console.log("Sumando");
        console.log(this);

        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        console.log("Restar");
        console.log(this);

        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <>
                <h2>Eventos en Componentes de clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </>
        )
    }
}

//Property Initializer

export class EventosES7 extends Component{
    state = {
        contador: 0
    }
    //arrow  function
    sumar =()=>{
        console.log("Sumando");
        console.log(this);

        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar=()=>{
        console.log("Restar");
        console.log(this);

        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <>
                <h2>Eventos en Componentes de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </>
        )
    }
}

//function Boton(props){
//    return(<button onClick={props.myOnClick}>Boton hecho componente</button>)
//} 


//const Boton = (props) => <button onClick={props.myOnClick}>Boton Hecho Componente</button>

const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton Hecho Componente</button>


export class MasSobreEventos extends Component{
    handleClick = (e,mensaje) =>{
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }
    render(){
        return(
            <>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e)=>this.handleClick(e,"Hola pasando parametro desde evento")}>Saludar</button>
                {/*Evento Personalizado*/}
                {/*<Boton onClick={(e)=>this.handleClick(e,"Hola pasando parametro desde evento")} />*/}
                <Boton myOnClick={(e)=>this.handleClick(e,"Hola pasando parametro desde evento")} />
            </>
        );
    }
}
