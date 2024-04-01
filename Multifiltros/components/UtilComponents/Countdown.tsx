import React, { useEffect, useState } from 'react'

interface Props {
  targetDate: string;
  banner?: string;
  width?: number;
  height?: number;
}

export const CountDown = ({ targetDate, banner, width= 1100, height= 300 }: Props) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const adding0 = (num: number) => {
    return num < 10 ? '0' + num : num
  }

  const getTimeRange = (targetDate: string) => {
    const time = Date.parse(targetDate) - Date.parse(new Date() as any)
    if (time < 0) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
      setMinutes(Math.floor((time / 1000 / 60) % 60))
      setSeconds(Math.floor((time / 1000) % 60))
    }
  }

  useEffect(() => {
    setInterval(() => getTimeRange(targetDate), 1000)

    return () => getTimeRange(targetDate)
  }, [targetDate])
  return (
    <div>
      <img
        src={banner}
        width={width}
        height={height}
        alt='Banner promotion'
      />
      <div>
        <div>
          <span> {adding0(days)} : </span>
          <span>{adding0(hours)} : </span>
          <span>{adding0(minutes)} : </span>
          <span>{adding0(seconds)} </span>
        </div>
        <div>
          <span>Dias</span>
          <span>Horas</span>
          <span>Minutos</span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  )
}
