import React from 'react'

function Login() {
  return (
    <div id="Login" className='box-border p-2'>
        <img className='w-1/6 mb-2' src="assets/logo.png" alt="" />
        <h1 style={{fontSize:"28px"}} className='font-medium'>Enter your mobile number</h1>
        <div className="rounded-md text-sm text-gray-500">To use UPI, please enter the mobile number linked to your bank account</div>
        <div>- 91 +
          <input type="text" />
        </div>
    </div>
  )
}

export default Login