import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProductCard } from '../Product/ProductCard'
import { Adviser } from '../../public/icons/utilsIcons/adviser'
import { product } from '../productDescription/Gallery'
import { getProductsByTags } from '../../services/api/getProductsByTags'

interface props{
  productDetails: product
}

export const RelatedProducts = ({productDetails}: props) => {
  const [extraInfo, setExtraInfo] = useState({categories: []})
  const [productsRelation, setProductsRelation] = useState([])

  useEffect(() => {
    if(productDetails.extraInfo){
      const extraInfoData = JSON.parse(productDetails.extraInfo)
      setExtraInfo(extraInfoData)
    }

  }, [productDetails])

  useEffect(() => {
    if(extraInfo.categories){
      getProductsByTags(extraInfo.categories).then((res) => {
        setProductsRelation(res.data)
      }).catch(error => {
        console.error(error)
      })
    }
  }, [extraInfo.categories])

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className='mx-4'>
        <p className='text-red-custom text-xl not-italic font-medium pb-4 lg:pl-8'>¡No te quedes solo con eso, explora más de nuestros productos!</p>
        <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-bold'>
          <span className='text-red-custom'>|</span> Explorar mas productos relacionados con tu compra
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
          modules={[Pagination, Navigation]}
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
          {Array.isArray(productsRelation) ? productsRelation.filter((item:any) => item.id != productDetails.id).map(({id, name, price, image, price_discount, inventory  }) => (
            <SwiperSlide key={id} className='flex content-center items-center mb-28'>
              <ProductCard title={name} id={id} image={image} price={price} alt={name} price_discount={price_discount} extraInfo={extraInfo} inventory={inventory}/>
            </SwiperSlide>
          )): null}
        </Swiper> 
      </div>
      <div className='mt-16'>
        <div className='lg:mt-7 flex flex-col justify-center items-center gap-8'>
          <p className='text-blue-custom text-xl font-extrabold not-italic text-center max-w-2xl'>
          No sabes que <span className='text-red-custom'>filtro</span> elegir o no 
          encuentras el tuyo? Nosotros te lo personalizamos <span className='text-red-custom'>a tu 
          medida</span> haz <button className='bg-red-custom text-white px-8 rounded-lg h-8 underline'>click aqui</button> y te asesoraremos
          </p>
          <Adviser/>
        </div>
      </div>
    </div>
  )
}
