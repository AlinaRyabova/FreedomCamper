import { RootState } from "../store";

export const selectPaginationPage = (state: RootState) =>
  state.pagination.value;
