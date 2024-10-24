import { RootState } from "../store";

export const selectIsFavoritedId = (state: RootState) => state.favorite.items;
