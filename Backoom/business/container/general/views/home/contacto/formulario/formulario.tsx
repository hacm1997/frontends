import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Formulario({ contact }: any) {
  const router = useRouter();
  const [formContact, setFormContact] = useState({ Identificacion: "CC" });

  const keys = Object.keys(formContact);
  const values = Object.values(formContact);


  let dataToSend: any = []

  keys.map((e, i)=>(
    dataToSend = [...dataToSend, ` ${e}: ${values[i]}`]
  ))

  const wppContactUrl = `https://api.whatsapp.com/send?phone=573156059925&text=%C2%A1Hola%20Backoom%20vengo%20de%20su%20sitio%20web!%20%F0%9F%94%A9%%20Mis%20datos%20son:%20${dataToSend.toString()}.%20Me%20gustar%C3%ADa%20contactarme%20con%20un%20asesor`


  const handleChange = (e: any) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleTypeClient = (e: any) => {
    setFormContact({ ...formContact, Identificacion: e.target.value });
  };

  const validation = () => {
    if(dataToSend.length < 5){
      alert("¡Por favor ingrese todos los datos del formulario!");
    }else{
      window.open(wppContactUrl, '_blank');
    }
  }

  return (
    <>
      <div className={styles.formulario}>
        <div className={styles.content}>
          <h3>{contact.contactTitle}</h3>
          <p>{contact.contactContent}</p>
        </div>
        <form>
          <select
            name="id"
            defaultValue={contact.contactIdType.cedulaType}
            onChange={handleTypeClient}
            className={styles.personType}
            required
          >
            <option className={styles.personOption} value={contact.contactIdType.cedulaType}>
              Persona natural
            </option>
            <option className={styles.personOption} value={contact.contactIdType.nitType}>
              Persona jurídica
            </option>
          </select>

          <input
            name={formContact.Identificacion === "CC" ? "Nombre y apellido" : "Nombre de empresa"}
            type="text"
            placeholder={
              formContact.Identificacion === "CC"
                ? "Nombre y apellido"
                : "Nombre de empresa"
            }
            required
            onChange={handleChange}
          />

          <div className={styles.input_group}>
            <input
              name="Tipo de identificacion"
              value={formContact.Identificacion === "CC" ? "CC" : "NIT"}
              onChange={handleChange}
              className={styles.idType}
              readOnly
            />

            <input
              name="Numero de identificacion"
              type="text"
              placeholder={contact.idInputNumber}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="Correo electronico"
            type="text"
            placeholder={contact.inputEmail}
            onChange={handleChange}
            required
          />
          <input
            name="Telefono"
            type="text"
            placeholder={contact.inputTelCel}
            onChange={handleChange}
            required
          />
          <a onClick={validation} target="_blank" type="submit" title="Contacto">
            {contact.contactBtn.btnTitle}
          </a>
        </form>
      </div>
    </>
  );
}
