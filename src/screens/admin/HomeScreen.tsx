import { GlobalPropType } from "@/globalPropType";
import RoutesList from "@/navigations/RoutesList";
import { useNavigate } from "react-router";

type menusProp = {

}
const HomeScreen = ({mutations}:GlobalPropType)=>{
    const navigate = useNavigate();
   const menus = [
    {
        title : "product",
        path : RoutesList.ADMIN.PRODUCT,
        action : ()=>navigate(RoutesList.ADMIN.PRODUCT)

    },
    {
        title : "order",
        path : "",
        action: ()=>{}
    }
   ]
    return <div>
             <div>Admin HomeScreen </div>
             <div className="w-[74%] mx-auto grid grid-cols-3 gap-6 ">
                {
                    menus.map(({title,path,action})=>{
                        return <div onClick={action} key={Math.random()} className="bg-blue-500 p-4 text-center select-none cursor-pointer">{title}</div>
                    })
                }
                
            </div>
             
    </div>
}
export default HomeScreen;