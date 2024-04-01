export const invoiceEmailNotification = (
  dataInvoice: any | null,
  dataProducts: any[],
  storePickUpInfo: {
    address: string,
    note: string,
    whoPicks: string
  }
) =>{
  const listProducts = Array.isArray(dataProducts) ? dataProducts.map((item) => {
    return(
      `<li>nombe de producto : ${item.title}</li>` +
      `<li>precio unitario : ${item.price}</li> <hr/>`
    )
  }) : null
  if(dataInvoice){
    const body = 
    `<div style="max-width: 700px; background: #F2F4FE; padding-bottom: 16px;">
    <div>
      <p style="color: white; font-size: 20px; font-style: normal; font-weight: 700; background: #040f61 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center;"><span
          style="font-family: Helvetica,Arial,sans-serif;"> Factura de compra
          multifiltros </span></p>
      <span style="font-family: Helvetica,Arial,sans-serif;"> </span></div>
    <span style="font-family: Helvetica,Arial,sans-serif;"> </span>
    <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"><span
        style="font-family: Helvetica,Arial,sans-serif;"></span>
      <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;"> Informacion
          del cliente </span></p>
      <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;">Nombre: <span
            style="color: #353535; font-weight: 500;">${dataInvoice.x_extra3}</span></span>
      </p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Telefono: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_extra6}</span>
      </p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Tipo de documento: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_extra9}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Cedula: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_extra4}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Correo: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_extra2}</span></p>
    </div>
    <span style="font-family: Helvetica,Arial,sans-serif;"> </span>
    <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"><span
        style="font-family: Helvetica,Arial,sans-serif;"></span>
      <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;"> Resumen de
          factura </span></p>
      <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;">ID de factura:
          <span style="color: #353535; font-weight: 500;">${dataInvoice.x_id_invoice}</span></span>
      </p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Descripción: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_description}</span> </p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Entidad bancaria: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_bank_name}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Metodo de pago: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_type_payment}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Estado de transaccion: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_response}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Fecha de la transaccion: <span style="color: #353535; font-weight: 500;">${dataInvoice.x_transaction_date}</span></p>
    </div>
${
  storePickUpInfo.address !== ''  && storePickUpInfo.note !== '' && storePickUpInfo.whoPicks !== '' ? 
    `
  <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"><span
      style="font-family: Helvetica,Arial,sans-serif;"></span>
    <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
      <span style="font-family: Helvetica,Arial,sans-serif;"> Informacion adicional </span></p>
    <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
      <span style="font-family: Helvetica,Arial,sans-serif;">Dirección:
        <span style="color: #353535; font-weight: 500;">${storePickUpInfo.address}</span></span>
    </p>
    <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
      <span style="font-family: Helvetica,Arial,sans-serif;">Nota:
        <span style="color: #353535; font-weight: 500;">${storePickUpInfo.note}</span></span>
    </p>
    <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
      <span style="font-family: Helvetica,Arial,sans-serif;">Quien recoge:
        <span style="color: #353535; font-weight: 500;">${storePickUpInfo.whoPicks}</span></span>
    </p>
    </div>
  `
    : ''}
    <span style="font-family: Helvetica,Arial,sans-serif;"> </span>
    <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"><span
        style="font-family: Helvetica,Arial,sans-serif;"></span>
      <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;"> Resumen de
          compra </span></p>
      <p style="padding-left: 10px; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; padding-top:20px;">
        <span style="font-family: Helvetica,Arial,sans-serif;">Productos :</span>
      </p>
      <ul>
      ${listProducts}
      </ul>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Costo de envio: <span style="color: #353535; font-weight: 500;">$
          ${dataInvoice.x_extra7}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Total de la compra: <span style="color: #353535; font-weight: 500;">$
          ${dataInvoice.x_amount}</span></p>
      <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
        Entidad: <span style="color: #353535; font-weight: 500;">Multifiltros</span></p>
    </div>
  </div>`
    return body
  }else{
    return ''
  }
}