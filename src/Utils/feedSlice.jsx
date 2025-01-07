import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        showfeed : (state, action) =>{
            return action.payload;

        },
        removeFeed : (state, action)=> {
            return null
        }
    }

})

export const {showfeed , removefeed} = feedslice.actions
export default feedslice.reducer