/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.css'
import React, {useEffect, useMemo, useState} from 'react'
import stateService from '../../../service/formservice'
import BodyTable from './table'
import * as XLSX from 'xlsx'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')
export default function Registers() {
  const [hidden, setHidden] = useState(true)
  const [hidden2, setHidden2] = useState(false)
  const [hidden3, setHidden3] = useState(false)
  const [dataJson, setDataJson] = useState<any>([])
  const [clickToAuth, setclickToAuth] = useState(false)

  const [inputs, setInputs] = useState(
    {
      username: '',
      password: '',
      amount: 10
    }
  )

  //Function handle, get de values input's
  const handleChanges = async (evt:any) =>{
    const value = evt.target.value
    setInputs({
      ...inputs,
      [evt.target.name]: (value)
    })
  }
  //console.log(inputs.amount)
  function auth(){
    if (inputs.username == process.env.NEXT_PUBLIC_USER_LOGIN as string) {
      if (inputs.password == process.env.NEXT_PUBLIC_PASSWORD_LOGIN as string) {
        setclickToAuth(true)
        setHidden(false)
        setHidden2(true)
        setHidden3(false)
        setclickToAuth(true)
      } else {
        setHidden3(true)
      }
    } else {
      setHidden3(true)
    }
  }

  const downloadExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(dataJson.map((dt:any) => dt.form_data))
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    XLSX.writeFile(workbook, 'OwnlandList.xlsx')
  }

  useEffect(()=>{
    if(clickToAuth){
      try {
        stateService.getRegister('ownland').then((res)=>{
          console.log('Res => ', res)
          setDataJson(res.data)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [clickToAuth])
  // console.log("data form => ",arrayView)
  //console.log(dataJson);
  return (
    <>
      <div className={styles.content}>

        {hidden ?<div className={styles.form}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="OWNLAND" title='logo'/>
          </div>

          <div className={styles.auth_login}>
            <input onChange={handleChanges} name="username" className="form-control" type="text" placeholder="Usuario"/>
          </div>

          <div className={styles.auth_login}>
            <input onChange={handleChanges} name="password" className="form-control" type="password" placeholder="Contraseña"/>
          </div>

          <br/>
          {hidden3 ?
            <div className={styles.error}>
              <p>¡Credenciales erroneas!</p><br/>
            </div>
            : null}
          <div className={styles.btn}>
            <button className={styles.btn}><a href="/" type="button" className="btn btn-light" title='salir'>Salir</a></button>
            <button  className={styles.btn} onClick={auth} >Continuar</button>
          </div>

        </div>:null}

        {hidden2 ? <section>
          <div className={styles.logo}>
            <img src="/logo.png" alt="OWNLAND" title='logo'/>
          </div>
          <div className={styles.data_info}>
            <h5>Registro de suscriptores de Ownland</h5>
            <div className={styles.auth_login}>
              <p>Suscriptores por página:</p>
              <select onChange={handleChanges} name="amount">
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
              </select>
              <button onClick={downloadExcel} type="button">Descargar Excel</button>
            </div>

            <div >
              <BodyTable json={dataJson} count={inputs.amount}/>
            </div>

          </div>
        </section>: null}

      </div>
    </>
  )
}