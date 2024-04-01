import { Cart } from 'iconoir-react'
import React, { useContext } from 'react'
import { formatNumber } from '../../helpers/formatNumber'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { toast } from 'sonner'

export interface KitsResultProps {
  dataKits: JSON[]
}

interface FavoriteProductsProps {
  name: string
  price: number
  image?: string
  alt?: string
  detail?: React.ReactElement | string
  reference?: string
  id: string
}

export const KitsResult = ({dataKits}: KitsResultProps) => {
  // eslint-disable-next-line no-unused-vars
  const {cart, setCart} = useContext(EcommerceContext)

  const addToCart = (items: FavoriteProductsProps) => {
    setCart((currItems:any) => {
      const isItemsFound = currItems.find((item:FavoriteProductsProps) => item.id === items.id)
      if (isItemsFound) {
        toast.warning('Este producto ya se encuentra en tu carrito', {
          duration: 2000,
        })
        return currItems.map((item:any) => {
          if (item.id === items.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        const id = items.id
        const price = items.price
        const title = items.name
        const image = items.image
        toast.success('Producto añadido al carrito', {
          duration: 2000,
        })
        return [...currItems, { id, quantity: 1, price, title, image }]
      }
    })
  }

  return (
    <div className='mt-8 max-w-[600px] flex flex-col gap-4 flex-shrink-0 w-full'>
      <div className='hidden sm:flex bg-blue-custom rounded-lg flex-row justify-around py-2 text-center'>
        <p className='pl-8 text-white text-2xl not-italic font-semibold'>Filtro</p>
        <p className='pl-10  text-white text-2xl not-italic font-semibold'>Tipo</p>
        <p className='pl-8 text-white text-2xl not-italic font-semibold hidden sm:block'>Precio</p>
        <p className=' text-white text-2xl not-italic font-semibold'></p>
      </div>
      {
        dataKits.filter((it: any) =>(it.extraInfo.product_type != 'full-kit')).map((item: any) =>(
          <div className='bg-white rounded-lg py-2 sm:py-0 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center' key={item.id}>
            <span className='block sm:hidden text-blue-custom text-xl not-italic font-semibold'>Filtro</span><img src={item.image} width={100} height={50} alt='filtro aire motor' title='filtro aire motor'/>
            <div className='flex flex-col sm:flex sm:flex-row justify-center items-center'>
              <span className='block sm:hidden text-blue-custom text-xl not-italic font-semibold'>Tipo</span>
              <p className='text-[#353535] text-xl not-italic font-medium w-[150px] text-center'>{item.extraInfo.product_type}</p>
              <p className='text-blue-custom text-xl not-italic font-semibold'>{formatNumber(item.price)}</p>
            </div>
            <button onClick={() => addToCart(item)}>
              <Cart className='text-red-custom'/>
            </button>
          </div>
        ))
      }
    </div>
  )
}
