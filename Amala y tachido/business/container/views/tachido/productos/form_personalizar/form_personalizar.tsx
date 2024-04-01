/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import Radio from "./component/radio/radio"
import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../../../../../services/contexts/ShoppingCartContext'
import { formatNumber } from '../../../../../../services/functionsExport'
import Link from 'next/link'

export default function FormPersonalizar({ producto, enableArea }: any) {
  const [proteins, setProteins] = useState([])
  const [additional, setAdditional] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [priceDelivery, setPriceDelivery] = useState(0)
  const { cart, setCart, userData, setCartAll } = useContext(CartContext)

  const addToCart = () => {
    setCart((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === producto.id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === producto.id) {
            return { ...item, quantity: item.quantity + 1 }
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
            total: totalAmount,
            nombre: producto.nombre,
            additional,
            proteins
          }
        ]
      }
    })
    setCartAll((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === producto.id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === producto.id) {
            return { ...item, quantity: item.quantity + 1 }
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
            total: totalAmount,
            nombre: producto.nombre,
            additional,
            proteins
          }
        ]
      }
    })
  }

  const removeItem = (id: any) => {
    setCart((currItems: any) => {
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
  }

  const getQuantityById = (id: any) => {
    return cart.find((item: any) => item.id === producto.id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(producto.id)

  const handleProteinChange = (event: any) => {
    const value = event.target.value
    const checked = event.target.checked
    const price = event.target?.id

    if (checked) {
      // @ts-ignore
      setProteins([...proteins, { value, price }])
    } else {
      setProteins(proteins.filter((protein: any) => protein?.value !== value))
    }
  }

  const handleAdditionalChange = (event: any) => {
    const value = event.target.value
    const checked = event.target.checked
    const price = event.target.id

    if (checked) {
      // @ts-ignore
      setAdditional([...additional, { value, price }])
    } else {
      setAdditional(additional.filter((add: any) => add?.value !== value))
    }
  }

  const goToPay = () => {
    window.location.href = '/tachido/carrito'
  }

  const data = userData.barrio

  useEffect(() => {
    const priceDelivery = data?.split(' ', 1).join()
    setPriceDelivery(priceDelivery)
  }, [data])

  // precios unificados
  useEffect(() => {
    let totalProteinsPrice = 0
    if (producto.proteinas[0]?.precio) {
      totalProteinsPrice = proteins.reduce((total, protein: any) => total + parseFloat(protein.price), 0)
    }

    const totalAdditionalPrice = additional.reduce((total, add: any) => total + parseFloat(add.price), 0)

    const totalPriceWithProteinsAndAdditionals = producto.precio + totalProteinsPrice + totalAdditionalPrice
    setTotalAmount(totalPriceWithProteinsAndAdditionals)
  }, [proteins, additional, producto.precio, producto.proteinas])

  return (
    <>
      <div className={styles.form}>
        <div>

          <div className={styles.title}>
            <h2> Haz tu pedido</h2>
          </div>
          <form className={!enableArea ? " " : styles.form_disable}>
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

            {
              producto.proteinas.length > 1 && (
                <div className={styles.item1}>
                  <div>
                    <div className={styles.title}>
                      <h4>Elige Tus proteinas</h4>
                      <span>Obligatorio*</span>
                    </div>
                    <div className={styles.cardRadio}>
                      {
                        producto.proteinas?.map((protein: any, index: any) => {
                          return (
                            <Radio key={index}
                              id={protein.precio}
                              type="checkbox"
                              name={protein.nomnbre}
                              value={protein.nomnbre}
                              label={protein.nomnbre}
                              onChange={handleProteinChange}
                              disable={enableArea}
                            />
                          )
                        })}
                    </div>
                  </div>
                </div>
              )
            }

            {
              producto.adicionales.length > 1 && (
                <div className={styles.item2}>
                  <div className={styles.title}>
                    <h4>adiciones y salsas</h4>
                  </div>
                  {
                    producto.adicionales?.map((add: any, index: any) => {
                      return (
                        <div className={styles.group} key={index}>
                          <Radio
                            key={index}
                            type="checkbox"
                            name={add.nombre}
                            value={add.nombre}
                            label={add.nombre}
                            id={add.precio}
                            onChange={handleAdditionalChange}
                            disable={enableArea}
                          />
                          <div className={styles.linea}>
                          </div>
                          <span> {formatNumber(add.precio)}</span>
                        </div>
                      )
                    })}
                </div>
              )
            }

            <div>
              <h3>Subtotal: {formatNumber(totalAmount)}</h3>
            </div>
            <Link href='/tachido/carrito'>
              <a className={styles.pay} onClick={() => { addToCart() }}>
                Ir a pagar
              </a>
            </Link>
            {
              cart.some((item: any) => item.id !== producto.id) || quantityPerItem === 0 ?
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
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      addToCart()
                    }}
                    className={styles.cart}
                    disabled={enableArea}
                  >
                    Agregar otro
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      removeItem(producto.id)
                    }}
                    className={styles.cart}>
                    Remover del carrito
                  </button>
                </div>
            }
          </form>
        </div>
      </div>
    </>
  )
}
