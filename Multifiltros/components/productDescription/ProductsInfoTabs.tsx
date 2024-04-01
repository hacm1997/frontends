import React, { useState } from 'react'
import { Description } from './tabs/Description'
// import { DataSheet } from './tabs/DataSheet'
import { dataProps } from './Specifications'

export const ProductsInfoTabs = ({description}: dataProps) => {

  const [tab, setTab] = useState('description')
  return (
    <div className='max-w-[800px]'>
      <ul className='grid grid-cols-1 gap-4 lg:gap-0 sm:grid sm:grid-cols-2 justify-center items-center text-center'>
        <li>
          <label
            className={`cursor-pointer text-blue-custom text-xl not-italic font-semibold ${tab === 'description' ? 'border-b-2 border-red-500' : ''}`}
            htmlFor=""
            onClick={() => setTab('description')}
          >
            Descripción
          </label>
        </li>
        {/* <li>
          <label 
            className={`cursor-pointer text-blue-custom text-xl not-italic font-semibold ${tab === 'ficha' ? 'border-b-2 border-red-500' : ''}`}
            htmlFor=""
            onClick={() => setTab('ficha')}
          >
            Ficha técnica
          </label>
        </li> */}
        {/* <li>
          <label 
            className={`cursor-pointer text-blue-custom text-xl not-italic font-semibold ${tab === 'comentarios' ? 'border-b-2 border-red-500' : ''}`}
            htmlFor=""
            onClick={() => setTab('comentarios')}
          >
            Comentarios y reseñas
          </label>
        </li> */}
      </ul>
      {tab === 'description'
        ? (
          <Description description={description}/>
        )
        : tab === ''
          ? (
            // <DataSheet />
            null
          )
          : (
            '' // <CommentsAndReviews />''
          )}
    </div>
  )
}
