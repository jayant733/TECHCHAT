import React, { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../Utils/ConnectionSlice'

const Connections = () => {
  const dispatch = useDispatch()

  const connections = useSelector((store) => store.connection)
  console.log(connections)
  const fetchconnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/connections ", { withCredentials: true })
      console.log(response.data.data)
      dispatch(addConnections(response.data.data))
    }
    catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchconnections()
  }, []);

  if (!connections) {
    return
  }

  if (connections.length === 0) {
    return (<h1> NO CONNECTIONS FOUND </h1>)
  }

  return (
    <>
      <div className='flex justify-center my-10'>
        <h1 className='text-bold font-bold text-white text-2xl'>Connections</h1>
      </div>



      <div >
        {connections.map((connect) => {
          const {  _id , firstName, lastName, photoUrl, gender, age, about } = connect.fromUserId;





          return (

            <div key={_id}>
              <img src={photoUrl}></img>
              <h1 className='font-bold'>{
                firstName
                + " " + lastName} </h1>
              <h1>
                {age && gender && `${gender} ${age}`}
              </h1>

              <p>{about}</p>


            </div>
          )
        })}

      </div>

    </>


  )
}

export default Connections