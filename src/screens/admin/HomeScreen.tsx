import { GlobalPropType } from "@/globalPropType";
import { useEffect, useState } from "react";

type ProductProp =  {
    "product_id": number,
    "product_name": string,
    "price": number,
    "stock": number
}
const HomeScreen = ({mutations}:GlobalPropType)=>{
    const [productsList,setProductsList] = useState<Array<ProductProp>>([]);

    useEffect(()=>{
        if(productsList.length<1){
            mutations.admin.product.get()
            .then((ans)=>{
                //ans.data.data
                setProductsList(ans.data.data);
                
            })
        }
       
    })
   
    return <div>
             <div>Admin HomeScreen {productsList.length}</div>
             <div>{productsList.map(({product_name,product_id,stock,price}:ProductProp)=>{
                return <div key={product_id} className="">
                    <div className="flex flex-row justify-between items-center text-red-500 bg-black">
                        <div>{product_name}</div>
                        <div>{price}</div>                        
                    </div>
                </div>
             })}
             </div>
    </div>
}
export default HomeScreen;