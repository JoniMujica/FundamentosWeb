import React, { useState } from 'react';


/*
export default function Formularios(){

    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("El formuilario se ha enviado!")
    } 

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nonbre</label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />

                <p>Elije tu sabor JS favorito</p>
                <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={(e)=> setSabor(e.target.value)} defaultChecked/>
                <label htmlFor="vanilla">vanilla</label>
                <input type="radio" name="sabor" id="react" value="react" onChange={(e)=> setSabor(e.target.value)} />
                <label htmlFor="react">react</label>
                <input type="radio" name="sabor" id="angular" value="angular" onChange={(e)=> setSabor(e.target.value)} />
                <label htmlFor="angular">angular</label>
                <input type="radio" name="sabor" id="vue" value="vue" onChange={(e)=> setSabor(e.target.value)} />
                <label htmlFor="vue">vue</label>
                <input type="radio" name="sabor" id="svelte" value="svelte" onChange={(e)=> setSabor(e.target.value)} />
                <label htmlFor="svelte">svelte</label>

                <p>Elije tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={(e)=> setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>

                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id='terminos' name="terminos" onChange={(e)=> setTerminos(e.target.checked)} />

                <input type="submit" value="Enviar" />

            </form>
        </>
    )
}*/


export default function Formularios(){

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleCheked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("El formuilario se ha enviado!")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nonbre</label>
                <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange} />

                <p>Elije tu sabor JS favorito</p>
                <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={handleChange} defaultChecked/>
                <label htmlFor="vanilla">vanilla</label>
                <input type="radio" name="sabor" id="react" value="react" onChange={handleChange} />
                <label htmlFor="react">react</label>
                <input type="radio" name="sabor" id="angular" value="angular" onChange={handleChange} />
                <label htmlFor="angular">angular</label>
                <input type="radio" name="sabor" id="vue" value="vue" onChange={handleChange} />
                <label htmlFor="vue">vue</label>
                <input type="radio" name="sabor" id="svelte" value="svelte" onChange={handleChange} />
                <label htmlFor="svelte">svelte</label>

                <p>Elije tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>

                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id='terminos' name="terminos" onChange={handleCheked} />

                <input type="submit" value="Enviar" />

            </form>
        </>
    )
}