
import { createSlice } from "@reduxjs/toolkit";


const editModeSlice = createSlice({
  name:"editMode",
  initialState : {},
  reducers: {
    changeEditMode: (state,action) => {
      state[action.payload] = !state[action.payload]
    }
  }
})
export const {changeEditMode} = editModeSlice.actions
export default editModeSlice.reducer;