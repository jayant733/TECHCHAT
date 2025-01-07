import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice.jsx";
import feedreducer from "./feedSlice.jsx"
//store consists of slices  
//
const appstore = configureStore({
    reducer : {
        addUser : userReducer,
        feed : feedreducer,
        
    }
})

export default appstore