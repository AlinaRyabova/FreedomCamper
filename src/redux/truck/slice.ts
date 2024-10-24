import { createSlice } from "@reduxjs/toolkit";
import { fetchTruck } from "./operation";

interface TruckState {
  items: [];
  loading: boolean;
  error: boolean;
}

const initialState: TruckState = {
  items: [],
  loading: false,
  error: false,
};

const detailTruckSlice = createSlice({
  name: "truck",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTruck.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTruck.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default detailTruckSlice.reducer;
