import React from 'react'
import ButtonComponent from '../../button/button'

const WeAre = () => {
  return (
    <>
      <div id='formulario'>
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
      <aside className='w-full mt-16 1xl:mt-4 text-center 1xl:text-start' >
        <section className='w-full flex flex-col 1xl:flex 1xl:flex-row gap-4 1xl:gap-0' >
          <div className='1xl:w-6/12 1xl:pl-32 flex flex-col items-center lg:items-start'>
            <h1 className='text-5xl 1xl:text-7xl text-[#4900FC] not-italic font-black mb-8 1xl:mb-4 'id='formulario'>SOMOS OWNLAND</h1>
            <p className='text-[#041D33] text-3xl 1xl:text-4xl font-black 1xl:w-9/12 mb-8 1xl:mb-4 mx-4 1xl:mx-0'>Nuestro desafío es acompañarte en el viaje hacia tu cuidado personal</p>
            <a className='flex flex-col items-center justify-center bg-[#041D33]  text-[#041D33] text-base font-black w-40 h-10' 
              href="https://api.whatsapp.com/send?phone=573155514590&text=Hola!%F0%9F%98%80%20Me%20gustaria%20conocer%20mas%20%20%F0%9F%8E%BD%F0%9F%91%95" 
              target='_blank'
              title='contacto'>
              <p className='text-white '>CONOCENOS</p>
            </a>
          </div>

          <div  className='bg-[#4900FC] flex flex-col 1xl:flex 1xl:flex-row justify-center items-center 1xl:h-80 1xl:w-6/12'>
            <img className='w-80 h-96 ' src='/images/weare/atleta.webp' alt='atletla' title='atleta'/>
            <p className='text-white text-base 1xl:w-6/12 mx-4 1xl:mx-0'>
            Te motivamos a construir tu mejor versión a través de acciones que te inspiren, y a lucirla con orgullo 
            vistiendo prendas personalizadas y versátiles que están a la vanguardia del estilo del hombre moderno.
            </p>
          </div>
        </section>

        <section className='md:flex pt-12 w-full gap-10 lg:gap-0 px-4'>
          <div className='md:h-full md:w-[50%] flex justify-center'>
            <img className='w-7/12' src="/images/weare/atleta2.webp" alt="atleta2" title='atleta' />
          </div>
          <div className='md:w-[50%] pt-4 lg:pt-32 pr-2'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-black leading-none text-[#041D33] text-center md:text-start 1xl:w-9/12'>
            La disciplina es el puente entre tus objetivos y tus logros.
             Aquí, te ayudamos a construir tu mejor versión, paso a paso, con prendas que te inspiran a seguir adelante.
            </p>
          </div>
        </section>
      
      </aside>
    </>
  )
}

export default WeAre