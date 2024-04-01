/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { getBlogByService } from '../../../../../pages/api/blogs/getAllBlogs'
import Cookies from 'js-cookie'
import { TypeDataBlogsResponse } from '../../../../../pages/api/blogs/type'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import styles from "../../blogs/styles.module.css";
import SwiperCore, {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";
import Link from 'next/link';
import { format } from "date-fns";
import { es } from 'date-fns/locale'

SwiperCore.use([Autoplay, Navigation]);

const BlogsComponent = (props: {
  category: string,
  titleService: string
}) => {
  const [blogData, setBlogdata] = useState<TypeDataBlogsResponse[]>()
  const [isClient, setIsClient] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    id: '',
    title: '',
    image: '',
    content: '',
    extraInfo: {category: []},
    status: ''
  })

  const swiperRef = React.useRef<SwiperType>();


  const tags =  props.category.replace(/^'|'$/g, '').slice(1, -1).split(',')

  useEffect(() => {
    getBlogByService(1, 6, tags).then(res => {
      setBlogdata(res.data)
    }).catch((error) => {
      console.log(error); 
    })
  }, [props.category])

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const truncateHTML = (html: string, maxLength: number): string => {
  //   if (!isClient) {
  //     return '';
  //   }

  //   const doc = new DOMParser().parseFromString(html, 'text/html');
  //   const truncatedText = doc.body.textContent?.trim().slice(0, maxLength);
  //   return truncatedText || '';
  // };

  const sliders = blogData?.map((card:TypeDataBlogsResponse) => {
    return (
      <SwiperSlide key={card.id}>
        <div className={"max-w-lg rounded overflow-hidden shadow-lg flex flex-col justify-center items-center mx-4 h-[550px] mt-5 "+ styles.card}>
          <img className="w-[80%] object-cover rounded-xl mt-4" src={card.image} alt={card.title} />
          <div className="px-6 py-4">
            <p className='text-xs pb-2'>{card?.createdAt ? format(new Date(card?.createdAt as string), 'dd MMMM yyyy',{locale: es}) : null}</p>
            <div className="font-bold text-xl mb-2"><p>{card.title}</p></div>
            {/* <p
              className="text-gray-700 text-base"
              dangerouslySetInnerHTML={{
                __html: truncateHTML(card.content, 100),
              }}
            /> */}
          </div>
          <div className="px-6 py-4 w-full flex justify-start">
          <Link href={`/blog/blog-page/${card.id}`} title={card.title}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Leer más
            </button>
          </Link>
          </div>
        </div>
      </SwiperSlide>
    )
  })
  return (
    <>
      <h2 className="flex justify-center items-center py-8 text-[#173A83] text-3xl lg:text-[38px] font-bold">Nuestros Blogs</h2>
      {Array.isArray(blogData) && blogData?.length > 0 ? 
        <section>
          <div className="flex justify-center items-center">
            <Swiper
                className="md:w-[70%] lg:w-[90%] 2xl:w-[70%]"
                modules={[Navigation, Pagination, A11y]}
                autoplay={{ delay: 3000}}
                
                onBeforeInit={(swiper:any) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                    800: {
                    slidesPerView: 1,
                    },

                    995: {
                    slidesPerView: 2,
                    },

                    1024: {
                    slidesPerView: 3,
                    },
                }}
              >
              {sliders}
            </Swiper>
          </div>

          <div className='flex justify-center items-center py-8'>
            <Link href='/blog' title='Ir a blogs'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver más Blogs
              </button>
            </Link>
          </div>
        </section>
      :
        <div className='flex justify-center pb-28'>
          <p className='italic text-[#000000] text-4xl'>{`Pronto podrás ver los blogs de ${props.titleService}`}</p>
        </div>
      }
    
    </>
  )
}

export default BlogsComponent