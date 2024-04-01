import React from 'react'
import { Main } from '../../../components/layouts/Main'
import { Hero } from '../../../components/AllOfers/Hero'
import { Banner } from '../../../components/AllOfers/Banner'
import { FilterOfers } from '../../../components/AllOfers/FilterOfers'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' lang='es'/>
        <meta name='author' content='Multifiltros' />
        <title>MULTIFILTROS | Todas las ofertas</title>
        {/* <meta name="description" content="MULTIFILTROS CARTAGENA es una empresa de producción, venta y comercialización de autopartes. Fabricantes de filtros de aire con planta de producción propia." /> */}
        <link rel="shortcut icon" href="/icons/logo.webp" type="image/x-icon" />
        <meta name='keywords' content='fabricantes de filtros de aire automotriz, fabricante de filtros, fabrica de filtros de aire acondicionado, fabrica de filtros de aire bogota, fabrica de filtros de aire para autos' />

      </Head>
      <Main>
        <Hero/>
        <Banner/>
        <FilterOfers/>
      </Main>
    </>
  )
}

export default Index
