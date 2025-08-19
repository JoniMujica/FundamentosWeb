import React, {useState,useEffect} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import { helperHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Error404 from "../pages/Error404";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helperHttp(),
    url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      //console.log(res)
      if (!res.err) {
        setDb(res);
        setError(null);
        //console.log(res.name);
        //console.log(res.code);
        //console.log(res.stack);
        //console.log(res);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now().toString();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(entpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb([...db,res])
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el registro con el id ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id != id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return (
    <div>
      <article className="grid-1-2">
        <Router>
          <header>
            <h2>CRUD API con Rutas</h2>
            <nav>
              <NavLink to="/" className={(e) => (e.isActive ? "active" : null)}>
                Santos
              </NavLink>
              <NavLink
                to="/agregar"
                className={(e) => (e.isActive ? "active" : null)}>
                Agregar
              </NavLink>
            </nav>
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading && <Loader />}
                  {error && (
                    <Message
                      msg={`Error ${error.status}: ${error.statusText}`}
                      bgColor="#dc3545"
                    />
                  )}
                  {db && (
                    <CrudTable
                      data={db}
                      deleteData={deleteData}
                      setDataToEdit={setDataToEdit}
                    />
                  )}
                </>
              }
            />
            <Route
              path="/agregar"
              element={
                <>
                  <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                </>
              }
            />
            <Route
              path="/editar/:id"
              element={
                <>
                  <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                </>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </article>
    </div>
  );
};

export default CrudApi;