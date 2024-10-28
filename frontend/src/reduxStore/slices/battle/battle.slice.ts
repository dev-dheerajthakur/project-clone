import { createSlice } from "@reduxjs/toolkit";

const initialState :{} | any = {};

export const battleSlice = createSlice({
  initialState,
  name: "battleSlice",
  reducers: {
    setBattle: (state, payload)=>{
      return payload.payload
    }
  }
});


export const { setBattle } = battleSlice.actions;
export default battleSlice.reducer;