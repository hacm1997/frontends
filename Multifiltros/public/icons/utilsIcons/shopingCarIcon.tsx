import React from 'react'

interface ShopingCarIconProps {
  width?: number
  height?: number
  style?: string
}

const ShopingCarIcon = ( { width = 40, height = 40, style }:ShopingCarIconProps ) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 46"
      className={style}
    >
      <g
        stroke="#EB4648"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        clipPath="url(#clip0_443_5583)"
      >
        <path d="M17.249 42.167a1.917 1.917 0 100-3.834 1.917 1.917 0 000 3.834zM38.335 42.167a1.917 1.917 0 100-3.834 1.917 1.917 0 000 3.834zM1.918 1.917h7.667L14.72 27.58a3.833 3.833 0 003.834 3.086h18.63a3.833 3.833 0 003.833-3.086L44.085 11.5H11.5"></path>
      </g>
      <defs>
        <clipPath id="clip0_443_5583">
          <path fill="#fff" d="M0 0H46V46H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default ShopingCarIcon