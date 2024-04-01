import Link from 'next/link'
import { PlantSlider, ServicesSlider} from '../../InfoSliders/sliders'
import { FiltersSliders } from './FiltersSliders'

function Services() {
  return (
    <section className="flex flex-col items-center">
      <div className="self-center flex w-full max-w-[1710px] flex-col items-stretch mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <header className="text-red-500 text-xl font-medium max-w-[772px] lg:ml-36 self-start max-md:max-w-full">
            Siempre estamos innovando, ofreciendo el mejor servicio a nuestros clientes
        </header>
        <div className="flex gap-3 lg:ml-32 mt-3.5 self-start items-start max-md:max-w-full">
          <div className="bg-red-500 flex w-2 shrink-0 h-[50px] flex-col rounded-[50px]" />
          <h1 className="text-red-500 text-xl lg:text-5xl font-bold grow shrink basis-auto mt-1.5 max-md:max-w-full">
            <span className="text-blue-950">En </span>
            <span className="text-red-500">Multifiltros </span>
            <span className="text-blue-950"> encuentras todo lo que buscas <br /> en servicios y productos </span>
          </h1>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 flex flex-col mt-20 px-20 py-12 bg-white rounded-[15px]  border-solid border-[#696969] shadow-[0px_4px_10px_1px_#69696980] max-md:px-5">
        <header className="text-blue-950 text-3xl font-semibold max-w-[288px] ml-28 mt-14 self-start max-md:ml-2.5 max-md:mt-10">
        Planta de Producción
        </header>
        <div className="bg-red-500 flex w-[182px] shrink-0 h-[3px] flex-col ml-28 mt-4 rounded-[50px] self-start max-md:ml-2.5 mb-8" />
        <FiltersSliders initialSlide={1} slider={PlantSlider} />

        <header className="text-blue-950 text-3xl font-semibold ml-20 mt-36 max-md:ml-2.5 max-md:mt-10">
        Servicentro
        </header>
        <div className="bg-red-500 flex w-[76px] shrink-0 h-[3px] flex-col ml-20 mt-4 rounded-[50px] self-start max-md:ml-2.5 mb-8" />
        <FiltersSliders initialSlide={1} slider={ServicesSlider} />
        <Link
          href='/schedule'
        >
          <p
            className="text-blue-950 text-xl font-semibold underline mt-1 mb-1.5 max-md:mr-2 text-right cursor-pointer"
          >
         Ver mas servicios
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Services