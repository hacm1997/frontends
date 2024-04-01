import React from 'react'

interface Props {
  label?: string
  name: string
  options: Option[]
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string
  clasName?:string
  required?:boolean
}

interface Option {
  id: number
  label: string
}

export const Select = ({ label, name, options, onChange, clasName , required}: Props) => {
  return (
    <div className={`flex flex-col sm:flex-1 ${clasName}`}>
      <label htmlFor={name} className="font-semibold text-blue-custom w-fit ml-2">
        {label}
      </label>

      <select
        name={name}
        id={name}
        className="block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2 duration-200 
        focus:outline-none focus:ring-2 focus:ring-blue-custom cursor-pointer font-medium"
        onChange={onChange}
        required={required}
      >
        <option value=''>Seleccione una opción</option>

        {
          options.map(({ id, label }) => (
            <option key={id} value={label} className='font-medium'>
              {label}
            </option>
          ))
        }
      </select>
    </div>
  )
}
