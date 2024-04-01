import React, { useContext, useEffect, useState } from 'react'
import { Counter } from './Counter'
import SavePurchaseIcon from '../../public/icons/utilsIcons/savePurchaseIcon'
import WarrantyIcon from '../../public/icons/utilsIcons/warrantyIcon'
import MasterCard from '../../public/icons/utilsIcons/masterCard'
import AmericanExpress from '../../public/icons/utilsIcons/americanExpress'
import Visa from '../../public/icons/utilsIcons/visa'
import DinersClubInternational from '../../public/icons/utilsIcons/dinersClubInternational'
import { product } from '../productDescription/Gallery'
import { formatNumber } from '../../helpers/formatNumber'
import { toast } from 'sonner'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

interface props{
  productDetails: product
}

export const DescriptionBuyCard = ({productDetails}: props) => {
  // eslint-disable-next-line no-unused-vars
  const {cart, setCart} = useContext(EcommerceContext)
  const [isDisabled, setIsDisabled] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [inventory, setInventory] = useState(0)
  const [sumQuantity, setSumQuantity] = useState(1)
  const [isBuy, setIsBuy] = useState(false)

  const addToCart = (items: product) => {
    setCart((currItems:any) => {
      const isItemsFound = currItems.find((item:product) => item.id === items.id)
      if (isItemsFound) {
        toast.success('Este producto ya se encuentra en tu carrito', {
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
        const price_discount = items.price_discount
        const title = items.name
        const image = items.image
        toast.success('Producto añadido al carrito', {
          duration: 2000,
        })
        const selectPrice = price_discount ? price_discount : price
        return [...currItems, { id, quantity: sumQuantity, price: selectPrice, title, image }]
      }
    })
  }

  useEffect(() => {
    if(isBuy){
      window.location.href = '/shopingCar'
    }
  }, [isBuy])

  const getQuantityById = (id:any) => {
    return cart.find((item:any) => item.id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(productDetails.id)

  const sum = () =>{
    if(sumQuantity > 0){
      setSumQuantity(sumQuantity+1)

      if(productDetails.inventory-1 === sumQuantity){
        setIsDisabled(true)
      }

    }
  }

  const removeItem = () => {
    if(sumQuantity > 1){
      setSumQuantity(sumQuantity-1)
      if(inventory-1 < quantityPerItem){
        setIsDisabled(false)
      }
    }
  }

  return (
    <div className='flex flex-col justify-center items-center max-w-[500px]'>
      <div className='flex flex-col justify-center gap-8 border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl py-10 px-8 bg-white'>
        <p className='text-black text-2xl not-italic font-semibold'>{productDetails.name}</p>
        <p className='text-black text-2xl font-semibold not-italic'>
          {
            productDetails.price_discount ?
              <div className='flex flex-col'>
                <span className='text-lg line-through text-blue-custom'>
                  {formatNumber(productDetails.price)}
                </span>
                <span className='text-2xl text-red-custom '>
                  {formatNumber(productDetails.price_discount)}
                </span>
              </div>
              : 
              <span className='text-2xl text-blue-custom '>
                {formatNumber(productDetails.price)}
              </span>
          }
        </p>
        <span className='flex  gap-4 items-center text-[#353535] text-base not-italic font-normal'>
          <Counter addToCart={() => sum()} id={productDetails.id} isDisabled={isDisabled} quantityPerItem={sumQuantity} removeItem={removeItem} /> 
          {productDetails?.inventory ?  `${productDetails?.inventory} unidades disponibles` : null}</span>
        <button onClick={() => {setIsBuy(true); addToCart(productDetails)}} className='text-white text-xl not-italic font-bold py-2 rounded-md px-8 max-w-[384px] mx-2 bg-red-custom'>Comprar</button>  
        <button onClick={() => addToCart(productDetails)} className='text-white text-xl not-italic font-bold py-2 rounded-md px-8 max-w-[384px] mx-2 bg-blue-custom'>Agregar al carrito</button> 
        <div className='flex flex-col sm:flex sm:flex-row gap-10 mt-6 justify-center items-center sm:items-baseline'>
          <div className='flex justify-center items-center gap-1'> 
            <SavePurchaseIcon/>
            <p className='text-black text-base not-italic font-medium leading-4'>Compra segura<br/><span className='text-xs'>múltiples pasarelas de pago</span></p>
          </div>
          <div className='flex justify-center items-center gap-1'>
            <WarrantyIcon/>
            <p className='text-black text-base not-italic font-medium leading-4'>Garantía 30 días <br/><span className='text-xs'>Garantía de provedor</span></p>
          </div>
        </div>     
      </div>
      <p className='text-blue-custom text-2xl not-italic font-semibold text-center mt-6'>Medios de pago</p>
      <div className='grid grid-cols-2 sm:flex justify-center items-center'>
        <MasterCard/>
        <AmericanExpress/>
        <Visa/>
        <DinersClubInternational/>
      </div>
    </div>
  )
}
