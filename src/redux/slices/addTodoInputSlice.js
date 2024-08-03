import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueInput: '',
};

const inputSlice = createSlice({
    name:"input",
    initialState,
    reducers: {
        setValueInput: (state,action) => {
          state.valueInput = action.payload;
        }
    }
})

export const { setValueInput } = inputSlice.actions;

export default inputSlice.reducer;