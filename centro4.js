import React from 'react'
import { Footer } from '../maquetado/Footer'
import C from '../imagenes/Las-Aves-3-967x1024.jpg'
export const centro4= () => {
  return (
    <div>
      <h2>embajadores y mas ..</h2>
      <div className='container'>
        <div className="left-column">
          <header>
          </header>
          <img src={C} className='computadores' alt="centro4" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>los embajadores </strong>son representates de los paises con los que decidieron hacer un lugar en un pais degisnado</li>
              <li><strong>mapas y lugares :</strong>los lugares pueden ser designado o puedes ser pedidos con anticipacion ya que este nos es muy complejon .</li>
              <li><strong>obras y videos:</strong> las obras y videos son conocidos por que son culturales hechos solo en sus paises los vidos por q solo haci hacen conocer </li>
              <li><strong>libros :</strong> son libros que ayudan a todas las carreras y puedenllegara ser prestados entre las personas que estan ahi .</li>
            </ul>
          </section>
          <section>
            <h3>Impacto en jovenes</h3>
            <ul>
              <li><strong>redes sociales :</strong> las redes sociales son conocidos para hacer llegar a unpublico mas joven</li>
              <li><strong>Desarrollo de educacion :</strong> podemos decir que la ayuda de la educacion es algo que es muy bien planeado </li>
              <li><strong>Inicio de mas centros:</strong>mas centros seria algo nuevo ya que tendrianque buscar mas delegaciones que quieran hacer su propio centro.</li>
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
