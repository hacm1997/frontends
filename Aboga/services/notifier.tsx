import stateService from '../services/form_api';
import moment from "moment/moment";
import config from "./config";
import Swal from "sweetalert2";

export default function NotifierEmail(data:any, setDisplaySpinner:any){
    const currentDay = moment.utc().toJSON();

    const dataSend = {
        name: data.name,
        email: "info@aboga.co",
        emailSender: data.useremail,
        phone: data.phone,
        city: data.city,
        address: data.address,
        service: data.service,
        subscribe: data.subscribe
    }

    const notification = {
        tenant: config.TENANT as string,
        form_ref: "notification",
        created_at: currentDay,
        comm_pref: ["email"],
        form_data: dataSend,
        comm_options: {
            transport: {
                host: config.MAILER_HOST as string,
                auth:{user: config.EMAIL_GOOGLE as string, pass: config.PASSWORD_GOOGLE as string}
            },
            mail: {
                from: "ABOGA" + '<' + config.EMAIL_GOOGLE as string + '>',
                subject: "Registro Formulario de Contacto - ABOGA.CO",

                html: "<h1>¡Nuevo Registro de: " + `${dataSend.name}` + "!</h1>"
                    + "<p><strong>Información de registro:</strong></p>"
                    + "<li>Nombre completo: " + `${dataSend.name}` + "</li>"
                    + "<li>Correo electrónico: " + `${dataSend.emailSender}` + "</li>"
                    + "<li>Ciudad: " + `${dataSend.city}` + "</li>"
                    + "<li>Dirección: " + `${dataSend.address}` + "</li>"
                    + "<li>Teléfono: " + `${dataSend.phone}` + "</li>"
                    + "<li>Servicio: " + `${dataSend.service}` + "</li>"
                    + "<li>Usuario aceptó recibir noticias de ABOGA: " + `${dataSend.subscribe === "on" ? "Si" : "No"}` + "</li>"
            }
        }
    }

    return stateService.postForm(notification).then(resp => {
        console.log(resp);
        if (resp.status === 201) {
            console.log("success! notification send");
            setDisplaySpinner(false);
            Swal.fire(
                {
                    title: '¡Sus datos han sido enviados!',
                    text: 'Gracias por creer en ABOGA, pronto estaremos en contacto',
                    icon: 'success'
                }
            ).then(function() {
                window.location.reload();
            })
        }
    }).catch(( e: any ) => {
        console.log(e);
        setDisplaySpinner(false);
        Swal.fire(
            {
                title: '!No se han podido enviar los datos!',
                text: 'Porfavor, inténtelo nuevamente o más tarde',
                icon: 'error'
            }
        )
    });
}
