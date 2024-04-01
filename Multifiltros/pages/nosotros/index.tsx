import React from 'react'
import { Main } from '../../components/layouts/Main'
import SliderPrincipal from '../../components/Nosotros/SliderPrincipal'
import AboutUs from '../../components/Nosotros/AboutUs'
import { SliderSecondary } from '../../components/Nosotros/SliderSecondary'
import FilterComponent from '../../components/Nosotros/FilterComponent'
import SliderFilters from '../../components/Nosotros/SliderFilters'
import SliderTeams from '../../components/Nosotros/SliderTeams'
import Services from '../../components/Nosotros/Services'
import { Headquarters } from '../../components/Sections/Headquarters'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' lang='es'/>
        <meta name='author' content='Multifiltros' />
        <title>MULTIFILTROS  Empresa de fabricación de Filtros y venta de lubricantes especializados</title>
        <meta name="description" content="Líderes en la fabricación y comercialización de filtros para maquinaria agrícola, industrial y automotriz, así como la venta de lubricantes especializados" />
        <link rel="shortcut icon" href="/icons/logo.webp" type="image/x-icon" />
        <meta name='keywords' content='fabricantes de filtros de aire automotriz, fabricante de filtros, fabrica de filtros de aire acondicionado, fabrica de filtros de aire bogota, fabrica de filtros de aire para autos' />
      </Head>
      <Main >
        <SliderPrincipal />
        <SliderSecondary />
        <FilterComponent />
        <SliderFilters />
        {/* <AlliedBrands /> */}
        <AboutUs />
        <SliderTeams />
        <Services />
        <Headquarters />
      </Main>
    </>
    
  )
}

export default Index