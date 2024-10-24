import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  value: number;
}

const initialState: PaginationState = {
  value: 4,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
    addValue(state, action) {
      state.value += action.payload;
    },
  },
});

export const { changeValue, addValue } = paginationSlice.actions;
export default paginationSlice.reducer;
