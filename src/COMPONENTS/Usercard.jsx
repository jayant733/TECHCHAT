import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../Utils/constants";

import { removeFeed } from "../Utils/feedSlice";




const RequestComponent = ({ user }) => {
  const dispatch = useDispatch();
  console.log(user)
  const handlerequest = async (status, userId) => {
    try {
      const res = await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, {
        withCredentials: true
      });

      // Handle the response (dispatch an action if needed)
      console.log(res.data)
      dispatch(removeFeed(res.data))
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <>
      {user && (
        <div>
          <h2>User Request</h2>
          <p>Name: {user.firstName}</p>
          <p>Email: {user.emailId}</p>
          <button onClick={() => handlerequest("accepted", user._id)}>Interested</button>
          <button onClick={() => handlerequest("ignored", user._id)}>Rejected</button>
        </div>
      )}
    </>
  );
};

export default RequestComponent;
