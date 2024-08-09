import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

// ADD_TODO_GET


const getTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL_TODOS, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("myToken")}`,
      accept: "application/json",
    },
  });
  return response;
};

const fetchGetTodos = createAsyncThunk("todos/getTodos", async () => {
  const { data } = await getTodos();
  return data;
});


// fetchPOST_TODO
const postTodo = async (dataText) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL_TODOS,
    { title: dataText },
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("myToken")}`,
        "accept": "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const fetchPostTodo = createAsyncThunk("todos/postTodo", async (dataText) => {
  const { data } = await postTodo(dataText);
  return data;
});

// FETCH_DELETE_TODO

const deleteTodo = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL_TODOS}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        accept: "application/json",
      },
    }
  );
  return response;
};
const fetchDeleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const { data } = await deleteTodo(id);
  return data;
});

//Fetch_EDIT

const patchTodo = async (id, newText) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL_TODOS}/${id}`,
    { title: newText },
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("myToken")}`,
        "accept": "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

const fetchPatchTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ id, newText }) => {
    const { data } = await patchTodo(id, newText);
    return data;
  }
);

// fetchPAtchCOMPLETE_TODO
// fetchPAtchCOMPLETE_TODO
// fetchPAtchCOMPLETE_TODO


const completeTodo = async(id,completed) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL_TODOS}/${id}/isCompleted`,
    {isCompleted:completed},
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("myToken")}`,
        "accept": "application/json",
      },
    }
  )
  return response
}

const fetchPatchCompleteTodo = createAsyncThunk(
  "todos/patchCompleteTodo",
   async (id,isCompleted) => {
  const {data} = await completeTodo(id, isCompleted);
  return data
});


const todosSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const existingTodo = state.data.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGetTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGetTodos.rejected, (state, action) => {
        state.status = "reject";
        state.error = action.payload;
      })
      .addCase(fetchPostTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((todo) => todo.id !== action.payload.id);
      })
      .addCase(fetchPatchTodo.fulfilled, (state,action) => {
        state.status = "succeeded";
      })
      .addCase(fetchPatchCompleteTodo.fulfilled,(state,action) => {
        state.status = "succeeded";
        const updatedTodo = action.payload[0];
        console.log(updatedTodo); 
        const existingTodo = state.data.find((todo) => todo.id === updatedTodo.id);
        console.log(existingTodo); 
        if (existingTodo) {
          existingTodo.isCompleted = updatedTodo.isCompleted; 
        }
        })
  },
});
export { fetchGetTodos, fetchPostTodo, fetchDeleteTodo, fetchPatchTodo,fetchPatchCompleteTodo};
export const { updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
