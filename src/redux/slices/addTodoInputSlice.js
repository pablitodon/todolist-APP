import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textInput:'',
};


const addTodoInput =  createSlice({
    name:'input',
    initialState,
    reducers: {
        setValueInput: (state, action) => {
            state.textInput = action.payload;
        },
    }
})
export const { setValueInput } = addTodoInput.actions;

export default addTodoInput.reducer;