/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import Radio from './component/radio/radio'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../../../services/contexts/ShoppingCartContext'
import { formatNumber } from '../../../../../../services/functionsExport'
import Link from 'next/link'

export default function FormPersonalizar({ producto, enableArea }: any) {
  const [size, setSize] = useState([])
  const [priceDelivery, setPriceDelivery] = useState(0)
  const [totalPriceSize, setTotalPriceSize] = useState(0)
  const { cartAmala, setCartAmala, userData, setCartAll } = useContext(CartContext)

  const addToCart = () => {
    setCartAmala((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === producto.id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === producto.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...currItems,
          {
            id: producto.id,
            quantity: 1,
            price: producto.precio,
            priceDelivery,
            total: totalPriceSize,
            nombre: producto.nombre,
            size
          }
        ]
      }
    })
    setCartAll((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === producto.id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === producto.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...currItems,
          {
            id: producto.id,
            quantity: 1,
            price: producto.precio,
            priceDelivery,
            total: totalPriceSize,
            nombre: producto.nombre,
            size
          }
        ]
      }
    })
  }

  const removeItem = (id: any) => {
    setCartAll((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: any) => item.id !== id)
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
    setCartAmala((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: any) => item.id !== id)
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  // eslint-disable-next-line no-unused-vars
  const getQuantityById = (id: any) => {
    return cartAmala?.find((item: any) => item.id === producto.id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(producto.id)

  const handleSizeChange = (event: any) => {
    const value = event.target.value
    const checked = event.target.checked
    const price = event.target.id

    if (checked) {
      // @ts-ignore
      setSize([...size, { value, price }])
    } else {
      setSize(size.filter((add: any) => add.value !== value))
    }
  }

  useEffect(() => {
    const totalPriceSize = size.reduce((total, add: any) => total + parseFloat(add.price), 0)
    setTotalPriceSize(totalPriceSize)
  }, [size])

  const data = userData.barrio
  useEffect(() => {
    const granTotal = data?.split(' ', 1).join()
    setPriceDelivery(granTotal)
  }, [data])

  return (
    <>
      <div className={styles.form}>
        <div>

          <div className={styles.title}>
            <h2>Elige el tamaño</h2>
          </div>
          <form className={!enableArea ? ' ' : styles.form_disable}>
            <div className={styles.producto}>
              <div className={styles.singleImg}>
                <img src={producto.img} alt={producto.nombre} style={{ maxWidth: '280px' }} />
              </div>
              <div className={styles.content}>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p><i className='bx bx-time-five'></i> Tiempo de entrega estimado: 45 Min.</p>
                <span>Domicilio: {formatNumber(priceDelivery)}</span>
              </div>
            </div>
            <div className={styles.item2}>
              {
                producto.size?.length > 0 && (
                  <div className={styles.title}>
                    <h4>Elige el tamaño de tu pizza</h4>
                    <span>Obligatorio*</span>
                  </div>
                )
              }
              <div className={styles.cardRadio}>
                {
                  producto.size?.map((size: any, index: any) => {
                    return (
                      <div className={styles.group} key={index}>
                        <Radio
                          type="checkbox"
                          id={size.price}
                          name={size.name}
                          value={size.name}
                          label={size.name}
                          onChange={handleSizeChange}
                          disable={enableArea}
                        />
                        <div className={styles.linea}>
                        </div>
                        <span>{formatNumber(size.price)}</span>
                      </div>
                    )
                  })}
              </div>
            </div>

            <div>
              {
                producto.size
                  ? <h3>Subtotal: {formatNumber(totalPriceSize)}</h3>
                  : <h3>Subtotal: {formatNumber(producto.precio)}</h3>
              }
            </div>
            <Link href='/amala/carrito'>
              <a className={styles.pay} onClick={() => { addToCart() }}>
                Ir a pagar
              </a>
            </Link>
            {
              cartAmala?.some((item: any) => item.id !== producto.id) || quantityPerItem === 0 ?
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    addToCart()
                  }}
                  className={styles.cart}
                  disabled={enableArea}
                >
                  Agregar al carrito
                </button>
                :
                <div>
                  <h3>Agregado: {quantityPerItem}</h3>
                  <button onClick={(event) => {
                    event.preventDefault()
                    addToCart()
                  }}
                    className={styles.cart}
                    disabled={enableArea}
                  >
                    Agregar otro
                  </button>

                  <button onClick={(event) => {
                    event.preventDefault()
                    removeItem(producto.id)
                  }} className={styles.cart}>Remover del carrito
                  </button>
                </div>
            }
          </form>
        </div>
      </div>
    </>
  )
}
