import adminApi from "@/networks/services/adminApi";
import create from "./createProduct";
import deleteProduct from "./deleteProduct";
import get from "./getProducts";

const product = {
    get,
    index: (id:number)=>adminApi.get(`/products/${id}`),
    create,
    delete: deleteProduct
}
export default product;