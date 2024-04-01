import React, { useContext, useEffect, useState } from 'react'
import { Counter } from './Counter'
import { Cart, Heart } from 'iconoir-react'
import { KitsResultProps } from './KitsResult'
import Link from 'next/link'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { ProductCardProps } from '../Product/ProductCard'
import { toast } from 'sonner'
import { formatNumber } from '../../helpers/formatNumber'
import { getProductById } from '../../services/api/getProductsById'
import { useCookies } from 'react-cookie'

interface FavoriteProductsProps {
  name: string
  price: number
  image?: string
  alt?: string
  detail?: React.ReactElement | string
  reference?: string
  id: string
}

export const FullKitCard = ({dataKits}:KitsResultProps) => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies()
  // eslint-disable-next-line no-unused-vars
  const {favorite, setFavorite} = useContext(EcommerceContext)
  // eslint-disable-next-line no-unused-vars
  const {cart, setCart} = useContext(EcommerceContext)
  const [isDisabled, setIsDisabled] = useState(false)
  const [inventory, setInventory] = useState(0)
  const [sumQuantity, setSumQuantity] = useState(1)
  const [isBuy, setIsBuy] = useState(false)

  const addToCart = (items: FavoriteProductsProps) => {
    setCart((currItems:any) => {
      const isItemsFound = currItems.find((item:FavoriteProductsProps) => item.id === items.id)
      if (isItemsFound) {
        toast.success('Producto actualizado', {
          duration: 2000,
        })
        return currItems.map((item:any) => {
          if (item.id === items.id) {
            return { ...item, quantity: sumQuantity }
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
        return [...currItems, { id, quantity: sumQuantity, price, title, image }]
      }
    })
  }

  useEffect(() => {
    if(isBuy){
      window.location.href = '/shopingCar'
    }
  }, [isBuy])

  const sum = (itemId: string) =>{
    if(sumQuantity > 0){
      setSumQuantity(sumQuantity+1)
      getProductById(itemId).then((res: any) =>{
        setInventory(res.inventory)
        if(res.inventory-1 === sumQuantity){
          setIsDisabled(true)
        }else{
          setIsDisabled(false)
        }
      }).catch(error => {
        console.error(error)
      })
    }
  }

  const removeItem = () => {
    if(sumQuantity > 1){
      setSumQuantity(sumQuantity-1)
      if(inventory-1 < sumQuantity){
        setIsDisabled(false)
      }
    }
  }

  const showMore = (idProduct: string) =>{
    setCookie('productId', idProduct, {path: '/'})
  }

  const addToFavorite = (items: FavoriteProductsProps) => {
    setFavorite((currItems:any) => {
      const isItemsFound = currItems.find((item:ProductCardProps) => item.id === items.id)
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
        const id = items.id
        const price = items.price
        const title = items.name
        const image = items.image
        toast.success('Producto añadido a favoritos', {
          duration: 2000,
        })
        return [...currItems, { id, quantity: 1, price, title, image }]
      }
    })
  }
  return (
    <div className='mt-8 max-w-[500px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md flex-shrink-0 w-full h-fit'>
      {
        dataKits.filter((it: any) =>(it.extraInfo.product_type === 'full-kit')).map((item: any) =>(
          <div className='flex flex-col sm:flex sm:flex-row gap-2 p-4' key={item.id}>
            <div className='flex flex-col justify-center items-center'>
              <img src={item.image} width={200} height={200} alt="kit completo" title='kit complet' />
              <Link href='/productDescription' target='_blank'>
                <a
                  onClick={() => showMore(item.id)}
                  title='product-description'
                  className='underline text-center'
                >
              Ver detalles
                </a>
              </Link>
            </div>
            <div className='w-full flex flex-col justify-center'>
              <div className='flex justify-between'>
                <p
                  className='text-blue-custom text-2xl not-italic font-bold w-[80%]'
                >
                  {item.name}
                </p>
                <button onClick={() => addToFavorite(item)} className='rounded-full border-[1px] p-1 border-blue-custom w-8 h-8 flex justify-center items-center'>
                  <Heart className='text-red-custom w-8 h-8 hover:fill-red-custom'/>
                </button>
              </div>
              <div>
                <p className='text-red-custom text-sm not-italic font-semibold'>Referencia</p>
                <p className='text-[#353535] text-sm not-italic font-normal'>FC-RSE523-1</p>
                <div className='flex justify-between'>
                  <p className='text-blue-custom text-xl not-italic font-bold'>{formatNumber(item.price)}</p>
                  <Counter id={item.id} addToCart={() => sum(item.id)} isDisabled={isDisabled} quantityPerItem={sumQuantity} removeItem={removeItem}/>
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                  <button onClick={() => {setIsBuy(true); addToCart(item)}} className='bg-red-custom py-2 text-white sm:text-xl not-italic font-bold rounded-md'>Comprar</button>
                  <button onClick={() => addToCart(item)} className='flex justify-center gap-2 bg-blue-custom py-2 text-white sm:text-xl not-italic font-bold rounded-md'>Agregar al carrito <Cart/></button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
