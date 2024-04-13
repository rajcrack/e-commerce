import { createContext } from "react";
interface Props {
    setter: (value: boolean) => void
    loading: boolean
}
const updater = (value: boolean) => {

}

export const LoadingContext = createContext<Props>({ loading: false, setter: updater });