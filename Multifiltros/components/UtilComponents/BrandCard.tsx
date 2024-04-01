import { ReactElement } from 'react'

interface Props {
  image: string | ReactElement
  altDescription: string
}

export const BrandCard = ({ altDescription, image }: Props) => {
  return (
    <div className='flex flex-col items-center'>
      
      <div className='bg-white border border-slate-200 rounded p-4'>
        <img className='w-24' src={image as string} alt={altDescription} />

      </div>
    </div>
  )
}
