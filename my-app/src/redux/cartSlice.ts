import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Product } from "../types";
import { RootState } from "./store";

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

const changeCount = (
  state: WritableDraft<Product[]>,
  action: { payload: { id: number; quantity: number }; type: string }
) => {
  return (state = state.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: action.payload.quantity };
    }
    return item;
  }));
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      return handleCartChange(action, state);
    },
    updateCount: (state, action) => {
      return changeCount(state, action);
    },
  },
});

export const { updateCart, updateCount } = cartReducer.actions;
export const setCartitems = (state: RootState) => state.cart;

export default cartReducer.reducer;
