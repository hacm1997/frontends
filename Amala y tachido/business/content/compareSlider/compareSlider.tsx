import styles from "./styles.module.css";
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import FirstContentSlider from "../../container/views/landing/sliderOne/sliderOne";
import SecondContentSlider from "../../container/views/landing/sliderTwo/sliderTwo";
import React from "react";
import Image from "next/image";

export default function CompareSlider() {
    const [hiddenOne, setHiddenOne] = React.useState(false);
    const [hiddenTwo, setHiddenTwo] = React.useState(false);
    const onPositionChange = React.useCallback((position:any) => {
        // console.log('actual position', position);
        if(position <= 43.10){
            setHiddenOne(true)
        }else{
            setHiddenOne(false)
        }
        if(position >= 57.10){
            setHiddenTwo(true)
        }else{
            setHiddenTwo(false)
        }
    }, []);

    return(
        <>

            <ReactCompareSlider
                handle={
                    <div style={{display: 'grid', height: '100%', placeContent: 'center', border: '2px solid #FFFFFF', cursor:'ew-resize'}}>
                        <button style={{all: 'unset', borderRadius: '50%', fontSize: 56, position:'absolute', top:'40%', right:'-5px'}}>
                            <Image src={"/images/button_slider_compare.png"} alt={"Button-slider"} width={13} height={75}/>
                        </button>
                    </div>
                }

                className={styles.styleSli}
                onPositionChange={onPositionChange}
                changePositionOnHover={true}
                itemOne={<FirstContentSlider hidden={hiddenTwo}/>}
                itemTwo={<SecondContentSlider hidden={hiddenOne}/>}
                style={{
                    flexGrow: 1,
                    height: 'auto',
                    width: '100%'
                }}
            />

        </>
    )
}
