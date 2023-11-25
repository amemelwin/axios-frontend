import { useEffect, useState } from 'react';
import './App.css';
import AdminMutation from './networks/AdminMutation';
import AdminRouterView from './routes/AdminRouterView';
import LoginScreen from './screens/public/LoginScreen';

const App=()=> {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(()=>{
    init();
  })

  const init= ()=>{
    console.log("on init");
    AdminMutation.getProducts()
    .then((ans)=>console.log(ans.data.code));
  }

  return (
    isLogin ? <AdminRouterView/>:<LoginScreen/>
  )
}

export default App;
