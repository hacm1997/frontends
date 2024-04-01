import { ProductsInfoTabs } from './ProductsInfoTabs'

export interface dataProps{
  description: string
}

export const Specifications = ({description}: dataProps) => {
  
  return (
    <div className='flex 2xl:ml-52 px-4 md:px-0 justify-center 2xl:justify-start gap-10 mt-16'>
      <ProductsInfoTabs description={description}/>
    </div>
  )
}
