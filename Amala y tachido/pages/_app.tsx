import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'boxicons/css/boxicons.min.css'
import { ShoppingCartProvider } from '../services/contexts/ShoppingCartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider> 
  )
}

export default MyApp
