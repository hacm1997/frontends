import styles from "./styles.module.css";
import MenuLeft from "../menuLeft/menuLeft";
import Navbar from "../navbar/navbar";

export default function Layout(props: any) {
    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <MenuLeft/>
                </div>
                <div className={styles.general}>
                    {props.children}
                </div>
            </main>
        </>
    )
}