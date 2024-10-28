import { createSlice } from "@reduxjs/toolkit";

const initialState :boolean | string = true;

export const loginSlice = createSlice({
  initialState,
  name: "loginSlice",
  reducers: {
    loggedIn: (state)=>{
      return true;
    },
    loggedOut: (state)=>{
      return false;
    }
  }
});


export const { loggedIn, loggedOut } = loginSlice.actions;
export default loginSlice.reducer;