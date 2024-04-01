/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./form.module.css";
import { useEffect, useRef, useState } from "react";
import config from "../../../../../services/config";
import { useRouter } from "next/router";
import NotifierEmail from "../../../../../services/notifier";
import SpinnerView from "../../../../conent/spinner/spinner";
import AlliesComponent from "../../../../conent/allies/allies.component";

export default function FormComponent(props: any) {
  const [valuesForm, setValuesForm] = useState<any>({
    email: config.EMAIL_ABOGA as string,
  });
  const router = useRouter();
  const [service, setService] = useState([]);
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const checkboxPolicyRef = useRef<any>(null);
  const checkboxSubscribeRef = useRef<any>(null);

  const handleForm = async (e: any) => {
      setValuesForm({ 
          ...valuesForm,
          policy: checkboxPolicyRef.current.checked,
          subscribe: checkboxSubscribeRef.current.checked,
          [e.target.name]: e.target.value 
      });
  }

  const dptoSelect = props.dpto.sort().map((item: any, index: any) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  const citySelect = props.city.sort().map((item: any, index: any) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const submitForm = (e: any) => {
    e.preventDefault();
    setDisplaySpinner(true);
    props.gaEventTracker(`Asesorias legales - Formulario ${props.id}`);
    props.gaEventTracker(`Registro De Formulario: ${valuesForm.name}`);
    NotifierEmail(valuesForm, setDisplaySpinner);
  };

  useEffect(() => {
    props.setSelectDpto(valuesForm.dpto);
  }, [valuesForm.dpto]);

  useEffect(() => {
    if (valuesForm.type_service === "Servicio Personas") {
      setService(props.servicesP);
    } else if (valuesForm.type_service === "Servicio Empresas") {
      setService(props.servicesB);
    } else {
      setService([]);
    }
  }, [valuesForm.type_service]);

  // console.log('valuesForm => ', valuesForm)

  return (
    <>
      <div
        id="Form"
        className={
          router.asPath === "/asesorias-legales"
            ? "h-[auto] block p-5 md:flex md:p-0 place-content-around items-center bg-contain bg-no-repeat " +
              styles.content_general_advice
            : "h-[auto] block p-5 md:flex md:p-0 place-content-around items-center bg-contain bg-no-repeat " +
              styles.content_general
        }
      >
        <div className={styles.title}>
        <AlliesComponent/>
          {router.asPath === "/asesorias-legales" ? (
            <h4 className={"w-[450px] " + styles.h4_advice}>
              {props.translate("asesorias:form.title")}
            </h4>
          ) : (
            <h4>
              {props.translate("home:form.title")}
              <br />
              <span>{props.translate("home:form.title2")}</span>
            </h4>
          )}
        </div>
        <div className={styles.form}>
          <form onSubmit={submitForm}>
            <div>
              <select name="dpto" onChange={handleForm} required>
                <option value="">
                  {props.translate("home:form.inputs.dpto")}
                </option>
                {dptoSelect}
              </select>
            </div>
            <div>
              <select name="city" onChange={handleForm} required>
                <option value="">
                  {props.translate("home:form.inputs.city")}
                </option>
                {citySelect}
              </select>
            </div>
            <div>
              <input
                name="address"
                type="text"
                placeholder={props.translate("home:form.inputs.address")}
                onChange={handleForm}
                required
              />
            </div>
            <div>
              <input
                name="name"
                type="text"
                placeholder={props.translate("home:form.inputs.fullname")}
                onChange={handleForm}
                required
              />
            </div>
            <div>
              <input
                name="phone"
                type="number"
                placeholder={props.translate("home:form.inputs.phone")}
                onChange={handleForm}
                required
              />
            </div>
            <div>
              <input
                name="useremail"
                type="email"
                placeholder={props.translate("home:form.inputs.email")}
                onChange={handleForm}
                required
              />
            </div>
            {router.asPath.includes("asesorias") ? (
              <div>
                <select name="type_service" onChange={handleForm} required>
                  <option value="">Elige el tipo de asesoría</option>
                  <option value="Asesoría Básica">Asesoría básica</option>
                  <option value="Asesoría Superior">Asesoría superior</option>
                  <option value="Asesoría Integral">Asesoría integral</option>
                </select>
              </div>
            ) : (
              <div>
                {/* <select name="type_service" onChange={handleForm} required>
                  <option value="">
                    {props.translate("home:form.inputs.type_service")}
                  </option>
                  <option value="Servicio Personas">Servicio personas</option>
                  <option value="Servicio Empresas">Servicio empresas</option>
                </select> */}
              </div>
            )}
            {!router.asPath.includes("asesorias") ? (
              <div className="mb-4">
                {/* <select name="service" onChange={handleForm} required>
                  <option value="">
                    {props.translate("home:form.inputs.service")}
                  </option>
                  {service?.map((item: any, index: number) => (
                    <option key={index} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select> */}
                <select name="service" onChange={handleForm} required>
                  <option value="">
                    {props.translate("home:form.inputs.service")}
                  </option>
                  <option value='Jurisdicción coactiva'>Jurisdicción coactiva</option>
                  <option value='Derecho constitucional'>Derecho constitucional</option>
                </select>
              </div>
            ) : null}

            <div className={styles.checkbox}>
              <input ref={checkboxPolicyRef} type="checkbox" id="checkbox" onChange={handleForm} required/>
              <label htmlFor="checkbox">
                He leído y acepto la             <a
              href="/documents/Política de tratamiento de datos personales - Aboga.pdf"
              title="Política de tratamiento de datos personales"
              target="_blank"
              className={styles.policy}
            ><strong>política de privacidad</strong></a> de ABOGA.
              </label>
            </div>
            <div className={styles.checkbox+ " lg:w-[450px]"}>
              <input ref={checkboxSubscribeRef} type="checkbox" id="checkbox" onChange={handleForm}/>
              <label htmlFor="checkbox">
                Me gustaría recibir noticias sobre los servicios de ABOGA. Consiento recibir mensajes de ABOGA a mi correo electrónico.
              </label>
            </div>
            <div className={styles.button+ " lg:mt-11 mt-[70px]"}>
              {
                displaySpinner ?
                  <SpinnerView/>
                :
                <button className="w-full mt-5">Contactar</button>
              }
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
