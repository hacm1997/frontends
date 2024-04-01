import React from 'react'

interface DeliveryIconProps {
  width?: number
  height?: number
  style?: string
}

export const DeliveryIcon = ({ width = 40, height = 40, style }:DeliveryIconProps) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 78"
      className={style}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <path stroke="#EB4648" d="M10 37.223h13.333"></path>
        <path stroke="#EB4648" d="M3.637 30.133H16.97"></path>
        <path stroke="#EB4648" d="M10 23.043h13.333"></path>
        <path
          stroke="#040F61"
          d="M16 54.594h-4.667a2 2 0 01-2-2V41.595M6 15.598h34.667a2 2 0 012 2v36.996m-12.667 0h19.333m14.667 0h3.333a2 2 0 002-2V35.096m0 0H42.667m26.666 0L59.92 19.8a2 2 0 00-1.703-.952h-15.55"
        ></path>
        <path
          stroke="#040F61"
          d="M56.667 61.743c3.682 0 6.666-2.91 6.666-6.5 0-3.589-2.984-6.499-6.666-6.499-3.682 0-6.667 2.91-6.667 6.5s2.985 6.499 6.667 6.499z"
        ></path>
        <path
          stroke="#040F61"
          d="M23.335 61.743c3.681 0 6.666-2.91 6.666-6.5 0-3.589-2.985-6.499-6.666-6.499-3.682 0-6.667 2.91-6.667 6.5s2.985 6.499 6.667 6.499z"
        ></path>
      </g>
    </svg>
  )
}

