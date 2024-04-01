import { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

interface Props {
  title?: string
  image?: string
  alt?: string
  href?: string
  type?: string
}

export const SimpleCard = ({ image, title, alt, href, type }: Props) => {
  const {setTypeFilter} = useContext(EcommerceContext)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()

  const deleteBeforeKeys = () => {
    if(title != 'Servicios'){
      if(type){
        setTypeFilter(type?.toLowerCase())
      }else{
        setCookie('searchTag', title?.toLowerCase(), {path: '/'})
        // setCookie('searchValue', title?.toLowerCase(), {path: '/'})
        removeCookie('searchValue')
      }
    }
  }

  return (
    <a
      onClick={deleteBeforeKeys}
      href={href}
      className='rounded-[4px] shadow-shadow-custom py-4 max-w-[120px] h-32 flex flex-col border-2 border-transparent 
      items-center justify-center hover:scale-110 hover:border-red-custom hover:border-2 duration-150 px-1 cursor-pointer'>
      <img src={image} alt={alt} className='w-auto h-12 mb-2' />
      <span className="text-center">{title}</span>
    </a>
  )
}
