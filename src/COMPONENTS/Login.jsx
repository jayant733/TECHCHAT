import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userslice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/constants'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('test123@gmail.com')
  const [password, setPassword] = React.useState('test@123T')
  const [error , seterror] = useState('');
  const dispatch = useDispatch()
  const handleclickbutton = async ()=>{
    try {
      console.log(email)
    console.log(password)

    const data = await axios.post(BASE_URL + '/login', {
      emailId : email,
      password : password
    },{
      withCredentials : true,

    },{
    })
    console.log(data)
    dispatch(addUser(data.data))
    navigate("/")

    }catch(err){
      seterror(err?.response?.data)
      console.log(err?.response.data)
    }
    
  }
  return ( 
    <div className='flex justify-center my-10 '>
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">Email ID :{email} </span>

              </div>
              <input type="text" defaultValue={email}  placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                setEmail(e.target.value)
                
              }}></input>

            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">Password?</span>

              </div>
              <input type="text" defaultValue= {password} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                setPassword(e.target.value)
              }}/>

            </label>
          </div>
          <p className='text-red-600'>{error} </p>
          <div className="card-actions justify-center py-4">
            <button className="btn btn-primary" onClick={()=>{
              handleclickbutton()
            }}>Login button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login