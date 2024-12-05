import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../contextApi/authContext';


const Signup = () => {
  
  const [colleges, setcolleges] = useState([]);

  const{authUser, setauthUser}=useAuthContext()
  useEffect(() => {
    
    const getCollleges = async () => {
        const res=await fetch('/api/admin/getClg')
       setcolleges(await res.json())
    }
    getCollleges()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    const confirmPassword = e.target[2].value
    const gender = e.target[3].value
    const college = e.target[4].value
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
        gender,
        college
      })
    })
    const data = await res.json()
    if(data.error) {
        alert(data.error)
        
    }else {
        
        alert(data.message)
        setauthUser(data.user)
        console.log(authUser);
      localStorage.setItem("mbAuth",JSON.stringify(data.user))
    }
    console.log(data);
  }


  return (
       
        <div className="login ">
         <h1 className=' '  >signing up to <span className='name'  >mateBatu</span></h1>
         <form   onSubmit={handleSubmit} className='loginForm  w-full px-3 ' >  

              <div className="inputContainer2">
              <label htmlFor="username">Username</label>
              <input type="text"  name='username' placeholder='Enter the username'  />
              </div>
              <div className="inputContainer2">
              <label htmlFor="password">Password</label>
              <input type="text"  name='password' placeholder='Enter the password'  />
              </div>
              <div className="inputContainer2">
              <label htmlFor="confirmPassword">confirm Password</label>
              <input type="text"  name='confirmPassword' placeholder='Confirm the password'  />
              </div>
              <div className="inputContainer2">
              <label htmlFor="gender">Select gender👇</label>
              <select className='select' name="gender" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
              </div>
              <div className="inputContainer2">
              <label htmlFor="college">Select college👇</label>
              <select className='select' name="college" id="">
              {
                  colleges.map((clg)=><option key={clg._id} value={clg._id}>{clg.name}</option>)
              }
              </select>
              </div>
              <button type='submit' className='loginBtn'   >submit </button>
              <a href="/login"  className='loginQn '  >Already have an account ?</a>
          </form>
        </div>
    
  )
}

export default Signup
