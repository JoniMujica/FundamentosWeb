import React from 'react'
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { nombre, constelacion, id } = el;

  let navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`/editar/${id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{constelacion}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow