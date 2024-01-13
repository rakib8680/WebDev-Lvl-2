import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // toggleComplete: (state, action: PayloadAction<string>) => {                         //Not optimized
    //   const task = state.todos.find((todo) => todo.id === action.payload);
    //   task!.isCompleted = !task?.isCompleted;
    // },
    toggleComplete: (state, action: PayloadAction<string>) => {
      //Optimized
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload) {
          state.todos[i].isCompleted = !state.todos[i].isCompleted;
          break;
        }
      }
      state.todos.sort(
        (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
      );
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
