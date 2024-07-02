// import { createSlice } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const loadCartFromLocalStorage = async () => {
//   const cart = JSON.parse(AsyncStorage.getItem("cart")) || {
//     items: [],
//     totalQuantity: 0,
//   };
//   return cart;
// };

// const saveCartToLocalStorage = (cart) => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: loadCartFromLocalStorage(),
//   reducers: {
//     addItemToCart: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find(
//         (item) => item.name === newItem.name
//       );

//       if (existingItem) {
//         existingItem.quantity += newItem.quantity;
//         if (existingItem.quantity < 0) {
//           existingItem.quantity = 0;
//         }
//       } else {
//         state.items.push(newItem);
//       }

//       state.totalQuantity = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       saveCartToLocalStorage(state);
//     },
//     removeItemFromCart: (state, action) => {
//       const name = action.payload;
//       const existingItem = state.items.find((item) => item.name === name);

//       if (existingItem) {
//         state.items = state.items.filter((item) => item.name !== name);
//         state.totalQuantity = state.items.reduce(
//           (total, item) => total + item.quantity,
//           0
//         );
//       }

//       saveCartToLocalStorage(state);
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalQuantity = 0;
//       saveCartToLocalStorage(state);
//     },
//   },
// });

// export const { addItemToCart, removeItemFromCart, clearCart } =
//   cartSlice.actions;

// export const selectCartItems = (state) => state.cart.items;
// export const selectTotalQuantity = (state) => state.cart.totalQuantity;

// export default cartSlice.reducer;
