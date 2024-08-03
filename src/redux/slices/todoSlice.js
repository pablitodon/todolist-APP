import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        text: action.payload,
        isCompleted: false,
      });
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setValueEdit: (state,action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if(todo) {
        todo.text = action.payload.text
      }
    }
  },
});

export const { addTodo, completeTodo, deleteTodo, setValueEdit} = todoSlice.actions;
export default todoSlice.reducer;
