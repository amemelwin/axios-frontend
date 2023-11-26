import { GlobalPropType } from "@/globalPropType";
import LoginScreen from "@/screens/public/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";

const AuthRouterView = ({globalProps}:{globalProps:GlobalPropType})=>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={()=><LoginScreen {...globalProps}/>}/>
            <Route path={RoutesList.AUTH.LOGIN} Component={()=><LoginScreen {...globalProps}/>}/>
        </Routes>
    </BrowserRouter>
}
export default AuthRouterView;