import axios from "axios";

const instance = axios.create({
    // baseURL: "http://worldtimeapi.org/api/timezone",
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        common: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':"*",
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaG9wQGdtYWlsLmNvbSIsImV4cCI6MTcwMDQwMzkwMCwiaWF0IjoxNzAwNDAwMzAwfQ.4so37SNTfeWmgs95GbVuSST0J3UJ9OJNDSMGZ_qDg6U"

        }
    }
})

const Api = {
    get: ({path}:{path:string})=> instance.get(path),
    post: ({path,body}:{path:string,body: {}})=> instance.post(path,body) 
}

export default Api;