import LoginInput from '@/components/common/LoginInputComponent';
import { GlobalPropType } from '@/globalPropType';
import { LoginErrResponse } from '@/networks/mutations/auth/login';
import { useState } from 'react';

const LoginScreen = ({mutations,setIsLogin,setIsAdmin}:GlobalPropType)=>{
    
  const [email, setEmail] = useState<string>('user@gmail.com');
  const [emailErr,setEmailErr] = useState<string>('');
  const [password, setPassword] = useState<string>('user');
  const [pwdErr,setPwdErr] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  const handleLogin = async () => {
    setEmailErr("");
    setPwdErr("");
    setError("");
    mutations.auth.login({email,password})
    .then((ans)=>{
      setIsLogin(true);
      if(ans.user.role === 1) {
        setIsAdmin(true);
      }else{
        setIsAdmin(false);
      }

    })
    .catch((err:LoginErrResponse)=>{
      setError(err.message);
      if(err.errors){
        if(err.errors.email){
          setEmailErr(err.errors.email);
        }
        if(err.errors.password){
          setPwdErr(err.errors.password);
        }
      }
    })
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className=''>
        <div className='text-[30px] font-bold mb-[20px]'>FullStack With Axios</div>
        {true && <p className='text-red-500 mb-2'>{error} </p>}
          <LoginInput
            id='email'
            label='Email'
            type='email'
            value={email}
            setValue={setEmail}
            errMsg={emailErr}
            
          />
          
          <div className='h-[20px]'></div>
          <LoginInput
            id='password'
            label='Password'
            type='password'
            value={password}
            setValue={setPassword}
            errMsg={pwdErr}
          />
          <button className='border-[1px] p-2 bg-blue-300 w-full mt-5 rounded-md'  onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
export default LoginScreen;


 


