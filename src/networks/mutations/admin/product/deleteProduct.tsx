import adminApi from "@/networks/services/adminApi";
import { ProductDeleteResponseType } from "@/types/product/productType";

const deleteProduct = (productId:number):Promise<ProductDeleteResponseType>=>{
    return new Promise((resolve,reject)=>{
        adminApi.delete(`/products/${productId}`)
        .then((ans)=>{
            resolve(ans.data);
        })
        .catch((error)=>{
            reject(error.response.data.message);
        })
    })
}
export default deleteProduct;