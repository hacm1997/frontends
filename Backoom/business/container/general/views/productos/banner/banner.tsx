import styles from "./styles.module.css";

export default function Banner(props: any) {
    return (
        <>
            <div className={styles.banner}>
                {props.children}
            </div>
        </>
    )
}