import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";
import { LoadingStatus } from "../sneakers/sneakersSlice";

export interface Order {
  order: string[];
  orderNumber: string;
}

export interface OrdersState {
  orders: Order[];
  loadingStatus: LoadingStatus;
}

const initialState: OrdersState = {
  orders: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setLoadingStatus(state, action) {
      state.loadingStatus = action.payload;
    },

    setOrders(state, action) {
      state.orders = action.payload;
    },

    addOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const fetchOrders = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus(LoadingStatus.LOADING));

  try {
    const response = await API.fetchOrders();
    dispatch(setOrders(response));
    dispatch(setLoadingStatus(LoadingStatus.LOADED));
  } catch {
    dispatch(setLoadingStatus(LoadingStatus.ERROR));
  }
};

export const { setLoadingStatus, setOrders, addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
