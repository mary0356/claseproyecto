import React from 'react'
import { Footer } from '../maquetado/Footer'
import Q from '../imagenes/el-centro-de-la-cultura-plurinacional-1.jpg'
export const centro5 = () => {
  return (
    <div>
      <h2>conclusiones </h2>
      <div className='container'>
        <div className="left-column">
          <header>
          </header>
          <img src={Q} className='computadores' alt="centro5" />
        </div>

        <div className="right-column">
          <section>
            <h3>conclusiones para......</h3>
            <ul>
              <li><strong>ayudas:</strong> podemos decir que se necesita de mucha ayuda en la cual podemos decir como se hacen campanas</li>
              <li><strong>Proyectos:</strong>los proyectos son algo que son aprobados mediante una junta de accionistas </li>
              <li><strong>patrimonios:</strong> lospatrimonios son dejados por las historia o epoca y mas </li>
              <li><strong>conecciones  Globales:</strong> Auge de la conectividad global a través de Internet o atravz de intercambios para que conoscan mucho mas .</li>
            </ul>
          </section>
          <section>
            <h3>conclusiones</h3>
            <ul>
              <li><strong>Desarrollo de programas :</strong> Avances significativos en la capacidad de las máquinas para aprender y realizar tareas complejas.</li>
              <li><strong>intercambios:</strong> los intercambios son para perosnas que quieren conocer mas del tema ya que el mismo pueden adrir programs donde los ande a otro lado </li>
              <li><strong>continuaciones :</strong> las continuaciones nos hablas de fechas futuras en donde nos hablan de muchas cosas .</li>
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
