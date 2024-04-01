/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../services/contexts/ShoppingCartContext'
import { formatNumber } from '../../../../services/functionsExport'
import styles from './styles.module.css'

const CardGeneral = (props: any) => {
  const { allCart, setCartAll, setCart, setCartAmala } = useContext(CartContext)
  const [data, setData] = useState<any>()
  const id = props.data ? props.data.id : null
  const price = data ? data[0] ? data[0].precio : 0 : 0
  const sizes = props.data?.size?.map((size: any) => Number(size.price))
  const size = sizes?.reduce((acumulador: any, valorAnt: any) => acumulador + valorAnt, 0)

  const addToCart = () => {
    setCartAll((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === id) {
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
            id,
            quantity: 1,
            price
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
    if (allCart < 1) {
      setCartAll([])
      setCart([])
      setCartAmala([])
    }
  }

  const getQuantityById = (id: any) => {
    return allCart.find((item: any) => item.id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(id)

  const handleGetProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API as string}/api/products`)
    const data = await res.json()

    if (data.productos) {
      const product = data.productos.filter((product: any) => product.id === id)
      setData(product)
    }
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  return (
    <>
      <div className={styles.card}>
        <div className={styles.singleImg}>
          <img
            src={data ? data[0] ? data[0].img : null : null} alt={data ? data[0] ? data[0].nombre : null : null}
            style={{ maxWidth: '320px' }}
          />
          <div className={styles.content}>
            <h2>
              {data ? data[0] ? data[0].nombre : null : null}
            </h2>
            <span>Precio: {formatNumber(data ? data[0] ? data[0].precio : null : null)}</span><br />
            {
              props.data?.proteins < 1 ?? (
                <span>Proteinas:</span>
              )
            }
            {
              props.data?.proteins?.map((item: any) => (
                <ul key={item.id} className={styles.listAdd}>
                  <li>Proteina {item.value}: {formatNumber(item.price)}</li>
                </ul>
              ))
            }
            {
              props.data?.size?.length > 0 ? <span>Tamaño:</span> : null
            }
            {
              props.data?.size?.map((items: any, index: number) => (
                <ul key={index} className={styles.listAdd}>
                  <li>{items.value}: {formatNumber(items.price)}</li>
                </ul>
              ))
            }
            {
              props.data?.additional < 1 ?? (
                <span>Adicionales:</span>
              )
            }
            {props.data?.additional?.map((item: any, index: number) => (
              <ul key={index} className={styles.listAdd}>
                <li>{item.value}: {formatNumber(item.price)}</li>
              </ul>
            ))}
          </div>
        </div>


        <div className={styles.quantity}>
          <div className={styles.cantidad}>
            <i onClick={() => removeItem(id)} className='bx bx-minus'></i>
            <span>{quantityPerItem}</span>
            <i onClick={() => addToCart()} className='bx bx-plus'></i>
          </div>
          <span>Max. 5 paquetes*</span>
        </div>

        <div className={styles.price}>
          <p>
            {
              props.data?.size?.length > 0
                ? formatNumber(size * quantityPerItem)
                : formatNumber(props.data?.total * quantityPerItem === 0 ? props.data?.price * quantityPerItem : props.data?.total * quantityPerItem)
            }
          </p>
          <span>Paquete</span>
        </div>
      </div>
    </>
  )
}

export default CardGeneral