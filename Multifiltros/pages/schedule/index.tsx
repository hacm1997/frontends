import React, { useState } from 'react'
import { Main } from '../../components/layouts/Main'
import { WelcomeCard } from '../../components/UtilComponents/schedulesForm/forms/WelcomeCard'
import { Schedule } from '../../components/UtilComponents/schedulesForm/Schedule'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true)
  const router = useRouter()

  const handleContinue = () =>{
    setShowWelcome(false)
  }

  const handleGoBack = () =>{
    router.push('/#')
  }


  return (
    <>
      <Head>
        <meta charSet='utf-8' lang='es'/>
        <meta name='author' content='Multifiltros' />
        <title>MULTIFILTROS | Serviteca</title>
        {/* <meta name="description" content="MULTIFILTROS CARTAGENA es una empresa de producción, venta y comercialización de autopartes. Fabricantes de filtros de aire con planta de producción propia." /> */}
        <link rel="shortcut icon" href="/icons/logo.webp" type="image/x-icon" />
        <meta name='keywords' content='fabricantes de filtros de aire automotriz, fabricante de filtros, fabrica de filtros de aire acondicionado, fabrica de filtros de aire bogota, fabrica de filtros de aire para autos' />

      </Head>
      <Main>
        {showWelcome ? (
          <WelcomeCard onContinue={handleContinue} onGoBack={handleGoBack}/>
        ) : (
          <Schedule/>
        )
        }
      </Main>
    </>
  )
}
export default Index
