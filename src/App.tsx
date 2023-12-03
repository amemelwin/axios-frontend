import { useEffect, useState } from 'react';
import { GlobalPropType } from './globalPropType';
import AdminRouterView from "./navigations/AdminRouterView";
import AuthRouterView from "./navigations/AuthRouterView";
import UserRouterView from "./navigations/UserRouterView";
import mutations from './networks/mutations';

const App=()=> {
  
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  
  const globalProps: GlobalPropType = {
    setIsLogin, setIsAdmin,
    mutations
}

  useEffect(()=>{
    init();
  })

  const init= ()=>{
    console.log("on init");
    // AdminMutation.login()
    // .then((apple)=>console.log(apple.data));
    // AdminMutation.getProducts()
    // .then((ans)=>console.log(ans.data.code));
  }

  return (
    isLogin ? 
      isAdmin?
        <AdminRouterView  globalProps={globalProps}/> : <UserRouterView globalProps={globalProps}/>
    : <AuthRouterView globalProps={globalProps}/>
  )
}

export default App;
