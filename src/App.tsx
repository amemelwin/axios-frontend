import mutations from "@/networks/mutations";
import { useEffect, useState } from 'react';
import { GlobalPropType } from './globalPropType';

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
    <div className="text-green-600 text-center" > A Mie</div>
    // isLogin ? 
    //   isAdmin?
    //     <AdminRouterView  globalProps={globalProps}/> : <UserRouterView globalProps={globalProps}/>
    // : <AuthRouterView globalProps={globalProps}/>
  )
}

export default App;
