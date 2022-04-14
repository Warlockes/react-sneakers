import { RootState } from "../../store";
import { LoadingStatus } from "../sneakers/sneakersSlice";

export const selectOrsersState = (state: RootState) => state.orders;

export const selectIsOrdersItemsLoading = (state: RootState) =>
  selectOrsersState(state).loadingStatus === LoadingStatus.LOADING;
