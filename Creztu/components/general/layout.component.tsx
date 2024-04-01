import React from 'react'
import Footer from './footer.component'
import Navbar from './navbar.component'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
