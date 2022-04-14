import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";

export interface SneakersItem {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}

export enum LoadingStatus {
  NEVER = "NEVER",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export interface SneakersState {
  items: SneakersItem[];
  loadingStatus: LoadingStatus;
}

const initialState: SneakersState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setLoadingStatus(state) {
      state.loadingStatus = LoadingStatus.LOADING;
    },
    setSneakersData(state, action) {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
    },
  },
});

export const { setLoadingStatus, setSneakersData } = sneakersSlice.actions;

export const fetchSneakers = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus());
  const response = await API.fetchSneakers();
  dispatch(setSneakersData(response));
};

export default sneakersSlice.reducer;
