import type {NextPage} from 'next'
import Layout from "../../business/content/dashboard/Component/general/Layout/layou";
import Bienvenido from "../../business/content/dashboard/Component/bienvenido/bienvenid";
import {useEffect, useState} from "react";
import {Cookies} from "react-cookie";
import config from "../../infrastructure/config";
import Dashboard from "../../business/content/dashboard/dashboard";


const Home: NextPage = () => {

    const cookies = new Cookies();
    const [stateAuth, setStateAuth] = useState(false);

    useEffect(()=> {
        if(cookies.get('session') === config.TOKEN_SESSION){
            setStateAuth(true);
        }
    })

    //console.log("La cookie: "+ stateAuth);
    //console.log("estado en padre: "+stateAuth)
    return (
        <>
            {stateAuth ?
                <Layout stateAuth={stateAuth}>
                    <Bienvenido/>
                    <Dashboard/>
                </Layout>
                :
                <h1>¡No Autorizado!</h1>
            }

        </>
    )
}

export default Home
