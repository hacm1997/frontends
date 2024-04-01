import React from 'react'

interface PhoneProps {
  width?: number
  height?: number
  style?: string
}
export const PhoneIcon = ({width =26, height=26, style}: PhoneProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 26 26"
      className={style}
    >
      <path
        stroke="#EB4648"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.866 5.587a5.749 5.749 0 012.962 1.573 5.73 5.73 0 011.576 2.957M15.866 1c2.331.259 4.505 1.3 6.165 2.955A10.313 10.313 0 0125 10.105m-1.149 9.152v3.44a2.29 2.29 0 01-1.562 2.182c-.303.102-.624.14-.943.112a22.766 22.766 0 01-9.915-3.52 22.384 22.384 0 01-6.894-6.882 22.667 22.667 0 01-3.528-9.942 2.29 2.29 0 011.36-2.305c.292-.128.608-.195.927-.195h3.447A2.3 2.3 0 019.04 4.119c.145 1.101.415 2.182.804 3.223a2.29 2.29 0 01-.517 2.42l-1.46 1.456a18.366 18.366 0 006.895 6.88l1.459-1.456a2.3 2.3 0 012.424-.516 14.78 14.78 0 003.229.803 2.3 2.3 0 011.976 2.328z"
      ></path>
    </svg>
  )
}
