import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoggedIn: false,
    userObject: {},
  },
  reducers: {
    login: (state, action) => {
      state.userObject = action.payload;
      state.isUserLoggedIn = true;
    },
    logout: (state, action) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
