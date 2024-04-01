import type {NextPage} from 'next'
import Layout from '../../../business/container/general/layout/layout'
import Carrito from '../../../business/container/views/amala/carrito/carrito'

const Home: NextPage = () => {
  return (
    <>

      <Layout>
        <Carrito/>
      </Layout>

    </>
  )
}

export default Home
