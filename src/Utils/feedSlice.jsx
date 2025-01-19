import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    showfeed: (state, action) => {
      return action.payload;  // Sets the entire feed array
    },
    removeFeed: (state, action) => {
      // Remove by _id
      const newArray = Array.isArray(state) ? state.filter((user) => user._id !== action.payload) : [];
      return newArray
    }
  }
});

export const { showfeed, removeFeed } = feedslice.actions;
export default feedslice.reducer;
