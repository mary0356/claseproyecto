import React from 'react'
import { Footer } from '../maquetado/Footer'
import S from '../imagenes/Centro-Cultural-de-Espana-en-La-Paz_2.jpg'
export const centro6 = () => {
  return (
    <div>
      <h2>fiestas</h2>
      <div className='container'>
        <div className="left-column">
          <header>
          </header>
          <img src={S} className='computadores' alt="centro6" />
        </div>

        <div className="right-column">
          <section>
            <h3>Tendencias y Enfoques Esperados</h3>
            <ul>
              <li><strong>fiesta patrias :</strong> las fiesta son algo que nos representan y nos ensena como hacer mas eventos futuros.</li>
              <li><strong>cierre de lugares por fiesta patrias :</strong> cuando cerran las calles poemos ver decir que son algo de otro mucndo grande y conocer mas </li>
              <li><strong>Conectividad por una fecha:</strong> depende del lugar podemos ver como festejar o ensenar como festejar comom minimo .</li>
              <li><strong>fiestas:</strong>varian en las fechas ambientales o en las fechas donde podemos ver mucho mas </li>
            </ul>
          </section>
          <section>
            <h3>Posibles Desarrollos Futuros</h3>
            <ul>
              <li><strong>Avances en fiestas:</strong> fiestas mas ecologicas mas sanas y mas a la hora donde los jovenes prefieran divertirse sanamente </li>
              <li><strong>Mayor Automatización:</strong>autorizacion para traer mas cosa para una fiesta podemos decir que son algo realmente muy unico.....</li>
              <li><strong>seguridad y mas :</strong> la segurida variaria depende del nivel de los que pongas o se ofrescan a cuidarnos en el momento.</li>
            </ul>
          </section>
          <section>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
