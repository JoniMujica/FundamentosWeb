import { Link, Outlet } from "react-router"

export function Servicios(){
  return(
    <>
      <h2>Servicios!!</h2>
      <nav className="menu">
      <Link to="/servicios">Inicio</Link>
      <Link to="/servicios/lista">Lista</Link>
      <Link to="/servicios/garantia">Garantia</Link>
      <Link to="/servicios/politicas">Politicas</Link>
      </nav>
      <Outlet />
    </>
  )
}