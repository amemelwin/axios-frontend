import { GlobalPropType } from "@/globalPropType";
import UserHomeScreen from "@/screens/user/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";

const UserRouterView=({globalProps}:{globalProps:GlobalPropType})=>{
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.USER.HOME} Component={()=><UserHomeScreen {...globalProps}/> } />
        </Routes>
    </BrowserRouter>
}
export default UserRouterView;