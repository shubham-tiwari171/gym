import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => (state.value += 1),
    decrement: (state, action) => (state.value -= 1),
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
