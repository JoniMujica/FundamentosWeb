import React from 'react'
import { Link, Outlet, useParams, useResolvedPath } from 'react-router-dom'

export const Topic = () =>{
    let {topic} = useParams();
    console.log(topic);

    return(
        <div>
            <h4>{topic}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestiae non laudantium accusamus, sed, dolorem dolorum pariatur est ipsam veritatis doloribus in. Veniam expedita omnis illo. Fugiat reiciendis porro aliquam!
            </p>
        </div>
    )
}

export const ReactTopics = () => {
    let {pathname} = useResolvedPath();
    console.log(pathname);
    
    //"patch" nos permite construir rutas relativas 

    /*
        PASO DE LA V5 A LA V6-7:

        No es necesario generar rutas relativas para asignarle a los Link, React Router v6 sobre entiende que sus hijos, arrancan desde la ubicacion donde se encuentra el padre, por ejemplo:

        <Route path="/react" element={<ReactTopics /> />

        ReactTopics es el padre, que tiene como ruta URLWEB/react, sus hijos pueden arrancar desde "/,/algo,/:parametro" , pero significa que la url completa seria URLWEB/react/algo...
    
    */
    
  return (
    <div>
        <h2>Temas de react</h2>
        <ul>
            <li>
                <Link to="jsx">JSX</Link>
            </li>
            <li>
                <Link to="props">Props</Link>
            </li>
            <li>
                <Link to="estado">Estado</Link>
            </li>
            <li>
                <Link to="componentes">Componentes</Link>
            </li>
        </ul>
        {/* Aca definimos con <Outlet />, donde se va a printar los hijos del componente (o ruta padre) definidos en BrowserRouter*/}
        <Outlet />
    </div>
  )
}
