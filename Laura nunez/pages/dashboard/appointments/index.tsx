import type {NextPage} from 'next'
import styles from './styles.module.css'
import Layout from "../../../business/content/dashboard/Component/general/Layout/layou";
import Dashboard from "../../../business/content/dashboard/dashboard";
import {Cookies} from "react-cookie";
import {useEffect, useState} from "react";
import config from "../../../infrastructure/config";

const Home: NextPage = () => {
    const cookies = new Cookies();
    const [stateAuth, setStateAuth] = useState(false);

    useEffect(()=> {

        if(cookies.get('session') === config.TOKEN_SESSION){
            setStateAuth(true);
        }

    })
    return (
        <>
            {stateAuth ?
                <Layout>
                    <Dashboard/>
                </Layout>
                :
                <h1>¡No Autorizado!</h1>
            }

        </>
    )
}

export default Home
