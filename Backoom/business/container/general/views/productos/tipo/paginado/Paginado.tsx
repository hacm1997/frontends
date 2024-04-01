import React from 'react'
import ReactPaginate from "react-paginate";

function Paginado({styles, handlePageClick, pageCount}:any) {
  return (
    <>
      <div className={styles.paginado}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={undefined}
              pageClassName={styles.reactPaginateContainer}
              pageLinkClassName={styles.choosedPage}
              previousClassName={styles.choosedPage}
              previousLinkClassName={styles.link}
              nextClassName={styles.choosedPage}
              nextLinkClassName={styles.link}
            />
          </div>    
    
    </>
  )
}

export default Paginado


