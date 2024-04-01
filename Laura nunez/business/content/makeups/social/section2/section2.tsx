import styles from "./styles.module.css";
import Select from 'react-select';
import {useState} from "react";
import SliderMaquillajeSpecial from "./slider/slider";
import {optionsMaquillaje, optionsMaquillajeSpecial} from "../../../../../data_info/data";

export default function TipoMaquillajeSpecial() {

    const [optionsMaq, setOptions] = useState('Noche');

    const handleChange = (selectedOption:any) => {
        setOptions(selectedOption.value);
    };

    return (
        <>
            <section>

                <div className={styles.container}>
                    <div className="row">
                        <div className={"col-md-6"}>
                            <div className={styles.content_col1} data-aos="fade-up"  data-aos-duration="2000">
                                <h2>Elige el tipo de<br/>
                                    maquillaje para ti</h2>
                                <div className={styles.description}>
                                    <p>
                                        Selecciona el maquillaje adecuado para tus eventos especiales.
                                    </p>
                                </div>

                                <div className={styles.selection}>
                                    <Select
                                        defaultValue={optionsMaquillajeSpecial || 'Select'}
                                        onChange={handleChange}
                                        options={optionsMaquillajeSpecial}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className={styles.beauty_img} data-aos="fade-up"  data-aos-duration="2000">
                                <img width={550} height={300} alt="beauty" title="beauty" src="/images/content/artistics/component2/beauty.png" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"d-flex justify-content-center"}>
                    <div className={styles.slider_section} data-aos="fade-up"  data-aos-duration="2000">
                        <SliderMaquillajeSpecial types={optionsMaq} />
                    </div>
                </div>

            </section>
        </>
    )
}
