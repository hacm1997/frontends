import React, { useContext, useEffect } from 'react'
import { CircleIcon } from '../../public/icons/utilsIcons/circleIcon'
import { Trash } from '../../public/icons/utilsIcons/trash'
import { Cart, Heart,  } from 'iconoir-react'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { useCookies } from 'react-cookie'
import { toast } from 'sonner'
import { FavoriteProductsProps } from '../favoriteProducts/FavoriteProducts'
import { formatNumber } from '../../helpers/formatNumber'

export const FavoriteProductsCard = () => {
  const {favorite, setFavorite} = useContext(EcommerceContext)
  const [cookies, setCookie] = useCookies()
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
        const title = items.title
        const image = items.image
        toast.success('Producto añadido al carrito', {
          duration: 2000,
        })
        return [...currItems, { id, quantity: 1, price, title, image }]
      }
    })
  }

  const buy = (idProduct: string) =>{
    setCookie('productId', idProduct, {path: '/'})
    window.location.href = '/productDescription'
  }

  const removeItem = (id:string) => {
    setFavorite((currItems:any) => {
      if (currItems.find((item:any) => item.id === id)) {
        return currItems.filter((item:any) => item.id !== id)
      } else {
        return currItems.map((item:any) => { 
          return item  
        })
      }
    })
  }

  useEffect(() => {
    if(!cookies.cart){
      setCookie('cart', [], {path: '/', maxAge: 3600 * 2000})
    }else{
      const cartArray = JSON.stringify(cart)
      setCookie('cart', cartArray, {path: '/', maxAge: 3600 * 2000})
    }
  }, [cart])
  
  return (
    <div className='flex flex-col gap-4 mb-8'>
      <label
        className='flex justify-center gap-2  items-center text-red-custom text-xl not-italic font-semibold mb-8'
        htmlFor=""
      >
        <label className='rounded-full border-[1px] border-blue-custom py-2 px-2'>
          <Heart fill='#EB4648' className='w-6 h-6'/>
        </label>
        Mis favoritos
      </label>

      {Array.isArray(favorite) ? favorite.map((item:FavoriteProductsProps, index: number) => (
        <div className='flex flex-col md:flex-row ml-4' key={index}>
          <div className='flex-shrink-0'>
            <img
              className='w-40 h-32 bg-cover'
              src={item.image}
              alt={item.alt}
            />
          </div>
          <div className='flex flex-col flex-grow pl-4' >
            <label className='text-[#353535] text-base not-italic font-semibold w-[80%]' htmlFor="">
              {item.title}
            </label>
            <label className='text-red-custom text-sm font-semibold not-italic flex flex-col' htmlFor="">
          Referencia
              <label className='text-sm text-[#353535] not-italic font-normal' htmlFor="">{item.reference}</label>
            </label>
            <div className='flex items-center gap-2'>
              <label className='text-black text-sm not-italic font-semibold flex flex-row items-center' htmlFor="">
                <CircleIcon style='mb-2' width={30} height={30}/> Subtotal
              </label>
              <label className='text-blue-custom text-xl not-italic font-bold flex gap-2' htmlFor="">
                {formatNumber(item.price)} <button onClick={() => removeItem(item.id)}><Trash width={25} height={25}/></button>
              </label>
            </div>
            <div className='flex gap-2'>
              <button className='text-white text-base not-italic font-medium bg-red-custom py-1 px-8 rounded-lg' onClick={() => buy(item.id)} >Pagar</button>
              <button className='text-white text-base not-italic font-medium bg-blue-custom py-1 px-4 flex items-center gap-2 rounded-lg' onClick={() => addToCart(item)}>
                <Cart className='h-4 w-4' strokeWidth={2.5} />Carrito
              </button>
            </div>
          </div>
        </div>
      )) 
        : null}
    </div>
  )
}
