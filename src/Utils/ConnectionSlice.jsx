import { createSlice } from "@reduxjs/toolkit";

const connectionslice = createSlice({
    name : "connection",
    initialState : null,
    addConnections: [],
    reducers :{
        addConnections : (state, action) => {
           return  action.payload
        },
        removeConnection : ()=> null
    }
})

export const {addConnections, removeConnection}= connectionslice.actions;

export default connectionslice.reducer;