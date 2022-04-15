import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";
import { LoadingStatus, SneakersItem } from "../sneakers/sneakersSlice";

export interface OrdersState {
  items: SneakersItem[];
  loadingStatus: LoadingStatus;
}

const initialState: OrdersState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersItems(state, action) {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
    },

    setLoadingStatus(state) {
      state.loadingStatus = LoadingStatus.LOADING;
    },
  },
});

export const { setOrdersItems, setLoadingStatus } = ordersSlice.actions;

export default ordersSlice.reducer;
