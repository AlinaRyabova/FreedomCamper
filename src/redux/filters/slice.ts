import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersValue {
  location: string;
  transmission: string;
  engine: string;
  form: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

interface FilterState {
  filtersValue: FiltersValue;
}

// Початковий стан
const initialState: FilterState = {
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
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilters(state, action: PayloadAction<Partial<FiltersValue>>) {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state.filtersValue) {
          const typedKey = key as keyof FiltersValue;
          (state.filtersValue[typedKey] as typeof value) = value;
        }
      });
    },
    resetFilters(state) {
      state.filtersValue = initialState.filtersValue;
    },
  },
});

export const { addFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
