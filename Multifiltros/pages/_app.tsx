import type { AppProps } from 'next/app'
import '../styles/global.css'
import { EcommerceProvider } from '../data/contexts/EcommerceContext'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EcommerceProvider>
      <Component {...pageProps} />
      <Toaster richColors position='top-right'/>
    </EcommerceProvider>
  )

}