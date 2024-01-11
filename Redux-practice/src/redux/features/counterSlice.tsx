// // create slice
// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// // define initial state
// type CounterType = {
//   count: number;
// };
// const initialState: CounterType = { count: 0 };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     incrementBy: (state, action: PayloadAction<number>) => {
//       state.count += action.payload;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//   },
// });

// // export actions
// export const { increment, decrement, incrementBy } = counterSlice.actions;

// // export reducer
// export default counterSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, incrementBy, decrement, decrementBy } =
  counterSlice.actions;

export default counterSlice.reducer;
