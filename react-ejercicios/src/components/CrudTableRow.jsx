import React from 'react'

const CrudTableRow = ({el}) => {
  return (
    <tr>
        <td>{el.nombre}</td>
        <td>{el.constelacion}</td>
        <td><button>Editar</button><button>Eliminar</button></td>
    </tr>
  )
}

export default CrudTableRow