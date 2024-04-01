import React, { useEffect, useState } from 'react'
import { StoreIcon } from '../../../public/icons/utilsIcons/storeIcon'
import { useCookies } from 'react-cookie'

interface StorePickupCardProps {
  checked: boolean;
  onChange: () => void;
}

// eslint-disable-next-line no-unused-vars
export const StorePickupCard = ({ checked, onChange }:StorePickupCardProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const [cookies] = useCookies(['OriginCity'])
  const allowedCities = ['Cartagena', 'Barranquilla']
  
  useEffect(() => {
    setIsChecked(allowedCities.includes(cookies.OriginCity))
  }, [cookies.OriginCity])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    // setSelectedCard('storePickup')
    onChange()
  }
  
  return (
    <div className='max-w-[400px] py-4 px-4 mt-10 border-[1px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-shrink-0 w-full'>
      <div className='flex justify-between'>
        <input 
          type="checkbox" 
          name=""
          className='accent-red-custom'
          onChange={handleCheckboxChange}
          checked={checked}
          disabled={!(cookies.OriginCity && allowedCities.includes(cookies.OriginCity))}
        />
        <p className='text-red-custom text-xl font-bold not-italic'>Gratis</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <StoreIcon width={60} height={60}/>
        <p
          className='text-base not-italic font-medium'
        >
            Recogida en tienda
        </p>
      </div>
    </div>
  )
}

