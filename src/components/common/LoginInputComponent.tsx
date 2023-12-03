import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

interface LoginInputProps {
    value: string | number | readonly string[] | undefined ;
    type: HTMLInputTypeAttribute | undefined;
    setValue: Dispatch<SetStateAction<string>>;
    id: string | undefined;
    label : string;
    errMsg : string;
} 
const LoginInput= ({value,setValue,id,type,label,errMsg}:LoginInputProps)=>{
    return<div>
       <div className='flex flex-row justify-between items-center'>
        <label htmlFor={id} className="flex-1">{label}:</label>
          <div className='flex-[3] '>
            <input 
                className="border-[1px] border-black rounded-sm p-1 text-right w-full"
                id={id} 
                type={type} 
                value={value} 
                onChange={(event)=>setValue(event.target.value)}
                />
          </div>
      </div>
      {errMsg && <div className="text-sm text-red-500 text-right">{errMsg}</div>}
    </div>
}
export default LoginInput;