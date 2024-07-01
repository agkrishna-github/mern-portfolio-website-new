import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/baseUrl";

const initialState = {
  headerDetails: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getHeaderDetails = createAsyncThunk(
  "headerDetails/getHeaderDetails",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `${base_url}headerDetails/getheaderdetails`
      );
      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const headerSlice = createSlice({
  name: "headerDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeaderDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHeaderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.headerDetails = action?.payload;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
      })
      .addCase(getHeaderDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default headerSlice.reducer;
