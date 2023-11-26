import authApi from "@/networks/services/authApi";

type LoginRequest ={
    email: string;
    password: string;
}
const auth = {
    login :  (LoginRequest:LoginRequest)=>authApi.post("/login",LoginRequest),
}
export default auth;