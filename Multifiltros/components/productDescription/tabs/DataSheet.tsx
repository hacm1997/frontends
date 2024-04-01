import React from 'react'
import { TecnicalSheetTable } from '../../UtilComponents/TecnicalSheetTable'
import { Collapse } from '../../UtilComponents/Collapse'

export const DataSheet = () => {
  return (
    <div className='animate-fade-right animate-duration-[900ms]'>
      <div className='mt-8'>
        <TecnicalSheetTable/>
        <Collapse/>
      </div>
    </div>
  )
}
