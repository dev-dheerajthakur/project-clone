import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState :any= "initial socket string"

export const socketSlice = createSlice({
  initialState,
  name: "socketSlice",
  reducers: {
    setSocket : (state, payload)=>{
      return payload;
    }
  }
});

export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;