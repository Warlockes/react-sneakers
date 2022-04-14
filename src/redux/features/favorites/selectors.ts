import { RootState } from "../../store";
import { LoadingStatus } from "../sneakers/sneakersSlice";

export const selectFavoritesState = (state: RootState) => state.orders;

export const selectIsFavoritesItemsLoading = (state: RootState) =>
  selectFavoritesState(state).loadingStatus === LoadingStatus.LOADING;
