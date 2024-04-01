import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import cotizar from "../../../../../../services/cotizar.json";
import { Cookies, useCookies } from "react-cookie";

function Formulario(props: any) {
  const contact = cotizar.contactForm;
  const [cookies, setCookie, removeCookie] = useCookies();
  const cookie = new Cookies();
  const [hidden, setHidden] = useState(true);
  const [hiddenBtn, setHiddenBtn] = useState(true);
  const [altCookie, setAltCookie] = useState([cookies.products]);

  const [productContact, setProductContact] = useState<any>({ id: "CC" });

  const handleTypeClient = (e: any) => {
    setProductContact({ ...productContact, id: e.target.value });
  };

  const handleChange = (e: any) => {
    setProductContact({ ...productContact, [e.target.name]: e.target.value });
  };

  const deleteCookie = () => {
    cookie.set("send", true, { path: "/" });
    setHidden(false)
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }

  const link_to_wsp = `https://api.whatsapp.com/send?phone=573156059925&text=%C2%A1Hola%20Backoom%20vengo%20de%20su%20sitio%20web!%20%F0%9F%94%A9%20Soy%20*${productContact.name}*%20mis%20datos%20de%20contacto%20son%0A*-Tipo%20Doc:*%20${productContact.id}%0A*-Num%20Doc:*%20${productContact.idNumber}%0A*-Email:*%20${productContact.email}%0A*-Teléfono:*%20${productContact.phone}%0AMe%20gustar%C3%ADa%20cotizar%20con%20ustedes%20los%20siguientes%20productos:%0A${props.products.toString().replace(/,/g, ' - ')}`

  useEffect(() => {
    setAltCookie(['']);
    if (!productContact.id || !productContact.name || !productContact.email || productContact.phone?.length < 7 || productContact.idNumber?.length < 7) {
      setHiddenBtn(true)
    } else {
      setHiddenBtn(false)
    }
  }, [productContact])

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
          >
            <option
              className={styles.personOption}
              value={contact.contactIdType.cedulaType}
            >
              Persona natural
            </option>
            <option
              className={styles.personOption}
              value={contact.contactIdType.nitType}
            >
              Persona jurídica
            </option>
          </select>

          <input
            name="name"
            type="text"
            placeholder={
              productContact.id === "CC"
                ? "Nombre y apellido persona natural"
                : "Nombre persona juridica"
            }
            onChange={handleChange}
            required
          />

          <div className={styles.input_group}>
            <input
              name="id"
              value={productContact.id === "CC" ? "CC" : "NIT"}
              onChange={handleChange}
              className={styles.idType}
              readOnly
            />

            <input
              name="idNumber"
              type="number"
              placeholder={contact.idInputNumber}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="email"
            type="text"
            placeholder={contact.inputEmail}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="number"
            placeholder={contact.inputTelCel}
            onChange={handleChange}
            required
          />
          {hiddenBtn ?
            <div className={styles.complete_inputs}>
              <p>*Por favor rellene todos los campos para poder cotizar sus productos*</p>
            </div>
            :
            <a href={link_to_wsp} target="_blank" type="submit" onClick={deleteCookie} title={contact.contactBtn.btnTitle}>
              {contact.contactBtn.btnTitle}
            </a>
          }

        </form>
      </div>
    </>
  );
}
export default Formulario;
