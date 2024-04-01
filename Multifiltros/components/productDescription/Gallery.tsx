import { useEffect, useState } from 'react'
import { DescriptionBuyCard } from '../UtilComponents/DescriptionBuyCard'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface props{
  image: string
  extraInfo: string
  productDetails: product
}

export interface product{
    id: string
    description: string
    extraInfo: string
    inventory: number
    name: string
    price: number
    image: string
    price_discount: number
  }

export const Gallery = ({image, extraInfo, productDetails}: props) => {
  const [principalImage, setPrincipalImage] = useState('')
  const [dataGallery, setDataGallery] = useState<any[]>([])

  useEffect(() => {
    if(image){
      setPrincipalImage(image)
    }
  }, [image])
  useEffect(() => {
    if(extraInfo){
      const extra = JSON.parse(extraInfo)
      if(extra){
        const insertExtra = extra.gallery
        setDataGallery(insertExtra)
      }
    }
  }, [extraInfo])

  const images = dataGallery.map((item) => ({
    original: item,
    thumbnail: item,
  }))
  const newImage = { original: principalImage, thumbnail: principalImage }
  const updatedImages = [newImage, ...images]

  return (
    <div className=' mt-20 flex flex-col gap-4 2xl:gap-0 2xl:flex 2xl:flex-row justify-around'>
      <div className='w-[75%] sm:w-[60%] lg:w-[700px] mx-auto bg-cover'>
        <ImageGallery  
          showFullscreenButton={true}
          showPlayButton={false}
          showNav={false}
          items={updatedImages} 
          thumbnailPosition='bottom'
        />
      </div>
      <div className='flex mx-auto mt-10 lg:mt-0'>
        <DescriptionBuyCard productDetails={productDetails}/>
      </div>
    </div>
  )
}

