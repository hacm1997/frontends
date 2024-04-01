import styles from "../googleAuth/styles.module.css";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {
    getMicrosoftTokens, getMicrosoftTokensTest,
    microsoftAuthConfig,
    microsoftAuthToken,
    saveMicrosoftCredentialsAccess
} from "../../../../../../service/api/api";
import {getMicrosoftUrl} from "../../../../../../service/service";

export default function MicrosoftAuthentication() {
    const [seeLogin, setSeeLogin] = useState(true);
    const [configData, setConfiData] = useState<any>([]);
    const router = useRouter();
    const {
        query: {code},
    } = router

    const verifyToken = async () => {
        microsoftAuthToken().then(( res ) => {
            console.log(res);
        }).catch(( err ) => {
            console.log(err.response.data.message);
            if (err.response.data.message) {
                microsoftAuthConfig().then(( r ) => {
                    console.log('success microsoft');
                    if (r.data) {
                        setConfiData(r.data);
                        setSeeLogin(false);
                    }
                }).then(( e ) => {
                    console.log(e);
                })
            }
        })
    }

    const saveCredentials = () => {
        microsoftAuthConfig().then((r)=>{
            setConfiData(r.data);
            if(code != undefined){
                if(r)
                    getMicrosoftTokensTest(r.data, code as string).then((res:any)=> {
                        console.log(res.data);
                    }).catch((e)=> {
                        console.log(e);
                    })
            }
        }).then((e)=>{
            console.log(e);
        })

    }

    useEffect(()=>{
        saveCredentials();
    }, [code]);

    return(
        <>
            <div className={styles.authLogin}>
                <button onClick={verifyToken} hidden={!seeLogin}>Verificar Micrososft Auth</button>
                <a hidden={seeLogin} href={getMicrosoftUrl()}>
                    Login Auth Microsoft
                </a>
            </div>
        </>
    )
}
