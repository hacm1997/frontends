import type { NextPage } from 'next'
import Layout from '../../business/container/general/layout/layout'
import SliderHeader from '../../business/container/views/tachido/slider_header/slider_header'
import Menu from '../../business/container/views/amala/menu/menu'

const Home: NextPage = () => {

  return (
    <Layout>
      <SliderHeader />
      <Menu />
    </Layout>
  )
}

export default Home