import styles from './styles.module.css'
import {useState} from "react";
export default function MenuLeft(){

    const [icon, setIcon] = useState("bx bxs-left-arrow");
    const [menu, setMenu] = useState(styles.menuLeft);

    const handleMenu = () => {
        const newIcon = icon === "bx bxs-left-arrow" ? "bx bxs-right-arrow" : "bx bxs-left-arrow";
        const newMenu = icon === "bx bxs-left-arrow" ? styles.menuActive : styles.menuLeft;
        setIcon(newIcon);
        setMenu(newMenu);
    }
    return(
        <>
            <div className={menu}>
                <div className={styles.general}>
                    <div className={styles.boton} onClick={handleMenu}>
                        <i className={icon}></i>
                      
                    </div>
                    <div className={styles.logo}>
                        <span>Panel Administrativo</span>
                        <i className='bx bx-loader-circle bx-spin bx-rotate-180'></i>
                    </div>
                </div>
            </div>
        </>
    )
}