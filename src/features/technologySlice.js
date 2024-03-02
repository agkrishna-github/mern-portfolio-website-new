import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/baseUrl";

const initialState = {
  technologies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllTechnologies = createAsyncThunk(
  "technology/getAllTechnologies",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`${base_url}technology/`);
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTechnologies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTechnologies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
        state.technologies = action?.payload;
      })
      .addCase(getAllTechnologies.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default technologySlice.reducer;
