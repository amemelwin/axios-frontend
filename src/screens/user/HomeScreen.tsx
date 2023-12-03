import SizeBox from "@/components/common/SizeBox";
import { GlobalPropType } from "@/globalPropType";
import RoutesList from "@/navigations/RoutesList";
import { useNavigate } from "react-router-dom";

const UserHomeScreen = ({}:GlobalPropType)=>{
    const navigate = useNavigate();
    const menu = [
        {
            title : "Product",
            route : RoutesList.USER.PRODUCT
        },
        {
            title : "Product",
            route : RoutesList.USER.PRODUCT
        },
        {
            title : "Product",
            route : RoutesList.USER.PRODUCT
        }
    ]
    return <div className="">
        <div className="text-center text-xl">User HomeScreen</div>
        <SizeBox h={20}/>
        <div className="grid grid-cols-4 gap-5 w-[50%] mx-auto">
            {
                menu.map(({title,route})=>{
                    return <div key={Math.random()} onClick={()=>navigate(route)} className="bg-blue-400 text-center py-2 rounded-md cursor-pointer select-none">
                        {title}
                    </div>
                })
            }
        </div>

    </div>
}
export default UserHomeScreen;