import React, { useEffect } from 'react'
import { useAuthContext } from '../contextApi/authContext.jsx'
const Login = () => {
  const {authUser,setauthUser}=useAuthContext()
  
  const handleSubmit = async (e) => {


      try {
        e.preventDefault()
        const res=await fetch("/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
            })
        })
        const data=await res.json()
        if(data.error){
          alert(data.error)
        }else{
          alert(data.message)
        setauthUser(data.user)
        // console.log(authUser);
      localStorage.setItem("mbAuth",JSON.stringify(data.user))
        }
      } catch (error) {
        console.log(error);
      }
      
   

  }

  return (
    <div className="login">
      <h1 className=' '  >login to <span className='name'  >mateBatu</span></h1>
      <form onSubmit={handleSubmit} className='loginForm ' >
        <div className='inputContainer'>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' placeholder='Enter the username' />
        </div>
        <div className='inputContainer'>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='Enter the password' />
        </div>
        <button type='submit' className='loginBtn '   >login </button>
        <a href="/signup" className='loginQn' >don't have an account ?</a>
      </form>
    </div>
  )
}

export default Login
