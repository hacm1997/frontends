import React from 'react'

interface FooterSectionProps {
  children: React.ReactNode
  title?: string
}

export const FooterSection = ({ children, title }: FooterSectionProps) => {
  return (
    <div className="text-center">
      <span className="text-center text-lg lg:text-2xl font-bold text-white">
        {title}
      </span>
      {children}
    </div>
  )
}
