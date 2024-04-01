import styles from "./styles.module.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider2() {

    return (
        <>
            <section className={styles.slider} title="Maquillaje-natural">
                <ReactCompareSlider
                    className={styles.styleSli}
                    itemOne={<ReactCompareSliderImage srcSet="/images/content/home/third_component/img2-after.png" alt="Maquillaje-natural" title="Maquillaje-natural" />}
                    itemTwo={<ReactCompareSliderImage srcSet="/images/content/home/third_component/img2-before.png" alt="Maquillaje-natural" title="Maquillaje-natural" />}
                    style={{
                        flexGrow: 1,
                        height: '850px',
                        width: '400px'
                    }}
                />
            </section>
        </>
    )
}
