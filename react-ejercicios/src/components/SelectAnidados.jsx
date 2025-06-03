import React, { useState, useEffect } from "react";

import SelectList from "./SelectList";

const SelectAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
      <h2>Select Anidados</h2>
      <h3>Mexico</h3>
      <SelectList
        title="Provincia"
        url={`https://apis.datos.gob.ar/georef/api/provincias`}
        handleChange={(e) => {
          setState(e.target.value);
          setTown("");
          setSuburb("");
        }}
      />
      {state && (
        <SelectList
          title="Municipio"
          url={`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state}&aplanar=true&campos=estandar&max=500`}
          handleChange={(e) => {
            setTown(e.target.value);
            setSuburb("");
          }}
        />
      )}
      {town && (
        <SelectList
          title="Localidad"
          url={`https://apis.datos.gob.ar/georef/api/localidades?provincia=${state}&municipio=${town}&orden=nombre&aplanar=true&campos=estandar&max=500&exacto=true
`}
          handleChange={(e) => setSuburb(e.target.value)}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectAnidados;
