import React from 'react'
import { SecondFooter } from './secondFooter.component'
import { SecondNavbar } from './secondNavbar.component'

export const SecondLayout = ({children}) => {
  return (
    <>
      <SecondNavbar/>
      {children}
      <SecondFooter/>
    </>
  )
}
