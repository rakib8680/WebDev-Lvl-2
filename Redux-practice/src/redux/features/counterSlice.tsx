// create slice
import { createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// export actions
export const { increment, decrement, incrementBy } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;
