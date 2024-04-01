import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getDiscountProducts } from '../../services/api/getDiscountProducts'

export const WeeklyDiscounts = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getDiscountProducts(1, 5).then(
      res =>{
        setProducts(res.data)
      }
    ).catch(error => {
      console.error(error)
    })
  }, [])

  const redirect = () => {
    window.open('/oferts/todaLasOfertas', '_blank')
  }
  
  return (
    <>
      {
        products.length > 0 ?
          <div className='mt-16 lg:mt-16 mb-28 flex flex-col justify-center items-center'>
            <div className='mt-14 mb-16 px-4'>
              <p className='text-red-custom  lg:text-start text-xl lg:text-base not-italic font-semibold pb-4 lg:pl-8'>Ofertas flash</p>
              <p className='text-blue-custom  lg:text-start text-3xl lg:text-5xl not-italic font-bold'>
                <span className='text-red-custom'>|</span>Descuentos relámpagos de la <span className='text-red-custom'>semana</span>
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
                autoplay={{
                  delay: 5000
                }}
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
            <button onClick={redirect} className='bg-red-custom text-white text-base not-italic font-bold px-10 py-3 rounded-xl shadow-[3px_10px_16px_0px_#EB4648]'>Ver ofertas</button>
          </div>
          :null}
    </>
  )
}
