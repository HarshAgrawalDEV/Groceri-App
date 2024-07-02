import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
    id: null,
    name: null,
    email: null,
  },
  reducers: {
    setToken: (state, action) => {
      const { token, id, email, name } = action.payload;
      state.token = token;
      state.id = id;
      state.name = name;
      state.email = email;
    },
    clearToken: (state) => {
      state.token = null;
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export const storeToken = (token, id, email, name) => async (dispatch) => {
  try {
    await SecureStore.setItemAsync("token", token);
    dispatch(setToken({ token, id, email, name }));
  } catch (error) {
    console.error("Failed to store token:", error);
  }
};

export const retrieveToken = () => async (dispatch) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    if (token !== null) {
      dispatch(setToken(token));
    }
  } catch (error) {
    console.error("Failed to retrieve token:", error);
  }
};

export const selectToken = (state) => state.token.token;
export const selectUserId = (state) => state.token.id;
export const selectEmail = (state) => state.token.email;
export const selectName = (state) => state.token.name;

export default tokenSlice.reducer;
