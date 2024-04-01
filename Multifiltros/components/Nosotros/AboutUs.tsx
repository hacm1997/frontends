import React from 'react'
import { SliderAside } from './SliderAside'

function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="self-center flex w-full max-w-[1086px] flex-col mt-12 md:px-5 max-md:max-w-full max-md:mt-10">
        <header className="flex items-stretch gap-3 mt-28 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="bg-red-500 flex w-2 shrink-0 h-[50px] flex-col -ml-0.5 rounded-[50px]" />
          <h1 className="text-blue-950 text-5xl font-bold self-center grow whitespace-nowrap my-auto max-md:text-4xl">
            Quienes somos?
          </h1>
        </header>
        <div className="flex justify-between gap-5 mt-4 self-start items-end max-md:ml-2.5">
          <div className="text-red-500 text-3xl font-semibold grow whitespace-nowrap mt-6">
            Nuestra misión
          </div>
          <img
            loading="lazy"
            src="/icons/utilsIcons/stairup.svg"
            className="aspect-square w-[57px]"
          />
        </div>
        <div className="justify-center text-stone-500 text-justify text-xl self-center max-w-[1428px] mt-5 max-md:max-w-full">
          <span className="font-semibold text-blue-950">
            MULTIFILTROS CARTAGENA SAS
          </span>
          <span className=" text-stone-500"> </span>
          <span className=" text-stone-500">
            es una empresa de producción, venta y comercialización de autopartes
            conformada por un talento humano calificado para garantizar a nuestros
            clientes productos adecuados a las necesidades de cada uno, forjando la
            seguridad y la mejora continua en los procesos y servicios prestados;
            responsabilizándonos en satisfacer las necesidades del consumidor y
            optimizando las ventas por medio de la utilización de productos y
            materiales de calidad y alta rentabilidad.
          </span>
        </div>
        <div className="self-center w-full max-w-[1421px] mt-16 max-md:max-w-full max-md:mt-10">
          <form className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <SliderAside />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <header className="flex items-stretch gap-3 self-start max-md:max-w-full max-md:flex-wrap">
                  <div className="bg-red-500 flex w-2 shrink-0 h-[50px] flex-col rounded-[50px]" />
                  <h1 className="text-blue-950 text-5xl font-bold self-center grow whitespace-nowrap my-auto max-md:text-4xl">
                    Quienes somos?
                  </h1>
                </header>
                <div className="flex items-center gap-5 mt-7 self-start">
                  <div className="text-red-500 text-3xl font-semibold grow whitespace-nowrap my-auto">
                    Nuestra visión
                  </div>
                  <img
                    loading="lazy"
                    src="/icons/utilsIcons/target.svg"
                    className="aspect-square w-[57px]"
                  />
                </div>
                <div className="justify-center text-stone-500 text-justify text-xl mt-4 max-md:max-w-full">
                  <span className="font-semibold text-blue-950">
                    MULTIFILTROS CARTAGENA SAS
                  </span>
                  <span className=" text-stone-500"> </span>
                  <span className=" text-stone-500">
                    es una empresa de producción, venta y comercialización de
                    autopartes conformada por un talento humano calificado para
                    garantizar a nuestros clientes productos adecuados a las
                    necesidades de cada uno, forjando la seguridad y la mejora
                    continua en los procesos y servicios prestados; responsabilizándonos
                    en satisfacer las necesidades del consumidor y optimizando las
                    ventas por medio de la utilización de productos y materiales de
                    calidad y alta rentabilidad.
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="self-center flex items-center gap-3 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10" />
      </div>
    </div>
  )
}

export default AboutUs