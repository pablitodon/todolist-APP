import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};


const postLoginUser = async (formData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
  return response;
};

const fetchPostLoginUser = createAsyncThunk(
  "form/fetchPostLoginUser",
  async (formData) => {
    const response = await postLoginUser(formData);
    return response.data;
  }
);

const formAuthorizationSlice = createSlice({
  name: "authorizationUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostLoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPostLoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        localStorage.setItem('myToken',action.payload.token)

      })
      .addCase(fetchPostLoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchPostLoginUser };
export default formAuthorizationSlice.reducer;
