import Api from "./Api";

const AdminMutation = {
    // getCountryList: ()=>Api.get({path: "/Europe"})
    getTest: ()=>Api.get({path: "http://localhost:8080/api/v1/cors-test"})
};

export default AdminMutation;