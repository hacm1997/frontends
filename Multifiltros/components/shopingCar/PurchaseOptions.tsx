import React from 'react'
import ShopingCarIcon from '../../public/icons/utilsIcons/shopingCarIcon'
import { ChekedIcon } from '../../public/icons/utilsIcons/newIcon'
import CashIcon from '../../public/icons/utilsIcons/cashIcon'

export const PurchaseOptions = () => {
  return (
    <div className='mt-8 w-full'>
      <div className='mt-6 flex justify-center'>
        <div className='flex flex-col justify-center items-center gap-1'>
          <h2 className='text-blue-custom text-2xl sm:text-5xl not-italic font-extrabold text-center flex items-center gap-2'>Mi carrito de compra <ShopingCarIcon/></h2>
          <div className='flex justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center max-w-[90px]'>
              <ChekedIcon/>
              <p className='text-black text-xl not-italic font-medium'>tu carrito</p>
            </div>
            <div className='h-[1px] bg-black sm:w-[300px] md:w-[500px] lg:w-[680px]'/>
            <div className='flex flex-col justify-center items-center'>
              <CashIcon/>
              <p className='text-black text-xl not-italic font-medium'>tu pago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
