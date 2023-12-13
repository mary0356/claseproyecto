import React from 'react'
import { Footer } from '../maquetado/Footer'

import P from '../images/1_me_3_jamessss.jpg'
export const centro1 = () => {
  return (
    <div className='mother'>
        <h2>eventos de los centros culturales </h2>
        <div className='container'>
          <div class="left-column">
              <img src={P} className='computadores'  alt="centro1"/>
          </div>

          <div class="right-column">
          <section>
                  <h3>CENTRO DE CULTURAS</h3>
                  <ul>
                      <li><strong>personal de trabajo:</strong>Los directores de centros culturales gestionan las operaciones de un centro cultural, organizan y promueven actividades y actos culturales, dirigen al personal, y tienen como objetivo fomentar la inclusión general de programas culturales en la comunidad..</li>
                      <li><strong>cuidados:</strong>Los magros presupuestos públicos impiden la producción, circulación y disfrute de bienes y espacios culturales y educativos por las grandes mayorías.</li>
                      <li><strong>Tamaño y lugar de los centros :</strong> Se designa centro cultural o establecimiento de cultura, y en ocasiones centro cultural para ancianos comunitarios, al lugar en una comunidad destinado a mantener actividades que promueven la cultura entre sus habitantes.</li>
                      <li><strong>libros donados :</strong>Movilizar a los colaboradores para la salvaguardia del patrimonio cultural inmaterial ayuda a la UNESCO a fortalecer el alcance e impacto de sus programas.</li>
                  </ul>
              </section>
          <section>
                  <h3>Impacto Histórico y sus complusiones </h3>
                  <ul>
                      <li><strong>Avances de los eventos :</strong> Los eventos culturales son eventos diseñados para el entretenimiento y disfrute de un público más o menos amplio. Son acontecimientos de cierta importancia</li>
                      <li><strong>imagenes:</strong> la difusión, formación, capacitación, investigación, organización y apoyo a la creación artística, dictando talleres en diferentes áreas artísticas como son danza, teatro y narración oral, música, artes plásticas, literatura.</li>
                      <li><strong> Desarrollos Futuros para mejorar:</strong> Los eventos educativos o académicos son un conjunto de actividades de carácter profesional, artístico o técnico que implica algún tipo de enseñanza o capacitación.</li>
                  </ul>
              </section>
              <section>
                  <h3>enbajadores de los centros </h3>
                  <ul>
                      <li><strong>lista de los representantes:</strong> Introducción de los embajadores que han sido supervisores en sus distintos centros culturales.</li>
                      <li><strong>de donde son las embajadas:</strong> las embajadas son escogidas con los respectivos paises donde estan deacuerdo que se manejen en sus paises .</li>
                  </ul>
              </section>
          </div>
      </div>

        <Footer/>
    </div>
  )
}
