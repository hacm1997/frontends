import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { SubCategories } from './SubCategories'
import { KitsFilters } from './KitsFilters'
import { GridCategories } from '../Categories/GridCategories'
import { CATEGORIES } from '../../data/categories'

export const FilterProducts = () => {
  const [cookies] = useCookies()
  const [tag, setTag] = useState('')
  useEffect(() => {
    if(cookies.searchTag){
      setTag(cookies.searchTag)
    }
  }, [])
  return (
    <>
      <div className='flex flex-col gap-y-6 py-6 lg:py-10 lg:gap-y-7 text-center'>
        <h2 className='font-bold text-blue-custom text-2xl lg:text-2.5xl text-center'>
          Elige la categoria que buscas
        </h2>
        <div className='grid grid-cols-2 gap-4 mx-auto sm:gap-4 sm:inline-grid sm:grid-cols-5 lg:grid-cols-9'>
          <GridCategories items={CATEGORIES} />
        </div>
      </div>
      <div>
        {
          tag === 'filtros' ?
            <SubCategories/>
            :
            null }
        <KitsFilters/>
      </div>
    </>
  )
}
