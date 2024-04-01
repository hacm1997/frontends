/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.css";
import Input from "./component/input/input";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  LOCATIONS_ALPES,
  LOCATIONS_BELEN,
  LOCATIONS_BUENOS_AIRES,
  LOCATIONS_CALAMARES,
  LOCATIONS_CRESPO,
  LOCATIONS_ENVIGADO,
  LOCATIONS_GUAYABAL,
  LOCATIONS_OTROS,
  LOCATIONS_POBLADO,
  LOCATIONS_SECTOR,
  SEDES
} from '../../../../../../data/locations'
import { CartContext } from "../../../../../../services/contexts/ShoppingCartContext";

export default function FormContacto(props: any) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sede, setSede] = useState('CRESPO')
  const [sector, setSector] = useState('')
  const [barrio, setBarrio] = useState('');
  const [location, setLocation] = useState<any>()
  const [saveUserData, setSaveUserData] = useState(false)
  const { setUserData } = useContext(CartContext)
  const FILTER_SEDES = {
    'crespo': 'CRESPO',
    'calamares': 'CALAMARES',
    'alpes': 'ALPES',
    'medellin': 'MEDELLIN - POBLADO MANILA'
  }
  const FILTER_SECTOR = {
    'poblado': 'POBLADO',
    'belen': 'BELEN',
    'guayabal': 'GUAYABAL',
    'buenos_aires': 'BUENOS AIRES',
    'otros': 'OTROS',
    'envigado': 'ENVIGADO'
  }

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData') || ''
    if (savedUserData !== '') {
      const parsedUserData = JSON.parse(savedUserData)
      setNombre(parsedUserData.nombre)
      setCedula(parsedUserData.cedula)
      setCelular(parsedUserData.celular)
      setEmail(parsedUserData.email)
      setBarrio(parsedUserData.barrio)
      setDireccion(parsedUserData.direccion)
      setSede(parsedUserData.sede)
      setSector(parsedUserData.sector)
      setSaveUserData(true)
    }
  }, [])

  useEffect(() => {
    handleSaveUserData()
  }, [saveUserData === true])

  const handleSaveUserData = () => {
    if (saveUserData) {
      const userDataToSave = {
        nombre,
        cedula,
        celular,
        email,
        barrio,
        direccion,
        sede,
        sector
      }
      localStorage.setItem('userData', JSON.stringify(userDataToSave))
    }

    if (saveUserData === false) {
      localStorage.removeItem('userData')
    }
  }


  const nextForm = (event: any) => {
    event.preventDefault();
    if (nombre && cedula && celular && email && barrio && direccion && sede) {
      props.setEnableArea(false)
      setUserData({
        nombre,
        cedula,
        celular,
        email,
        barrio,
        direccion,
        sede,
        sector
      })
    }
  }

  const handlerBarrio = (ev: any) => {
    setBarrio(ev.target.value)
  }

  useEffect(() => {
    if (sede === FILTER_SEDES.crespo) {
      setLocation(LOCATIONS_CRESPO)
    }

    if (sede === FILTER_SEDES.calamares) {
      setLocation(LOCATIONS_CALAMARES)
    }

    if (sede === FILTER_SEDES.alpes) {
      setLocation(LOCATIONS_ALPES)
    }
  }, [sede])

  useEffect(() => {
    if (sector === FILTER_SECTOR.poblado || sede === FILTER_SEDES.medellin) {
      setLocation(LOCATIONS_POBLADO)
    }

    if (sector === FILTER_SECTOR.belen) {
      setLocation(LOCATIONS_BELEN)
    }

    if (sector === FILTER_SECTOR.guayabal) {
      setLocation(LOCATIONS_GUAYABAL)
    }

    if (sector === FILTER_SECTOR.buenos_aires) {
      setLocation(LOCATIONS_BUENOS_AIRES)
    }

    if (sector === FILTER_SECTOR.otros) {
      setLocation(LOCATIONS_OTROS)
    }

    if (sector === FILTER_SECTOR.envigado) {
      setLocation(LOCATIONS_ENVIGADO)
    }
  }, [sector, sede])

  return (
    <>
      <div className={styles.form}>
        <div>

          <div className={styles.title}>
            <h2><Link href={"/tachido#menu"}><i className='bx bxs-left-arrow-alt'></i></Link> Haz tu pedido</h2>
            <p>Dejanos tus datos para la toma del pedido.</p>
          </div>

          <form onSubmit={nextForm}>
            <Input placeholder={"Nombre"} name={"nombre"} type={"text"} value={nombre} onChange={(env: any) => {
              setNombre(env.target.value)
            }} />
            <Input placeholder={"Cédula"} name={"cedula"} type={"number"} value={cedula} onChange={(env: any) => {
              setCedula(env.target.value)
            }} />
            <Input placeholder={"Cel/Tel"} name={"cedular"} type={"tel"} value={celular} onChange={(env: any) => {
              setCelular(env.target.value)
            }} />
            <Input placeholder={"Correo"} name={"emain"} type={"email"} value={email} onChange={(env: any) => {
              setEmail(env.target.value)
            }} />
            <select placeholder={sede} name="sede" className={styles.select} value={sede} onChange={(e: any) => {
              setSede(e.target.value)
            }}>
              {
                SEDES.map(sede => (
                  <option key={sede.id}>
                    {sede.label}
                  </option>
                ))
              }
            </select>
            {
              sede === FILTER_SEDES.medellin && (
                <select
                  placeholder={sector}
                  name='sector'
                  className={styles.select}
                  value={sector}
                  onChange={(env: any) => { setSector(env.target.value) }}
                >
                  {
                    LOCATIONS_SECTOR.map(sede => (
                      <option key={sede.id}>
                        {sede.label}
                      </option>
                    ))
                  }
                </select>
              )
            }
            <select name="barrio" className={styles.select} value={barrio} onChange={handlerBarrio}>
              {
                location?.map((locat: any) => (
                  <option key={locat.id} value={`${locat.precio} ${locat.label}`}>
                    {locat.label}
                  </option>
                ))
              }
            </select>
            <Input placeholder={"Dirección. Ej: CR. APTO."} name={"direccion"} type={"text"} value={direccion}
              onChange={(env: any) => {
                setDireccion(env.target.value)
              }} />
            <label style={{ padding: '8px' }}>
              <input
                type="checkbox"
                onChange={(e) => setSaveUserData(e.target.checked)}
                disabled={!nombre || !cedula || !celular || !email || !barrio || !sede || !direccion} />
              Recordar datos
            </label>
            <button>Continuar con el pedido</button>
          </form>
        </div>
      </div>
    </>
  )
}
