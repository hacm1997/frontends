import styles from './styles.module.css'
import Tab from './tab/tab'
import CardProducto from './card_producto/card_producto'
import CardPromo from './card_promo/card_promo'
import productos from '../../../../../data/productos'
import productosAm from '../../../../../data/productsAmalaTwo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { formatNumber } from '../../../../../services/functionsExport'

function filtrarProductosPorTipo(productos: any, tipo: any) {
  return productos.filter((producto: any) => producto.tipo === tipo)
}

export default function Menu() {
  const route = useRouter()
  const [tabData, setTabData] = useState('tradicionales')
  const productosFiltrados = filtrarProductosPorTipo(route.asPath.includes('/tachido') ? productos : productosAm, tabData)
  const productosCombos = filtrarProductosPorTipo(route.asPath.includes('/tachido') ? productos : productosAm, 'combos')

  const handleTabData = (data: any) => {
    setTabData(data)
  }

  return (
    <>
      <section className={route.asPath.includes('/tachido') ? styles.section : styles.section2} id={'menu'}>
        <div className={styles.general}>
          <Tab handleTabData={handleTabData} />
          <div className={styles.cardGeneral}>
            <div className={route.asPath.includes('/tachido') ? styles.promo : styles.promo2}>

              <div className={styles.subMenu}>
                <CardPromo
                  nombre={tabData}
                  img={'promos'}
                  alt={'promo'}
                  clase={'promos'}
                />
                <div className={route.asPath.includes('/tachido') ? styles.product : styles.product2}>
                  {productosFiltrados.map((producto: any, index: any) => (
                    <CardProducto
                      key={index}
                      id={producto.id}
                      nombre={producto.nombre}
                      precio={formatNumber(producto.precio)}
                      descripcion={producto.descripcion}
                      link={route.asPath.includes('/tachido') ? `/tachido/producto/${producto.slug}` : `/amala/producto/${producto.slug}`}
                      image={producto.img}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.subMenu}>
                {
                  route.asPath.includes('/amala') && (
                    <CardPromo
                      nombre={'Combos'}
                      img={'combos'}
                      alt={'combo'}
                      clase={'combos'}
                    />
                  )
                }
                <div className={route.asPath.includes('/tachido') ? styles.product : styles.product2}>
                  {productosCombos.map((producto: any, index: any) => (
                    <CardProducto
                      key={index}
                      id={producto.id}
                      nombre={producto.nombre}
                      precio={formatNumber(producto.precio)}
                      descripcion={producto.descripcion}
                      link={route.asPath.includes('/tachido') ? `/tachido/producto/${producto.slug}` : `/amala/producto/${producto.slug}`}
                      image={producto.img}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}