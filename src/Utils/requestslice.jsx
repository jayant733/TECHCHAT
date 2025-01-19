import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : "requests",
    initialState : null,
    reducers : {
        addRequests : (state, action)=> {
            return action.payload;
        }, 
        removerequest : (state , action) => {

            /* state is the actual array which is created with addrequests */

            const array = state.filter(r => {r._id !== action.payload})

            return array
        }

    }
})
export const {addRequests, removerequest}= requestSlice.actions

export default requestSlice.reducer
