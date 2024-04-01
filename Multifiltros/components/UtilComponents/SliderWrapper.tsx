import React from 'react'

interface SliderProps {
  children: React.ReactNode
}

export const SliderWrapper = ({ children }: SliderProps) => {
  return (
    <>
      {children}
    </>
  )
}
