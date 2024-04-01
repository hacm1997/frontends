import Head from 'next/head'
import Home from './home'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const handleRouteChange = () => {
  pageview()
}

const FB_PIXEL_ID = '310530331998809'

const pageview = () => {
  window.fbq('track', 'PageView')
}

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
      </Script>
      <noscript><img height="1" width="1" style={{display:'none'}}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
      /></noscript>
      <div>
        <Head>
          <meta name="description" content="Somos Ownland | Encuentra la mejor ropa deportiva de alta calidad. Ropa para gym, CrossFit y entrenamiento. ¡Estilo y rendimiento en cada prenda!"/>
          <meta name="author" content="Ownland"/>
          <meta name="keywords" content=" Ropa deportiva, ropa de gym, ropa CrossFit, ropa para entrenar, ropa para hacer ejercicio"/>
          <link rel="canonical" href="https://ownlandco.com"/>
          <meta name="robots" content="index, follow"/>
          <title>OWNLAND | Diseñadores de ropa deportiva</title>
        </Head>
        <Home />
      </div>
    </>
  )
    
  
}

export default Page
