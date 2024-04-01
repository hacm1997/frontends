import { createContext, useContext } from "react"

export type GlobalContent = {
    value: number
    setValue:(c: number) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    value: 0, // set a default value
    setValue: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext);
