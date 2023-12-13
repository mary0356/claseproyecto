import React from 'react'
import { Carousel } from '../Carrusel/Carousel'
import { Footer } from '../maquetado/Footer'
import InicioStyle from '../pages/InicioStyle.css'
import evol from '../imagenes/1_me_5_jamessss.jpg'
export const Inicio = () => {
  return (
    <div >
      <h1>centros culturales</h1>
        <Carousel />
        <div className='container'>
          <div className="leftc">
            <img src={evol} alt="evol" className='evol'/>
            <p>el centro cultural de las demas eventos podemos decir que son algo que nunca se ve en todos lados  <strong>central1</strong>, mientras se desarrollan estos eventos podemos decir que es algo inesperado cuando se nos dice que es una idea de los centros culturales<strong>central2</strong> los centros mas conocidos aqui en bolivia pueden ser de el centro de espana y mas .</p>
            <p>Con la <strong>central3</strong>,  <strong>central4</strong>podemos decir que cuando son las inauguraciones son algo que nos cuentan como eventos  <strong>central5</strong> podemos hablar de como de las festividades que nos prsentan este tipode centros con distintos paises </p>
            <p>En constante diversion, se anticipa una <strong>central6</strong> por ultimo poemos decir que en los eventos infantiles o de adolecentes que organiza los centros son segun a los oaises que estan ahi ya como por ejemplo la embajada de argentina colombia brasil mexico y mas etc.</p>
          </div>

          <div className="rightc">
            <p><strong>embajadores :</strong> Son espacios de encuentro de articulación de procesos sociales y culturales que posibilitan la inclusión de la población con el fin de diseñar las políticas, posibilitar los derechos</p>
            <p><strong>eventos :</strong> Espectáculos de malabarismo, de magia, de danza, etc… son espectáculos de calle que se pueden definir como eventos culturales y que están cada vez más presentes en nuestro día a día..</p>
            <p><strong>fietas :</strong> Cada tipo de evento requiere un espacio físico adecuado a sus características, una determinada implementación técnica, una estrategia de difusión determinada..</p>
            <p><strong>lugares :</strong> Hay diferentes tipos y eventos que se pueden clasificar como eventos culturales y que están muy presentes en la actualidad. Tales como:

</p>
            <p><strong>donaciones :</strong> Exposiciones principalmente relacionadas con el arte: pintura, escultura, música, etc… </p>

          </div>
      </div> 
      <Footer/>
    </div>
  )
}
