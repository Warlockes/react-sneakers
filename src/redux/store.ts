import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sneakersReducer from "./features/sneakers/sneakersSlice";
import ordersReducer from "./features/orders/ordersSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sneakers: sneakersReducer,
    orders: ordersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
