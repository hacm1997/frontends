import {
  FormDataStepFour,
  FormDataStepOne,
  FormDataStepThree,
  FormDataStepTwo,
} from '../../components/UtilComponents/schedulesForm/forms/types'

export const emailInfo = (
  dataOne: FormDataStepOne,
  dataTwo: FormDataStepTwo,
  dataThree: FormDataStepThree,
  dataFour: FormDataStepFour
) => {
  const body = 
  `
    <div style="max-width: 700px; background: #F2F4FE; padding-bottom: 16px;">
      <div>
        <p style="color: white; font-size: 20px; font-style: normal; font-weight: 700; background: #040f61 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center;"><span
            style="font-family: Helvetica,Arial,sans-serif;">
            Notificacion de cita agendada </span></p>
        <span style="font-family: Helvetica,Arial,sans-serif;"> </span></div>
      <span style="font-family: Helvetica,Arial,sans-serif;"> </span>
      <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"><span style="font-family: Helvetica,Arial,sans-serif;"></span>
        <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
          <span style="font-family: Helvetica,Arial,sans-serif;"> Informacion
            del cliente </span></p>
          <p style="padding-left: 10px;color: #040F61; font-size: 18px; font-style: normal; font-weight: 700; paadding-top: 20px;">
            <span style="font-family: Helvetica,Arial,sans-serif;">Nombre: <span
                style="color: #353535; font-weight: 500;">${dataThree.name} ${dataThree.lastName}</span></span>
          </p>
          <p style="padding-left: 10px;font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
            Telefono: <span style="color: #353535; font-weight: 500;">${dataThree.phone}</span>
          </p>
          <p style="padding-left: 10px;font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
            tipo de documento: <span style="color: #353535; font-weight: 500;">${dataThree.typeId}</span></p>
          <p style="padding-left: 10px;font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
            Cedula: <span style="color: #353535; font-weight: 500;">${dataThree.id}</span></p>
          <p style="padding-left: 10px;font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
            Correo: <span style="color: #353535; font-weight: 500;">${dataThree.email}</span></p>
      </div>
      <div style="margin-left:16px; margin-right: 16px; padding-bottom: 20px; background: white;"></span>
        <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
          <span style="font-family: Helvetica,Arial,sans-serif;">Tipo de
            servicio</span></p>
          <div style="text-align: center;"><img src="https://s3.amazonaws.com/gomedi.kru360.com/Multifiltros/1705588235147schedule%201.png"
              alt="schedule-icon" title="schedule" style="width: 200px; height: 200px; padding-top: 30px;"></div>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Servicio: <span style="color: #353535; font-weight: 500;">${dataOne.typeService} </span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Categoria del servicio: <span style="color: #353535; font-weight: 500;">${dataOne.service} ${dataOne.other}</span></p>
              <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Tipo de servicio: <span style="color: #353535; font-weight: 500;">${dataOne.subService}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Marca: <span style="color: #353535; font-weight: 500;">${dataTwo.brand}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Modelo: <span style="color: #353535; font-weight: 500;">${dataTwo.model}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Linea: <span style="color: #353535; font-weight: 500;">${dataTwo.line}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Año: <span style="color: #353535; font-weight: 500;">${dataTwo.year}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Kilometraje: <span style="color: #353535; font-weight: 500;">${dataTwo.km}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Placa: <span style="color: #353535; font-weight: 500;">${dataTwo.plate}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Cilindraje del motor: <span style="color: #353535; font-weight: 500;">${dataTwo.EngineDisplacement}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Marca de aceite: <span style="color: #353535; font-weight: 500;">${dataTwo.oilBrand}</span></p>
            <p style="padding-left: 10px; font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
              Viscosidad: <span style="color: #353535; font-weight: 500;">${dataTwo.goo}</span></p>
        </div>
      <div style="margin-left:16px; margin-right: 16px; background: white;"><span
        style="font-family: Helvetica,Arial,sans-serif;"></span>
        <p style="color: #eb4648; background: #ffe7e7 none repeat scroll 0% 0%; padding-top: 19px; padding-bottom: 19px; text-align: center; font-weight: 600; font-size: 20px;">
          <span style="font-family: Helvetica,Arial,sans-serif;"> Ubicación del
            servicio </span></p>
        <p style="color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">
          <span style="font-family: Helvetica,Arial,sans-serif;"> </span></p>
        <p style="color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;"><span
            style="font-family: Helvetica,Arial,sans-serif;">&nbsp; Ciudad: <span
              style="color: #353535; font-weight: 500;">
              ${dataFour.city}</span></span>
        </p>
        <p style="font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;">&nbsp;
          Direccion: <span style="color: #353535; font-weight: 500;">${dataFour.address}</span></p>
        <p style="font-family: Helvetica,Arial,sans-serif; color: #040F61; font-size: 18px; font-style: normal; font-weight: 700;"><span
            style="color: #353535; font-weight: 500;"><br>
          </span> </p>
      </div>
    </div>
  `

  return body
}
