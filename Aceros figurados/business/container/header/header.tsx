import Head from "next/head";
import Script from "next/script";
import common from "../../../services/common.json"

export default function Header() {
    const data: any = common.headData
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Somos conocimiento y tradición en la industria de la cimentación. Nos caracteriza la experiencia y la eficiencia para realizar tus proyectos, dando soluciones oportunas hechas a la medida."/>
                <meta name="keywords" content={data.keywords}/>
                <title>Aceros Figurados | Experiencia en la industria de la cimentación</title>
                <meta name="author" content="Aceros Figurados"/>
                <meta name="copyright" content="Copyright Aceros Figurados" />
                <meta name="robots" content="index,follow" />
                <link rel="publisher" href="https://acerosfigurados.com" />
            </Head>
            <link rel="canonical" href="https://acerosfigurados.com"/>

        </>
    )
}
