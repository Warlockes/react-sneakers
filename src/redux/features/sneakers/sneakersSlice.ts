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
  totalPrice: number;
  loadingStatus: LoadingStatus;
}

const initialState: SneakersState = {
  items: [],
  totalPrice: 0,
  loadingStatus: LoadingStatus.NEVER,
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setLoadingStatus(state, action) {
      state.loadingStatus = action.payload;
    },

    setInitialData(state, action) {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
    },

    setTotalPrice(state) {
      state.totalPrice = state.items.reduce((accum, item) => {
        if (item.added2Cart) {
          accum += item.price;
        }

        return accum;
      }, 0);
    },

    addCartItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.added2Cart = true;
        }

        return item;
      });
    },

    deleteCartItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.added2Cart = false;
        }

        return item;
      });
    },

    addFavoriteItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.added2Favorites = true;
        }

        return item;
      });
    },

    deleteFavoriteItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.added2Favorites = false;
        }

        return item;
      });
    },

    orderItems(state) {
      state.items = state.items.map((item) => ({ ...item, added2Cart: false }));
    },
  },
});

export const fetchSneakers = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingStatus(LoadingStatus.LOADING));

  try {
    const response = await API.fetchItems();
    dispatch(setInitialData(response));
    dispatch(setTotalPrice());
  } catch (error) {
    dispatch(setLoadingStatus(LoadingStatus.ERROR));
  }
};

export const fetchAddCartItem =
  (item: SneakersItem) => async (dispatch: AppDispatch) => {
    try {
      dispatch(addCartItem(item));
      dispatch(setTotalPrice());
      await API.addCartItem(item);
    } catch {
      alert("Ошибка при добавлении товара в корзину");
    }
  };

export const fetchDeleteCartItem =
  (item: SneakersItem) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteCartItem(item.id));
      dispatch(setTotalPrice());
      await API.deleteCartItem(item);
    } catch {
      alert("Ошибка при удалении товара из корзины");
    }
  };

export const fetchAddFavoriteItem =
  (item: SneakersItem) => async (dispatch: AppDispatch) => {
    try {
      dispatch(addFavoriteItem(item));
      await API.addFavoriteItem(item);
    } catch {
      alert("Ошибка при добавлении товара в избранное");
    }
  };

export const fetchDeleteFavoriteItem =
  (item: SneakersItem) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteFavoriteItem(item.id));
      await API.deleteFavoriteItem(item);
    } catch {
      alert("Ошибка при удалении товара из избранного");
    }
  };

export const fetchOrder =
  (items: SneakersItem[]) => async (dispatch: AppDispatch) => {
    try {
      dispatch(orderItems());
      dispatch(setTotalPrice());
      await API.orderItems(items);
    } catch {
      alert("Ошибка при создании заказа");
    }
  };

export const {
  setLoadingStatus,
  setInitialData,
  setTotalPrice,
  addCartItem,
  deleteCartItem,
  addFavoriteItem,
  deleteFavoriteItem,
  orderItems,
} = sneakersSlice.actions;

export default sneakersSlice.reducer;
