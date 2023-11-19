import { useEffect, useState } from 'react';
import './App.css';
import AdminRouterView from './routes/AdminRouterView';
import LoginScreen from './screens/public/LoginScreen';
import AdminMutation from './networks/AdminMutation';

const App=()=> {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(()=>{
    init();
  })

  const init= ()=>{
    console.log("on init");
    AdminMutation.getCountryList()
    .then((ans)=>{
      console.log(ans);
    });
  }

  return (
    isLogin ? <AdminRouterView/>:<LoginScreen/>
  )
}

export default App;
