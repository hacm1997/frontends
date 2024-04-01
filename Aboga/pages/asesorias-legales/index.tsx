import type { NextPage } from 'next'
import Layout from '../../components/general/layout/layout.component'
import LegalAdviceComponent from '../../components/general/views/legalAdvice/leaglAdvice.component'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Asesorías legales - Aboga</title>
        <link rel="canonical" href="https://aboga.com/asesorias-legales/"/>
      </Head>
      <LegalAdviceComponent/>
    </Layout>
  )
}

export default Home
