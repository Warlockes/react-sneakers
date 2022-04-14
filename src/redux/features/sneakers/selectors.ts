import { RootState } from "../../store";
import { LoadingStatus } from "../sneakers/sneakersSlice";

export const selectSneakersState = (state: RootState) => state.sneakers;

export const selectIsSneakersLoading = (state: RootState) =>
  selectSneakersState(state).loadingStatus === LoadingStatus.LOADING;
