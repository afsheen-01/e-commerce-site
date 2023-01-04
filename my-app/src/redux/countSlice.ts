import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { CartProduct } from "../types";

const initialState: CartProduct[] = [];

const changeCount = (
  state: WritableDraft<CartProduct[]>,
  action: { payload: CartProduct; type: string }
) => {
  console.log(state, action.payload);
  return (state = state.map((item) => {
    if (item.productId === action.payload.productId) {
      return { ...item, quantity: action.payload.quantity };
    }
    return item;
  }));
};

export const countReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCount: (state, action) => {
      return changeCount(state, action);
    },
  },
});

export const { updateCount } = countReducer.actions;

export default countReducer.reducer;
