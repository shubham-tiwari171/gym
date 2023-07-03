import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
    },
    logout: (state, action) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
