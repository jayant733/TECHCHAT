import React from 'react'

const Usercard = ({user}) => {
   const {firstName , lastName , photourl, age , gender , about } = user;
    console.log(photourl)
    console.log(firstName)
   return (
    <div><div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
     
     <img src={photourl} alt='default photo'></img>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && (<p>{age + " " + gender}</p>)}
        <p>{about}</p>
      <div className="card-actions justify-end">
        <button className="btn bg-pink-600">Ignore</button>
        <button className="btn bg-blue-700">Accept <br></br>Request</button>
      </div>
    </div>
  </div></div>
  )
}

export default Usercard