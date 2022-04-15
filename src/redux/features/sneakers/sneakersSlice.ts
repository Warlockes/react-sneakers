import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";

export interface SneakersItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  added2Cart: boolean;
  added2Favorites: boolean;
}

export enum LoadingStatus {
  NEVER = "NEVER",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export interface SneakersState {
  items: SneakersItem[];
  cartItems: SneakersItem[];
  favoriteItems: SneakersItem[];
  loadingStatus: LoadingStatus;
}

const initialState: SneakersState = {
  items: [],
  cartItems: [],
  favoriteItems: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setLoadingStatus(state) {
      state.loadingStatus = LoadingStatus.LOADING;
    },

    setInitialData(state, action) {
      state.items = action.payload;
      state.cartItems = state.items.filter((item) => item.added2Cart);
      state.favoriteItems = state.items.filter((item) => item.added2Favorites);
      state.loadingStatus = LoadingStatus.LOADED;
    },
  },
});

export const fetchSneakers = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus());
  const response = await API.fetchItems();
  dispatch(setInitialData(response));
};

export const { setLoadingStatus, setInitialData } = sneakersSlice.actions;

export default sneakersSlice.reducer;
