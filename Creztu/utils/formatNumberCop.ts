export const formatNumber = (number: number) => {
  const COP = new Intl.NumberFormat('es-co', { style: 'currency', currency: 'COP' }).format(number)
  return COP.slice(0, -3)
}