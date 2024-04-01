import React from 'react'
import { DeliveryIcon } from '../../public/icons/utilsIcons/delivery'
import { StoreIcon } from '../../public/icons/utilsIcons/storeIcon'
import { Cart } from 'iconoir-react'

export const DeliveryOptionsCard = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[450px] max-h-[700px] border-[1px] border-stone-300 rounded-xl px-4 py-6 gap-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] xl:mr-2'>
      <p className='text-blue-custom text-2xl not-italic font-semibold'>
        Opciones de entrega
      </p>
      <p className='text-[#353535] text-base not-italic font-normal mx-8'>
        Dependiendo de la ciudad donde te encuentres y la disponibilidad en stock del producto 
        podrás gozar de estas opciones de entrega en nuestros productos:
      </p>
      <div className='flex flex-col gap-4 sm:gap-16 sm:flex sm:flex-row'>
        <p className='flex flex-col-reverse items-center text-black text-base not-italic font-medium'>
          Enviar a domicilio
          <span><DeliveryIcon/></span>
        </p>
        <p className='flex flex-col-reverse items-center text-black text-base not-italic font-medium'>
        Recogida en tienda
          <span><StoreIcon/></span>
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <label 
          className='text-blue-custom text-base not-italic font-medium'
          htmlFor=""
        >
          Departamento
        </label>
        <select 
          className='bg-[#F2F4FE] h-8 w-[250px] border-none rounded-md'
          name="" 
          id="">
          <option value=""></option>
          <option value="">Bolivar</option>
        </select>
        <label 
          className='text-blue-custom text-base not-italic font-medium'
          htmlFor=""
        >
          Ciudad
        </label>
        <select 
          className='bg-[#F2F4FE] h-8 w-[250px] border-none rounded-md'
          name="" 
          id="">
          <option value=""></option>
          <option value="">Cartagena</option>
        </select>
      </div>
      <button className='flex justify-center items-center gap-1 bg-[#48529A] max-w-[350px] text-white text-lg not-italic font-bold py-2 px-6 rounded-lg'>
        Revisar disponibilidad
        <Cart className='w-6 h-6'/>
      </button>
    </div>
  )
}
