import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sneakersReducer from "./features/sneakers/sneakersSlice";
import ordersReducer from "./features/orders/ordersSlice";
import seacrhReducer from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sneakers: sneakersReducer,
    orders: ordersReducer,
    search: seacrhReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
