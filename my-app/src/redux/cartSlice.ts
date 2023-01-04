import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Product } from "../types";

const initialState: Product[] = [];

const handleCartChange = (
  action: { payload: Product; type: string },
  state: WritableDraft<Product[]>
) => {
  if (state.find((item) => item.quantity === 0)) {
    return (state = state.filter(
      (item) => item?.quantity && item?.quantity > 0
    ));
  }
  if (!state.find((item) => item.id === action.payload.id)) {
    return (state = [...state, action.payload]);
  }
  return state;
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      return handleCartChange(action, state);
    },
  },
});

export const { updateCart } = cartReducer.actions;

export default cartReducer.reducer;
