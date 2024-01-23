// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  email: string;
  role: string;
  loggedIn: boolean;
  password: string;
}

interface AuthState {
  user: Auth | null;
  loggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
