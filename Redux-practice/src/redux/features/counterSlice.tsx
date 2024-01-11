import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  count: number;
};

const initialState: TInitialState = { count: 0 };

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
