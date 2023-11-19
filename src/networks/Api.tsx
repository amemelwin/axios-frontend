import axios from "axios";

const instance = axios.create({
    baseURL: "http://worldtimeapi.org/api/timezone",
    headers: {
        common: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer l;akjsdf;lkajsd;fljkads"
        }
    }
})

const Api = {
    get: ({path}:{path:string})=> instance.get(path),
    post: ({path,body}:{path:string,body: {}})=> instance.post(path,body) 
}

export default Api;