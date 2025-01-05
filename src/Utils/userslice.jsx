import { createSlice } from "@reduxjs/toolkit";


//in main store we have reducer and in slices we have reducers 
const userslice = createSlice({
    name : "user",
    initialState : null, //initail state is null
    reducers : {
        //in the reducers we write the reducer that contain an action and a payloadstate

        addUser : (state, action) => {
            return action.payload ;
        },
        removeUser : (state, action) => {
            return null;
        }
        
    }
})

export const {addUser , removeUser} = userslice.actions

export default userslice.reducer

//steps redux toolkit+ react redux package 
//then create the store using create store and have reducer 
//then create a slice userslick which have name initial state and then reducers which contain mulitple reducer 