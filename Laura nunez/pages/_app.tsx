import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import TagManager from 'react-gtm-module'
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";

ReactGA.initialize("G-2LTVVRQ52N");

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        })

    }, [])
  useEffect(() => {

      const tagManagerArgs = {
          gtmId: 'GTM-P5SV4TP'
      }

      TagManager.initialize(tagManagerArgs)

  },  [])
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
