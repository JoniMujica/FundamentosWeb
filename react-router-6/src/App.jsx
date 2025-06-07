import {BrowserRouter as Router, HashRouter,Routes,Route, Navigate} from "react-router"

import './App.css'
import { Home } from './pages/Home'
import { Acerca } from './pages/Acerca'
import { Contacto } from './pages/Contacto'
import { Header } from "./components/Header"
import { Menu } from "./components/Menu"
import { Error404 } from "./components/Error404"
import { Productos } from "./components/Productos"
import { ProductoDetalle } from "./components/ProductoDetalle"
import { useState } from "react"
import { Servicios } from "./pages/Servicios"
import { ServiciosGarantia } from "./pages/ServiciosGarantia"
import { ServiciosLista } from "./pages/ServiciosLista"
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas"
import { ServiciosHome } from "./pages/ServiciosHome"
import { ServicioDetalle } from "./components/ServicioDetalle"

function App() {
  const [productos, setProductos] = useState([{id:1,nombre:"Producto 1",precio:100},
        {id:2,nombre:"Producto 2",precio:400},
        {id:3,nombre:"Producto 3",precio:500},
        {id:4,nombre:"Producto 4",precio:300},
        {id:5,nombre:"Producto 5",precio:700},
        {id:6,nombre:"Producto 6",precio:400},
        {id:7,nombre:"Producto 7",precio:200}]);
        
  const [servicios, setServicios] = useState([{id:1,nombre:"Producto 1",precio:100},
        {id:2,nombre:"Servicio 2",precio:400},
        {id:3,nombre:"Servicio 3",precio:500},
        {id:4,nombre:"Servicio 4",precio:300},
        {id:5,nombre:"Servicio 5",precio:700},
        {id:6,nombre:"Servicio 6",precio:400},
        {id:7,nombre:"Servicio 7",precio:200}]);
  return (
    <>
    <h2>Rutas con BrowserRouter</h2>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/about' element={<Navigate to="/acerca"/>} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />} />
          <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />}/>
            <Route path="garantia" element={<ServiciosGarantia/>}/>
            <Route path="lista" element={<ServiciosLista servicios={servicios} />}/>
            <Route path=":id" element={<>
                <ServiciosLista servicios={servicios}/>
                <ServicioDetalle servicios={servicios}/>
              </>}/>
            <Route path="politicas" element={<ServiciosPoliticas />}/>
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>

      <hr/>
      <h2>Rutas con HashRouter</h2>
      <HashRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/about' element={<Navigate to="/acerca"/>} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />} />
          <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />} />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />}/>
            <Route path="garantia" element={<ServiciosGarantia/>}/>
            <Route path="lista" element={<ServiciosLista servicios={servicios} />}/>
            <Route path=":id" element={<>
                <ServiciosLista servicios={servicios}/>
                <ServicioDetalle servicios={servicios}/>
              </>}/>
            <Route path="politicas" element={<ServiciosPoliticas />}/>
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
