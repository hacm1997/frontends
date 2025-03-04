import React from 'react'

interface TruckIconProps {
  width?: number
  height?: number
  style?: string
}

export const TruckIcon = ({width, height, style = '#EB4648'}: TruckIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 20"
      className={style}
    >
      <g fill={style} clipPath="url(#clip0_336_3873)">
        <path d="M8.09 11.667H.94c-.66 0-.935-.3-.935-1.024V1.017C.004.312.28.002.928 0 5.696 0 10.464 0 15.232.001c.655 0 .931.302.931 1.003v9.654c0 .72-.271 1.009-.946 1.009H8.091z"></path>
        <path d="M17.71 4.163c.913.093 1.814-.179 2.656.26 1.4.731 2.51 1.822 3.349 3.235.202.341.286.72.284 1.135-.01 2.298-.005 4.595-.005 6.893 0 .675-.291.986-.918.987h-.8c-.23-1.09-.747-1.968-1.582-2.61-.63-.483-1.337-.764-2.112-.753-2.087.032-3.333 1.24-3.93 3.363h-1.487c-1.245 0-2.49-.004-3.734.004-.175 0-.25-.043-.303-.243-.405-1.52-1.307-2.52-2.712-2.978a.276.276 0 01-.15-.102c.093-.005.187-.013.28-.013 2.91 0 5.821.002 8.731-.002 1.12-.001 2.001-.654 2.307-1.735.088-.311.118-.653.12-.98.01-2.022.005-4.044.005-6.067v-.395zm1.277 6.236h3.729c.289-2.334-1.867-4.711-3.729-4.127v4.127z"></path>
        <path d="M5.388 20c-1.283-.002-2.327-1.132-2.325-2.515 0-1.38 1.055-2.52 2.327-2.518 1.277.001 2.324 1.136 2.325 2.52 0 1.387-1.044 2.514-2.327 2.512z"></path>
        <path d="M18.485 20c-1.282.008-2.33-1.114-2.333-2.502-.004-1.387 1.034-2.524 2.31-2.53 1.283-.006 2.324 1.114 2.33 2.507.006 1.396-1.018 2.517-2.307 2.525z"></path>
        <path d="M.004 13.254c.378.03.725.08 1.071.084 1.051.01 2.102.004 3.152.004h.286l.012.05c-.054.023-.108.05-.164.068-1.4.463-2.299 1.464-2.704 2.98-.049.182-.107.25-.28.237-.208-.016-.42.003-.63-.006a.776.776 0 01-.74-.77c-.014-.891-.003-1.782-.003-2.646z"></path>
      </g>
      <defs>
        <clipPath id="clip0_336_3873">
          <path fill="#fff" d="M0 0H24V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
