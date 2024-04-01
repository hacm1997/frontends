import React from 'react'
import { DeliveryIcon } from '../../../public/icons/utilsIcons/delivery'

interface HomeDeliveryCardProps {
  checked: boolean;
  onChange: () => void;
}

export const HomeDeliveryCard = ({checked, onChange}: HomeDeliveryCardProps) => {
  return (
    <div className='max-w-[400px] py-4 px-4 mt-10 border-[1px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-shrink-0 w-full'>
      <input 
        type="checkbox" 
        name=""
        className='accent-red-custom'
        checked={checked}
        onChange={onChange}
      />
      <div className='flex flex-col justify-center items-center'>
        <DeliveryIcon width={60} height={60}/>
        <p
          className='text-base not-italic font-medium'
        >
          Enviar a domicilio
        </p>
      </div>
    </div>
  )
}