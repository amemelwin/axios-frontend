import { Dispatch, SetStateAction } from "react";
import mutations from "./networks/mutations";
export type GlobalPropType = {
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setIsAdmin: Dispatch<SetStateAction<boolean>>,
    mutations: typeof mutations
}