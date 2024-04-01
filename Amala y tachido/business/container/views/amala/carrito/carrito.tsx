import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { CartContext } from '../../../../../services/contexts/ShoppingCartContext'
import { formatNumber } from '../../../../../services/functionsExport'
import styles from './styles.module.css'
import initPay from '../../../../../services/mercadopago/initPay'
import CardGeneral from '../../../general/card/CardGeneral'
import { Toaster, toast } from 'sonner'

export default function Carrito() {
  const { allCart, userData } = useContext(CartContext)
  const [payUrl, setPayUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const title = allCart.map((item: any) => item.nombre)
  const getQuantityById = (id: any) => {
    const quantity = allCart.find((item: any) => item.id === id)?.quantity || 0
    return quantity
  }
  const delivery = allCart.map((item: any) => item.priceDelivery)
  const priceDelivery = delivery.slice(-1).join(' ')
  const subtotal = allCart.map((item: any) => {
    if (item.total === 0) {
      return item.price * getQuantityById(item.id)
    } else {
      return item.total * getQuantityById(item.id)
    }
  })
  const subtotalAmount = subtotal.reduce((acumulador: any, valorPrev: any) => acumulador + valorPrev, 0)
  const total = subtotal.reduce((acumulador: any, valorPrev: any) => acumulador + valorPrev, Number(priceDelivery))
  const [productData, setProductData] = useState({
    title: '',
    quantity: 0,
    unit_price: 0,
    description: ''
  })
  const { sede, nombre, direccion, celular, barrio, sector, cedula, email } = userData
  const userDataForm = {
    name: nombre,
    address: `${direccion} ${sede} ${barrio} ${sector}`,
    phone: celular,
  }

  const groupedItems: any = {}
  allCart.forEach((item: any) => {
    const itemName = item.nombre
    const sizes = item.size?.map((size: any) => `${size.value}`)
    const additionals = item.additional?.map((additional: any) => `${additional.value}`)
    const proteins = item.proteins?.map((protein: any) => `${protein.value}`)

    if (!groupedItems[itemName]) {
      groupedItems[itemName] = {
        sizes: sizes || [],
        additionals: additionals || [],
        proteins: proteins || [],
      }
    } else {
      groupedItems[itemName].sizes = groupedItems[itemName].sizes.concat(sizes || [])
      groupedItems[itemName].additionals = groupedItems[itemName].additionals.concat(additionals || [])
      groupedItems[itemName].proteins = groupedItems[itemName].proteins.concat(proteins || [])
    }
  })
  const result = Object.keys(groupedItems).map((itemName) => {
    const descriptionParts = []

    if (groupedItems[itemName].sizes.length > 0) {
      descriptionParts.push(`Tamaños: ${groupedItems[itemName].sizes.join(', ')}`)
    }

    if (groupedItems[itemName].additionals.length > 0) {
      descriptionParts.push(`Adicionales: ${groupedItems[itemName].additionals.join(', ')}`)
    }

    if (groupedItems[itemName].proteins.length > 0) {
      descriptionParts.push(`Proteinas: ${groupedItems[itemName].proteins.join(', ')}`)
    }

    return `${itemName}, ${descriptionParts.join(', ')}`
  }).join(' * ')

  const handleUpdateProductData = () => {
    if (nombre !== '' && direccion !== '' && celular !== '' && cedula !== '' && email !== '') {
      const newProduct = {
        title: title.join(', '),
        quantity: 1,
        unit_price: Number(total),
        description: `${result} - Nombre:${userDataForm.name} Detalles: ${userDataForm.address} ${userDataForm.phone}`
      }

      setProductData(newProduct)
    } else {
      toast.error('Ups! Por favor, verifique que todos los campos de sus datos esten completos.')
    }
  }

  useEffect(() => {
    const getInitPayUrl = async () => {
      setIsLoading(true)

      try {
        const initUrl = await initPay(productData)
        setPayUrl(initUrl)
      } catch (error) {
        console.log(error)
      }

      setIsLoading(false)
    }

    if (productData.quantity > 0 && productData.unit_price > 0 && productData.title.length > 0) {
      getInitPayUrl()
    }
  }, [productData])

  useEffect(() => {
    if (payUrl) {
      window.location.href = payUrl
    }
  }, [payUrl])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.general}>
          <div className={styles.title}>
            <h1>Carrito</h1>
          </div>
          <div className={styles.cardProductos}>
            {
              allCart?.map((items: any) => (
                <CardGeneral key={items.id} data={items} />
              ))
            }
            <div>
              <h2 className={styles.total}>Subtotal: {formatNumber(Number(subtotalAmount))}</h2>
              <h2 className={styles.total}>Domicilio: {Number(priceDelivery) > 0 ? formatNumber(Number(priceDelivery)) : 'GRATIS'}</h2>
              <h2 className={styles.total}>Total: {formatNumber(Number(total))}</h2>
            </div>
          </div>

          <div className={styles.bottom}>
            {
              isLoading
                ?
                <button className={styles.pay} disabled>
                  <i className='bx bx-loader-alt bx-spin'></i>
                </button>
                :
                <a onClick={handleUpdateProductData} className={styles.pay}>
                  Pagar
                </a>
            }
            <Link href='/amala'>
              <a className={styles.cancel}>Cancelar</a>
            </Link>
          </div>
        </div>
        <Toaster richColors position='bottom-left' />
      </section>
    </>
  )
}
