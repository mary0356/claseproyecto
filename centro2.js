import React from 'react'
import { Footer } from '../maquetado/Footer'
import S from '../imagenes/1_me_5_jamessss.jpg'
export const centro2 = () => {
  return (
    <div>
      <h2>centros conocidos</h2>
      <div className='container'>
        <div className="left-column">
          <header>
          </header>
          <img src={S} className='computadores' alt="centro2" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>Transistores:</strong> podemos decir que las tranciciones son buenas para lograr cambios para mejorar los ambientes ya entregados .</li>
              <li><strong>Reducciones:</strong> para programas ya sea para ninos y adolecentes en distintos lugares o fechas .</li>
              <li><strong>fotografias :</strong> las fotografias osn tomadas para la paginas web q manda todos .</li>
              <li><strong>hsitorias de los eventos:</strong> las historias de los eventos pueden ser gracias a los adolecentes que muestran interes y que son muy buenos compartiendo fotografias </li>
            </ul>
          </section>
          <section>
            <h3>Impacto en los jovenes</h3>
            <ul>
              <li><strong>Avance con donaciones :</strong> las donaciones pueden ser seguna lo q ellos mismo quieran dar ya sea ropa o ya sea libros objetos o comida .</li>
              <li><strong>Expansión de lugares de centros:</strong> la expancion puede ser muy interesante ya q al mismo tiempo podemos ver que los parametros son muy intensos.</li>
              <li><strong>Inicio de membresiaspara jovenes :</strong> la menbresia puede ser vital ya que con el mismo viene los veneficios por el mismo podemos decir wue son algo unico que pueden usar ellos .</li>
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
