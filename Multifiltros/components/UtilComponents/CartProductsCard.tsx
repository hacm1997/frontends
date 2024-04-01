import { Heart } from 'iconoir-react'
import { Trash } from '../../public/icons/utilsIcons/trash'
import { Counter } from './Counter'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useCookies } from 'react-cookie'
import { ProductCardProps } from '../Product/ProductCard'
import { getProductById } from '../../services/api/getProductsById'
import { formatNumber } from '../../helpers/formatNumber'

export const CartProductsCard = ({title, alt, image,id, price, extraInfo}: ProductCardProps) => { 
  // eslint-disable-next-line no-unused-vars
  const {cart, setCart} = useContext(EcommerceContext)
  const {favorite, setFavorite} = useContext(EcommerceContext)
  const [cookies, setCookie] = useCookies()
  const [isDisabled, setIsDisabled] = useState(false)
  const [inventory, setInventory] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const parseExtraInfo = extraInfo && JSON.parse(extraInfo)

  const addToFavorite = () => {
    setFavorite((currItems:any) => {
      const isItemsFound = currItems.find((item:ProductCardProps) => item.id === id)
      if (isItemsFound) {
        toast.warning('Este producto ya se encuentra en tu lista de favoritos',{
          duration: 2000,
        })
        return currItems.map((item:any) => {
          return item
        })
      } else {
        toast.success('Producto añadido a favoritos',{
          duration: 2000,
        })
        return [...currItems, { id, title, image, alt, price, extraInfo }]
      }
    })
  }

  const getQuantityById = (id:any) => {
    return cart.find((item:any) => item.id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(id)

  const addToCart = () => {
    getProductById(id).then((res: any) =>{
      setInventory(res.inventory)
      if(res.inventory-1 === quantityPerItem){
        setIsDisabled(true)
      }
    }).catch(error => {
      console.error(error)
    })
    
    setCart((currItems:any) => {
      const isItemsFound = currItems.find((item:any) => item.id === id)
      if (isItemsFound) {
        return currItems.map((item:any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...currItems, { id, quantity: 1, price }]
      }
    })

  }

  const removeItem = (id:any) => {
    if(inventory-1 < quantityPerItem){
      setIsDisabled(false)
    }
    setCart((currItems:any) => {
      if (currItems.find((item:any) => item.id === id)?.quantity === 1) {
        return currItems.filter((item:any) => item.id !== id)
      } else {
        return currItems.map((item:any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeAll = (id: any) => {
    setCart((currItems: any) => {
      // Filtrar los elementos que no coincidan con el ID proporcionado
      const updatedCart = currItems.filter((item: any) => item.id !== id)
  
      return updatedCart
    })
  
    // Restablecer el estado isDisabled si es necesario
    setIsDisabled(false)
  }

  useEffect(() => {
    if(!cookies.favorites){
      setCookie('favorites', [], {path: '/', maxAge: 3600 * 2000})
    }else{
      const favoriteArray = JSON.stringify(favorite)
      setCookie('favorites', favoriteArray, {path: '/', maxAge: 3600 * 2000})
    }
  }, [favorite])

  return (
    <div className='max-w-[500px] px-2'>
      
      <div className='flex flex-col mx-4'>
        <div className='flex justify-center items-center gap-4'>
          <label htmlFor="" className='flex justify-center items-center gap-4 text-2xl not-italic font-medium'>
            {title}
          </label>
          <button 
            onClick={() => addToFavorite()}
            className="rounded-full border border-blue-custom bg-white p-1.5 
          duration-150 flex justify-center items-center h-8">
            <Heart className='text-red-500 h-4 w-4' strokeWidth={3}/>
          </button>
          <button onClick={() => removeAll(id)}>
            <Trash/>
          </button>
        </div>
        <p className='text-red-custom pl-8  text-base not-italic font-semibold left-4'>Referencia</p>
        <p className='text-[#353535] pl-8  tex-base not-italic font-normal leading-4'></p>
        <div className='flex flex-col items-baseline gap-2 sm:flex sm:flex-row'>
          <img className='w-[300px]' src={image} alt={alt} />
          <Counter addToCart={addToCart} removeItem={removeItem} id={id} quantityPerItem={quantityPerItem} isDisabled={isDisabled}/>
        </div>
        <p className='text-[#353535] not-italic font-semibold'>subtotal : <span className='text-blue-custom font-bold'>{formatNumber(price * quantityPerItem)}</span></p>
      </div>
      
    </div>
  )
}
