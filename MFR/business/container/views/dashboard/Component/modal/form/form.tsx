import styles from "./styles.module.css";
import InputImput from "./inputImput/inputImput";
import BtnSave from "./btnSave/btn_save";
import React, {ChangeEvent, useEffect, useState} from "react";
import PhotosSalesApto from "./inputImput/photoSales";
import config from "../../../../../../../infrastructure/config";
import { formatNumber } from "../../../../../../../service/service";

interface SeassonPrice {
    name_seasson: string,
    seasson_init_date: string,
    seasson_end_date: string,
    bedroomPrice: number,
    bedroomCouplePrice: number,
    sesson_cleanliness: number,
}

export default function CreateApto({closeModal}:any) {

    const [file, setFile] = useState<File>();
    const [gallery, setGallery] = useState<any>([]);
    const [plans, setPlans] = useState<any>([]);
    const [values, setValues] = React.useState<any>({description:"",capacity_kids:0,capacity_adults:0,tenant:config.TENANT});
    const [principalValues, setPrincipalValues] = useState({
        code: "",
        name: "",
        description: "",
        owner: "",
        rating: "",
        rating_count: 1,
        currency: "COP",
        state: ""
    });
    const [priceBySeasson, setPriceBySeasson] = useState<SeassonPrice[]>([]);
    const [priceBySeassonForm, setPriceBySeassonForm] = useState<SeassonPrice>({
        name_seasson: '',
        seasson_init_date: '',
        seasson_end_date: '',
        bedroomPrice: 0,
        bedroomCouplePrice: 0,
        sesson_cleanliness: 0,
    });

    const setSeassonPrice = (e:any) =>{
        const { name, value } = e.target;
        setPriceBySeassonForm({
        ...priceBySeassonForm,
        [name]: value,
        });
    }

    const handleAddClick = () => {
        // Agregar un nuevo objeto al estado priceBySeasson
        if(!priceBySeassonForm.name_seasson && !priceBySeassonForm.seasson_init_date && !priceBySeassonForm.seasson_end_date && priceBySeassonForm.bedroomCouplePrice <= 0 && priceBySeassonForm.bedroomPrice <= 0){
            alert('Debe ingresar todos los campos!')
        }else{
            setPriceBySeasson([...priceBySeasson, priceBySeassonForm]);
            
            // Limpiar el formulario después de agregar
            setPriceBySeassonForm({
              name_seasson: '',
              seasson_init_date: '',
              seasson_end_date: '',
              bedroomPrice: 0,
              bedroomCouplePrice: 0,
              sesson_cleanliness: 0
            });
        }
    };
    const handleDeleteClick = (index: number) => {
        // Crear una copia del array priceBySeasson sin el elemento a eliminar
        const updatedPriceBySeasson = priceBySeasson.filter((_, i) => i !== index);
    
        // Actualizar el estado priceBySeasson con la nueva copia del array
        setPriceBySeasson(updatedPriceBySeasson);
      };
    

    const [hiddenMoreImg, setHiddenMoreImg] = useState(true);
    const [textMore, setTextMore] = useState("Añadir más")
    const handleChange = async (evt:any) =>{
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value.split(/(\\|\/)/g).pop(),
            capacity_kids: 0,
            priceBySeasson
        });

    }
    useEffect(()=>{
        setValues({
            ...values,
            priceBySeasson
        });
    }, [priceBySeasson])

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);

        }
    };
    const handleGallery = (e: ChangeEvent<HTMLInputElement>) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        if (chosenFiles.length <= 10) {
            setGallery(chosenFiles);
        }else{
            alert("Solo se pueden añadir 10 imagenes!");
            e.target.value = '';
        }
    };
    const handlePlans = (e: ChangeEvent<HTMLInputElement>) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        if (chosenFiles.length <= 10) {
            setPlans(chosenFiles);
        }else{
            alert("Solo se pueden añadir 10 imagenes!");
            e.target.value = '';
        }
    };

    const handleChangePrincipal = async (evt:any) =>{
        const value = evt.target.value;
        setPrincipalValues({
            ...principalValues,
            [evt.target.name]: value
        });
        values.description = principalValues.description

    }
    const addMoreImages = () => {
        setHiddenMoreImg(false);
        setTextMore("Añadir menos")
        if(textMore === "Añadir menos"){
            setHiddenMoreImg(true);
            setTextMore("Añadir más")
        }else{
            setHiddenMoreImg(false);
        }
    }

    const btn_close = () => {
        closeModal(false);
    }
    // console.log(values)
    return (
        <>
            <div className={"row "+ styles.header_body}>
                <div className={"col"}>
                    <h4>Nuevo apartamento</h4>
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
                    <div className="row">
                        <div className="col-4">
                            <input
                                type="text"
                                value={"MFR"+(principalValues.name).split(" ").join("")}
                                disabled={true}
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="text" name="name" placeholder="Nombre"

                                onChange={handleChangePrincipal}
                            />
                        </div>
                        <div className={"col-4 "+styles.selects}>
                            <select onChange={handleChange} name="type" required>
                                <option value="">Tipo</option>
                                <option value="Trabajo" >Trabajo</option>
                                <option value="Vacaciones" >Vacaciones</option>
                                <option value="Compra" >Para Venta</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className={"col-12 "+styles.text_description}>
                            <textarea
                                name="description" placeholder="Descripción"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={"col-12 "+styles.text_description}>
                            <textarea
                                name="description_english" placeholder="Descripción en inglés"

                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    
                    <div className="row">
                    {values.type != "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="beds" placeholder="Camas"

                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                        <div className="col-4">
                            <InputImput
                                type="number" name="bathrooms" placeholder="Baños"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        {values.type === "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="area" placeholder="Area"
                                value={1}
                                onChange={handleChange}
                                required
                            />
                        </div>:null}
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="sofa_bed" placeholder="Sofá cama"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        :
                        
                        <div className="col-4">
                            <InputImput
                                type="text" name="owner" placeholder="Propietario"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                        
                        }
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <InputImput
                                type="number" name="bedrooms" placeholder="Alcobas"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/*@ts-ignore */}
                        {/*values.type != "Compra" ?
                                <div className="col-4">
                                    <input
                                        type="number" name="capacity_kids" placeholder="Cantidad de niños"

                                        onChange={handleChange}
                                        required
                                        value={0}
                                    />
                    </div>: null*/}
                        {/*@ts-ignore */}
                        {values.type != "Compra" ?
                                <div className="col-4">
                                    <InputImput
                                        type="number" name="capacity_adults" placeholder="Cantidad de personas"

                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                        :
                        <div className="col-4">
                            <InputImput
                                type="number" name="rating" placeholder="valoración"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                        }
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <InputImput
                                type="text" name="location" placeholder="Ubicación"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="number" name="price" placeholder="Precio"

                                onChange={handleChange}
                                required
                            />
                        </div>

                        {values.type != "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="price_couple" placeholder="Precio por pareja"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        :null}
                    </div>

                    {values.type != "Compra" ?
                    <div className={"row"}>
                        <div className="col-4">
                            <InputImput
                                type="text" name="owner" placeholder="Propietario"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="number" name="rating" placeholder="valoración"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="number" name="durationAvailable" placeholder="Días máximos a reservar"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/*<div className="col-4">*/}
                        {/*    <InputImput*/}
                        {/*        type="text" name="currency" placeholder="Moneda"*/}

                        {/*        onChange={handleChangePrincipal}*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>:null}

                    {values.type != "Compra" ?
                    <div className={"row"}>
                        <div className="col-4">
                            <InputImput
                                type="number" name="bracelet" placeholder="Precio de Manilla"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="number" name="bracelet_info" placeholder="Límite de edad (manillas)"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <InputImput
                                type="number" name="cleanliness" placeholder="Tasa de Aseo"
                                onChange={handleChange}
                            />
                        </div>
                    </div>:null}

                    <div className={"row"}>
                        <div className={"col-4 "+styles.selects}>
                            <select onChange={handleChangePrincipal} name="status" required>
                                <option value="">Estado...</option>
                                <option value="Available" >Disponible</option>
                                <option value="Disabled" >No disponible</option>
                            </select>
                        </div>
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="anticipation_days" placeholder="Días de anticipación para reservar"
                                onChange={handleChange}
                            />
                        </div>:null}
                        {values.type != "Compra" ?
                        <div className="col-4">
                            <InputImput
                                type="number" name="building" placeholder="Edificio"
                                onChange={handleChange}
                                
                            />
                        </div>:null}
                    </div>

                    <hr />
                    
                    {/*Price by Seasson SECTION*/}
                    
                    {values.type != "Compra" ?
                    <div>
                    <div>
                    <h4>Precios por temporada</h4>
                    </div>
                    <div className={"row "+ styles.seasson}>
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
                    </div>

                    <div className={"row "+ styles.seasson}>
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
                            <button type="button" onClick={handleAddClick} >Añadir </button>
                        </div>
                    </div>

                    
                    <div className={styles.listSeasson}>
                        <hr/>
                        <h6>Temporadas agregadas:</h6>
                        <ul>
                            {priceBySeasson.map((item, index) => (
                                <li key={index}>
                                <strong>{item.name_seasson}</strong>: {item.seasson_init_date} / {item.seasson_end_date} - 
                                Precio alcoba: ${formatNumber(item.bedroomPrice)} - Precio alcoba temp.: ${formatNumber(item.bedroomCouplePrice)} - Aseo: ${formatNumber(item.sesson_cleanliness)}
                                <a onClick={() => handleDeleteClick(index)}><i className='bx bx-x-circle'></i></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>:null}

                    <hr />
                    {/* --IMAGES SECTION-- */}
                    <h5>Imagenes</h5>
                    <div className={"row"}>
                        <div className="col">
                            <p><strong>Portada</strong></p>
                            <input type="file" name="imgPrincipal" className="custom-file-input" id="inputFileSingle" required
                                   accept="image/*" onChange={handleFileChange}/>
                        </div>
                    </div><br/>

                        <div>
                            <p><strong>Galeria</strong></p>
                            <div className={"row "+styles.images}>

                                <div className="col-6">
                                    <input type="file" name="galleryImg" className="custom-file-input" id="inputFileMultiple"
                                           required accept="image/*" multiple onChange={handleGallery}/>
                                    <br/>
                                </div>

                            </div>
                        </div>
                    {values.type === "Compra" ?
                        <PhotosSalesApto handlePlans={handlePlans}/> : null
                    }

                    <hr />
                    {/*Characteristics SECTION*/}
                    <div>
                        <h5>Características:</h5>
                        <div className={"row "+styles.chars}>

                            {values.type != "Compra" ? 
                            <div className="col-3">
                                <p>Wi-fi:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="wifi"
                                            id="inlineRadio1"
                                            value={1}
                                            onChange={handleChange}
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
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>: null}

                            {values.type != "Compra" ?
                            <div className="col-3">
                            
                                <p>Vista al mar:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="view_sea"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="view_sea"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>:null}
                            <div className="col-3">

                                <p>Parqueadero:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="parking"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="parking"
                                            value={0}
                                            onChange={handleChange}
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
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="pool"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                    {/*Principal charactheristics*/}
                    <br/>
                    {values.type != "Compra" ?
                    <div className={"row "+styles.chars}>

                        <div className="col-3">
                            <p>Cocina:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="kitchen"
                                        value={1}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="kitchen"
                                        value={0}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">

                            <p>Aire acondicionado:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="air_conditioning"
                                        value={1}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="air_conditioning"
                                        value={0}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">

                            <p>Lavadora y secadora:</p>
                            <div className="row">
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="washer"
                                        value={1}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="washer"
                                        value={0}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>

                        {/*@ts-ignore */}
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
                                    />
                                    <label className="form-check-label">Si</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-check-input" type="radio"
                                        name="access_beach"
                                        value={0}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        :
                            <div className="col-3">

                                <p>Balcón:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="balcony"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="balcony"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>
                        }

                    </div>:null}
                    <br/>
                        {/* Extra charactheritics */}
                        <div className={"row "+styles.chars}>

                            {/*@ts-ignore */}
                            {values.type != "Compra" ?
                            <div className="col-3">
                                <p>Cerca al aereopuerto:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="airport"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="airport"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>: null}

                            {/*@ts-ignore */}
                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Cerca al centro histórico:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="historic_center"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="historic_center"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>: null}
                            {/*@ts-ignore */}
                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Hora de entrada:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            type="time"
                                            name="entry_time"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>:null}
                            {/*@ts-ignore */}
                            {values.type != "Compra" ?
                            <div className="col-3">

                                <p>Hora de salida:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            type="time"
                                            name="departure_time"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            :
                                null
                            }

                        </div>
                        {values.type != "Compra" ?
                        <br/>:null}

                        <div className={"row "+styles.chars}>
                            {/*@ts-ignore */}
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
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="pets"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>

                                </div>
                            </div>
                            :
                                <div className="col-3">

                                    <p>Garaje:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="garage"
                                                value={1}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="garage"
                                                value={0}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>

                                    </div>
                                </div>
                            }
                            {/*@ts-ignore */}
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
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="smoke"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>
                            :
                                <div className="col-3">

                                    <p>Elevador:</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="elevator"
                                                value={1}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">Si</label>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                className="form-check-input" type="radio"
                                                name="elevator"
                                                value={0}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">No</label>
                                        </div>

                                    </div>
                                </div>
                            }
                            <div className={"col-6"}>
                                <p>Link ubicación Google Maps:</p>
                                <div className={"col "+styles.loc_map}>
                                    <textarea
                                        placeholder="https://www.google.com/maps/embed..."
                                        name="location_map"
                                        onChange={handleChange}
                                        required
                                    ></textarea>
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
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="tv"
                                            value={0}
                                            onChange={handleChange}
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
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="heater"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>:null}

                            <div className="col-3">

                                <p>Jacuzzi:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="jacuzzi"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="jacuzzi"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">

                                <p>Gimnasio:</p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="gym"
                                            value={1}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Si</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="gym"
                                            value={0}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div><hr/>
                            {values.type != "Compra" ?
                            <div className="col-5">

                                <p><strong>Id de calendario sincronizado Google-Airbnb:</strong></p>
                                <div className="row">
                                    <div className="col-3">
                                        <input
                                            style={{width: "350px", height: "50px"}}
                                            className="form-check-input" type="text"
                                            name="id_calendar"
                                            onChange={handleChange}
                                            placeholder="id del calendario google-airbnb"
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
                                            className="form-check-input" type="text"
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
                                            className="form-check-input" type="url"
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
                        imgPrincipal={file}
                        gallery={gallery}
                        plans={plans}
                        values={values}
                        p_values={principalValues}
                        closeModal={closeModal}
                    />
                    <div className={styles.btn_close}>
                        <button onClick={btn_close}>Cancelar</button>
                    </div>
                </form>
            </div>

        </>
    )
}
