import adminApi from "@/networks/services/adminApi";
import { ProductType } from "@/types/product/productType";

const get = ():Promise<Array<ProductType>>=>{
    return new Promise((resolve,reject)=>{
        adminApi.get("/products")
        .then((ans)=>{
            resolve(ans.data.data);
        })
        .catch((error)=>{
            // To do token expired , log out
            reject(error);
        })
    })
    //adminApi.get("/products")
    
}
export default get;