import React from 'react'
import Galery from '../views/sitioWeb/galery/galery.component'
import GaleryMobil from '../views/sitioWeb/galery/galeryMobil.component'

export interface galleryElements {
  title: string,
  video: string,
  videoMovil: string,
  // eslint-disable-next-line no-undef
  text: JSX.Element
}

export interface PropsGallery {
  galleryData?: galleryElements[]
}

export const PrincipalSlider = ({galleryData}: PropsGallery) => {
  return (
    <div>
      <div className="hidden md:block">
        <Galery galleryData={galleryData} />
      </div>
      <div className="block md:hidden">
        <GaleryMobil  galleryData={galleryData}/>
      </div>
    </div>
  )
}
