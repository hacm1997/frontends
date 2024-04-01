/* eslint-disable @next/next/no-img-element */
import {inspect} from "util";
import styles from './navbar.module.css'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function NavbarComponent() {
    const {t, lang} = useTranslation('');
    const service_persons = t<any>("header:nav.service_person.services", {}, {returnObjects: true});
    const service_business = t<any>("header:nav.service_business.services", {}, {returnObjects: true});
    const social_networks = t<any>("footer:social.item", {}, {returnObjects: true});
    const [icon, setIcon] = useState("bx bx-menu-alt-right");
    const [menu, setMenu] = useState(styles.menu);
    const gaEventTracker = useAnalyticsEventTracker('Menu');
    const router = useRouter();

    function useOutsideAlerter(ref: any) {
        let menu = styles.menu;
        let icon = 'bx bx-menu';
        useEffect(() => {

            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenu(menu);
                    setIcon(icon)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const analytics = (name: string) => {

        if (name === "Derecho del consumidor y competencia desleal") {
            gaEventTracker(`Clic menú: D.Consumido-comp.desleal`);
        } else {
            gaEventTracker(`Clic menú: ${name}`);
        }
    }

    const handleMenu = () => {
        if (icon === "bx bx-menu-alt-right") {
            setIcon("bx bx-menu-alt-left");
            setMenu(styles.menuActive);
        } else {
            setIcon("bx bx-menu-alt-right");
            setMenu(styles.menu);
        }
    }

    return (
        <>
            <div className={"flex h-28 items-center place-content-around z-50 " + styles.menuNav} ref={wrapperRef}>
                <div className="inline-flex w-auto ">
                    <Link href="/">
                        <a onClick={() => analytics(t('header:nav.home'))} title="Logo Aboga">
                            <img className="cursor-pointer" src='/images/logo-aboga.png' alt="Aboga"
                                 title="Logo Aboga"/>
                        </a>
                    </Link>

                    <div className={"flex items-center pl-10 " + styles.list_menu}>
                        <div className={"flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 " + menu}>
                            <li className={router.asPath === "/" ? styles.active : ""}>
                                <Link href="/" title="Inicio"><a
                                    onClick={() => analytics(t('header:nav.home'))} title="Home">{t('header:nav.home')}</a></Link>
                            </li>

                            <div className={styles.dropdown}>

                                <li className={router.asPath.split('/')[1] === 'servicio-personas' || router.asPath.split('/')[2] === 'jurisdiccion-coactiva' ? styles.active : ""}>
                                <Link href="/person-template/jurisdiccion-coactiva" title="Inicio"><a
                                    onClick={() => analytics('Jurisdicción coactiva')} title="Jurisdicción coactiva">Jurisdicción coactiva</a></Link>
                                </li>
                                {/* <li className={router.asPath.split('/')[1] === 'servicio-personas' || router.asPath.split('/')[1] === 'person-template' ? styles.active : ""}>
                                    {t('header:nav.service_person.title')} <i className='bx bx-chevron-down'></i>
                                </li> */}

                                {/* <div className={styles.dropdown_content}>
                                    {
                                        service_persons?.map((item: any, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={`${item.url}`} title={item.title}>
                                                        <a onClick={() => analytics(item.title)} title={item.title}><p
                                                            className={router.asPath+'/' === item.url ? styles.active : ""}>{item.title}</p>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </div> */}
                            </div>
                            <div className={styles.dropdown}>
                                <li className={router.asPath.split('/')[1] === 'servicio-personas' || router.asPath.split('/')[2] === 'derecho-constitucional' ? styles.active : ""}>
                                    <Link href="/person-template/derecho-constitucional" title="Inicio"><a
                                        onClick={() => analytics('Jurisdicción coactiva')} title="Jurisdicción coactiva">Derecho Constitucional</a></Link>
                                </li>

                                {/* <li className={router.asPath.split('/')[1] === 'servicio-empresas' ? styles.active : ""}>
                                    {t('header:nav.service_business.title')} <i className='bx bx-chevron-down'></i>
                                </li> */}

                                {/* <div className={styles.dropdown_content}>
                                    {
                                        service_business?.map((item: any, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={`${item.url}`} title={item.title}>
                                                        <a onClick={() => analytics(item.title)} title={item.title}><p
                                                            className={router.asPath+'/' === item.url ? styles.active : ""}>{item.title}</p>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </div> */}
                            </div>
                            <li className={router.asPath === "/asesorias-legales" ? styles.active : ""}>
                                <Link href="/asesorias-legales" title="Advices">
                                    <a onClick={() => analytics(t('header:nav.advice'))} title="Asesorias legales">{t('header:nav.advice')}</a>
                                </Link>
                            </li>

                            <li className={router.asPath === "/blog" ? styles.active : ""}>
                                <Link href="/blog" title="Blogs">
                                    <a onClick={() => analytics('Blogs')} title="Blogs Aboga">Blogs</a>
                                </Link>
                            </li>
                            
                            <div className="md:hidden flex-initial w-32 items-center ">
                                <div className={"flex w-auto gap-2 " + styles.socials_mob}>
                                    {social_networks?.map((item: any, index: number) => (
                                        <a key={index}
                                           className="w-9"
                                           href={item.link} target='_blank'
                                           onClick={() => analytics(item.name)}
                                           title={item.name}
                                        >
                                            <i className={item.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex-initial w-34 items-center ">
                    <div className={"flex w-auto gap-2 " + styles.socials}>
                        {social_networks?.map((item: any, index: number) => (
                            <a key={index}
                               className="w-9"
                               href={item.link} target='_blank'
                               onClick={() => gaEventTracker(`Clic menu: ${item.name}`)}
                               title={item.name}
                            >
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div onClick={handleMenu} className={styles.botonMovil}>
                    <Link href="#" title="Botón Móvil"><i className={icon}></i></Link>
                </div>
            </div>
        </>
    );
}
