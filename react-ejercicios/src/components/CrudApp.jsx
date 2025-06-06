import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
const initialDb = [
    {
      id: "1",
      nombre: "Seiya",
      constelacion: "Pegaso"
    },
    {
      id: "2",
      nombre: "Shiryu",
      constelacion: "Dragón"
    },
    {
      id: "3",
      nombre: "Hyoga",
      constelacion: "Cisne"
    },
    {
      nombre: "Shun",
      constelacion: "Andrómeda",
      id: "4"
    },
    {
      id: "5",
      nombre: "Ikki",
      constelacion: "Fenix"
    }
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) =>{
      //console.log(data);
      data.id = Date.now();
      setDb([...db,data]);
    }
    const updateData = (data) =>{
      let newData = db.map(el => el.id === data.id? data:el)
      setDb(newData);
    }
    const deleteData = (id) =>{
      let isDelete = confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`);
      if(isDelete){
        let newData = db.filter(el=> el.id != id)
        setDb(newData);
      }else{
        return;
      }
    }
  return (
    <div>
        <h2>Crud App</h2>
        <article className="grid-1-2">
          <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
          <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>

        </article>
        <table></table>
    </div>
  )
}

export default CrudApp