import adminApi from "@/networks/services/adminApi";
type productCreateReq = {
    price: number,
     stock: number,
     product_name: string 
 
 }
const product = {
    get: ()=>adminApi.get("/products"),
    index: (id:number)=>adminApi.get(`/products/${id}`),
    create:(product:productCreateReq)=>adminApi.post("/products",product)
}
export default product;