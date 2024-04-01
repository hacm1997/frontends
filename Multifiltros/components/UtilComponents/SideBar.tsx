import React, { ReactNode } from 'react'

interface SideBarProps {
  onClose: () => void;
  component: ReactNode;
}

export const SideBar = ({ onClose, component }: SideBarProps) => {
  return (
    <div className='fixed inset-0 z-50'>
      <div className='max-w-[80%] sm:max-w-[60%] lg:max-w-[45%] xl:max-w-[35%] h-full bg-white overflow-y-auto transform translate-x-0 transition-transform duration-300 ease-in-out'>
        <div className='p-4 flex justify-end mr-1'>
          <button onClick={onClose} className='text-blue-custom ml-4'>
            <p className='text-xl font-bold'>X</p>
          </button>
        </div>
        {component}
      </div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gray-800 bg-opacity-75 z-40 hidden '
      ></div>
    </div>
  )
}
