import ProductScreen from "@/screens/admin/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";

const AdminRouterView=()=>{
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.PRODUCT} Component={()=><ProductScreen/>}/>
        </Routes>
    </BrowserRouter>
}
export default AdminRouterView;