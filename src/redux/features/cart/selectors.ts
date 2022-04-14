import { RootState } from "../../store";
import { LoadingStatus } from "../sneakers/sneakersSlice";

export const selectCartState = (state: RootState) => state.cart;

export const selectIsCartItemsLoading = (state: RootState) =>
  selectCartState(state).loadingStatus === LoadingStatus.LOADING;
