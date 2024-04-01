import React, { useState } from 'react'
import { Steps } from './forms/Steps'
import { FirstForm } from './forms/FirstForm'
import { SecondForm } from './forms/SecondForm'
import { ThirdForm } from './forms/ThirdForm'
import { FouthForm } from './forms/FouthForm'
import { CalendarIcon } from '../../../public/icons/utilsIcons/calendarIcon'
import { toast } from 'sonner'
import { sendEmail } from '../../../services/schedule/sendEmail'
import { emailInfo } from '../../../services/schedule/email'
import { InformativeModal } from '../InformativeModal'
import { PriceList } from '../PriceList'

export interface changeStep {
  handlerStep: () => void;
  backStep: () => void;
    // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // eslint-disable-next-line no-unused-vars
  onChangeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setDataStepFour?: React.Dispatch<React.SetStateAction<{ city: string; address: string }>>;
  dataStepOne?: {service: string, subService: string, other: string, typeService: string} 
  dataStepTwo?: {plate: string, brand: string, year: number | string | null, model: string, line: string, km: number | string | null, oilBrand: string, goo: string, EngineDisplacement: string}
  dataStepThree?: {name: string, lastName: string, typeId:string, id: number | string | null , phone: number | string | null, email: string}
  dataStepFour?: {city: string, address: string}
  // eslint-disable-next-line no-unused-vars
  prevEvent?: (e: React.FormEvent) => void;
  // eslint-disable-next-line no-unused-vars
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  setDataStepOne?: React.Dispatch<React.SetStateAction<{ service: string; subService: string, other: string, typeService: string }>>;
}

export const Schedule = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [dataStepOne, setDataStepOne] = useState({
    service: '', subService: '', other: '', typeService: ''
  })
  const [dataStepTwo, setDataStepTwo] = useState({
    plate: '',brand: '',year: null,
    model: '', line: '', km: null,
    oilBrand: '', goo:'', EngineDisplacement: ''
  })
  const [dataStepThree, setDataStepThree] = useState({
    name: '',lastName: '', typeId: '',id: null,
    phone: null, email: ''
  })
  const [dataStepFour, setDataStepFour] = useState({
    city: '',
    address: ''
  })
  const [step, setStep] = useState(1)

  const handlereDataStepOne = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setDataStepOne({
      ...dataStepOne,
      [ev.target.name] : value
    })
  }

  const handlereDataStepOneSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    setDataStepOne({
      ...dataStepOne,
      [ev.target.name] : value
    })
  }

  const handlereDataStepTwo = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setDataStepTwo({
      ...dataStepTwo,
      [ev.target.name] : value
    })
  }

  const handlereDataStepThree = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setDataStepThree({
      ...dataStepThree,
      [ev.target.name] : value
    })
  }

  const handlereDataStepThreeSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    setDataStepThree({
      ...dataStepThree,
      [ev.target.name] : value
    })
  }

  const handlereDataStepFour = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setDataStepFour({
      ...dataStepFour,
      [ev.target.name] : value
    })
  }
  const prevEvent = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const validateStepOne = () => {
    const isCarServiceSelected = dataStepOne.service === 'car'
    const isBusServiceSelected = dataStepOne.service === 'bus'
  
    const isCheckboxSelected = isCarServiceSelected || isBusServiceSelected
  
    const isOtherServiceFilled = dataStepOne.other.trim() !== ''
  
    const isServiceSelected = dataStepOne.service.trim() !== ''
  
    if (!((isCheckboxSelected && isServiceSelected) || isOtherServiceFilled || (!isCheckboxSelected && isServiceSelected))) {
      toast.warning('Debes seleccionar el tipo de servicio que deseas solicitar')
      return false
    }
    return true 
  }  

  const validateStepTwo = () => {
    if (!dataStepTwo.plate || !dataStepTwo.brand || !dataStepTwo.year || !dataStepTwo.model || !dataStepTwo.line || !dataStepTwo.km || !dataStepTwo.oilBrand || !dataStepTwo.goo || !dataStepTwo.EngineDisplacement) {
      return false
    }
    return true
  }

  const validateStepThree = () => {
    if (!dataStepThree.name || !dataStepThree.lastName || !dataStepThree.typeId || !dataStepThree.id || !dataStepThree.phone || !dataStepThree.email) {
      return false
    }
    return true
  }

  const validateStepFour = () => {
    if (!dataStepFour?.city || !dataStepFour?.address) {
      toast.warning('Por favor, selecciona una ciudad y una dirección.')
      return false
    }
    return true
  }

  const validateCurrentStep = () => {
    switch (step) {
    case 1:
      return validateStepOne()
    case 2:
      return validateStepTwo()
    case 3:
      return validateStepThree()
    case 4:
      return validateStepFour()
    default:
      return true
    }
  }

  const handlerStep = () => {
    // Validar el formulario actual antes de avanzar al siguiente paso
    const isValid = validateCurrentStep()
  
    if (isValid) {
      setStep(step + 1)
    }
  }
  const backStep = () => {
    setStep(step-1)
  }

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) =>{
    ev.preventDefault()
    handlerStep()
    const bodyEmail = emailInfo(dataStepOne,dataStepTwo,dataStepThree,dataStepFour)
    await sendEmail(bodyEmail).then(() => { 
      setShowModal(true)
    }).catch((error: Error) => {
      console.log(error)
    })
  }

  const closeModal = () =>{
    setShowModal(false)
  }

  return (
    <div className='mt-16 flex flex-col mx-4'>
      <p className='text-blue-custom text-4xl not-italic font-bold text-center flex justify-center items-center gap-6'
      >
        <CalendarIcon/> Agenda una cita con nosotros en la serviteca <CalendarIcon/>
      </p>
      <div className='flex flex-col 1xl:flex 1xl:flex-row justify-center items-center 1xl:items-baseline gap-10 mt-16 mb-16 mx-4 lg:mx-0 w-full'>
        <div className='text-center'>
          <Steps stepNumber={step} />
          <PriceList label={dataStepOne.service}/>
        </div>
        <div>
          { step === 1 ? <FirstForm handlerStep={handlerStep} backStep={backStep} onChange={handlereDataStepOne} setDataStepOne={setDataStepOne} onChangeSelect={handlereDataStepOneSelect} dataStepOne={dataStepOne} prevEvent={prevEvent}/>: null}
          { step === 2 ? <SecondForm handlerStep={handlerStep} backStep={backStep} onChange={handlereDataStepTwo} dataStepTwo={dataStepTwo}/> : null}
          { step === 3 ? <ThirdForm handlerStep={handlerStep} backStep={backStep} onChange={handlereDataStepThree} onChangeSelect={handlereDataStepThreeSelect} dataStepThree={dataStepThree} /> : null}
          { step === 4 ? <FouthForm handlerStep={handlerStep} backStep={backStep} onChange={handlereDataStepFour} setDataStepFour={setDataStepFour} dataStepFour={dataStepFour} handleSubmit={handleSubmit} /> : null}
        </div>
      </div>
      <InformativeModal showModal={showModal} closeModal={closeModal}/>
    </div>
  )
}
