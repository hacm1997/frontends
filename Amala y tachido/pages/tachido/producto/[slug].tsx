import type { NextPage } from 'next'
import Layout from '../../../business/container/general/layout/layout'
import Producto from '../../../business/container/views/tachido/productos/producto'

const Home: NextPage = ({ producto }: any) => {

  /* console.log(producto) */
  return (
    <>
      <Layout>
        <Producto producto={producto} />
      </Layout>
    </>
  )
}

export default Home
const url_local = process.env.NEXT_PUBLIC_LOCAL_API as string
// console.log("url_local => ",separate[0]);
export async function getStaticPaths() {

  try {
    const data = await fetch(`${url_local}/api/productos/`)
    const dataJson = await data.json()
    const paths = dataJson.map((producto: any) => ({
      params: { slug: producto.slug },
    }) as any)
    return {
      paths,
      fallback: false
    }
  } catch (e) {
    console.log(e)
    return { paths: [], fallback: false }
  }
}

export async function getStaticProps({ params }: any) {
  try {


    const data = await fetch(`${url_local}/api/productos/`)
    const dataJson = await data.json()
    return {
      props: {
        producto: dataJson.find((producto: any) => producto.slug === params.slug || producto.id === params.id),
      }
    }
  } catch (e) {
    console.log(e)
  }
}
