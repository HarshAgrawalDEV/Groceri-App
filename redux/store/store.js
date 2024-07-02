import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slices/tokenSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    cart: cartReducer,
  },
});
