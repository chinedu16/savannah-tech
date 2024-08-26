// store/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
  priority: "high" | "medium" | "low";
  date: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    replaceTodos: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, editTodo, replaceTodos } = todoSlice.actions;
export default todoSlice.reducer;
