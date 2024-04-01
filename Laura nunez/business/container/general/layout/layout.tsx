import React, {useEffect, useState} from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import "moment/locale/es";
import moment from "moment/moment";
import ProgressBar from "react-progressbar-on-scroll";
import common from "../../../../data_info/common.json"

moment.locale('es');

interface LayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

const Layout: React.FC<LayoutProps> = ({children, title, description}) => {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    const data: any = common.headData;
    return (
        <>
            <div>
                <Head>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                    <title>{title}</title>
                    <meta name="keywords" content={data.keywords}/>
                    <meta name="copyright" content="Copyright Laura Nuñez" />

                    <meta name="description" content={description}/>
                    <link rel="canonical" href="https://lauranunez.co"/>
                    <meta name="author" content="Laura Nuñez"/>
                    <meta name="robots" content="index, follow"/>
                    <meta name="googlebot" content="index, follow"/>
                    <meta name="title" content={title}/>

                </Head>

                <a href="https://api.whatsapp.com/send?phone=573126243074&text=Hola%20Lau%F0%9F%92%96,%20estuve%20revisando%20navegando%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20contigo"
                   title="Whatsapp"
                   className={styles.float} target="_blank" rel="noreferrer">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
                <div className={styles.progress_bar}>
                    <ProgressBar
                        color="#f61b06"
                        height={3}
                        direction="right"
                        position="top"
                        gradient={true}
                        gradientColor="#eee"
                    />
                </div>

                <NavBar/>

                {children}

                <Footer/>

            </div>
        </>
    )


}

export default Layout
