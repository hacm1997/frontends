import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { getNewOrBestProducts } from '../../services/api/getNewOrBestProducts'

export const NewProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getNewOrBestProducts(1, 5, false, true).then(
      res =>{
        setProducts(res.data)
      }
    ).catch(error => {
      console.error(error)
    })
  }, [])


  const redirect = () => {
    window.open('/oferts/productosNuevos', '_blank')
  }

  return (
    <>
      {
        products.length > 0 ?
          <div className='flex flex-col justify-center items-center mt-16 lg:mt-16'>
            <div className='mx-4'>
              <p className='text-red-custom text-xl not-italic font-medium pb-4 lg:pl-8'>Los recién llegados con los mejores precios</p>
              <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-bold'>
                <span className='text-red-custom'>|</span> Productos nuevos con precios <span className='text-red-custom lg:ml-8 1xl:ml-0'>imperdibles</span>
              </p>
            </div>

            <div className='w-9/12 h-[50%] mt-8 mx-auto'>
        
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  1023: {
                    slidesPerView: 3, 
                  },
                  1280: {
                    slidesPerView: 4, 
                  },
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                initialSlide={1}
                className="myCustomSwiper"
              >
                {
                  products.map(({id, name, price, image, price_discount, extraInfo, inventory}) => (
                    <SwiperSlide key={id}>
                      <ProductCard  alt={name} id={id} image={image} price={price} title={name} price_discount={price_discount} extraInfo={extraInfo} inventory={inventory}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <button onClick={redirect} className='bg-red-custom text-white text-base not-italic font-bold mt-16 px-10 py-3 rounded-xl shadow-[3px_10px_16px_0px_#EB4648]'>Ver todos</button>
          </div>
          :null}
    </>
  )
}
