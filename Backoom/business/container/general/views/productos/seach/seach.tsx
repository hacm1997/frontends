import styles from "./styles.module.css";
export default function Seach(props: any) {
    return (
        <>
            <div className={styles.seach}>
                <form action="">
                    <input type="text" placeholder="Buscar"/>
                    <button><i className='bx bx-search'></i></button>
                </form>
            </div>
        </>
    )
}