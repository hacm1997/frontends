import React from 'react'

interface CardIconProps {
  width?: number
  height?: number
}

export const CardIcon = ({width = 54, height = 43}: CardIconProps) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 54 43"
    >
      <path
        stroke="#EB4648"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M47.455 2H6.545C4.035 2 2 4.171 2 6.85v29.094c0 2.678 2.035 4.85 4.545 4.85h40.91c2.51 0 4.545-2.172 4.545-4.85V6.849C52 4.171 49.965 2 47.455 2zM2 18.297h50"
      ></path>
    </svg>
  )
}