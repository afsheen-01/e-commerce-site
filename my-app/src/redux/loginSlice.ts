import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { UserState } from "../types";
import { RootState } from "./store";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

const setUserCredentials = (
  action: { payload: UserState; type: string },
  state: WritableDraft<{
    username: string;
    password: string;
    isLoggedIn: boolean;
  }>
) => {
  return {
    ...state,
    ...action.payload,
  };
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateCredentials: (state, action) => {
      return setUserCredentials(action, state);
    },
  },
});

export const { updateCredentials } = loginSlice.actions;
export const selectUserCredentials = (state: RootState) => state.login;

export default loginSlice.reducer;
