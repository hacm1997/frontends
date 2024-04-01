import styles from './styles.module.css'
import {ChangeEvent, useEffect, useState} from 'react';
import moment from "moment";
import stateService from '../../../../../services/formapi';
import config from "../../../../../services/config";
import Swal from "sweetalert2";
import SpinnerView from "../../../spinner/spinner";

export default function PantallaForm( props:any) {
    const currentDay = moment.utc().toJSON();
    const [pilotForm, setPilotForm] = useState<any>({ email: config.EMAIL_SENDER as string, dpto: '', schemes: '', soilStudy: '' });
    const handleFillPilot = async (e: any) => {
        const value = e.target.value;
        setPilotForm({ ...pilotForm, [e.target.name]: e.target.value })
    };
    const [file, setFile] = useState<File>();
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [file2, setFile2] = useState<File>();
    const [name2, setName2] = useState('');
    const [value2, setValue2] = useState('');
    const [showMore, setShowMore] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            setName(e.target.name);
            setValue(e.target.value)
            props.gaEventTracker("cargó archivo planos pantalla/barrete")
        }
    };
    const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile2(e.target.files[0]);
            setName2(e.target.name);
            setValue2(e.target.value)
            props.gaEventTracker("cargó archivo estudio suelos pantalla/barrete")
        }
    };

    const uploadFile = () =>{
        if(name) {
            stateService.s3Service({'uploaded_file': file}).then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("success upload file");
                    pilotForm.schemes = res.data.data;
                } else {
                    console.log("Error, cannot upload file");
                    stateService.deleteFileS3(value).then(response => {
                        console.log("File delete successful");
                        console.log(response)
                    }).catch(e => {
                        console.log(e);
                    });
                }
            }).catch((err) => {
                console.log(err)
                pilotForm.schemes = "#";
                //setPilotForm({...pilotForm, schemes:"res.data.data1"});
            })
        }
        if(name2) {
            stateService.s3Service({'uploaded_file': file2}).then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("success upload file");
                    pilotForm.soilStudy = res.data.data;
                } else {
                    console.log("Error, cannot upload file");
                    stateService.deleteFileS3(value).then(response => {
                        console.log("File delete successful");
                        console.log(response);
                    }).catch(e => {
                        console.log(e);
                    });
                }
            }).catch((err) => {
                console.log(err)
                pilotForm.soilStudy = "#";
            })
        }
    }

    const handleSubmitPilot = (e: any) => {
        uploadFile();
        e.preventDefault();
        setShowSpinner(true);
        saveForm();
    }
    //console.log("Pilot form filled => ", pilotFormSubmit);
    const saveForm = () => {
        window.setTimeout(function(){
            setShowSpinner(false);
            if(pilotForm.soilStudy != '' || pilotForm.schemes != ''){
                //console.log("data => ",pilotForm.schemes)
                const pilotFormSubmit = {
                    tenant: config.TENANT as string,
                    form_ref: "pilotaje",
                    created_at: currentDay,
                    comm_pref: ["email"],
                    form_data: pilotForm,
                    comm_options: {
                        transport: {
                            host: process.env.NEXT_PUBLIC_MAILER_HOST,
                            auth:{user: process.env.NEXT_PUBLIC_MAILER_SENDER as string, pass: process.env.NEXT_PUBLIC_PASSWORD as string}
                        },
                        mail: {
                            from: "Aceros Figurado" + '<' + process.env.NEXT_PUBLIC_MAILER_SENDER as string + '>',
                            subject: "Definición de proyecto - Pantallas y Barretes!",

                            html: "<h1>¡Nuevo Registro de: " + `${pilotForm.contractorName}` + "!</h1>"
                                +"<h3>Datos del solicitante:</h3>"
                                +"<li>Nombre del proyecto: "+`${pilotForm.projectName}`+"</li>"
                                +"<li>Ciudad del proyecto: "+`${pilotForm.city}`+"</li>"
                                +"<li>Dirección: "+`${pilotForm.projectAddress}`+"</li>"
                                +"<li>Espesor: "+`${pilotForm.thickness}`+"</li>"
                                +"<li>Longitud total: "+`${pilotForm.totalLength}`+"</li>"
                                +"<li>Profundidad de excavación"+`${pilotForm.diggingDepth}`+"</li>"
                                +"<li># Aprox. De pantallas: "+`${pilotForm.screensNumber}`+"</li>"
                                +"<li>M³ excavados: "+`${pilotForm.metersDigged}`+"</li>"
                                +"<p><strong>Estos son los documentos (si el documento no abre, es poruque la persona no adjunto ninguno)</strong></p>"
                                +`<li><a href=${pilotForm.schemes} target='_blank'><h5>Descargar Planos</h5></a></li>`
                                +`<li><a href=${pilotForm.soilStudy} target='_blank'><h5>Descargar Estudio de Suelo</h5></a></li>`
                                // +"<img src='cid:unique@welcome.ee'/>",
                                // attachments: [{
                                //     "filename": "logo-aceros-figurados.PNG",
                                //     "cid": "unique@welcome.ee"
                                // }],
                        }
                    }
                }
                stateService.postForm(pilotFormSubmit).then(resp => {
                    console.log(resp);
                    if (resp.status === 201) {
                        console.log("success");
                        props.gaEventTracker('Envió form definir proyecto-pantalla/barrete')
                        Swal.fire(
                            {
                                title: 'Tu datos han sido enviado',
                                text: 'Pronto estaremos en contacto contigo!',
                                icon: 'success'
                            }
                        )
                        window.setTimeout(function(){
                            location.reload();
                        } ,4000);
                    }else{
                        stateService.deleteFileS3(value).then(response => {
                            console.log("File delete successful");
                            console.log(response)
                        }).catch(e => {
                            console.log(e);
                        });
                    }
                })
            }
        } ,4000);
    }

    const dptoSelect = props.dpto.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ))
    const citySelect = props.city.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ))

    useEffect(()=>{
        props.setSelectDpto(pilotForm.dpto);
    }, [pilotForm.dpto]);
    return (
        <>
            <div className={styles.formulario_general}>

                <form onSubmit={handleSubmitPilot}>
                    <div className={styles.single_input}>
                        <select name="wallType" onChange={handleFillPilot} id="">
                            <option>Pantalla</option>
                            <option>Barrete</option>
                        </select>
                    </div>

                    <input name="contractorName" onChange={handleFillPilot} type="text" placeholder="Nombre del contratante*" required/>
                    <input name="projectName" onChange={handleFillPilot} type="text" placeholder="Nombre del proyecto*" required/>

                    <div className={styles.group_input}>
                        <select name="dpto" onChange={handleFillPilot} id="" required>
                            <option value="">Departamento del proyecto</option>
                            {dptoSelect}
                        </select>
                    </div>
                    <div className={styles.group_input}>
                        <select name="city" onChange={handleFillPilot} id="" required>
                            <option value="">Ciudad del proyecto</option>
                            {citySelect}
                        </select>
                        <input name="projectAddress" onChange={handleFillPilot} type="text" placeholder="Dirección del proyecto" required/>
                    </div>
                    <div className={styles.group_input}>
                        <input name="thickness" onChange={handleFillPilot} type="text" placeholder="Espesor*" />
                        <input name="totalLength" onChange={handleFillPilot} type="text" placeholder="Longitud total*" />
                    </div>
                    <div className={styles.group_input}>
                        <input name="diggingDepth" onChange={handleFillPilot} type="text" placeholder="Profundidad de excavación*" />
                        <input name="metersDigged" onChange={handleFillPilot} type="text" placeholder="M³ excavados*" />
                        {/*<input name="screensNumber" onChange={handleFillPilot} type="text" placeholder="# Aprox. De pantallas*" />*/}
                    </div>
                    {/*<div className={styles.group_input}>*/}
                    {/*    <input name="metersDigged" onChange={handleFillPilot} type="text" placeholder="M³ excavados*" />*/}
                    {/*    <input name="steelKilograms" onChange={handleFillPilot} type="text" placeholder="Kg de acero parrilas de refuerzo*" />*/}
                    {/*</div>*/}
                    {showSpinner ?
                        <SpinnerView/>
                    :<button type="submit">Enviar</button>}

                </form>
                <form encType="multipart/form-data">
                    <label>Archivos permitidos: .PDF / .DWG / .DXF (AUTOCAD)<br/>(max. 8MB)</label><hr/><br/>
                    <div className={styles.adjuntar}>
                        <div className={styles.group_adjuntar}>
                            <label id={styles.file} htmlFor="file1" className={styles.label_adjuntar}>
                                <img src="/images/adjuntar-1.png" alt="upload file" title="upload"/>
                                {name ?
                                    <p className={styles.nameFile}>{showMore ? value.substring(0, 30).split(/(\\|\/)/g).pop() : `${value.substring(0, 60).split(/(\\|\/)/g).pop()}`} {showMore ? "" : "..."}</p>
                                :null}
                            </label>
                            <input name="schemes" onChange={handleFileChange} id="file1" type="file" accept=".pdf,.dwg,.dxf" />
                        </div>
                        <div className={styles.group_adjuntar}>
                            <label id={styles.file} htmlFor="file2" className={styles.label_adjuntar}>
                                <img src="/images/adjuntar-2.png" alt="upload file" title="upload"/>
                                {name2 ?
                                    <p className={styles.nameFile}>{showMore ? value2.substring(0, 30).split(/(\\|\/)/g).pop()+'...' : `${value2.substring(0, 50).split(/(\\|\/)/g).pop()}`} {showMore ? "" : "..."}</p>
                                :null}
                            </label>
                            <input name="soilStudy" onChange={handleFileChange2} id="file2" type="file" accept=".pdf,.dwg,.dxf" />
                        </div>
                    </div>
                </form>
            </div>

            {/* {myHtml} */}
        </>
    )
}
