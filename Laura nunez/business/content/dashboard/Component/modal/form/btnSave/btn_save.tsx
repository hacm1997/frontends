import styles from "./styles.module.css";
import {postResource} from "../../../../../../../service/api/api";
//import {postResource} from "../../../../../../../../service/api/api";

export default function BtnSave(props:any) {

    const initSavePostResource = {
        code: "LN"+props.p_values.code,
        name: props.p_values.name,
        description: props.p_values.description,
        characteristics: props.values,
        owner: props.p_values.owner,
        rating: 5,
        rating_count: 1,
        price: 0,
        currency: props.p_values.currency,
        state: props.p_values.status
    }
    console.log(initSavePostResource)
    const handleSubmit = (ev:any) => {

        var dt = initSavePostResource;
        //ServicesResource.createResource(dt)
        postResource(dt).then(res => {
            if(res.status === 200){
                console.log("¡Success! code status: "+res.status);
                alert("Creado correctamente");
                ev.preventDefault();
                window.location.href = '/dashboard';

            }
        }).catch(err => {
            console.log(err);
            alert("!Error! No se ha podido crear el recurso");
            //window.location.reload();

        })
        console.log(dt)
        ev.preventDefault();

    };

    return (
        <>
            <button onClick={handleSubmit} className={styles.btn} type={"submit"}>Guardar</button>
        </>
    )
}
