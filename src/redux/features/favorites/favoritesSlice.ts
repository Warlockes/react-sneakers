import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";
import { LoadingStatus, SneakersItem } from "../sneakers/sneakersSlice";

export interface FavoritesState {
  items: SneakersItem[];
  loadingStatus: LoadingStatus;
}

const initialState: FavoritesState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesItems(state, action) {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
    },

    setLoadingStatus(state) {
      state.loadingStatus = LoadingStatus.LOADING;
    },
  },
});

export const fetchFavoritesItems = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus());
  const response = await API.fetchFavoritesItems();
  dispatch(setFavoritesItems(response));
};

export const { setFavoritesItems, setLoadingStatus } = favoritesSlice.actions;

export default favoritesSlice.reducer;
