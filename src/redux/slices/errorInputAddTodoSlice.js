import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valueErr : ''
}

const errorInputAddTodoSlice = createSlice({
    name: "inputErrAddTodo",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.valueErr = action.payload;
        },
        clearError: (state) => {
            state.valueErr = " ";
        }
    }
})

export const {setError,clearError} = errorInputAddTodoSlice.actions
export default errorInputAddTodoSlice.reducer