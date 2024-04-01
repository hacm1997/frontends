import React, { useEffect, useState } from 'react'
import { Main } from '../../components/layouts/Main'
import { Gallery } from '../../components/productDescription/Gallery'
import { Specifications } from '../../components/productDescription/Specifications'
import { OtherProducts } from '../../components/productDescription/OtherProducts'
import { useCookies } from 'react-cookie'
import { getProductById } from '../../services/api/getProductsById'
import Head from 'next/head'

// interface product{
//   id: string
//   description: string
//   extraInfo: string
//   inventory: number
//   name: string
//   price: number
//   image: string
// }

const Index = () => {
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
    <>
      <Head>
        <meta charSet='utf-8' lang='es'/>
        <meta name='author' content='Multifiltros' />
        <title>MULTIFILTROS | Descripcion de producto</title>
        {/* <meta name="description" content="MULTIFILTROS CARTAGENA es una empresa de producción, venta y comercialización de autopartes. Fabricantes de filtros de aire con planta de producción propia." /> */}
        <link rel="shortcut icon" href="/icons/logo.webp" type="image/x-icon" />
        <meta name='keywords' content='fabricantes de filtros de aire automotriz, fabricante de filtros, fabrica de filtros de aire acondicionado, fabrica de filtros de aire bogota, fabrica de filtros de aire para autos' />

      </Head>
      <Main>
        <Gallery image={productDetails.image} extraInfo={productDetails?.extraInfo} productDetails={productDetails}/> 
        <Specifications description={productDetails?.description}/> 
        <OtherProducts productDetails={productDetails}/>
      </Main>
    </>
  )
}

export default Index
