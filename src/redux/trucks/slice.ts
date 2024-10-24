import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTrucks } from "./operation";

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

const trucksSlice = createSlice({
  name: "allTrucks",
  initialState,
  reducers: {
    activateLoader(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllTrucks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { activateLoader } = trucksSlice.actions;

export default trucksSlice.reducer;
