import { GlobalPropType } from '@/globalPropType';
import { useState } from 'react';

const LoginScreen = ({mutations,setIsLogin,setIsAdmin}:GlobalPropType)=>{
    
  const [email, setEmail] = useState<string>('shop@gmail.com');
  const [password, setPassword] = useState<string>('admin');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {

    mutations.auth.login({email,password})
    .then((ans)=>{
      console.log(ans.data);
      setIsLogin(true);
      localStorage.setItem("token",ans.data.token);
      if(ans.data.user.role === 1){
        setIsAdmin(true);
      }else{
        setIsAdmin(false);
      }

    })
    .catch((error)=>console.log(error))
    // const loginData: LoginRequest = { email, password };
    // await axios.post('http://localhost:8080/api/v1/login',{
    //     email,
    //     password
    // }).then((ans)=>console.log(ans.data))
    // .catch((err)=>{
    //     const data =err.response.data;
    //     console.log(data);
    //     if(data.errors.email){
    //         setError(data.errors.email);
    //     }
    // });
  
  };
  return (
    <div>
      <label>
        Username:
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
export default LoginScreen;


 


