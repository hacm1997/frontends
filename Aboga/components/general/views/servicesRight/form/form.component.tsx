import useTranslation from 'next-translate/useTranslation';
import styles from './form.module.css';
import { useEffect, useRef, useState } from 'react';
import config from '../../../../../services/config';
import NotifierEmail from "../../../../../services/notifier";
import SpinnerView from "../../../../conent/spinner/spinner";
import { useRouter } from 'next/router';
import AlliesComponent from '../../../../conent/allies/allies.component';

export default function FormServiceComponent(props: any) {
    const { t, lang } = useTranslation('services');
    const [valuesForm, setValuesForm] = useState<any>({ email: config.EMAIL_ABOGA as string });
    const [displaySpinner, setDisplaySpinner] = useState(false);
    const router = useRouter();
    const checkboxPolicyRef = useRef<any>(null);
    const checkboxSubscribeRef = useRef<any>(null);
    const valueService = router.asPath.includes('empresas') ? t(`${props.typeService}.${props.service}.title`) + " (empresas)" : t(`${props.typeService}.${props.service}.title`) + " (personas)"

    const handleForm = async (e: any) => {
        setValuesForm({ 
            ...valuesForm,
            policy: checkboxPolicyRef.current.checked,
            subscribe: checkboxSubscribeRef.current.checked,
            [e.target.name]: e.target.value 
        });
    }

    const dptoSelect = props.dpto.sort().map((item: any, index: any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const citySelect = props.city.sort().map((item: any, index: any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const submitForm = (e: any) => {
        e.preventDefault();
        setDisplaySpinner(true);
        props.gaEventTracker(`Clic Contactar - Formulario ${t(`${props.typeService}.${props.service}.title`)}`);
        props.gaEventTracker(`Registro De Formulario: ${valuesForm.name}`);
        NotifierEmail(valuesForm, setDisplaySpinner);
    }

    useEffect(() => {
        props.setSelectDpto(valuesForm.dpto);
    }, [valuesForm.dpto]);

    return (
        <>
            <div id='Form' className={'block md:flex items-center place-content-around ' + styles.background}>
                <div className='w-full md:w-[28%] mt-0 md:-mt-36 float-none md:float-right '>
                    
                   <div className='pt-10 md:pt-64 px-5 flex flex-col justify-center'>
                    <AlliesComponent/>
                    </div>
                    <div className={styles.titleP} data-aos="fade-up" data-aos-duration="1000">
                        <h4 className='text-center  '>
                            {t(`${props.typeService}.${props.service}.form.title1`)}
                            <span> {t(`${props.typeService}.${props.service}.form.titpleSpan`)} </span>
                            {t(`${props.typeService}.${props.service}.form.title2`)}
                        </h4>
                    </div>
                </div>
                <div className={'w-[80%] md:w-[45%] ml-10 ' + styles.form} data-aos="fade-up" data-aos-duration="1000">
                    <form onSubmit={submitForm}>
                        <div className={'flex justify-center ' + styles.form_text}>
                            <p className='text-center w-[80%]'>
                                <span>{t('form_general.form_data.title_span')} </span>
                                {t('form_general.form_data.title')}
                            </p>
                        </div>
                        <div>
                            <select className="w-full mt-5 pl-2" name="dpto" onChange={handleForm} required>
                                <option value="">{t('form_general.form_data.dpto')}</option>
                                {dptoSelect}
                            </select>
                        </div>
                        <div>
                            <select className="w-full mt-5 pl-2" name="city" onChange={handleForm} required>
                                <option value="">{t('form_general.form_data.city')}</option>
                                {citySelect}
                            </select>
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="address" type="text" placeholder={t('form_general.form_data.address')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="name" type="text" placeholder={t('form_general.form_data.fullname')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="phone" type="number" placeholder={t('form_general.form_data.phone')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="useremail" type="email" placeholder={t('form_general.form_data.email')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="service" type="text" value={router.asPath.includes('empresas') ? t(`${props.typeService}.${props.service}.title`) + " (empresas)" : t(`${props.typeService}.${props.service}.title`) + " (personas)"} onChange={handleForm} readOnly required />
                        </div>
                        <div className={styles.checkbox}>
                            <input ref={checkboxPolicyRef} type="checkbox" id="checkbox" onChange={handleForm} required />
                            <label htmlFor="checkbox">
                                He leído y acepto la             <a
                                    href="/documents/Política de tratamiento de datos personales - Aboga.pdf"
                                    title="Política de tratamiento de datos personales"
                                    target="_blank"
                                    className={styles.policy}
                                ><strong>política de privacidad</strong></a> de ABOGA.
                            </label>
                        </div>
                        <div className={styles.checkbox + " lg:w-[100%]"}>
                            <input ref={checkboxSubscribeRef} type="checkbox" id="checkbox" onChange={handleForm} />
                            <label htmlFor="checkbox">
                                Me gustaría recibir noticias sobre los servicios de ABOGA. Consiento recibir mensajes de ABOGA a mi correo electrónico.
                            </label>
                        </div>
                        <div className={styles.button + " lg:mt-11 mt-[70px]"}>
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
