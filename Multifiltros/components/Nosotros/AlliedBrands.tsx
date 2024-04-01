import React from 'react'

const AlliedBrands = () => {
  return (
    <div>

      <section className='flex flex-col items-center justify-center'>
        <h2 className='text-center font-extrabold text-6xl text-[#040F61]'>
          Marcas aliadas de multi<span className='text-red-custom'>filtros</span>
        </h2>
        <img className='w-[80%]' src="/images/nosotros/NuestrasMarcas/ejemplo.png" alt="" />
      </section>
      <section>
        <h2 className='text-center font-bold text-6xl text-[#040F61] pb-9'>
        Sobre nuestros <span className='text-red-custom'>FILTROS FILCART</span>
        </h2>
        <p className='text-2xl text-[#696969] xl:px-96 text-justify font-normal'>
          <span className='text-[#040F61] font-bold'>MULTIFILTROS CARTAGENA SAS</span> Somos una empresa con más 25 años de experiencia
en la industria automotriz, contamos con la estructura tecnológica para el
desarrollo
de nuestra propia marca de filtros <span className='text-red-custom font-bold'>FilCart</span> la cual ha estado posicionada
en el mercado 
en los últimos años.
        </p>
        <br />
        <p className='text-2xl text-[#696969] xl:px-96 text-justify'>
Gracias a la calidad de nuestro equipo de trabajo, una organización bien
estructurada, 
con profesionales en diseño y fabricación de filtros y apoyados en
nuestros clientes, nos
ha permitido seguir manteniéndonos lideres en la
fabricación de filtros en toda la  <span className='text-[#040F61] font-bold'>Costa Colombiana.</span>
        </p>
        <div className='flex justify-center pt-7'>
          <img src="/images/nosotros/NuestrasMarcas/image8.png" alt="" />
        </div>
      </section>
      <section className='flex justify-center pt-10'>
        <h2 className='text-5xl'>3er slider</h2>
      </section>
    </div>
  )
}

export default AlliedBrands