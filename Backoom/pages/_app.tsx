import "../styles/globals.css";
import type { AppProps } from "next/app";
import "boxicons/css/boxicons.min.css";
import {MyGlobalContext, useGlobalContext } from "../business/content/context/global_var";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.min.js");
      const tagManagerArgs = {
          gtmId: 'GTM-N8JJVMV'
      }

      TagManager.initialize(tagManagerArgs)
  }, []);
  return (
    <>
      <MyGlobalContext.Provider value={{value, setValue}}>
        <Component {...pageProps} />
      </MyGlobalContext.Provider>
    </>
  );
}
