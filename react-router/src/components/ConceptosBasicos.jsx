import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
const ConceptosBasicos = () => {
  return (
    <div>
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