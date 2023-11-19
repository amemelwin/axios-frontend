import { useState } from 'react';
import './App.css';
import AdminRouterView from './routes/AdminRouterView';
import LoginScreen from './screens/public/LoginScreen';

const App=()=> {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    isLogin ? <AdminRouterView/>:<LoginScreen/>
  )
}

export default App;
