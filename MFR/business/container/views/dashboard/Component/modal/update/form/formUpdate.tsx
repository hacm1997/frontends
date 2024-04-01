import styles from "./styles.module.css";
import InputImput from "./inputImput/inputImput";
import BtnSave from "./btnSave/btnUpdate";
import React, {ChangeEvent, useEffect, useState} from "react";
import config from "../../../../../../../../infrastructure/config";
import axios from "axios";
import GalleryUpdate from "./gallery/gallery";
import PlansUpdate from "./plans/plans";
import { formatNumber } from "../../../../../../../../service/service";

interface SeassonPrice {
    name_seasson: string,
    seasson_init_date: string,
    seasson_end_date: string,
    bedroomPrice: number,
    bedroomCouplePrice: number,
    sesson_cleanliness: number,
}
export default function UpdateApto({closeModal, code_apto}:any) {

    //console.log(code_apto)
    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<any>();
    const [values, setValues] = useState<any>({tenant:config.TENANT});
    const [gallery, setGallery] = useState<any>([]);
    const [plans, setPlans] = useState<any>([]);
    const [newGallery, setNewGallery] = useState<any>();
    const [newGalleryDev, setNewGalleryDev] = useState<any>([]);
    const [newPlans, setNewPlans] = useState<any>();
    const [newPlansDev, setNewPlansDev] = useState<any>([]);
    const [newSeasson, setNewSeasson] = useState<any>([]);
    const [newSeassonDev, setNewSeassonDev] = useState<any>([]);
    const [galleyDelete, setGalleryDelete] = useState<Array<any>>([]);
    const [seassonDelete, setSeassonDelete] = useState<Array<any>>([]);
    const [plansDelete, setPlansDelete] = useState<Array<any>>([]);
    const [dpto, setDpto] = useState({
        resource_id: "", name:"", description: "", owner: "", status: "", characteristics: [{}]
    })
    const [priceBySeasson, setPriceBySeasson] = useState<SeassonPrice[]>([]);
    const [priceBySeassonForm, setPriceBySeassonForm] = useState<SeassonPrice>({
        name_seasson: '',
        seasson_init_date: '',
        seasson_end_date: '',
        bedroomPrice: 0,
        bedroomCouplePrice: 0,
        sesson_cleanliness: 0,
    });

    const characteristics = (code: string) => {
        return dpto.characteristics.filter(((char: any) => char.code === code)).map((obj: any) => obj.value)
    }

    const handleChange = (evt:any) =>{
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value.split(/(\\|\/)/g).pop()
        });
    }
    // console.log(values)
    const handleChangeUpdate = (evt:any) =>{
        const value = evt.target.value;
        setDpto({
            ...dpto,
            [evt.target.name]: value
        });
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const btn_close = () => {
        closeModal(false);
    }

    const getRcode = () => {
        const configuration = {
            method: 'get',
            headers: {
                xsrfCookie: `tenant=${config.TENANT as string}`,
            },
            url: config.API_URL+'/api/v1/resource/search?resource_id='+code_apto,
            withCredentials: true
        }

        axios.request(configuration).then((response) => {
            // console.log("Response => ",response.data.data[0]);
            setDpto(response.data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getRcode()
        values.description = dpto?.description;
        values.beds = characteristics("beds").toString();
        values.type = characteristics("type").toString();
        values.bathrooms = characteristics("bathrooms").toString();
        values.bedrooms = characteristics("bedrooms").toString();
        values.rooms = characteristics("rooms").toString();
        values.capacity_adults = characteristics("capacity_adults").toString();
        values.capacity_kids = characteristics("capacity_kids").toString();
        values.location = characteristics("location").toString();
        values.price = characteristics("price").toString();
        values.currency = characteristics("currency").toString();
        values.wifi = characteristics('wifi').toString();
        values.view_sea = characteristics('view_sea').toString();
        values.parking =characteristics('parking').toString();
        values.pool=characteristics('pool').toString();
        values.access_beach=characteristics('access_beach').toString();
        values.washer=characteristics('washer').toString();
        values.air_conditioning=characteristics('air_conditioning').toString();
        values.kitchen=characteristics('kitchen').toString();
        values.airport=characteristics('airport').toString();
        values.pets=characteristics('pets').toString();
        values.historic_center=characteristics('historic_center').toString();
        values.smoke=characteristics('smoke').toString();
        values.calendar=characteristics('calendar').toString();
        values.entry_time=characteristics('entry_time').toString();
        values.departure_time=characteristics('departure_time').toString();
        values.sofa_bed=characteristics('sofa_bed').toString();
        values.durationAvailable=characteristics('durationAvailable').toString();
        values.location_map=characteristics('location_map').toString();
        values.id_calendar=characteristics('id_calendar').toString();
        values.id_calendar_g=characteristics('id_calendar_g').toString();
        values.link_google=characteristics('link_google').toString();
        values.imagePrincipal=characteristics('imagePrincipal').toString();
        values.gallery= characteristics("gallery")[0];
        values.plans=characteristics("plans")[0];
        values.description_english=characteristics('description_english').toString();
        values.tv=characteristics('tv').toString();
        values.heater=characteristics('heater').toString();
        values.jacuzzi=characteristics('jacuzzi').toString();
        values.gym=characteristics('gym').toString();
        values.date_block=characteristics('date_block')[0];
        values.events=characteristics('events')[0];
        values.bracelet=characteristics('bracelet')[0];
        values.bracelet_info=characteristics('bracelet_info').toString();
        values.anticipation_days=characteristics('anticipation_days');
        values.building=characteristics('building');
        values.cleanliness=characteristics('cleanliness')[0];
        values.price_couple=characteristics('price_couple')[0];
        values.priceBySeasson= characteristics("priceBySeasson")[0];
        setNewGallery(characteristics("gallery")[0]);
        setNewPlans(characteristics("plans")[0]);
        setNewSeasson(characteristics("priceBySeasson")[0]);
        //validateImg()
    }, [dpto.resource_id])

    // preview new principal image
    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    let arrayViewSeasson: any[] = []
    const  deleteSeasson = (id:number) => {

        if(newSeasson){
            if (Array.isArray(newSeasson)){
                seassonDelete.push(newSeasson[id]);
                values.priceBySeasson.splice(id, id);
                if(id === 0){
                    values.priceBySeasson.splice(id, id+1)
                    setNewSeassonDev(newSeasson);
                }else{
                    values.priceBySeasson.splice(id, 1);
                    setNewSeassonDev(newSeasson);
                }
            }
        }

        arrayViewSeasson.push(newSeasson);
        setNewSeassonDev(arrayViewSeasson);
    }

    const handlerSeasson = (e:any) => {
        if(!priceBySeassonForm.name_seasson && !priceBySeassonForm.seasson_init_date && !priceBySeassonForm.seasson_end_date && priceBySeassonForm.bedroomCouplePrice <= 0 && priceBySeassonForm.bedroomPrice <= 0){
            alert('Debe ingresar todos los campos!')
        }else{
            setPriceBySeasson([...priceBySeasson, priceBySeassonForm]);
            if (!values.priceBySeasson) {
                values.priceBySeasson = [];
              }
                values.priceBySeasson.push(priceBySeassonForm)
                // Limpiar el formulario después de agregar
                setPriceBySeassonForm({
                  name_seasson: '',
                  seasson_init_date: '',
                  seasson_end_date: '',
                  bedroomPrice: 0,
                  bedroomCouplePrice: 0,
                  sesson_cleanliness: 0,
                });
                console.log('blank => ', priceBySeassonForm)
            
        }
    }

    let arrayView: any[] = []
    const  deleteImageGallery = (id:number) => {

        if(newGallery){
            if (Array.isArray(newGallery.data)){
                galleyDelete.push(newGallery.data[id]);
                // values.gallery.data.splice(id, id);
                if(id === 0){
                    newGallery.data.splice(id, id+1)
                    setNewGalleryDev(newGallery);
                }else{
                    newGallery.data.splice(id, 1);
                    setNewGalleryDev(newGallery);
                }
            }
        }

        arrayView.push(newGallery);
        setNewGalleryDev(arrayView);
        // console.log("array view => ",arrayView);
    }

    let arrayViewPlans: any[] = []
    const  deleteImagePlans = (id:number) => {
        if(values.plans){
            if (Array.isArray(newPlans.data)){
                // values.gallery.data.splice(id, id);
                plansDelete.push(newPlans.data[id])
                // console.log("plans id => ",newPlans.data[id]);
                if(id === 0){
                    newPlans.data.splice(id, id+1);
                    setNewPlansDev(newPlans);
                }else{
                    newPlans.data.splice(id, 1);
                    setNewPlansDev(newPlans);
                }
                // console.log("id array => ", id)

            }
        }

        arrayViewPlans.push(newPlans);
        setNewGalleryDev(arrayViewPlans);
    }
    // console.log("savePlansToDelete => ",plansDelete)
    const handleGallery = (e: ChangeEvent<HTMLInputElement>) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        //console.log("gallery choosen => ", chosenFiles)
        if (chosenFiles.length <= 10) {
            setGallery(chosenFiles);
        }else{
            alert("Solo se pueden añadir 10 imagenes!");
            e.target.value = '';
        }
    };

    const handlePlans= (e: ChangeEvent<HTMLInputElement>) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        if (chosenFiles.length <= 10) {
            setPlans(chosenFiles);
        }else{
            alert("Solo se pueden añadir 10 imagenes!");
            e.target.value = '';
        }
    };

    const setSeassonPrice = (e:any) =>{
        const { name, value } = e.target;
        setPriceBySeassonForm({
        ...priceBySeassonForm,
        [name]: value,
        });
    }
    console.log(values)
    return (
        <>
            <div className={"row "+ styles.header_body}>
                <div className={"col"}>
                    <h4>Editar apartamento</h4>
                </div>
                <div className={"col " +styles.close}>
                    <a title="Cancelar" onClick={btn_close}>
                        <i className='bx bx-x'></i>
                    </a>
                </div>
            </div>

            <div className={styles.general}>
                <form className={styles.form}>

                    <h5>Principal</h5>
                    <div className={"row "+ styles.inputForm}>
                        <div className="col-4" >
                            <label><strong>Código apto</strong></label><br/>
                            <InputImput
                                type="text" name="resource_id"
                                value={dpto.resource_id}
                                onChange={handleChangeUpdate}
                                // disabled
                            />
                        </div>
                        <div className="col-4">
                            <label><strong>Nombre</strong></label><br/>
                            <InputImput
                                type={"text"} name="name"
                                value={dpto.name}
                                onChange={handleChangeUpdate}

                            />
                        </div>
                        
                        <div className={"col-4 "+styles.selects}>
                            <label><strong>Tipo</strong></label><br/>
                            {values.type === 'Vacaciones' ?
                                <select onChange={handleChangeUpdate} name="type" required>
                                    <option value={values.type}>{values.type}</option>
                                    <option value="Trabajo" >Trabajo</option>
                                    <option value="Compra" >Para compra</option>
                                </select>
                            : values.type === 'Trabajo' ?
                                <select onChange={handleChangeUpdate} name="type" required>
                                    <option value={values.type}>{values.type}</option>
                                    <option value="Vacaciones" >Vacaciones</option>
                                    <option value="Compra" >Para compra</option>
                                </select>
                            :   <select onChange={handleChangeUpdate} name="type" required>
                                    <option value={values.type}>{values.type === "Compra" ? "Para compra" : null}</option>
                                    <option value="Vacaciones" >Vacaciones</option>
                                    <option value="Trabajo" >Trabajo</option>
                                </select>
                            }

                        </div>:
                    </div>
                    <label><strong>Descripción (Español)</strong></label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        placeholder="Descripción"
                        required
                    />
                    <label><strong>Descripción (Inglés)</strong></label>
                    <textarea
                        name="description_english"
                        value={values.description_english}
                        onChange={handleChange}
                        placeholder="Descripción en inglés"
                        required
                    />

                    {values.type != "Compra" ?
                    <div className={"row "+ styles.inputForm}>
                        <div className="col-4">
                            <label><strong>Camas</strong></label><br/>
                            <input
                                type="number" name="beds" placeholder="Camas"
                                value={values.beds}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="col-4">
                            <label><strong>Sofá cama</strong></label><br/>
                            <input
                                type="number" name="sofa_bed" placeholder="Sofá cama"
                                value={values.sofa_bed}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <label><strong>Baños</strong></label><br/>
                            <input
                                type="number" name="bathrooms" placeholder="Baños"
                                value={values.bathrooms}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>:null}
                    
                    {values.type != "Compra" ?
                    <div className={"row "+ styles.inputForm}>
                        <div className="col-4">
                            <label><strong>Alcobas</strong></label><br/>
                            <input
                                type="number" name="bedrooms" placeholder="Alcobas"
                                value={values.bedrooms}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <label><strong>Cantidad de personas</strong></label><br/>
                            <input
                                type="number" name="capacity_adults" placeholder="Cantidad de personas"
                                value={values.capacity_adults}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4" style={{visibility: 'hidden'}}>
                            <label><strong>Cantidad de niños</strong></label><br/>
                            <input
                                type="number" name="capacity_kids" placeholder="Cantidad de niños"
                                value={values.capacity_kids}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>:null}

                    <div className={"row "+ styles.inputForm}>

                        {/* <div className="col-4">
                            <label><strong>Habitaciones</strong></label><br/>
                            <input
                                type="number" name="rooms" placeholder="Habitaciones"
                                value={values.rooms}
                                onChange={handleChange}
                                required
                            />
                        </div> */}
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <label><strong>Ubicación</strong></label><br/>
                            <input
                                type="text" name="location" placeholder="Ubicación"
                                value={values.location}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}

                        <div className="col-4">
                            <label><strong>Precio normal</strong></label><br/>
                            <input
                                type="number" name="price" placeholder="Precio"
                                value={values.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <label><strong>Precio por pareja</strong></label><br/>
                            <input
                                type="number" name="price_couple" placeholder="Precio por pareja"
                                value={values.price_couple}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                    </div>

                    <div className={"row "+ styles.inputForm}>
                        <div className="col-4">
                            <label><strong>Propietario</strong></label><br/>
                            <input
                                type="text" name="owner" placeholder="Propietario"
                                value={dpto.owner}
                                onChange={handleChangeUpdate}
                                required
                            />
                        </div>
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <label><strong>Días máximos de reserva</strong></label><br/>
                            <InputImput
                                type="number" name="durationAvailable" placeholder="Días máximos a reservar"
                                value={values.durationAvailable}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <label><strong>Edificio</strong></label><br/>
                            <InputImput
                                type="text" name="building" placeholder="Edificio"
                                value={values.building}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                        
                    </div>
                    {values.type != "Compra" ?

                    <div className={"row "+ styles.inputForm}>
                        <div className="col-4">
                            <label><strong>Precio de Manilla</strong></label><br/>
                            <input
                                type="number" name="bracelet" placeholder="Precio de Manilla"
                                value={values.bracelet}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <label><strong>Límite de edad (manillas)</strong></label><br/>
                            <input
                                type="number" name="bracelet_info" placeholder="Límite de edad"
                                value={values.bracelet_info}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <label><strong>Tasa de Aseo</strong></label><br/>
                            <input
                                type="number" name="cleanliness" placeholder="Tasa de Aseo"
                                value={values.cleanliness}
                                onChange={handleChange}
                                required
                                
                            />
                        </div>
                    </div>:null}

                    <div className={"row "+ styles.inputForm}>
                        <div className={"col-4 "+styles.selects}>
                            <label><strong>Estado</strong></label><br/>
                            {dpto.status === "Available" ?
                                <select onChange={handleChangeUpdate} name="status" required>
                                    <option value={dpto.status}>Disponible</option>
                                    <option value="Disabled">No disponible</option>
                                </select>
                            :
                                <select onChange={handleChangeUpdate} name="status" required>

                                    <option value="Available">Disponible</option>
                                    <option value={dpto.status}>No disponible</option>
                                </select>
                            }
                        </div>
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <label><strong>Días de anticipación</strong></label><br/>
                            <input
                                type="number" name="anticipation_days" placeholder="Días de anticipación para reservar"
                                value={values.anticipation_days}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                    </div>

                    <hr />
                    {/*Price by Seasson SECTION*/}
                    {values.type != "Compra" ?
                    <h4>Precios por temporada</h4>:null}
                    {values.type != "Compra" ?
                    <div className={"row "+ styles.inputForm}>
                        <div className="col-3">
                            <label>Nombre de la temporada</label>
                            <input
                                type="text" name="name_seasson" placeholder=""
                                onChange={setSeassonPrice}
                                value={priceBySeassonForm.name_seasson}
                            />
                        </div>
                        <div className="col-3">
                            <label>Fecha de inicio</label>
                            <input type="date" name="seasson_init_date" onChange={setSeassonPrice} value={priceBySeassonForm.seasson_init_date}/>
                        </div>
                        <div className="col-3">
                            <label>Fecha de fin</label>
                            <input type="date" name="seasson_end_date" onChange={setSeassonPrice} value={priceBySeassonForm.seasson_end_date}/>
                        </div>
                        <div className="col-3">
                            <label>Tasa de Aseo</label>
                            <input type="number" name="sesson_cleanliness" onChange={setSeassonPrice} value={priceBySeassonForm.sesson_cleanliness}/>
                        </div>                       
                    </div>:null}

                    {values.type != "Compra" ?
                    <div className={"row "+ styles.inputForm}>
                        <h5>Alcobas x temporada</h5>
                        <div className="col-3">
                            <label>Precio en temporada</label>
                            <input type="number" name="bedroomPrice" onChange={setSeassonPrice} value={priceBySeassonForm.bedroomPrice}/>
                        </div>
                        <div className="col-4">
                            <label>Precio en temporada por pareja</label>
                            <input type="number" name="bedroomCouplePrice" onChange={setSeassonPrice} value={priceBySeassonForm.bedroomCouplePrice}/>
                        </div>
                        <div className="col-3">
                            <button type="button" onClick={handlerSeasson}>Añadir</button>
                        </div>
                    </div>:null}

                    {values.type != "Compra" ?
                    <div className={"row "+ styles.inputForm}>
                        <hr/>
                        <h6>Temporadas agregadas:</h6>
                        <ul>

                            {values.priceBySeasson?.map((item:any, index:number) => (
                                <li key={index}>
                                    <strong>{item.name_seasson}</strong>: {item.seasson_init_date} / {item.seasson_end_date} - 
                                    Precio alcoba: ${formatNumber(item.bedroomPrice)} - Precio alcoba temp.: ${formatNumber(item.bedroomCouplePrice)} - Aseo ${formatNumber(item.sesson_cleanliness)}
                                    <a style={{cursor: 'pointer', marginLeft: '10px'}} onClick={() => deleteSeasson(index)}>
                                        <i style={{color: 'red', fontSize: '17px'}} title={`Quitar temporada ${item.name_seasson}`} className='bx bx-x-circle'></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>:null}                   

                    <hr />
                    <div>
                        <h5>Imagenes</h5>
                        <div className={"row"}>
                            <div className="col-6">
                                <p><strong>Portada</strong></p>
                                <div>
                                    <img src={characteristics('imagePrincipal').toString()} width={270} height={170} />
                                </div><br/>

                            </div>
                            <div className="col-6">
                                {file &&  <div><p><strong>Nueva portada</strong></p><img src={preview} width={270} height={170}/></div> }

                                <p><strong>Seleccione una nueva portada</strong></p>
                                <input type="file" name="imgPrincipal" className="custom-file-input" id="inputFileSingle" required
                                       accept="image/*" onChange={handleFileChange}/>
                            </div>
                        </div><br/>

                        <div>
                            <p><strong>Galería</strong></p>
                            <div className={"row "+styles.images}>
                                <GalleryUpdate
                                    setNewGalleryDev={setNewGalleryDev}
                                    newGalleryDev={newGalleryDev}
                                    deleteImageGallery={deleteImageGallery}
                                    newGallery={newGallery}
                                />
                                <div className="col-6">
                                    <input type="file" name="galleryImg" className="custom-file-input" id="inputFileMultiple"
                                           required accept="image/*" multiple onChange={handleGallery}/>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        {values.type === "Compra" ?
                            <div>
                            <p><strong>Planos</strong></p>
                            <div className={"row "+styles.images}>
                                <PlansUpdate
                                    setNewPlansDev={setNewPlansDev}
                                    newPlansDev={newPlansDev}
                                    deleteImagePlans={deleteImagePlans}
                                    newPlans={newPlans}
                                />
                                <div className="col-6">
                                <input type="file" name="plans" className="custom-file-input" id="inputFileMultiple"
                                       required accept="image/*" multiple onChange={handlePlans}/>
                                </div>
                            </div>
                        </div>: null}
                    </div>
                    <hr />
                    <div>
                    {values.type != "Compra" ?
                        <h5>Características:</h5>
                        :null }
                        {values.type != "Compra" ?
                        <div className={"row "+styles.chars}>

                            <div className="col-3">
                                <p>Wi-fi:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name={'wifi'}
                                            id="inlineRadio1"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.wifi === '1'}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="wifi"
                                            id="inlineRadio1"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.wifi === '0'}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">

                                <p>Vista al mar:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="view_sea"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.view_sea === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="view_sea"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.view_sea === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3">

                                <p>Parqueadero:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="parking"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.parking === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="parking"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.parking === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">

                                <p>Piscina:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="pool"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.pool === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="pool"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.pool === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>:null}

                        <div className={"row "+styles.chars}>

                        {values.type != "Compra" ?
                        <div className="col-3">
                            <p>Cocina:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="kitchen"
                                        value={1}
                                        onChange={handleChange}
                                        checked={values.kitchen === '1'}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="kitchen"
                                        value={0}
                                        onChange={handleChange}
                                        checked={values.kitchen === '0'}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>:null}

                        {values.type != "Compra" ?
                        <div className="col-3">

                            <p>Aire acondicionado:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="air_conditioning"
                                        value={1}
                                        onChange={handleChange}
                                        checked={values.air_conditioning === '1'}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="air_conditioning"
                                        value={0}
                                        onChange={handleChange}
                                        checked={values.air_conditioning === '0'}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>

                            </div>
                        </div>:null}

                        {values.type != "Compra" ?
                        <div className="col-3">

                            <p>Lavadora y secadora:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="washer"
                                        value={1}
                                        onChange={handleChange}
                                        checked={values.washer === '1'}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="washer"
                                        value={0}
                                        onChange={handleChange}
                                        checked={values.washer === '0'}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>:null}

                        {values.type != "Compra" ?
                        <div className="col-3">

                            <p>Acceso a la playa:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="access_beach"
                                        value={1}
                                        onChange={handleChange}
                                        checked={values.access_beach === '1'}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="access_beach"
                                        value={0}
                                        onChange={handleChange}
                                        checked={values.access_beach === '0'}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>:null}

                            {/* Extra charactheritics */}
                            {values.type != "Compra" ?
                            <div className={"row "+styles.chars}>

                                <div className="col-3">
                                    <p>Cerca al aereopuerto:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="airport"
                                                value={1}
                                                onChange={handleChange}
                                                checked={values.airport === '1'}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="airport"
                                                value={0}
                                                onChange={handleChange}
                                                checked={values.airport === '0'}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3">

                                    <p>Cerca al centro histórico:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="historic_center"
                                                value={1}
                                                onChange={handleChange}
                                                checked={values.historic_center === '1'}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="historic_center"
                                                value={0}
                                                onChange={handleChange}
                                                checked={values.historic_center === '0'}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-3">

                                    <p>Hora de entrada:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                type="time"
                                                name="entry_time"
                                                value={values.entry_time}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <p>Hora de salida:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                type="time"
                                                name="departure_time"
                                                value={values.departure_time}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>:null}
                            <br/>
                            <div className={"row "+styles.chars}>
                                {values.type != "Compra" ?
                                <div className="col-3">

                                    <p>Pets:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="pets"
                                                value={1}
                                                onChange={handleChange}
                                                checked={values.pets === '1'}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="pets"
                                                value={0}
                                                onChange={handleChange}
                                                checked={values.pets === '0'}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>

                                    </div>
                                </div>:null}

                                {values.type != "Compra" ?
                                <div className="col-3">

                                    <p>Prohibido fumar:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="smoke"
                                                value={1}
                                                onChange={handleChange}
                                                checked={values.smoke === '1'}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="smoke"
                                                value={0}
                                                onChange={handleChange}
                                                checked={values.smoke === '0'}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>
                                    </div>
                                </div>:null}

                                <div className={"col-6"}>
                                    <p>Link ubicación Google Maps:</p>
                                    <div className={"col "+styles.loc_map}>
                                        <textarea
                                            name="location_map"
                                            value={values.location_map}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {values.type != "Compra" ?
                            <div className="col-3">
                                <p>Televisión:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="tv"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.tv === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="tv"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.tv === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>:null}

                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Calentador de agua:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="heater"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.heater === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="heater"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.heater === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>:null}

                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Jacuzzi:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="jacuzzi"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.jacuzzi === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="jacuzzi"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.jacuzzi === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>:null}

                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Gimnasio:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="gym"
                                            value={1}
                                            onChange={handleChange}
                                            checked={values.gym === '1'}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="gym"
                                            value={0}
                                            onChange={handleChange}
                                            checked={values.gym === '0'}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>:null}<hr/>

                            {values.type != "Compra" ?
                            <div className="col-5">
                                <p><strong>ID de Calendario sincronizado:</strong></p>
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                            style={{width: "350px", height: "50px"}}
                                            value={values.id_calendar}
                                            type="text"
                                            name="id_calendar"
                                            onChange={handleChange}
                                            placeholder="id del calendario"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>:null}

                            {values.type != "Compra" ?
                            <div className="col-5">

                                <p><strong>Id de calendario sincronizado solo en Google:</strong></p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            style={{width: "350px", height: "50px"}}
                                            value={values.id_calendar_g}
                                            type="text"
                                            name="id_calendar_g"
                                            onChange={handleChange}
                                            placeholder="id del calendario solo en google"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>:null}

                            {values.type != "Compra" ?
                            <div className="col-5">
                                <br/>
                                <p><strong>Link de calendario de Google:</strong></p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            style={{width: "600px", height: "50px"}}
                                            value={values.link_google}
                                            type="url"
                                            pattern="https://.*" size={200}
                                            name="link_google"
                                            onChange={handleChange}
                                            placeholder="link del calendario de google que sincroniza todos los calendarios"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>:null}

                    </div>
                    </div>
                    <BtnSave
                        data={dpto}
                        values={values}
                        imgPrincipal={file}
                        addGallery={gallery}
                        addPlans={plans}
                        plansDelete={plansDelete}
                        galleyDelete={galleyDelete}
                    />
                    <div className={styles.btn_close}>
                        <button onClick={btn_close}>Salir</button>
                    </div>
                </form>
            </div>

        </>
    )
}
