import React, { useState } from 'react'
import styles from './plan.module.css'
import FormWspComponent from './modals/formWsp.component'

const Plan = () => {
  const plan =
  {
    id:'1',
    name:'PLAN E-COMMERCE FULL',
    price:'499000',
    priceYear: '4999900',
    priceMonth:'499000',
    features:['Investigación para el posicionamiento digital',
      'Diseño user journey',
      'Diseño gráfico específico para la marca. 100% personalizado',
      'Plataforma de e-commerce' ,
      'Módulo de manejo de productos',
      ' Módulo de manejo de clientes',
      'Módulo de manejo de envíos',
      'Módulo de manejo de facturación', 
      'Carrito de compras',
      'Integración pasarela de pago con ePayco',
      'Integración WhatsApp',
      'Sitio web con Tecnología Amazon' ,
      'Tecnologías que no te limitan',
      'Dominio (Ejemplo.com) y Hosting Gratis' ,
      'Carga rápida, tu sitio carga en 3 segundos o menos.' ,
      'Sin plantillas ni plugins', 
      'Diseño UX /  UI por profesionales', 
      'Optimización SEO en motores de búsqueda' ,
      'Idioma en Ingles y español',
      'Copywriting y análisis de Keywords para posicionamiento',
      'Acompañamiento a 360°',
      'Soporte y mantenimiento gratis por 6 meses después de la entrega.'
    ]
  }
  const [isOpen, setIsOpen] = useState(false)
  const [infoModal, setInfoModal] = useState({})
  const handlerButton = (plan: any) => {
    setInfoModal(plan)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  return (    
    <>
      <div className="mt-14 mb-20">
        <div className="mt-10 flex justify-center items-center">
          <div className={`${styles.rectangle} w-[90%]`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className='relative w-full flex justify-end items-end'>
              <img
                loading="lazy"
                src="/images/e-commerce/shop.webp"
                alt="shop"
                title="shop"
                className='absolute -top-20 md:top-0 w-[76px] h-[76px] md:w-[142px] md:h-[142px]'
              />
            </div>
            <div className="flex flex-col justify-center items-center w-[90%] md:w-full">
              <h3 className="text-3xl md:text-5xl font-bold text-white text-center">¡Eleva tu Negocio! <br /><br /> <span className='text-[#EF5A0F] font-semibold'>{plan.name}</span></h3>
              <h3 className="text-3xl md:text-5xl font-bold text-white text-center pt-5">$ {new Intl.NumberFormat().format(Number(plan.priceMonth))} x mes</h3>
              <p>o {new Intl.NumberFormat().format(Number(plan.priceYear))} Anual</p>
              <p className='text-xl md:text-3xl font-medium text-white w-[90%] md:w-[500px] h-[90px] text-center pt-5'>La Inversión que asegura tu <span className='text-[#EF5A0F] font-semibold'>Éxito. ¡Actúa Ahora</span> y garantiza  tu triunfo empresarial!</p>
              <div className={`${styles.buton} relative flex justify-center items-center pt-28 md:pt-16 pb-7 w-[100%]`}>
                <button className="w-[100%] md:w-[373px] p-4 rounded-3xl bg-gradient-to-r from-orange-500 to-purple-800" onClick={() => handlerButton(plan)}>
                  <a href="#prices" title="shopHome" className="text-lg md:text-2xl font-semibold">Comienza ya</a>
                </button>
                <img
                  loading="lazy"
                  src="/images/e-commerce/arrow.webp"
                  alt="arrow"
                  title="arrow"
                  className="absolute top-28 left-[68%] md:top-20 md:left-[57%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormWspComponent isOpen ={isOpen} setIsOpen={setIsOpen} infoModal={infoModal}/>
    </>
  )
}
export default Plan