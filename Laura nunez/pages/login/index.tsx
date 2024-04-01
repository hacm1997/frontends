import type {NextPage} from 'next'
import styles from './styles.module.css'
import React from "react";
import {Cookies} from "react-cookie";
import config from "../../infrastructure/config";


const Home: NextPage = (props) => {
    const Swal = require('sweetalert2')
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const cookies = new Cookies();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const json = await res.json();
        if (!res.ok) setError(json.message);
        setLoading(false);

        if (res.ok) {

            const result = config.TOKEN_SESSION;

            if(cookies.get('session')===undefined || cookies.get('db')===undefined) {
                cookies.set('session', result, {path: '/'});
            }
            window.location.href = '/dashboard';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: "Credenciales incorrectas",
            })
        }
    }

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className={styles.general}>
                <div className={styles.login}>
                    <div className={styles.card}>
                        <form onSubmit={handleSubmit}>
                            <img src="/images/logo/logo-color.png" alt="Logo-Laura-Nunez"/>
                            <input onChange={handleUsernameChange} name="usuario" id="usuario" type="text"
                                   placeholder="Usuario"/>
                            <input onChange={handlePasswordChange} name="password" id="password" type="password"
                                   placeholder="Contraseña"/>
                            <button type="submit" disabled={loading}>Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
