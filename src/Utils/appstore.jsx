import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice.jsx";
import feedreducer from "./feedSlice.jsx"
import connectionreducer from "./ConnectionSlice.jsx"
import requestreducer from "./requestslice.jsx"
//store consists of slices  
//
const appstore = configureStore({
    reducer : {
        addUser : userReducer,
        feed : feedreducer,
        connection : connectionreducer,
        requestuser : requestreducer
        
        
    }
})

export default appstore