import { Heart } from 'iconoir-react'
import React, { useContext, useState } from 'react'
import { SideBar } from '../UtilComponents/SideBar'
import { FavoriteProductsCard } from '../UtilComponents/FavoriteProductsCard'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

export interface FavoriteProductsProps {
  title: string
  price: number
  image?: string
  alt?: string
  detail?: React.ReactElement | string
  reference?: string
  id: string
}

export const FavoriteProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {favorite} = useContext(EcommerceContext)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className=''>
      <button onClick={toggleSidebar} className='border-blue-custom bg-red-custom hover:scale-125 duration-300 rounded-full w-16 h-16 flex justify-center items-center fixed top-[300px] left-4 z-30'>
        <Heart className='w-16 h-8 text-white'/>
        <p
          className='text-white bg-blue-custom absolute top-[-3px] right-[-4px] rounded-full w-6 h-6' 
        >{favorite.length}</p>
      </button>
      {sidebarOpen && <SideBar onClose={toggleSidebar} 
        component={<FavoriteProductsCard />}/>}
    </div>
  )
}
