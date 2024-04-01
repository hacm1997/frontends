import React from 'react'
import { LogoKru } from '../../../../public/img/logoKru'
import { ArrowIcon } from '../../../../public/img/arrowIcon'

export const PartnerCard = () => {
  return (
    <div className="w-full mt-10 mb-10 px-4 ">
      <div className="mx-auto max-w-[1000px] p-4 border-[1px] rounded-lg text-center shadow-[1px_5px_20px_0px_#EF5A0F] relative bg-[#023047] text-white">
        <p className="not-italic font-bold text-2xl sm:text-3xl md:text-5xl flex flex-col justify-center items-center sm:flex-row">
          Somos partner oficial de <LogoKru/>
        </p>
        <p className='text-xl font-medium'>Nuestros aliados en diseño y marketing</p>
      </div>
      <div className='flex gap-4 justify-center'>
        <ArrowIcon/>
        <ArrowIcon/>
      </div>
    </div>
  )
}
