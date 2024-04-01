/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CartContext } from '../../../../services/contexts/ShoppingCartContext'
import { useCookies } from 'react-cookie'
import Cart from './cart/cart'
import { NAV_LINKS } from '../../../../locales/es/header'

export default function Header() {
  const route = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies()
  const { cart } = useContext(CartContext)
  const { cartAmala } = useContext(CartContext)
  const menu_items = [
    {
      goAmala: "ir a Amala",
      goTachido: "ir a Tachido",
      url: "/amala",
      url2: "/tachido",
      active: false
    }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuClass = isMenuOpen ? styles.menuActive : styles.menu

  const quantity = cart.reduce((acc: any, curr: any) => {
    return acc + curr.quantity
  }, 0)
  const quantityAmala = cartAmala.reduce((acc: any, curr: any) => {
    return acc + curr.quantity
  }, 0)

  useEffect(() => {
    if (quantity === 0) {
      setCookie('marketTachido', [], { path: '/', maxAge: 3600 * 2000 })
    } else {
      const marketArray = JSON.stringify(cart)
      setCookie('marketTachido', marketArray, { path: '/', maxAge: 3600 * 2000 })
    }
  }, [quantity])

  useEffect(() => {
    if (quantityAmala === 0) {
      setCookie('marketAmala', [], { path: '/', maxAge: 3600 * 2000 })
    } else {
      const marketArrayAmala = JSON.stringify(cartAmala)
      setCookie('marketAmala', marketArrayAmala, { path: '/', maxAge: 3600 * 2000 })
    }
  }, [quantityAmala])

  const colorNav = () => {
    if (route.asPath.includes('/carrito') || route.asPath.includes('/producto')) {
      return `${styles.linkTachidoAlternativo}`
    }

    if (route.asPath.includes('/tachido') || route.asPath.includes('/amala')) {
      return `${styles.linkTachido}`
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.general}>
        <div className={styles.logos}>
          <Link href={route.asPath.includes('/tachido') ? '/tachido' : '/amala'}>
            {route.asPath.includes('/tachido') ? (
              <img src="/images/tachido/icono/tachido.png" alt="Logo Tachido" />
            ) : (
              <img src="/images/amala/icono/amala.png" alt="Logo Amala" />
            )}
          </Link>
        </div>

        <div className={menuClass}>
          <ul className={styles.menuLinks}>
            <Link href={route.asPath.includes('/tachido') ? '/tachido/#menu' : '/amala/#menu'}>
              <a className={colorNav()}>
                Menú
              </a>
            </Link>
            {
              // @ts-ignore
              menu_items?.map((item: any, index: any) => (
                <Link
                  key={index}
                  href={route.asPath.includes('/tachido') ? item.url : item.url2}
                >
                  <a className={colorNav()}>
                    {route.asPath.includes('/tachido') ? item.goAmala : item.goTachido}
                  </a>
                </Link>
              ))
            }
          </ul>
          <div className={styles.cart}>
            <Cart route={route} />
          </div>
          <div className={styles.contact}>

            <div className={styles.hour}>
              <div className={route.asPath.includes('/tachido') ? styles.icon : styles.icon2}>
                <i className="bx bx-time-five"></i>
              </div>
              <div className={
                route.asPath.includes('/producto') || route.asPath.includes('/carrito')
                  ? styles.content2
                  : styles.content
              }>
                <h2 className={route.asPath.includes('/tachido') ? styles.fontRed : styles.content}>
                  Horarios de atención
                </h2>
                <p className={route.asPath.includes('/tachido') ? styles.fontRed : ''}>
                  De domingo a domingo de 3:00 P.M a 11:00 P.M (Exceptuando los
                  martes)
                </p>
              </div>
            </div>

            <div
              className={
                route.asPath.includes('/tachido') ? styles.social : styles.social2
              }
            >
              <a target="_blank"
                href={route.asPath.includes('/tachido') ? 'https://www.facebook.com/tachidocol' : 'https://www.facebook.com/people/AMALA-Pizza/100064254241072/'}
                title="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a target="_blank"
                href={route.asPath.includes('/tachido') ? 'https://www.instagram.com/tachidocol/' : 'https://www.instagram.com/amalapizzacol/'}
                title="Instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
            {
              isMenuOpen && <a
                style={{ color: '#D30000', fontSize: '24px', fontWeight: 600 }}
                href={route.asPath.includes('/tachido') ? '/amala' : '/tachido'}
              >
                AMALA / TA&apos;CHIDO
              </a>
            }
          </div>
        </div>

        <div onClick={handleMenu} className={styles.botonMovil}>
          <i className={`bx ${isMenuOpen ? 'bx-x bx-sm' : 'bx-menu bx-sm'}`}></i>
        </div>
      </div>
    </nav>
  )
}
