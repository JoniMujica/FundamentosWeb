import React, { useState, useEffect } from 'react';

function Pokemon({avatar,name,id}){
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{id} - {name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);

    /*
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            //console.log(json);
            
            json.results.forEach(el =>{
                fetch(el.url)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    let pokemon ={
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                    
                    
                    //let pokemons = [...(this.state.pokemons),pokemon];
                    setPokemons((pokemons)=> [...pokemons,pokemon]);
                    //this.setState(prevState => ({pokemons: [...prevState.pokemons, pokemon]}));
                })
            })
        })
    }, [])*/


    //Mejora te peticion, con async await , no es valido hacer async al use effect, se debe crear una funcion interna y hacerla async
    useEffect(() => {

        const getPokemons = async (url) =>{
            let res = await fetch(url),
            json = await res.json();
                //console.log(json);
            json.results.forEach(async  el =>{
            let res = await fetch(el.url),
            json = await res.json();
            console.log(json);
            let pokemon ={
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
            }    
            setPokemons((pokemons)=> [...pokemons,pokemon]);
            })
        }
            getPokemons("https://pokeapi.co/api/v2/pokemon/");
    },[]);
    return(
        <>
            <h2>Peticiones asincronas en Hooks</h2>
            {pokemons.length === 0? <h3>Cargando...</h3> : pokemons.map(el=> <Pokemon key={el.id} name={el.name} avatar={el.avatar} id={el.id} />)}
        </>
    )
}