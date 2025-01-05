import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice.jsx";
//store consists of slices  
//
const appstore = configureStore({
    reducer : {
        addUser : userReducer,
        
    }
})

export default appstore