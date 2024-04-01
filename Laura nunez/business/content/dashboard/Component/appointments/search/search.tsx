import styles from "./styles.module.css";

export default function Search(props: any) {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.search_input}>
                    <input type="text" placeholder="Buscar..."/>
                    <button><i className='bx bx-search'></i></button>
                </div>
            </div>
        </>
    )
}