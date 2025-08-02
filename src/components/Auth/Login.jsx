import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl p-20  border-emerald-600'>
        <form
        onSubmit={(e)=>{
          submitHandler(e);
        }}
         className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
           required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-4 px-5 text-xl' type='email' placeholder='Enter your email'/>
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          required className='outline-none bg-transparent mt-4 placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-4 px-5 text-xl' type='password' placeholder='Enter your password'/>
          <button className='mt-7 text-white outline-none placeholder:text-white border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl w-60'>Login </button>
        </form>
      </div>
    </div>
  )
}

export default Login