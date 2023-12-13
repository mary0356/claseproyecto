import React from 'react'
import { Footer } from '../maquetado/Footer'
import T from '../imagenes/1_me_5_jamessss.jpg'
export const centro3 = () => {
  return (
    <div>
      <h2>eventos del centro cultural</h2>
      <div className='container'>
        <div className="left-column">
          <header>
          </header>
          <img src={TercGen} className='computadores' alt="centro3" />
        </div>

        <div className="right-column">
          <section>
            <h3>eventos</h3>
            <ul>
              <li><strong>para ninos </strong> para ninos son es algo que son interactivos los hace moverse cansarse y esatr feliz a socializar con muchos ninos mas .</li>
              <li><strong>adolecentes :</strong> para adolecentes es decir para socializar conocer o incluso guiar en un futuro pocible o escoger una carrera .</li>
              <li><strong>para todo publico:</strong> Mejora el rendimiento de interactuar ya sea mayor menor o incluso padres que te comentan que son muy buenos en lo que hacen aconsejar y servir como guia .</li>
              <li><strong>bazares:</strong>los bazares son usados como comando para aquellos que venden cosas hechas por ellos mismo o incluso emprender mas .</li>
            </ul>
          </section>
          <section>
            <h3>Impacto Histórico</h3>
            <ul>
              <li><strong>los centros xomo en si:</strong> los centros son algo de otro mundo son algo muy lindo y para distraerse .</li>
              <li><strong>Desarrollo de Redes:</strong> desarrollo de redes para promocionar sus eventos en los cuales ganan mas publico para conocer mas cerntros culturales.</li>
              <li><strong>personas o consejeros:</strong> los consejeros pueden ser mucha aayuda y luego de saber que ayudan en los mismos centros tambien podemos dercir que sirven como refugio.</li>
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
