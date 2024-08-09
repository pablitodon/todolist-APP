import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fetchPostRegisterUser = createAsyncThunk(
  "form/fetchPostRegisterUser",
  async (formData) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL_REGISTER,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );
      return response.data
    } catch (error) {
       alert(error.response.data.message);
    }
  }
);

const formRegisterUserSlice = createSlice({
  name: "formRegisterUser",
  initialState:{},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostRegisterUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPostRegisterUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      
        console.log(action.payload);
        
      })
      .addCase(fetchPostRegisterUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchPostRegisterUser };
export default formRegisterUserSlice.reducer;


