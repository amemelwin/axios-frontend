import { GlobalPropType } from "@/globalPropType";
import UserHomeScreen from "@/screens/user/HomeScreen";
import ProductScreen from "@/screens/user/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";

const UserRouterView=({globalProps}:{globalProps:GlobalPropType})=>{
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.USER.HOME} Component={()=><UserHomeScreen {...globalProps}/> } />
            <Route path={RoutesList.USER.PRODUCT} Component={()=><ProductScreen {...globalProps}/> } />
        </Routes>
    </BrowserRouter>
}
export default UserRouterView;