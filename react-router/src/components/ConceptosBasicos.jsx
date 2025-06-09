import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

const ConceptosBasicos = () => {
  return (
    <div>
        <h2>ConceptosBasicos</h2>
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <h3>Home</h3>
                        <p>Bienvenidos al tema de las Rutas en React</p>
                    </>
                    } />
                <Route path='/acerca' element={<h3>Acerca</h3>}/>
                <Route path='/contacto' element={<h3>contacto</h3>} />
            </Routes>
        </Router>
    </div>
  )
}

export default ConceptosBasicos