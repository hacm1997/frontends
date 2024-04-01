import React from 'react'
import { Trash } from '../../public/icons/utilsIcons/trash'

export const DeleteProductCard = () => {
  return (
    <div className='ml-16 flex flex-col bg-white rounded-md max-h-[300px] max-w-[400px] px-8 py-2 gap-4 justify-center items-center border-2'>
      <Trash/>
      <p className='text-[#353535] text-xl not-italic font-semibold'>Eliminar articulo</p>
      <p className='text-[#353535] text-base not-italic font-normal text-center'>¿Estás seguro de que quieres eliminar el artículo de tu carrito?</p>
      <button className='w-48 py-2 rounded-md bg-red-custom text-white'>Eliminar</button>
      <button className='w-48 py-2 rounded-md bg-blue-custom text-white'>Cancelar</button>
    </div>
  )
}
