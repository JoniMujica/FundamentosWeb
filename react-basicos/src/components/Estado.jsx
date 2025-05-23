import React, {Component} from "react";

function EstadoHijo(props){
    return (
        <div>
            <h3>{props.ContadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador:0
        };

        setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            })
        },1000)
    }
    
    render(){
        return(
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo ContadorHijo={this.state.contador} />
            </div>
        )
    }
}