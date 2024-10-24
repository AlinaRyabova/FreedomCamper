import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Truck {
  id: string;
  name: string;
}

interface FavoriteState {
  items: Truck[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavoriteTruck(state, action: PayloadAction<Truck>) {
      const existingTruckIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingTruckIndex !== -1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavoriteTruck } = favoriteSlice.actions;
export default favoriteSlice.reducer;
