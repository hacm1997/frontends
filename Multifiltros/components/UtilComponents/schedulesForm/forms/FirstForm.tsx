import React, { useEffect, useState } from 'react'
import { ToolsIcon } from '../../../../public/icons/utilsIcons/toolsIcon'
import { FORM1 } from '../../../../data/select'
import { changeStep } from '../Schedule'
import { getCategories } from '../../../../services/api/getCategories'

export interface TagsInterface {
  tags: string,
  description: string
}

export const FirstForm = (currentStep: changeStep) => {

  const sortData = (data: [], position: number) => {
    if (data.length > 0) {
      // Crear un array para almacenar todas las marcas
      let allBrands: string[] = []
  
      // Iterar sobre listBrand y agregar marcas al array
      data.forEach((item: any) => {
        if (item.tags) {
          const tagsArray: string[] = item.tags.split(',')[position].split(',')
          allBrands = [...allBrands, ...tagsArray]
        }
      })
      // Filtrar marcas únicas
      const uniqueBrands: string[] = [...new Set(allBrands)]
  
      return uniqueBrands
    }
  }

  const [generalService, setGeneralService] = useState<string[]>([])

  console.log('general service =>', generalService)

  useEffect(() => {
    if(currentStep.dataStepOne?.service as string !== 'otro' && currentStep.setDataStepOne){
      if (currentStep) {
        currentStep.setDataStepOne({
          typeService: currentStep.dataStepOne?.typeService as string,
          service: currentStep.dataStepOne?.service as string,
          subService: currentStep.dataStepOne?.subService as string,
          other: '',
        })
      }
    }
    getCategories(currentStep.dataStepOne?.service as string).then((res:any) => {
      const response = res.filter((item:any) => item.tags.includes('serviteca'))
      const dataTag = sortData(response, 2)
      if(dataTag){
        if (JSON.stringify(dataTag) !== JSON.stringify(generalService)) {
          setGeneralService(dataTag)
        }
      }else{
        setGeneralService([])
      }
        
    }).catch(error => {
      console.error(error)
    })
    
  }, [currentStep.dataStepOne?.service])

  return (
    <div className='rounded-lg px-8 pt-10 pb-6 max-w-[600px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div>
        <p className='text-blue-custom text-xl sm:text-2xl not-italic font-semibold'>Información importante</p>
      </div>
      <div className='bg-[#F2F4FE] p-8 rounded-lg mt-8'>
        <p className='text-[#353535] text-base sm:text-lg not-italic font-medium'>
          Si especificas los servicios que requiere tu vehículo, nuestro jefe de taller podrá hacer una mejor 
          programación de las actividades y <span className='font-extrabold'>reducirás tu tiempo de espera y aproximado en costos.</span>
        </p>
        <p className='text-[#353535] text-base sm:text-lg not-italic font-medium mt-6'>Si en estas opciones no encuentras el servicio que necesitas, 
          escribamos en el botón de <span className='font-extrabold'>WhatsAPP</span> o en la opción <span className='font-extrabold'>OTRO</span> y comentarnos que servicio solicitas.</p>
      </div>
      <form className='mt-10' onSubmit={currentStep.prevEvent}>
        <label
          className='text-blue-custom text-xl sm:text-2xl not-italic font-semibold' 
          htmlFor=""
        >
          Elige el tipo de servicios para tu vehículo
        </label>
        <label 
          htmlFor=""
          className='text-blue-custom text-xl not-italic font-bold flex items-center gap-1 mb-4 mt-6'
        >
          <ToolsIcon style='fill-red-custom'/> Servicios
        </label>
        <div className='flex flex-col gap-4'>
          <select name='service' className='mt-6 mb-2 text-blue-custom bg-[#F2F4FE] sm:text-sm py-2 px-2 rounded-lg font-semibold' onChange={currentStep.onChangeSelect} >
            <option value=''>Seleccionar categoría</option>
            {FORM1.map(item => (
              <option key={item.id} value={item.value.toLowerCase()}>{item.label}</option>
            ))}
          </select>
          <select name="subService" id="" className='text-blue-custom bg-[#F2F4FE] sm:text-sm py-2 px-2 rounded-lg font-semibold' onChange={currentStep.onChangeSelect}>
            <option value=''>Seleccionar servicio</option>
            { generalService?.map((item, index) =>(
              <option value={item} key={index}>{item}</option>
            ))
            }
          </select>
          <p className='text-red-custom mb-4'>{currentStep.dataStepOne?.service ? `Seleccionado: ${currentStep.dataStepOne?.service}: ${currentStep.dataStepOne?.subService}` : null}</p>
        </div>
        {currentStep.dataStepOne && currentStep.dataStepOne?.service === 'otro' ? 
          <div>
            <label 
              htmlFor=""
              className='text-blue-custom text-sm font-bold ml-2'
            >
          Otro
            </label>
            <input 
              className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
              type="text" name='other' onChange={currentStep.onChange} value={currentStep.dataStepOne?.other}/>
          </div>
          : null}
        <div className='flex gap-1 mt-10'>
          <button className='border-[1px] rounded-lg w-full text-xl py-2 text-white bg-blue-custom hover:bg-red-custom' onClick={() => currentStep.handlerStep()}>Siguiente</button>
        </div>
      </form>
    </div>
  )
}
