import Api from "./Api";

const AdminMutation = {
    getCountryList: ()=>Api.get({path: "/Europe"})
};

export default AdminMutation;