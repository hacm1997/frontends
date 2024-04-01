import React from 'react'

interface TrashIconProps{
  width?: number
  height?: number
  style?: string
}

export const Trash = ({width=30, height=30, style}: TrashIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 30"
      className={style}
    >
      <path
        stroke="#040F61"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.75 7.5h22.5M23.75 7.5V25a2.5 2.5 0 01-2.5 2.5H8.75a2.5 2.5 0 01-2.5-2.5V7.5m3.75 0V5a2.5 2.5 0 012.5-2.5h5A2.5 2.5 0 0120 5v2.5"
      ></path>
      <path
        stroke="#EB4648"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.5 13.75v7.5M17.5 13.75v7.5"
      ></path>
    </svg>
  )
}
