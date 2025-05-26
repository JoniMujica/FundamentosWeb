import React, {useState,useEffect} from 'react';

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState("jon")

    useEffect(() => {
      //console.log("Fase de montaje");
      console.log("Moviendo el scroll");

        const detectarScroll = ()=>setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll)

        return()=> {window.removeEventListener("scroll", detectarScroll)};
    },[scrollY]) //Esto se va a ejecutar solo cuando scrollY sufra cambios (recomendable)

    useEffect(()=>{
        console.log("Fase de montaje");
    },[]) //Si necesito que el componente se renderize solo una vez, dejo el segundo parametro vacio [] -- Se comporta como componentDidMount()
    useEffect(()=>{
        console.log("Fase de actualizacion");
    }) //No tiene 2do atributo = Se comporta como componentDidUpdate() , se renderiza cada que el componente se renderize
    
    useEffect(() => {
        return () => { //al agregar el return con una funcion, estariamos indicando que el componente esta en fase de desmontaje, se comportaria como componentWillUnmount()
          console.log("Fase de desmontaje");
      }
    }, [third])
    
    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador: {scrollY}px</p>
        </>
    )
}