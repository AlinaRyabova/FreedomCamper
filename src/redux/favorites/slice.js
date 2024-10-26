import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavoriteTruck(state, action) {
      state.items.find((item) => item.id === action.payload.id)
        ? (state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          ))
        : state.items.push(action.payload);
    },
  },
});

export const { toggleFavoriteTruck } = favoriteSlice.actions;

export default favoriteSlice.reducer;
