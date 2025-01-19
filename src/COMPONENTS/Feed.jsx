import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Utils/constants';
import { showfeed } from '../Utils/feedSlice';
import Usercard from './Usercard';

const Feed = () => {
  const feed = useSelector((store)=> store.feed)
  let data;
  if(feed){
     data = feed.data
    console.log(data)
  }
 
  
  const dispatch = useDispatch()
  
  const handlefeed = async()=> {
    try{
      if(feed){
        return ;
      }
      const data = await axios.get(BASE_URL + "/requestfeed",{
        withCredentials: true},{})
      console.log(data)
      dispatch(showfeed(data.data))
     
    }
    catch(err){
        console.log(err.message)
    }
   

  }
  
  useEffect(()=>{
      handlefeed();
  }, [])
  return (
    <div className='flex flex-col items-center my-20 gap-4'>
    {data && data.length > 0 ? (
      data.map((user) => <Usercard key={user._id} user={user} />)
    ) : (
      <p>No users found.</p>
    )}
  </div>
   
  )
}

export default Feed 