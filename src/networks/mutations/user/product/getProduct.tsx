import userApi from "@/networks/services/userApi";
import { ProductType } from "@/types/product/productType";

const get = ():Promise<Array<ProductType>>=>{
    return new Promise((resolve,reject)=>{
        userApi.get("/products")
        .then((ans)=>{
            resolve(ans.data.data);
        })
        .catch((err)=>{
            reject(err);
        })
    })
}
export default get;