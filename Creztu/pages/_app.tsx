import type { AppProps } from 'next/app'
import '../styles/global.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out'
    })
  }, [])

  return <Component {...pageProps} />
}