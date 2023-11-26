import axios from "axios";
import config from "../config";

// create instance for set default baseUrl and header
const instance = axios.create({
    baseURL: config.baseURL+"/user", // baseUrl : http://localhost:8080/api/v1/user
    headers:{
        common:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+ localStorage.getItem("token")
        }
    }
})

// Now ready to use with default baseUrl and header
const userApi = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
}
export default userApi;