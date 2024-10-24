import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTruck = createAsyncThunk(
  "fetchTruck",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
