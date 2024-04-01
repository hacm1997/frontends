import styles from "./styles.module.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider() {

    return (
        <>
            <section className={styles.slider} title="Mauillaje-de-ojos">
                <ReactCompareSlider
                    className={styles.styleSli}
                    itemOne={<ReactCompareSliderImage srcSet="/images/content/home/third_component/img1-after.png" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage srcSet="/images/content/home/third_component/img1-before.png" alt="Image two" />}
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
