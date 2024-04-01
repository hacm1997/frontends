import React, { useState } from 'react'

export const Collapse = () => {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => setExpanded(!expanded)

  return (
    <section className="grid place-items-center sm:p-16 mt-8 base:mt-0">
      <label>
        <input
          className="peer/showLabel absolute scale-0"
          type="checkbox"
          checked={expanded}
          onChange={() => {}}
        />
        <span className={'block max-w-[750px] overflow-hidden rounded-lg px-4 py-0 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-auto'}>
          <h3 className="flex mt-8 h-14 justify-center items-center text-blue-custom text-2xl not-italic font-bold text-center" onClick={handleToggle}>
          Notas sobre el montaje
          </h3>
          <ul className='list-none text-[#696969] text-xs sm:text-lg not-italic font-medium leading-5 flex flex-col gap-2 mb-4'>
            <li className='before:content-["\2022"] flex gap-1'> No intente lavar ni limpiar con aire a presión el filtro de aire usado.</li>
            <li className='before:content-["\2022"] flex gap-1'><span>Seleccione e instale el filtro nuevo según las instrucciones indicadas por <span className='text-blue-custom font-bold'>Multifiltros.</span></span></li>
            {expanded && (
              <>
                <li className='before:content-["\2022"] flex gap-1'> No cambie el filtro de aire con el motor de su vehículo encendido.</li>
                <li className='before:content-["\2022"] flex gap-1'> Al cambiar el filtro asegúrese de que los conductos del aire que van al carburador estén libres de partículas.</li>
                <li className='before:content-["\2022"] flex gap-1'> En caso de que el vehículo transite por vías altamente polvorientas, se recomienda que el filtro sea cambiado con mayor frecuencia de lo sugerido.</li>
                <li className='before:content-["\2022"] flex gap-1'> Al cerrar la tapa y la carcasa, preste atención a que no quede ningún espacio entre estos, ya que si esto llegara a suceder, puede entrar aire sin filtrar en las cámaras de combustión.</li>
                <li className='before:content-["\2022"] flex gap-1'> Antes de instalar el filtro nuevo, procure limpiar la tapa y carcasa. Se recomienda limpiarlo con un medio suave y húmedo. No utilizar cepillos que puedan agitar las partículas de suciedad</li>
                <li className='before:content-["\2022"] flex gap-1'> Tenga en cuenta que en algunos diseños de motor es necesario la utilización de dos filtros Externo e Interno o Primero y segundo, que garantizan la funcionalidad y limpieza del aire para la correcta combustión.</li>
              </>
            )}
          </ul>
          <a
            className="flex justify-end cursor-pointer text-red-custom font-medium not-italic text-sm px-6 py-3 hover:underline outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={handleToggle}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </a>
        </span>
      </label>
    </section>
  )
}
