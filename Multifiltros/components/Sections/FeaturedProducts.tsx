import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getNewOrBestProducts } from '../../services/api/getNewOrBestProducts'

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getNewOrBestProducts(1, 5, true, false).then(
      res =>{
        setProducts(res.data)
      }
    ).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <>
      {
        products.length > 0 ?
          <div className='flex flex-col justify-center items-center mt-16 lg:mt-16'>
            <div className='mx-4'>
              <p className='text-red-custom text-xl not-italic font-medium pb-4 lg:pl-8'>Nuestros mejores productos</p>
              <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-bold'>
                <span className='text-red-custom'>|</span> Productos destacados/ los más <span className='text-red-custom lg:ml-8 1xl:ml-0'>vendidos</span>
              </p>
            </div>
            <div className='w-9/12 flex justify-center items-center mt-8'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay,Pagination, Navigation]}
                // autoplay={{
                //   delay: 5000
                // }}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                  1300: {
                    slidesPerView: 4,
                  }
                }}
                className="mySwiper w-full mx-8"
                id='#FeaturedProducts'
              >
                {products.map(({id, name, price, image, price_discount, extraInfo, inventory}) => (
                  <SwiperSlide key={id} className='flex content-center items-center mb-28'>
                    <ProductCard title={name} id={id} image={image} price={price} alt={name} price_discount={price_discount} extraInfo={extraInfo} inventory={inventory}/>
                  </SwiperSlide>
                ))}
              </Swiper> 
            </div>
          </div>
          :null}
    </>
  )
}