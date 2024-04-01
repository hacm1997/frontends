import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
export default function FormPrincipal(props:any) {
    const router = useRouter();

    const {t, lang} = useTranslation(router.asPath === '/pantalla-barrete' ? 'pantalla-barrete' : 'home');
    const [formData, setFormData] = useState<any>({});
    const link_wsp = `https://api.whatsapp.com/send?phone=573146385078&text=Hola%20Aceros%20Figurados👋%0AVengo%20de%20su%20sitio%20web🌐%2C%20mi%20nombre%20es%20${formData.name}%20y%20quiero%20programar%20una%20cita%20con%20ustedes%20para%20mayor%20asesoría.👍%0AMis%20datos%20son%3A%0ATel%2Fcel%3A%20${formData.phone}%0AEmail%3A%20${formData.email}`;

    const handlerForm = async (e:any) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
    //console.log("form => ", formData);

    const openWsp = () =>{
        if(formData.name && formData.email && formData.email){
            props.gaEventTracker(`Envió formulario-${formData.name}`)
            window.open(link_wsp);
            window.setTimeout(function(){
                location.reload();
            } ,4000);
        }else{
            Swal.fire(
                {
                    title: '¡Formulario incompleto!',
                    text: 'Por favor ingresa todos los datos para tener una mejor asesoría',
                    icon: 'warning'
                }
            )
        }
    }

    const input_iten = t<any>("contact.item", {}, {returnObjects: true});
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>¡Programa tu cita ahora!</h2>
                        <p>Déjanos tus datos y nos pondremos en contacto contigo</p>
                    </div>

                    <div className={styles.formGeneral}>


                        <form action="">
                            {
                                input_iten.map((item: any, index: number) => {
                                    return (
                                        <input onChange={handlerForm} key={index} placeholder={item.placeholder} name={item.name} type={item.type} required/>
                                    )
                                })
                            }
                            <button onClick={openWsp} type="button">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className={styles.suelo}>
                    <img src="/images/piso-piedra.png" alt="Stone floor" title="Stone floor"/>
                </div>

            </section>
        </>
    )
}
