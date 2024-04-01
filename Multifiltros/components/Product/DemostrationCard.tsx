import React from 'react'
// import { MultifiltrosIcon } from '../../public/icons/utilsIcons/multifiltrosIcon'
import { formatNumber } from '../../helpers/formatNumber'

interface DemostrationCardProps {
  title: string
  image: string
  alt: string
  price: number
}

export const DemostrationCard = ({title, image, alt, price}:DemostrationCardProps) => {
  return (
    <div className="max-w-[16rem] rounded-md border border-gray-100 hover:shadow-shadow-custom transition h-full">
      <a className="group relative block overflow-hidden rounded-md">
        <span className="absolute start-3 top-4 whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs font-medium">
          <img src='/images/logoMultifiltros.svg' alt='logo multifiltros'/>
        </span>
        <div className="p-3">
          <img
            src={image}
            alt={alt}
            className="h-64 w-full rounded object-cover sm:h-72" />
          <div className="relative flex flex-col pt-4">
             
            <h3 title={title} className="h-10 mb-1 text-base font-semibold text-gray-700">
              {title}
            </h3>
            <div className='mt-2 gap-4 flex items-center'>
              <div className='flex flex-col leading-[2px]'>
                <span className="text-lg font-bold text-blue-custom">
                  {formatNumber(price)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
