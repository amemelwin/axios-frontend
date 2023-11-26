import adminApi from "../services/adminApi";
import authApi from "../services/authApi";

type LoginRequest ={
    email: string;
    password: string;
}
const mutations = {
    auth: {
        login :  (LoginRequest:LoginRequest)=>authApi.post("/login",LoginRequest),
    },
    admin:{
        product :{
            get: ()=>adminApi.get("/products"),
            index: (id:number)=>adminApi.get(`/products/${id}`)
        }
    }
}
export default mutations;