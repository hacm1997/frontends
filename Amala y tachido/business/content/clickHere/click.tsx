import styles from "./styles.module.css";
import {useEffect, useState} from "react";
export default function ClickHere() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // console.log("srcoll position => ", scrollPosition)

    return(
        <>
            <div className={styles.whatsapp} hidden={scrollPosition >= 158}>
                <a href="#contact">
                    <i className='bx bx-down-arrow-alt'></i>
                    <div className={styles.here}>
                        <p>Haz Clic<br/>Aquí</p>
                    </div>
                </a>
            </div>
        </>
    )
}
