import styles from './styles.module.css';

const SpinnerView = () => (
    <div>
        <div className={styles.content}>
            <div className={styles.loader}></div>
        </div>
        <div style={{textAlign:"center", color:"#333333", fontWeight:"500", marginTop:"5px", paddingLeft:"10px"}}>
            <p>Enviando...</p>
        </div>
    </div>

);

export default SpinnerView;
