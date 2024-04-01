import { Cart, Heart } from 'iconoir-react'
import React, { useContext, useEffect, useState } from 'react'
import { formatNumber } from '../../helpers/formatNumber'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { useCookies } from 'react-cookie'
import { toast } from 'sonner'

export interface ProductCardProps {
  id: string
  title: string
  price: number
  image?: string
  alt?: string
  detail?: React.ReactElement | string
  reference?: string
  inventory?: number
  extraInfo?: any
  price_discount?: number
  isNew?: boolean
}

export const ProductCard = ({ id, detail, price, title, alt, image, inventory, extraInfo, price_discount }: ProductCardProps) => {
  const {favorite, setFavorite} = useContext(EcommerceContext)
  const [cookies, setCookie] = useCookies()
  const {cart, setCart} = useContext(EcommerceContext)
  const [isBuy, setIsBuy] = useState(false)

  const addToCart = () => {
    setCart((currItems:any) => {
      const isItemsFound = currItems.find((item:any) => item.id === id)
      if (isItemsFound) {
        toast.warning('Este producto ya se encuentra en tu carrito',{
          duration: 2000,
        })
        return currItems.map((item:any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        toast.success('Producto añadido al carrito',{
          duration: 2000,
        })
        const selectPrice = price_discount ? price_discount : price
        return [...currItems, { id, quantity: 1, price: selectPrice, title, image }]
      }
    })
  }

  useEffect(() => {
    if(isBuy){
      window.location.href = '/shopingCar'
    }
  }, [isBuy])

  const description = (idProduct: string) =>{
    setCookie('productId', idProduct, {path: '/'})
    window.location.href = '/productDescription'
  }

  const addToFavorite = () => {
    setFavorite((currItems:any) => {
      const isItemsFound = currItems.find((item:ProductCardProps) => item.id === id)
      if (isItemsFound) {
        toast.warning('Este producto ya se encuentra en tu lista de favoritos', {
          duration: 2000,
        })
        return currItems.map((item:any) => {
          return item
        })
      } else {
        toast.success('Producto añadido a favoritos', {
          duration: 2000,
        })
        return [...currItems, { id, title, price, price_discount, image, alt, detail }]
      }
    })
  }

  useEffect(() => {
    if(!cookies.favorites){
      setCookie('favorites', [], {path: '/', maxAge: 3600 * 2000})
    }else{
      const favoriteArray = JSON.stringify(favorite)
      setCookie('favorites', favoriteArray, {path: '/', maxAge: 3600 * 2000})
    }
  }, [favorite])

  useEffect(() => {
    if(!cookies.cart){
      setCookie('cart', [], {path: '/', maxAge: 3600 * 2000})
    }else{
      const cartArray = JSON.stringify(cart)
      setCookie('cart', cartArray, {path: '/', maxAge: 3600 * 2000})
    }
  }, [cart])

  return (
    <div className="max-w-[16rem] h-[484px] rounded-md border border-gray-100 hover:shadow-shadow-custom transition" >
      <a className="group relative block overflow-hidden rounded-md">
        <span className="absolute start-3 top-4 whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs font-medium">
          {detail}
        </span>
        <button 
          className="absolute end-5 top-5 rounded-full border border-blue-custom bg-white p-1.5 
          hover:scale-105 duration-150" 
          onClick={() => addToFavorite()}
        >
          <Heart className='hover:scale-105 duration-150  text-red-500 h-4 w-4 hover:fill-red-custom' strokeWidth={3} />
        </button>

        <div className="p-3 cursor-pointer">
          {
            extraInfo && Boolean(extraInfo.isNew) === true ? 
              <p className='bg-green-400 text-black text-sm mb-2 absolute ml-2 px-2 rounded-md mt-2'>
            New
              </p>
              :
              <p className='bg-red-custom text-white text-sm mb-2 absolute ml-2 px-2 rounded-md mt-2'>
                {extraInfo && extraInfo.discount && price_discount ? `${extraInfo.discount.percent}%` : null}
              </p> 
          }
          <a onClick={() => description(id)}>
            <img
              src={image}
              alt={alt}
              className="h-64 w-full rounded object-cover sm:h-72" />
            <h3 title={title} className="h-10 mb-1 text-base font-semibold text-gray-700 mt-4">
              {title}
            </h3>
          </a>
          <div className="relative flex flex-col">
            <div className='mt-2 gap-4 flex items-center'>
              {price_discount ? 
                <div className='flex flex-col leading-[2px]'>
                  <span className="text-xs font-semibold text-blue-custom line-through">
                    {formatNumber(price)}
                  </span>
                  <span className="text-base font-semibold text-red-custom">{formatNumber(price_discount)}</span> 
                </div>
                :  <span className="text-base font-semibold text-blue-custom">
                  {formatNumber(price)}
                </span>
              }
              <button
                onClick={() =>{setIsBuy(true) ; addToCart()}}
                disabled={extraInfo && extraInfo.have_inventory && !inventory}
                className='bg-red-custom text-white px-8 py-2 rounded-xl shadow-[0px_3px_8px_0px_#EB4648] hover:bg-[#D83335]'>Comprar</button>
            </div>
            <div className="mt-3 flex flex-col items-end">
              {
                extraInfo && extraInfo.have_inventory && !inventory ?
                  <label className='text-red-custom not-italic font-semibold mb-20'>Producto no disponible</label> 
                  :
                  <button
                    onClick={() => addToCart()}
                    className="flex justify-center items-center w-full rounded text-blue-custom bg-white hover:bg-blue-custom hover:text-white 
                    hover:scale-[1.02] p-3 text-sm font-semibold duration-150 gap-x-3">
                    Añadir al carrito
                    <Cart className='h-4 w-4' strokeWidth={2.5} />
                  </button>
              }
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
