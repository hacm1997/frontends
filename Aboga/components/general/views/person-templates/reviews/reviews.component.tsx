/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../reviews/reviews.module.css';


const ReviewsComponent = () => {
  const settings = {
    accessibility:true,
    
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='w-3/4 m-auto mb-10 mt-10 '>
       <h2 className='font-black text-4xl font-gotamedium text-[#173A83] text-center mb-5'>Esto dicen nuestros clientes:</h2>
       <p className='lg:text-lg text-center'>En <span className='font-bold'>Google Business</span></p>
      <div className='mt-2'>
      <Slider {...settings}>
        {data.map((d)=> (
          <div className='border-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[450px] bg-white text-black rounded-xl mb-6 mt-6 '>
            <div className='h-54 rounded-t-xl flex justify-center items-center pt-4'>
              <img src={d.img} alt="" className=' h-28 w-28 rounded-full ' />
            </div>

            <div className='flex flex-col justify-center items-center gap-4 p-4'> 
              <h3 className='text-xl font-semibold text-[#173A83]'>{d.name}</h3>
              <h3></h3>
              <p className='text-justify px-4 overflow-y-scroll italic h-52'>{`"`}{d.review}{`"`}</p>
              <div className=''>
              <i className='bx bxs-star  text-[#ffbc0b]' ></i>
              <i className='bx bxs-star bx-tada text-[#ffbc0b]' ></i>
              <i className='bx bxs-star  text-[#ffbc0b]' ></i>
              <i className='bx bxs-star bx-tada text-[#ffbc0b]' ></i>
              <i className='bx bxs-star  text-[#ffbc0b]' ></i>
              </div>
              

            </div>

          </div>
          
        ))}
        </Slider>
      </div>
      <div className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-around gap-5 md:gap-0 mt-10'>
        <div className={styles.general_button}>

      <a href="https://www.google.com/search?q=aboga.co&sca_esv=594470120&rlz=1C1ALOY_esCO1043CO1043&sxsrf=AM9HkKmUL4q8JQwap_IadNYAVDewZ0iTqw%3A1703876729306&ei=eRiPZYOhEvekqtsP4IqOKA&oq=abo&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2FibyoCCAAyBBAjGCcyChAjGIAEGIoFGCcyChAjGIAEGIoFGCcyEBAuGIAEGIoFGEMYxwEY0QMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAuGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGENIhhdQtwNY1wlwAngBkAEAmAGXAaABwAOqAQMwLjO4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICExAuGIAEGIoFGEMYyAMYsAPYAQHCAhYQLhiABBiKBRhDGLEDGIMBGMcBGNEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBixAxiDAcICBRAAGIAEwgILEC4YgAQYxwEY0QPCAhEQLhiABBixAxiDARjHARivAcICDhAuGIAEGLEDGMcBGK8BwgINEAAYgAQYigUYQxixA-IDBBgAIEHiAwUSATEgQIgGAZAGDLoGBAgBGAg&sclient=gws-wiz-serp&lqi=CghhYm9nYS5jb0jPpIL_7bmAgAhaEBAAEAEYACIIYWJvZ2EgY2-SAQZsYXd5ZXKqAT4QASoMIghhYm9nYSBjbygOMh4QASIa3ZuUKap_lt8CDnMDIDhh9NhCQMwy_tDoY34yDBACIghhYm9nYSBjbw#ip=1&lkt=LocalPoiReviews&rlimm=4961179178813751355" target='_blank'>
        <button className='bg-[#0071d3] text-white text-lg px-6 py-1 rounded-xl'>Ver más comentarios</button>
      </a>
        </div>

        <div className={styles.general_button}>
      <a href="https://www.google.com/search?q=aboga.co&sca_esv=594470120&rlz=1C1ALOY_esCO1043CO1043&sxsrf=AM9HkKmUL4q8JQwap_IadNYAVDewZ0iTqw%3A1703876729306&ei=eRiPZYOhEvekqtsP4IqOKA&oq=abo&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2FibyoCCAAyBBAjGCcyChAjGIAEGIoFGCcyChAjGIAEGIoFGCcyEBAuGIAEGIoFGEMYxwEY0QMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAuGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGENIhhdQtwNY1wlwAngBkAEAmAGXAaABwAOqAQMwLjO4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICExAuGIAEGIoFGEMYyAMYsAPYAQHCAhYQLhiABBiKBRhDGLEDGIMBGMcBGNEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBixAxiDAcICBRAAGIAEwgILEC4YgAQYxwEY0QPCAhEQLhiABBixAxiDARjHARivAcICDhAuGIAEGLEDGMcBGK8BwgINEAAYgAQYigUYQxixA-IDBBgAIEHiAwUSATEgQIgGAZAGDLoGBAgBGAg&sclient=gws-wiz-serp&lqi=CghhYm9nYS5jb0jPpIL_7bmAgAhaEBAAEAEYACIIYWJvZ2EgY2-SAQZsYXd5ZXKqAT4QASoMIghhYm9nYSBjbygOMh4QASIa3ZuUKap_lt8CDnMDIDhh9NhCQMwy_tDoY34yDBACIghhYm9nYSBjbw#ip=1&lkt=LocalPoiReviews&lrd=0x8ef625209702c183:0x44d9a62d7c42003b,3,,,,&rlimm=4961179178813751355" target='_blank'>
      <button className='bg-[#0071d3] text-white text-lg px-6 py-1 rounded-xl'>Déjanos tu comentario</button>
      </a>

        </div>

      </div>
    </div>
  )
}
const data = [
  {
    name: `Angélica Simarra`,
    img: `/images/mujer1.png`,
    review: `Super agradecida con el servicio que me brindó el equipo de Asesorías Jurídicas S.A.S. Mostraron un profundo conocimiento en el trámite de prescripción del impuesto predial.

    Su asesoramiento fue crucial para la resolución exitosa de mi situación, y lograron ganar el caso, anulando varias facturas vencidas que me preocupaban.
    
    Recomiendo encarecidamente Asesorías Jurídicas S.A.S a cualquier persona que busque servicios legales de calidad ya que en este proceso se mostraron como un equipo confiable y altamente competente.`
  },
  {
    name: `Madelin Pérez`,
    img: `/images/mujer2.png`,
    review: `Profesionales muy serios y comprometidos, debo resaltar que en nuestro caso ellos se enfocaron mas en resolver el probelma que en sus honorarios a diferencia de otros abogados que he consultado antes, Excelente servicios. Kudos para los senores Juan y Osman.`
  },
  {
    name: `Lenin Martínez`,
    img: `/images/hombre1.png`,
    review: `Recibí asesoría oportuna y de calidad, son un equipo completo, muy profesionales y amables. Se nota que hacen las cosas con pasión y compromiso los recomiendo ampliamente.`
  },
  {
    name: `Omar Arnedo`,
    img: `/images/hombre2.png`,
    review: `Excelente servicio, muy profesionales y educados. Completamente recomendado.`
  },
  {
    name: `Gissela Arias`,
    img: `/images/mujer1.png`,
    review: `Recomendado por confiabilidad y confidencialidad.`
  },
  
];

export default ReviewsComponent

