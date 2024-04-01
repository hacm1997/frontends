import React from 'react'

interface ArrowIconProps {
  style?: string
}
export const ArrowIcon = ({style}: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="66"
      fill="none"
      viewBox="0 0 52 66"
      className={style}
    >
      <path
        fill="url(#paint0_linear_1795_10410)"
        d="M50.614 36.739a4.705 4.705 0 010 6.666L29.317 64.62a4.742 4.742 0 01-6.692 0L1.33 43.405a4.705 4.705 0 01.057-6.609 4.742 4.742 0 016.634-.057L21.24 49.501V4.714c0-1.25.498-2.45 1.386-3.333a4.742 4.742 0 016.693 0 4.705 4.705 0 011.386 3.333v44.787l13.218-12.762a4.742 4.742 0 016.692 0z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1795_10410"
          x1="52"
          x2="0.698"
          y1="0"
          y2="68.173"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.41" stopColor="#EF5A0F"></stop>
          <stop offset="1" stopColor="#6F00F9"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
