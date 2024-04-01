import React from 'react'

export const TecnicalSheetTable = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex md:flex-row gap-4 xl:ml-4'>
      {/* <div className='flex flex-col max-w-[500px] text-center'>
        <p className='text-white text-xl not-italic font-bold bg-blue-custom py-2'>FC-RSE523-1</p>
        <div className='flex flex-col-reverse sm:flex sm:flex-row justify-center items-center w-full'>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex gap-1 items-center'>
              <p className='bg-[#F2F4FE] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>Diámetro externo</p>
              <p className='bg-[#F2F4FE] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>180</p>
            </div>
            <div className='flex gap-1 items-center'>
              <p className='bg-[#FFE9E9] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>Diámetro interno</p>
              <p className='bg-[#FFE9E9] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>180</p>
            </div>
            <div className='flex gap-1 items-center'>
              <p className='bg-[#F2F4FE] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>Alto</p>
              <p className='bg-[#F2F4FE] h-[100px] w-1/2 sm:w-[100px] text-center flex items-center justify-center'>246/233</p>
            </div>
          </div>
          <div>
            <img 
              className='max-w-[295px]'
              src="/images/productDescription/image 63.png" 
              alt="image" 
            />
          </div>
        </div>
        <p className='text-white bg-red-custom text-lg not-italic font-semibold py-2'>Aplicaciones</p>
        <p className='text-white bg-blue-custom text-lg not-italic font-semibold py-2'>FILTRO DE AIRE KIA K2700 / K3000S</p>
      </div> */}
      <div className='flex flex-col justify-baseline items-center'>
        <p className='text-red-custom text-lg not-italic font-semibold'>Ver tabla de equivalencia</p>
        <p className='text-[#696969] text-base not-italic font-normal sm:mt-4'>Puedes también buscar por nuestra tabla de equivalencia el mismo productos en nuestra web pero de otras marcas y referencias</p>
        <a href='/Catalogo Ordenado.pdf' target='_blank'>
          <img
            className='sm:mt-4 cursor-pointer' 
            src="/images/productDescription/tabla-equivalencias.png" 
            alt="tabla de equivalencia" />
        </a>
      </div>
    </div>
  )
}
