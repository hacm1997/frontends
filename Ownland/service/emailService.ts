import React from 'react'
import stateService from './formservice'
import Swal from 'sweetalert2'

interface emailData {
  name: string,
  email_send: string,
  email: string,
  cel: any,
}
const emailService = (emailInfo: emailData) => {
  const currentDay = new Date()
  const FormSubmit = {
    tenant: process.env.NEXT_PUBLIC_TENANT as string,
    form_ref: 'ownland',
    created_at: '2023-11-15',
    comm_pref: ['email'],
    form_data: emailInfo,
    comm_options: {
      transport: {
        host: process.env.NEXT_PUBLIC_MAILER_HOST as string,
        auth:{user: process.env.NEXT_PUBLIC_MAILER_SENDER as string, pass: process.env.NEXT_PUBLIC_PASSWORD as string}
      },
      mail: {
        from: 'OWNLAND' + '<' + emailInfo.email_send + '>',
        subject: 'INFORMACIÓN DE CONTÁCTO',

        html: '<!DOCTYPE html>\n' +
                '<html>\n' +
                '  <head>\n' +
                '    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n' +
                '    <title></title>\n' +
                '  </head>\n' +
                '  <body style="              max-width: 600px; margin: auto;">\n' +
                '    <div>\n' +
                '      <div style="text-align: center;"><img src="https://s3.amazonaws.com/gomedi.kru360.com/OWNLAND/1700160961991ownland.png"/>\n' +
                '      <h2 style="font-size:22px; font-weight:bold; color:#c0c0c0">Tienes un nuevo suscriptor:</h2>\n' +
                `      <h1 style="font-size:24px; font-weight:bold; color:#375a9d">${emailInfo.email_send}</h1>\n` +
                '     </div>\n'+
                '    </div>\n' +
                '  </body>\n' +
                '</html>\n'
      }
    }
  }
  console.log(FormSubmit)
  return stateService.formService(FormSubmit).then((resp:any) => {
    console.log(resp)
    if (resp.status === 201) {
      console.log('success! notification send')
      Swal.fire(
        {
          title: '!Datos enviados!',
          text: 'Gracias por ponerte en contacto con nosotros',
          icon: 'success'
        }
      )
    }
  }).catch(( e: any ) => {
    console.log(e)
    Swal.fire(
      {
        title: '!No se puedo enviar!',
        text: 'Por favor inténtelo de nuevo o más tarde',
        icon: 'error'
      }
    )
  })
}


export default emailService