import React from 'react'
import { Footer } from '../maquetado/Footer'
import Foto from '../imagenes/foto.jpg'
import CreditosStyle from '../pages/CreditosStyle.css'
export const Creditos = () => {
  return (
    <div className='bodys'>
      <header><h1>Creditos</h1></header>
      <div className='creds'>
      <div className='aside1'>
      <img src={Foto} alt="Foto" className='fotito'/>
      </div>
      <div className="aside2"> 
      <p><h3>  ELVA MARIANA ZEBALLOS HUANCA </h3></p>
      <p><h3>zeballosmariana334@gmail.com</h3></p>
      <p><h3>CI. 13119814</h3></p>
      <p><h3>cel. 61120340</h3></p>
      </div>
      </div>
    <Footer/>
    </div>
  )
}

