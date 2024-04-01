import styles from "./styles.module.css";
import InputImput from "./inputImput/inputImput";
import BtnSave from "./btnSave/btn_save";
import React, {useEffect, useState} from "react";

export default function CreateAppointment({closeModal}:any) {

    const [dates, setDates] = useState('');
    const [disableDates, setDisableDates] = useState<any>([]);
    const [values, setValues] = React.useState({
        description:"", price:"0", disableDate: disableDates,
        type: "sesiones", location: "Laura Nuñez", rooms: "0",
        bedrooms: "0", capacity_kids: "0", capacity_adults: "0",
        bathrooms: "0", beds: "0"
    });
    const [principalValues, setPrincipalValues] = useState({
        code: "",
        name: "",
        description: "",
        owner: "LAURA",
        rating: 5,
        rating_count: 1,
        currency: "COP",
        state: ""
    });

    const handleChange = async (evt:any) =>{
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value.split(/(\\|\/)/g).pop(),

        });
        //console.log(value)
    }

    const handleChangePrincipal = async (evt:any) =>{
        const value = evt.target.value;
        setPrincipalValues({
            ...principalValues,
            [evt.target.name]: value
        });
        values.description = principalValues.description
        //console.log(value)
    }
    //console.log(disableDates)
    const btn_close = () => {
        closeModal(false);
    }

    const contentDisableList = disableDates.map((obj:any, index:any)=>(
        <div key={index} className={styles.grid_item}>
            <p>{obj}</p>
        </div>
    ))

    return (
        <>
            <div className={"row "+ styles.header_body}>
                <div className={"col"}>
                    <h4>Nuevo evento - Cita</h4>
                </div>
                <div className={"col " +styles.close}>
                    <a title="Cancelar" onClick={btn_close}>
                        <i className='bx bx-x'></i>
                    </a>
                </div>
            </div>

            <div className={styles.general}>
                <form className={styles.form} action="">

                    <h5>Información del evento</h5>
                    <div className="row">
                        <label>Código de evento - Nombre de cita:</label>
                        <div className="col-4">
                            <InputImput
                                type="text" name="code" placeholder="Código del evento"

                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>

                        <div className="col-4">

                            <InputImput
                                type="text" name="name" placeholder="Nombre de la cita"
                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                        <div className={"col-4 "+styles.selects}>
                            <select onChange={handleChangePrincipal} name="status" required>
                                <option value="">Estado...</option>
                                <option value="Available" >Activo</option>
                                <option value="Disabled" >Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <label>Descripción:</label><br/>
                        <div className={"col-8 "+styles.text_description}>
                            <textarea
                                name="description" placeholder="Agregue una descripción"
                                onChange={handleChangePrincipal}
                                required
                            />
                        </div>
                    </div>
                    <hr/>
                    <h5>Configuración de horario de atención:</h5>
                    <div className={"row "+styles.times}>
                        <div className="col-4">
                            <label>Hora inicial:</label><br/>
                            <input
                                type="time" name="startTime"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-4">
                            <label>Hora final:</label><br/>
                            <input
                                type="time" name="endTime"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-4">
                            <label>Duración de cita:</label><br/>
                            <InputImput
                                type="number" name="duration" placeholder="en minutos..."
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <hr/>
                    <h5>Otras configuraciones</h5>
                    <div className="row">
                        <label>Agregue fechas a deshabilitar:</label><br/>
                        <div className={"col-3 "+styles.text_description}>
                            <InputImput
                                name="dateDisable" type="date"
                                value={dates}
                                onChange={(e:any) => setDates(e.target.value)}
                                required
                            />
                        </div>
                        <div className={"col-2 "+styles.btn_addDate}>
                            <button type='button' onClick={() => {
                                setDates('');
                                disableDates.push(
                                    dates,
                                );
                            }}>Agregar</button>
                        </div>
                        <div className={"col-7 "+styles.datesPosition}>
                            <div className={styles.grid_container}>
                                {contentDisableList}
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <BtnSave
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
