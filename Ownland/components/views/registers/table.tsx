import styles from './styles.module.css'
import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import moment from 'moment/moment'
import 'moment/locale/es'

moment.locale('es')
export default function BodyTable({json, count}:any) {

  const [page, setPage] = useState(0)
  //const itemsPerPage = 5;
  const PagesVisited = page * count //Calculed

  const displayData = json //const for add boats data, and data count
    .slice(PagesVisited, PagesVisited + count)
    .map((data: any, i:number) => {
      return (
        <>
          <tr key={i}>
            
            <td ><strong>{i+1}</strong></td>
            <td >{data.form_data.email}</td>
            <td >{moment(data.created_at).format('MMMM-DD-YYYY, h:mm:ss a')}</td>
            
          </tr>
        </>
      )
    })
  const pageCount = Math.ceil(json.length / count) //divide boats / boast per page

  const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
    setPage(selected)
  }

  return (
    <>
      <div className={styles.info_table}>

        <table className={styles.table_content}>
          <thead>
            <tr>
              <th className={styles.id}>#</th>
              <th>E-mail</th>
              <th>Fecha de registro</th>
            </tr>
          </thead>
          <tbody >

            {displayData}

          </tbody>
        </table>

      </div>

      <div className={styles.paginationControl}>
        {/*Nav pagination and options*/}

        <ReactPaginate

          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationsBtns}
          previousClassName={styles.prevBtns}
          nextClassName={styles.nextBtns}
          disabledClassName={styles.paginationsDisable}
          activeClassName={styles.paginationsActive}

        />

      </div>

    </>
  )
}
