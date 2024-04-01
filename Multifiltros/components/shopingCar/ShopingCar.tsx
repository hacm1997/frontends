import React, { useEffect, useState } from 'react'
import { SelectedArticles } from './SelectedArticles'
import { RelatedProducts } from './RelatedProducts'
import { useCookies } from 'react-cookie'
import { getProductById } from '../../services/api/getProductsById'

export const ShopingCar = () => {
  const [cookies] = useCookies()
  const [productDetails, setProductDetail] = useState({
    id: '',
    description: '',
    extraInfo: '',
    inventory: 0,
    name: '',
    price: 0,
    image: '',
    price_discount: 0
  })

  useEffect(() =>{
    if(cookies.productId){
      getProductById(cookies.productId).then((res: any) => {
        setProductDetail(res)
      }).catch(error => {
        console.error(error)
      })
    }
  },[cookies.productId])

  return (
    <div>
      <SelectedArticles/>
      <RelatedProducts productDetails={productDetails}/>
    </div>
  )
}
