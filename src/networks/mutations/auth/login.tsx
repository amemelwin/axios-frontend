import authApi from "@/networks/services/authApi";

type LoginRequest = {
    email: string;
    password: string;
}

type LoginResponse = {
    code: number,
    message: string,
    token: string,
    user: User
}

type User = { 
    user_id: number,
    email: string,
    user_name: string,
    role: number,
    created_at: string,
    updated_at: string
}

export type LoginErrResponse = {
    status: string,
    message: string,
    code: number,
    errors?: LoginFieldError
}
type LoginFieldError= {
    password?: string,
    email?: string
}
const login =(loginRequest:LoginRequest):Promise<LoginResponse>=>{
   return new Promise((resolve,reject)=>{
        authApi.post("/login",loginRequest)
        .then((ans)=>{
            localStorage.setItem("token",ans.data.token);
            resolve(ans.data);
        })
        .catch((err)=>{
            reject(err.response.data);

        })
   })
}
export default login;