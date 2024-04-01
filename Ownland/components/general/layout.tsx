import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import { WhatsappButton } from './whatsappButton'

const Layout = ({children}:any) => {
  return (
    <>
      <Navbar/>
      
      {children}
      <WhatsappButton/>
      <Footer/>
    
    </>
  )
}

export default Layout