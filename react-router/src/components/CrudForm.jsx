import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const initialForm = {
    nombre: "",
    constelacion: "",
    id: null,
  };

  const [form, setForm] = useState(initialForm);

  let navigate = useNavigate();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.constelacion) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
    navigate("/");
  };
  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre..."
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="constelacion"
          placeholder="constelacion..."
          onChange={handleChange}
          value={form.constelacion}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm