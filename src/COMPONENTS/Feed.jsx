import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Utils/constants';
import { showfeed } from '../Utils/feedSlice';
import Usercard from './Usercard';

const Feed = () => {
  const feed = useSelector((store)=> store.feed)
  console.log(feed)
  
  const dispatch = useDispatch()
  
  const handlefeed = async()=> {
    try{
      if(feed){
        return ;
      }
      const data = await axios.get(BASE_URL + "/feed",{
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
    feed && (
      <div className='flex justify-center items-center my-20'>
      <Usercard user= {feed[0]} />
    </div>
    )
   
  )
}

export default Feed