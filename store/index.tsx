// in src/app/store.tsx

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
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
