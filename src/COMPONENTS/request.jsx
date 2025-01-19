import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removerequest } from '../Utils/requestslice'

const Requests = () => {
    const dispatch = useDispatch();
  const getrequest = useSelector((store)=> store.requestuser
)
const reviewrequest  = async(status , _id)=> {
    try{
        const response = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id ,{
            /* this is the part where you send the data */ 
        }, {withCredentials: true} )
        dispatch(removerequest(_id))


    }
    catch(err){
        console.log(err.message)
    }
}
console.log(getrequest)
    const fetchRequests = async ()=> { 
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved" , {
                withCredentials : true
            })
            dispatch(addRequests(res.data.data)) 
        }
        catch(err){
            console.log(err.message)
        }

        
    }
    useEffect(()=> {
        fetchRequests()
    }
,[])


   
  return (
    <div>
        <h1 className='font-bold text-xl flex text-white items-center justify-center my-10'>Connection Request</h1>
        
          {getrequest && getrequest.map((request) => {
                
            const { _id, firstName , lastName , age , gender , about , photoUrl}= request.fromUserId
            return(
                <div>
                {getrequest.length ===0 && <h1> no request found </h1>}
                <div key={_id} className='flex flex-row'>
                <div >
                    <img src={photoUrl} alt='photo'></img>
                   <h1> {firstName + " " + lastName}</h1>
                   <h2> {age + " " + gender } </h2>
                   <h3> {about} </h3>
                </div>

                   <div className='flex relative'>
                    <button className=' border border-solid border-white mr-5 ' onClick={()=> {
                        reviewrequest("accepted", request._id)
                    }}>accept</button>
                    <button className= ' border border-solid border-white' onClick={()=>{
                        reviewrequest("rejected", request._id)
                    }}>reject</button>
                   </div>
                   </div>

                 

                
                </div>
            )
        })}
    </div>
  )
}

export default Requests