import React, { useEffect } from 'react'
import Header from './header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Utils/userslice'
import axios from 'axios'
const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((store)=>{
    store.user
  })
  const fetchUser = async () => {
    if(userdata) return
    try {
      const token = localStorage.getItem("token");
       // or sessionStorage
      console.log(token)
       const profile = await axios.get(BASE_URL + "/profile/view", {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to header
        }, withCredentials : true,
      
       
      },{ 
       
      });
      console.log(profile);
      dispatch(addUser(profile.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login") //this is done kyunki agar koi aur tarah ka error hai jaise internet something ya data not getting then it do not redirect again it is only for token not there 

      }

      console.error(err);
    }
  }
  //useeffect contains one function and on dependency injection 
  useEffect(() => {
    //whatever you just wrtie here will call on the first 

    
    fetchUser()

  }, [])
  //api call in strict mode is made twice in devlopment //if we remover the strict mode it will not call the api twice just to reverify the work
  return (
    <div>
      <Header></Header> {/* this header will stay constant even if the routing changes */}
      <Outlet /> {/* Outlet is used to render the nested routes ANY CHILDREN ROUTES OF BODY ARE RENDERED HERE  */}
      <Footer></Footer> {/* this footer will stay constant even if the routing changes */}
    </div>
  )
}

export default Body