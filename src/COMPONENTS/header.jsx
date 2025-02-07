import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Utils/constants'
import { removeUser } from '../Utils/userslice'


const Header = () => {


  const user = useSelector((store) => store.addUser)
  // console.log(user) //console.log will give me the data of the user store.addUser for the userreducere
  const dispatch = useDispatch() //after logging out of the code we should clear the redux store and should directly go to the login page 
  const Navigate = useNavigate()

  const handlelogout = async () => {
    try {
      const res = axios.post(BASE_URL + "/logout", {
       
      }, {
        withCredentials: true
      }
      
    )
    dispatch(removeUser()) //this is through which we gonna remove remove user data froim the redux store 
    return Navigate("/login")



    } catch (err) {
      //redirect to error page 
    }
  }
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">DEVsoc</Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            {user && (
              <div className='flex items-center gap-x-16'>
                <p>welcome : {user.firstName}</p>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">



                  <div className="w-10 ">

                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoUrl} />
                  </div>
                </div>
              </div>
            )}

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a onClick={handlelogout}>Logout</a></li>
              <li><Link to="/connections">My Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header 