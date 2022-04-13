import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  isOpenCart: boolean;
}

const initialState: CartState = {
  isOpenCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisible: (state) => {
      state.isOpenCart = !state.isOpenCart;
    },
  },
});

export const { toggleCartVisible } = cartSlice.actions;

export default cartSlice.reducer;
