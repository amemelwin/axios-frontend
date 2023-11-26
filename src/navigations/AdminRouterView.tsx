import { GlobalPropType } from "@/globalPropType";
import HomeScreen from "@/screens/admin/HomeScreen";
import ProductScreen from "@/screens/admin/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";

const AdminRouterView=({globalProps}:{globalProps:GlobalPropType})=>{
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.ADMIN.HOME} Component={()=><HomeScreen {...globalProps}/> } />
            <Route path={RoutesList.ADMIN.PRODUCT} Component={()=><ProductScreen {...globalProps}/>}/>
        </Routes>
    </BrowserRouter>
}
export default AdminRouterView;