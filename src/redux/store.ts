import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sneakersReducer from "./features/sneakers/sneakersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sneakers: sneakersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
