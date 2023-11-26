import mutations from "@/networks/mutations";
import { Dispatch, SetStateAction } from "react";
export type GlobalPropType = {
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setIsAdmin: Dispatch<SetStateAction<boolean>>,
    mutations: typeof mutations
}