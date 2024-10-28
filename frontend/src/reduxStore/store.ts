import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/isLogin/login.slice";
import socketSlice from "./slices/socket/socket.slice";
import battleSlice from "./slices/battle/battle.slice";

export const store = configureStore({
  reducer: {
    socketIo: socketSlice,
    battles: battleSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch