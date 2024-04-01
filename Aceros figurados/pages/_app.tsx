import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import ReactGA from "react-ga4";
import {useEffect} from "react";

ReactGA.initialize("G-H13KEEVMRT");

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const tagManagerArgs = {
      gtmId: 'GTM-PR3HC83'
    }

    TagManager.initialize(tagManagerArgs)
  },[])
  return <Component {...pageProps} />
}

export default MyApp
