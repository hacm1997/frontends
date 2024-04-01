import { useContext, useEffect, useState } from 'react'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

interface ToggleSwitchProps {
  text: string;
  toggleClear: boolean
  // eslint-disable-next-line no-unused-vars
  setToggleClear: (data: boolean) => void
}

export const ToggleSwitch = ({text, toggleClear, setToggleClear}: ToggleSwitchProps) => {
  const { booleanFilters, setBoolenaFilters } = useContext(EcommerceContext)
  const [toggle, setToggle] = useState(true)

  const handleBooleanFilters = () => {
    setToggleClear(false)
    setToggle(!toggle)
    if(toggle){
      if(text === 'Envío gratis'){
        setBoolenaFilters({
          ...booleanFilters,
          freeShipping: true,
        })
      }else{
        setBoolenaFilters({
          ...booleanFilters,
          discount: true
        })
      }
    }else{
      if(text === 'Envío gratis'){
        setBoolenaFilters({
          ...booleanFilters,
          freeShipping: false,
        })
      }else{
        setBoolenaFilters({
          ...booleanFilters,
          discount: false
        })
      }
    }
  }

  useEffect(() => {
    if(toggleClear === true){
      setToggle(true)
    }
  }, [toggleClear])

  return (
    <div className="flex gap-4 justify-start items-center">
      {/* Switch Container */}
      <div
        className={`w-10 h-5 flex items-center border-2 bg-${toggle ? '' : 'red-custom'} border-blue-custom rounded-full p-1 cursor-pointer`}
        onClick={handleBooleanFilters}
      >
        {/* Switch */}
        <div
          className={`bg-blue-custom h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out ${toggle ? 'translate-x-0' : 'translate-x-4 bg-white'}`}
        ></div>
      </div>
      <label 
        className='text-sm text-[#353535] not-italic font-normal'
        htmlFor="">{text}</label>
    </div>
  )
}

