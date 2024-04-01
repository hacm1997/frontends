import React from 'react'

interface Items {
  id?: number
  title?: string
  text?:  React.ReactNode
  icon?: React.ReactElement
}

export const BenefitsCards = ({title, text, icon, id} : Items) => {
  console.log('id => ', id)
  return (    
    <div className='rounded-3xl max-w-[240px] h-24 flex flex-col justify-center items-center mx-4'>
      <p className='text-blue-custom text-base font-bold leading-6 text-center flex gap-2 justify-center items-center'>{icon} {title}</p>
      <div 
        className={`${id === 1 ? 'flex justify-center items-center gap-3 px-6' : 
          'flex justify-center items-center gap-3 px-6 1xl:border-l-2 border-[#696969]'}`}>
        {text}
      </div>
    </div>
  )
}

