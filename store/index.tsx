// in src/app/store.tsx

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
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
