import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Dropdown from 'react-bootstrap/Dropdown';
import {Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React, {useEffect, useState} from "react";
import ModalCalendar from "../../../content/modal/content/modal_calendar";
import Image from "next/image";
import useAnalyticsEventTracker from "../../../../service/analytics/useAnalyticsEventTracker";

export default function NavBar() {

    const router = useRouter();
    const gaEventTracker = useAnalyticsEventTracker('Menu');
    const [show, setShow] = useState(false);
    const [utlBooking, setUrlBooking] = useState("");
    const wsp_bodas = "https://api.whatsapp.com/send?phone=573126243074&text=Hola%20Lau%F0%9F%92%96,%20estuve%20revisando%20navegando%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20contigo";
    const [modalOpen, setModalOpen] = useState(false);

    const showDropdown = (e:any)=>{
        setShow(!show);
    }
    const hideDropdown = (e:any) => {
        setShow(false);
    }

    const analytic = (name:string) => {
        gaEventTracker(`Clic Menu ${name}`);
    }

    const style = {
        color: router.asPath === "/" ? 'red' : 'black',
        fontSize: "18px",
        textDecoration: "none"
    }
    const style2 = {
        color: router.asPath === "/artisticos" || router.asPath === "/social" ? 'red' : 'black',
        fontSize: "18px",
        textDecoration: "none"
    }
    const style2_1 = {
        color: router.asPath === "/artisticos" ? 'red' : 'black',
        fontSize: "18px",
        textDecoration: "none"
    }
    const style2_2 = {
        color: router.asPath === "/social" ? 'red' : 'black',
        fontSize: "18px",
        textDecoration: "none"
    }
    const style3 = {
        color: router.asPath === "/para-bodas" ? 'red' : 'black',
        fontSize: "18px",
        fontsize: "18px",
        textDecoration: "none"
    }
    const style4 = {
        color: router.asPath === "/blogs" ? 'red' : 'black',
        fontSize: "18px",
        textDecoration: "none"
    }

    const openBooking = () => {
        if(router.asPath === "/para-bodas"){
            //setUrlBooking(wsp_bodas);
            window.open(wsp_bodas, '_blank', 'noopener,noreferrer');
        }else{
            //setUrlBooking("#");
            gaEventTracker('Clic menu agendar cita')
            setModalOpen(!modalOpen);
        }

    }
    const [newShow, setNewShow] = React.useState(false);
    const btn_click = () => {
        setNewShow(true);
    }
    const hijoAPadre = (datoshijo:any) => {
        setNewShow(datoshijo);
    }


    return (
        <>
            <div className={styles.nav}>
            <Navbar expand="lg">

                <Container className={styles.cont}>
                    <Navbar.Toggle />
                    <a onClick={() => analytic('Inicio')} className={styles.logo} href="/" title="Laura Nuñez"><img width={220} height={60} alt="Logo-Laura-Nuñez" title="Logo-Laura-Nuñez" src="/images/logo/logo-color.png" /></a>
                    <Navbar.Collapse className={"collapse navbar-collapse " + styles.navbar_right_general}>

                        <Nav className={"navbar-nav me-auto mb-2 mb-lg-0 " + styles.navbar_right}>
                            <Nav.Item>
                                <a onClick={() => analytic('Conóceme')} href="/" title="Conóceme" style={style} aria-current="page" className={styles.links+" navbar-brand "+ router.pathname=="/" ? "active" : "non-active"}>Conóceme</a>
                            </Nav.Item>
                            <Nav.Item>
                                {/*<a href="#" style={style2} className={styles.links+" navbar-brand "+ router.pathname=="/" ? "active" : "non-active"}>Makeup</a>*/}
                                <Dropdown
                                    show={show}
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}
                                >
                                    <Dropdown.Toggle style={style2} className={styles.dropdown}>
                                        Makeup
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className={styles.listDropdown}>
                                        <Dropdown.Item style={style2_1} href="/artisticos" onClick={() => analytic('Artísticos')}><strong>Artísticos</strong></Dropdown.Item>
                                        <Dropdown.Item style={style2_2} href="/social" onClick={() => analytic('Social')}><strong>Social</strong></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <a onClick={() => analytic('Bodas')} href="/para-bodas" style={style3} className={styles.links+" navbar-brand "+ router.pathname=="/" ? "active" : "non-active"} title="Bodas">Para bodas</a>
                            </Nav.Item>
                            {/*<Nav.Item>*/}
                            {/*    <a href="/blogs" style={style4} className={styles.links+" navbar-brand "+ router.pathname=="/blogs" ? "active" : "non-active"}>Blogs</a>*/}
                            {/*</Nav.Item>*/}
                        </Nav>

                        <button className={styles.btn} onClick={openBooking}>
                            Agendar cita
                        </button>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
            </div>

            <ModalCalendar
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                title={"Agendar cita"}
                newShow={newShow}
                hijoAPadre={hijoAPadre}
                gaEventTracker={gaEventTracker}
            />
        </>
    )
}
