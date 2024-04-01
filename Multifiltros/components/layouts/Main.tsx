import React, { useEffect, useState } from 'react'
// import Head from 'next/head'
import { Announcement } from '../Announcement/Announcement'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import { WhatsappButton } from '../WhatsappButton/WhatsappButton'
import { FavoriteProducts } from '../favoriteProducts/FavoriteProducts'
import { CookiesNotice } from '../UtilComponents/CookiesNotice'
import { useCookies } from 'react-cookie'
import Modal from '../UtilComponents/Modal'

export const Main = ({ children }: { children: React.ReactNode }) => { 
  const [cookies] = useCookies()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if(cookies.OriginCity){
      setIsModalOpen(false)
    }else{
      setIsModalOpen(true)
    }
  }, [])

  const handleContinue = (selectedCity: string) => {
    console.log(`Continuar a ${selectedCity}`)
  }
  return (
    <>
      <Announcement />
      <Nav />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onContinue={handleContinue} />
      <main className='px-4 lg:px-0'>
        {children}
      </main>
      <FavoriteProducts/> 
      <WhatsappButton/>
      <CookiesNotice/>
      <Footer />
    </>
  )
}
