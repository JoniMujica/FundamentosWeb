import React, {useState} from 'react'

const CrudForm = () => {

    const initialForm = {
        name:"",
        constellation:"",
        id:null
    }

    const [form, setForm] = useState({});

    const handleChange = (e) =>{
        //setForm({...form,[e.target.name]:e.target.value});
        console.log(...form);
        
    } 

    const handleSubmit = (e) =>{

    }

    const handleReset = (e) =>{

    }
    return (
      <>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Nombre...'   onChange={handleChange} value={form.name}/>
            <input type="text" name='constellation' placeholder='constelacion...' onChange={handleChange} value={form.constellation}/>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
      </>
  )
}

export default CrudForm