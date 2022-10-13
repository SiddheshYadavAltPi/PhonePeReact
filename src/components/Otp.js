import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Otp() {
  const [otp, setotp] = useState({
    a : "",
    b : "",
    c : "",
    d : "",
    e : ""
  });
  const handleOnChange =(e)=>{
    setotp({[e.target.name]:e.target.value.slice(e.target.value.length -1,e.target.value.length)});
  }
  let inputs = document.querySelectorAll('input');
  inputs.forEach(elem=>elem.addEventListener('keyup',key=>{
    if(key.key==="Backspace"){
      console.log(elem.value.length);
      if(elem.value.length==0){
        elem.previousElementSibling.focus();
      }
    }else{
      elem.nextElementSibling.focus();
    }
  }))
  return (
    <div className='box-border p-2 max-w-3xl m-auto'>
      <FontAwesomeIcon icon="arrow-left" size='lg'/>
      <h1 style={{fontSize:"28px"}} className='font-semibold'>Enter the 5 digit OTP sent to to XXXXXXXXXX</h1>
      <div className="flex">
        <input name='a' type="number" className='m-1 border rounded-md w-9 h-9 text-center' style={{borderColor:'darkgray'} } value={otp.a} onChange={handleOnChange}/>
        <input name='b' type="number" className='m-1 border rounded-md w-9 h-9 text-center' style={{borderColor:'darkgray'} } value={otp.b} onChange={handleOnChange}/>
        <input name='c' type="number" className='m-1 border rounded-md w-9 h-9 text-center' style={{borderColor:'darkgray'} } value={otp.c} onChange={handleOnChange}/>
        <input name='d' type="number" className='m-1 border rounded-md w-9 h-9 text-center' style={{borderColor:'darkgray'} } value={otp.d} onChange={handleOnChange}/>
        <input name='e' type="number" className='m-1 border rounded-md w-9 h-9 text-center' style={{borderColor:'darkgray'} } value={otp.e} onChange={handleOnChange}/>
      </div>
    </div>
  )
}

export default Otp