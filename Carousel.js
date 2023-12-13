import React from 'react'
import CarouselStyle from '../Carrusel/CarouselStyle.css'
import P from '../images/1_me_3_jamessss.jpg';
import S from '../imagenes/1200px-San-francisco_by_night_Bolivia.jpg';
import T from '../imagenes/1_me_3_jamessss.jpg';
import C from '../imagenes/1_me_5_jamessss.jpg';
import Q from '../imagenes/Centro-Cultural-de-Espana-en-La-Paz_2.jpg';
import S from '../imagenes/el-centro-de-la-cultura-plurinacional-1.jpg';
export const Carousel = () => {
  return (
    <div className='container'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={P} alt="centro1" className='imgcarousel' />
              <div className="carousel-caption d-none d-md-block">
                <h5>centros amplios</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={S} alt="centro2" className='imgcarousel'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>paises con centros culturales</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={T} alt="centro3" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>lugares publicos y comodos</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={C} alt="centro4" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>eventos que nos ofrecen</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={Q} alt="centro5" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>lugares  donde se ubican los centros </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={S} alt="centro6" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>aniversarios de los centros</h5>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Productos</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">salida</span>
          </button>
        </div>

    </div>
  )
}
