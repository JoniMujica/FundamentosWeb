import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces html (No recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}>
            Home
          </NavLink>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? "active" : null)}>
            Acerca
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "active" : null)}>
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/usuario/JoniMujica">JoniMujica</Link>
          <Link to="/usuario/Vero">Vero</Link>
        </li>
        <li>
          <span>Parametros de consulta</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas</span>
          <Link to="/react">React</Link>
        </li>
      </ol>
    </nav>
  );
}

export default MenuConceptos