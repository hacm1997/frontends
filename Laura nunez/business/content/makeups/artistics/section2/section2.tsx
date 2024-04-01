import styles from "./styles.module.css";
import Select from 'react-select';
import {optionsMaquillaje} from "../../../../../data_info/data";
import React, {useState} from "react";
import SliderMaquillaje from "./slider/slider";

export default function TipoMaquillaje() {

    const [optionsMaq, setOptions] = useState('Halloween');
    const [content, setContent] = useState(true);

    const handleChange = (selectedOption:any) => {
        setOptions(selectedOption.value);
        if(optionsMaq === 'Halloween'){
            setContent(false);
        }else{
            setContent(true);
        }
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
                                        Siéntete en sintonía de celebrar fiestas divertidas y
                                        memorables con un maquillaje único y especial.
                                    </p>
                                </div>

                                <div className={styles.selection}>
                                    <h3>
                                        <Select
                                            defaultValue={optionsMaquillaje || 'Select'}
                                            onChange={handleChange}
                                            options={optionsMaquillaje}
                                        />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"} data-aos="fade-up"  data-aos-duration="2000">
                            <div className={styles.beauty_img}>
                                <img width={550} height={300} alt="beauty" title="beauty" src="/images/content/artistics/component2/beauty.png" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"d-flex justify-content-center"}>
                    <div className={styles.slider_section} data-aos="fade-up"  data-aos-duration="2000">
                        <SliderMaquillaje types={optionsMaq} hidden={content} />
                    </div>
                </div>

            </section>
        </>
    )
}
