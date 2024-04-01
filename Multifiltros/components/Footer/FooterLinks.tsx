import React from 'react'

interface FooterLinksProps {
  links: FooterLinksItemProps[]
  className?: string
  title?: string
  typeTarget?: string
}

interface FooterLinksItemProps {
  id: number
  label?: string
  href?: string
  icon?: React.ReactElement | string
}

export const FooterLinks = ({ links, className, title, typeTarget }: FooterLinksProps) => {
  return (
    <ul className={className}>
      <p className='text-white text-lg font-bold'>{title}</p>
      {
        links.map(({ href, id, label, icon }) => (
          <li key={id}>
            <a
              target={typeTarget}
              href={href}
              rel="noreferrer"
              className={`text-white duration-200 
              ${icon ? 'flex justify-center gap-x-2 sm:justify-start' : 'sm:flex-1 border-transparent border-2 hover:border-b-red-custom'}`
              }>
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          </li>
        ))
      }
    </ul >
  )
}
