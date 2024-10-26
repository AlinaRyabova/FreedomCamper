import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filtersValue: {
      location: "",
      transmission: "",
      engine: "",
      form: "",
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
  },
  reducers: {
    addFilters(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state.filtersValue[key] = action.payload[key];
      });
    },
    resetFilters(state) {
      state.filtersValue = {
        location: "",
        transmission: "",
        engine: "",
        form: "",
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      };
    },
  },
});

export const { addFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
