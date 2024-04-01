import React, { useContext, useEffect, useState} from 'react'
import { CartProductsCard } from '../UtilComponents/CartProductsCard'
import { ResumenShopingCard } from '../UtilComponents/ResumenShopingCard' 
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { calculateTotal } from '../../services/api/calculateTotal'
import { PurchaseOptions } from './PurchaseOptions'
import { useCookies } from 'react-cookie'

export interface InitialProductsProps {
  id: string
  title: string,
  quantity: number
  price: number
  iva: number
}

export const SelectedArticles = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const {cart, setCart, initialProducts, setInitialProducts} = useContext(EcommerceContext)
  const [totalCalculate, setTotalCalculate] = useState({
    price_without_iva: 0,
    price_shipping: 0,
    total_price: 0
  })

  useEffect(() => {
    setInitialProducts((prevProducts: any) => ({
      ...prevProducts,
      products: cart.map(({ id, title , price, quantity }: InitialProductsProps) => ({
        id,
        name: title,
        quantity,
        price,
        iva: 0, 
      })),
    }))
    if(cart.length < 1){
      removeCookie('initialProducts')
    }
  }, [cart])

  useEffect(() => {
    calculateTotal(initialProducts).then((res) => {
      setTotalCalculate({
        price_without_iva: res.price_without_iva,
        price_shipping: res.price_shipping,
        total_price: res.total_price
      })
    }).catch(error => {
      console.error(error)
    })
  }, [initialProducts])

  const cleanCart = () => {
    setCart([])
  }

  return (
    <div className='mt-8'>
      <div>
        <PurchaseOptions/>
      </div>
      <div className='flex flex-col-reverse items-center lg:items-baseline lg:flex lg:flex-row gap-8 lg:justify-evenly mt-8'>
        <div>
          <div className='flex flex-col mb-2 justify-center items-center gap-4'>
            <button onClick={cleanCart} 
              className='hover:bg-blue-custom hover:text-white rounded-lg p-2 font-semibold border-[1px] border-blue-custom'
            >
              Vaciar carrito
            </button>
            <p className='text-red-custom text-xl not-italic font-bold mb-4'>Articulos selecionados ({cart.length})</p>
          </div>
          <div className='pt-2 h-[82vh] overflow-auto flex flex-col gap-8 items-center sm:items-baseline max-w-[450px]'>
            {Array.isArray(cart) ? cart.map(({ id, title, image, price }) => (
              <div key={id}>
                <CartProductsCard id={id} title={title} image={image} price={price}/>
              </div>
            )): null}
          </div>
        </div>
        <div className='flex flex-col justify-center lg:justify-start  lg:mr-8'>
          <ResumenShopingCard totalPrice={totalCalculate.total_price} />
        </div>
      </div>
    </div>
  )
}