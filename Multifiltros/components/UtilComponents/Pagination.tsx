import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import React from 'react'

interface PaginationProps {
  pages: number[];
  // eslint-disable-next-line no-unused-vars
  setPageNumber: (value: number) => void;
  pageNumber: number;
  // eslint-disable-next-line no-unused-vars
  setSelected: (value: number) => void;
  selected: number;
  totalPage: number;
}

export const Pagination = ({pages, selected, setSelected, setPageNumber, pageNumber, totalPage}: PaginationProps) => {
  
  const handlePageSelected = (page: number, index: number) => {
    setPageNumber(page)
    setSelected(index)
  }

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1)
    setSelected(selected - 1)
  }

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1)
    setSelected(selected + 1)
  }

  return (
    <div className="flex justify-center gap-1 text-xs font-medium">
      <button
        disabled={selected === 0}
        onClick={handlePrevPage}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <NavArrowLeft />
      </button>
      {pages?.slice(0, 7).map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageSelected(page + 1, index)}
          className={`inline-flex h-8 w-8 items-center justify-center rounded border
             border-gray-100  text-gray-900 rtl:rotate-180 
             ${page === selected ? 'bg-blue-500' : ''}`}
        >
          {page + 1}
        </button>
      ))}
      <button
        disabled={totalPage === pageNumber}
        onClick={handleNextPage}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <NavArrowRight />
      </button>
    </div>
  )
}
