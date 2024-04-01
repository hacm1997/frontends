import React from 'react'

interface CarIconProps {
  width?: number
  height?: number
  style?: string
}

export const CarIcon = ({width, height, style = '#EB4648'}: CarIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 14"
      className={style}
    >
      <g fill={style} clipPath="url(#clip0_336_3883)">
        <path d="M22.238 11.66c.323-2.46-1.201-4.44-3.023-4.426-1.782.014-3.3 1.958-2.983 4.41h-7.69c.33-2.599-1.374-4.506-3.141-4.41-1.735.096-3.194 2.009-2.882 4.4-1.254.305-2.477-.874-2.507-2.437a81.972 81.972 0 01-.001-2.71C.025 5.364.77 4.461 1.688 4.44c.484-.01.968-.01 1.451.001.148.003.246-.047.344-.189.726-1.055 1.47-2.09 2.187-3.154.512-.76 1.143-1.11 1.948-1.1 1.745.023 3.49.014 5.235.005.59-.003 1.098.216 1.55.68 1.046 1.074 2.111 2.119 3.142 3.212.383.406.793.62 1.284.719 1.25.251 2.495.54 3.742.823.853.193 1.418 1.027 1.424 2.095.004.7.01 1.4-.003 2.1-.019 1.05-.694 1.928-1.544 2.026-.068.008-.137.001-.209.001zm-9.247-7.221v.01c.88 0 1.761-.002 2.642 0 .16 0 .31-.014.367-.234.056-.212-.042-.347-.168-.469-.805-.774-1.604-1.556-2.415-2.32a.695.695 0 00-.434-.186c-.88-.017-1.761-.011-2.642-.007-.393.003-.62.282-.623.763-.005.544-.003 1.088 0 1.632.002.537.218.808.656.81.873.004 1.745.002 2.618.002v-.001zm-6.426-.002c.412 0 .824.008 1.236-.002.338-.008.573-.284.58-.693.01-.602.009-1.204 0-1.805-.006-.412-.238-.688-.573-.704-.198-.009-.403-.039-.593.009-.174.044-.378.13-.491.284a66.19 66.19 0 00-1.591 2.277c-.068.1-.117.313-.075.409.05.113.205.208.318.216.395.026.792.01 1.188.01zm4.29 2.564c.142 0 .285.01.426-.003.304-.03.53-.334.529-.696 0-.36-.228-.67-.532-.69a6.87 6.87 0 00-.83 0c-.305.017-.533.319-.539.68-.006.373.227.68.543.708.133.012.269.002.403.002V7z"></path>
        <path d="M5.537 7.938c1.371.01 2.47 1.372 2.467 3.055C8 12.65 6.879 14.007 5.522 14c-1.37-.007-2.473-1.371-2.467-3.055.005-1.658 1.127-3.017 2.482-3.007zm1.134 3.038c0-.777-.516-1.408-1.148-1.404-.622.004-1.132.63-1.134 1.391-.003.774.514 1.405 1.148 1.405.62 0 1.134-.633 1.134-1.392z"></path>
        <path d="M19.222 14c-1.37-.01-2.469-1.38-2.46-3.064.008-1.656 1.133-3.012 2.489-2.999 1.37.014 2.467 1.38 2.46 3.064-.007 1.655-1.13 3.008-2.49 2.998zm1.156-3.023c0-.777-.515-1.41-1.147-1.405-.621.004-1.132.629-1.135 1.39-.003.773.513 1.405 1.147 1.405.62 0 1.135-.632 1.136-1.39h-.001z"></path>
      </g>
      <defs>
        <clipPath id="clip0_336_3883">
          <path fill="#fff" d="M0 0H24V14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
