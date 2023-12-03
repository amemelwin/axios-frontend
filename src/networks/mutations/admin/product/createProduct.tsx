import adminApi from "@/networks/services/adminApi";
import { ProductCreateReq, ProductType } from "@/types/product/productType";

const create = (product:ProductCreateReq):Promise<ProductType>=>{
    return new Promise((resolve,reject)=>{
        adminApi.post("/products",product)
        .then((ans)=>{
            resolve(ans.data.data);
        })
        .catch((err)=>{
            reject(err.response.data);
        })
        //:(product:productCreateReq)=>adminApi.post("/products",product)
    })
}
export default create;