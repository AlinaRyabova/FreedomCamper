import { RootState } from "../store";

export const selectTruckItems = (state: RootState) => state.truck.items;
export const selectTruckError = (state: RootState) => state.truck.error;
export const selectTruckLoading = (state: RootState) => state.truck.loading;
