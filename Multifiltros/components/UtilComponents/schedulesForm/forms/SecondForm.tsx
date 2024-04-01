import React from 'react'
import { SportCarIcon } from '../../../../public/icons/utilsIcons/sportCarIcon'
import { changeStep } from '../Schedule'

export const SecondForm = (currentStep: changeStep) => {
  return (
    <div className='rounded-lg px-8 pt-10 pb-6 max-w-[600px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <label 
        htmlFor=""
        className='text-blue-custom text-xl sm:text-2xl not-italic font-semibold flex gap-4 items-center'
      >
        <SportCarIcon />
          Ingresa los datos del vehículo
      </label>
      <p
        className='text-[#353535] text-base sm:text-lg not-italic font-normal mt-6'
      >
          Ingresa los datos mas asertivos respecto a tu automóvil, asi podremos ser mas eficaz a la hora de realizar el servicio.
      </p>
      <form className='flex flex-col' onSubmit={currentStep.prevEvent}>
        <label 
          htmlFor="plate"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Placa
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='plate'
          type="text" 
          name='plate'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.plate}
          required
        />
        <label 
          htmlFor="brand"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Marca
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='brand'
          type="text" 
          name='brand'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.brand}
          required
        />
        <label 
          htmlFor="year"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Año
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2 '
          id='year'
          type="number" 
          name='year'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.year === null || Number(currentStep.dataStepTwo?.year) === 0 ? '' : Number(currentStep.dataStepTwo?.year)}
          required
        />
        <label 
          htmlFor="model"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Modelo
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='model'
          type="text"  
          name='model'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.model}
          required
        />
        <label 
          htmlFor="line"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Linea
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='line'
          type="text" 
          name='line'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.line}
          required
        />
        <label 
          htmlFor="km"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Kilometraje
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2 '
          id='km'
          type="number" 
          name='km'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.km === null || Number(currentStep.dataStepTwo?.km) === 0 ? '' : Number(currentStep.dataStepTwo?.km)}
          required
        />
        <label 
          htmlFor="oilBrand"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Marca de aceite
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='oilBrand'
          type="text" 
          name='oilBrand'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.oilBrand}
          required
        />
        <label 
          htmlFor="goo"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Viscosidad
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='goo'
          type="text" 
          name='goo'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.goo}
          required
        />
        <label 
          htmlFor="goo"
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Cilindraje del motor
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          id='EngineDisplacement'
          type="text" 
          name='EngineDisplacement'
          onChange={currentStep.onChange}
          value={currentStep.dataStepTwo?.EngineDisplacement}
          required
        />
        <div className='flex gap-1 mt-10'>
          <button
            onClick={() => currentStep.backStep()} 
            className='border-[1px] rounded-lg w-full text-xl py-2 text-[#696969] border-blue-custom hover:bg-blue-custom hover:text-white'>Atrás</button>
          <button
            onClick={() => currentStep.handlerStep()} 
            className='border-[1px] rounded-lg w-full text-xl py-2 text-white bg-blue-custom hover:bg-red-custom'>Continuar</button>
        </div>
      </form>
    </div>
  )
}
