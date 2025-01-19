import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userslice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/constants'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error , seterror] = useState('');
  const [loginform , setloginform] = useState(true)
  const [firstName , setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
    return navigate("/")

    }catch(err){
      navigate("/error")
      seterror(err?.response?.data)
      console.log(err?.response.data)
    }
    
  }

  const handlesignup = async ()=> {
    try {
        const res = await axios.post(BASE_URL + "/signup", {
          emailId : email,
          password : password,
          firstName,lastName

        }, {
          withCredentials : true,
        })
        console.log(res)
        dispatch(addUser(res.data.data))
        return navigate("/profile")
    }
    catch(err){
        console.log(err.message)
    }
  }
  return ( 
    <div className='flex justify-center my-10 '>
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">{
            loginform ? "Login" : "Signup"
          }</h2>
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
              {loginform ? <></> : <>
                <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">FirstName :{email} </span>

              </div>
              <input type="text" defaultValue={firstName}  placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                setFirstName(e.target.value)
              }}></input>

            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">Lastname :{email} </span>

              </div>
              <input type="text" defaultValue={lastName}  placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                setLastName(e.target.value)
                
              }}></input>

            </label>
          </div>


</>}
          















          <p className='text-red-600'>{error} </p>
          <div className="card-actions justify-center py-4">
            <button className="btn btn-primary" onClick={()=>{
              loginform ? handleclickbutton() : handlesignup()
            }}>{loginform ? "Login" : "SignUp"}</button>
          </div>

          <p className = "text-center cursor-pointer"onClick={()=>{
            setloginform(!loginform)
          }}> {loginform ? "new user,signup " : "already a user ,please login in " }</p>
        </div>
      </div>
    </div>
  )
}

export default Login