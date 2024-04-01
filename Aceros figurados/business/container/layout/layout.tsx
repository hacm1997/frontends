import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import FloatWhatsapp from "../../component/whatsapp/floatWhatsapp";

export default function Layout({children}: any) {
    return (
        <>
            <Header/>
            <FloatWhatsapp/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
