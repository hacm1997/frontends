import { Main } from '../components/layouts/Main'
import { Hero } from '../components/Hero/Hero'
import { SliderCatalogue } from '../components/Categories/SliderCatalogue'
import { Banner } from '../components/Announcement/Banner'
import { Benefits } from '../components/UtilComponents/Benefits'
import { FeaturedProducts } from '../components/Sections/FeaturedProducts'
import { NewProducts } from '../components/Sections/NewProducts'
import { WeeklyDiscounts } from '../components/Sections/WeeklyDiscounts'
import { Headquarters } from '../components/Sections/Headquarters'
import { SliderSecondary } from '../components/Nosotros/SliderSecondary'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' lang='es'/>
        <meta name='author' content='Multifiltros' />
        <title>MULTIFILTROS CARTAGENA Fabricantes de Filtros de Aire Automotriz</title>
        <meta name="description" content="MULTIFILTROS CARTAGENA es una empresa de producción, venta y comercialización de autopartes. Fabricantes de filtros de aire con planta de producción propia." />
        <link rel="shortcut icon" href="/icons/logo.webp" type="image/x-icon" />
        <meta name='keywords' content='fabricantes de filtros de aire automotriz, fabricante de filtros, fabrica de filtros de aire acondicionado, fabrica de filtros de aire bogota, fabrica de filtros de aire para autos' />
      </Head>
      <Main>
        <Hero />
        <Benefits/>
        <SliderCatalogue />
        <Banner />
        {/* <Sponsors /> */}
        <SliderSecondary/>
        <FeaturedProducts/>
        <NewProducts/>
        {/* <SecondBanner/> */}
        <WeeklyDiscounts/>
        <Headquarters/>
      </Main>
    </>
  )
}