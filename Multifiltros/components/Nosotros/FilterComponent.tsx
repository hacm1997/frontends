import React from 'react'

function FilterComponent() {
  return (
    <section className="flex flex-col justify-center items-center my-24">
      <header className="flex flex-col lg:flex-row text-3xl font-bold max-md:max-w-full md:text-6xl">
        <span className="text-blue-custom">Sobre nuestros</span>
        <span className="text-red-custom md:pl-2"> FILTROS FILCART</span> &nbsp;
        <img
          className="self-center aspect-square w-[73px]"
          loading="lazy"
          src="/icons/utilsIcons/filter.svg"
          alt="Logo"
        />
      </header>
      <header className="header">
        <div className="text-blue-custom text-xl max-w-[1056px] mt-8 max-md:max-w-full text-justify">
          <p className="text-stone-500">
            <span className="font-semibold text-blue-950">
            MULTIFILTROS CARTAGENA S.A.S
            </span> Somos una empresa con más de 25 años de experiencia en la industria automotriz. Contamos 
            con la estructura tecnológica para el desarrollo de nuestra propia marca de filtros{' '}
            <span className="font-bold text-red-500">FilCart</span> la cual ha estado posicionada en el mercado en los últimos años.
          </p>
          <br />
          <p className="text-stone-500">
            Gracias a la calidad de nuestro equipo de trabajo, una organización
            bien estructurada, con profesionales en diseño y fabricación
            de filtros y apoyados en nuestros clientes, nos  ha permitido
            seguir manteniéndonos líderes en la fabricación de filtros en toda
            la <span className="font-bold text-blue-950">Costa Colombiana.</span>
          </p>
        </div>
        <div className='flex justify-center mt-14'>
          <img src="/images/nosotros/NuestrasMarcas/image8.png" alt="" />
        </div>
      </header>
    </section>
  )
}

export default FilterComponent
