import React from 'react'

interface CircleIconProps {
  width?:number
  height?: number
  style?: string
}

export const CircleIcon = ({height=24, width=24, style}: CircleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={style}
    >
      <g>
        <g>
          <path
            stroke="#040F61"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 21a5 5 0 100-10 5 5 0 000 10z"
          ></path>
          <path fill="#EB4648" d="M10 16a3 3 0 106 0 3 3 0 00-6 0z"></path>
        </g>
      </g>
    </svg>
  )
}
