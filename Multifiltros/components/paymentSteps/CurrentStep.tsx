import React from 'react'
import CashIcon from '../../public/icons/utilsIcons/cashIcon'
import ShopingCarIcon from '../../public/icons/utilsIcons/shopingCarIcon'
import { BoxIso } from 'iconoir-react'

export const CurrentStep = () => {
  return (
    <div className='w-full mt-8'>
      <div className='flex justify-center items-baseline gap-4'>
        <div className='flex flex-col justify-center items-center max-w-[90px]'>
          <div className='border-2 rounded-full border-blue-custom p-2'>
            <ShopingCarIcon width={18} height={18}/>
          </div>
          <p className='text-black text-xl not-italic font-medium'>tu carrito</p>
        </div>
        <div className='h-[1px] bg-black w-[20%]'/>
        <div className='flex flex-col justify-center items-center'>
          <div className='border-2 bg-red-custom rounded-full p-2'>
            <BoxIso className='text-white'/>
          </div>
          <p className='text-black text-xl not-italic font-medium'>Entrega</p>
        </div>
        <div className='h-[1px] bg-black w-[20%]'/>
        <div className='flex flex-col justify-center items-center'>
          <CashIcon/>
          <p className='text-black text-xl not-italic font-medium'>tu pago</p>
        </div>
      </div>
    </div>
  )
}
