import React from 'react'
import { Link } from 'react-router-dom'
import logito from '../imagenes/logo.jpg'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logito} alt="logito" className='logitofooter' />
      </div>
      <div className="footer-info">
        <p className="footer-name">DONDE  NOS ENCUENTRAN:</p>
        <p className="footer-address">segunda parada del teleferico morado<br/>jardin trasero Carrera de Informatica</p>
        <p className="footer-phone"> informatica@informatica.edu.bo</p>
      </div>
      <div className="footer-autor">
        <p className="footer-autor">AUTOR</p>
        <p className="footer-autor">ELVA MARIANA ZEBALLOS HUANCA</p>
        <p className="footer-autor">zeballosmariana334@gmail.com</p>
      </div>
    </div>

  )
}
