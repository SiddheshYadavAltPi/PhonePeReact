import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isEnabled,setisEnabled]= useState(false);
  const [phone, setphone] = useState("");

  const handleClick=()=>{
    console.log("click");
    console.log(isEnabled);
    if(isEnabled){
      navigate('/otp');
    }
  }
  const handleOnChange= (e)=>{
    setphone(e.target.value);
    e.target.value.length == 10? setisEnabled(true): setisEnabled(false);
    console.log(phone.length,e.target.value.length,isEnabled);
  }

  return (
    <div id="Login" className='box-border p-2 max-w-3xl m-auto'>
        <img className='w-[50px] mb-2' src="assets/logo.png" alt="" />
        <h1 style={{fontSize:"28px"}} className='font-medium'>Enter your mobile number</h1>
        <div className="rounded-md text-sm text-gray-500">To use UPI, please enter the mobile number linked to your bank account</div>
        <div className='border-primary rounded-md border-2 p-2 text-2xl flex mt-4 font-medium'>
          <div className='inline min-w-fit'>- 91 +</div>
          <input className='w-full inline mx-1 caret-primary' type="number" value={phone} onChange={handleOnChange} />
        </div>
        <div className={isEnabled?'enable myBtn':'myBtn'} onClick={handleClick}>PROCEED</div>
    </div>
  )
}

export default Login;