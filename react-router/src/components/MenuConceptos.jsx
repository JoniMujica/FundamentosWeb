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
                <NavLink to="/" className={({isActive})=> isActive? "active":null}>Home</NavLink>
                <NavLink to="/acerca" className={({isActive})=> isActive? "active":null}>Acerca</NavLink>
                <NavLink to="/contacto" className={({isActive})=> isActive? "active":null}>Contacto</NavLink>
            </li>
        </ol>
    </nav>
  )
}

export default MenuConceptos