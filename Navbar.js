import React from 'react'
import { Link } from 'react-router-dom'
import logito from '../imagenes/logo.jpg'
import NavbarStyle from '../navigation/NavbarStyle.css'

export const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <Link to='/src/components/pages/Inicio.js'>
                        <img src={logito} className='App-logo '   alt="central1"/>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to="/src/components/pages/Inicio.js">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro1.js">centro amplio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro2.js">eventos del centro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro3.js">fundacion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro4.js">lugares</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro5.js">imagenes de los centros </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/centro6.js">curiosidades </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Formulario.js">Formulario</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Conclusion.js">informacion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Creditos.js">autores de la pagina </Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
