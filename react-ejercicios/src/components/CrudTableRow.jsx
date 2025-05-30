import React from 'react'

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {

    let {nombre,constelacion,id}=el;
  return (
    <tr>
        <td>{nombre}</td>
        <td>{constelacion}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow