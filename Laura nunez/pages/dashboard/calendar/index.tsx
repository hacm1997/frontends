import type {NextPage} from 'next'
import {Cookies} from "react-cookie";
import {useEffect, useState} from "react";
import config from "../../../infrastructure/config";
import Layout from "../../../business/content/dashboard/Component/general/Layout/layou";

const Home: NextPage = () => {
    const cookies = new Cookies();
    const [stateAuth, setStateAuth] = useState(false);

    useEffect(() => {

        if (cookies.get('session') === config.TOKEN_SESSION) {
            setStateAuth(true);
        }

    })
    return (
        <>
            {stateAuth ?
                <Layout>

                </Layout>
                :
                <h1>¡No Autorizado!</h1>
            }

        </>
    )
}

export default Home
