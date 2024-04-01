import React, { useState } from 'react'

export const ModalProductsDescription = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div className=''>
      <div className='border-[1px] max-w-[750px] px-10 py-8 flex flex-col mx-auto mt-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl'>
        <div className='flex justify-center'>
          <p className='text-blue-custom text-2xl not-italic font-bold'>Notas sobre el montaje</p>
        </div>
        <div className='mt-8'>
          <ul className='list-none text-[#696969] text-lg not-italic font-medium leading-5 flex flex-col gap-2'>
            <li className='before:content-["\2022"] flex gap-1'> No intente lavar ni limpiar con aire a presión el filtro de aire usado.</li>
            <li className='before:content-["\2022"] flex gap-1'><span>Seleccione e instale el filtro nuevo según las instrucciones indicadas por <span className='text-blue-custom font-bold'>Multifiltros.</span></span></li>
          </ul>
        </div>
        <div className='mt-8 flex justify-end'>
          <a
            className=" cursor-pointer text-red-custom font-medium not-italic text-lg px-6 py-3 hover:underline outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setShowModal(true)}
          >
        Ver mas
          </a>
        </div>
      </div>
      {showModal ? (
        <div className='flex justify-center items-center content-center'>
          <div
            className="pt-40 base:pt-16 justify-center items-center content-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 rounded-t">
                  <h3 className="text-2xl text-center text-blue-custom font-semibold not-italic">
                  Notas sobre el montaje
                  </h3>
                </div>
                {/*body*/}
                <div className="relative py-6 px-6 sm:px-10 flex-auto">
                  <ul className='list-none text-[#696969] text-xs sm:text-lg not-italic font-medium leading-5 flex flex-col gap-2'>
                    <li className='before:content-["\2022"] flex gap-1'> No intente lavar ni limpiar con aire a presión el filtro de aire usado.</li>
                    <li className='before:content-["\2022"] flex gap-1'><span>Seleccione e instale el filtro nuevo según las instrucciones indicadas por <span className='text-blue-custom font-bold'>Multifiltros.</span></span></li>
                    <li className='before:content-["\2022"] flex gap-1'> No cambie el filtro de aire con el motor de su vehículo encendido.</li>
                    <li className='before:content-["\2022"] flex gap-1'> Al cambiar el filtro asegúrese de que los conductos del aire que van al carburador estén libres de partículas.</li>
                    <li className='before:content-["\2022"] flex gap-1'> En caso de que el vehículo transite por vías altamente polvorientas, se recomienda que el filtro sea cambiado con mayor frecuencia de lo sugerido.</li>
                    <li className='before:content-["\2022"] flex gap-1'> Al cerrarla tapa y la carcasa ponga atención a que no quede ningún espacio entre estos, ya que si esto llegará a suceder puede entrar aire sin filtrar en las cámaras de combustión.</li>
                    <li className='before:content-["\2022"] flex gap-1'> Antes de instalar el filtro nuevo, procure limpiar la tapa y carcasa. Se recomienda limpiarlo con un medio suave y húmedo. No utilizar cepillos que puedan agitar las partículas de suciedad</li>
                    <li className='before:content-["\2022"] flex gap-1'> Tenga en cuenta que en algunos diseños de motor es necesario la utilización de dos filtros Externo e Interno o Primerio y secundario, que garantizan la funcionalidad y limpieza del aire para la correcta combustión.</li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    ver menos
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  )
}
