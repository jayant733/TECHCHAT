import React from 'react'
import { useState } from 'react'
import Usercard from './Usercard'
import { BASE_URL } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addUser } from '../Utils/userslice'
const EditProfile = ({user}) => {
     const [firstName, setFirstname] = React.useState(user.firstName)
      const [lastName, setLastname] = React.useState(user.lastName)
      const [age , setAge] = useState(user.age);
      const [gender, setgender] = useState(user.gender)
      const [error , seterror] = useState();
    const [about , setAbout]  = useState(user.about)
    const [photoUrl , setphotoUrl] = useState(user.photoUrl)
    const [showtoast, setshowtoast]= useState(false)
    const dispatch = useDispatch();

    const handleeditform =  async ()=>{
      try{
        if(!firstName|| !lastName || !age  || !gender || !about ){
          seterror("please fill all the details ")
        }
          
        const response = await axios.patch(BASE_URL + "/profile/edit",{
            firstName :firstName,
            lastName : lastName, 
            gender : gender, 
            age : age,
            about : about,
            photoUrl : photoUrl

            
          },{withCredentials:true}, 
          );
          console.log(response)
          dispatch(addUser(response.data.data))
          setshowtoast(true)
          
          const interval = setTimeout(() => {
            setshowtoast(false)
          }, 5000);
      }
    catch(err){
          console.log("err in tthe edit profile ")
          seterror(err.response.message)
    }
      
    }
  
  return (
    <>
    <div className='display flex justify-center items-center gap-x-5'>
        <div className='flex justify-center my-10 '>
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit your profile</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">FirstName :  </span>

              </div>
              <input type="text"  value={firstName} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setFirstname(e.target.value)
              }}></input>

            </label>
          </div>

        {/* this is the lastname situation */}
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4"> Lastname :  </span>

              </div>
              <input type="text"  value={lastName} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setLastname(e.target.value)
              }}></input>

            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">AGe: </span>

              </div>
              <input type="text"  value={age} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setAge(e.target.value)
              }}></input>

            </label>
          </div>


          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">Gender: </span>

              </div>
              <input type="text"  value={gender} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setgender(e.target.value)
              }}></input>

            </label>
          </div>
            

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">Photourl: </span>

              </div>
              <input type="text"  value={photoUrl} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setphotoUrl(e.target.value)
              }}></input>

            </label>
          </div>


          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text py-4">About: </span>

              </div>
              <input type="text"  value={about} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
                         setAbout(e.target.value)
              }}></input>

            </label>
          </div>

          
          <p className='text-red-600'>{error}</p>
          <div className="card-actions justify-center py-4">
            <button className="btn btn-primary" onClick={handleeditform}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>

    <Usercard user= {{firstName, lastName,  age, gender, about}}  /> 
    </div>

    {showtoast &&   <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>Profile saved succesfully</span>
  </div>
  
</div>}
  
    </>
  )
}

export default EditProfile