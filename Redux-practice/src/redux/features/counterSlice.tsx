// create slice
import { createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});

// export actions
export const { increment, decrement } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;
