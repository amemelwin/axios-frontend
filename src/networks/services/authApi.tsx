import axios from "axios";
import config from "../config";

// create instance for set default baseUrl and header
const instance = axios.create({
    baseURL: config.baseURL, // baseUrl : http://localhost:8080/api/v1
    headers:{
        common:{
            "Content-Type":"application/json"
        }
    }
});

// Now ready to use with default baseUrl and header
const authApi = {
    post: instance.post
}
export default authApi;