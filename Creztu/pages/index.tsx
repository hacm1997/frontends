import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SpinnerComponent } from '../components/utilsComponents/spinnerComponent'
export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/sitiosweb')
  }, [])

  return(
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <div className='text-center'>
        <img className='ml-[-25px]' src='/img/CrezTu_logo.webp' title='CREZTU'/>
        <h1 className='text-[18px]'>Redirigiendo</h1>
        <SpinnerComponent />
      </div>
    </div>     
  )
}
