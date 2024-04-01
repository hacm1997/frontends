import Link from 'next/link';
import styles from './styles.module.css';

export default function SpinnerLoading(props:any) {

    return(
        <>
            {props.logSpinner ?
                <div className={styles.principal}>
                    <div className={styles.content}>
                        <div className={styles.loader}></div>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p>Cargando...</p>
                    </div>
                </div>
            : 
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
                    <div>
                        <h1>No autorizado, por favor inicie sesión</h1>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Link href='/login'>
                                <button style={{border: '1px solid #100146', backgroundColor: '#100146', color: 'white', height: '40px', width: '150px', borderRadius: '2px'}}>Iniciar Sesión</button>
                                </Link>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}


