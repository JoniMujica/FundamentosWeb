import { Link } from "react-router"

export function Productos({productos}){
    return(
        <section>
            <h1>Productos</h1>
            <ul>
                {productos.map(el=> (
                        <li key={el.id}>
                            <Link to={`/productos/${el.id}`}>{el.nombre}</Link>
                        </li>
                )
                    )}
            </ul>
        </section>
    )
}