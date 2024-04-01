import { NavArrowDown, NavArrowUp } from 'iconoir-react'
import { useState, ReactNode } from 'react'

interface Option {
  title: string;
  content: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
}

interface DropdownProps {
  options: Option[];
  // eslint-disable-next-line no-unused-vars
  onOptionOpen?: (index: number) => void;
  style?: string
}

export const Dropdown = ({options, onOptionOpen, style}: DropdownProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOptionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
    if (onOptionOpen) {
      onOptionOpen(openIndex === index ? null : index)
    }
  }

  

  return (
    <div className={`${style} w-full lg:w-96`}>
      {options.map((option, index) => (
        <div key={index} className="border-b py-2">
          <div
            className={`flex justify-between items-center cursor-pointer ${
              option.titleClassName || ''
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <div>{option.title}</div>
            <div className="transform transition-transform">
              {openIndex === index ? <NavArrowUp className='text-orange-400'/> : <NavArrowDown className='text-orange-400'/>}
            </div>
          </div>
          {openIndex === index && option.content && (
            <div className={`px-4 py-2 ${option.contentClassName || ''}`}>
              {option.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
