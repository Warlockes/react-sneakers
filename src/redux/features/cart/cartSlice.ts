import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { AppDispatch } from "../../store";
import { LoadingStatus, SneakersItem } from "../sneakers/sneakersSlice";

export interface CartState {
  isOpenCart: boolean;
  items: SneakersItem[];
  loadingStatus: LoadingStatus;
  totalPrice: number;
}

const initialState: CartState = {
  isOpenCart: false,
  items: [],
  loadingStatus: LoadingStatus.NEVER,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisible(state) {
      state.isOpenCart = !state.isOpenCart;
    },

    setCartItems(state, action) {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
      state.totalPrice = state.items.reduce(
        (accum, item) => accum + item.price,
        0
      );
    },

    setLoadingStatus(state) {
      state.loadingStatus = LoadingStatus.LOADING;
    },
  },
});

export const fetchCartItems = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus());
  const response = await API.fetchCartItems();
  dispatch(setCartItems(response));
};

export const { toggleCartVisible, setCartItems, setLoadingStatus } =
  cartSlice.actions;

export default cartSlice.reducer;
