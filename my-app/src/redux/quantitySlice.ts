import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

const initialState: CartProduct[] = [];

export const quantityReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (index === -1) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
      return state;
    },
    decreaseQuantity: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (state[index].quantity > 0) {
        state[index].quantity -= 1;
      }
      return state;
    },
    clearCart: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, clearCart } =
  quantityReducer.actions;

export default quantityReducer.reducer;
