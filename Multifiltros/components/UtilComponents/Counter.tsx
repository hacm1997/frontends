
interface CounterProps {
  id: string
  addToCart: () => void
  quantityPerItem: number
  // eslint-disable-next-line no-unused-vars
  removeItem: (id: string) => void
  inventory?: number
  isDisabled: boolean
}

export const Counter = ({id, addToCart, quantityPerItem, removeItem, isDisabled}: CounterProps) => {
  return (
    <div className="flex items-center space-x-2 max-w-[81px]">
      <button className="hover:bg-red-custom hover:text-white bg-tranparent w-6 h-8 border-2 
      border-black px-3 py-2 rounded flex justify-center items-center" onClick={() => removeItem(id)}>
        -
      </button>
      <span className="text-xl">{quantityPerItem}</span>
      <button disabled={isDisabled} className="hover:bg-red-custom hover:text-white bg-tranparent w-6 h-8 border-2 
      border-black px-3 py-2 rounded flex justify-center items-center" onClick={addToCart}>
        +
      </button>
    </div>
  )
}