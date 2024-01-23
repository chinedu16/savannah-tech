// in src/app/store.tsx

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import accountReducer from "../features/accountSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    account: accountReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // <-- Change this if you have a specific type for your extra argument
  Action<string>
>;

export default store;
