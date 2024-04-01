import React from 'react'
import { dataProps } from '../Specifications'

export const Description = ({description}: dataProps) => {
  return (
    <div className='animate-fade-right animate-duration-[900ms]'>
      <p className='text-[#696969] text-xl not-italic font-normal max-w-[700px] mt-8'
        dangerouslySetInnerHTML={{
          __html: (description as string),
        }}
      >
        {/* {description} */}
      </p>
    </div>
  )
}
