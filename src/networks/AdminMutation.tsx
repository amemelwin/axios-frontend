import Api from "./Api";

const AdminMutation = {
    // getCountryList: ()=>Api.get({path: "/Europe"})
    getProducts: ()=>Api.get({path:"/test"})
};

export default AdminMutation;