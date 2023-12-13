import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../maquetado/Footer'
import ConclusionStyle from '../pages/ConclusionStyle.css'
export const Conclusion = () => {
  return (
    <div>
        <h1>CONCLUSION</h1>

            <div className='contenedor'>
          <div className='texti'>
          <p>
          Es un evento donde un grupo en su totalidad discute un tema, hecho o problema, conducido por un coordinador. Los foros puedes ser de carácter público, privado y protegido. Generalmente los foros constituyen la parte final de simposios o mesas redondas.
          </p>
          <p>
          Evento donde se exponen diferentes situaciones de un tema general y/o específico, y además se llega a una decisión o propuesta. Evento generalmente organizado por una sola empresa, con una duración mínima de dos días y constituido por un grupo de 50 a 400 personas.
          </p>
          <p>Evento especializado que tiene naturaleza técnica y académica cuyo objetivo es realizar un estudio profundo de determinada materia y cuentan con la participación de especialistas. Es un evento constituido por, al menos, 50 participantes.

</p>
          <h2>Botones</h2>
          </div>
          <div className='botoncitos'>
            
            <Link to='/centro1.js'>
              <button className='boton'>centro.</button>
            </Link>
            <Link to='/centro2.js'>
              <button className='boton'>eventos.</button>
            </Link>
            <Link to='/centro3.js'>
              <button className='boton'>embajadores.</button>
            </Link>
            <Link to='/centro4.js'>
              <button className='boton'>lugares.</button>
            </Link>
            <Link to='/centro5.js'>
              <button className='boton'>fiestas .</button>
            </Link>
            <Link to='/centro6.js'>
              <button className='boton'>donaciones .</button>
            </Link>
          </div>

        </div>
        <Footer/>
    </div>
  )
}
