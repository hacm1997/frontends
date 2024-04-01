import {ChangeEvent, useEffect, useState} from 'react';
import styles from './styles.module.css';
import moment from "moment";
import stateService from '../../../../../services/formapi';
import config from "../../../../../services/config";
import SpinnerView from "../../../spinner/spinner";

export default function PilotajeForm( props:any) {
    const currentDay = moment.utc().toJSON();
    const Swal = require('sweetalert2');
    const [wallForm, setWallForm] = useState<any>({email: config.EMAIL_SENDER as string, dpto: '', wallSchemes: '', wallStudies: ''});
    const handleFillWall = async (e: any) => {
        const value = e.target.value;
        setWallForm({...wallForm, [e.target.name]: e.target.value})
    }
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
            props.gaEventTracker("cargó archivo de planos pilotaje")
        }
    };
    const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile2(e.target.files[0]);
            setName2(e.target.name);
            setValue2(e.target.value)
            props.gaEventTracker("cargó archivo estudio suelos pilotaje")
        }
    };

    const uploadFile = () =>{
        if(name) {
            stateService.s3Service({'uploaded_file': file}).then(res => {

                if (res.status === 200) {
                    console.log("success upload file");
                    wallForm.wallSchemes = res.data.data;
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
                console.log(err);
                wallForm.wallSchemes = "#";
            })
        }
        if(name2) {
            stateService.s3Service({'uploaded_file': file2}).then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("success upload file");
                    wallForm.wallStudies = res.data.data;
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
                console.log(err);
                wallForm.wallStudies = "#";
            })
        }
    }
    //console.log(file)
    const handleSubmitWall = async (e: any) => {
        uploadFile();
        e.preventDefault();
        setShowSpinner(true);
        saveForm();
    }

    const saveForm = () => {
        window.setTimeout(function(){
            setShowSpinner(false);
            if(wallForm.wallStudies != '' || wallForm.wallSchemes != '') {
                const wallFormSubmit = {
                    tenant: config.TENANT as string,
                    form_ref: "pantalla",
                    created_at: currentDay,
                    comm_pref: ["email"],
                    form_data: wallForm,
                    comm_options: {
                        transport: {
                            host: process.env.NEXT_PUBLIC_MAILER_HOST,
                            auth: { user: process.env.NEXT_PUBLIC_MAILER_SENDER as string, pass: process.env.NEXT_PUBLIC_PASSWORD as string}
                        },
                        mail: {
                            from: "Aceros Figurado" + '<' + process.env.NEXT_PUBLIC_MAILER_SENDER as string + '>',
                            subject: "Definición de proyecto - Pilotaje!",

                            html: "<h1>¡Nuevo Registro de: " + `${wallForm.contractorName}` + "!</h1>"
                                +"<p><strong>Datos del solicitante:</strong></p>"
                                +"<li>Nombre del proyecto: "+`${wallForm.projectName}`+"</li>"
                                +"<li>Ciudad del proyecto: "+`${wallForm.city}`+"</li>"
                                +"<li>Dirección: "+`${wallForm.projectAddress}`+"</li>"
                                +"<li>Diámetro: "+`${wallForm.diameter}`+"</li>"
                                +"<li>Longitud total: "+`${wallForm.totalLength}`+"</li>"
                                +"<p><strong>Estos son los documentos (si el documento no abre, es poruque la persona no adjunto ninguno)</strong></p>"
                                +"<li><a href="+`${wallForm.wallSchemes}`+"target='_blank'><h5>Descargar Planos</h5></a></li>"
                                +"<li><a href="+`${wallForm.wallStudies}`+"target='_blank'><h5>Descargar Estudio de Suelo</h5></a></li>"
                                // +"<img src='cid:unique@welcome.ee'/>",
                                // attachments: [{
                                //     "filename": "Email-confirmacion-etrips.jpg",
                                //     "cid": "unique@welcome.ee"
                                // }],
                        }
                    }
                }
                stateService.postForm(wallFormSubmit).then(res => {
                    console.log(res);
                    if (res.status === 201) {
                        props.gaEventTracker('Envió form. Pilotaje - pantalla/barrete')
                        console.log("success");
                        Swal.fire({
                            title: 'Tu datos han sido enviado',
                            text: 'Pronto estaremos en contacto contigo!',
                            icon: 'success'
                        })
                        window.setTimeout(function () {
                            location.reload();
                        }, 4000);
                    } else {
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
        props.setSelectDpto(wallForm.dpto);
    }, [wallForm.dpto]);

    return (
        <>
            <div className={styles.formulario_general}>
                <div className={styles.formulario_general}>
                    <form onSubmit={handleSubmitWall} >
                        <input name="contractorName" onChange={handleFillWall} type="text" placeholder="Nombre del contratante*" required/>
                        <input name="projectName" onChange={handleFillWall} type="text" placeholder="Nombre del proyecto*" required/>
                        <div className={styles.group_input}>
                            <select name="dpto" onChange={handleFillWall} id="" required>
                                <option value="">Departamento del proyecto</option>
                                {dptoSelect}
                            </select>
                        </div>
                        <div className={styles.group_input}>
                            <select name="city" onChange={handleFillWall} id="" required>
                                <option value="">Ciudad del proyecto</option>
                                {citySelect}
                            </select>
                            <input name="projectAddress" onChange={handleFillWall} type="text" placeholder="Dirección del proyecto" required/>
                        </div>
                        <div className={styles.group_input}>
                            <input name="diameter" onChange={handleFillWall} type="text" placeholder="Diámetro*" />
                            <input name="totalLength" onChange={handleFillWall} type="text" placeholder="Longitud total*" />
                            {/*<input name="totalLenght2" onChange={handleFillWall} type="text" placeholder="Longitud total*" />*/}
                        </div>
                        {showSpinner ?
                            <SpinnerView/>
                        :<button type="submit">Enviar</button>}
                    </form>
                    <form encType="multipart/form-data">
                        <label>Archivos permitidos: .PDF / .DWG / .DXF (AUTOCAD)<br/>(max. 8MB)</label><hr/><br/>
                        <div className={styles.adjuntar}>

                            <div className={styles.group_adjuntar}>
                                <label id={styles.file} htmlFor="file11" className={styles.label_adjuntar}>
                                    <img src="/images/adjuntar-1.png" alt="upload file" title="upload"/>
                                    {name ?
                                        <p className={styles.nameFile}>{showMore ? value.substring(0, 30).split(/(\\|\/)/g).pop()+'...' : `${value.substring(0, 50).split(/(\\|\/)/g).pop()}`} {showMore ? "" : "..."}</p>
                                    :null}
                                </label>

                                <input name="wallSchemes" onChange={handleFileChange} id="file11" type="file" accept=".pdf,.dwg,.dxf" />
                            </div>
                            <div className={styles.group_adjuntar}>
                                <label id={styles.file} htmlFor="file22" className={styles.label_adjuntar}>
                                    <img src="/images/adjuntar-2.png" alt="upload file" title="upload"/>
                                    {name2 ?
                                        <p className={styles.nameFile}>{showMore ? value2.substring(0, 30).split(/(\\|\/)/g).pop()+'...' : `${value2.substring(0, 50).split(/(\\|\/)/g).pop()}`} {showMore ? "" : "..."}</p>
                                    :null}
                                </label>
                                <input name="wallStudies" onChange={handleFileChange2} id="file22" type="file" accept=".pdf,.dwg,.dxf" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
