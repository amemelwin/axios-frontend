import axios from "axios";

const instance = axios.create({
    // baseURL: "http://worldtimeapi.org/api/timezone",
    baseURL: "http://localhost:8080",
    headers: {
        common: {
            "Content-Type": "application/json",
            // // "Authorization": "Bearer l;akjsdf;lkajsd;fljkads",
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials':true,
            // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    }
})

const Api = {
    get: ({path}:{path:string})=> instance.get(path),
    post: ({path,body}:{path:string,body: {}})=> instance.post(path,body) 
}

export default Api;