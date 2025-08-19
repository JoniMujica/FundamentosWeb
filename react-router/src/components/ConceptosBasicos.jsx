import React from 'react'
import {
  HashRouter,
  Navigate,
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import { Topic, ReactTopics } from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </HashRouter>
      <h2>ConceptosBasicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          {/* Re-modificacion del la v5 a la v6-7*/}
          {/*En este caso no es necesario agregar "/react/*" ya que estamos pasando parametros, si asi lo hiciera, concatenaria los parametros */}
          <Route
            path="/react"
            element={
              <>
                <h4>Elije un tema de react</h4>
                <ReactTopics />
              </>
            }>
            {/* Aca mencionamos todas las subrutas que va a tener ReactTopics, pero para poder renderizarlo, necesitamos del componente <Outlet /> , dependiendo donde se inserte, se imprimira los datos del los elementos hijos declarados (en este caso el componente <Topic /> pasando parametros) */}
            <Route path=":topic" element={<Topic />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <>
                <PrivateRoute redirectTo="/login">
                  <Dashboard />
                </PrivateRoute>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>ConceptosBasicos</h2>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <h3>Home</h3>
//                 <p>Bienvenidos al tema de las Rutas en React</p>
//               </>
//             }
//           />
//           <Route path="/acerca" element={<Acerca />} />
//           <Route path="/contacto" element={<Contacto />} />
//         <Route
//             path="/contacto"
//             children={
//               <>
//                 <Acerca />
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Excepturi eveniet est autem aliquid delectus inventore esse
//                   blanditiis deleniti dolor rerum, suscipit reiciendis ipsa?
//                   Magni expedita, mollitia distinctio doloribus dolores vitae!
//                 </p>
//               </>
//             }
//           /> *
//         </Routes>
//       </Router>
//     </div>
//   );
// };

export default ConceptosBasicos